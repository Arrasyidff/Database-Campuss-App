const router = require("express").Router()
const ClassController = require("../controllers/ClassController")

router.use("/", ClassController.getAllClass)

module.exports = router