const router = require("express").Router()

const ResetPasswordController = require("../controllers/ResetPasswordController")

router.post("/",ResetPasswordController.createPasswordLink)


module.exports = router