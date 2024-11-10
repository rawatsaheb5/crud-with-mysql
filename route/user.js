
const express = require('express');
const { signUp } = require('../controller/user');
const router = express.Router();

router.post('/register', signUp);
module.exports = router;