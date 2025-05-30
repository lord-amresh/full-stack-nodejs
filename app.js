const express = require("express") // express require gareko
const bookRoute = require("./routes/bookRoute")
const cors = require("cors")

const app = express()  //express lai trigger gareko
require("./database/db.connection")

app.use(cors({
    origin : "*"
}))
app.use(express.json())
//let app = require("express")()


app.use("/api",bookRoute)

app.listen(3000, function (){
    console.log("project/server/backend has started at port 3000")
})