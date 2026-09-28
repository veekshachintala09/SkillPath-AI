import React, { useState } from 'react';
import { useRoadmap } from '../context/RoadmapContext';
import { PersonalizationConfig } from '../types/roadmap';
import { X, Sparkles, Check, SlidersHorizontal, ArrowRight } from 'lucide-react';

export const PersonalizationModal: React.FC = () => {
  const {
    personalizationModalOpen,
    setPersonalizationModalOpen,
    pendingSkillToPersonalize,
    applyPersonalization,
    isGenerating,
    generationStep,
  } = useRoadmap();

  const [level, setLevel] = useState<PersonalizationConfig['currentLevel']>('Complete Beginner');
  const [goal, setGoal] = useState<PersonalizationConfig['goal']>('Job');
  const [dailyTime, setDailyTime] = useState<PersonalizationConfig['dailyTime']>('1 hour/day');
  const [timeline, setTimeline] = useState<PersonalizationConfig['timeline']>('3 months');

  if (!personalizationModalOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    applyPersonalization({
      currentLevel: level,
      goal,
      dailyTime,
      timeline,
    });
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="relative w-full max-w-xl bg-[#0D1220] border border-purple-500/40 rounded-3xl p-6 sm:p-8 shadow-2xl overflow-hidden">
        {/* Header glow */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-purple-600/10 rounded-full blur-[80px] pointer-events-none" />

        {/* Close Button */}
        <button
          onClick={() => setPersonalizationModalOpen(false)}
          className="absolute top-5 right-5 p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors cursor-pointer"
        >
          <X className="h-5 w-5" />
        </button>

        {isGenerating ? (
          <div className="py-12 text-center space-y-5">
            <div className="relative mx-auto w-16 h-16 flex items-center justify-center">
              <div className="absolute inset-0 rounded-full border-4 border-purple-500/30 border-t-cyan-400 animate-spin" />
              <Sparkles className="h-7 w-7 text-yellow-300 animate-pulse" />
            </div>

            <div>
              <h3 className="text-xl font-bold text-white">
                Architecting Your Personalized Roadmap
              </h3>
              <p className="text-xs sm:text-sm text-cyan-300 font-mono mt-2 animate-pulse">
                {generationStep || 'Analyzing learning curve & milestones...'}
              </p>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-purple-400 mb-1">
                <SlidersHorizontal className="h-4 w-4 text-cyan-400" />
                <span>Personalized Setup</span>
              </div>
              <h2 className="text-2xl font-extrabold text-white">
                Personalize Your {pendingSkillToPersonalize || 'Learning'} Roadmap
              </h2>
              <p className="mt-1 text-xs sm:text-sm text-slate-300">
                Answer 4 quick questions so we can adjust the pace, prerequisites, and milestone depth.
              </p>
            </div>

            {/* 1. Current Level */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                1. What is your current level?
              </label>
              <div className="grid grid-cols-2 gap-2">
                {(['Complete Beginner', 'Beginner', 'Intermediate', 'Advanced'] as const).map((opt) => (
                  <button
                    key={opt}
                    type="button"
                    onClick={() => setLevel(opt)}
                    className={`p-3 rounded-xl text-xs font-semibold border text-left transition-all cursor-pointer ${
                      level === opt
                        ? 'bg-purple-950/60 border-purple-500 text-purple-200 shadow-md'
                        : 'bg-[#121A2B] border-slate-800 text-slate-300 hover:border-slate-700'
                    }`}
                  >
                    {opt}
                  </button>
                ))}
              </div>
            </div>

            {/* 2. Goal */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                2. What is your primary goal?
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {(
                  [
                    'Job',
                    'Internship',
                    'College/Exam',
                    'Freelancing',
                    'Build Projects',
                    'Personal Learning',
                  ] as const
                ).map((opt) => (
                  <button
                    key={opt}
                    type="button"
                    onClick={() => setGoal(opt)}
                    className={`p-2.5 rounded-xl text-xs font-semibold border text-center transition-all cursor-pointer ${
                      goal === opt
                        ? 'bg-cyan-950/60 border-cyan-500 text-cyan-200 shadow-md'
                        : 'bg-[#121A2B] border-slate-800 text-slate-300 hover:border-slate-700'
                    }`}
                  >
                    {opt}
                  </button>
                ))}
              </div>
            </div>

            {/* 3. Study Time */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                3. How much time can you study daily?
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {(['30 minutes/day', '1 hour/day', '2 hours/day', '3+ hours/day'] as const).map(
                  (opt) => (
                    <button
                      key={opt}
                      type="button"
                      onClick={() => setDailyTime(opt)}
                      className={`p-2.5 rounded-xl text-xs font-semibold border text-center transition-all cursor-pointer ${
                        dailyTime === opt
                          ? 'bg-purple-950/60 border-purple-500 text-purple-200 shadow-md'
                          : 'bg-[#121A2B] border-slate-800 text-slate-300 hover:border-slate-700'
                      }`}
                    >
                      {opt}
                    </button>
                  )
                )}
              </div>
            </div>

            {/* 4. Target Timeline */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                4. What is your target timeline?
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {(['1 month', '3 months', '6 months', '1 year'] as const).map((opt) => (
                  <button
                    key={opt}
                    type="button"
                    onClick={() => setTimeline(opt)}
                    className={`p-2.5 rounded-xl text-xs font-semibold border text-center transition-all cursor-pointer ${
                      timeline === opt
                        ? 'bg-cyan-950/60 border-cyan-500 text-cyan-200 shadow-md'
                        : 'bg-[#121A2B] border-slate-800 text-slate-300 hover:border-slate-700'
                    }`}
                  >
                    {opt}
                  </button>
                ))}
              </div>
            </div>

            {/* Submit Button */}
            <div className="pt-3">
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl bg-gradient-to-r from-purple-600 via-indigo-600 to-cyan-500 hover:from-purple-500 hover:to-cyan-400 text-white font-bold text-sm shadow-xl shadow-purple-600/30 transition-all cursor-pointer"
              >
                <span>Generate My Customized Roadmap</span>
                <Sparkles className="h-4 w-4 text-yellow-300" />
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
