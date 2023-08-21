const mongoose = require("mongoose");
require("dotenv").config();

mongoose
  .connect(
    process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/paradisehempco",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => console.log("connectedtodatabase"));

module.exports = mongoose.connection;
