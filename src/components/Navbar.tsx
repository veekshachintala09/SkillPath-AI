import React, { useState } from 'react';
import { useRoadmap } from '../context/RoadmapContext';
import { Compass, Sparkles, Menu, X, PlusCircle, Flame, CheckCircle2 } from 'lucide-react';

export const Navbar: React.FC = () => {
  const { activeTab, setActiveTab, setCustomSkillModalOpen, userProgress, currentRoadmap } = useRoadmap();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const completedCount = userProgress.completedTopicIds.length;

  return (
    <header className="sticky top-0 z-40 w-full border-b border-slate-800/80 bg-[#070B14]/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Zone 1: Brand title wordmark with glowing path icon */}
        <button
          onClick={() => {
            setActiveTab('home');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="group flex items-center gap-2.5 text-left focus:outline-none"
        >
          <div className="relative flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-tr from-purple-600 via-indigo-500 to-cyan-400 p-0.5 shadow-md shadow-purple-500/20 group-hover:shadow-purple-500/40 transition-shadow">
            <div className="flex h-full w-full items-center justify-center rounded-[10px] bg-[#070B14]">
              <Compass className="h-5 w-5 text-cyan-400 transition-transform duration-300 group-hover:rotate-45" />
            </div>
            <Sparkles className="absolute -top-1 -right-1 h-3.5 w-3.5 text-yellow-300 animate-pulse" />
          </div>
          <div className="flex flex-col">
            <span className="text-lg font-bold tracking-tight text-white flex items-center gap-1.5">
              SkillPath <span className="bg-gradient-to-r from-purple-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">AI</span>
            </span>
          </div>
        </button>

        {/* Zone 2: Navigation Links */}
        <nav className="hidden md:flex items-center gap-1 text-sm font-medium text-slate-300">
          <button
            onClick={() => setActiveTab('home')}
            className={`px-3.5 py-1.5 rounded-lg transition-colors ${
              activeTab === 'home'
                ? 'bg-slate-800/80 text-white font-semibold shadow-inner'
                : 'hover:text-white hover:bg-slate-800/40'
            }`}
          >
            Home
          </button>
          <button
            onClick={() => setActiveTab('explore')}
            className={`px-3.5 py-1.5 rounded-lg transition-colors ${
              activeTab === 'explore'
                ? 'bg-slate-800/80 text-white font-semibold shadow-inner'
                : 'hover:text-white hover:bg-slate-800/40'
            }`}
          >
            Explore Skills
          </button>
          <button
            onClick={() => setActiveTab('roadmap')}
            className={`px-3.5 py-1.5 rounded-lg transition-colors flex items-center gap-1.5 ${
              activeTab === 'roadmap'
                ? 'bg-purple-900/40 text-purple-300 font-semibold border border-purple-500/30'
                : 'hover:text-white hover:bg-slate-800/40'
            }`}
          >
            <span>Roadmaps</span>
            <span className="text-[11px] text-purple-300/80">({currentRoadmap.title.replace(' Roadmap', '')})</span>
          </button>
          <button
            onClick={() => setActiveTab('n8n-agent')}
            className={`px-3.5 py-1.5 rounded-lg transition-colors flex items-center gap-1.5 ${
              activeTab === 'n8n-agent'
                ? 'bg-cyan-950/60 text-cyan-300 font-semibold border border-cyan-500/40 shadow-sm'
                : 'hover:text-white hover:bg-slate-800/40'
            }`}
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span>n8n AI Agent</span>
          </button>
          <button
            onClick={() => setActiveTab('progress')}
            className={`px-3.5 py-1.5 rounded-lg transition-colors flex items-center gap-1.5 ${
              activeTab === 'progress'
                ? 'bg-slate-800/80 text-white font-semibold shadow-inner'
                : 'hover:text-white hover:bg-slate-800/40'
            }`}
          >
            <span>My Progress</span>
            <span className="flex items-center text-xs text-amber-400 font-mono">
              <Flame className="h-3.5 w-3.5 mr-0.5 fill-amber-400 text-amber-500" />
              {userProgress.streakDays}d
            </span>
          </button>
          <button
            onClick={() => setActiveTab('about')}
            className={`px-3.5 py-1.5 rounded-lg transition-colors ${
              activeTab === 'about'
                ? 'bg-slate-800/80 text-white font-semibold shadow-inner'
                : 'hover:text-white hover:bg-slate-800/40'
            }`}
          >
            About
          </button>
        </nav>

        {/* Zone 3: Primary Actions */}
        <div className="hidden sm:flex items-center gap-3">
          <button
            onClick={() => setCustomSkillModalOpen(true)}
            className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-300 bg-slate-800/80 hover:bg-slate-700/80 border border-slate-700/60 rounded-lg transition-colors"
          >
            <PlusCircle className="h-3.5 w-3.5 text-cyan-400" />
            <span>Custom Skill</span>
          </button>

          <button
            onClick={() => {
              setActiveTab('roadmap');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 rounded-lg shadow-lg shadow-purple-600/25 hover:shadow-purple-600/40 transition-all cursor-pointer"
          >
            <span>Start Learning</span>
            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-white/20 text-[10px] font-mono">
              {completedCount}
            </span>
          </button>
        </div>

        {/* Mobile Hamburger Toggle */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={() => setCustomSkillModalOpen(true)}
            className="p-1.5 text-slate-300 hover:text-white bg-slate-800/60 rounded-lg border border-slate-700/50"
            title="Create Custom Skill"
          >
            <PlusCircle className="h-4 w-4 text-cyan-400" />
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-slate-300 hover:text-white focus:outline-none"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-slate-800 bg-[#070B14]/95 px-4 pt-3 pb-5 space-y-2">
          <button
            onClick={() => {
              setActiveTab('home');
              setMobileMenuOpen(false);
            }}
            className={`w-full text-left px-3 py-2 rounded-lg text-sm font-medium ${
              activeTab === 'home' ? 'bg-purple-900/30 text-purple-300' : 'text-slate-300 hover:bg-slate-800/60'
            }`}
          >
            Home
          </button>
          <button
            onClick={() => {
              setActiveTab('explore');
              setMobileMenuOpen(false);
            }}
            className={`w-full text-left px-3 py-2 rounded-lg text-sm font-medium ${
              activeTab === 'explore' ? 'bg-purple-900/30 text-purple-300' : 'text-slate-300 hover:bg-slate-800/60'
            }`}
          >
            Explore Skills
          </button>
          <button
            onClick={() => {
              setActiveTab('roadmap');
              setMobileMenuOpen(false);
            }}
            className={`w-full text-left px-3 py-2 rounded-lg text-sm font-medium ${
              activeTab === 'roadmap' ? 'bg-purple-900/30 text-purple-300' : 'text-slate-300 hover:bg-slate-800/60'
            }`}
          >
            Current Roadmap ({currentRoadmap.title})
          </button>
          <button
            onClick={() => {
              setActiveTab('n8n-agent');
              setMobileMenuOpen(false);
            }}
            className={`w-full text-left px-3 py-2 rounded-lg text-sm font-medium flex items-center justify-between ${
              activeTab === 'n8n-agent' ? 'bg-cyan-950/60 text-cyan-300' : 'text-slate-300 hover:bg-slate-800/60'
            }`}
          >
            <span>n8n AI Agent Project</span>
            <span className="text-[10px] text-emerald-400 font-mono">LIVE</span>
          </button>
          <button
            onClick={() => {
              setActiveTab('progress');
              setMobileMenuOpen(false);
            }}
            className={`w-full text-left px-3 py-2 rounded-lg text-sm font-medium flex items-center justify-between ${
              activeTab === 'progress' ? 'bg-purple-900/30 text-purple-300' : 'text-slate-300 hover:bg-slate-800/60'
            }`}
          >
            <span>My Progress</span>
            <span className="text-xs text-amber-400 font-mono flex items-center">
              <Flame className="h-3 w-3 mr-0.5 fill-amber-400" />
              {userProgress.streakDays} Day Streak
            </span>
          </button>
          <button
            onClick={() => {
              setActiveTab('about');
              setMobileMenuOpen(false);
            }}
            className={`w-full text-left px-3 py-2 rounded-lg text-sm font-medium ${
              activeTab === 'about' ? 'bg-purple-900/30 text-purple-300' : 'text-slate-300 hover:bg-slate-800/60'
            }`}
          >
            About
          </button>

          <div className="pt-2 border-t border-slate-800/80 flex gap-2">
            <button
              onClick={() => {
                setCustomSkillModalOpen(true);
                setMobileMenuOpen(false);
              }}
              className="flex-1 py-2 text-xs font-semibold text-slate-200 bg-slate-800 rounded-lg text-center"
            >
              + Custom Skill
            </button>
            <button
              onClick={() => {
                setActiveTab('roadmap');
                setMobileMenuOpen(false);
              }}
              className="flex-1 py-2 text-xs font-semibold text-white bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg text-center"
            >
              Start Learning
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
