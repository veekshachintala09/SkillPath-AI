import { Roadmap, SkillCategory } from '../../types/roadmap';
import { javaRoadmap } from './java';
import { pythonRoadmap } from './python';
import { webdevRoadmap, cybersecurityRoadmap } from './webdev';
import { aimlRoadmap, dataScienceRoadmap } from './aiml';
import { dsaRoadmap, cppRoadmap, javascriptRoadmap, gitRoadmap } from './dsa';
import { createAlgorithmicRoadmap } from '../../utils/roadmapGenerator';

export const preloadedRoadmaps: Record<string, Roadmap> = {
  java: javaRoadmap,
  python: pythonRoadmap,
  'web-development': webdevRoadmap,
  webdev: webdevRoadmap,
  cybersecurity: cybersecurityRoadmap,
  'ai-ml': aimlRoadmap,
  aiml: aimlRoadmap,
  'ai-machine-learning': aimlRoadmap,
  'data-science': dataScienceRoadmap,
  dsa: dsaRoadmap,
  'data-structures-algorithms': dsaRoadmap,
  cpp: cppRoadmap,
  'c++': cppRoadmap,
  javascript: javascriptRoadmap,
  js: javascriptRoadmap,
  'git-github': gitRoadmap,
  git: gitRoadmap,
};

export interface SkillCategoryCard {
  id: string;
  name: string;
  category: SkillCategory;
  description: string;
  difficulty: string;
  estimatedTime: string;
  iconName: string;
  targetSlug: string;
}

export interface CategoryGroup {
  id: SkillCategory;
  title: string;
  description: string;
  skills: SkillCategoryCard[];
}

