const jwt = require("jsonwebtoken");

const secret = "mysecretsshhhhh";
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
  signTempToken: function ({ id, total, subTotal}) {
    const payload = { id, total, subTotal};
    return jwt.sign({ data: payload }, secret, { expiresIn: "1d" });
  },
  signAgreement: function ({ userChoice }) {
    const payload = { userChoice };
    return jwt.sign({ data: payload }, secret, { expiresIn: "15d" });
  },
  verify: function (token) {
    const decodedTempToken = jwt.verify(token, secret);
    return decodedTempToken;
  },
};
