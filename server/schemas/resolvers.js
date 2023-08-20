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

const carrier = "USPS";

const buisnessStreet1 = "14865 HWY 92";
const buisnessStreet2 = "SUITE 5";
const buisnessCity = "WOODSTOCK";
const buisnessState = "GA";
const buisnessZip = "30188";
const buisnessCountry = "US";
const buisnessCompany = "Paradise Hemp Dispensary";
const buisnessPhone = "4702223333";
const buisnessContact = "michaelvrms@gmail.com";
const taxPercent = 8.75;
const buisnessFromEmail = "no-reply@paradisehempdispensary.com";
const buisnessWebsite = "www.paradisehempdispensary.com";

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

        const Products = await Product.find(params).populate("category");
        const FilteredProducts = Products.filter((p) => p.quantity > 0);

        return FilteredProducts;
      } catch (err) {
        return console.log("failed to update ps067");
      }
    },
    product: async (parent, { _id }) => {
      try {
        const prod = await Product.findById(_id).populate("category");
        if (prod.quantity <= 0) {
          return null;
        } else return prod;
      } catch (err) {
        return console.log("failed to update p074");
      }
    },
    queryNewProducts: async () => {
      try {
        const newestProducts = await Product.find()
          .sort({ createdAt: -1 })
          .limit(10);

        return newestProducts;
      } catch (err) {
        console.log("something went wrong qnp110 ");
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

        const filteredProducts = products.filter((p) => p.quantity > 0);

        if (context.user?.isAdmin) {
          return products;
        }
        return filteredProducts;
      } catch (err) {
        return console.log("something went wrong qs146");
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

      const productInt = args.productInt;

      const boxSizes = [
        {
          name: "x-smallbox",
          dimensions: { L: 6, W: 4, H: 4 },
          weightFactor: 0.4,
          rangeMax: 1,
          rangeMin: 1,
        },
        {
          name: "smallbox",
          dimensions: { L: 8, W: 6, H: 5 },
          weightFactor: 0.4,
          rangeMax: 3,
          rangeMin: 2,
        },
        {
          name: "mediumbox",
          dimensions: { L: 12, W: 9, H: 6 },
          weightFactor: 0.4,
          rangeMax: 5,
          rangeMin: 4,
        },
        {
          name: "largebox",
          dimensions: { L: 12, W: 12, H: 7 },
          weightFactor: 0.5,
          rangeMax: 8,
          rangeMin: 6,
        },
        {
          name: "x-largebox",
          dimensions: { L: 16, W: 12, H: 9 },
          weightFactor: 0.5,
          rangeMax: Infinity,
          rangeMin: 9,
        },
      ];

      let selectedBox = boxSizes.find(
        (box) => productInt >= box.rangeMin && productInt <= box.rangeMax
      );

      try {
        const user = await User.findById(context.user._id).select(
          "-_V -password"
        );

        const shipment = await client.Shipment.create({
          from_address: {
            street1: `${buisnessStreet1}`,
            street2: `${buisnessStreet2}`,
            city: `${buisnessCity}`,
            state: `${buisnessState}`,
            zip: `${buisnessZip}`,
            country: `${buisnessCountry}`,
            company: `${buisnessCompany}`,
            phone: `${buisnessPhone}`,
          },
          to_address: {
            name: `${user.firstName} ${user.lastName}`,
            street1: user.street,
            city: user.city,
            state: user.state,
            zip: user.zip,
            country: "US",
            phone: "4045555555",
          },
          parcel: {
            length: selectedBox.dimensions.L,
            width: selectedBox.dimensions.W,
            height: selectedBox.dimensions.H,
            weight: selectedBox.weightFactor * productInt,
          },
        });

        const rate = shipment.lowestRate([`${carrier}`]);

        shipObj = shipment;

        return rate;
      } catch (err) {
        throw new Error("Something went wrong unable to calculate shipping");
      }
    },
    checkout: async (parent, args, context) => {
      if (context.user.isVerified) {
        // ensure shipping
        if (args.shipPrice <= 0) {
          throw new Error("Shipping price was not set.");
        }

        if (context.user.isAdmin) {
          throw new Error("Admin cannot make orders.");
        }

        const url = new URL(context.headers.referer).origin;
        const order = new Order({ products: args.products });
        const shippingPrice = parseInt(args.shipPrice * 100);

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
            unit_amount: parseInt(products[i].price * 100),
            currency: "usd",
          });

          line_items.push({
            price: price.id,
            quantity: 1,
          });
        }

        // handle points

        const user = await User.findOne({ _id: context.user._id });

        if (!user) {
          throw new AuthenticationError("not logged in");
        }

        let couponId = null;

        if (args.points > 0) {
          if (args.points > user.points) {
            throw new Error("points used greater than user point balance.");
          }

          if (args.points < 50) {
            throw new Error("must use more than 50 points");
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
          percentage: `${taxPercent}`,
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

        try {
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
            products: products,
          });

          const tempToken = new TempKey({ token, stripeSessionId: session.id });
          await tempToken.save();

          return { session: session.id };
        } catch (err) {
          throw new Error("Session Failed.");
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
        throw new AuthenticationError("Account already exists.");
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

        const tempProducts = decodedToken.data.products;

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
          shipObj.lowestRate([`${carrier}`])
        );
        const tracking = boughtShipment.tracker.public_url;
        const shipmentId = boughtShipment.tracker.shipment_id;

        // update db inventory and clover inventory

        products.forEach(async (item) => {
          await resolvers.Mutation.updateProduct(
            parent,
            { _id: item._id, quantity: parseInt(item.purchaseQuantity) * -1 },
            context
          );
        });

        // saving orders with token + user data

        const order = new Order({
          products: tempProducts,
          firstName,
          lastName,
          address,
          total,
          tracking,
          shipmentId,
        });

        try {
          await User.findByIdAndUpdate(context.user._id, {
            $push: { orders: order },
          });

          await order.save();
          await user.save();

          // delete tempkey token so endpoint cannot be hit again

          await resolvers.Mutation.sendOrderEmail(
            parent,
            { firstName, lastName, address, total, tracking, tempProducts },
            context
          );

          return order;
        } catch (err) {
          throw new Error("Failed to Save Order, Contact Support.");
        } finally {
          await TempKey.deleteOne({ _id: tempToken._id });
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
        throw new Error("ShipInfo Update Failed");
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
            await resolvers.Mutation.sendVerifNotif(parent, args, context);
            return updatedUser;
          } catch (err) {
            throw new Error("Failed to upload data");
          }
        }
      } else {
        throw new AuthenticationError("Requires Auth");
      }
    },
    userVerifAdmin: async (parent, args, context) => {
      if (context.user.isAdmin === true) {
        try {
          const user = await User.findById(args._id).select("-__v -password");
          if (args.action === "accept") {
            user.isVerified = true;
            await resolvers.Mutation.userVerifNotif(
              parent,
              { email: user.email },
              context
            );
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
          return console.log(err);
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
        return console.log("Error update failed. ");
      }
    },
    adminUpdateProduct: async (parent, args, context) => {
      if (context.user.isAdmin !== true) {
        throw new AuthenticationError("Not authorized to view this page.");
      }
      try {
        const category = await Category.findOne({ name: args.category });
        args.category = category._id;

        const product = await Product.findByIdAndUpdate(args.id, args, {
          new: true,
        });

        return product;
      } catch (err) {
        throw new Error("Product Update Failed");
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
        throw new Error("Product Delete failed");
      }
    },

    login: async (parent, { email, password }) => {
      if (!emailRegex.test(email)) {
        throw new AuthenticationError("Email is not in the correct format");
      }
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError("Incorrect credentials");
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError("Incorrect credentials");
      }

      const token = signToken(user);

      if (!token) {
        throw new AuthenticationError("Incorrect credentials");
      }

      return { token, user };
    },
    agreement: async (parent, args, context) => {
      try {
        const token = signAgreement(args.userChoice);
        return token;
      } catch (err) {
        return console.log("something went wrong a586");
      }
    },
    sendVerifNotif: async (parent, args, context) => {
      if (!context.user) {
        throw new AuthenticationError("No Auth.");
      }

      const user = await User.findById(context.user._id);

      if (!user) {
        throw new AuthenticationError("No Auth.");
      }

      const { firstName, lastName } = user;

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
          from: `${buisnessFromEmail}`,
          to: `${buisnessContact}`,
          subject: "New Verification",
          html: `
          <>
            <p style="text-align: center; font-size: 24px;">
             ${firstName} ${lastName} is awaiting ID verification. 
            </p>
            <br>
          </>
        `,
        });

        console.log("Verif Message sent");
      } catch (err) {
        throw new Error("Verif Message Failed");
      }
    },
    userVerifNotif: async (parent, { email }, context) => {
      if (!context.user.isAdmin) {
        throw new AuthenticationError("Error, Bad Origin");
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
          from: `${buisnessFromEmail}`,
          to: `${email}`,
          subject: "Verification Success",
          html: `
          <>
          <head>
            <style>
              body {
                font-family: Arial, sans-serif;
                margin: 0;
                padding: 0;
              }
              .container {
                max-width: 600px;
                margin: 0 auto;
                padding: 20px;
                border: 1px solid #ccc;
                border-radius: 10px;
                box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
                background-color: #f5f5f5;
              }
              h1 {
                color: #333;
              }
              p {
                font-size: 16px;
                line-height: 1.5;
                color: #555;
              }
              .footer {
                margin-top: 20px;
                text-align: center;
              }
            </style>
          </head>
          <body>
            <div class="container">
              <h1>Account Verification</h1>
              <h2>Your Account has been successfully verified! </h2>
              <p>If you have any questions or concerns, please feel free to contact our customer support team at ${buisnessPhone}.</p>
              <div class="footer">
                <p> ${buisnessCompany} </p>
                <p> ${buisnessWebsite} </p>
                <p> ${buisnessStreet1}, ${buisnessStreet2} </p>
                <p> ${buisnessCity}, ${buisnessState} ${buisnessZip} </p>
                <p>Contact: ${buisnessPhone} | Email: ${buisnessContact} </p>
              </div>
            </div>
          </body>
          </html>
        `,
        });

        console.log("Verif Message sent - User");
      } catch (err) {
        throw new Error("userNotif Message Failed");
      }
    },
    sendOrderEmail: async (
      parent,
      { firstName, lastName, address, total, tracking, tempProducts },
      context
    ) => {
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
          from: `${buisnessFromEmail}`,
          to: `${context.user.email}`,
          subject: `Thank You for shopping with Paradise.`,
          html: `
          <html>
          <head>
            <style>
              body {
                font-family: Arial, sans-serif;
                margin: 0;
                padding: 0;
              }
              .container {
                max-width: 600px;
                margin: 0 auto;
                padding: 20px;
                border: 1px solid #ccc;
                border-radius: 10px;
                box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
                background-color: #f5f5f5;
              }
              h1 {
                color: #333;
              }
              p {
                font-size: 16px;
                line-height: 1.5;
                color: #555;
              }
              img {
                width: 200px;
                height: 180px;
                border-radius: 5px;
              }
              table {
                width: 100%;
                border-collapse: collapse;
                margin-top: 20px;
              }
              th, td {
                padding: 10px;
                text-align: left;
                border-bottom: 1px solid #ddd;
              }
              th {
                background-color: #f9f9f9;
              }
              .footer {
                margin-top: 20px;
                text-align: center;
              }
            </style>
          </head>
          <body>
            <div class="container">
              <h1>Order Confirmation</h1>
              <p>Dear ${firstName} ${lastName},</p>
              <p>Thank you for your order. We are excited to process your order and send it to you as soon as possible.</p>
              <h2>Order Details</h2>
              <table style="width: 100%; border-collapse: collapse;">
              <thead>
                <tr>
                  <th>Product</th>
                  <th>Quantity</th>
                  <th>Price</th>
                </tr>
              </thead>
              <tbody>
                ${tempProducts
                  .map(
                    (product) => `
                  <tr>
                    <td>${product.name}</td>
                    <td><img src='${product.image}' alt=''/> </td>
                    <td>$${product.price}</td>
                  </tr>
                `
                  )
                  .join("")}
              </tbody>
            </table>
              <a href=${tracking}> Track Shipment </a> 
              <p><strong>Total:</strong> $ ${total / 100}</p>
             <p>If you have any questions or concerns, please feel free to contact our customer support team at ${buisnessPhone}.</p>
              <div class="footer">
                <p> Thank you for shopping with us! </p> 
                <p> ${buisnessCompany} </p>
                <p> ${buisnessWebsite} </p>
                <p> ${buisnessStreet1}, ${buisnessStreet2} </p>
                <p> ${buisnessCity}, ${buisnessState} ${buisnessZip} </p>
                <p>Contact: ${buisnessPhone} | Email: ${buisnessContact} </p>
              </div>
            </div>
          </body>
          </html>
        `,
        });

        await transporter.sendMail({
          from: `${buisnessFromEmail}`,
          to: `${buisnessContact}`,
          subject: `A customer has completed a purchase.`,
          html: `
          <div>
            <p style="text-align: center; font-size: 24px;">
              A new order has been placed, Please view details in Admin Portal. 
            </p>
            <br>
          </div>
        `,
        });
        console.log(" Order Message sent");
      } catch (err) {
        throw new Error("failed so send order confirmation.");
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
          to: `${buisnessContact}`,
          subject: "Customer Contact",
          html: `
            <p style="text-align: center; font-size: 24px;">
             ${name}
            </p>
            <br>
            <div style="text-align: center; font-size: 16px;"> 
             ${sanitizedMessage}
            </div> 
        `,
        });

        console.log(" Contact Message sent");
      } catch (err) {
        throw new Error("Contact Message Failed");
      }
    },
    authResetProvider: async (parent, args, context) => {
      const { email } = args;
      const randInt = randIntGen();

      if (!emailRegex.test(email)) {
        throw new AuthenticationError("Email is not in the correct format.");
      }
      const user = await User.findOne({ email: email });

      if (!user) {
        throw new AuthenticationError("Account does not exist.");
      }

      try {
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
          from: `${buisnessFromEmail}`,
          to: email,
          subject: "Paradise Hemp Reset Code",
          html: `
            <p style="text-align: center; font-size: 24px;">
              Please use this code to reset your password.
            </p>
            <br>
            <br>
            <div style="text-align: center; font-size: 48px; border: 1px solid #ccc; padding: 10px;">
              ${randInt}
            </div>
            <br /> 
            <p> If you did not try to reset your password please navigate to our website and notify us threw the contact form. </p>
            <p>If you have any questions or concerns, please feel free to contact our customer support team at ${buisnessPhone}.</p>
              <div class="footer">
                <p> ${buisnessCompany} </p>
                <p> ${buisnessWebsite} </p>
                <p> ${buisnessStreet1}, ${buisnessStreet2} </p>
                <p> ${buisnessCity}, ${buisnessState} ${buisnessZip} </p>
                <p>Contact: ${buisnessPhone} | Email: ${buisnessContact} </p>
              </div>
        `,
        });

        console.log("Reset Message sent");
      } catch (err) {
        throw Error("500 - Email send failed.");
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
          throw new AuthenticationError("invalid or expired token");
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
          throw new AuthenticationError("Reset Failed");
        }

        if (decodedToken.data.uuv4id === parseInt(securityCode)) {
          const user = await User.findOne({ email: email });
          user.password = newPass;
          user.save();
        }

        await ResetKey.deleteOne({ _id: resetKey._id });
        return { message: "success" };
      } catch (err) {
        return { message: "rejected" };
      }
    },
  },
};

module.exports = resolvers;
