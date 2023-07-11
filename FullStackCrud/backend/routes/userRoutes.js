const express = require("express")
const UserModel = require("../models/userModel")
const userRouter = express.Router()

userRouter.post("/register",async(req,res)=>{
    // const payload = req.body
    try {
        const user = await UserModel.create(req.body)
        // console.log(user)
        res.send({"msg":"New user has been registered",user})
    } catch (error) {
        res.send({"msg":"Something went wrong","error":error.message})
    }
})

// userRouter.post("/login",(req,res)=>{
//     const {email,password} = req.body
//     res.send({"msg":"Logged In success!!" ,"token":"...."})
// })

module.exports = userRouter;