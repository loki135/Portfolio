export interface Project {
  id: string;
  title: string;
  description: string;
  image?: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  featured: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  publishedAt: Date;
  tags: string[];
  featured: boolean;
}

export interface ContactForm {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}

export interface Experience {
  id: string;
  company: string;
  position: string;
  duration: string;
  description: string;
  technologies: string[];
  current: boolean;
}

export interface Skill {
  name: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced' | 'Expert';
  category: 'Frontend' | 'Backend' | 'Database' | 'DevOps' | 'Tools';
}
