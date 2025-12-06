import React from 'react';
import { Twitter, Linkedin, Github, Mail } from 'lucide-react';

const Footer = () => {
  const primaryLinks = [
    { name: 'Services', href: '#' },
    { name: 'Features', href: '#' },
    { name: 'Pricing', href: '#' },
    { name: 'Careers', href: '#' },
  ];

  const legalLinks = [
    { name: 'Privacy Policy', href: '#' },
    { name: 'Terms of Service', href: '#' },
    { name: 'Security', href: '#' },
  ];

  const socialIcons = [
    { icon: <Twitter size={20} />, href: '#', label: 'Twitter' },
    { icon: <Linkedin size={20} />, href: '#', label: 'LinkedIn' },
    { icon: <Github size={20} />, href: '#', label: 'GitHub' },
    { icon: <Mail size={20} />, href: '#', label: 'Email' },
  ];

  return (
    <footer className="bg-gray-900">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-24">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 text-center md:text-left">
          {/* Column 1: Brand and Social */}
          <div className="space-y-6">
            <a href="#" role="link" className="text-2xl font-bold text-white transition-opacity duration-200 hover:opacity-90">
              BrandName
            </a>
            <p className="text-base text-gray-300 font-medium leading-normal">
              Digital solutions built for the future.
            </p>

            <div className="flex justify-center md:justify-start gap-4 pt-2">
              {socialIcons.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  aria-label={item.label}
                  role="link"
                  className="p-3 rounded-xl bg-indigo-600 text-white hover:bg-indigo-700 transition-colors duration-200"
                >
                  {item.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-white leading-normal">
              Quick Links
            </h3>
            <ul className="space-y-4">
              {primaryLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    role="link"
                    className="text-base text-gray-300 font-medium leading-normal hover:text-indigo-600 transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Legal & Info */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-white leading-normal">
              Company
            </h3>
            <ul className="space-y-4">
              {legalLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    role="link"
                    className="text-base text-gray-300 font-medium leading-normal hover:text-indigo-600 transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact Short Info */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-white leading-normal">
              Contact
            </h3>
            <div className="space-y-4 text-base text-gray-300 font-medium leading-normal">
              <p>Email: <a href="mailto:info@brandname.com" className="hover:text-indigo-600 transition-colors duration-200">info@brandname.com</a></p>
              <p>Phone: <a href="tel:+15551234567" className="hover:text-indigo-600 transition-colors duration-200">+1 (555) 123-4567</a></p>
              <p>Address: 123 Tech Way, Suite 400, Digital City, USA</p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="my-16 border-t border-gray-700"></div>

        {/* Copyright Line */}
        <div className="text-center">
          <p className="text-base text-gray-300 font-medium leading-normal">
            &copy; {new Date().getFullYear()} BrandName, Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;