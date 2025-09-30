
import React from 'react';
import type { Education } from '../types';
import Section from './Section';

const educations: Education[] = [
  {
    degree: 'M.S. in Computer Science',
    institution: 'Stanford University',
    period: '2016 - 2018',
  },
  {
    degree: 'B.S. in Software Engineering',
    institution: 'University of California, Berkeley',
    period: '2012 - 2016',
  },
];

const EducationSection: React.FC = () => {
  return (
    <Section id="education" title="Education">
      <div className="space-y-8">
        {educations.map((edu, index) => (
          <div key={index} className="p-6 bg-white/5 rounded-lg border border-white/10 shadow-lg backdrop-blur-sm hover:border-white/20 transition-all">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-xl font-bold text-gray-100">{edu.degree}</h3>
                <p className="text-md text-purple-400">{edu.institution}</p>
              </div>
              <p className="text-sm text-gray-500 whitespace-nowrap">{edu.period}</p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default EducationSection;