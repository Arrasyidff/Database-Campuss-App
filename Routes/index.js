const router = require("express").Router()

const InstructorRoutes = require("./InstructorRoutes")
const ClassRoutes = require("./ClassRoutes")
// const SubjectRoutes = require("./SubjectRoutes")

router.use("/instructor", InstructorRoutes)
router.use("/class", ClassRoutes)
// router.use("/subject", SubjectRoutes)

module.exports = router