export type DifficultyLevel = 'easy' | 'medium' | 'advanced';
export type ProjectDifficulty = 'beginner' | 'intermediate' | 'advanced';

export interface PracticeExercise {
  id: string;
  task: string;
  hint?: string;
  solution?: string;
}

export interface MiniChallenge {
  title: string;
  description: string;
  startingCode?: string;
  expectedOutput?: string;
  tips?: string;
}

export interface CodeExample {
  language: string;
  code: string;
  explanation: string;
}

export interface ResourceLink {
  title: string;
  url: string;
  type: 'doc' | 'video' | 'article' | 'tutorial';
}

export interface Topic {
  id: string;
  title: string;
  subtitle?: string;
  difficulty: DifficultyLevel;
  estimatedHours: string | number;
  whatIsIt: string;
  whyLearnIt: string;
  codeExample?: CodeExample;
  practiceExercises: PracticeExercise[];
  miniChallenge: MiniChallenge;
  resources?: ResourceLink[];
}

export interface Project {
  id: string;
  title: string;
  difficulty: ProjectDifficulty;
  description: string;
  whatYouWillBuild: string;
  skillsRequired: string[];
  estimatedHours: string;
  starterSteps: string[];
}

export interface RoadmapLevel {
  levelNumber: number;
  levelTag: string; // e.g. "LEVEL 0 — Prerequisites"
  title: string;
  description: string;
  color: 'purple' | 'cyan' | 'blue' | 'green' | 'yellow' | 'pink';
  topics: Topic[];
  project?: Project;
  practiceGoal?: string; // e.g. "Practice Goal: 100+ problems"
}

export interface CareerStage {
  title: string;
  desc: string;
}

export type SkillCategory = 'programming' | 'web-dev' | 'ai-data' | 'cybersecurity' | 'career-pro' | 'custom';

export interface Roadmap {
  id: string;
  title: string;
  slug: string;
  subtitle: string;
  category: SkillCategory;
  icon: string;
  difficulty: string;
  estimatedDuration: string;
  projectsCount: number;
  careerPaths: string[];
  careerStages: CareerStage[];
  levels: RoadmapLevel[];
  projects: Project[];
}

export interface DailyActivity {
  day: string;
  dateStr: string;
  minutes: number;
  completedCount: number;
}

export interface PersonalizationConfig {
  currentLevel: 'Complete Beginner' | 'Beginner' | 'Intermediate' | 'Advanced';
  goal: 'College/Exam' | 'Internship' | 'Job' | 'Freelancing' | 'Build Projects' | 'Personal Learning';
  dailyTime: '30 minutes/day' | '1 hour/day' | '2 hours/day' | '3+ hours/day';
  timeline: '1 month' | '3 months' | '6 months' | '1 year' | 'Custom';
}

export interface UserProgress {
  completedTopicIds: string[];
  completedProjectIds: string[];
  currentRoadmapId: string;
  currentTopicId?: string;
  streakDays: number;
  lastLearnedDate: string;
  dailyGoalMinutes: number;
  todayMinutesLearned: number;
  weeklyActivity: DailyActivity[];
  customRoadmaps: Roadmap[];
  personalizations: Record<string, PersonalizationConfig>;
}
