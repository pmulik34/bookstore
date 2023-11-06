import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className='footer'>
      <div className=''>
        <span>© {currentYear} BookStore, Inc. All rights reserved.</span>
      </div>
    </footer>
  );
};

export default Footer;
