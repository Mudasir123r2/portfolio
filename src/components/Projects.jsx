import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub } from 'react-icons/fa';
import { projects } from '../data/portfolioData';

const Projects = () => {
  return (
    <section id="projects" className="py-12 relative">
      <div className="container mx-auto px-6 md:px-12 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-200">
            Projects
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <motion.a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: idx * 0.1, ease: "easeOut" }}
              className={`glass-card flex flex-col h-full group overflow-hidden cursor-pointer ${project.featured ? 'md:col-span-2 lg:col-span-3 max-w-md mx-auto w-full border-accent-primary/50 bg-slate-800/60' : ''}`}
            >
              {/* Image Container */}
              <div className="relative w-full h-48 md:h-56 overflow-hidden bg-slate-900 border-b border-slate-700/50">
                {project.image && (
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out"
                  />
                )}
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-accent-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="bg-slate-900/80 p-3 rounded-full text-white backdrop-blur-sm transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <FaGithub size={24} />
                  </div>
                </div>
              </div>

              {/* Content Container */}
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-2xl font-bold text-slate-200 mb-3 group-hover:text-accent-light transition-colors">
                  {project.title}
                </h3>
                
                <div className="text-slate-400 text-sm leading-relaxed mb-6 flex-grow">
                  <p>{project.description}</p>
                </div>

                <ul className="flex flex-wrap gap-2 mt-auto">
                  {project.tech.map((tech, i) => (
                    <li key={i} className="text-xs font-mono text-slate-300 bg-slate-800/80 px-2 py-1 rounded border border-slate-700">
                      {tech}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
