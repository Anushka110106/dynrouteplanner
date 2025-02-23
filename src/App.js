import React from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import Dashboard from "./pages/Dashboard";

const App = () => {
  return (
    <div className="relative">
      <Navbar />
      <Sidebar />
      <div className="ml-72 mt-16">
        <Dashboard />
        <Footer />
      </div>
    </div>
  );
};

export default App;
