const { AuthenticationError } = require("apollo-server-express");
const { User, Product, Category, Order, TempKey } = require("../models");
const { signToken, signTempToken, verify } = require("../utils/auth");
const stripe = require("stripe")("sk_test_4eC39HqLyjWDarjtT1zdp7dc");
const EasyPostClient = require("@easypost/api");
const nodemailer = require("nodemailer");
require("dotenv").config();

const resolvers = {
  Query: {
    categories: async () => {
      return await Category.find();
    },
    products: async (parent, { category, name }) => {
      const params = {};

      if (category) {
        params.category = category;
      }

      if (name) {
        params.name = {
          $regex: name,
        };
      }

      return await Product.find(params).populate("category");
    },
    product: async (parent, { _id }) => {
      return await Product.findById(_id).populate("category");
    },
    user: async (parent, args, context) => {
      if (context.user) {
        const user = await User.findById(context.user._id).populate({
          path: "orders.products",
          populate: "category",
        });

        user.orders.sort((a, b) => b.purchaseDate - a.purchaseDate);

        return user;
      }

      throw new AuthenticationError("Not logged in");
    },
    adminOrderView: async (parent, args, context) => {
      if (!context.user.isAdmin) {
        throw new AuthenticationError("Not authorized to make this action.");
      }

      try {
        const orders = await Order.find()
          .populate({
            path: "products",
            populate: "category",
          })
          .sort({ createdAt: -1 });
        return orders;
      } catch (err) {
        console.log(err);
        throw new Error("An error occurred while fetching the data.");
      }
    },
    queryUserAdmin: async (parent, args, context) => {
      if (context.user.isAdmin !== true) {
        throw new AuthenticationError("Not authorized to make this action.");
      }
      try {
        const user = User.find().select("-_V -password");
        return user;
      } catch (err) {
        console.log(err);
      }
    },
    order: async (parent, { _id }, context) => {
      if (context.user) {
        const user = await User.findById(context.user._id).populate({
          path: "orders.products",
          populate: "category",
        });

        return user.orders.id(_id);
      }

      throw new AuthenticationError("Not logged in");
    },
    calcShip: async (parent, args, context) => {
      await args;
      const length = 4 * args.productInt;
      const width = 3.5 * args.productInt;
      const weight = 1 * args.productInt;
      const height = 3.5 * args.productInt;

      const api = process.env.EP_KEY;
      const client = new EasyPostClient(api);
      const user = await User.findById(context.user._id).select(
        "-_V -password"
      );

      const shipment = await client.Shipment.create({
        from_address: {
          street1: "14865 HWY 92",
          street2: "SUITE 5",
          city: "WOODSTOCK",
          state: "GA",
          zip: "30188",
          country: "US",
          company: "EasyPost",
          phone: "(470) 228-5181",
        },
        to_address: {
          name: `${user.firstName} ${user.lastName}`,
          street1: user.street,
          city: user.city,
          state: user.state,
          zip: user.zip,
          country: "US",
          phone: "4155559999",
        },
        parcel: {
          length: length,
          width: width,
          height: height,
          weight: weight,
        },
      });

      return shipment;
      // const boughtShipment = await client.Shipment.buy(shipment.id, shipment.lowestRate(['USPS']));
      // return boughtShipment;
    },

    checkout: async (parent, args, context) => {
      // ensure shipping
      if (args.shipPrice <= 0) {
        throw new AuthenticationError("Shipping price was not set.");
      }

      if (args.points > 0) {
        console.log(args.points);
      }

      const url = new URL(context.headers.referer).origin;
      const order = new Order({ products: args.products });
      const shippingPrice = args.shipPrice * 100;
      const line_items = [];

      // push each product as line item

      const { products } = await order.populate("products");

      for (let i = 0; i < products.length; i++) {
        const product = await stripe.products.create({
          name: products[i].name,
          description: products[i].description,
          images: [`${products[i].image}`],
        });

        const price = await stripe.prices.create({
          product: product.id,
          unit_amount: products[i].price * 100,
          currency: "usd",
        });

        line_items.push({
          price: price.id,
          quantity: 1,
        });
      }

      // add shipping price line item

      line_items.push({
        price_data: {
          currency: "usd",
          unit_amount: shippingPrice,
          product_data: {
            name: "Shipping",
            description: "Shipping fee",
          },
        },
        quantity: 1,
      });

      // create stripe sesssion

      const session = await stripe.checkout.sessions.create({
        payment_method_types: ["card"],
        line_items,
        mode: "payment",
        success_url: `${url}/success?session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: `${url}/home`,
      });

      // create temporary acess token

      try {
        const token = signTempToken({
          id: session.id,
          total: session.amount_total,
        });

        const tempToken = new TempKey({ token, stripeSessionId: session.id });
        await tempToken.save();

        return { session: session.id };
      } catch (err) {
        console.log(err);
      }
    },
  },
  Mutation: {
    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);

      return { token, user };
    },
    addOrder: async (parent, { products, url }, context) => {
      if (context.user) {
        const session_id = url.split("=").pop();

        //token data

        const tempToken = await TempKey.findOne({
          stripeSessionId: session_id,
        });

        if (!tempToken) {
          return { message: "expired or invalid token " };
        }

        const { token } = tempToken;
        const decodedToken = verify(token);

        if (decodedToken.exp && Date.now() >= decodedToken.exp * 1000) {
          return { message: "expired or invalid token " };
        }

        const total = decodedToken.data.total;

        // user data

        const user = await User.findOne({ _id: context.user._id });
        if (!user) {
          return { message: "not logged in" };
        }

        const { firstName, lastName, street, city, state, zip } = user;
        const address = `${street} ${city}, ${state} ${zip}`;

        // saving orders with token + user data

        const order = new Order({
          products,
          firstName,
          lastName,
          address,
          total,
        });

        await User.findByIdAndUpdate(context.user._id, {
          $push: { orders: order },
        });

        await order.save();

        // delete tempkey token so endpoint cannot be hit again

        await TempKey.deleteOne({ _id: tempToken._id });

        return order;
      }

      throw new AuthenticationError("Not logged in");
    },

    updateUser: async (parent, args, context) => {
      if (context.user) {
        return await User.findByIdAndUpdate(context.user._id, args, {
          new: true,
        });
      }

      throw new AuthenticationError("Not logged in");
    },
    addShipInfo: async (parent, args, context) => {
      if (!context.user || !context.user.isVerified) {
        throw new AuthenticationError("Not logged in or not verified! ");
      }
      try {
        const user = await User.findByIdAndUpdate(context.user._id, args, {
          new: true,
        });

        return user;
      } catch (err) {
        console.log(err);
      }
    },
    idUpload: async (parent, args, context) => {
      if (context.user) {
        try {
          const user = await User.findById(context.user._id);
          user.idFront = args.idFront;
          user.idBack = args.idBack;
          const updatedUser = await user.save();
          return updatedUser;
        } catch (err) {
          console.log(err);
        }
      }
    },
    userVerifAdmin: async (parent, args, context) => {
      if (context.user.isAdmin === false) {
        throw new AuthenticationError("Must be Admin to make this Request");
      }
      try {
        const user = await User.findById(args._id).select("-_v -password");
        if (args.action === "accept") {
          user.isVerified = true;
        }
        user.idFront = "";
        user.idBack = "";
        const updatedUser = await user.save();
        return updatedUser;
      } catch (err) {
        console.log(err);
      }
    },

    addProduct: async (parent, args, context) => {
      if (context.user.isAdmin === true) {
        try {
          const category = await Category.findOne({ name: args.category });
          args.category = category._id;

          const product = await Product.create(args);
          return product;
        } catch (err) {
          console.log(err);
        }
      } else {
        throw new AuthenticationError("Must be Admin to make this Request");
      }
    },
    updateProduct: async (parent, { _id, quantity }) => {
      const decrement = Math.abs(quantity) * -1;

      return await Product.findByIdAndUpdate(
        _id,
        { $inc: { quantity: decrement } },
        { new: true }
      );
    },
    delProduct: async (parent, args, context) => {
      if (context.user.isAdmin !== true) {
        throw new AuthenticationError("Not authorized to view this page.");
      }

      const product = Product.findByIdAndRemove(args._id);
      return product;
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError("Incorrect credentials");
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError("Incorrect credentials");
      }

      const token = signToken(user);

      return { token, user };
    },
    sendMail: async (parent, args, context) => {
      const { email, name, message } = args;

      const transporter = nodemailer.createTransport({
        // service: "Gmail",
        // auth: {
        //   user: "",
        //   pass: "",
        // },
        streamTransport: true,
        newline: "unix",
      });

      try {
        const package = await transporter.sendMail({
          from: email,
          to: "sample@gmail.com",
          subject: name,
          text: message,
        });

        console.log("Email sent:", package.response);
        return true;
      } catch (error) {
        console.error("Error sending email:", error);
        return false;
      }
    },
  },
};

module.exports = resolvers;
