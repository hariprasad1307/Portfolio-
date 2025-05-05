import React, { useState } from 'react';
import { Github, ExternalLink } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  github: string;
  demo?: string;
  category: 'website' | 'innovative' | 'other';
}

const Projects = () => {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const [activeCategory, setActiveCategory] = useState<'all' | 'website' | 'innovative' | 'other'>('all');
  const [showAll, setShowAll] = useState(false);

  const projects: Project[] = [
    
    {
      id: 1,
      title: 'Chatbot Complaint Management System',
      description: 'chatbot system for registering complaints related to sustainability issues and monitoring their status in real-time.',
      image: 'https://images.pexels.com/photos/8439008/pexels-photo-8439008.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      tags: ['Python', 'My SQL', 'Telegram API', 'Automation', 'Bot Development'],
      github: 'https://github.com/hariprasad1307/telegrambot', // Replace with your actual repo URL
      category: 'innovative'
    },    
   
    {
      id: 2,
      title: 'AI-Based Traffic Management System',
      description: 'Real-time traffic control system using AI to detect vehicle density, dynamically adjust signal timers, and prioritize emergency vehicles.',
      image: 'https://images.pexels.com/photos/1386974/pexels-photo-1386974.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      tags: ['AI', 'YOLO', 'OpenCV', 'Python', 'Asyncio', 'Deep Learning'],
      github: 'https://github.com/hariprasad1307/trafficmanagementsystem', // Replace with your actual repo URL
      category: 'innovative'
    },
    
    {
      id: 3,
      title: 'Doctor Appointment System',
      description: 'A web application that facilitates scheduling, managing, and tracking doctor appointments for healthcare facilities.',
      image: 'https://images.pexels.com/photos/7089401/pexels-photo-7089401.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      tags: ['React', 'Node.js', 'MongoDB', 'Express'],
      github: 'https://github.com/hariprasad1307/Dr_Appointment',
      category: 'website'
    },
    {
      id: 4,
      title: 'BookIt',
      description: 'An online booking platform for various services, allowing users to easily reserve, manage, and track their bookings.',
      image: 'https://images.pexels.com/photos/2041627/pexels-photo-2041627.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      tags: ['JavaScript', 'Node.js', 'MySQL', 'API Integration'],
      github: 'https://github.com/hariprasad1307/bookit',
      category: 'website'
    },
    {
      id: 5,
      title: 'Portfolio Website',
      description: 'A personal portfolio website showcasing my projects and skills.',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      tags: ['React', 'TypeScript', 'Tailwind CSS'],
      github: 'https://github.com/hariprasad1307/portfolio',
      category: 'website'
    },
    {
      id: 6,
      title: 'Shopify E-Commerce Platform',
      description: 'MERN stack-based online shopping platform to browse, filter, and purchase dresses with complete admin management.',
      image: 'https://images.pexels.com/photos/5709664/pexels-photo-5709664.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      tags: ['MERN Stack', 'React JS', 'Node JS', 'MongoDB', 'Tailwind CSS'],
      github: 'https://github.com/hariprasad1307/shopify-ecommerce', // Replace with your actual repo URL if different
      category: 'website'
    }
    
  ];

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'website', label: 'Web Development' },
    { id: 'innovative', label: 'Innovative' },
    
  ];

  const filteredProjects = projects.filter(
    project => activeCategory === 'all' || project.category === activeCategory
  );

  const displayedProjects = showAll ? filteredProjects : filteredProjects.slice(0, 4);

  return (
    <section id="projects" className="py-20 bg-gray-100 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="section-title">My Projects</h2>
        <div className="section-subtitle">Showcasing my technical expertise and creativity</div>
        
        <div className="flex justify-center mb-8">
          <div className="flex space-x-2 p-1 bg-white dark:bg-gray-700 rounded-lg shadow-md">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id as typeof activeCategory)}
                className={`px-4 py-2 rounded-md transition-colors ${
                  activeCategory === category.id
                    ? 'bg-blue-600 text-white'
                    : 'hover:bg-gray-200 dark:hover:bg-gray-600'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {displayedProjects.map((project) => (
            <div 
              key={project.id}
              className="card overflow-hidden transition-all duration-300 h-full flex flex-col"
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <div className="relative overflow-hidden" style={{ height: '240px' }}>
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 ease-in-out"
                  style={{
                    transform: hoveredProject === project.id ? 'scale(1.05)' : 'scale(1)'
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-70"></div>
                <h3 className="absolute bottom-4 left-4 text-white text-xl font-bold">{project.title}</h3>
              </div>
              
              <div className="p-6 flex-grow flex flex-col">
                <p className="text-gray-700 dark:text-gray-300 mb-4 flex-grow">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span 
                      key={tag}
                      className="px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-xs font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-3 mt-auto">
                  <a 
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 px-4 py-2 bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 rounded-md transition-colors text-sm"
                  >
                    <Github size={16} /> Code
                  </a>
                  {project.demo && (
                    <a 
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md transition-colors text-sm"
                    >
                      <ExternalLink size={16} /> Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {filteredProjects.length > 4 && (
          <div className="mt-12 text-center">
            <button
              onClick={() => setShowAll(!showAll)}
              className="btn btn-primary inline-flex items-center"
            >
              {showAll ? 'Show Less' : 'Show More'}
            </button>
          </div>
        )}
        
        <div className="mt-12 text-center">
          <p className="mb-6 text-gray-700 dark:text-gray-300">
            Check out more of my projects on GitHub
          </p>
          <a 
            href="https://github.com/hariprasad1307"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary inline-flex items-center"
          >
            <Github size={18} /> Visit My GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;