const Deal = require("../models/Deal")


const getAllDeal = (data) => {
  return Deal.find({user_id: data}).limit(100);
}

const getDeal = (id) => {
  return Deal.findById(id);
}

const createDeal = (data) => {
  return new Deal(data).save();
}

const deleteDeal = (id) => {
  return Deal.findByIdAndDelete(id);
}

const updateDeal = (id, data) => {
    return Deal.findByIdAndUpdate(id, data, {new: true}); 
}

module.exports = {
    getAllDeal,
    getDeal,
    createDeal,
    deleteDeal,
    updateDeal
}