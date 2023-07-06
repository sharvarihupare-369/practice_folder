const express = require("express")
const fs = require("fs")
const { addID } = require("./middlewares/addID.middleware")
const { auth } = require("./middlewares/auth.middleware")
const { logger } = require("./middlewares/logger.middleware")
const app = express()
app.use(express.json())

// app.get("/",(req,res)=>{
//     res.send("Welcome to home Page")
// })

app.use(logger)

app.post("/add/hero",addID,(req,res)=>{
    fs.readFile("./db.json","utf-8",(err,data)=>{
        if(err){
            res.send(err)
        }else{
            const parsedData = JSON.parse(data)
            parsedData.heroes.push(req.body)
            fs.writeFileSync('./db.json',JSON.stringify(parsedData))
            res.status(200).send(parsedData.heroes)
        }
    })
    
})

app.get("/heroes",(req,res)=>{
    fs.readFile('db.json',(err,data)=>{
        if(err){
            res.send(err)
        }else{
            const parsedData = JSON.parse(data)
            res.send(parsedData.heroes)
        }
    })
})

app.patch('/update/villain/:hero_id',auth,(req,res)=>{
    const id = +req.params.hero_id
    // console.log(id)

    fs.readFile('db.json',"utf-8",(err,data)=>{
        if(err){
            res.send(err)
        }else{
            const parsed_data = JSON.parse(data)
            let flag = false;
            for(let i=0; i<parsed_data.heroes.length; i++){
                if(parsed_data.heroes[i].id == id){
                    flag = true
                    const {name,health} = req.body
                    parsed_data.heroes[i].villains.push({name,health})
                }
            }
            if(flag){
                const updateData = parsed_data.heroes.find(el => el.id == id)
                fs.writeFileSync('./db.json',JSON.stringify(parsed_data))
                res.send(updateData)
            }else{
                res.send({ message: "Hero not found" })
            }
        }
    })

})

app.delete('/delete/hero/:hero_id',auth,(req,res)=>{
    const id = +req.params.hero_id
    fs.readFile('./db.json',"utf-8",(err,data)=>{
        if(err){
               res.send(err)
        }else{
            const parsed_data = JSON.parse(data)
            const deletedData = parsed_data.heroes.filter((el)=>el.id !== id)
            // console.log(deletedData)
            const newData = {heroes: deletedData}
            fs.writeFileSync('./db.json',JSON.stringify(newData))
            res.send(deletedData)
        }
    })
})

app.listen(8080,()=>{
    console.log("Server is listening on Port 8080")
})
//  do not forgot to export server

module.exports = app;
