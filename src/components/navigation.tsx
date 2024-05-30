import React from "react";

const Navigation = () => {
  return (
    <nav className="bg-gray-800 text-white w-64 p-4">
      <ul>
        <li className="py-2">
          <a href="#email" className="text-gray-300 hover:text-white">
            Email
          </a>
        </li>
        <li className="py-2">
          <a href="#sms" className="text-gray-300 hover:text-white">
            SMS
          </a>
        </li>
        <li className="py-2">
          <a href="#push" className="text-gray-300 hover:text-white">
            Push
          </a>
        </li>
        <li className="py-2">
          <a href="#whatsapp" className="text-gray-300 hover:text-white">
            WhatsApp
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
