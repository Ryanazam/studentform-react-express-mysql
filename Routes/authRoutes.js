const express = require('express');
const { login } = require('../Controller/authController');
const router = express.Router();

router.post('/login', login);

module.exports = router;
