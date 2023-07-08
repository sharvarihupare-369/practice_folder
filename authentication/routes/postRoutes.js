const express = require("express")
const router = express.Router()
const Post = require('../models/postModel')

router.post("/",async(req,res)=>{
const password = req.query.password
  try {
    const {title,content} = req.body;
    //One way to add
    // const post = new Post({title,content})
    // await post.save()

    //Another way to add
    if()
    const post = await Post.create(req.body)
    console.log("Yes")
    res.status(200).send("Posted data")
  } catch (error) {
    res.send(error)
  }
})

module.exports = router