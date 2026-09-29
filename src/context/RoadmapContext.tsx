import React, { createContext, useContext, useState, useEffect } from 'react';
import { Roadmap, Topic, Project, UserProgress, PersonalizationConfig } from '../types/roadmap';
import { preloadedRoadmaps, getRoadmapBySlug } from '../data/roadmaps';
import { createAlgorithmicRoadmap } from '../utils/roadmapGenerator';

interface RoadmapContextType {
  currentRoadmap: Roadmap;
  setCurrentRoadmap: (roadmap: Roadmap) => void;
  activeTopic: Topic | null;
  setActiveTopic: (topic: Topic | null) => void;
  activeTab: 'home' | 'explore' | 'roadmap' | 'n8n-agent' | 'progress' | 'about';
  setActiveTab: (tab: 'home' | 'explore' | 'roadmap' | 'n8n-agent' | 'progress' | 'about') => void;
  userProgress: UserProgress;
  toggleTopicCompletion: (topicId: string) => void;
  toggleProjectCompletion: (projectId: string) => void;
  isTopicCompleted: (topicId: string) => boolean;
  isProjectCompleted: (projectId: string) => boolean;
  loadRoadmapBySlug: (slug: string, showSetupModal?: boolean) => void;
  personalizationModalOpen: boolean;
  setPersonalizationModalOpen: (open: boolean) => void;
  pendingSkillToPersonalize: string | null;
  setPendingSkillToPersonalize: (skill: string | null) => void;
  customSkillModalOpen: boolean;
  setCustomSkillModalOpen: (open: boolean) => void;
  generateCustomSkillRoadmap: (skillName: string, config?: PersonalizationConfig) => Promise<void>;
  applyPersonalization: (config: PersonalizationConfig) => void;
  isGenerating: boolean;
  generationStep: string;
  n8nWidgetOpen: boolean;
  setN8nWidgetOpen: (open: boolean) => void;
  n8nWebhookUrl: string;
  setN8nWebhookUrl: (url: string) => void;
}

const STORAGE_KEY = 'skillpath_ai_user_progress_v1';

const initialProgress: UserProgress = {
  completedTopicIds: ['java-l0-t1', 'java-l0-t2'],
  completedProjectIds: [],
  currentRoadmapId: 'java',
  currentTopicId: 'java-l0-t3',
  streakDays: 7,
  lastLearnedDate: new Date().toISOString().split('T')[0],
  dailyGoalMinutes: 45,
  todayMinutesLearned: 35,
  weeklyActivity: [
    { day: 'Mon', dateStr: '2026-09-22', minutes: 40, completedCount: 2 },
    { day: 'Tue', dateStr: '2026-09-23', minutes: 55, completedCount: 3 },
    { day: 'Wed', dateStr: '2026-09-24', minutes: 30, completedCount: 1 },
    { day: 'Thu', dateStr: '2026-09-25', minutes: 60, completedCount: 4 },
    { day: 'Fri', dateStr: '2026-09-26', minutes: 45, completedCount: 2 },
    { day: 'Sat', dateStr: '2026-09-27', minutes: 75, completedCount: 5 },
    { day: 'Sun', dateStr: '2026-09-28', minutes: 35, completedCount: 2 },
  ],
  customRoadmaps: [],
  personalizations: {},
};

const RoadmapContext = createContext<RoadmapContextType | undefined>(undefined);

