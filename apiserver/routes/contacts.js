const router = require("express").Router()
const ContactController = require("../controllers/ContactController")
const verifyAuthToken = require("../middleware/verifyAuthToken")
const verifyAuthorizaton = require("../middleware/verifyAuthorization")

const schemas = require("../validations/Contact")
const validate = require("../middleware/verifyValidate")


router.get("/:id",verifyAuthorizaton ,ContactController.getContact)
router.get("/", verifyAuthToken ,ContactController.getAllContact)
router.post("/",verifyAuthorizaton ,validate(schemas.createValidation) ,ContactController.createContact)
router.delete("/:id",verifyAuthorizaton ,ContactController.deleteContact)
router.post("/multidelete", ContactController.deleteMultiContact)
router.put("/:id",verifyAuthorizaton ,ContactController.updateContact)


module.exports = router