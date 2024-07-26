const db = require('../utils/database');

const Image = {
  create: (imageData, callback) => {
    const query = 'INSERT INTO project (Title, files) VALUES (?, ?)';
    db.execute(query, [imageData.filename, imageData.image], callback);
  },

};

module.exports = Image;
