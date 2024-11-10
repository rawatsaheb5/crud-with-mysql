
const express = require('express');
const { createPost, deletePost, updatePost, getAllPostOfTheUser } = require('../controller/post');
const router = express.Router();

router.post('/create', createPost);
router.delete('/delete/:id', deletePost)
router.put('/update/:id', updatePost)
router.get('/user/:userId', getAllPostOfTheUser)
module.exports = router;