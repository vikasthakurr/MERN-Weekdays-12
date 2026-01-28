import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white font-bold">
          My App
        </div>
        <div>
          <Link to="/" className="text-white hover:text-gray-300 px-3 py-2 rounded-md text-sm font-medium">Home</Link>
          <Link to="/about" className="text-white hover:text-gray-300 px-3 py-2 rounded-md text-sm font-medium">About</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
