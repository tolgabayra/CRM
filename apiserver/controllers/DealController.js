const { getAllDeal,getDeal,deleteDeal,createDeal,updateDeal } = require("../services/DealService")


const list = async (req,res) => {
  const id = req.params.id
  try {
    const result = await getDeal(id)
    res.status(200).json(result)
  } catch (err) {
    res.status(500).json(err)
  }
}

const listAll = async (req,res) => {
  const data = req.body.user_id
  try {
    const result = await getAllDeal(data)
    res.status(200).json(result)
  } catch (err) {
    res.status(500).json(err)
  }
} 

const create = async (req,res) => {
  try {
    const newDeal = await createDeal(req.body)
    res.status(201).json(newDeal)
  } catch (err) {
    res.status(500).json(err)
  }
}

const remove = async (req,res) =>{
    try {
        const deleted = await deleteDeal(req.params.id)
        if (deleted) {
            res.status(200).json({message: "Deal has been deleted"})
        } else {
            res.status(404).json({message: "Deal is not found!"})
        }
    } catch (err) {
        res.status(500).json(err)
    }
}

const update = async (req,res) => {
  const data = req.body
  const id = req.params.id
  try {
    const updated =  await updateDeal(id, data)
    res.status(200).json(updated)
  } catch (err) {
    res.status(500).json(err)
  }
}



module.exports = {
    list,
    listAll,
    create,
    update,
    remove
}

