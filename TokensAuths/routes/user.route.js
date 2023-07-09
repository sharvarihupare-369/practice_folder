const {Router} =  require("express")
const jwt = require("jsonwebtoken")
const userModel = require("../models/user.model")
const userRouter = Router()

userRouter.post("/register",async(req,res)=>{
    try {
        const user = await userModel(req.body)
        await user.save()
        res.send("New User added")
    } catch (error) {
        res.send(error)
    }
   
})



userRouter.post("/login",async(req,res)=>{
    const {email,password} = req.body
  try {
    const user = await userModel.findOne({email,password})
    if(user){
        const token = jwt.sign({email:email},"sharu",)
        res.send({msg:"Login Successful",token})
        // res.send({"msg":"User Logged in Successfully",user})
    }else{
        res.send({"msg":"Wrong Credentials"})
    }

  } catch (error) {
    res.send(error)
  }
})

module.exports = userRouter