const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    title : {type : String, required : true},
    genre : {type : String, required : true},
    author : {type : String, required : true},
    pulishing_year : Number
})

const BookModel = mongoose.model('book', bookSchema);

module.exports = BookModel;