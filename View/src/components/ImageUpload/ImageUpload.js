import React, { useState } from 'react';
import axios from 'axios';
import './ImageUpload.css'; // Import the CSS file

const ImageUpload = () => {
  const [image, setImage] = useState(null);
  const [successMessage, setSuccessMessage] = useState('');

  

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('image', image);

    
    try {
      const res = await axios.post('http://localhost:5000/api/image/upload', formData);
      console.log(res);
      setSuccessMessage(res); // Set success message
    } catch (err) {
      console.error(err);
      setSuccessMessage('Image upload failed. Please try again.');
    }
  };

  

  return (
    <div className="image-upload-container">
      <form className="image-upload-form" onSubmit={handleSubmit}>
        <input type="file" onChange={handleImageChange} />
        <button type="submit">Upload</button>
    
      </form>
      {successMessage && <p className="success-message">{successMessage}</p>} {/* Display success message */}


      
    </div>
  );
};

export default ImageUpload;
