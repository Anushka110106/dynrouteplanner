import React from "react";
import { FaRoute, FaBicycle, FaCar, FaTree } from "react-icons/fa";

const Sidebar = () => {
  return (
    <div className="bg-gray-900 text-white w-72 h-screen p-6 fixed top-0 left-0 mt-16 shadow-lg">
      <h2 className="text-2xl font-bold mb-6">Features</h2>
      <ul className="space-y-6">
        <li className="flex items-center cursor-pointer hover:text-blue-400">
          <FaRoute className="mr-3 text-xl" /> Route Planner
        </li>
        <li className="flex items-center cursor-pointer hover:text-blue-400">
          <FaBicycle className="mr-3 text-xl" /> Cycling Routes
        </li>
        <li className="flex items-center cursor-pointer hover:text-blue-400">
          <FaCar className="mr-3 text-xl" /> EV Charging
        </li>
        <li className="flex items-center cursor-pointer hover:text-blue-400">
          <FaTree className="mr-3 text-xl" /> Eco Travel
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
