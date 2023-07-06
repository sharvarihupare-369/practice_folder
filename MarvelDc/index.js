const express = require('express')
const app = express()
const fs = require('fs')
const { logger } = require('./middlewares/loggermiddleware')
const { validator } = require('./middlewares/validator')
app.use(express.json())
app.use(logger)

app.get("/",(req,res)=>{
    res.setHeader('content-type','text/html')
    res.send("<h1>Welcome new Team Member, You are about to be the part of best Superhero Team Out there!!!</h1>")
})

app.post('/marvel/addnew',(req,res)=>{
 
    fs.readFile('./db.json','utf-8',(err,data)=>{
        if(err){
            res.send(err)
        }else{
            const parsed_data = JSON.parse(data)
            parsed_data.marvel.push(req.body)
            fs.writeFileSync('./db.json',JSON.stringify(parsed_data))
            res.send("New superhero has been added")
        }
    })
     
})


app.post('/dc/addnew',(req,res)=>{
    fs.readFile('./db.json','utf-8',(err,data)=>{
        if(err){
            res.send(err)
        }else{
            const parsed_data = JSON.parse(data)
            parsed_data.dc.push(req.body)
            fs.writeFileSync('./db.json',JSON.stringify(parsed_data))
            res.send("New superhero has been added")
        }
    })
})

app.get('/marvel',(req,res)=>{
    const alias = req.query.alias
    if(alias){
        // const data = JSON.parse(fs.readFileSync("./db.json","utf-8"))
        // let aliasRes;
        // for(let i=0; i<data.marvel.length; i++){
        //     if(alias == data.marvel[i].alias){
        //         aliasRes = data.marvel[i]

        //     }
        //     res.send(aliasRes)
        // }
        const data = JSON.parse(fs.readFileSync("./db.json","utf-8"))
        let aliasRes;
        data.marvel.map((el)=>{
            if(el.alias == alias){
                aliasRes = el;
            }
        })
        // console.log(aliasRes)
        res.send(aliasRes)
    }else{
        const data = JSON.parse(fs.readFileSync("./db.json","utf-8"))
        res.send(data.marvel)
    }
})

app.get('/dc',(req,res)=>{
    const alias = req.query.alias
    if(alias){
        const data = JSON.parse(fs.readFileSync("./db.json","utf-8"))
        let aliasRes;
        data.dc.map((el)=>{
            if(el.alias == alias){
                aliasRes = el;
            }
        })
        // console.log(aliasRes)
        res.send(aliasRes)
    }else{
        const data = JSON.parse(fs.readFileSync("./db.json","utf-8"))
        res.send(data.dc)
    }
})

app.get('/marvel/:id',(req,res)=>{
    const id = +req.params.id
    const data = JSON.parse(fs.readFileSync('./db.json','utf-8'))
    let getEl;
    for(let i=0; i<data.marvel.length; i++){
        if(data.marvel[i].id === id){
            getEl = data.marvel[i]
        }

    }
    console.log(getEl)
    res.send(getEl)
})

app.get('/dc/:id',(req,res)=>{
    const id = +req.params.id
    const data = JSON.parse(fs.readFileSync('./db.json','utf-8'))
    let getEl;
    for(let i=0; i<data.marvel.length; i++){
        if(data.dc[i].id === id){
            getEl = data.dc[i]
        }

    }
    console.log(getEl)
    res.send(getEl)
})


app.get('/winningteam',(req,res)=>{
    const data = JSON.parse(fs.readFileSync('./db.json',"utf-8"))
    // console.log(data)
    let marvelPower = 0;
    for(let i=0; i<data.marvel.length; i++){
        marvelPower += data.marvel[i].power_level
    }
    // console.log(marvelPower)

    let dcPower = 0;
    for(let i=0; i<data.dc.length; i++){
        dcPower += data.dc[i].power_level
    }
    // console.log(dcPower)
    if(dcPower > marvelPower){
        console.log("dc")
        res.send(data.dc)
    }else if(marvelPower > dcPower){
        console.log("marvel")
        res.send(data.marvel)
    }
    // res.send("Hey!")
})

app.use(validator)

app.patch('/marvel/update/:id',(req,res)=>{
     const id = +req.params.id
     fs.readFile('./db.json','utf-8',(err,data)=>{
        if(err){
            res.send(err)
        }else{
            const parsed_data = JSON.parse(data)
            let flag = false;
            for(let i=0; i<parsed_data.marvel.length; i++){
                if(parsed_data.marvel[i].id == id){
                    flag = true
                    parsed_data.marvel[i] = {...parsed_data.marvel[i],...req.body}
                }
            }
            if(flag){
                fs.writeFileSync('./db.json',JSON.stringify(parsed_data))
                res.status(200).status(200).send('Patched Character Details')
            }
        }
     })
})

app.patch('/dc/update/:id',(req,res)=>{
    const id = +req.params.id
    fs.readFile('./db.json','utf-8',(err,data)=>{
       if(err){
           res.send(err)
       }else{
           const parsed_data = JSON.parse(data)
           let flag = false;
           for(let i=0; i<parsed_data.dc.length; i++){
               if(parsed_data.dc[i].id == id){
                   flag = true
                   parsed_data.dc[i] = {...parsed_data.dc[i],...req.body}
               }
           }
           if(flag){
               fs.writeFileSync('./db.json',JSON.stringify(parsed_data))
               res.status(200).status(200).send('Patched Character Details')
           }
       }
    })
})

app.delete('/marvel/delete/:id',(req,res)=>{
    const id = +req.params.id;
    fs.readFile('./db.json','utf-8',(err,data)=>{
        if(err){
            res.send(err)
        }else{
           const parsed_data = JSON.parse(data)
           const deletedData = parsed_data.marvel.filter(el => el.id != id)
           const newData = JSON.stringify({marvel:deletedData, dc:parsed_data.dc})
           fs.writeFileSync('./db.json',newData)
           res.send('Deleted Character Details')
        }
    })
})

app.delete('/dc/delete/:id',(req,res)=>{
    const id = +req.params.id;
    fs.readFile('./db.json','utf-8',(err,data)=>{
        if(err){
            res.send(err)
        }else{
           const parsed_data = JSON.parse(data)
           const deletedData = parsed_data.dc.filter(el => el.id != id)
           const newData = JSON.stringify({marvel:parsed_data.marvel, dc:deletedData})
           fs.writeFileSync('./db.json',newData)
           res.send('Deleted Character Details')
        }
    })
})


app.listen(8080,()=>{
    console.log("Server is listening on port 8080")
})
// Do not forget to export the server.
// e.g => module.exports = server;
module.exports = app