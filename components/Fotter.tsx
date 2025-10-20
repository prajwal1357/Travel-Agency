import React from "react";
import { FaInstagram, FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="w-full bg-gray-900 text-gray-300 py-8 mt-12 border-t border-gray-800">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        
        <div className="flex flex-col items-center md:items-start gap-2">
          <div className="flex items-center gap-2">
            <img
              src="/public/assets/icons/logo.png"
              alt="App Logo"
              className="w-32 h-10 size-32 rounded-full object-contain"
            />
          </div>

          <p className="text-sm text-gray-400 mt-1">
            Crafted with <span className="text-red-500">❤️</span> by a Banglorian
          </p>
        </div>

        <div className="flex items-center gap-6">
          <a
            href="https://instagram.com/prajwal_apex"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-500 transition-colors duration-200"
          >
            <FaInstagram size={22} />
          </a>

          <a
            href="mailto:prajwalvr1357@gmail.com"
            className="hover:text-red-400 transition-colors duration-200"
          >
            <MdEmail size={22} />
          </a>

          <a
            href="https://github.com/prajwal357"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-100 transition-colors duration-200"
          >
            <FaGithub size={22} />
          </a>
        </div>
      </div>

      <div className="text-center text-xs text-gray-500 mt-6">
        © {new Date().getFullYear()} Jyoluxe. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
