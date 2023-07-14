    const express = require("express");
    const connection = require("./db");
    const app = express()
    require('dotenv').config();
    const userRouter = require("./routes/userRoute")
    const postRouter = require("./routes/postRouter")
    const Port =  process.env.PORT
    const key = process.env.JWT_SECRET
    const jwt = require("jsonwebtoken");
    app.use(express.json())
    app.use("/user",userRouter)
    app.use("/books",postRouter)



    app.get("/",(req,res)=>{
        res.send("Welcome to Home page")
    })


    app.listen(Port,async()=>{
        try {
        await connection
        console.log("Connected to DB")
        } catch (error) {
            console.log(error)
        }
        console.log(`Server is listening on port ${Port}`)
    })