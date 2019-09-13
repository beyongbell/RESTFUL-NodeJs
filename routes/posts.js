const express = require('express');
const router  = express.Router();
const Post    = require('../models/Post');
// Index
router.get('/', async (req, res) => {
    try {
        const posts = await Post.find();
        res.json(posts)
    } catch(err) {
        res.json({ message: err})
    }
})
// SAVE
router.post('/', async (req, res) => {
    // post.save().then(data => { res.json(data) }).catch(err => { res.json({ message: err})})
    const post = new Post({
        title : req.body.title,
        description: req.body.description
    })

    try {
        const savedPost = await post.save()
        res.json(savedPost);
    } catch(err) {
        res.json({message: err});
    }
})
// SHOW
router.get('/:postId', async (req, res) => {
  try {
    const post = await Post.findById(req.params.postId);
    res.json(post)
  } catch (error) {
    res.json({ message: error});
  }
})
// UPDATE
router.patch('/:postId', async (req, res) => {
    try {
        const updatedPost = await Post.updateOne({_id: req.params.postId},{ $set: {title : req.body.title, description : req.body.description} })
        res.json(updatedPost)
    } catch (error) {
        res.json({message : error})
    }
})
// DELETE POST
router.delete('/:postId', async (req, res) => {
    try {
        const removePost = await Post.remove({_id: req.params.postId})
        res.json(removePost);
    } catch (error) {
        res.json({message: error});
    }
});

module.exports = router;