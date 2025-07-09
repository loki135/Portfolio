'use client';

import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';
import { Project } from '@/types';

interface ProjectCardProps {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
    >
      {project.image && (
        <div className="h-48 bg-gradient-to-br from-blue-500 to-purple-600 relative">
          {/* Image will be added here when available */}
          <div className="absolute inset-0 flex items-center justify-center text-white text-lg font-semibold">
            {project.title}
          </div>
        </div>
      )}
      
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
          {project.title}
        </h3>
        
        <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
          {project.description}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-sm rounded"
            >
              {tech}
            </span>
          ))}
        </div>
        
        <div className="flex gap-4">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              <Github size={16} />
              Code
            </a>
          )}
          
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
            >
              <ExternalLink size={16} />
              Live Demo
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}
