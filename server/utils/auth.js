const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();

const secret = process.env.SECRET_KEY;
const expiration = "2h";

module.exports = {
  authMiddleware: function ({ req }) {
    // allows token to be sent via req.body, req.query, or headers
    let token = req.body.token || req.query.token || req.headers.authorization;

    // ["Bearer", "<tokenvalue>"]
    if (req.headers.authorization) {
      token = token.split(" ").pop().trim();
    }

    if (!token) {
      return req;
    }

    try {
      const { data } = jwt.verify(token, secret, { maxAge: expiration });
      req.user = data;
    } catch {
      console.log("Invalid token");
    }

    return req;
  },
  signToken: function ({ firstName, email, _id, isAdmin, isVerified }) {
    const payload = { firstName, email, _id, isAdmin, isVerified };

    return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
  },
  signTempToken: function ({ id, total, subTotal, pointsUsed, products }) {
    let spentPoints = 0;

    if (pointsUsed) {
      spentPoints = pointsUsed / 10;
    }

    const payload = { id, total, subTotal, spentPoints, products };
    return jwt.sign({ data: payload }, secret, { expiresIn: "1d" });
  },
  signAgreement: function ({ userChoice }) {
    const payload = { userChoice };
    return jwt.sign({ data: payload }, secret, { expiresIn: "15d" });
  },
  resetToken: function ({ email, uuv4id }) {
    const payload = { email, uuv4id };
    return jwt.sign({ data: payload }, secret, { expiresIn: "10m" });
  },
  verify: function (token) {
    const decodedTempToken = jwt.verify(token, secret);
    return decodedTempToken;
  },
};
