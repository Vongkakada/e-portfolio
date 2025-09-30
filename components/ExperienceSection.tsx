
import React from 'react';
import type { Experience } from '../types';
import Section from './Section';

const experiences: Experience[] = [
  {
    role: 'Computer Teacher',
    company: 'Chea Sim Kamchaymear National University',
    period: 'May 2024 - Present',
    description: [
      'Teaching computer science fundamentals and practical skills to university students.',
      'Designing lesson plans, assignments, and assessments to foster student learning and engagement.',
      'Providing guidance and support to students in their academic and technical development.',
    ],
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