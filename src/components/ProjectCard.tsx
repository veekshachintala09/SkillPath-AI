import React, { useState } from 'react';
import { Project } from '../types/roadmap';
import { useRoadmap } from '../context/RoadmapContext';
import { FolderGit2, CheckCircle2, Clock, PlayCircle, ChevronDown, ChevronUp, Layers, Check } from 'lucide-react';

interface ProjectCardProps {
  project: Project;
  badgeText?: string;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, badgeText }) => {
  const { toggleProjectCompletion, isProjectCompleted } = useRoadmap();
  const [expanded, setExpanded] = useState(false);
  const completed = isProjectCompleted(project.id);

  const diffColors = {
    beginner: 'text-emerald-400 bg-emerald-950/40 border-emerald-500/30',
    intermediate: 'text-yellow-400 bg-yellow-950/40 border-yellow-500/30',
    advanced: 'text-rose-400 bg-rose-950/40 border-rose-500/30',
  };

  return (
    <div
      className={`rounded-2xl border transition-all duration-300 p-5 sm:p-6 ${
        completed
          ? 'bg-[#0a0f1d] border-emerald-500/40'
          : 'bg-[#121A2B] border-purple-500/30 hover:border-purple-500/60 shadow-xl shadow-purple-950/20'
      }`}
    >
      <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 mb-3">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-xl bg-purple-900/50 border border-purple-500/40 flex items-center justify-center text-cyan-300 shrink-0">
            <FolderGit2 className="h-5 w-5" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className={`text-[10px] font-semibold uppercase px-2 py-0.5 rounded border ${diffColors[project.difficulty]}`}>
                {project.difficulty}
              </span>
              {badgeText && (
                <span className="text-[10px] font-semibold text-cyan-400 bg-cyan-950/50 px-2 py-0.5 rounded border border-cyan-500/30">
                  {badgeText}
                </span>
              )}
            </div>
            <h4 className="text-base sm:text-lg font-bold text-white mt-1">
              {project.title}
            </h4>
          </div>
        </div>

        <div className="flex items-center gap-2 self-end sm:self-auto">
          <span className="flex items-center gap-1 text-xs text-slate-400 font-mono">
            <Clock className="h-3.5 w-3.5 text-slate-500" />
            <span>{project.estimatedHours}</span>
          </span>

          <button
            onClick={() => toggleProjectCompletion(project.id)}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer ${
              completed
                ? 'bg-emerald-900/60 text-emerald-300 border border-emerald-500/40'
                : 'bg-slate-800 hover:bg-slate-700 text-slate-300 border border-slate-700'
            }`}
          >
            {completed ? (
              <>
                <Check className="h-3.5 w-3.5" />
                <span>Completed</span>
              </>
            ) : (
              <span>Mark Done</span>
            )}
          </button>
        </div>
      </div>

      <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-3">
        {project.description}
      </p>

      {/* What you will build callout */}
      <div className="rounded-xl bg-[#0D1220] border border-slate-800/80 p-3 mb-4 text-xs">
        <span className="font-semibold text-cyan-300 mr-1.5">What you will build:</span>
        <span className="text-slate-300">{project.whatYouWillBuild}</span>
      </div>

      {/* Skills Required */}
      <div className="flex flex-wrap items-center gap-1.5 mb-4">
        <span className="text-xs text-slate-400 font-medium mr-1 flex items-center gap-1">
          <Layers className="h-3 w-3" />
          <span>Skills:</span>
        </span>
        {project.skillsRequired.map((skill, idx) => (
          <span
            key={idx}
            className="text-[11px] font-mono text-purple-300 bg-purple-950/40 border border-purple-500/30 px-2 py-0.5 rounded-md"
          >
            {skill}
          </span>
        ))}
      </div>

      {/* Step by step expander */}
      {project.starterSteps && project.starterSteps.length > 0 && (
        <div>
          <button
            onClick={() => setExpanded(!expanded)}
            className="flex items-center gap-1.5 text-xs font-semibold text-purple-400 hover:text-cyan-300 transition-colors cursor-pointer"
          >
            <span>{expanded ? 'Hide Blueprint Steps' : 'View Blueprint Steps'}</span>
            {expanded ? <ChevronUp className="h-3.5 w-3.5" /> : <ChevronDown className="h-3.5 w-3.5" />}
          </button>

          {expanded && (
            <div className="mt-3 pt-3 border-t border-slate-800/80 space-y-2">
              <div className="text-xs font-semibold text-slate-300">Starter Milestones:</div>
              <ol className="space-y-1.5 text-xs text-slate-400 list-decimal list-inside">
                {project.starterSteps.map((step, idx) => (
                  <li key={idx} className="leading-relaxed">
                    <span className="text-slate-300">{step}</span>
                  </li>
                ))}
              </ol>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
