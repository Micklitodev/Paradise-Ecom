const mongoose = require("mongoose");

const { Schema } = mongoose;

const resetKeySchema = new Schema({
  token: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    expires: "10m",
  },
});

const ResetKey = mongoose.model("ResetKey", resetKeySchema);

module.exports = ResetKey;
