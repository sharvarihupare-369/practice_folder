const express = require("express")
const UserModel = require("../models/userModel")
const userRouter = express.Router()
const jwt = require("jsonwebtoken")
const bcrypt = require("bcrypt")

userRouter.post("/register",async(req,res)=>{
    // const payload = req.body
    const {name,email,password} = req.body
    try {
        bcrypt.hash(password,10,async(err,hash)=>{
            if(err)res.send({"msg":"Something went wrong","err":err.message})
            else{
                const user = await UserModel.create({...req.body,password:hash})
                res.send({"msg":"New user has been registered",user})
            }
        })
        
        // console.log(user)
    } catch (error) {
        res.send({"msg":"Something went wrong","error":error.message})
    }
})

userRouter.post("/login",async(req,res)=>{
    const {email,password} = req.body
    try {
        const user = await UserModel.find({email})
        if(user.length > 0){
            bcrypt.compare(password,user[0].password,(err,result)=>{
             if(err)res.send({"msg":"Wrong credentials"})
             else{
                 const token = jwt.sign({userID:user[0]._id},"luffy")
                 res.send({"msg":"Logged In success!!" ,"token":token})
                }
            })
        }else{
            res.send({"msg":"Wrong credentials"})
        }
    } catch (error) {
        res.send({"msg":"Something went wrong","error":error.message})
    }
})

module.exports = userRouter;