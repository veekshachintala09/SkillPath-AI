import React from 'react';
import { Compass, Sparkles, CheckCircle2, ShieldCheck, Heart, Terminal, Users, Layers } from 'lucide-react';
import { useRoadmap } from '../context/RoadmapContext';

export const AboutSection: React.FC = () => {
  const { setActiveTab } = useRoadmap();

  return (
    <div className="py-12 sm:py-16 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-14">
        <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-cyan-400 mb-2">
          <Compass className="h-4 w-4" />
          <span>Our Mission</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-white">
          Why We Built SkillPath AI
        </h1>
        <p className="mt-3 text-base text-slate-300 leading-relaxed">
          The biggest obstacle for complete beginners isn’t lack of intelligence — it’s overwhelming choice and confusing jargon.
        </p>
      </div>

      {/* The Core Question Card */}
      <div className="rounded-3xl bg-[#0D1220] border border-purple-500/30 p-8 sm:p-10 shadow-2xl mb-12 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 bg-purple-600/10 rounded-full blur-[100px] pointer-events-none" />

        <div className="relative z-10">
          <blockquote className="text-xl sm:text-2xl font-semibold text-purple-200 italic border-l-4 border-cyan-400 pl-4 sm:pl-6 my-2">
            “I want to learn a skill, but I don't know where to start, what to learn first, or what to do after that.”
          </blockquote>
          <p className="mt-4 text-sm text-slate-300 leading-relaxed">
            SkillPath AI was designed to eliminate that friction completely. Every skill is decomposed into a structured, step-by-step path starting from Level 0 foundations, continuing through core syntax, intermediate architecture, real portfolio projects, and career readiness.
          </p>
        </div>
      </div>

      {/* 3 Core Pillars */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        <div className="p-6 rounded-2xl bg-[#0D1220] border border-slate-800">
          <div className="h-10 w-10 rounded-xl bg-purple-900/50 border border-purple-500/40 flex items-center justify-center text-purple-300 mb-4">
            <Sparkles className="h-5 w-5" />
          </div>
          <h3 className="text-lg font-bold text-white mb-2">Zero Unexplained Jargon</h3>
          <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
            We ban cryptic acronyms without explanations. Every concept has a beginner-friendly analogy before diving into code.
          </p>
        </div>

        <div className="p-6 rounded-2xl bg-[#0D1220] border border-slate-800">
          <div className="h-10 w-10 rounded-xl bg-cyan-950/60 border border-cyan-500/40 flex items-center justify-center text-cyan-300 mb-4">
            <Layers className="h-5 w-5" />
          </div>
          <h3 className="text-lg font-bold text-white mb-2">Project-Centric Learning</h3>
          <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
            Reading tutorials creates an illusion of competence. Building tangible, portfolio-ready projects builds genuine problem-solving ability.
          </p>
        </div>

        <div className="p-6 rounded-2xl bg-[#0D1220] border border-slate-800">
          <div className="h-10 w-10 rounded-xl bg-emerald-950/60 border border-emerald-500/40 flex items-center justify-center text-emerald-400 mb-4">
            <CheckCircle2 className="h-5 w-5" />
          </div>
          <h3 className="text-lg font-bold text-white mb-2">Adaptive & Personalized</h3>
          <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
            Whether you have 30 minutes a day for college exams or 3 hours a day for a career transition, your roadmap adapts to your constraints.
          </p>
        </div>
      </div>

      {/* CTA Box */}
      <div className="text-center p-8 rounded-3xl bg-gradient-to-r from-purple-950/50 to-indigo-950/50 border border-purple-500/40">
        <h3 className="text-2xl font-bold text-white mb-2">Ready to start your journey?</h3>
        <p className="text-sm text-slate-300 max-w-md mx-auto mb-6">
          Choose Java, Python, Web Dev, or create your own custom roadmap in seconds.
        </p>
        <button
          onClick={() => {
            setActiveTab('explore');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="px-6 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-cyan-500 hover:from-purple-500 hover:to-cyan-400 text-white font-bold text-sm shadow-xl shadow-purple-600/30 transition-all cursor-pointer"
        >
          Explore All Roadmaps
        </button>
      </div>
    </div>
  );
};
