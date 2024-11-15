"use client";

import React, { useState } from 'react';

interface MenuItemProps {
  href?: string;
  children: React.ReactNode;
  onClick?: () => void;
}

const MenuItem: React.FC<MenuItemProps> = ({ href, children, onClick }) => {
  const baseClasses = "block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white transition-colors";
  
  return href ? (
    <a href={href} className={baseClasses}>
      {children}
    </a>
  ) : (
    <button onClick={onClick} className={baseClasses}>
      {children}
    </button>
  );
};

const DropdownMenu: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    if (!isMenuOpen) {
      setIsSubMenuOpen(false);
    }
  };

  const toggleSubMenu = () => {
    setIsSubMenuOpen(!isSubMenuOpen);
  };

  return (
    <div className="relative">
      {/* Hamburger Button */}
      <button
        onClick={toggleMenu}
        className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
        aria-label="Menu"
      >
        <div className="w-6 h-5 flex flex-col justify-between">
          <span className={`h-0.5 w-full bg-current transform transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`h-0.5 w-full bg-current transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`} />
          <span className={`h-0.5 w-full bg-current transform transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </div>
      </button>

      {/* Overlay */}
      {isMenuOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={toggleMenu}
        />
      )}

      {/* Menu Panel */}
      <div className={`absolute top-full right-0 mt-2 w-64 bg-white dark:bg-gray-800 rounded-lg shadow-lg z-50 transition-opacity duration-200 ${
        isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}>
        <nav className="py-2">
          <ul className="space-y-1">
            <li>
              <MenuItem href="#">Dashboard</MenuItem>
            </li>
            <li>
              <button
                onClick={toggleSubMenu}
                className="w-full px-4 py-2 flex items-center justify-between hover:bg-gray-100 dark:hover:bg-gray-600"
              >
                More options
                <svg 
                  className={`w-4 h-4 transform transition-transform ${isSubMenuOpen ? 'rotate-180' : ''}`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              <div className={`pl-4 space-y-1 transition-all duration-200 ${isSubMenuOpen ? 'max-h-48' : 'max-h-0 overflow-hidden'}`}>
                <MenuItem href="#">Overview</MenuItem>
                <MenuItem href="#">My downloads</MenuItem>
                <MenuItem href="#">Billing</MenuItem>
                <MenuItem href="#">Rewards</MenuItem>
              </div>
            </li>
            <li><MenuItem href="#">Earnings</MenuItem></li>
            <li><MenuItem href="#">Sign out</MenuItem></li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default DropdownMenu;