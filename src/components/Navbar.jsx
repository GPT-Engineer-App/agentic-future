import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-lg font-bold">Cutting-Edge Web App</div>
        <div className="space-x-4">
          <Link to="/" className="text-white">Home</Link>
          <Link to="/about" className="text-white">About</Link>
          <Link to="/contact" className="text-white">Contact</Link>
          <Link to="/browse" className="text-white">Browse</Link>
          <Link to="/terminal" className="text-white">Terminal</Link>
          <Link to="/file-management" className="text-white">File Management</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;