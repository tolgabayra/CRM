const Task = require("../models/Task");


const getAllTasks = (data) => {
  return Task.find({user_id: data}).limit(100);
}

const getTask = (id) => {
  return Task.findById(id);
}

const createTask = (data) => {
  return new Task(data).save()
}

const deleteTask = (id) => {
  return Task.findByIdAndDelete(id);
}

const updateTask = (id, data) => {
  return Task.findByIdAndUpdate(id, data, {new: true})
}



module.exports = {
    getTask,
    getAllTasks,
    createTask,
    deleteTask,
    updateTask
}