import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Services', href: '#' },
    { name: 'Features', href: '#' },
    { name: 'Pricing', href: '#' },
    { name: 'About Us', href: '#' },
    { name: 'Contact', href: '#' },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md shadow-sm transition-all duration-200">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-4">
        <div className="flex justify-between items-center">
          {/* Brand/Logo - Left */}
          <a href="#" role="link" className="text-2xl font-bold text-gray-900 transition-opacity duration-200 hover:opacity-90">
            BrandName
          </a>

          {/* Desktop Links - Right */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((item) => (
              <a
                key={item.name}
                href={item.href}
                role="link"
                className="text-base text-gray-700 font-medium leading-normal transition-colors duration-200 hover:text-indigo-600"
              >
                {item.name}
              </a>
            ))}
            <a
              href="#"
              role="link"
              className="bg-indigo-600 text-white font-semibold px-6 py-3 rounded-xl hover:bg-indigo-700 transition-all duration-200"
            >
              Get Started
            </a>
          </div>

          {/* Mobile Menu Button - Hamburger */}
          <button
            type="button"
            className="md:hidden text-gray-900 hover:text-indigo-600 transition-colors duration-200"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      <div
        className={`md:hidden absolute w-full top-full transition-all duration-300 ease-in-out ${
          isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2 pointer-events-none'
        } px-6 pb-4`}
      >
        <div className="bg-white shadow-md rounded-xl p-6 border border-gray-200 space-y-4">
          {navLinks.map((item) => (
            <a
              key={item.name}
              href={item.href}
              role="link"
              className="block text-lg text-gray-800 font-medium leading-normal p-2 rounded-lg hover:bg-gray-50 transition-colors duration-200"
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </a>
          ))}
          <a
            href="#"
            role="link"
            className="w-full bg-indigo-600 text-white font-semibold text-lg text-center px-6 py-3 mt-4 rounded-xl hover:bg-indigo-700 transition-all duration-200 block"
            onClick={() => setIsOpen(false)}
          >
            Get Started
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;