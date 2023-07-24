const { AuthenticationError } = require("apollo-server-express");
const { User, Product, Category, Order } = require("../models");
const { signToken } = require("../utils/auth");
const stripe = require("stripe")("sk_test_4eC39HqLyjWDarjtT1zdp7dc");
const EasyPostClient = require("@easypost/api");
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
        const orders = await Order.find();
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
      await args;
      if (args.shipPrice <= 0) {
        throw new AuthenticationError("shipping price was not set.");
      }

      const url = new URL(context.headers.referer).origin;
      const order = new Order({ products: args.products });
      const shippingPrice = args.shipPrice * 100;
      const line_items = [];

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

      const session = await stripe.checkout.sessions.create({
        payment_method_types: ["card"],
        line_items,
        mode: "payment",
        success_url: `${url}/success?session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: `${url}/`,
      });

      await order.save();

      return { session: session.id };
    },
  },
  Mutation: {
    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);

      return { token, user };
    },
    addOrder: async (parent, { products }, context) => {
      if (context.user) {
        const order = new Order({ products });

        await User.findByIdAndUpdate(context.user._id, {
          $push: { orders: order },
        });

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
  },
};

module.exports = resolvers;
