
import React from 'react';
import { FacebookIcon, GitHubIcon, LinkedInIcon } from './IconComponents';

const socialLinks = [
    { name: 'GitHub', icon: GitHubIcon, url: 'https://github.com/vongkakada' },
    { name: 'LinkedIn', icon: LinkedInIcon, url: '#' },
    { name: 'Facebook', icon: FacebookIcon, url: 'https://www.facebook.com/da2kk' },
];

const HeroSection: React.FC = () => {
  const handleCVDownload = () => {
    console.log('Analytics Event: Download CV button clicked');
    // This event can be integrated with any analytics service.
  };

  return (
    <section id="about" className="relative animated-gradient-bg pt-24 pb-20 md:pt-32 md:pb-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-center gap-12">
          <div className="md:w-1/3 text-center">
            <img 
              src="https://scontent.fpnh5-6.fna.fbcdn.net/v/t39.30808-6/496864008_701392465591870_7424581435838411008_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=a5f93a&_nc_eui2=AeEWwrDcYOVz_9OINsIUoN1SDga04x-oSiQOBrTjH6hKJBcKKsJAcQsDgiLUjL5PFBcSe3c83w9rkRYrw_HQyU1S&_nc_ohc=zp_PBakJA7sQ7kNvwGG-tBM&_nc_oc=AdlZNIcqgOMr0PzAKF41ygSqhSmoDhmB6tvGssnF1rcPhXTy62niEbWn5dRCpzx3HDk&_nc_zt=23&_nc_ht=scontent.fpnh5-6.fna&_nc_gid=jF1SDFyDct3esH_D1KvtJg&oh=00_AfZUUXLNW3BVk5J23oZsgxcCoRlMcixmvla5StymKR28ow&oe=68E18703" 
              alt="VONG KAKADA" 
              className="rounded-full w-48 h-48 md:w-64 md:h-64 object-cover mx-auto shadow-2xl ring-4 ring-offset-4 ring-offset-[#0F0F0F] ring-purple-500"
            />
          </div>
          <div className="md:w-2/3 text-center md:text-left">
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight bg-gradient-to-r from-cyan-400 via-blue-500 to-cyan-400 bg-clip-text text-transparent">
              Hi, I'm VONG KAKADA
            </h1>
            <p className="mt-4 text-lg md:text-xl text-purple-400 font-bold">
              Computer Science Educator & Technologist
            </p>
            <p className="mt-6 max-w-2xl text-base text-gray-400 leading-relaxed">
             I specialize in making complex computer science concepts accessible and engaging for learners of all levels. With a passion for both education and technology, I aim to inspire the next generation of innovators.
            </p>
            <div className="mt-8 flex justify-center md:justify-start items-center gap-4">
              <a href="#contact" className="inline-block bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold py-3 px-6 rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all transform hover:scale-105 shadow-lg hover:shadow-purple-500/50">
                Get In Touch
              </a>
              <a 
                href="/vong-kakada-cv.pdf" 
                download
                onClick={handleCVDownload}
                className="inline-block bg-transparent border-2 border-pink-500 text-pink-500 font-bold py-3 px-6 rounded-lg hover:bg-pink-500 hover:text-white transition-all transform hover:scale-105 shadow-lg hover:shadow-pink-500/50"
              >
                Download CV
              </a>
            </div>
            <div className="mt-8 flex justify-center md:justify-start space-x-6">
              {socialLinks.map(link => (
                <a key={link.name} href={link.url} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-pink-500 transition-transform transform hover:scale-110">
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