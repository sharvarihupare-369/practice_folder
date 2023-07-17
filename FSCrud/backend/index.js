
const express =require("express")
const connection = require("./db")
const userRouter = require("./routes/userRoute")
const postRouter = require("./routes/postRoutes")
const app = express()
require("dotenv").config()
const PORT = process.env.port || 7500
const cors = require("cors")
app.use(express.json())
app.use(cors())
app.use("/users",userRouter)
app.use("/posts",postRouter)



app.listen(PORT,async()=>{
    try {
        await connection
        console.log("Connected to DB")
    } catch (error) {
        console.log(error)
    }
    console.log(`Server is running on port ${PORT}`)
})