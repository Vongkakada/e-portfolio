
export interface Experience {
  role: string;
  company: string;
  period: string;
  description: string[];
  imageUrls?: string[];
}

export interface Education {
  degree: string;
  institution: string;
  period: string;
  description?: string;
  imageUrls?: string[];
}

export interface Skill {
  name: string;
  category: 'Pedagogy & Instruction' | 'Computer Science' | 'Software' | 'Hardware & Networking' | 'Languages';
  icon?: React.FC<{ className?: string }>;
}

export interface Project {
  title: string;
  description: string;
  detailedDescription: string;
  imageUrls: string[];
  liveUrl?: string;
  repoUrl?: string;
  tags: string[];
}