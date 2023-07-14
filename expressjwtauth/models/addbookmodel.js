const mongoose = require('mongoose');
const UserModel = require('./userModel');

const bookSchema = new mongoose.Schema({
    title : {type : String, required : true},
    genre : {type : String, required : true},
    // author : {type : String, required : true},
    author : {type : mongoose.Schema.Types.ObjectId,ref:UserModel },
    name:{type:String},
    pulishing_year : Number
})

const BookModel = mongoose.model('book', bookSchema);

module.exports = BookModel;