
import React from 'react';
import type { Experience } from '../types';
import Section from './Section';

const experiences: Experience[] = [
  {
    role: 'Senior Software Engineer',
    company: 'Tech Solutions Inc.',
    period: 'Jan 2021 - Present',
    description: [
      'Managed a team of 5 developers in the creation of a new client-facing analytics dashboard, resulting in a 25% increase in user engagement.',
      'Architected and implemented a microservices-based backend using Node.js and TypeScript, improving system scalability and reducing server response time by 40%.',
      'Developed and maintained CI/CD pipelines using Jenkins and Docker, automating deployment processes and reducing deployment failures by 95%.',
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
    <div className="absolute left-0 top-0 h-full w-0.5 bg-gray-200"></div>
    <div className="absolute left-[-9px] sm:left-[-7px] top-8 w-4 h-4 bg-white border-2 border-indigo-600 rounded-full"></div>
    <div className="mb-4">
      <h3 className="text-xl font-bold text-gray-900">{experience.role}</h3>
      <p className="text-md font-semibold text-indigo-600">{experience.company}</p>
      <p className="text-sm text-gray-500">{experience.period}</p>
    </div>
    <ul className="list-disc list-inside space-y-2 text-gray-600">
      {experience.description.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  </div>
);

const ExperienceSection: React.FC = () => {
  return (
    <Section id="experience" title="Work Experience" className="bg-gray-50">
      <div className="relative">
        {experiences.map((exp, index) => (
          <ExperienceCard key={index} experience={exp} isLast={index === experiences.length - 1} />
        ))}
      </div>
    </Section>
  );
};

export default ExperienceSection;
