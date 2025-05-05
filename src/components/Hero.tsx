import React, { useEffect, useRef } from 'react';
import { ArrowRight, Github, Linkedin } from 'lucide-react';

const Hero = () => {
  const textRef = useRef<HTMLSpanElement>(null);
  const roles = ['Software Developer', 'Problem Solver', 'Tech Enthusiast'];
  
  useEffect(() => {
    let currentIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typingSpeed = 100;
    
    const type = () => {
      const currentRole = roles[currentIndex];
      
      if (isDeleting) {
        if (textRef.current) {
          textRef.current.textContent = currentRole.substring(0, charIndex - 1);
        }
        charIndex--;
        typingSpeed = 50;
      } else {
        if (textRef.current) {
          textRef.current.textContent = currentRole.substring(0, charIndex + 1);
        }
        charIndex++;
        typingSpeed = 100;
      }
      
      if (!isDeleting && charIndex === currentRole.length) {
        isDeleting = true;
        typingSpeed = 1000; // Pause before deleting
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        currentIndex = (currentIndex + 1) % roles.length;
        typingSpeed = 500; // Pause before typing next word
      }
      
      setTimeout(type, typingSpeed);
    };
    
    setTimeout(type, 1000);
    
    return () => {
      // Cleanup if needed
    };
  }, []);
  
  return (
    <section id="home" className="pt-24 md:pt-36 pb-16 md:pb-24">
      <div className="container mx-auto px-4 flex flex-col items-center">
        <div className="text-center mb-8 animate-fade-up">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Hello, I'm <span className="text-blue-600">Hariprasad</span>
          </h1>
          <h2 className="text-2xl md:text-3xl mb-8 text-gray-700 dark:text-gray-300">
            I'm a <span ref={textRef} className="text-blue-600 font-semibold"></span>
            <span className="text-blue-600 font-semibold animate-pulse">|</span>
          </h2>
          <p className="text-lg md:text-xl max-w-3xl mx-auto mb-10 text-gray-600 dark:text-gray-400">
            Building innovative solutions and digital experiences with a passion for clean code and
            problem-solving.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="#projects" className="btn btn-primary">
              View My Work <ArrowRight size={18} />
            </a>
            <a href="#contact" className="btn btn-secondary">
              Get In Touch
            </a>
          </div>
        </div>
        
        <div className="flex space-x-4 mt-8">
          <a
            href="https://github.com/hariprasad1307"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full hover:bg-blue-100 dark:hover:bg-blue-900/30 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            aria-label="GitHub"
          >
            <Github size={24} />
          </a>
          <a
            href="https://leetcode.com/u/hariprasad_M/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full hover:bg-blue-100 dark:hover:bg-blue-900/30 hover:text-blue-600 dark:hover:text-blue-400 transition-colors flex items-center justify-center"
            aria-label="LeetCode"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M16.5 19H21.5L16.5 30H21.5"></path>
              <path d="M8.5 19L2 28L8.5 30L15 21"></path>
              <path d="M20 4L12 4L4 20L9.5 20"></path>
            </svg>
          </a>
          <a
            href="mailto:hariprasad13072005@gmail.com"
            className="p-3 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full hover:bg-blue-100 dark:hover:bg-blue-900/30 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            aria-label="Email"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect width="20" height="16" x="2" y="4" rx="2"></rect>
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;