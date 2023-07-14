const BookModel = require("../models/addbookmodel");

const exist = async(req,res,next) =>{
    const {email} = req.body
    const existedBook = await BookModel.findOne({ email });
    if (existedBook) {
      return res.status(400).json({ msg: 'Book already exists' });
    }else{
        next()
    }
  
}

module.exports = exist