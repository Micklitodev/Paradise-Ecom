const { AuthenticationError } = require("apollo-server-express");
const { User, Product, Category, Order } = require("../models");
const { signToken } = require("../utils/auth");
const { populate } = require("../models/Order");
const stripe = require("stripe")("sk_test_4eC39HqLyjWDarjtT1zdp7dc");

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
      if (context.user.isAdmin !== true) {
        throw new AuthenticationError("Not authorized to make this action.");
      }

      try {
        const orders = await User.find()
          .select("-_V -password")
          .populate({ path: "orders.products", populate: "category" })
          .sort({ purchaseDate: -1 });

        return orders;
      } catch (err) {
        console.log(err);
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
    checkout: async (parent, args, context) => {
      const url = new URL(context.headers.referer).origin;
      const order = new Order({ products: args.products });
      const line_items = [];

      const { products } = await order.populate("products");

      for (let i = 0; i < products.length; i++) {
        const product = await stripe.products.create({
          name: products[i].name,
          description: products[i].description,
          images: [`${url}/images/${products[i].image}`],
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

      const session = await stripe.checkout.sessions.create({
        payment_method_types: ["card"],
        line_items,
        mode: "payment",
        success_url: `${url}/success?session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: `${url}/`,
      });

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
      console.log(context);
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
        if(args.action === 'accept') {
          user.isVerified = true 
        }
          user.idFront = ''
          user.idBack = ''
          const updatedUser = await user.save()
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
