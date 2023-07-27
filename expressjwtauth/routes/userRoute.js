const express = require("express")
const bcrypt = require("bcrypt")
const jwt= require("jsonwebtoken")
const mykey = process.env.JWT_SECRET
const rkey = process.env.JWT_REFRESH_KEY
const UserModel = require("../models/userModel")
const registerMiddleware = require("../middlewares/registermiddleware")
const BlackListModel = require("../models/blackListModel")
const router = express.Router()

router.post("/register",registerMiddleware,async(req,res)=>{
    const {email,pass} = req.body
    try {
      bcrypt.hash(pass,10,async(err,hash)=>{
        if(err)res.send({msg:"Something went wrong"})
        else{
            const user = await UserModel.create({...req.body,pass:hash})
            await user.save()
            res.send({msg:"User registered successfully",user})
        }
      })

    } catch (error) {
        res.status(400).send({msg:error.message})
    }
})

router.post("/login",async(req,res)=>{
    const {email,pass} = req.body
    try {
        const user = await UserModel.findOne({email})
        if(!user){
            res.status(400).send("Invalid credentials")
        }
        const comparepass = await bcrypt.compare(pass,user.pass)
        if(!comparepass){
             res.status(400).send("Invalid credentials")
        }else{
            const token = jwt.sign({userId:user._id,name:user.name},mykey,{expiresIn: 200})
            const refreshToken = jwt.sign({email},rkey,{expiresIn:420})
            res.send({msg:"User logged in successfully",token,refreshToken})
        }
    } catch (error) {
        res.send(400).status({msg:error.message})
    }
})

router.get("/logout",async(req,res)=>{
    const token = req.headers.authorization.split(" ")[1]
    if(!token){
        res.send("Login First!")
    }
    try {
        const blackList = await BlackListModel.create({token})
        // await blackList.save()
         res.send("User Logged out")
    } catch (error) {
        // res.status(500).send({ msg: 'Cannot blacklist the token' });
        res.status(500).send({"msg":"Cannot blacklist the token"})
    }
})

router.get("/refreshToken",async(req,res)=>{
    const rtoken = req.headers.authorization.split(" ")[1]
    const {email,pass} = req.body
    if(!rtoken){
        res.send("Login First!!")
    }
    jwt.verify(rtoken,rkey,(err,decoded)=>{
        if(decoded){
            const token = jwt.sign({email},mykey,{expiresIn:"7d"})
            res.send({token})
        }else{
            res.send("Invalid Token!!")
        }
    })
})


module.exports = router 