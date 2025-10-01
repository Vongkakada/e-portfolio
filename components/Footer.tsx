
import React from 'react';
import { FacebookIcon, GitHubIcon, LinkedInIcon } from './IconComponents';

const socialLinks = [
    { name: 'GitHub', icon: GitHubIcon, url: 'https://github.com/vongkakada' },
    { name: 'LinkedIn', icon: LinkedInIcon, url: '#' },
    { name: 'Facebook', icon: FacebookIcon, url: 'https://www.facebook.com/da2kk' },
];

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black/30 text-gray-400">
      <div className="container mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-sm">&copy; {currentYear} VONG KAKADA. All rights reserved.</p>
          <div className="flex space-x-6">
            {socialLinks.map(link => (
              <a key={link.name} href={link.url} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-pink-500 transition-colors">
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