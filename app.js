const express = require("express")
const app = express()
const port = 3000
const routes = require("./Routes/index")

app.set("view engine", "ejs")
app.use(express.urlencoded({ extended: false }))

app.use("/", routes)

app.listen(port, () => {
    console.log(`listen to http://localhost:${port}`)
})