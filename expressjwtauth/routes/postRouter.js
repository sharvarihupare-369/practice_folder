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
        // const posts = await BookModel.find({title})
        const book = await BookModel.find({title})
         res.status(200).json(book)
    } catch (error) {
         res.status(400).send({'msg' : error.message})
    }
})


router.get('/:postId',auth,async(req,res)=>{
    try {
        const book = await BookModel.findById(req.params.postId)
        if(!book){
            return res.status(400).send({"msg":"Book not found"})
        }
        return res.status(200).send(book)
    } catch (error) {
        return res.status(500).send({'msg' : error.message})
    }
})

router.patch('/update/:postId',auth,async(req,res)=>{
    try {
        const book = await BookModel.findById(req.params.postId)
        // if(!book){
        //     return res.status(400).send({"msg":"Book not found"})
        // }
        if(book.author.toString() !== req.userId)
        res.send("Yor are not allowed to update the book")
        const updatedBook = await BookModel.findByIdAndUpdate(req.params.postId,req.body,{new:true})
        res.status(200).send(updatedBook)
    } catch (error) {
        return res.status(500).send({'msg' : error.message})
    }
})

router.patch('/like/:postId',auth,async(req,res)=>{
    try {
       const book = await BookModel.findById(req.params.postId)
       const index = book.likes.findIndex((id)=>id===req.userId)
       if(index==-1){
          book.likes.push(req.userId)
       }else{
        book.likes = book.likes.filter((id)=> id!==String(req.userId))
       }
       const updatedBook = await BookModel.findByIdAndUpdate(req.params.postId,book,{new : true})
       res.send(updatedBook)
    } catch (error) {
        return res.status(500).send({'msg' : error.message})
    }
})



router.delete('/delete/:postId',auth,async(req,res)=>{
    try {
        const book = await BookModel.findByIdAndDelete({id:req.params.postId})
        return res.status(200).send("Book is deleted from DB")
    } catch (error) {
        return res.status(500).send({'msg' : error.message})
    }
})



module.exports = router