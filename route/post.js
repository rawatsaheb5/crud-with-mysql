
const express = require('express');
const { createPost, deletePost } = require('../controller/post');
const router = express.Router();

router.post('/create', createPost);
router.delete('/delete/:id', deletePost)

module.exports = router;