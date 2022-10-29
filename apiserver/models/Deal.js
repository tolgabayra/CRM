const mongoose = require("mongoose");

const DealSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, unique: true },
    pipeline: {type: String, required: true},
    closeDate: {type: Date },
    company: {type: String},
    status: {type: String},
    tags: {type: Array, default: []},
    stage: {type: String},
    user_id: {type: mongoose.Types.ObjectId},
    value: {type: mongoose.Types.Decimal128},
    desc: {type: String}

  },
  { timestamps: true, versionKey: false }
);

module.exports = mongoose.model("Deal", DealSchema);