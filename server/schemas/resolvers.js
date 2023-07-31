const { AuthenticationError } = require("apollo-server-express");
const {
  User,
  Product,
  Category,
  Order,
  TempKey,
  ResetKey,
} = require("../models");
const {
  signToken,
  signTempToken,
  verify,
  signAgreement,
  resetToken,
} = require("../utils/auth");
const crypto = require("crypto");
const he = require("he");
require("dotenv").config();
const api = process.env.EP_KEY;
const stripeapi = process.env.STRIPE_KEY;
const mguser = process.env.MG_USER;
const mgpass = process.env.MG_PASS;
const mghost = process.env.MG_HOST;
const mgport = process.env.MG_PORT;
const EasyPostClient = require("@easypost/api");
const nodemailer = require("nodemailer");
const stripe = require("stripe")(stripeapi);
const client = new EasyPostClient(api);
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

let shipObj;

function randIntGen() {
  const min = 100000;
  const max = 999999;
  const randomBuffer = crypto.randomBytes(4);
  const randomNumber = randomBuffer.readUInt32BE(0);
  return min + (randomNumber % (max - min + 1));
}

const resolvers = {
  Query: {
    categories: async () => {
      try {
        return await Category.find();
      } catch (err) {
        return console.log("failed to update c048");
      }
    },
    products: async (parent, { category, name }) => {
      const params = {};

      try {
        if (category) {
          params.category = category;
        }

        if (name) {
          params.name = {
            $regex: name,
          };
        }

        return await Product.find(params).populate("category");
      } catch (err) {
        return console.log("failed to update ps067");
      }
    },
    product: async (parent, { _id }) => {
      try {
        return await Product.findById(_id).populate("category");
      } catch (err) {
        return console.log("failed to update p074");
      }
    },
    querySearch: async (parent, args, context) => {
      try {
        const regex = new RegExp(args.search, "i");

        const products = await Product.aggregate([
          {
            $lookup: {
              from: "categories",
              localField: "category",
              foreignField: "_id",
              as: "category",
            },
          },
          {
            $match: {
              $or: [
                { name: { $regex: regex } },
                { "category.name": { $regex: regex } },
              ],
            },
          },
          {
            $unwind: "$category",
          },
        ]);

        return products;
      } catch (err) {
        return console.log("search failed qs105");
      }
    },
    user: async (parent, args, context) => {
      if (context.user) {
        try {
          const user = await User.findById(context.user._id).populate({
            path: "orders.products",
            populate: "category",
          });

          user.orders.sort((a, b) => b.purchaseDate - a.purchaseDate);

          return user;
        } catch (err) {
          return console.log("something went wrong u120");
        }
      } else {
        throw new AuthenticationError("Not logged in");
      }
    },
    adminOrderView: async (parent, args, context) => {
      if (context.user.isAdmin !== true) {
        throw new AuthenticationError("Not authorized to make this action");
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
        return console.log("something went wrong aov140");
      }
    },
    queryUserAdmin: async (parent, args, context) => {
      if (context.user.isAdmin !== true) {
        throw new AuthenticationError("Not authorized to make this action");
      } else {
        try {
          const user = User.find().select("-_V -password");
          return user;
        } catch (err) {
          return console.log("something went wrong qua151");
        }
      }
    },
    order: async (parent, { _id }, context) => {
      if (context.user) {
        try {
          const user = await User.findById(context.user._id).populate({
            path: "orders.products",
            populate: "category",
          });

          return user.orders.id(_id);
        } catch (err) {
          return console.log("something went wrong o165");
        }
      } else {
        throw new AuthenticationError("Not logged in");
      }
    },
    calcShip: async (parent, args, context) => {
      await args;

      if (!context.user) {
        throw new AuthenticationError("Auth required to access.");
      }

      if (args.productInt == 0) {
        return;
      }

      const length = 4 * args.productInt;
      const width = 3.5 * args.productInt;
      const weight = 1 * args.productInt;
      const height = 3.5 * args.productInt;

      try {
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
            company: "Paradise Hemp",
            phone: "4704081148",
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

        shipObj = shipment;

        return shipment;
      } catch (err) {
        return console.log("something went wrong sc224");
      }
    },

    checkout: async (parent, args, context) => {
      if (context.user.isVerified) {
        // ensure shipping
        if (args.shipPrice <= 0) {
          throw new AuthenticationError("Shipping price was not set.");
        }

        const url = new URL(context.headers.referer).origin;
        const order = new Order({ products: args.products });
        const shippingPrice = args.shipPrice * 100;
        const line_items = [];

        // push each product as line item

        try {
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

          // handle points

          const user = await User.findOne({ _id: context.user._id });

          let couponId = null;

          if (args.points > 0) {
            if (args.points > user.points) {
              throw new AuthenticationError(
                "points used greater than user point balance."
              );
            }

            const coupon = await stripe.coupons.create({
              amount_off: args.points * 10,
              currency: "usd",
              duration: "once",
            });

            couponId = coupon.id;
          }

          // handle tax

          const taxRate = await stripe.taxRates.create({
            display_name: "Tax",
            description: "Sales Tax",
            jurisdiction: "GA",
            percentage: 8.75,
            inclusive: false,
          });

          for (let i = 0; i < line_items.length; i++) {
            line_items[i].tax_rates = [taxRate.id];
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
            discounts: couponId ? [{ coupon: couponId }] : [],
          });

          // create temporary acess token

          const token = signTempToken({
            id: session.id,
            total: session.amount_total,
            subTotal: session.amount_subtotal,
            pointsUsed: session.total_details.amount_discount,
          });

          const tempToken = new TempKey({ token, stripeSessionId: session.id });
          await tempToken.save();

          return { session: session.id };
        } catch (err) {
          return console.log("something went wrong cs334");
        }
      } else {
        throw new AuthenticationError("No auth to make action.");
      }
    },
  },
  Mutation: {
    addUser: async (parent, args) => {
      if (args.password.length < 5) {
        throw new AuthenticationError("Password is not long enough.");
      }

      if (!emailRegex.test(args.email)) {
        throw new AuthenticationError("Email is not in the correct format.");
      }

      try {
        const user = await User.create(args);
        const token = signToken(user);

        return { token, user };
      } catch (err) {
        return console.log("failed to update au357");
      }
    },
    addOrder: async (parent, { products, url }, context) => {
      if (context.user.isVerified) {
        const session_id = url.split("=").pop();

        //token data

        const tempToken = await TempKey.findOne({
          stripeSessionId: session_id,
        });

        if (!tempToken) {
          throw new AuthenticationError("expired or invalid temp token");
        }

        const { token } = tempToken;
        const decodedToken = verify(token);

        if (decodedToken.exp && Date.now() >= decodedToken.exp * 1000) {
          throw new AuthenticationError("expired or invalid temp token");
        }

        const total = decodedToken.data.total;

        // user data

        const user = await User.findOne({ _id: context.user._id });

        if (!user) {
          throw new AuthenticationError("not logged in.");
        }

        const { firstName, lastName, street, city, state, zip } = user;
        const address = `${street} ${city}, ${state} ${zip}`;

        // update user points

        if (parseInt(decodedToken.data.spentPoints) > 0) {
          const spentPoints = parseInt(decodedToken.data.spentPoints);
          user.points -= spentPoints;
        } else {
          const subTotal = decodedToken.data.subTotal;

          const pointprep = parseInt(subTotal);
          user.points += Math.floor(pointprep / 100);
        }

        // purchase ship label

        const boughtShipment = await client.Shipment.buy(
          shipObj.id,
          shipObj.lowestRate(["USPS"])
        );
        const tracking = boughtShipment.tracker.public_url;
        const shipmentId = boughtShipment.tracker.shipment_id;

        // saving orders with token + user data

        const order = new Order({
          products,
          firstName,
          lastName,
          address,
          total,
          tracking,
          shipmentId,
        });

        await User.findByIdAndUpdate(context.user._id, {
          $push: { orders: order },
        });

        await order.save();
        await user.save();

        // delete tempkey token so endpoint cannot be hit again

        await TempKey.deleteOne({ _id: tempToken._id });

        return order;
      }

      throw new AuthenticationError("Not logged in");
    },

    updateUser: async (parent, args, context) => {
      if (context.user) {
        try {
          return await User.findByIdAndUpdate(context.user._id, args, {
            new: true,
          });
        } catch (err) {
          return console.log("failed to update uu454");
        }
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
        return console.log("something went wrong asi471");
      }
    },
    idUpload: async (parent, args, context) => {
      if (context.user) {
        if (args.idFront && args.idBack) {
          try {
            const user = await User.findById(context.user._id);
            user.idFront = args.idFront;
            user.idBack = args.idBack;
            user.isIdSubmitted = true;
            user.isIdRejected = false;
            const updatedUser = await user.save();
            return updatedUser;
          } catch (err) {
            return console.log("something went wrong iu486");
          }
        }
      } else {
        throw new AuthenticationError("Requires Auth");
      }
    },
    userVerifAdmin: async (parent, args, context) => {
      if (context.user.isAdmin === true) {
        try {
          const user = await User.findById(args._id).select("-_v -password");
          if (args.action === "accept") {
            user.isVerified = true;
          }
          if (args.action === "reject") {
            user.isIdRejected = true;
            user.isIdSubmitted = false;
          }
          user.idFront = "";
          user.idBack = "";
          const updatedUser = await user.save();
          return updatedUser;
        } catch (err) {
          return console.log("something went wrong uva509");
        }
      } else {
        throw new AuthenticationError("Must be Admin to make this Request");
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
          return console.log("something went wrong ap525");
        }
      } else {
        throw new AuthenticationError("Must be Admin to make this Request");
      }
    },
    updateProduct: async (parent, { _id, quantity }) => {
      try {
        const decrement = Math.abs(quantity) * -1;

        return await Product.findByIdAndUpdate(
          _id,
          { $inc: { quantity: decrement } },
          { new: true }
        );
      } catch (err) {
        return console.log("something went wrong up541");
      }
    },
    delProduct: async (parent, args, context) => {
      if (context.user.isAdmin !== true) {
        throw new AuthenticationError("Not authorized to view this page.");
      }

      try {
        const product = Product.findByIdAndRemove(args._id);
        return product;
      } catch (err) {
        return console.log("something went wrong dp553");
      }
    },
    login: async (parent, { email, password }) => {
      if (!emailRegex.test(email)) {
        throw new AuthenticationError("Email is not in the correct format");
      }

      try {
        const user = await User.findOne({ email });

        if (user.banned === true) {
          throw new AuthenticationError("user account banned");
        }

        if (!user) {
          throw new AuthenticationError("Incorrect credentials");
        }

        const correctPw = await user.isCorrectPassword(password);

        if (!correctPw) {
          throw new AuthenticationError("Incorrect credentials");
        }

        const token = signToken(user);

        return { token, user };
      } catch (err) {
        return console.log("something went wrong l578");
      }
    },
    agreement: async (parent, args, context) => {
      try {
        const token = signAgreement(args.userChoice);
        return token;
      } catch (err) {
        return console.log("something went wrong a586");
      }
    },
    sendMail: async (parent, args, context) => {
      const { email, name, message } = args;
      const sanitizedMessage = he.encode(message);

      if (!context.user) {
        throw new AuthenticationError("Not authorized to send emails.");
      }

      if (!emailRegex.test(email)) {
        throw new AuthenticationError("Email is not in the correct format.");
      }

      try {
        let transporter = nodemailer.createTransport({
          host: mghost,
          port: mgport,
          auth: {
            user: mguser,
            pass: mgpass,
          },
        });

        await transporter.sendMail({
          from: email,
          to: "michaelvrms@gmail.com",
          subject: "Customer Contact",
          html: `
          <>
            <p style="text-align: center; font-size: 24px;">
             ${name}
            </p>
            <br>
            <div style="text-align: center; font-size: 16px;"> 
             ${sanitizedMessage}
            </div> 
          </>
        `,
        });

        console.log(" Contact Message sent");
      } catch (err) {
        return console.log("something went wrong sm630");
      }
    },
    authResetProvider: async (parent, args, context) => {
      const { email } = args;
      const randInt = randIntGen();

      if (!emailRegex.test(email)) {
        throw new AuthenticationError("Email is not in the correct format.");
      }

      try {
        const user = await User.findOne({ email: email });

        if (!user) {
          throw new AuthenticationError("No user found.");
        }

        const token = resetToken({
          email: email,
          uuv4id: randInt,
        });

        const resetKey = new ResetKey({ token, email: email });
        await resetKey.save();

        let transporter = nodemailer.createTransport({
          host: mghost,
          port: mgport,
          auth: {
            user: mguser,
            pass: mgpass,
          },
        });

        await transporter.sendMail({
          from: mguser,
          to: email,
          subject: "Paradise Hemp Reset Code",
          html: `
          <>
            <p style="text-align: center; font-size: 24px;">
              Please use this code to reset your password.
            </p>
            <br>
            <br>
            <div style="text-align: center; font-size: 48px; border: 1px solid #ccc; padding: 10px;">
              ${randInt}
            </div>
          </>
        `,
        });

        console.log("Reset Message sent");
      } catch (err) {
        return console.log("something went wrong arp685");
      }
    },
    authResetValidator: async (parent, args, context) => {
      const { securityCode, email, newPass } = args;

      if (!emailRegex.test(email)) {
        throw new AuthenticationError("Email is not in the correct format.");
      }

      if (newPass.length < 5) {
        throw new AuthenticationError(" Password too short. ");
      }

      if (!securityCode || !email || !newPass) {
        throw new AuthenticationError("something went wrong");
      }

      try {
        const resetKey = await ResetKey.findOne({
          email: email,
        });

        if (!resetKey) {
          throw new AuthenticationError("something went wrong");
        }

        const { token } = resetKey;
        const decodedToken = verify(token);

        if (decodedToken.exp && Date.now() >= decodedToken.exp * 1000) {
          throw new AuthenticationError("invalid or expired token");
        }

        if (decodedToken.data.email !== email) {
          throw new AuthenticationError("invalid or expired token");
        }

        if (decodedToken.data.uuv4id !== parseInt(securityCode)) {
          await ResetKey.deleteOne({ _id: resetKey._id });
          throw new AuthenticationError("reset failed");
        }

        if (decodedToken.data.uuv4id === parseInt(securityCode)) {
          const user = await User.findOne({ email: email });
          user.password = newPass;
          user.save();
        }

        await ResetKey.deleteOne({ _id: resetKey._id });
        return { message: "success" };
      } catch (err) {
        return console.log("something went wrong arv737");
      }
    },
  },
};

module.exports = resolvers;
