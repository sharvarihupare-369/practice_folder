
const fs = require('fs')

const logger = (req,res,next) => {
  const log = `Method:${req.method}, Route:${req.url}, user-agent:${req.headers['user-agent']}`
  fs.appendFile('./logs.txt', log  + '\n', (err)=>{
    if(error){
        console.log(error)
    }
  })
  next()
}

module.exports = {logger}