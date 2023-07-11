const express = require("express")
const connection = require("./db")
const userRouter = require("./routes/userRoutes")
const app = express()
app.use(express.json())
app.use("/users",userRouter)


app.get("/",(req,res)=>{
    res.send("Welcome to Home Page")
})




app.listen(7500,async()=>{
    try {
        await connection
        console.log("Connected to database")
    } catch (error) {
        console.log(error)
    }
    console.log("Server is running at port 7500")
})