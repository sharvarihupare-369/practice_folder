const express = require("express")
const router = express.Router()
const BookModel = require("../models/addbookmodel")
const auth = require("../middlewares/authMiddleware")
const exist = require("../middlewares/existBook")

router.post('/add', auth, async(req, res) => {
    try {
        // const book = await BookModel.create(req.body);
        const {title,genre} = req.body
        // const book = new BookModel({
        //     title,
        //     genre,
        //     author:req.userId,
        //     name:req.name
        // })
        // await book.save()
        const book = await BookModel.create({title,genre,author:req.userId,name:req.name})
        // await book.populate("author")
        return res.status(200).send({'msg' : 'Book Added', book})
    } catch (error) {
       return res.status(400).send({'msg' : error.message})
    }
})

router.get('/', async(req, res) => {
    try {
        const books = await BookModel.find()
        return res.status(200).send(books)
    } catch (error) {
       return res.status(400).send({'msg' : error.message})
    }
})



router.get("/search",async(req,res)=>{
    try {
        const {searchQuery} = req.query
        const title = new RegExp(searchQuery,"i")
        const posts = await BookModel.find({title})
        const book = await BookModel.find()
        return res.status(200).json(book)
    } catch (error) {
        return res.status(400).send({'msg' : error.message})
    }
})


module.exports = router