const fs = require("fs")
const addID = (req,res,next) => {
    const data = JSON.parse(fs.readFileSync('./db.json','utf-8'))
    const lastHero = data.heroes[data.heroes.length-1]
    req.body.id = lastHero ? lastHero.id + 1 : 1 
    next()
};

module.exports = {
  addID,
};

//+1
