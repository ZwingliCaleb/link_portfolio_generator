import React from 'react';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <p>&copy; {currentYear} Caleb Zwingli. All Rights Reserved.</p>
    </footer>
  );
};

export default Footer;
