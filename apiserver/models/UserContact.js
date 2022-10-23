const mongoose = require("mongoose");

const UserContact = new mongoose.Schema(
  {
    user_id: { type: mongoose.Types.ObjectId, required: true },
    contact_id: {type: mongoose.Types.ObjectId, required: true }
  },
  { timestamps: true, versionKey: false }
);

module.exports = mongoose.model("Contact", UserContact);