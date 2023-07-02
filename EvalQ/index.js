
const express = require("express")
const app = express()
app.use(express.json())
const fs = require("fs")

app.post("/add/hero",(req,res)=>{
    const data = JSON.parse(fs.readFileSync("./db.json",'utf-8'))
    console.log(data)
    data.heroes.push(req.body)

    fs.writeFileSync('./db.json',JSON.stringify(data))
    
    const stringData = JSON.stringify(data.heroes)
    res.send(stringData)
})

app.listen(7500,()=>{
    console.log("Server is listening on Port 7500")
})



//  do not forgot to export server

module.exports = app;
