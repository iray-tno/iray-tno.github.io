export interface Project {
  title: string;
  description: string;
  tags: string[];
  githubUrl: string;
  siteUrl?: string;
  badge?: string;
  featured?: boolean;
}

export const projects: Project[] = [
  {
    title: 'Envarly',
    description:
      'Windows environment variable manager built with Tauri v2, React, TypeScript, and Rust. Safely inspect, edit, and preview PATH and system environment variables.',
    tags: ['Tauri v2', 'React', 'TypeScript', 'Rust', 'Windows'],
    githubUrl: 'https://github.com/iray-tno/envarly',
    siteUrl: 'https://iray-tno.github.io/envarly/',
    badge: 'GUI Tool',
    featured: true,
  },
  {
    title: 'Hozo',
    description:
      'A Rust-powered universal UI compiler and accessibility-first layer for React Native. Compiles JSX into semantic Web output (DOM + CSS) or React Native primitives.',
    tags: ['Rust', 'Compiler', 'React Native', 'TypeScript', 'Web'],
    githubUrl: 'https://github.com/iray-tno/hozo',
    siteUrl: 'https://iray-tno.github.io/hozo/',
    badge: 'Compiler',
    featured: true,
  },
  {
    title: 'ankiniki',
    description: 'Flashcard and spaced repetition learning application tailored for developers.',
    tags: ['TypeScript'],
    githubUrl: 'https://github.com/iray-tno/ankiniki',
    badge: 'App',
    featured: false,
  },
  {
    title: 'prepkit',
    description: 'Developer utilities, workspace automation scripts, and workflow boosters.',
    tags: ['Python', 'CLI'],
    githubUrl: 'https://github.com/iray-tno/prepkit',
    badge: 'CLI Tool',
    featured: false,
  },
  {
    title: 'chirashi-js',
    description: 'Lightweight JavaScript and TypeScript utility library for clean application logic.',
    tags: ['TypeScript', 'Library'],
    githubUrl: 'https://github.com/iray-tno/chirashi-js',
    badge: 'Library',
    featured: false,
  },
];
