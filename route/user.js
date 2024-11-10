
const express = require('express');
const { signUp, signIn } = require('../controller/user');
const router = express.Router();

router.post('/register', signUp);
router.post('/login', signIn)
module.exports = router;