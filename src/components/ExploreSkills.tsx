import React, { useState } from 'react';
import { skillCategories, SkillCategoryCard } from '../data/roadmaps';
import { SkillCard } from './SkillCard';
import { SkillCategory } from '../types/roadmap';
import { PlusCircle, Sparkles, Filter, Bot, ArrowRight } from 'lucide-react';
import { useRoadmap } from '../context/RoadmapContext';

export const ExploreSkills: React.FC = () => {
  const { setCustomSkillModalOpen, setN8nWidgetOpen } = useRoadmap();
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [difficultyFilter, setDifficultyFilter] = useState<string>('all');

  // Collect all skills
  const allSkills: SkillCategoryCard[] = skillCategories.flatMap((cat) => cat.skills);

  // Filter skills
  const filteredSkills = allSkills.filter((s) => {
    const matchesCategory = selectedCategory === 'all' || s.category === selectedCategory;
    const matchesDiff =
      difficultyFilter === 'all' ||
      (difficultyFilter === 'beginner' && (s.difficulty.includes('Beginner') || s.difficulty.includes('Friendly'))) ||
      (difficultyFilter === 'intermediate' && s.difficulty.includes('Intermediate')) ||
      (difficultyFilter === 'advanced' && s.difficulty.includes('Advanced'));

    return matchesCategory && matchesDiff;
  });

  return (
    <section className="py-12 sm:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
        <div>
          <div className="text-xs font-semibold uppercase tracking-wider text-purple-400 mb-1">
            Curated Learning Paths
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
            Explore Skills
          </h2>
          <p className="mt-1 text-sm text-slate-400 max-w-xl">
            Choose a verified path or architect a personalized roadmap tailored to your exact goal.
          </p>
        </div>

        {/* Filter buttons */}
        <div className="flex flex-wrap items-center gap-1.5 p-1 bg-[#0D1220] rounded-xl border border-slate-800">
          {[
            { id: 'all', label: 'All Skills' },
            { id: 'programming', label: 'Programming' },
            { id: 'web-dev', label: 'Web Dev' },
            { id: 'ai-data', label: 'AI & Data' },
            { id: 'cybersecurity', label: 'Cybersecurity' },
            { id: 'career-pro', label: 'Career' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setSelectedCategory(tab.id)}
              className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap cursor-pointer ${
                selectedCategory === tab.id
                  ? 'bg-purple-600 text-white shadow-sm'
                  : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Grid of Skill Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {/* Create Your Own Custom Roadmap Card */}
        <div
          onClick={() => setCustomSkillModalOpen(true)}
          className="group relative flex flex-col justify-between rounded-2xl bg-gradient-to-b from-[#121A2B] to-[#0D1220] border-2 border-dashed border-purple-500/40 hover:border-cyan-400 p-6 shadow-xl hover:shadow-cyan-950/30 transition-all cursor-pointer"
        >
          <div>
            <div className="flex items-center justify-between mb-4">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-purple-900/40 border border-purple-500/40 text-cyan-300 group-hover:scale-110 transition-transform">
                <PlusCircle className="h-6 w-6 text-cyan-400" />
              </div>
              <span className="text-[11px] font-semibold text-cyan-400 bg-cyan-950/60 border border-cyan-500/30 px-2.5 py-1 rounded-md">
                AI Powered
              </span>
            </div>

            <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors flex items-center gap-2">
              <span>+ Create Custom Roadmap</span>
            </h3>

            <p className="mt-2 text-xs sm:text-sm text-slate-300 leading-relaxed">
              Don’t see what you want? Type any skill (e.g. <span className="text-purple-300">Forex Trading</span>, <span className="text-cyan-300">Photography</span>, <span className="text-emerald-300">Public Speaking</span>, or <span className="text-pink-300">DevOps</span>) and AI will build a personalized step-by-step roadmap.
            </p>
          </div>

          <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between">
            <span className="text-xs text-slate-400">Zero limits · Any discipline</span>
            <div className="flex items-center gap-1.5 text-xs font-semibold text-cyan-400 group-hover:underline">
              <span>Start Generator</span>
              <Sparkles className="h-3.5 w-3.5 text-yellow-300" />
            </div>
          </div>
        </div>

        {/* Ask n8n AI Agent Card */}
        <div
          onClick={() => setN8nWidgetOpen(true)}
          className="group relative flex flex-col justify-between rounded-2xl bg-gradient-to-b from-[#121A2B] to-[#0D1220] border-2 border-cyan-500/40 hover:border-cyan-300 p-6 shadow-xl hover:shadow-cyan-950/40 transition-all cursor-pointer"
        >
          <div>
            <div className="flex items-center justify-between mb-4">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-cyan-950/80 border border-cyan-500/50 text-cyan-300 group-hover:scale-110 transition-transform shadow-sm">
                <Bot className="h-6 w-6 text-cyan-400" />
              </div>
              <span className="text-[11px] font-semibold text-emerald-400 bg-emerald-950/60 border border-emerald-500/40 px-2.5 py-1 rounded-md flex items-center gap-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-ping" />
                Live Agent
              </span>
            </div>

            <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors flex items-center gap-2">
              <span>Ask n8n AI Agent</span>
            </h3>

            <p className="mt-2 text-xs sm:text-sm text-slate-300 leading-relaxed">
              Unsure which technology aligns with your career goals? Talk directly with our live n8n workflow agent for personalized curriculum guidance, tech stack comparisons, and project advice.
            </p>
          </div>

          <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between">
            <span className="text-xs text-slate-400 font-mono">veeksha09.app.n8n.cloud</span>
            <div className="flex items-center gap-1.5 text-xs font-semibold text-cyan-400 group-hover:underline">
              <span>Chat with Agent</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </div>
          </div>
        </div>

        {/* Render Filtered Skills */}
        {filteredSkills.map((skill) => (
          <SkillCard key={skill.id} skill={skill} />
        ))}
      </div>
    </section>
  );
};
