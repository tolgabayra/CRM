const mongoose = require("mongoose");

const ContactSchema = new mongoose.Schema(
  {
    fullName: { type: String, required: true, unique: true },
    companyName: { type: String, require: true},
    email: { type: String, require: true},
    phoneNumber: { type: String},
    contactOwner: { type: String },
    user_id: {type: mongoose.Types.ObjectId}
  },
  { timestamps: true, versionKey: false }
);

module.exports = mongoose.model("Contact", ContactSchema);