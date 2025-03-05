// Tipos para projetos
export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubUrl: string;
  liveUrl?: string;
}

// Tipos para habilidades
export interface Skill {
  name: string;
  icon: any;
  level: number;
}

export interface SkillGroup {
  category: string;
  items: Skill[];
}

// Tipos para informações de contato
export interface ContactInfo {
  icon: any;
  label: string;
  value: string;
  link: string;
}

export interface SocialLink {
  icon: any;
  label: string;
  link: string;
}

// Tipos para formulário de contato
export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface SubmitMessage {
  type: string;
  text: string;
} 