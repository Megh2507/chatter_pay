const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
  payment_id: {
    type: String,
    required: true,
  },
  from: {
    type: String,
    required: true,
  },
  to: {
    type: String,
    required: true,
  },
  amount: {
    type: Number,
    required: true,
  },
  currency: {
    type: String,
    required: true,
  },

  payment_status: {
    type: String,
    required: true,
  },
  reference_id: {
    type: String,
    required: true,
  },

  payment_link: {
    type: String,
    required: true,
  },
  from_avatar: {
    type: String,
    required: true,
  },
  to_avatar: {
    type: String,
    required: true,
  },
  platform: {
    type: String,
    required: true,
  },
  created_at: {
    type: Date,
    default: Date.now,
  },
});
const User = mongoose.model("Payment", userSchema);
module.exports = User;
