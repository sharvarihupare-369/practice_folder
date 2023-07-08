const express = require("express")
const app = express()
app.use(express.json())
const mongoose = require('mongoose')
const userRouter = require('./routes/userRoutes')
const postRouter = require('./routes/postRoutes')

const connect = async() => {
    try {
        await mongoose.connect('mongodb+srv://sharu:Sharu369@gatimandsharu.djnwo4s.mongodb.net/mydatabase?retryWrites=true&w=majority')
        console.log("connected")
    } catch (error) {
        console.log(error)
    }
}

app.use('/user',userRouter)
app.use('/addpost',postRouter)

app.listen(8080,()=>{
    connect()
    console.log("Server is listening on Port 8080")
})