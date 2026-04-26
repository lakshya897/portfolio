export interface Stat {
  value: string;
  label: string;
}

export interface Project {
  name: string;
  description: string;
  featured: boolean;
  metrics: string[];
  technologies: string[];
  github: string;
}

export interface ExperienceProject {
  name: string;
  description: string;
  metrics: string[];
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  description: string;
  technologies: string[];
  projects: ExperienceProject[];
}

export interface Achievement {
  title: string;
  event: string;
  description: string;
  icon: string;
}

export interface Education {
  university: string;
  degree: string;
  period: string;
  cgpa: string;
  coursework: string[];
}

export interface Skills {
  ai_llm: string[];
  languages: string[];
  frameworks: string[];
  databases: string[];
  ml_dl: string[];
  cloud_tools: string[];
}

export interface PortfolioData {
  name: string;
  email: string;
  phone: string;
  role: string;
  company: string;
  tagline: string;
  socials: {
    github: string;
    linkedin: string;
    leetcode: string;
  };
  stats: Stat[];
  experience: Experience[];
  projects: Project[];
  skills: Skills;
  education: Education;
  achievements: Achievement[];
}
