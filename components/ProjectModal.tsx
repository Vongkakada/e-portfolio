import React, { useEffect } from 'react';
import type { Project } from '../types';
import ImageSlideshow from './ImageSlideshow';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleEsc);
    return () => {
      window.removeEventListener('keydown', handleEsc);
    };
  }, [onClose]);

  if (!project) return null;

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-80 backdrop-blur-sm flex justify-center items-center z-50 p-4 transition-opacity duration-300"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="project-modal-title"
    >
      <div 
        className="bg-[#1a1a1a] text-gray-300 border border-white/10 rounded-lg shadow-2xl w-full max-w-3xl max-h-[90vh] overflow-y-auto relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-white transition-colors z-10"
          aria-label="Close modal"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
        </button>
        <ImageSlideshow urls={project.imageUrls} alt={project.title} className="w-full h-64 rounded-t-lg" />
        <div className="p-6 md:p-8">
          <h2 id="project-modal-title" className="text-2xl md:text-3xl font-bold mb-3 text-gray-100">{project.title}</h2>
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tags.map(tag => (
              <span key={tag} className="bg-purple-900/40 text-purple-300 text-xs font-semibold px-2.5 py-1 rounded-full border border-purple-800/50">{tag}</span>
            ))}
          </div>
          <p className="text-gray-400 leading-relaxed mb-6">{project.detailedDescription}</p>
          <div className="mt-6 flex items-center space-x-4">
            {project.liveUrl && (
              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="inline-block bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold py-2 px-5 rounded-lg hover:from-purple-700 hover:to-pink-700 transition-transform transform hover:scale-105 shadow-md">
                View Live Demo
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;