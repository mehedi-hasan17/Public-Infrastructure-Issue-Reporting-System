import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-6 mt-20">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
        
        {/* Copyright */}
        <p className="text-center md:text-left text-sm sm:text-base">
          © 2025 Public Infrastructure Reporting System
        </p>

        {/* Optional Links or Social Icons */}
        <div className="flex mt-3 md:mt-0 gap-4">
          <a href="/" className="hover:text-lime-400 transition-colors">
            Home
          </a>
          <a href="/issues" className="hover:text-lime-400 transition-colors">
            All Issues
          </a>
          <a href="/contact" className="hover:text-lime-400 transition-colors">
            Contact
          </a>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
