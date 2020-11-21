const { Class } = require("../models")

class ClassController {
    static getAllClass(req, res) {
        Class.findAll()
            .then(data => {
                // res.send(data)
                res.render("Class-Page", { data })
            })
            .catch(err => {
                res.send(err)
            })
    }
}

module.exports = ClassController