const express = require("express")
const NoteModel = require("../models/noteModel");
const auth = require("../middlewares/authMiddleware");
const noteRouter = express.Router()


noteRouter.get('/',auth, async(req, res) => {
    try {
        const notes = await NoteModel.find();
        res.status(200).send(notes);
    } catch (error) {
        res.status(400).send(error.message);
    }
})

noteRouter.post("/create",auth,async(req,res)=>{
    try {
        const note = await NoteModel.create(req.body)
        res.send({"msg":"Note created",note})
        
    } catch (error) {
        res.send(error.message)
    }
    
})


noteRouter.delete('/delete/:id',auth, async(req, res) => {
    const noteID = req.params.id;
    try {
        const note = await NoteModel.findByIdAndDelete({_id : noteID});
        res.status(200).send({'msg' : 'Note deleted', note});
    } catch (error) {
        res.status(400).send({'msg' : error.message});
    }
})

module.exports = noteRouter