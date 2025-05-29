import React, { useState } from 'react';
import { ExternalLink, Github, Eye } from 'lucide-react';
import { Project, projects } from '../utils/data';

const Projects: React.FC = () => {
  const [filter, setFilter] = useState<string>('all');
  const categories = ['all', 'web', 'mobile', 'ui/ux'];
  
  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
            My <span className="text-teal-600 dark:text-teal-400">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-teal-600 dark:bg-teal-400 mx-auto mt-4"></div>
          <p className="text-gray-700 dark:text-gray-300 mt-4 max-w-2xl mx-auto">
            these are only a section for upcomig projects 
          </p>
        </div>
        
        <div className="flex justify-center mb-8">
          <div className="inline-flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`px-4 py-2 rounded-md capitalize transition-colors ${
                  filter === category
                    ? 'bg-teal-600 text-white'
                    : 'bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
  return (
    <div className="bg-gray-50 dark:bg-gray-900 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow group">
      <div className="relative overflow-hidden">
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
          {project.liveUrl && (
            <a 
              href={project.liveUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 bg-white rounded-full text-gray-900 hover:bg-gray-200 transition-colors"
              aria-label={`View live site for ${project.title}`}
            >
              <ExternalLink size={20} />
            </a>
          )}
          {project.github && (
            <a 
              href={project.github} 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 bg-white rounded-full text-gray-900 hover:bg-gray-200 transition-colors"
              aria-label={`View GitHub repository for ${project.title}`}
            >
              <Github size={20} />
            </a>
          )}
          <button 
            className="p-2 bg-white rounded-full text-gray-900 hover:bg-gray-200 transition-colors"
            aria-label={`View details for ${project.title}`}
          >
            <Eye size={20} />
          </button>
        </div>
      </div>
      <div className="p-6">
        <div className="flex justify-between items-center mb-2">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{project.title}</h3>
          <span className="px-2 py-1 bg-teal-100 dark:bg-teal-900 text-teal-800 dark:text-teal-200 text-xs rounded-full capitalize">
            {project.category}
          </span>
        </div>
        <p className="text-gray-700 dark:text-gray-300 mb-4 line-clamp-2">{project.description}</p>
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech, index) => (
            <span 
              key={index} 
              className="px-2 py-1 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;