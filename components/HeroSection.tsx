
import React from 'react';
import { GithubIcon, LinkedInIcon, TwitterIcon } from './IconComponents';

const socialLinks = [
    { name: 'GitHub', icon: GithubIcon, url: 'https://github.com' },
    { name: 'LinkedIn', icon: LinkedInIcon, url: 'https://linkedin.com' },
    { name: 'Twitter', icon: TwitterIcon, url: 'https://twitter.com' },
];

const HeroSection: React.FC = () => {
  return (
    <section id="about" className="relative bg-gray-50 pt-24 pb-20 md:pt-32 md:pb-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-center gap-12">
          <div className="md:w-1/3 text-center">
            <img 
              src="https://scontent.fpnh5-1.fna.fbcdn.net/v/t39.30808-6/434251268_771827435215039_2323531362947269155_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeG8d14j5qT8uT14_K41d2uFjJ1V7tY9zVGMnVXy1j3NUQSq7Ua21KxH4zK5I9H-X0-E29WjGz815z4E0zQpXbE2&_nc_ohc=T_oJ_Y-wIwoQ7kNvwG5pT7b&_nc_zt=23&_nc_ht=scontent.fpnh5-1.fna&oh=00_AYDoF4JgK-pE2b7D79x1D4W_p0h0vG6045t5_3q_2r4j-g&oe=66611319" 
              alt="VONG KAKADA" 
              className="rounded-full w-48 h-48 md:w-64 md:h-64 object-cover mx-auto shadow-2xl border-4 border-white"
            />
          </div>
          <div className="md:w-2/3 text-center md:text-left">
            <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 tracking-tight">
              Hi, I'm VONG KAKADA
            </h1>
            <p className="mt-4 text-lg md:text-xl text-indigo-600 font-semibold">
              Computer Science Educator & Technologist
            </p>
            <p className="mt-6 max-w-2xl text-base text-gray-600 leading-relaxed">
             I specialize in making complex computer science concepts accessible and engaging for learners of all levels. With a passion for both education and technology, I aim to inspire the next generation of innovators.
            </p>
            <div className="mt-8 flex justify-center md:justify-start items-center gap-4">
              <a href="#contact" className="inline-block bg-indigo-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-indigo-700 transition-transform transform hover:scale-105 shadow-lg">
                Get In Touch
              </a>
              <a href="/vong-kakada-cv.pdf" download className="inline-block bg-white text-indigo-600 font-bold py-3 px-6 rounded-lg hover:bg-gray-100 transition-transform transform hover:scale-105 shadow-lg border border-gray-200">
                Download CV
              </a>
            </div>
            <div className="mt-8 flex justify-center md:justify-start space-x-6">
              {socialLinks.map(link => (
                <a key={link.name} href={link.url} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-indigo-600 transition-transform transform hover:scale-110">
                  <span className="sr-only">{link.name}</span>
                  <link.icon className="w-6 h-6" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
