const express = require("express")
const connection = require("./db")
const jwt = require("jsonwebtoken")
const userRouter = require("./routes/user.route")
const auth = require("./auth.middleware")
const app = express()
app.use(express.json())
app.use("/user",userRouter)

app.get("/",(req,res)=>{
    res.send("Homepage")
})

app.get("/todos",auth,(req,res)=>{

    res.send({msg:"Todos are here ...."})

    // const token = req.headers.authorization?.split(" ")[1];
    // // console.log(token)
    // jwt.verify(token,"sharu",(err,decoded)=>{
    //     if(decoded){
    //         res.send({msg:"Todos are here ...."})
    //     }else{
    //         res.send("Invalid token")
    //     }
    // })
})

app.listen(8080,async()=>{
    try {
        await connection
        console.log("Connected to DB")
    } catch (error) {
        console.log(error)
    }
    console.log("Server is running on port 8080")
})