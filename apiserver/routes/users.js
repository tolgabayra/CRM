const router = require("express").Router()
const UserController = require("../controllers/UserController")
const verifyAuthToken = require("../middlewares/verifyAuthToken")


router.get("/:id", verifyAuthToken ,UserController.getUser)



module.exports = router