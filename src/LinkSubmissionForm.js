import React, { useState } from 'react';

const LinkSubmissionForm = () => {
  const [formData, setFormData] = useState({
    websiteName: '',
    description: '',
    url: '',
    image: null, // For storing the uploaded image (if implemented)
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleImageUpload = (e) => {
    // Handle image upload logic here (if implemented)
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Process form data and generate the link profile here
    console.log('Form submitted:', formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Website Name:</label>
        <input
          type="text"
          name="websiteName"
          value={formData.websiteName}
          onChange={handleInputChange}
          required
        />
      </div>
      <div>
        <label>Description:</label>
        <input
          type="text"
          name="description"
          value={formData.description}
          onChange={handleInputChange}
          required
        />
      </div>
      <div>
        <label>URL:</label>
        <input
          type="url"
          name="url"
          value={formData.url}
          onChange={handleInputChange}
          required
        />
      </div>
      {/* Optional Image Upload Field */}
      {/* <div>
        <label>Upload Image:</label>
        <input
          type="file"
          accept="image/*"
          onChange={handleImageUpload}
        />
      </div> */}
      <button type="submit">Generate Portfolio</button>
    </form>
  );
};

export default LinkSubmissionForm;
