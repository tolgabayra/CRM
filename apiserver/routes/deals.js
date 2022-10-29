const router = require("express").Router()
const DealController = require("../controllers/DealController")

const verifyAuthorization = require("../middleware/verifyAuthorization")

router.get("/", verifyAuthorization ,DealController.listAll)
router.get("/:id",verifyAuthorization ,DealController.list)
router.delete("/:id",verifyAuthorization ,DealController.remove)
router.put("/:id",verifyAuthorization ,DealController.update)
router.post("/",verifyAuthorization ,DealController.create)


module.exports = router