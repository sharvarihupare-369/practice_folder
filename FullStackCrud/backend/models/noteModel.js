const mongoose = require("mongoose")

const noteSchema = new mongoose.Schema({
   title:String,
   body:String,
   author:String
})

const NoteModel = mongoose.model("note",noteSchema)

module.exports = NoteModel ;
