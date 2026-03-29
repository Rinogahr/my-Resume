import { IconType } from 'react-icons';

export interface SocialLink {
  name: string;
  url: string;
  icon: IconType;
}

export interface Technology {
  name: string;
  level: string;
  description: string;
}

export interface Experience {
  role: string;
  company: string;
  period: string;
  highlights: string[];
}

export interface Education {
  course: string;
  institution: string;
  totalHours?: string;
  period: string;
  details: string;
}

export interface Competency {
  title: string;
  summary: string;
}

export interface technicalSkills {
  title: string;
}



export interface Project {
  title: string;
  stack: string;
  summary: string;
  link?: string;
  repositoryLink: string;
}

export interface PortfolioData {
  name: string;
  role: string;
  summary: string;
  profileImage: string;
  socialLinks: SocialLink[];
  technologies: Technology[];
  experiences: Experience[];
  education: Education[];
  competencies: Competency[];
  habiliadadesTecncas: technicalSkills[];
  projects: Project[];
}
