
import React, { useState } from 'react';
import { Page } from '../types';

interface NavbarProps {
  currentPage: Page;
  onNavigate: (page: Page) => void;
}

const Navbar: React.FC<NavbarProps> = ({ currentPage, onNavigate }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: 'Home', value: Page.Home },
    { label: 'Services', value: Page.Services },
    { label: 'Academy', value: Page.Courses },
    { label: 'How It Works', value: Page.HowItWorks },
    { label: 'Why This Matters', value: Page.WhyThisMatters },
    { label: 'Our Approach', value: Page.OurApproach },
  ];

  const handleNav = (value: Page) => {
    onNavigate(value);
    setIsMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#FAFAFA]/90 backdrop-blur-md border-b border-[#E5E5E5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div 
            className="flex-shrink-0 flex items-center cursor-pointer group"
            onClick={() => handleNav(Page.Home)}
          >
            <span className="text-xl font-bold tracking-tight text-[#333333]">
              DIGITAL <span className="text-[#C17854]">JAYWALKING</span>
            </span>
          </div>
          
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => handleNav(item.value)}
                className={`text-sm font-medium transition-colors ${
                  currentPage === item.value
                    ? 'text-[#C17854]'
                    : 'text-[#666666] hover:text-[#333333]'
                }`}
              >
                {item.label}
              </button>
            ))}
            <button 
              className="ml-4 px-6 py-2.5 bg-[#C17854] text-white text-sm font-semibold rounded-full hover:bg-[#B86F47] transition-all transform hover:scale-105"
              onClick={() => handleNav(Page.DiscoveryCall)}
            >
              Book a Discovery Call
            </button>
          </div>

          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-[#333333] p-2"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-[#FAFAFA] border-b border-[#E5E5E5]">
          <div className="px-2 pt-2 pb-6 space-y-1">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => handleNav(item.value)}
                className={`block w-full text-left px-4 py-3 text-base font-medium rounded-md ${
                  currentPage === item.value
                    ? 'text-[#C17854] bg-[#F5F5F5]'
                    : 'text-[#666666] hover:text-[#333333] hover:bg-[#F5F5F5]'
                }`}
              >
                {item.label}
              </button>
            ))}
            <div className="px-4 mt-4">
              <button 
                className="w-full px-6 py-3 bg-[#C17854] text-white text-base font-semibold rounded-full hover:bg-[#B86F47]"
                onClick={() => handleNav(Page.DiscoveryCall)}
              >
                Book a Discovery Call
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
