import React from 'react';
import type { Skill } from '../types';
import Section from './Section';
import { PedagogyIcon, ComputerScienceIcon, SoftwareIcon, HardwareIcon, LanguagesIcon } from './IconComponents';

const skills: Skill[] = [
  { name: 'Curriculum Design', category: 'Pedagogy & Instruction', icon: PedagogyIcon },
  { name: 'Student Assessment', category: 'Pedagogy & Instruction', icon: PedagogyIcon },
  { name: 'Educational Technology', category: 'Pedagogy & Instruction', icon: PedagogyIcon },
  { name: 'Programming Fundamentals', category: 'Computer Science', icon: ComputerScienceIcon },
  { name: 'Cybersecurity Analysis', category: 'Computer Science', icon: ComputerScienceIcon },
  { name: 'MS Office Suite (Word, Excel, PowerPoint)', category: 'Software', icon: SoftwareIcon },
  { name: 'MS Access', category: 'Software', icon: SoftwareIcon },
  { name: 'QuickBooks', category: 'Software', icon: SoftwareIcon },
  { name: 'Adobe Photoshop', category: 'Software', icon: SoftwareIcon },
  { name: 'CorelDRAW', category: 'Software', icon: SoftwareIcon },
  { name: 'Computer Repair & Maintenance', category: 'Hardware & Networking', icon: HardwareIcon },
  { name: 'Network Installation', category: 'Hardware & Networking', icon: HardwareIcon },
  { name: 'Khmer', category: 'Languages', icon: LanguagesIcon },
  { name: 'English', category: 'Languages', icon: LanguagesIcon },
  { name: 'Chinese', category: 'Languages', icon: LanguagesIcon },
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
                    className="bg-purple-900/40 text-purple-300 text-sm font-medium px-4 py-2 rounded-full border border-purple-800/50 flex items-center gap-2"
                  >
                    {skill.icon && <skill.icon className="w-4 h-4" />}
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