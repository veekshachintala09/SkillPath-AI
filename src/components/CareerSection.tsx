import React from 'react';
import { useRoadmap } from '../context/RoadmapContext';
import { Briefcase, ArrowRight, CheckCircle, Award, Sparkles, Building2, Target } from 'lucide-react';

export const CareerSection: React.FC = () => {
  const { currentRoadmap, setActiveTab } = useRoadmap();

  return (
    <section className="mt-12 rounded-3xl bg-gradient-to-b from-[#0D1220] to-[#121A2B] border border-cyan-500/30 p-6 sm:p-10 shadow-2xl relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-cyan-500/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-purple-600/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative z-10">
        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-cyan-400 mb-2">
          <Briefcase className="h-4 w-4" />
          <span>Career Transformation</span>
        </div>

        <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
          Where Can This Skill Take You?
        </h2>

        <p className="mt-2 text-sm text-slate-300 max-w-2xl leading-relaxed">
          Consistent daily practice transforms beginner curiosity into high-paying, high-impact career opportunities in top tech and enterprise organizations.
        </p>

        {/* Target Job Titles */}
        <div className="mt-6 flex flex-wrap items-center gap-2">
          <span className="text-xs font-semibold text-slate-400 mr-2">Target Roles:</span>
          {currentRoadmap.careerPaths.map((role, idx) => (
            <div
              key={idx}
              className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-[#070B14] border border-purple-500/30 text-purple-200 text-xs font-medium shadow-sm"
            >
              <Building2 className="h-3 w-3 text-cyan-400" />
              <span>{role}</span>
            </div>
          ))}
        </div>

        {/* Visual Career Path Flow */}
        <div className="mt-10">
          <div className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-4 flex items-center gap-2">
            <Target className="h-4 w-4 text-purple-400" />
            <span>The 8-Stage Career Pipeline</span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-2.5">
            {currentRoadmap.careerStages.map((stage, idx) => (
              <div
                key={idx}
                className="group relative flex flex-col justify-between p-3.5 rounded-xl bg-[#070B14]/80 border border-slate-800 hover:border-cyan-400/60 transition-all text-center"
              >
                <div>
                  <div className="h-6 w-6 rounded-full bg-purple-900/60 border border-purple-500/40 text-cyan-300 text-[11px] font-mono font-bold flex items-center justify-center mx-auto mb-2 group-hover:scale-110 transition-transform">
                    {idx + 1}
                  </div>
                  <div className="text-xs font-bold text-white group-hover:text-cyan-300 transition-colors">
                    {stage.title}
                  </div>
                  <div className="mt-1 text-[11px] text-slate-400 line-clamp-2 leading-tight">
                    {stage.desc}
                  </div>
                </div>

                {idx < currentRoadmap.careerStages.length - 1 && (
                  <div className="hidden lg:block absolute -right-2 top-1/2 -translate-y-1/2 z-20 text-slate-600">
                    <ArrowRight className="h-3.5 w-3.5" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Career Advice Callout */}
        <div className="mt-8 p-5 rounded-2xl bg-[#070B14]/90 border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-xl bg-emerald-950/60 border border-emerald-500/40 flex items-center justify-center text-emerald-400 shrink-0">
              <Award className="h-5 w-5" />
            </div>
            <div>
              <div className="text-sm font-bold text-white">
                Proof of Work Beats Credentials
              </div>
              <div className="text-xs text-slate-300">
                Complete the 8 roadmap projects, push clean code to GitHub, and write detailed READMEs. Hiring managers hire builders.
              </div>
            </div>
          </div>

          <button
            onClick={() => {
              window.scrollTo({ top: 300, behavior: 'smooth' });
            }}
            className="shrink-0 px-4 py-2 rounded-xl bg-gradient-to-r from-purple-600 to-cyan-500 hover:from-purple-500 hover:to-cyan-400 text-white text-xs font-bold shadow-lg shadow-purple-600/25 transition-all cursor-pointer whitespace-nowrap"
          >
            Start Level 0 Now
          </button>
        </div>
      </div>
    </section>
  );
};
