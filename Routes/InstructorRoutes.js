const router = require("express").Router()
const InstructorController = require("../controllers/InstructorController")

router.use("/", InstructorController.getAllInstructor)

module.exports = router