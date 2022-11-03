const router = require("express").Router()
const ContactController = require("../controllers/ContactController")
const verifyAuthToken = require("../middlewares/verifyAuthToken")
const verifyAuthorizaton = require("../middlewares/verifyAuthorization")

const schemas = require("../validations/Contact")
const validate = require("../middlewares/verifyValidate")


router.get("/:id",verifyAuthorizaton ,ContactController.getContact)
router.get("/", verifyAuthToken ,ContactController.getAllContact)
router.post("/",verifyAuthorizaton ,validate(schemas.createValidation) ,ContactController.createContact)
router.delete("/:id",verifyAuthorizaton ,ContactController.deleteContact)
router.post("/multidelete", ContactController.deleteMultiContact)
router.put("/:id",verifyAuthorizaton,validate(schemas.updateValidation) ,ContactController.updateContact)


module.exports = router