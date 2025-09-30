import React from 'react';
import type { Skill } from '../types';
import Section from './Section';

const skills: Skill[] = [
  { name: 'Curriculum Design', category: 'Pedagogy & Instruction' },
  { name: 'Student Assessment', category: 'Pedagogy & Instruction' },
  { name: 'Educational Technology', category: 'Pedagogy & Instruction' },
  { name: 'Programming Fundamentals', category: 'Computer Science' },
  { name: 'Cybersecurity Analysis', category: 'Computer Science' },
  { name: 'MS Office Suite (Word, Excel, PowerPoint)', category: 'Software' },
  { name: 'MS Access', category: 'Software' },
  { name: 'QuickBooks', category: 'Software' },
  { name: 'Adobe Photoshop', category: 'Software' },
  { name: 'CorelDRAW', category: 'Software' },
  { name: 'Computer Repair & Maintenance', category: 'Hardware & Networking' },
  { name: 'Network Installation', category: 'Hardware & Networking' },
  { name: 'Khmer', category: 'Languages' },
  { name: 'English', category: 'Languages' },
  { name: 'Chinese', category: 'Languages' },
];

const categories: Skill['category'][] = ['Pedagogy & Instruction', 'Computer Science', 'Software', 'Hardware & Networking', 'Languages'];

const SkillsSection: React.FC = () => {
  return (
    <Section id="skills" title="Technical Skills" className="bg-black/20">
      <div className="space-y-8">
        {categories.map((category) => (
          <div key={category}>
            <h3 className="text-lg font-semibold text-gray-200 mb-4">{category}</h3>
            <div className="flex flex-wrap gap-3">
              {skills
                .filter((skill) => skill.category === category)
                .map((skill) => (
                  <span
                    key={skill.name}
                    className="bg-purple-900/40 text-purple-300 text-sm font-medium px-4 py-2 rounded-full border border-purple-800/50"
                  >
                    {skill.name}
                  </span>
                ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default SkillsSection;