
const { addID } = require("./middlewares/addID.middleware")
const express = require("express")
const app = express()
app.use(express.json())
const fs = require("fs")
const { auth } = require("./middlewares/auth.middleware")
const { logger } = require("./middlewares/logger.middleware")


// console.log(addID)
app.use(logger)


app.post("/add/hero",addID,(req,res)=>{
 
      fs.readFile('./db.json','utf-8',(err,data)=>{
        if(err){
            res.send(err)
        }else{
            const parse_data = JSON.parse(data)
            parse_data.heroes.push(req.body)
            fs.writeFileSync('./db.json',JSON.stringify(parse_data))
            res.status(200).send(parse_data.heroes)
        }
      })

})


app.get("/heroes",(req,res)=>{
    fs.readFile("./db.json","utf-8",(err,data)=>{
        if(err){
            res.send(err)
        }else{
            const parse_data = JSON.parse(data)
            res.send(parse_data.heroes)
        }
    })
})

app.patch("/update/villain/:hero_id",auth,(req,res)=>{

    const id = +req.params.hero_id;
    fs.readFile("./db.json","utf-8",(err,data)=>{
        if(err){
            res.send(err)
        }else{
            const parseData = JSON.parse(data)
            let flag = false
            for(let i=0; i<parseData.heroes.length; i++){
                if(parseData.heroes[i].id == id){
                    flag = true;
                    const {name,health} = req.body
                    parseData.heroes[i].villains.push({name,health})
                }
            }
            if(flag){
                const updateData = parseData.heroes.find(el => el.id === id )
                fs.writeFileSync("./db.json",JSON.stringify(parseData))
                res.send(updateData)
            }else{
                res.send({message : "Hero not found"})
            }
        }
    })
})


app.delete("/delete/hero/:hero_id",auth,(req,res)=>{
    const id = +req.params.hero_id;
    fs.readFile("./db.json","utf-8",(err,data)=>{
        if(err){
            res.send(err)
        }else{
            const parseData = JSON.parse(data)
            const deletedData =  parseData.heroes.filter((el) => el.id !== id) 
            const newData = {heroes : deletedData} 
            fs.writeFileSync("./db.json",JSON.stringify(newData))
            res.send(deletedData)
        }
    })
})


app.listen(7500,()=>{
    console.log("Server is listening on Port 7500")
})



//  do not forgot to export server

module.exports = app;
