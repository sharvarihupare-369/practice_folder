const UserModel = require("../models/userModel");

const registermid = async(req,res,next) => {
    const {email,pass} = req.body;
    if(pass.length < 8){
      return  res.status(400).send({msg : "Password should be at least 8 charachters"})
    }
    if(!/\d/.test(pass)){
      return  res.status(400).send({msg : "Password should conatin at least one number"})
    }

    if(!/[!@#$%^&]/.test(pass)){
      return  res.status(400).send({msg : "Password should conatin at least one special character"})
    }

    if(!/[A-Z]/.test(pass)){
       return res.status(400).send({msg : "Password should conatin at least one uppercase character"})
    }

    const existUser = await UserModel.findOne({email})
    if(existUser){
        return  res.status(400).send("User alreasy exists")
    }

    next()

}

module.exports = registermid