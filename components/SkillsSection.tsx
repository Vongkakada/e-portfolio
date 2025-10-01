
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

// Helper component for a category-specific marquee
const CategoryScroller: React.FC<{ title: string; skills: Skill[] }> = ({ title, skills }) => {
  if (skills.length === 0) {
    return null;
  }

  // Determine icon from the first skill in the category
  const IconComponent = skills[0]?.icon;
  
  // Duplicate skills for a seamless, looping animation
  const extendedSkills = [...skills, ...skills];

  // Dynamically adjust animation duration based on the number of skills
  // A longer list gets a longer duration to keep the speed consistent.
  const animationDuration = skills.length * 8; 

  return (
    <div>
      <div className="flex items-center justify-center mb-6 gap-3">
        {IconComponent && <IconComponent className="w-7 h-7 text-purple-400" />}
        <h3 className="text-xl md:text-2xl font-bold text-gray-200">{title}</h3>
      </div>
      <div className="scroller w-full overflow-hidden group">
        <div 
          className="scroller-inner group-hover:[animation-play-state:paused]"
          style={{ animation: `scroll ${animationDuration}s linear infinite` }}
        >
          {extendedSkills.map((skill, index) => (
            <div
              key={`${skill.name}-${index}`}
              className="flex-shrink-0 bg-purple-900/40 text-purple-300 text-sm font-medium px-4 py-2 rounded-full border border-purple-800/50 flex items-center mx-3 whitespace-nowrap"
            >
              <span>{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};


const SkillsSection: React.FC = () => {
  // Define the order of categories to ensure consistent layout
  const categoryOrder: Skill['category'][] = [
    'Pedagogy & Instruction',
    'Computer Science',
    'Software',
    'Hardware & Networking',
    'Languages',
  ];

  // Group skills by the defined category order
  const groupedSkills = categoryOrder.map(category => ({
    category,
    skills: skills.filter(skill => skill.category === category),
  }));

  return (
    <Section id="skills" title="Technical Skills" className="bg-black/20 py-16 md:py-24">
      <div className="space-y-12">
        {groupedSkills.map(({ category, skills }) => (
          <CategoryScroller key={category} title={category} skills={skills} />
        ))}
      </div>
    </Section>
  );
};

export default SkillsSection;
