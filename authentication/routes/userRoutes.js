
const express = require("express")
const router = express.Router()
const User = require('../models/userModel')
const bcrypt = require('bcrypt')

router.post('/register',async(req,res)=>{

console.log('inside')
const {username,dob,email,role,location,password} = req.body
const newpass = await bcrypt.hash(password,10)
    try {
        // const user = await User.create(req.body)
        const user = await User.create({...req.body,password:newpass})
        res.status(200).send(user)
        // res.send("User Created",user)
    } catch (error) {
      res.send(error)
    }

})

router.post('/login',async(req,res)=>{

    console.log('inside')
   

        try {
            // const user = await User.create(req.body)
            const {username,password} = req.body
            const user = await User.findOne({username})
            if(!user){
                res.send("First Sign Up")
            }
            const verify  = await bcrypt.compare(password,user.password)
            if(!verify){
                res.send("Incorrect Password")
            }
            res.send("Login successful")
           
        } catch (error) {
          res.send(error)
        }
    
    })

module.exports  = router