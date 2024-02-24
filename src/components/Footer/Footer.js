import React from "react";

const Footer = () => (
  <footer className="pb-8 pt-48 bg-gradient-to-b from-gray-950 to-blue-900">
    {/* SITE INFO */}
    <div className="flex justify-center items-center pb-2 text-white">
      <p>&copy; {new Date().getFullYear()} Kartik Patel. All rights reserved.</p>
    </div>
  </footer>
);

export default Footer;
