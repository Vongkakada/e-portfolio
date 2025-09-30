export interface Experience {
  role: string;
  company: string;
  period: string;
  description: string[];
}

export interface Education {
  degree: string;
  institution: string;
  period: string;
}

export interface Skill {
  name: string;
  category: 'Pedagogy & Instruction' | 'Computer Science' | 'Software' | 'Hardware & Networking' | 'Languages';
}

export interface Project {
  title: string;
  description: string;
  detailedDescription: string;
  imageUrl: string;
  liveUrl?: string;
  repoUrl?: string;
  tags: string[];
}