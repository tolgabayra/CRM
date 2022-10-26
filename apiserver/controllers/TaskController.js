const { getTask, getAllTasks, deleteTask, updateTask, createTask } = require("../services/TaskService")



const list = async (req,res) => {
  const id = req.params.id
  try {
    const response = await getTask(id)
    res.status(200).json(response)
  } catch (err) {
    res.status(500).json(err)
  }
}


const listAll = async (req,res) => {
  const data = req.body.user_id
  try {
    const response = await getAllTasks(data)
    res.status(200).json(response)
  } catch (err) {
    res.status(500).json(err)
  }
}



const create = async (req, res) => {
  try {
    const newTask = await createTask(req.body)
    res.status(201).json(newTask)
  } catch (err) {
    res.status(500).json(err)
  }
}


const remove = async (req, res) => {
  try {
    const deleted = await deleteTask(req.params.id)
    if (deleted) {
      res.status(200).json({ message: "Tasks has been deleted." })
    } else {
      res.status(404).json({ message: "Task is not found!" })
    }
  } catch (err) {
    res.status(500).json(err)
  }
}

const update = async () => {
  const data = req.body
  const id = req.params.id
  try {
    const updated = await updateTask(id, data)
    res.status(200).json(updated)
  } catch (err) {
    res.status(500).json(err)
  }
}



module.exports = {
  create,
  remove,
  update,
  list,
  listAll
}