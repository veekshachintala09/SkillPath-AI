import React, { useState } from 'react';
import { useRoadmap } from '../context/RoadmapContext';
import { X, Sparkles, PlusCircle, ArrowRight, Wand2 } from 'lucide-react';

export const CustomSkillModal: React.FC = () => {
  const {
    customSkillModalOpen,
    setCustomSkillModalOpen,
    generateCustomSkillRoadmap,
    isGenerating,
    generationStep,
  } = useRoadmap();

  const [customInput, setCustomInput] = useState('');

  if (!customSkillModalOpen) return null;

  const quickIdeas = [
    'Forex Trading',
    'Photography',
    'Graphic Design',
    'Public Speaking',
    'Rust Programming',
    'Cloud Architecture',
    'Quantum Computing',
    'Prompt Engineering',
  ];

  const handleGenerate = (skill: string) => {
    if (!skill.trim()) return;
    generateCustomSkillRoadmap(skill.trim());
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleGenerate(customInput);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="relative w-full max-w-xl bg-[#0D1220] border border-cyan-500/40 rounded-3xl p-6 sm:p-8 shadow-2xl overflow-hidden">
        {/* Glow */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-600/10 rounded-full blur-[80px] pointer-events-none" />

        {/* Close Button */}
        <button
          onClick={() => setCustomSkillModalOpen(false)}
          className="absolute top-5 right-5 p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors cursor-pointer"
        >
          <X className="h-5 w-5" />
        </button>

        {isGenerating ? (
          <div className="py-12 text-center space-y-5">
            <div className="relative mx-auto w-16 h-16 flex items-center justify-center">
              <div className="absolute inset-0 rounded-full border-4 border-cyan-500/30 border-t-purple-400 animate-spin" />
              <Wand2 className="h-7 w-7 text-cyan-300 animate-pulse" />
            </div>

            <div>
              <h3 className="text-xl font-bold text-white">
                Generating Custom Roadmap for "{customInput}"
              </h3>
              <p className="text-xs sm:text-sm text-cyan-300 font-mono mt-2 animate-pulse">
                {generationStep || 'Structuring prerequisites, topics & projects...'}
              </p>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-cyan-400 mb-1">
                <Sparkles className="h-4 w-4 text-yellow-300" />
                <span>AI Roadmap Generator</span>
              </div>
              <h2 className="text-2xl font-extrabold text-white">
                Create Your Own Roadmap
              </h2>
              <p className="mt-1 text-xs sm:text-sm text-slate-300">
                You are not limited to predefined paths. Type any skill, craft, or discipline and we will architect a zero-to-confident curriculum.
              </p>
            </div>

            {/* Input */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                What skill do you want to learn?
              </label>
              <div className="relative">
                <input
                  type="text"
                  value={customInput}
                  onChange={(e) => setCustomInput(e.target.value)}
                  placeholder="e.g. Forex Trading, Photography, Rust, Video Editing..."
                  autoFocus
                  className="w-full px-4 py-3.5 bg-[#121A2B] border border-slate-700 rounded-xl text-sm sm:text-base text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 shadow-inner"
                />
              </div>
            </div>

            {/* Quick Inspiration Chips */}
            <div>
              <div className="text-xs text-slate-400 font-medium mb-2">
                Or try one of these popular ideas:
              </div>
              <div className="flex flex-wrap gap-2">
                {quickIdeas.map((idea) => (
                  <button
                    key={idea}
                    type="button"
                    onClick={() => {
                      setCustomInput(idea);
                      handleGenerate(idea);
                    }}
                    className="px-3 py-1.5 rounded-lg bg-[#121A2B] hover:bg-slate-800 border border-slate-700/80 text-xs text-slate-300 hover:text-cyan-300 transition-colors cursor-pointer"
                  >
                    {idea}
                  </button>
                ))}
              </div>
            </div>

            {/* Submit */}
            <div className="pt-2">
              <button
                type="submit"
                disabled={!customInput.trim()}
                className="w-full flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl bg-gradient-to-r from-cyan-500 via-indigo-600 to-purple-600 hover:from-cyan-400 hover:to-purple-500 text-white font-bold text-sm shadow-xl shadow-cyan-600/25 transition-all disabled:opacity-40 cursor-pointer"
              >
                <span>Generate Step-by-Step Roadmap</span>
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
