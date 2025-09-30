import React from 'react';
import type { Skill } from '../types';
import Section from './Section';

const skills: Skill[] = [
  { name: 'Curriculum Design', category: 'Pedagogy & Instruction' },
  { name: 'Student Assessment', category: 'Pedagogy & Instruction' },
  { name: 'Classroom Management', category: 'Pedagogy & Instruction' },
  { name: 'Educational Technology', category: 'Pedagogy & Instruction' },
  { name: 'Data Structures & Algorithms', category: 'Computer Science' },
  { name: 'Object-Oriented Programming', category: 'Computer Science' },
  { name: 'Database Systems', category: 'Computer Science' },
  { name: 'Computer Networks', category: 'Computer Science' },
  { name: 'Python', category: 'Programming' },
  { name: 'Java', category: 'Programming' },
  { name: 'JavaScript', category: 'Programming' },
  { name: 'C++', category: 'Programming' },
  { name: 'Git & GitHub', category: 'Tools' },
  { name: 'VS Code', category: 'Tools' },
  { name: 'Google Classroom', category: 'Tools' },
  { name: 'Jupyter Notebook', category: 'Tools' },
];

const categories: Skill['category'][] = ['Pedagogy & Instruction', 'Computer Science', 'Programming', 'Tools'];

const SkillsSection: React.FC = () => {
  return (
    <Section id="skills" title="Technical Skills" className="bg-gray-50">
      <div className="space-y-8">
        {categories.map((category) => (
          <div key={category}>
            <h3 className="text-lg font-semibold text-gray-800 mb-4">{category}</h3>
            <div className="flex flex-wrap gap-3">
              {skills
                .filter((skill) => skill.category === category)
                .map((skill) => (
                  <span
                    key={skill.name}
                    className="bg-indigo-100 text-indigo-800 text-sm font-medium px-4 py-2 rounded-full"
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