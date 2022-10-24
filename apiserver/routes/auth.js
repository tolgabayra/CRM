const router = require("express").Router()
const schemas = require("../validations/Users")
const validate = require("../middleware/verifyValidate")

const AuthController = require("../controllers/AuthController")


router.post("/register",validate(schemas.registerValidation),AuthController.register)
router.post("/login", AuthController.login)
router.post("/logout", AuthController.logout)

module.exports = router