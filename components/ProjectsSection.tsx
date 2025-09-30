import React, { useState } from 'react';
import type { Project } from '../types';
import Section from './Section';
import { GithubIcon } from './IconComponents';
import ProjectModal from './ProjectModal';

const projects: Project[] = [
  {
    title: 'E-commerce Platform',
    description: 'A full-featured e-commerce site with product search, filtering, a shopping cart, and a secure checkout process.',
    detailedDescription: 'This project is a comprehensive e-commerce solution built from the ground up. It features a modern, responsive user interface created with React. The backend, powered by Node.js and Express, handles product management, user authentication, and order processing. PostgreSQL is used for robust data storage, and the Stripe API is integrated for secure and reliable payment processing.',
    imageUrl: 'https://picsum.photos/seed/project1/600/400',
    liveUrl: '#',
    repoUrl: '#',
    tags: ['React', 'Node.js', 'PostgreSQL', 'Stripe API', 'Tailwind CSS'],
  },
  {
    title: 'Real-time Chat Application',
    description: 'A web-based chat application using WebSockets for instant messaging, supporting multiple rooms and user authentication.',
    detailedDescription: 'This application provides a real-time chat experience similar to popular messaging apps. It leverages Socket.IO for bidirectional, event-based communication between the client and server. The backend is built with Express and Node.js, and MongoDB is used for storing user information and chat histories. It supports user authentication, private messaging, and public chat rooms.',
    imageUrl: 'https://picsum.photos/seed/project2/600/400',
    liveUrl: '#',
    repoUrl: '#',
    tags: ['React', 'Socket.IO', 'Express', 'MongoDB', 'JWT'],
  },
  {
    title: 'Data Visualization Dashboard',
    description: 'An interactive dashboard for visualizing complex datasets, built with D3.js and React. Features dynamic charts and data filtering.',
    detailedDescription: 'This project focuses on creating a powerful and intuitive data visualization tool. Using the D3.js library, it renders various types of interactive charts and graphs, such as bar charts, line graphs, and pie charts. The React frontend allows for a component-based architecture and efficient state management, enabling users to filter, sort, and explore large datasets dynamically.',
    imageUrl: 'https://picsum.photos/seed/project3/600/400',
    repoUrl: '#',
    tags: ['React', 'D3.js', 'TypeScript', 'Tailwind CSS', 'Data Viz'],
  },
  {
    title: 'Content Management System',
    description: 'A headless CMS built with Next.js and GraphQL, allowing for easy content updates and seamless integration with any frontend.',
    detailedDescription: 'This headless CMS provides a flexible and powerful way to manage content. The backend uses GraphQL to provide a strongly-typed API for querying data. The frontend is built with Next.js for server-side rendering and static site generation, ensuring optimal performance and SEO. Docker is used for containerizing the application, simplifying deployment and ensuring consistency across different environments.',
    imageUrl: 'https://picsum.photos/seed/project4/600/400',
    liveUrl: '#',
    repoUrl: '#',
    tags: ['Next.js', 'GraphQL', 'TypeScript', 'Docker', 'PostgreSQL'],
  },
];

const ProjectCard: React.FC<{ project: Project; onClick: () => void }> = ({ project, onClick }) => (
  <div 
    className="bg-white/5 border border-white/10 rounded-lg shadow-lg overflow-hidden group transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-purple-500/20 hover:rotate-[-2deg] cursor-pointer backdrop-blur-sm"
    onClick={onClick}
    onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && onClick()}
    role="button"
    tabIndex={0}
    aria-label={`View details for ${project.title}`}
  >
    <div className="overflow-hidden">
        <img src={project.imageUrl} alt={project.title} className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300 ease-in-out" />
    </div>
    <div className="p-6">
      <h3 className="text-xl font-bold mb-2 text-gray-100">{project.title}</h3>
      <p className="text-gray-400 mb-4 text-sm">{project.description}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {project.tags.map(tag => (
          <span key={tag} className="bg-gray-800 text-purple-300 text-xs font-semibold px-2.5 py-1 rounded-full border border-gray-700">{tag}</span>
        ))}
      </div>
      <div className="mt-4 flex items-center space-x-4">
        {project.liveUrl && (
          <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" onClick={e => e.stopPropagation()} className="text-pink-500 hover:text-pink-400 font-semibold text-sm">
            Live Demo →
          </a>
        )}
        {project.repoUrl && (
          <a href={project.repoUrl} target="_blank" rel="noopener noreferrer" onClick={e => e.stopPropagation()} className="text-gray-400 hover:text-white">
            <span className="sr-only">GitHub Repository</span>
            <GithubIcon className="w-5 h-5" />
          </a>
        )}
      </div>
    </div>
  </div>
);

const ProjectsSection: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const handleOpenModal = (project: Project) => {
    setSelectedProject(project);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };

  return (
    <>
      <Section id="projects" title="Projects & Portfolio">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} onClick={() => handleOpenModal(project)} />
          ))}
        </div>
      </Section>
      <ProjectModal project={selectedProject} onClose={handleCloseModal} />
    </>
  );
};

export default ProjectsSection;