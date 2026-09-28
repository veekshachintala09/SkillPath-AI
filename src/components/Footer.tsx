import React from 'react';
import { Compass, Sparkles, Heart } from 'lucide-react';
import { useRoadmap } from '../context/RoadmapContext';

export const Footer: React.FC = () => {
  const { setActiveTab, loadRoadmapBySlug } = useRoadmap();

  return (
    <footer className="w-full border-t border-slate-800/80 bg-[#070B14] py-12 text-slate-400 text-xs">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-10 border-b border-slate-800/80">
          {/* Brand info */}
          <div className="space-y-3 md:col-span-1">
            <div className="flex items-center gap-2">
              <div className="h-7 w-7 rounded-lg bg-gradient-to-tr from-purple-600 to-cyan-400 p-0.5">
                <div className="h-full w-full bg-[#070B14] rounded-[6px] flex items-center justify-center">
                  <Compass className="h-4 w-4 text-cyan-400" />
                </div>
              </div>
              <span className="text-base font-bold text-white tracking-tight">
                SkillPath <span className="text-cyan-400">AI</span>
              </span>
            </div>
            <p className="text-slate-400 leading-relaxed">
              Empowering beginners to conquer any skill with structured step-by-step roadmaps, interactive practice drills, and portfolio projects.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <div className="font-semibold text-white uppercase tracking-wider mb-3">
              Navigation
            </div>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => {
                    setActiveTab('home');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="hover:text-cyan-300 transition-colors"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    setActiveTab('explore');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="hover:text-cyan-300 transition-colors"
                >
                  Explore All Skills
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    setActiveTab('progress');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="hover:text-cyan-300 transition-colors"
                >
                  My Progress Tracker
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    setActiveTab('about');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="hover:text-cyan-300 transition-colors"
                >
                  About Our Mission
                </button>
              </li>
            </ul>
          </div>

          {/* Popular Roadmaps */}
          <div>
            <div className="font-semibold text-white uppercase tracking-wider mb-3">
              Featured Roadmaps
            </div>
            <ul className="space-y-2">
              <li>
                <button onClick={() => loadRoadmapBySlug('java')} className="hover:text-purple-300 transition-colors">
                  Java Developer Roadmap
                </button>
              </li>
              <li>
                <button onClick={() => loadRoadmapBySlug('python')} className="hover:text-purple-300 transition-colors">
                  Python & Automation
                </button>
              </li>
              <li>
                <button onClick={() => loadRoadmapBySlug('web-development')} className="hover:text-purple-300 transition-colors">
                  Full Stack Web Development
                </button>
              </li>
              <li>
                <button onClick={() => loadRoadmapBySlug('cybersecurity')} className="hover:text-purple-300 transition-colors">
                  Cybersecurity & SOC Analysis
                </button>
              </li>
              <li>
                <button onClick={() => loadRoadmapBySlug('ai-ml')} className="hover:text-purple-300 transition-colors">
                  AI & Machine Learning
                </button>
              </li>
            </ul>
          </div>

          {/* Philosophy */}
          <div>
            <div className="font-semibold text-white uppercase tracking-wider mb-3">
              Learning Philosophy
            </div>
            <p className="leading-relaxed text-slate-400">
              Zero jargon unexplained. 100% interactive. Practice before perfection. From complete beginner to industry ready.
            </p>
          </div>
        </div>

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-500">
          <div>
            © {new Date().getFullYear()} SkillPath AI. Built for learners worldwide.
          </div>
          <div className="flex items-center gap-4">
            <span>Learn</span>
            <span>·</span>
            <span>Practice</span>
            <span>·</span>
            <span>Build</span>
            <span>·</span>
            <span>Succeed</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
