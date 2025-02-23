import React from "react";
import { motion } from "framer-motion";

const Car = ({ delay }) => {
  return (
    <motion.div
      className="w-16 h-8 bg-red-500 rounded-lg absolute shadow-lg"
      initial={{ x: "-100%" }}
      animate={{ x: "100%" }}
      transition={{ duration: 6, repeat: Infinity, ease: "linear", delay }}
    />
  );
};

const Dashboard = () => {
  return (
    <div className="relative min-h-screen flex justify-center items-center overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 w-full h-full object-cover z-[-1]"
      >
        <source src="/background.mp4" type="video/mp4" />
      </video>

      <div className="relative w-3/4 h-48 bg-gray-800 bg-opacity-50 rounded-lg p-6 text-white">
        <h2 className="text-3xl font-bold mb-4 text-center">Live Traffic Route</h2>
        <div className="relative w-full h-24 bg-gray-900 flex items-center justify-center rounded-md">
          <div className="absolute top-1/2 w-full h-1 bg-white dashed-line"></div>
          <Car delay={0} />
          <Car delay={2} />
          <Car delay={4} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
