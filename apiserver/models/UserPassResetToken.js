const mongoose = require("mongoose")


const UserPassResetToken = new mongoose.Schema(
    {
      token: { type: String, required: true},
      user_id: { type: String, required: true},
      validity_date: { type: Date, required: true}
    },
    { timestamps: true , versionKey: false}
  );
  
  module.exports = mongoose.model("UserPassResetToken", UserPassResetToken);