import React, { useRef } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './ProfilePage.css';

const ProfilePage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const inputRef = useRef(null);
  const consolidatedLinks = location.state ? location.state.links : [];

  const handleBackClick = () => {
    navigate(-1);
  };

  const handleCopyClick = () => {
    if (inputRef.current) {
      inputRef.current.select();
      document.execCommand('copy');
      // Check if the copy operation was successful
      if (document.queryCommandSupported('copy')) {
        alert('Link copied to clipboard!');
      } else {
        alert('Oops, unable to copy. Please try again manually.');
      }
    }
  };

  return (
    <div className="profile-page">
      <h1>Profile Page</h1>
      <button onClick={handleBackClick}>Back to form</button>

      <div className="content-box">
        {consolidatedLinks.map((link, index) => (
          <div key={index} className="link-info-box">
            <div key = {index}>
              {/*Display image if available*/}
              {link.images && link.images.length > 0 && (
                <img
                  src={link.images[0].preview}
                  alt="Preview"
                  className="profile-image"
                />
              )}
            <p>Website Name: {link.websiteName}</p>
            <p>Description: {link.description}</p>
            <p>URL: {link.url}</p>
            </div>

            {link.images && link.images.length > 0 && (
              <div className="image-container">
                <img src={URL.createObjectURL(new Blob([link.images[0]], { type : link.images[0].type}))} alt={`Image ${index + 1}`} />
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="short-link-box">
        <input
          ref={inputRef}
          type="text"
          value={`https://calebzwingli.com/profiles/${location.state.uniqueIdentifier}`}
          readOnly
        />
        <button onClick={handleCopyClick}>Copy</button>
      </div>
    </div>
  );
};

export default ProfilePage;
