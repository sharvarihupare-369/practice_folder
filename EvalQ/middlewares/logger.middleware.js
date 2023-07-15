const fs = require("fs")
const logger = (req,res,next) => {
  const log = `URL: ${req.url}, Method: ${req.method}, Timestamp: ${new Date().toString()}`

  fs.appendFile('logs.txt', log + "\n", (err)=>{
    if(err){
      console.log(err)
    }
    next()
  })

 


};

module.exports = {
  logger,
};

//+0.5
