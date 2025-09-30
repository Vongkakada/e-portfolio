
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
          <div key={index} className="p-6 bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-xl font-bold text-gray-900">{edu.degree}</h3>
                <p className="text-md text-indigo-600">{edu.institution}</p>
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
