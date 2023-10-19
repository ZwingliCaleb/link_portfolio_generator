import React from 'react';
import { useLocation } from 'react-router-dom';

const ProfilePage = () => {
  const location = useLocation();
  const consolidatedLinks = location.state ? location.state.links : [];
  console.log(consolidatedLinks);

  return (
    <div>
      <h1>Your Profile Page</h1>
      {consolidatedLinks.map((link, index) => (
        <div key={index}>
          <p>Website Name: {link.websiteName}</p>
          <p>Description: {link.description}</p>
          <p>URL: {link.url}</p>
        </div>
      ))}
    </div>
  );
};

export default ProfilePage;
