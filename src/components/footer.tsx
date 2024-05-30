import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-4 text-xs text-center font-thin">
      &copy; {new Date().getFullYear()} Notification Dashboard
    </footer>
  );
};

export default Footer;
