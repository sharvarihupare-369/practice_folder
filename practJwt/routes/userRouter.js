const express = require("express")
const router =  express.Router()
const bcrypt = require("bcrypt")
const jwt= require("jsonwebtoken")
const UserModel = require("../models/userModel")
const registermid = require("../middlewares/registerMiddleware")
const mykey = process.env.JWT_SECRET
const rkey = process.env.JWT_REFRESH_KEY


router.get("/",(req,res)=>{
    res.send("Welcome to Home page")
})

router.post("/register",registermid,async(req,res)=>{
    try {
        const {pass} = req.body
        const newpass = await bcrypt.hash(pass,10)
        const user = await UserModel.create({...req.body,pass:newpass})
        res.status(200).send({msg:"User registered successfully",user})

    } catch (error) {
        res.status(400).send({"msg":error.message})
    }
})




module.exports = router