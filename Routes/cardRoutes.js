const express = require('express');
const router = express.Router();
const cardController =  require("../Controller/CardController");



router.get('/image', cardController.getCards);

module.exports = router;