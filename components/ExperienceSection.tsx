
import React from 'react';
import type { Experience } from '../types';
import Section from './Section';

const experiences: Experience[] = [
  {
    role: 'Computer Science Lecturer',
    company: 'National University of Cheasim Kamchaymear, Kampong Cham Campus',
    period: '2021 - Present',
    description: [
      'Delivering lectures and practical workshops on core computer science subjects including programming, data structures, and web development.',
      'Developing and updating curriculum to align with current industry standards and emerging technologies.',
      'Mentoring students on academic projects, career development, and technical skill-building.',
      'Utilizing modern educational technology to create an engaging and effective learning environment.',
    ],
  },
  {
    role: 'Frontend Developer',
    company: 'Innovate Co.',
    period: 'Jun 2018 - Dec 2020',
    description: [
      'Developed responsive and interactive user interfaces for web applications using React and Redux, serving over 1 million monthly active users.',
      'Collaborated with UX/UI designers to translate wireframes and mockups into functional components, improving design-to-code fidelity.',
      'Implemented a component library that was adopted across 3 different product teams, increasing development velocity by 20%.',
    ],
  },
];

const ExperienceCard: React.FC<{ experience: Experience; isLast: boolean }> = ({ experience, isLast }) => (
  <div className="relative pl-8 sm:pl-12 py-6">
    <div className="absolute left-0 top-0 h-full w-0.5 bg-gray-700"></div>
    <div className="absolute left-[-9px] sm:left-[-7px] top-8 w-4 h-4 bg-gray-900 border-2 border-purple-500 rounded-full"></div>
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
);

const ExperienceSection: React.FC = () => {
  return (
    <Section id="experience" title="Work Experience" className="bg-black/20">
      <div className="relative">
        {experiences.map((exp, index) => (
          <ExperienceCard key={index} experience={exp} isLast={index === experiences.length - 1} />
        ))}
      </div>
    </Section>
  );
};

export default ExperienceSection;
