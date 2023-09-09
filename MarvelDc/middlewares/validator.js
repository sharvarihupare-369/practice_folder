const fs = require('fs')

const validator = (req,res,next) => {
    const role = req.query.role;
    const pass = +req.query.pass;
    if(role == "leader" && pass == 4534){
        next()
    }else{
        // res.status(401).send('You are not authorised to do this operation')
        res.status(400).send('You are noy authorize to do this operation')
    }
}

module.exports = {
    validator
}