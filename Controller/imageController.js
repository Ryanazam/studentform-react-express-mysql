const Image = require('../Models/imageModel');
const fs = require('fs');

const uploadImage = (req, res) => {
  if (!req.file) {
    return res.status(400).send('No file uploaded.');
  }
console.log(req.file)
  const imageData = {
    filename: req.file.originalname,
    image: fs.readFileSync(req.file.path)
  };

  Image.create(imageData, (err, results) => {
    if (err) {
      return res.status(500).send(err);
    }
    res.status(201).json({ message: 'Image uploaded successfully!', data: results });
  });
};


module.exports = {
  uploadImage
};
