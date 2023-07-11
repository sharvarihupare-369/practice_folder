const jwt = require("jsonwebtoken")

const auth = (req,res,next) => {
    const token = req.headers.authorization?.split(" ")[1]
    if(token){
        jwt.verify(token,"luffy",(err,decoded)=>{
            if(decoded){
                req.body.user = decoded.userID
                next()
            }else{
                res.send({"msg":"Please Login First"})
            }
        })
    }else{
        res.send({"msg":"Please Login"})    
    }
}

module.exports = auth;