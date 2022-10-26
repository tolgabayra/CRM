const router = require("express").Router()
const TaskController = require("../controllers/TaskController")

const verifyAuthorization = require("../middleware/verifyAuthorization")

router.get("/", verifyAuthorization ,TaskController.listAll)
router.get("/:id",verifyAuthorization ,TaskController.list)
router.delete("/:id",verifyAuthorization ,TaskController.remove)
router.put("/:id",verifyAuthorization ,TaskController.update)
router.post("/",verifyAuthorization ,TaskController.create)



module.exports = router