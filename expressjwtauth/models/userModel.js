const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    name:{type:String,required:true},
    email:{type:String,required:true},
    dob:{type:Date,required:true},
    role:{type:String,enum:['Admin','Explorer'],required:true},
    pass:{type:String,required:true},
    city:{type:String,required:true},
    age:{type:Number}
})

const UserModel = mongoose.model("user",userSchema)

module.exports = UserModel