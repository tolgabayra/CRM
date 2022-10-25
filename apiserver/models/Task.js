const mongoose = require("mongoose");

const TaskSchema = new mongoose.Schema(
  {
    title: {type: String, required: true},
    desc: {type: String, required: true},
    priorty: {type: Number},
    user_id: {type: mongoose.Types.ObjectId, required: true},
    tags: {type: Array, default: []},
    finishDate: {type: Date, min: '1987-09-28',max: '2060-05-23'},
    expectedEarn: {type: Schema.Types.Decimal128}
  },
  { timestamps: true, versionKey: false }
);

module.exports = mongoose.model("Task", TaskSchema);