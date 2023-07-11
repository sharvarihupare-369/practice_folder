const express = require("express")
const NoteModel = require("../models/noteModel")
const noteRouter = express.Router()


noteRouter.get("/",(req,res)=>{
    res.send("All the notes")
})

noteRouter.post("/create",async(req,res)=>{
    try {
        const note = await NoteModel.create(req.body)
        res.send({"msg":"Note created",note})
        
    } catch (error) {
        res.send(error.message)
    }
    
})


noteRouter.delete("/delete/:id",(req,res)=>{
    res.send("Note deleted")
})

module.exports = noteRouter