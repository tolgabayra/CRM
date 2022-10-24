const router = require("express").Router()
const ContactController = require("../controllers/ContactController")
const verifyAuthToken = require("../middleware/verifyAuthToken")
const verifyAuthorizaton = require("../middleware/verifyAuthorization")

router.get("/:id",verifyAuthorizaton ,ContactController.getContact)
router.get("/",verifyAuthorizaton ,ContactController.getAllContact)
router.post("/" ,ContactController.createContact)
router.delete("/:id",verifyAuthorizaton ,ContactController.deleteContact)
router.put("/:id",verifyAuthorizaton ,ContactController.updateContact)


module.exports = router