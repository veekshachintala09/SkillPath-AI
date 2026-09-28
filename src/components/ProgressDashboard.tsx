import React from 'react';
import { useRoadmap } from '../context/RoadmapContext';
import {
  Flame,
  CheckCircle2,
  Clock,
  Trophy,
  ArrowRight,
  TrendingUp,
  BookOpen,
  Calendar,
  Layers,
  Sparkles,
  Award,
} from 'lucide-react';

export const ProgressDashboard: React.FC = () => {
  const { currentRoadmap, userProgress, setActiveTopic, setActiveTab, loadRoadmapBySlug } = useRoadmap();

  // Find current topic or default to first topic
  const allTopics = currentRoadmap.levels.flatMap((l) => l.topics);
  const currentTopic =
    allTopics.find((t) => t.id === userProgress.currentTopicId) ||
    allTopics.find((t) => !userProgress.completedTopicIds.includes(t.id)) ||
    allTopics[0];

  const totalTopicsCount = allTopics.length;
  const completedTopicsCount = allTopics.filter((t) =>
    userProgress.completedTopicIds.includes(t.id)
  ).length;
  const remainingTopicsCount = Math.max(0, totalTopicsCount - completedTopicsCount);

  const totalProjectsCount = currentRoadmap.projects.length;
  const completedProjectsCount = currentRoadmap.projects.filter((p) =>
    userProgress.completedProjectIds.includes(p.id)
  ).length;

  const percentComplete =
    totalTopicsCount > 0 ? Math.round((completedTopicsCount / totalTopicsCount) * 100) : 0;

  // Find active level
  const activeLevel =
    currentRoadmap.levels.find((l) =>
      l.topics.some((t) => !userProgress.completedTopicIds.includes(t.id))
    ) || currentRoadmap.levels[0];

  // SVG circular radius
  const radius = 58;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (percentComplete / 100) * circumference;

  return (
    <div className="py-8 sm:py-12 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Welcome Banner */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
        <div>
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-purple-400 mb-1">
            <Sparkles className="h-4 w-4 text-cyan-400" />
            <span>Learning Dashboard</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white">
            Welcome back 👋
          </h1>
          <p className="mt-1 text-sm text-slate-300">
            Keep your streak alive. Every small concept mastered compounds into technical mastery.
          </p>
        </div>

        {/* Learning Streak Pill */}
        <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-[#0D1220] border border-amber-500/40 shadow-lg shadow-amber-950/20 w-fit">
          <div className="h-10 w-10 rounded-xl bg-amber-950/60 border border-amber-500/50 flex items-center justify-center text-amber-400">
            <Flame className="h-6 w-6 fill-amber-400 text-amber-500 animate-pulse" />
          </div>
          <div>
            <div className="text-xs font-medium text-slate-400">Current Streak</div>
            <div className="text-lg font-black text-amber-300 font-mono">
              {userProgress.streakDays} Day Streak 🔥
            </div>
          </div>
        </div>
      </div>

      {/* Hero Continue Learning Card */}
      <div className="rounded-3xl bg-gradient-to-r from-[#121A2B] via-[#0D1220] to-[#121A2B] border border-purple-500/40 p-6 sm:p-8 shadow-2xl mb-8 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 bg-purple-600/10 rounded-full blur-[100px] pointer-events-none" />

        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="flex-1">
            <div className="text-xs font-mono font-semibold uppercase tracking-wider text-cyan-400 mb-2">
              CONTINUE LEARNING
            </div>
            <div className="text-sm font-semibold text-slate-400">
              Active Roadmap: <span className="text-white font-bold">{currentRoadmap.title}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">
              Next Up: {currentTopic?.title || 'Course Completed!'}
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 mt-2 max-w-xl leading-relaxed">
              {currentTopic?.whatIsIt?.slice(0, 140)}...
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0">
            <button
              onClick={() => {
                if (currentTopic) setActiveTopic(currentTopic);
              }}
              className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-purple-600 via-indigo-600 to-cyan-500 hover:from-purple-500 hover:to-cyan-400 text-white text-sm font-bold shadow-xl shadow-purple-600/30 transition-all cursor-pointer"
            >
              <span>Continue Learning</span>
              <ArrowRight className="h-4 w-4" />
            </button>
            <button
              onClick={() => setActiveTab('roadmap')}
              className="w-full sm:w-auto px-4 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs font-semibold text-slate-300 transition-colors cursor-pointer text-center"
            >
              View Full Roadmap
            </button>
          </div>
        </div>
      </div>

      {/* Progress Metrics & Circular Gauge */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        {/* Circular Progress Gauge */}
        <div className="rounded-3xl bg-[#0D1220] border border-slate-800 p-6 flex flex-col items-center justify-center text-center shadow-xl">
          <div className="text-xs font-bold uppercase tracking-wider text-purple-400 mb-4">
            Curriculum Progress
          </div>

          {/* Circular SVG Gauge */}
          <div className="relative flex items-center justify-center">
            <svg className="w-36 h-36 transform -rotate-90">
              <circle
                cx="72"
                cy="72"
                r={radius}
                stroke="#1E293B"
                strokeWidth="10"
                fill="transparent"
              />
              <circle
                cx="72"
                cy="72"
                r={radius}
                stroke="url(#gradient-progress)"
                strokeWidth="10"
                strokeDasharray={circumference}
                strokeDashoffset={strokeDashoffset}
                strokeLinecap="round"
                fill="transparent"
                className="transition-all duration-1000 ease-out"
              />
              <defs>
                <linearGradient id="gradient-progress" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#8B5CF6" />
                  <stop offset="50%" stopColor="#3B82F6" />
                  <stop offset="100%" stopColor="#06B6D4" />
                </linearGradient>
              </defs>
            </svg>

            <div className="absolute flex flex-col items-center justify-center text-center">
              <span className="text-3xl font-extrabold text-white font-mono">
                {percentComplete}%
              </span>
              <span className="text-[11px] font-medium text-slate-400">Complete</span>
            </div>
          </div>

          <h3 className="text-lg font-bold text-white mt-4">
            {currentRoadmap.title}
          </h3>
          <p className="text-xs text-slate-400 mt-1">
            Current Stage: <span className="text-cyan-300 font-semibold">{activeLevel.levelTag}</span>
          </p>
        </div>

        {/* 4 Quantitative Breakdown Tiles */}
        <div className="lg:col-span-2 grid grid-cols-2 gap-4">
          <div className="p-5 rounded-2xl bg-[#0D1220] border border-slate-800 flex flex-col justify-between">
            <div className="flex items-center justify-between text-emerald-400 mb-2">
              <CheckCircle2 className="h-5 w-5" />
              <span className="text-xs font-mono font-bold">COMPLETED</span>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-extrabold text-white font-mono">
                {completedTopicsCount}
              </div>
              <div className="text-xs text-slate-400 mt-0.5">Topics mastered</div>
            </div>
          </div>

          <div className="p-5 rounded-2xl bg-[#0D1220] border border-slate-800 flex flex-col justify-between">
            <div className="flex items-center justify-between text-purple-400 mb-2">
              <BookOpen className="h-5 w-5" />
              <span className="text-xs font-mono font-bold">REMAINING</span>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-extrabold text-white font-mono">
                {remainingTopicsCount}
              </div>
              <div className="text-xs text-slate-400 mt-0.5">Topics to complete</div>
            </div>
          </div>

          <div className="p-5 rounded-2xl bg-[#0D1220] border border-slate-800 flex flex-col justify-between">
            <div className="flex items-center justify-between text-cyan-400 mb-2">
              <Trophy className="h-5 w-5" />
              <span className="text-xs font-mono font-bold">PROJECTS</span>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-extrabold text-white font-mono">
                {completedProjectsCount} / {totalProjectsCount}
              </div>
              <div className="text-xs text-slate-400 mt-0.5">Projects built</div>
            </div>
          </div>

          <div className="p-5 rounded-2xl bg-[#0D1220] border border-slate-800 flex flex-col justify-between">
            <div className="flex items-center justify-between text-amber-400 mb-2">
              <Clock className="h-5 w-5" />
              <span className="text-xs font-mono font-bold">STUDY PACE</span>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-extrabold text-white font-mono">
                {userProgress.todayMinutesLearned}m / {userProgress.dailyGoalMinutes}m
              </div>
              <div className="text-xs text-slate-400 mt-0.5">Today’s daily goal</div>
            </div>
          </div>
        </div>
      </div>

      {/* Weekly Activity Visualization */}
      <div className="rounded-3xl bg-[#0D1220] border border-slate-800 p-6 sm:p-8 shadow-xl mb-8">
        <div className="flex items-center justify-between mb-6">
          <div>
            <div className="text-xs font-semibold uppercase tracking-wider text-cyan-400 mb-1">
              Consistency Tracker
            </div>
            <h3 className="text-xl font-bold text-white">
              Weekly Learning Activity
            </h3>
          </div>
          <div className="flex items-center gap-1.5 text-xs text-slate-400 font-mono">
            <TrendingUp className="h-4 w-4 text-emerald-400" />
            <span>Avg 45 mins/day</span>
          </div>
        </div>

        {/* Activity Bar Chart */}
        <div className="grid grid-cols-7 gap-2 sm:gap-4 items-end h-44 pt-4 border-b border-slate-800">
          {userProgress.weeklyActivity.map((day, idx) => {
            const heightPercent = Math.min(100, Math.round((day.minutes / 80) * 100));
            const isToday = idx === userProgress.weeklyActivity.length - 1;

            return (
              <div key={day.day} className="flex flex-col items-center h-full justify-end group">
                {/* Tooltip on hover */}
                <div className="opacity-0 group-hover:opacity-100 transition-opacity mb-2 px-2 py-1 bg-slate-900 border border-slate-700 rounded text-[10px] font-mono text-cyan-300 pointer-events-none whitespace-nowrap">
                  {day.minutes} mins · {day.completedCount} topics
                </div>

                {/* Vertical Bar */}
                <div className="w-full max-w-[42px] bg-slate-800/80 rounded-t-xl overflow-hidden flex items-end">
                  <div
                    className={`w-full rounded-t-xl transition-all duration-700 ${
                      isToday
                        ? 'bg-gradient-to-t from-cyan-500 to-purple-500'
                        : 'bg-gradient-to-t from-purple-700 to-indigo-500 group-hover:from-purple-500 group-hover:to-cyan-400'
                    }`}
                    style={{ height: `${Math.max(12, heightPercent)}%` }}
                  />
                </div>

                <div className="mt-2 text-xs font-mono text-slate-400 group-hover:text-white">
                  {day.day}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
