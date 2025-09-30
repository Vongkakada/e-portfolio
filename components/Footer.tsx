import React from 'react';
import { GithubIcon, LinkedInIcon, TwitterIcon } from './IconComponents';

const socialLinks = [
    { name: 'GitHub', icon: GithubIcon, url: 'https://github.com' },
    { name: 'LinkedIn', icon: LinkedInIcon, url: 'https://linkedin.com' },
    { name: 'Twitter', icon: TwitterIcon, url: 'https://twitter.com' },
];

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-800 text-white">
      <div className="container mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-sm text-gray-400">&copy; {currentYear} VONG KAKADA. All rights reserved.</p>
          <div className="flex space-x-6">
            {socialLinks.map(link => (
              <a key={link.name} href={link.url} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <span className="sr-only">{link.name}</span>
                <link.icon className="w-6 h-6" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;