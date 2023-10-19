import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './ProfilePage.css';

const ProfilePage = () => {
  const location = useLocation();
  const Navigate = useNavigate();
  const consolidatedLinks = location.state ? location.state.links : [];
  console.log(consolidatedLinks);

  const handleBackClick = () => {
    Navigate(-1);
  };

  return (
    <div>
      <h1>Your Profile Page</h1>
      <button onClick={handleBackClick}>Back to form</button>

      {consolidatedLinks.map((link, index) => (
        <div key={index}>
          <p>Website Name: {link.websiteName}</p>
          <p>Description: {link.description}</p>
          <p>URL: {link.url}</p>
        </div>
      ))}

      <div className="long-link-box">
        <input type="text" value="YOUR_PROFILE_LINK_HERE" radonly />
        <button onClick={() => {}}>Copy</button>
      </div>
    </div>
  );
};

export default ProfilePage;
