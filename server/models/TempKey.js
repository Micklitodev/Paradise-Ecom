const mongoose = require("mongoose");

const { Schema } = mongoose;

const tempKeySchema = new Schema({
  token: {
    type: String,
    required: true,
    unique: true,
  },
  stripeSessionId: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    expires: "1d",
  },
});

const TempKey = mongoose.model("TempKey", tempKeySchema);

module.exports = TempKey;
