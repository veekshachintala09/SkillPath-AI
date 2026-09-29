import React, { useState } from 'react';
import { useRoadmap } from '../context/RoadmapContext';
import { RoadmapLevelCard } from './RoadmapLevelCard';
import { CareerSection } from './CareerSection';
import { ProjectCard } from './ProjectCard';
import {
  Sparkles,
  SlidersHorizontal,
  Clock,
  Briefcase,
  Layers,
  CheckCircle2,
  FolderGit2,
  Flame,
  Search,
  BookOpen,
  ArrowLeft,
  Bot,
} from 'lucide-react';

export const RoadmapTimeline: React.FC = () => {
  const {
    currentRoadmap,
    userProgress,
    setPersonalizationModalOpen,
    setPendingSkillToPersonalize,
    setActiveTab,
    setN8nWidgetOpen,
  } = useRoadmap();

  const [searchFilter, setSearchFilter] = useState('');

  // Total topics & completed topics across whole roadmap
  const allTopics = currentRoadmap.levels.flatMap((l) => l.topics);
  const totalTopicsCount = allTopics.length;
  const completedTopicsCount = allTopics.filter((t) =>
    userProgress.completedTopicIds.includes(t.id)
  ).length;

  const totalProjectsCount = currentRoadmap.projects.length;
  const completedProjectsCount = currentRoadmap.projects.filter((p) =>
    userProgress.completedProjectIds.includes(p.id)
  ).length;

  const roadmapPercent =
    totalTopicsCount > 0 ? Math.round((completedTopicsCount / totalTopicsCount) * 100) : 0;

  // Filter levels and topics if user is searching within the roadmap
  const filteredLevels = currentRoadmap.levels
    .map((lvl) => {
      if (!searchFilter.trim()) return lvl;
      const matchingTopics = lvl.topics.filter(
        (t) =>
          t.title.toLowerCase().includes(searchFilter.toLowerCase()) ||
          t.whatIsIt.toLowerCase().includes(searchFilter.toLowerCase())
      );
      return {
        ...lvl,
        topics: matchingTopics,
      };
    })
    .filter((lvl) => !searchFilter.trim() || lvl.topics.length > 0);

  return (
    <div className="py-8 sm:py-12 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Back button and quick navigation */}
      <div className="flex items-center justify-between mb-6">
        <button
          onClick={() => setActiveTab('explore')}
          className="flex items-center gap-1.5 text-xs font-semibold text-slate-400 hover:text-white transition-colors cursor-pointer"
        >
          <ArrowLeft className="h-4 w-4" />
          <span>Back to Explore Skills</span>
        </button>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setN8nWidgetOpen(true)}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-cyan-950/70 hover:bg-cyan-900/90 border border-cyan-500/50 text-cyan-300 text-xs font-semibold shadow-sm transition-all cursor-pointer hover:border-cyan-400"
            title="Ask live n8n AI Agent about this roadmap"
          >
            <Bot className="h-3.5 w-3.5 text-cyan-400" />
            <span>Ask n8n AI Agent</span>
          </button>

          <button
            onClick={() => {
              setPendingSkillToPersonalize(currentRoadmap.title.replace(' Roadmap', ''));
              setPersonalizationModalOpen(true);
            }}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#121A2B] hover:bg-slate-800 border border-purple-500/40 text-purple-300 text-xs font-semibold shadow-sm transition-colors cursor-pointer"
          >
            <SlidersHorizontal className="h-3.5 w-3.5 text-cyan-400" />
            <span>Personalize Roadmap</span>
          </button>
        </div>
      </div>

      {/* Roadmap Header Card */}
      <div className="rounded-3xl bg-[#0D1220] border border-purple-500/30 p-6 sm:p-8 shadow-2xl relative overflow-hidden mb-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-purple-600/10 rounded-full blur-[120px] pointer-events-none" />

        <div className="relative z-10">
          <div className="flex flex-wrap items-center gap-2 mb-3">
            <span className="text-xs font-bold uppercase tracking-wider text-cyan-400 bg-cyan-950/50 border border-cyan-500/30 px-2.5 py-1 rounded-md">
              {currentRoadmap.category.toUpperCase()} ROADMAP
            </span>
            <span className="text-xs font-medium text-slate-400">
              {currentRoadmap.levels.length} Progressive Levels
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            {currentRoadmap.title}
          </h1>

          <p className="mt-2 text-base sm:text-lg text-slate-300 max-w-3xl leading-relaxed">
            {currentRoadmap.subtitle}
          </p>

          {/* Key Metrics / Metadata */}
          <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 pt-6 border-t border-slate-800/80">
            <div className="p-3 rounded-xl bg-[#070B14]/80 border border-slate-800">
              <div className="text-[11px] font-medium text-slate-400 mb-0.5">Difficulty</div>
              <div className="text-sm font-bold text-emerald-400">{currentRoadmap.difficulty}</div>
            </div>

            <div className="p-3 rounded-xl bg-[#070B14]/80 border border-slate-800">
              <div className="text-[11px] font-medium text-slate-400 mb-0.5 flex items-center gap-1">
                <Clock className="h-3 w-3 text-slate-500" />
                <span>Estimated Time</span>
              </div>
              <div className="text-sm font-bold text-cyan-300">{currentRoadmap.estimatedDuration}</div>
            </div>

            <div className="p-3 rounded-xl bg-[#070B14]/80 border border-slate-800">
              <div className="text-[11px] font-medium text-slate-400 mb-0.5 flex items-center gap-1">
                <FolderGit2 className="h-3 w-3 text-slate-500" />
                <span>Portfolio Projects</span>
              </div>
              <div className="text-sm font-bold text-purple-300">{currentRoadmap.projectsCount}+ Projects</div>
            </div>

            <div className="p-3 rounded-xl bg-[#070B14]/80 border border-slate-800">
              <div className="text-[11px] font-medium text-slate-400 mb-0.5 flex items-center gap-1">
                <Flame className="h-3 w-3 text-amber-500 fill-amber-500" />
                <span>Your Progress</span>
              </div>
              <div className="text-sm font-bold text-white font-mono">{roadmapPercent}% Complete</div>
            </div>
          </div>

          {/* Career Paths Pill Row */}
          <div className="mt-5 flex flex-wrap items-center gap-1.5 text-xs">
            <span className="text-slate-400 font-medium mr-1 flex items-center gap-1">
              <Briefcase className="h-3.5 w-3.5 text-slate-500" />
              <span>Career Paths:</span>
            </span>
            {currentRoadmap.careerPaths.map((path, idx) => (
              <span
                key={idx}
                className="text-[11px] text-slate-200 bg-[#121A2B] border border-slate-700/80 px-2.5 py-0.5 rounded-full"
              >
                {path}
              </span>
            ))}
          </div>

          {/* Overall Progress Bar */}
          <div className="mt-6 pt-6 border-t border-slate-800/80">
            <div className="flex items-center justify-between text-xs font-mono text-slate-400 mb-1.5">
              <span>Overall Curriculum Completion</span>
              <span className="text-white font-bold">{completedTopicsCount} of {totalTopicsCount} topics done</span>
            </div>
            <div className="w-full h-2.5 bg-slate-900 rounded-full overflow-hidden p-0.5 border border-slate-800">
              <div
                className="h-full bg-gradient-to-r from-purple-500 via-indigo-500 to-cyan-400 rounded-full transition-all duration-500"
                style={{ width: `${roadmapPercent}%` }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Search inside roadmap */}
      <div className="mb-8 flex items-center justify-between gap-4">
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-500" />
          <input
            type="text"
            value={searchFilter}
            onChange={(e) => setSearchFilter(e.target.value)}
            placeholder="Search concepts or topics in this roadmap..."
            className="w-full pl-10 pr-4 py-2 bg-[#0D1220] border border-slate-800 rounded-xl text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-purple-500/50"
          />
        </div>

        <div className="text-xs text-slate-400">
          Click any topic card to open lesson & practice drills
        </div>
      </div>

      {/* Vertical Interactive Roadmap Timeline */}
      <div className="relative">
        {filteredLevels.map((level, idx) => (
          <RoadmapLevelCard
            key={level.levelNumber}
            level={level}
            isLast={idx === filteredLevels.length - 1 && currentRoadmap.projects.length === 0}
          />
        ))}

        {/* Level 6 / Real Projects Grid (if projects exist) */}
        {currentRoadmap.projects && currentRoadmap.projects.length > 0 && (
          <div className="relative pl-6 sm:pl-10 mt-10">
            {/* Timeline node */}
            <div className="absolute left-0 sm:left-1.5 top-6 -translate-x-1/2 flex h-7 w-7 items-center justify-center rounded-full border-2 border-cyan-400 bg-[#070B14] shadow-md shadow-cyan-500/50 text-cyan-300 z-10">
              <FolderGit2 className="h-4 w-4" />
            </div>

            <div className="rounded-3xl bg-[#0D1220] border border-cyan-500/30 p-6 sm:p-8 shadow-2xl mb-8">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-6 border-b border-slate-800">
                <div>
                  <div className="text-xs font-mono font-bold uppercase tracking-wider text-cyan-400 mb-1">
                    PROJECT PORTFOLIO
                  </div>
                  <h3 className="text-2xl font-extrabold text-white">
                    8 Real-World Portfolio Projects
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-xl">
                    Build these 8 production-quality applications to showcase real engineering capability to hiring managers.
                  </p>
                </div>

                <div className="text-right">
                  <div className="text-xs font-mono text-slate-400">
                    {completedProjectsCount} of {totalProjectsCount} Built
                  </div>
                  <div className="w-28 h-1.5 bg-slate-800 rounded-full overflow-hidden mt-1">
                    <div
                      className="h-full bg-cyan-400 transition-all duration-500"
                      style={{
                        width: `${totalProjectsCount > 0 ? (completedProjectsCount / totalProjectsCount) * 100 : 0}%`,
                      }}
                    />
                  </div>
                </div>
              </div>

              {/* Projects Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {currentRoadmap.projects.map((proj, idx) => (
                  <ProjectCard
                    key={proj.id}
                    project={proj}
                    badgeText={`Project #${idx + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Career Section at end */}
        <CareerSection />
      </div>
    </div>
  );
};
