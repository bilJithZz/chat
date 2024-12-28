import React from 'react';

const Footer = () => {
  return (
    <div className="grid grid-cols-3 gap-8 p-4  py-24">
      <div className="flex flex-col justify-center items-center gap-2">
        <h2 className="font-bold text-lg">About Us</h2>
        <p>Learn more about our mission and vision.</p>
      </div>
      <div className="flex flex-col justify-center items-center gap-2">
        <h2 className="font-bold text-lg">Company Name</h2>
        <p>Your trusted partner for innovative solutions.</p>
      </div>
      <div className="flex flex-col justify-center items-center gap-2">
        <h2 className="font-bold text-lg">Contact Us</h2>
        <p>info@company.com</p>
        <p>+1 234 567 890</p>
      </div>
    </div>
  );
};

export default Footer;
