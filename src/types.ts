export type PortfolioTheme = "minimal" | "brutalist" | "bento";

export interface Project {
  title: string;
  category: string;
  tagline: string;
  description: string[];
  tags: string[];
  link?: string;
  color?: string;
}

export interface Experience {
  company: string;
  role: string;
  duration: string;
  location: string;
  bullets: string[];
}

export interface Education {
  institution: string;
  degree: string;
  duration: string;
  location: string;
  details?: string;
}

export interface SkillCategory {
  categoryName: string;
  skills: string[];
}

export interface CompetitiveProgramming {
  platform: string;
  username: string;
  details: string;
}

export interface Achievement {
  title: string;
  details: string;
  date?: string;
}

export interface Certificate {
  name: string;
  issuer: string;
}

export interface UserProfile {
  name: string;
  role: string;
  tagline: string;
  bio: string;
  email: string;
  phone: string;
  github: string;
  linkedin: string;
  leetcode: string;
  calComUrl: string;
  education: Education[];
  experience: Experience[];
  skills: SkillCategory[];
  projects: Project[];
  certificates: Certificate[];
  competitiveProgramming: CompetitiveProgramming[];
  achievements: Achievement[];
}

export interface GenerationRequest {
  role: string;
  tone: string;
  skills?: string;
  industry?: string;
}

