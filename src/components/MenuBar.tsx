import React from "react";

const MenuBar: React.FC = () => {
  return (
    <nav className="bg-orange-600 text-white p-4">
      <ul className="flex items-center">
        <li className="flex space-x-4">
          <a href="/" className="hover:text-gray-400">Home</a>
          <a href="/search-jobs" className="hover:text-gray-400">Search Jobs</a>
        </li>
        <li className="ml-auto">
          <a href="/about" className="hover:text-gray-400">About Me</a>
        </li>
      </ul>
    </nav>
  );
};

export default MenuBar; 
