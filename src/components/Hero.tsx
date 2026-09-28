import React from 'react';
import { SearchBar } from './SearchBar';
import { Sparkles, Route, Code2, Trophy, ArrowRight, ShieldCheck, Zap } from 'lucide-react';
import { useRoadmap } from '../context/RoadmapContext';

export const Hero: React.FC = () => {
  const { loadRoadmapBySlug, setActiveTab } = useRoadmap();

  return (
    <section className="relative overflow-hidden pt-8 pb-16 md:pt-14 md:pb-24 border-b border-slate-800/80">
      {/* Ambient background glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-purple-600/15 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute top-1/3 left-1/4 w-[300px] h-[250px] bg-cyan-500/10 rounded-full blur-[100px] pointer-events-none -z-10" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        {/* Anti-slop top badge as clean unboxed text */}
        <div className="inline-flex items-center gap-2 text-xs font-semibold text-purple-300 tracking-wide uppercase mb-4">
          <Sparkles className="h-4 w-4 text-cyan-400" />
          <span>Interactive AI Roadmap Architect</span>
          <span aria-hidden="true" className="text-slate-600">·</span>
          <span>Zero to Job-Ready</span>
        </div>

        {/* Large Heading */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white max-w-4xl mx-auto leading-tight" style={{ textWrap: 'balance' }}>
          Master Any Skill.{' '}
          <span className="bg-gradient-to-r from-purple-400 via-indigo-300 to-cyan-300 bg-clip-text text-transparent">
            One Step at a Time.
          </span>
        </h1>

        {/* Subheading */}
        <p className="mt-4 sm:mt-5 text-base sm:text-lg lg:text-xl text-slate-300 max-w-2xl mx-auto font-normal leading-relaxed">
          Choose a skill and get a complete beginner-friendly roadmap from zero to confident. No confusing jargon, no dead ends.
        </p>

        {/* Search Bar */}
        <div className="mt-8 sm:mt-10">
          <SearchBar />
        </div>

        {/* Feature Highlights Grid */}
        <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 max-w-4xl mx-auto text-left">
          <div className="p-4 rounded-xl bg-[#0D1220]/80 border border-slate-800/80 backdrop-blur-sm">
            <div className="flex items-center gap-2 text-cyan-400 mb-1.5">
              <Route className="h-4 w-4" />
              <span className="text-xs font-semibold text-slate-200">Step-by-Step Path</span>
            </div>
            <p className="text-xs text-slate-400 leading-normal">
              Linear level-by-level progression from Level 0 to career mastery.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-[#0D1220]/80 border border-slate-800/80 backdrop-blur-sm">
            <div className="flex items-center gap-2 text-purple-400 mb-1.5">
              <Code2 className="h-4 w-4" />
              <span className="text-xs font-semibold text-slate-200">Beginner Friendly</span>
            </div>
            <p className="text-xs text-slate-400 leading-normal">
              Clear analogies, interactive code examples, and practice challenges.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-[#0D1220]/80 border border-slate-800/80 backdrop-blur-sm">
            <div className="flex items-center gap-2 text-emerald-400 mb-1.5">
              <Trophy className="h-4 w-4" />
              <span className="text-xs font-semibold text-slate-200">Real Projects</span>
            </div>
            <p className="text-xs text-slate-400 leading-normal">
              Build impressive portfolio projects designed for employers and clients.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-[#0D1220]/80 border border-slate-800/80 backdrop-blur-sm">
            <div className="flex items-center gap-2 text-amber-400 mb-1.5">
              <Zap className="h-4 w-4" />
              <span className="text-xs font-semibold text-slate-200">Custom For Any Skill</span>
            </div>
            <p className="text-xs text-slate-400 leading-normal">
              Generate structured roadmaps for coding, business, finance, or hobbies.
            </p>
          </div>
        </div>

        {/* Hero Interactive Showcase Banner */}
        <div className="mt-12 max-w-4xl mx-auto rounded-2xl bg-[#0D1220] border border-purple-500/30 overflow-hidden shadow-2xl shadow-purple-950/40 relative group">
          <div className="relative aspect-[21/9] sm:aspect-[16/7] w-full overflow-hidden bg-slate-900">
            <img
              src="/src/assets/images/hero_skillpath_journey_1790585871454.jpg"
              alt="SkillPath AI Interactive Learning Journey"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover object-center group-hover:scale-102 transition-transform duration-700"
              onError={(e) => {
                // Fallback container in case of any loading failure
                e.currentTarget.style.display = 'none';
              }}
            />
            {/* Scrim Overlay for contrast */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#070B14] via-[#070B14]/40 to-transparent" />

            {/* Floating Action Overlay */}
            <div className="absolute inset-0 flex flex-col justify-end p-6 sm:p-8 text-left">
              <div className="inline-flex items-center gap-2 text-xs font-semibold text-cyan-300 mb-2">
                <span className="h-2 w-2 rounded-full bg-cyan-400 animate-ping" />
                <span>Featured Learning Journey</span>
              </div>
              <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white">
                    Java Developer Roadmap
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 max-w-lg mt-1">
                    Level 0 Prerequisites → OOP Architecture → Spring Boot REST APIs → 8 Real-World Projects.
                  </p>
                </div>
                <button
                  onClick={() => loadRoadmapBySlug('java')}
                  className="shrink-0 flex items-center gap-2 px-5 py-2.5 rounded-xl bg-purple-600 hover:bg-purple-500 text-white text-xs sm:text-sm font-semibold shadow-lg shadow-purple-600/30 transition-all cursor-pointer w-fit"
                >
                  <span>Explore Java Roadmap</span>
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
