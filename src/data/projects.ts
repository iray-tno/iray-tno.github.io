export interface Project {
  title: string;
  description: {
    en: string;
    ja: string;
  };
  tags: string[];
  githubUrl: string;
  siteUrl?: string;
  badge?: {
    en: string;
    ja: string;
  };
  featured?: boolean;
}

export const projects: Project[] = [
  {
    title: 'Envarly',
    description: {
      en: 'A modern, intuitive Windows environment variable manager built with Tauri v2, React, TypeScript, and Rust. Inspect, edit, and safely preview changes before applying them to the registry.',
      ja: 'Tauri v2、React、TypeScript、Rust で構築された直感的な Windows 環境変数マネージャー。レジストリへ適用する前に PATH やシステム環境変数の変更をプレビュー可能。',
    },
    tags: ['Tauri v2', 'React', 'TypeScript', 'Rust', 'Windows'],
    githubUrl: 'https://github.com/iray-tno/envarly',
    siteUrl: 'https://iray-tno.github.io/envarly/',
    badge: {
      en: 'GUI Tool',
      ja: 'GUI ツール',
    },
    featured: true,
  },
  {
    title: 'Hozo',
    description: {
      en: 'A Rust-powered universal UI compiler and accessibility-first layer for React Native. Compiles JSX into semantic, high-performance web output or React Native primitives.',
      ja: 'Rust 製のユニバーサル UI コンパイラおよび React Native 向けアクセシビリティファースト層。JSX を意味論的な Web 出力や React Native プリミティブへ変換。',
    },
    tags: ['Rust', 'Compiler', 'React Native', 'TypeScript', 'Web'],
    githubUrl: 'https://github.com/iray-tno/hozo',
    siteUrl: 'https://iray-tno.github.io/hozo/',
    badge: {
      en: 'Compiler',
      ja: 'コンパイラ',
    },
    featured: true,
  },
  {
    title: 'ankiniki',
    description: {
      en: 'A flashcard and spaced repetition learning application tailored for developers.',
      ja: '開発者向けに最適化されたフラッシュカード・分散学習（Spaced Repetition）アプリケーション。',
    },
    tags: ['TypeScript'],
    githubUrl: 'https://github.com/iray-tno/ankiniki',
    badge: {
      en: 'App',
      ja: 'アプリ',
    },
    featured: false,
  },
  {
    title: 'prepkit',
    description: {
      en: 'Developer utility toolkit and workflow automation scripts to accelerate day-to-day work.',
      ja: '日々の開発を効率化するユーティリティツールキットおよびワークスペース自動化スクリプト。',
    },
    tags: ['Python', 'CLI'],
    githubUrl: 'https://github.com/iray-tno/prepkit',
    badge: {
      en: 'CLI Tool',
      ja: 'CLI ツール',
    },
    featured: false,
  },
  {
    title: 'chirashi-js',
    description: {
      en: 'A lightweight JavaScript and TypeScript utility library focused on clean and composable helpers.',
      ja: 'シンプルで組み合わせやすいヘルパー関数を提供する軽量 JavaScript / TypeScript ライブラリ。',
    },
    tags: ['TypeScript', 'Library'],
    githubUrl: 'https://github.com/iray-tno/chirashi-js',
    badge: {
      en: 'Library',
      ja: 'ライブラリ',
    },
    featured: false,
  },
];
