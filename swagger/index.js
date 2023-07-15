const express = require("express")
const connection = require("./db")
const app = express()
require("dotenv").config()
const swaggerUI = require("swagger-ui-express")
const swaggerJsDoc = require("swagger-jsdoc")
const userRouter = require("./routes/userRouter")
app.use(express.json())


//openapi specifications
const options = {
    definition :{
        openapi:"3.0.0",
        info:{
            title : "Learning Swagger for First time",
            version:"1.0.0"
        },
        server:[
            {
                url: "http://localhost:8080"
            }
        ]
    },
    apis:["./routes/*.js"]
}

//swagger specs
const swaggerSpec=swaggerJsDoc(options)

//build the UI
app.use("/api-docs",swaggerUI.serve,swaggerUI.setup(swaggerSpec))

app.use("/users",userRouter)

app.get("/",(req,res)=>{
    res.send("Welcome to Home page")
})


app.listen(process.env.port,async()=>{
    try {
        await connection
        console.log("Connected to DB")
    } catch (error) {
        console.log(error)
    }
    console.log(`Server is listening on port ${process.env.port}`)
})