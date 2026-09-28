import React from 'react';
import { useRoadmap } from '../context/RoadmapContext';
import {
  Coffee,
  Terminal,
  Cpu,
  Code,
  Globe,
  Layout,
  Component,
  Server,
  Layers,
  Smartphone,
  Sparkles,
  Bot,
  BarChart3,
  LineChart,
  Shield,
  Lock,
  Search,
  Network,
  Mic,
  MessageSquare,
  FileSpreadsheet,
  PieChart,
  Rocket,
  Binary,
  ArrowRight,
  Clock,
} from 'lucide-react';
import { SkillCategoryCard } from '../data/roadmaps';

interface SkillCardProps {
  skill: SkillCategoryCard;
}

const iconMap: Record<string, React.ElementType> = {
  Coffee,
  Terminal,
  Cpu,
  Code,
  Globe,
  Layout,
  Component,
  Server,
  Layers,
  Smartphone,
  Sparkles,
  Bot,
  BarChart3,
  LineChart,
  Shield,
  Lock,
  Search,
  Network,
  Mic,
  MessageSquare,
  FileSpreadsheet,
  PieChart,
  Rocket,
  Binary,
};

export const SkillCard: React.FC<SkillCardProps> = ({ skill }) => {
  const { loadRoadmapBySlug } = useRoadmap();
  const IconComponent = iconMap[skill.iconName] || Sparkles;

  // Determine difficulty indicator color
  let diffBadge = { text: '🟢 Beginner', color: 'text-emerald-400 bg-emerald-950/40 border-emerald-500/30' };
  if (skill.difficulty.includes('Intermediate') && !skill.difficulty.includes('Beginner')) {
    diffBadge = { text: '🟡 Intermediate', color: 'text-yellow-400 bg-yellow-950/40 border-yellow-500/30' };
  } else if (skill.difficulty.includes('Advanced') && !skill.difficulty.includes('Beginner')) {
    diffBadge = { text: '🔴 Advanced', color: 'text-rose-400 bg-rose-950/40 border-rose-500/30' };
  } else if (skill.difficulty.includes('Beginner → Advanced')) {
    diffBadge = { text: '🟢 Beginner → 🔴 Advanced', color: 'text-cyan-400 bg-cyan-950/40 border-cyan-500/30' };
  }

  return (
    <div className="group relative flex flex-col justify-between rounded-2xl bg-[#0D1220] border border-slate-800/80 p-5 hover:border-purple-500/50 hover:shadow-xl hover:shadow-purple-950/30 transition-all duration-300">
      <div>
        <div className="flex items-start justify-between gap-3 mb-4">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#121A2B] border border-slate-700/60 text-purple-400 group-hover:text-cyan-300 group-hover:scale-105 transition-all shadow-inner">
            <IconComponent className="h-5 w-5" />
          </div>
          <span className={`text-[11px] font-medium px-2.5 py-1 rounded-md border ${diffBadge.color}`}>
            {diffBadge.text}
          </span>
        </div>

        <h3 className="text-lg font-bold text-white group-hover:text-purple-300 transition-colors">
          {skill.name}
        </h3>

        <p className="mt-2 text-xs sm:text-sm text-slate-400 line-clamp-2 leading-relaxed">
          {skill.description}
        </p>
      </div>

      <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between">
        <div className="flex items-center gap-1.5 text-xs text-slate-400 font-mono">
          <Clock className="h-3.5 w-3.5 text-slate-500" />
          <span>{skill.estimatedTime}</span>
        </div>

        <button
          onClick={() => loadRoadmapBySlug(skill.targetSlug)}
          className="flex items-center gap-1.5 text-xs font-semibold text-purple-400 group-hover:text-cyan-300 transition-colors cursor-pointer"
        >
          <span>View Roadmap</span>
          <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </div>
  );
};
