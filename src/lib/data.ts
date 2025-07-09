import { Project } from '@/types';

export const projects: Project[] = [
  {
        id: '1',
        title: 'CodeSensei',
        description: 'CodeSensei is a full-stack web application that leverages AI to provide intelligent, contextual code reviews. Users can submit code snippets and receive instant feedback on code quality, structure, readability, and best practices using an integrated language model.',
        image: '',
        technologies: ['Next.js', 'React', 'TypeScript', 'Cohere', 'MongoDB', 'Tailwind CSS'],
        githubUrl: 'https://github.com/loki135/CodeSensei',
        liveUrl: 'https://codesensei135.netlify.app',
        featured: true,
        createdAt: new Date('2024-01-10'),
        updatedAt: new Date('2024-03-01'),
  },
  {
    id: '2',
    title: 'Task Master',
    description: 'Task Master is a sleek and responsive todo application that helps users manage their tasks efficiently. It allows task creation, editing, completion toggling, filtering, and deletion with local persistence using browser storage. Built with React, TypeScript, and Tailwind CSS, it emphasizes accessibility and user-friendly interactions.',
    image: '',
    technologies: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'localStorage'],
    githubUrl: 'https://github.com/loki135/todo-app', // replace with actual URL
    liveUrl: 'https://todolokx.netlify.app',
    featured: true,
    createdAt: new Date('2025-06-25'),
    updatedAt: new Date('2025-07-01'),
  },  
]; 