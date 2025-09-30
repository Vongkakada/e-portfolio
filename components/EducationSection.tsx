
import React from 'react';
import type { Education } from '../types';
import Section from './Section';

const educations: Education[] = [
  {
    degree: 'Bachelor of Science in Information Technology',
    institution: 'Cambodian University for Specialties',
    period: '2022 - 2024',
  },
  {
    degree: 'Bachelor of Arts in Mathematics',
    institution: 'Chea Sim Kamchaymear National University',
    period: '2019 - 2022',
  },
];

const trainings: Education[] = [
    {
        degree: 'Programming and Cybersecurity Analysis',
        institution: 'CodeForCambodia.com',
        period: 'Oct 2022 - Nov 2024',
    },
    {
        degree: 'Computer and Graphic Design',
        institution: 'Baktouk Information Technology Center',
        period: 'Jun 2020 - Oct 2022',
    }
];

const EducationCard: React.FC<{ edu: Education }> = ({ edu }) => (
  <div className="p-6 bg-white/5 rounded-lg border border-white/10 shadow-lg backdrop-blur-sm hover:border-white/20 transition-all">
    <div className="flex justify-between items-start">
      <div>
        <h3 className="text-xl font-bold text-gray-100">{edu.degree}</h3>
        <p className="text-md text-purple-400">{edu.institution}</p>
      </div>
      <p className="text-sm text-gray-500 whitespace-nowrap">{edu.period}</p>
    </div>
  </div>
);

const EducationSection: React.FC = () => {
  return (
    <Section id="education" title="Education & Training">
      <div className="space-y-8">
        {educations.map((edu, index) => (
          <EducationCard key={index} edu={edu} />
        ))}
      </div>
      <div className="mt-16">
        <h3 className="text-2xl font-bold text-center mb-8 text-gray-200">Extra Training</h3>
        <div className="space-y-8">
            {trainings.map((train, index) => (
              <EducationCard key={index} edu={train} />
            ))}
        </div>
      </div>
    </Section>
  );
};

export default EducationSection;