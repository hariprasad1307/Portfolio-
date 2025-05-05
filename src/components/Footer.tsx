import React from 'react';
import { Github, Mail, Phone, ExternalLink } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div>
            <h3 className="text-2xl font-bold mb-4">Hariprasad M</h3>
            <p className="text-gray-400 mb-4">
              A passionate software developer dedicated to creating efficient, scalable, and user-friendly applications.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://github.com/hariprasad1307"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a
                href="https://leetcode.com/u/hariprasad_M/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="LeetCode"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16.5 19H21.5L16.5 30H21.5"></path>
                  <path d="M8.5 19L2 28L8.5 30L15 21"></path>
                  <path d="M20 4L12 4L4 20L9.5 20"></path>
                </svg>
              </a>
              <a
                href="mailto:hariprasad13072005@gmail.com"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-gray-400 hover:text-white transition-colors">Home</a>
              </li>
              <li>
                <a href="#about" className="text-gray-400 hover:text-white transition-colors">About</a>
              </li>
              <li>
                <a href="#skills" className="text-gray-400 hover:text-white transition-colors">Skills</a>
              </li>
              <li>
                <a href="#projects" className="text-gray-400 hover:text-white transition-colors">Projects</a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-white transition-colors">Contact</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-center">
                <Mail size={18} className="text-gray-400 mr-2" />
                <a 
                  href="mailto:hariprasad13072005@gmail.com" 
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  hariprasad13072005@gmail.com
                </a>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="text-gray-400 mr-2" />
                <a 
                  href="tel:8248473490" 
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  +91 8248473490
                </a>
              </li>
              <li className="flex items-center">
                <Github size={18} className="text-gray-400 mr-2" />
                <a 
                  href="https://github.com/hariprasad1307" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  hariprasad1307
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
          <p>© {currentYear} Hariprasad M. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;