export const skillCategories: CategoryGroup[] = [
  {
    id: 'programming',
    title: 'Programming Languages',
    description: 'Master low-level control, high-performance backends, and universal software engineering.',
    skills: [
      {
        id: 'java-card',
        name: 'Java',
        category: 'programming',
        description: 'Enterprise backend development, Spring Boot, OOP architecture, and JVM tuning.',
        difficulty: 'Beginner → Advanced',
        estimatedTime: '4–6 months',
        iconName: 'Coffee',
        targetSlug: 'java',
      },
      {
        id: 'python-card',
        name: 'Python',
        category: 'programming',
        description: 'Clean readable syntax, web APIs, automation, data science, and AI pipelines.',
        difficulty: 'Beginner → Advanced',
        estimatedTime: '3–5 months',
        iconName: 'Terminal',
        targetSlug: 'python',
      },
      {
        id: 'cpp-card',
        name: 'C++',
        category: 'programming',
        description: 'Pointers, manual memory, game development in Unreal Engine, and low-latency systems.',
        difficulty: 'Intermediate → Advanced',
        estimatedTime: '5–7 months',
        iconName: 'Cpu',
        targetSlug: 'cpp',
      },
      {
        id: 'c-card',
        name: 'C Programming',
        category: 'programming',
        description: 'System calls, hardware architecture, embedded controllers, and operating systems.',
        difficulty: 'Intermediate → Advanced',
        estimatedTime: '3–5 months',
        iconName: 'Binary',
        targetSlug: 'c',
      },
      {
        id: 'js-card',
        name: 'JavaScript',
        category: 'programming',
        description: 'The ubiquitous language powering browser runtimes, full-stack Node.js, and web apps.',
        difficulty: 'Beginner → Advanced',
        estimatedTime: '3–5 months',
        iconName: 'Code',
        targetSlug: 'javascript',
      },
    ],
  },
  {
    id: 'web-dev',
    title: 'Web Development',
    description: 'Create responsive web apps, interactive user interfaces, and robust backend APIs.',
    skills: [
      {
        id: 'html-css-card',
        name: 'HTML & CSS',
        category: 'web-dev',
        description: 'Semantic markup, modern Flexbox & Grid layouts, accessibility, and CSS animations.',
        difficulty: 'Beginner Friendly',
        estimatedTime: '1–2 months',
        iconName: 'Layout',
        targetSlug: 'html-css',
      },
      {
        id: 'react-card',
        name: 'React',
        category: 'web-dev',
        description: 'Component-driven interfaces, hooks, state management, and modern Single Page Apps.',
        difficulty: 'Beginner → Intermediate',
        estimatedTime: '2–4 months',
        iconName: 'Component',
        targetSlug: 'react',
      },
      {
        id: 'node-card',
        name: 'Node.js',
        category: 'web-dev',
        description: 'Asynchronous event-driven backend microservices, Express, and database integrations.',
        difficulty: 'Intermediate',
        estimatedTime: '3–4 months',
        iconName: 'Server',
        targetSlug: 'nodejs',
      },
      {
        id: 'fullstack-card',
        name: 'Full Stack Development',
        category: 'web-dev',
        description: 'End-to-end web applications connecting React frontends with modern databases and APIs.',
        difficulty: 'Beginner → Advanced',
        estimatedTime: '5–8 months',
        iconName: 'Layers',
        targetSlug: 'web-development',
      },
      {
        id: 'app-dev-card',
        name: 'App Development',
        category: 'web-dev',
        description: 'Cross-platform mobile apps for iOS and Android using React Native and Flutter.',
        difficulty: 'Intermediate',
        estimatedTime: '4–6 months',
        iconName: 'Smartphone',
        targetSlug: 'app-development',
      },
    ],
  },
  {
    id: 'ai-data',
    title: 'AI & Data Science',
    description: 'Harness the power of machine learning, neural networks, LLMs, and predictive data analysis.',
    skills: [
      {
        id: 'aiml-card',
        name: 'AI & Machine Learning',
        category: 'ai-data',
        description: 'Predictive models, neural networks, PyTorch, computer vision, and model deployment.',
        difficulty: 'Beginner → Advanced',
        estimatedTime: '5–8 months',
        iconName: 'Sparkles',
        targetSlug: 'ai-ml',
      },
      {
        id: 'genai-card',
        name: 'Generative AI & LLMs',
        category: 'ai-data',
        description: 'Transformer architectures, prompt engineering, RAG with vector DBs, and autonomous agents.',
        difficulty: 'Intermediate → Advanced',
        estimatedTime: '3–5 months',
        iconName: 'Bot',
        targetSlug: 'generative-ai',
      },
      {
        id: 'datascience-card',
        name: 'Data Science',
        category: 'ai-data',
        description: 'Exploratory data analysis, statistical modeling, hypothesis testing, and business storytelling.',
        difficulty: 'Beginner → Advanced',
        estimatedTime: '4–6 months',
        iconName: 'BarChart3',
        targetSlug: 'data-science',
      },
      {
        id: 'dataanalytics-card',
        name: 'Data Analytics',
        category: 'ai-data',
        description: 'SQL queries, Excel dashboards, Power BI visual metrics, and KPI tracking.',
        difficulty: 'Beginner Friendly',
        estimatedTime: '2–4 months',
        iconName: 'LineChart',
        targetSlug: 'data-analytics',
      },
    ],
  },
  {
    id: 'cybersecurity',
    title: 'Cybersecurity & Defense',
    description: 'Protect networks, discover vulnerabilities ethically, and defend digital infrastructure.',
    skills: [
      {
        id: 'cybersec-card',
        name: 'Cybersecurity Fundamentals',
        category: 'cybersecurity',
        description: 'CIA triad, threat modeling, network defense, firewalls, and incident triage.',
        difficulty: 'Beginner Friendly',
        estimatedTime: '3–5 months',
        iconName: 'Shield',
        targetSlug: 'cybersecurity',
      },
      {
        id: 'ethical-hacking-card',
        name: 'Ethical Hacking',
        category: 'cybersecurity',
        description: 'Penetration testing, Burp Suite, vulnerability scanners, and web application exploitation.',
        difficulty: 'Intermediate → Advanced',
        estimatedTime: '5–7 months',
        iconName: 'Lock',
        targetSlug: 'ethical-hacking',
      },
      {
        id: 'soc-card',
        name: 'SOC Analyst',
        category: 'cybersecurity',
        description: 'SIEM log analysis (Splunk), threat detection, malware triage, and incident response.',
        difficulty: 'Beginner → Intermediate',
        estimatedTime: '3–5 months',
        iconName: 'Search',
        targetSlug: 'soc-analyst',
      },
      {
        id: 'networking-card',
        name: 'Computer Networking',
        category: 'cybersecurity',
        description: 'OSI 7 layers, TCP/IP, DNS, subnetting, routers, switches, and Wireshark packet capture.',
        difficulty: 'Beginner Friendly',
        estimatedTime: '2–3 months',
        iconName: 'Network',
        targetSlug: 'networking',
      },
    ],
  },
  {
    id: 'career-pro',
    title: 'Career & Professional Mastery',
    description: 'High-leverage business, communication, and executive productivity skills.',
    skills: [
      {
        id: 'public-speaking-card',
        name: 'Public Speaking',
        category: 'career-pro',
        description: 'Overcome stage fright, master vocal variety, craft compelling keynote presentations.',
        difficulty: 'Beginner Friendly',
        estimatedTime: '1–3 months',
        iconName: 'Mic',
        targetSlug: 'public-speaking',
      },
      {
        id: 'comm-skills-card',
        name: 'Communication Skills',
        category: 'career-pro',
        description: 'Active listening, executive presence, cross-functional persuasion, and negotiation.',
        difficulty: 'Beginner Friendly',
        estimatedTime: '1–2 months',
        iconName: 'MessageSquare',
        targetSlug: 'communication-skills',
      },
      {
        id: 'excel-card',
        name: 'Microsoft Excel',
        category: 'career-pro',
        description: 'VLOOKUP/XLOOKUP, Pivot Tables, financial modeling, macros, and automated reports.',
        difficulty: 'Beginner → Intermediate',
        estimatedTime: '1–3 months',
        iconName: 'FileSpreadsheet',
        targetSlug: 'excel',
      },
      {
        id: 'powerbi-card',
        name: 'Power BI',
        category: 'career-pro',
        description: 'DAX expressions, data modeling, automated ETL pipelines, and executive dashboards.',
        difficulty: 'Beginner → Intermediate',
        estimatedTime: '2–4 months',
        iconName: 'PieChart',
        targetSlug: 'power-bi',
      },
      {
        id: 'entrepreneur-card',
        name: 'Entrepreneurship',
        category: 'career-pro',
        description: 'Idea validation, customer discovery, unit economics, MVP launching, and fundraising.',
        difficulty: 'Beginner → Advanced',
        estimatedTime: '3–6 months',
        iconName: 'Rocket',
        targetSlug: 'entrepreneurship',
      },
    ],
  },
];

export const popularSkillChips = [
  { name: 'Java', slug: 'java' },
  { name: 'Python', slug: 'python' },
  { name: 'Cybersecurity', slug: 'cybersecurity' },
  { name: 'AI/ML', slug: 'ai-ml' },
  { name: 'Web Development', slug: 'web-development' },
  { name: 'Data Science', slug: 'data-science' },
  { name: 'C++', slug: 'cpp' },
  { name: 'DSA', slug: 'dsa' },
];

export function getRoadmapBySlug(slug: string): Roadmap | null {
  const normalized = slug.toLowerCase().trim();
  if (preloadedRoadmaps[normalized]) {
    return preloadedRoadmaps[normalized];
  }
  // Check in skill categories
  for (const group of skillCategories) {
    for (const skill of group.skills) {
      if (skill.targetSlug === normalized) {
        if (preloadedRoadmaps[skill.targetSlug]) {
          return preloadedRoadmaps[skill.targetSlug];
        }
        return createAlgorithmicRoadmap(skill.name);
      }
    }
  }
  return null;
}
