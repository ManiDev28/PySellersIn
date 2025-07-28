import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const menuItems = [
    { label: 'Home', href: '/' },
    { label: 'About us', href:'/about-us'},
    { label: 'Our services', href:'/services' },
    { label: 'Our Products', href: '#products' },
    { label: 'Contact us', href: '/contact-us' }
  ];


  return (
    <header className="bg-header-1 px-4 sm:px-6 lg:px-[26px] py-1 sm:py-2 lg:py-[4px] w-full"> 
      <div className="flex justify-between items-center w-full">
        {/* Logo Section */}
        <div className="flex items-center gap-1 sm:gap-2 ml-2 sm:ml-4 lg:ml-[16px] mt-1 sm:mt-2 lg:mt-[6px]">
          <a href="/">
          <img 
            src="/images/common/pylogo.png" 
            alt="Pysellers Logo" 
            className="w-[40px] h-[48px] sm:w-[48px] sm:h-[56px] lg:w-[56px] lg:h-[66px]"
          />
          </a>
          <h1 className="text-header-1 font-inter font-semibold text-sm sm:text-base lg:text-[18px] leading-5 sm:leading-6 lg:leading-[22px]">
            PYSELLERS
          </h1>
        </div>

        {/* Hamburger Menu Icon (Mobile only) */}
        <button 
          className="block lg:hidden p-2" 
          aria-label="Open menu"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-4 lg:gap-[26px]">
          {menuItems.map((item, index) => (
            // link tag for navigation
            <Link
              key={index}
              role="menuitem"
              to={item.href}
              className="bg-global-5 text-global-1 font-ibm-plex font-medium text-[15px] leading-[20px] rounded-[10px] px-4 py-0.5 lg:px-[20px] lg:py-[2px] hover:bg-gray-100 transition-colors duration-200"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Mobile Navigation */}
        <nav className={`${menuOpen ? 'block' : 'hidden'} lg:hidden absolute top-full left-0 w-full bg-header-1 shadow-lg z-50`}>
          <div className="flex flex-col p-4 space-y-2">
            {menuItems.map((item, index) => (
              <button
                key={index}
                role="menuitem"
                className="bg-global-5 text-global-1 font-ibm-plex font-medium text-[15px] leading-[20px] rounded-[10px] px-4 py-2 text-left hover:bg-gray-100 transition-colors duration-200"
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </button>
            ))}
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;