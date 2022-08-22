const express = require("express")
require("dotenv").config()


const products = require("./datasource/products")
const connectDb = require("./utils/connect.db")
connectDb()

const usersRouter = require("./routes/users.routes")

//initialize express object
const app = express()

//express middleware
app.use(express.json())

//routes
app.use("/api/users", usersRouter )

//home route
app.get("/", (req, res) => {
    res.send("<h1>welcome to our farmers Db</h1>")
})

//get all products
app.get("/api/v1/products", (req, res) => {
    res.json({
        sucess: true,
        data:products

    })
})

//save data to db
app.post("/api/v1/products", (req, res) => {
    
    res.json({
success:true,
data:[req.body, ...product],
    })
     
})

const port= process.env.PORT

app.listen(port, function () {
    console.log("server is running on port :" + port)

})


