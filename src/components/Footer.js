import React from 'react';

const Footer = () => {
  const supportEmails = [
    'support@ibmc.tech',
    'contact@cenopie.com', 
    'support@cenopienetwork.me'
  ];

  return (
    <div className="footer">
      <p>© 2025 Cenopie. All rights reserved. | Contact us for any queries.</p>
      <div className="support-links">
        {supportEmails.map((email, index) => (
          <a key={index} href={`mailto:${email}`}>
            {email}
          </a>
        ))}
      </div>
    </div>
  );
};

export default Footer;