const express = require('express');
const multer = require('multer');
const path = require('path');
const imageController = require('../Controller/imageController');

const router = express.Router();

// Set up multer for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  }
});

const upload = multer({ storage:storage });

// Routes
router.post('/upload', upload.single('image'), imageController.uploadImage);


module.exports = router;
