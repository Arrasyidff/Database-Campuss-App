const { Instructor, Class } = require("../models")

class InstructorController {

    static getAllInstructor(req,res) {
        Instructor.findAll({
            include: [Class]
        })
            .then(data => {
                res.send(data)
                // res.render("Instructor-Page",{ data })
            })
            .catch(err => {
                res.send(err)
            })
    }
}

module.exports = InstructorController