export const RoadmapProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentRoadmap, setCurrentRoadmap] = useState<Roadmap>(preloadedRoadmaps.java);
  const [activeTopic, setActiveTopic] = useState<Topic | null>(null);
  const [activeTab, setActiveTab] = useState<'home' | 'explore' | 'roadmap' | 'n8n-agent' | 'progress' | 'about'>('home');
  const [personalizationModalOpen, setPersonalizationModalOpen] = useState(false);
  const [pendingSkillToPersonalize, setPendingSkillToPersonalize] = useState<string | null>(null);
  const [customSkillModalOpen, setCustomSkillModalOpen] = useState(false);
  const [isGenerating, setIsGenerating] = useState(false);
  const [generationStep, setGenerationStep] = useState('');
  const [n8nWidgetOpen, setN8nWidgetOpen] = useState(false);
  const [n8nWebhookUrl, setN8nWebhookUrl] = useState(
    'https://veeksha09.app.n8n.cloud/webhook/5c0b5dc9-97a6-493d-b0a3-1d508d6129b9/chat'
  );

  const [userProgress, setUserProgress] = useState<UserProgress>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        return JSON.parse(saved);
      }
    } catch (e) {
      console.error('Failed to load user progress:', e);
    }
    return initialProgress;
  });

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(userProgress));
    } catch (e) {
      console.error('Failed to save user progress:', e);
    }
  }, [userProgress]);

  const isTopicCompleted = (topicId: string) => {
    return userProgress.completedTopicIds.includes(topicId);
  };

  const isProjectCompleted = (projectId: string) => {
    return userProgress.completedProjectIds.includes(projectId);
  };

  const toggleTopicCompletion = (topicId: string) => {
    setUserProgress((prev) => {
      const exists = prev.completedTopicIds.includes(topicId);
      const updated = exists
        ? prev.completedTopicIds.filter((id) => id !== topicId)
        : [...prev.completedTopicIds, topicId];

      const today = new Date().toISOString().split('T')[0];
      const todayMinutes = prev.todayMinutesLearned + (exists ? -10 : 15);

      return {
        ...prev,
        completedTopicIds: updated,
        currentTopicId: topicId,
        todayMinutesLearned: Math.max(0, todayMinutes),
        lastLearnedDate: today,
      };
    });
  };

  const toggleProjectCompletion = (projectId: string) => {
    setUserProgress((prev) => {
      const exists = prev.completedProjectIds.includes(projectId);
      const updated = exists
        ? prev.completedProjectIds.filter((id) => id !== projectId)
        : [...prev.completedProjectIds, projectId];

      return {
        ...prev,
        completedProjectIds: updated,
      };
    });
  };

  const loadRoadmapBySlug = (slug: string, showSetupModal: boolean = false) => {
    if (showSetupModal) {
      setPendingSkillToPersonalize(slug);
      setPersonalizationModalOpen(true);
      return;
    }

    const found = getRoadmapBySlug(slug);
    if (found) {
      setCurrentRoadmap(found);
      setUserProgress((prev) => ({ ...prev, currentRoadmapId: found.id }));
      setActiveTab('roadmap');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      // Check in custom roadmaps
      const customFound = userProgress.customRoadmaps.find(
        (r) => r.slug === slug.toLowerCase() || r.id === slug
      );
      if (customFound) {
        setCurrentRoadmap(customFound);
        setUserProgress((prev) => ({ ...prev, currentRoadmapId: customFound.id }));
        setActiveTab('roadmap');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        // Fallback generate
        const generated = createAlgorithmicRoadmap(slug);
        setCurrentRoadmap(generated);
        setUserProgress((prev) => ({
          ...prev,
          currentRoadmapId: generated.id,
          customRoadmaps: [generated, ...prev.customRoadmaps],
        }));
        setActiveTab('roadmap');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }
  };

  const applyPersonalization = (config: PersonalizationConfig) => {
    const skill = pendingSkillToPersonalize || currentRoadmap.title.replace(' Roadmap', '');
    setPersonalizationModalOpen(false);
    setPendingSkillToPersonalize(null);

    // Save personalization config
    setUserProgress((prev) => ({
      ...prev,
      personalizations: {
        ...prev.personalizations,
        [skill.toLowerCase()]: config,
      },
    }));

    // Generate or customize roadmap for this skill
    generateCustomSkillRoadmap(skill, config);
  };

  const generateCustomSkillRoadmap = async (skillName: string, config?: PersonalizationConfig) => {
    setIsGenerating(true);
    setGenerationStep('Analyzing skill domain & prerequisites...');

    try {
      // Step simulation for visual feedback
      await new Promise((r) => setTimeout(r, 600));
      setGenerationStep(`Formulating beginner → career milestones for ${skillName}...`);

      const res = await fetch('/api/generate-roadmap', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          skill: skillName,
          currentLevel: config?.currentLevel,
          goal: config?.goal,
          dailyTime: config?.dailyTime,
          timeline: config?.timeline,
        }),
      });

      const data = await res.json();

      let finalRoadmap: Roadmap;

      if (data && data.success && data.data) {
        finalRoadmap = {
          ...data.data,
          id: `ai-${Date.now()}`,
          slug: skillName.toLowerCase().replace(/[^a-z0-9]+/g, '-'),
          category: 'custom',
          icon: 'Sparkles',
        };
      } else {
        // Fallback to high-quality local generator
        finalRoadmap = createAlgorithmicRoadmap(skillName, config);
      }

      setGenerationStep('Finalizing interactive learning modules & projects...');
      await new Promise((r) => setTimeout(r, 400));

      setCurrentRoadmap(finalRoadmap);
      setUserProgress((prev) => ({
        ...prev,
        currentRoadmapId: finalRoadmap.id,
        customRoadmaps: [finalRoadmap, ...prev.customRoadmaps.filter((r) => r.id !== finalRoadmap.id)],
      }));

      setActiveTab('roadmap');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } catch (err) {
      console.warn('Network call failed, using intelligent local generator:', err);
      const fallback = createAlgorithmicRoadmap(skillName, config);
      setCurrentRoadmap(fallback);
      setUserProgress((prev) => ({
        ...prev,
        currentRoadmapId: fallback.id,
        customRoadmaps: [fallback, ...prev.customRoadmaps],
      }));
      setActiveTab('roadmap');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } finally {
      setIsGenerating(false);
      setGenerationStep('');
      setCustomSkillModalOpen(false);
    }
  };

  return (
    <RoadmapContext.Provider
      value={{
        currentRoadmap,
        setCurrentRoadmap,
        activeTopic,
        setActiveTopic,
        activeTab,
        setActiveTab,
        userProgress,
        toggleTopicCompletion,
        toggleProjectCompletion,
        isTopicCompleted,
        isProjectCompleted,
        loadRoadmapBySlug,
        personalizationModalOpen,
        setPersonalizationModalOpen,
        pendingSkillToPersonalize,
        setPendingSkillToPersonalize,
        customSkillModalOpen,
        setCustomSkillModalOpen,
        generateCustomSkillRoadmap,
        applyPersonalization,
        isGenerating,
        generationStep,
        n8nWidgetOpen,
        setN8nWidgetOpen,
        n8nWebhookUrl,
        setN8nWebhookUrl,
      }}
    >
      {children}
    </RoadmapContext.Provider>
  );
};

export const useRoadmap = () => {
  const context = useContext(RoadmapContext);
  if (!context) {
    throw new Error('useRoadmap must be used within a RoadmapProvider');
  }
  return context;
};
