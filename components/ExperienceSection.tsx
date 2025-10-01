
import React from 'react';
import type { Experience } from '../types';
import Section from './Section';

const experiences: Experience[] = [
  {
    role: 'Computer Teacher & Assistant',
    company: 'National University of CheaSim Kamchaymear, Kampong Cham Campus',
    period: 'May 2024 - Present',
    description: [
      'Teaching computer science fundamentals and practical skills to university students.',
      'Designing lesson plans, assignments, and assessments to foster student learning and engagement.',
      'Providing guidance and support to students in their academic and technical development.',
    ],
    imageUrl: 'https://scontent.fpnh5-4.fna.fbcdn.net/v/t39.30808-6/487450581_4038456703034863_7635011793623442254_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=cc71e4&_nc_eui2=AeFGoiU_JKeh5PtYIjwyWcoUvE-NxIohHPu8T43EiiEc-4njnpDE6WAM8FhJlUjHV5XDq4UyLW6IDkKXWNqPw92-&_nc_ohc=0XAH7aBMp4MQ7kNvwEDBNYo&_nc_oc=Adnjry5sdoiIpIYRmqUK2THZRxL09D3utEQxK4EZc3IUGgE1jEz2XRxou0dBNw0LsQ4&_nc_zt=23&_nc_ht=scontent.fpnh5-4.fna&_nc_gid=u43bEKWy9_OlI1eWqUcb-w&oh=00_AfYjP57Bhjc6xWfeEixXlKdICMyjP9ttD9Wpyo9lu7pRMQ&oe=68E1812B',
  },
  {
    role: 'Computer Teacher',
    company: 'Baktouk Information Technology Center',
    period: 'Jan 2020 - Jan 2022',
    description: [
      'Instructed students in various computer skills including MS Office, graphic design, and basic IT concepts.',
      'Developed course materials and conducted training sessions for diverse age groups.',
      'Assisted students in mastering software tools and preparing for technical careers.',
    ],
    imageUrl: 'https://scontent.fpnh5-4.fna.fbcdn.net/v/t39.30808-6/481239190_1327710302001465_825552311202115028_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=110&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeGXBffLARNgqdJAA1av5DtDBC93URMaR2MEL3dRExpHY9uxWVfRHCwR08RLYW7CUjfGXjP-Jp-GMphAMJW-VmNl&_nc_ohc=miq2v3zMe64Q7kNvwFO0Kfy&_nc_oc=Adm_Fzn4JN7otZJlx9RM2bsB5Ys_vKquPnnSvOwldQl83tlsQw4dX5O-EL7kwTYZpwE&_nc_zt=23&_nc_ht=scontent.fpnh5-4.fna&_nc_gid=gzelMtqYq5f5tX-6d_bf3A&oh=00_AfbL3agDb1o6SG6YakDWP-6ZYtes_m4B5qFymgnrzlTIQw&oe=68E292C4',
  },
];

const ExperienceCard: React.FC<{ experience: Experience; isLast: boolean; index: number }> = ({ experience, isLast, index }) => (
  <div 
    className="relative pl-8 sm:pl-12 py-6 opacity-0"
    style={{ animation: 'fade-in-slide-up 0.6s ease-out forwards', animationDelay: `${index * 0.2}s` }}
  >
    <div className="absolute left-0 top-0 h-full w-0.5 bg-gray-700"></div>
    <div className="absolute left-[-9px] sm:left-[-7px] top-8 w-4 h-4 bg-gray-900 border-2 border-purple-500 rounded-full"></div>
    <div className="flex gap-6 items-start">
      {experience.imageUrl && (
        <img src={experience.imageUrl} alt={`${experience.company} logo`} className="w-16 h-16 rounded-lg object-cover flex-shrink-0 mt-1 shadow-lg border-2 border-white/10 transition-transform duration-300 ease-in-out hover:scale-110" />
      )}
      <div className="flex-grow">
        <div className="mb-4">
          <h3 className="text-xl font-bold text-gray-100">{experience.role}</h3>
          <p className="text-md font-semibold text-purple-400">{experience.company}</p>
          <p className="text-sm text-gray-500">{experience.period}</p>
        </div>
        <ul className="list-disc list-inside space-y-2 text-gray-400">
          {experience.description.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  </div>
);

const ExperienceSection: React.FC = () => {
  return (
    <Section id="experience" title="Work Experience" className="bg-black/20">
      <div className="relative">
        {experiences.map((exp, index) => (
          <ExperienceCard key={index} experience={exp} isLast={index === experiences.length - 1} index={index} />
        ))}
      </div>
    </Section>
  );
};

export default ExperienceSection;