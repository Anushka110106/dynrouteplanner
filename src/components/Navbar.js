import React from "react";
import { FaMapMarkedAlt } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="bg-gradient-to-r from-blue-600 to-indigo-800 text-white p-4 flex justify-between items-center shadow-lg fixed w-full z-50">
      <h1 className="text-2xl font-bold flex items-center">
        <FaMapMarkedAlt className="mr-2" /> Route Dashboard
      </h1>
      <ul className="flex gap-6">
        <li className="cursor-pointer hover:text-gray-300">Home</li>
        <li className="cursor-pointer hover:text-gray-300">Services</li>
        <li className="cursor-pointer hover:text-gray-300">Contact</li>
      </ul>
    </nav>
  );
};

export default Navbar;
