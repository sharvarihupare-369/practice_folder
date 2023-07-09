const jwt = require("jsonwebtoken")
const blacklist = require("./blacklist")
const auth = (req,res,next) => {
    const token = req.headers.authorization?.split(" ")[1]
    if(blacklist.includes(token)){
        res.send("Please Login Again!")
    }
    jwt.verify(token,"sharu",(err,decoded)=>{
        if(decoded){
           next()
        }else{
            res.send("Invalid Token")
        }
    })
}

module.exports = auth

//  $in blacklist array model