import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-100 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="section-title">About Me</h2>
        <div className="section-subtitle">Get to know me better</div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center text-justify">
          <div className="space-y-6">
            <p className="text-lg">
              Hello! I'm Hariprasad, a passionate software developer dedicated to creating efficient, 
              scalable, and user-friendly applications. My journey in technology began with a 
              curiosity about how digital systems work and has evolved into a career focused on 
              building innovative solutions.
            </p>
            <p className="text-lg">
              I specialize in full-stack development with expertise in various programming languages 
              and frameworks. Whether it's developing responsive web applications, designing database 
              architectures, or implementing algorithms, I approach each project with enthusiasm 
              and a commitment to excellence.
            </p>
            <p className="text-lg">
              When I'm not coding, you can find me exploring new technologies, contributing to open-source 
              projects, or solving problems on platforms like LeetCode to continuously enhance my skills.
            </p>
            
            <div className="pt-4">
              <h3 className="text-xl font-semibold mb-3">Education</h3>
              <div className="space-y-3">
                <div className="p-4 bg-white dark:bg-gray-700 rounded-lg shadow-sm">
                  <h4 className="font-semibold">Computer Science Engineering</h4>
                  <p className="text-gray-600 dark:text-gray-400">B.Tech | 2022 - 2026</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="space-y-6">
            <div className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-semibold mb-4">Personal Details</h3>
              
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="font-medium w-24">Name:</span>
                  <span>Hariprasad M</span>
                </li>
                <li className="flex items-start">
                  <span className="font-medium w-24">Email:</span>
                  <a href="mailto:hariprasad13072005@gmail.com" className="text-blue-600 hover:underline">
                    hariprasad13072005@gmail.com
                  </a>
                </li>
                <li className="flex items-start">
                  <span className="font-medium w-24">Phone:</span>
                  <a href="tel:8248473490" className="text-blue-600 hover:underline">
                    8248473490
                  </a>
                </li>
                <li className="flex items-start">
                  <span className="font-medium w-24">GitHub:</span>
                  <a 
                    href="https://github.com/hariprasad1307" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    hariprasad1307
                  </a>
                </li>
                <li className="flex items-start">
                  <span className="font-medium w-24">LeetCode:</span>
                  <a 
                    href="https://leetcode.com/u/hariprasad_M/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    hariprasad_M
                  </a>
                </li>
              </ul>
            </div>
            
            <div className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-semibold mb-4">My Interests</h3>
              <div className="flex flex-wrap gap-2">
                {['Web Development', 'Python Development', 'Algorithms', 'Problem Solving', 'Open Source', 'New Technologies'].map((interest) => (
                  <span 
                    key={interest}
                    className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm"
                  >
                    {interest}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;