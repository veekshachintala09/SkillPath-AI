import React, { useState } from 'react';
import { RoadmapLevel } from '../types/roadmap';
import { TopicCard } from './TopicCard';
import { ProjectCard } from './ProjectCard';
import { useRoadmap } from '../context/RoadmapContext';
import { CheckCircle2, ChevronDown, ChevronUp, Play, Trophy, Code, Target } from 'lucide-react';

interface RoadmapLevelCardProps {
  level: RoadmapLevel;
  isLast: boolean;
}

export const RoadmapLevelCard: React.FC<RoadmapLevelCardProps> = ({ level, isLast }) => {
  const { userProgress, setActiveTopic } = useRoadmap();
  const [isOpen, setIsOpen] = useState(true);

  // Compute completed topics in this level
  const totalTopics = level.topics.length;
  const completedTopics = level.topics.filter((t) =>
    userProgress.completedTopicIds.includes(t.id)
  ).length;

  const percentComplete = totalTopics > 0 ? Math.round((completedTopics / totalTopics) * 100) : 0;
  const isLevelCompleted = totalTopics > 0 && completedTopics === totalTopics;

  const colorVariants: Record<string, { border: string; glow: string; text: string; bg: string }> = {
    blue: {
      border: 'border-blue-500/40',
      glow: 'shadow-blue-900/30',
      text: 'text-blue-400',
      bg: 'bg-blue-950/40',
    },
    green: {
      border: 'border-emerald-500/40',
      glow: 'shadow-emerald-900/30',
      text: 'text-emerald-400',
      bg: 'bg-emerald-950/40',
    },
    purple: {
      border: 'border-purple-500/40',
      glow: 'shadow-purple-900/30',
      text: 'text-purple-400',
      bg: 'bg-purple-950/40',
    },
    yellow: {
      border: 'border-amber-500/40',
      glow: 'shadow-amber-900/30',
      text: 'text-amber-400',
      bg: 'bg-amber-950/40',
    },
    pink: {
      border: 'border-pink-500/40',
      glow: 'shadow-pink-900/30',
      text: 'text-pink-400',
      bg: 'bg-pink-950/40',
    },
    cyan: {
      border: 'border-cyan-500/40',
      glow: 'shadow-cyan-900/30',
      text: 'text-cyan-400',
      bg: 'bg-cyan-950/40',
    },
  };

  const scheme = colorVariants[level.color] || colorVariants.purple;

  const handleStartLevel = () => {
    setIsOpen(true);
    if (level.topics.length > 0) {
      // Find first uncompleted topic or first topic
      const firstUncompleted = level.topics.find((t) => !userProgress.completedTopicIds.includes(t.id));
      setActiveTopic(firstUncompleted || level.topics[0]);
    }
  };

  return (
    <div className="relative pl-6 sm:pl-10">
      {/* Glowing Vertical Line */}
      {!isLast && (
        <div className="absolute left-2.5 sm:left-4 top-10 bottom-0 w-0.5 bg-gradient-to-b from-purple-500 via-indigo-500 to-cyan-500/40 opacity-70" />
      )}

      {/* Node Milestone Circle */}
      <div
        className={`absolute left-0 sm:left-1.5 top-6 -translate-x-1/2 flex h-6 w-6 sm:h-7 sm:w-7 items-center justify-center rounded-full border-2 transition-all duration-300 z-10 ${
          isLevelCompleted
            ? 'bg-emerald-500 border-emerald-300 shadow-md shadow-emerald-500/50 text-black'
            : 'bg-[#070B14] border-purple-400 shadow-md shadow-purple-500/50 text-purple-300'
        }`}
      >
        {isLevelCompleted ? (
          <CheckCircle2 className="h-4 w-4 text-[#070B14] fill-white" />
        ) : (
          <span className="text-[10px] font-mono font-bold">{level.levelNumber}</span>
        )}
      </div>

      {/* Main Level Card Container */}
      <div
        className={`rounded-2xl bg-[#0D1220] border transition-all duration-300 overflow-hidden mb-8 shadow-xl ${scheme.border} ${scheme.glow}`}
      >
        {/* Level Header Bar */}
        <div className="p-5 sm:p-6 bg-gradient-to-r from-[#121A2B] to-[#0D1220] border-b border-slate-800/80">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className={`text-xs font-mono font-bold uppercase tracking-wider ${scheme.text}`}>
                  {level.levelTag}
                </span>
                {level.practiceGoal && (
                  <span className="text-[11px] font-semibold text-amber-300 bg-amber-950/50 border border-amber-500/30 px-2 py-0.5 rounded-full flex items-center gap-1">
                    <Target className="h-3 w-3" />
                    <span>{level.practiceGoal}</span>
                  </span>
                )}
              </div>

              <h3 className="text-xl sm:text-2xl font-extrabold text-white">
                {level.title}
              </h3>

              <p className="mt-1 text-xs sm:text-sm text-slate-300 max-w-2xl leading-relaxed">
                {level.description}
              </p>
            </div>

            {/* Actions & Progress Indicator */}
            <div className="flex items-center gap-3 shrink-0 self-start sm:self-center">
              {/* Level Progress Pill */}
              <div className="text-right hidden md:block">
                <div className="text-xs font-mono text-slate-400">
                  {completedTopics}/{totalTopics} topics
                </div>
                <div className="w-24 h-1.5 bg-slate-800 rounded-full overflow-hidden mt-1">
                  <div
                    className="h-full bg-gradient-to-r from-purple-500 to-cyan-400 transition-all duration-500"
                    style={{ width: `${percentComplete}%` }}
                  />
                </div>
              </div>

              <button
                onClick={handleStartLevel}
                className="flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-white bg-purple-600 hover:bg-purple-500 rounded-xl shadow-md shadow-purple-600/30 transition-all cursor-pointer"
              >
                <Play className="h-3.5 w-3.5 fill-white" />
                <span>Start Level</span>
              </button>

              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 text-slate-400 hover:text-white bg-slate-800/60 rounded-xl border border-slate-700/60 transition-colors cursor-pointer"
                title={isOpen ? 'Collapse level' : 'Expand level'}
              >
                {isOpen ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
              </button>
            </div>
          </div>
        </div>

        {/* Level Body (Topics & Project) */}
        {isOpen && (
          <div className="p-5 sm:p-6 space-y-6">
            {/* Topic List */}
            {level.topics.length > 0 && (
              <div>
                <div className="flex items-center justify-between mb-3 text-xs text-slate-400 font-medium">
                  <span>Topics in this stage (click to learn & practice):</span>
                  <span>{percentComplete}% completed</span>
                </div>

                <div className="grid grid-cols-1 gap-2.5">
                  {level.topics.map((topic, idx) => (
                    <TopicCard key={topic.id} topic={topic} index={idx} />
                  ))}
                </div>
              </div>
            )}

            {/* Embedded Project for this level */}
            {level.project && (
              <div className="pt-2">
                <div className="text-xs font-semibold uppercase tracking-wider text-cyan-400 mb-2.5 flex items-center gap-1.5">
                  <Trophy className="h-4 w-4" />
                  <span>Hands-on Level Project</span>
                </div>
                <ProjectCard project={level.project} badgeText="Level Milestone Project" />
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
