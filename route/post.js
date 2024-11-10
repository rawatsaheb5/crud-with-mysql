
const express = require('express');
const { createPost, deletePost, updatePost } = require('../controller/post');
const router = express.Router();

router.post('/create', createPost);
router.delete('/delete/:id', deletePost)
router.put('/update/:id', updatePost)
module.exports = router;