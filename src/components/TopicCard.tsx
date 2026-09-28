import React from 'react';
import { Topic } from '../types/roadmap';
import { useRoadmap } from '../context/RoadmapContext';
import { CheckCircle2, Circle, Clock, ChevronRight, Code2, AlertCircle } from 'lucide-react';

interface TopicCardProps {
  topic: Topic;
  index: number;
}

export const TopicCard: React.FC<TopicCardProps> = ({ topic, index }) => {
  const { setActiveTopic, toggleTopicCompletion, isTopicCompleted } = useRoadmap();
  const completed = isTopicCompleted(topic.id);

  const diffColors = {
    easy: 'text-emerald-400 bg-emerald-950/40 border-emerald-500/30',
    medium: 'text-amber-400 bg-amber-950/40 border-amber-500/30',
    advanced: 'text-rose-400 bg-rose-950/40 border-rose-500/30',
  };

  const diffLabels = {
    easy: '🟢 Easy',
    medium: '🟡 Medium',
    advanced: '🔴 Advanced',
  };

  return (
    <div
      onClick={() => setActiveTopic(topic)}
      className={`group relative flex items-start justify-between gap-3 p-3.5 sm:p-4 rounded-xl border transition-all cursor-pointer ${
        completed
          ? 'bg-[#0b101c]/90 border-emerald-500/40 text-slate-300 shadow-sm'
          : 'bg-[#121A2B]/80 hover:bg-[#162035] border-slate-800 hover:border-purple-500/50 hover:shadow-lg hover:shadow-purple-950/20'
      }`}
    >
      <div className="flex items-start gap-3 flex-1 min-w-0">
        {/* Completion Checkbox toggle */}
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            toggleTopicCompletion(topic.id);
          }}
          className="mt-0.5 shrink-0 text-slate-500 hover:text-emerald-400 transition-colors focus:outline-none cursor-pointer"
          title={completed ? 'Mark incomplete' : 'Mark complete'}
        >
          {completed ? (
            <CheckCircle2 className="h-5 w-5 text-emerald-400 fill-emerald-950" />
          ) : (
            <Circle className="h-5 w-5 text-slate-600 hover:text-slate-400" />
          )}
        </button>

        <div className="flex-1 min-w-0">
          <div className="flex flex-wrap items-center gap-2 mb-1">
            <span className="text-xs font-mono text-slate-500">
              {String(index + 1).padStart(2, '0')}.
            </span>
            <h4
              className={`text-sm sm:text-base font-semibold leading-tight ${
                completed ? 'line-through text-slate-400' : 'text-white group-hover:text-cyan-300'
              } transition-colors`}
            >
              {topic.title}
            </h4>
          </div>

          {topic.subtitle && (
            <p className="text-xs text-slate-400 truncate max-w-md">
              {topic.subtitle}
            </p>
          )}

          <div className="mt-2.5 flex flex-wrap items-center gap-2 text-xs">
            <span className={`px-2 py-0.5 rounded text-[11px] font-medium border ${diffColors[topic.difficulty]}`}>
              {diffLabels[topic.difficulty]}
            </span>

            <span className="flex items-center gap-1 text-slate-400 font-mono text-[11px]">
              <Clock className="h-3 w-3 text-slate-500" />
              <span>{topic.estimatedHours}</span>
            </span>

            {topic.codeExample && (
              <span className="flex items-center gap-1 text-purple-400 font-mono text-[11px] bg-purple-950/40 px-1.5 py-0.5 rounded border border-purple-500/20">
                <Code2 className="h-3 w-3" />
                <span>Code Sample</span>
              </span>
            )}

            {topic.practiceExercises?.length > 0 && (
              <span className="text-[11px] text-slate-500">
                {topic.practiceExercises.length} practice drills
              </span>
            )}
          </div>
        </div>
      </div>

      <div className="shrink-0 flex items-center gap-1 text-xs text-slate-500 group-hover:text-cyan-400 pt-1 transition-colors">
        <span className="hidden sm:inline font-medium">Learn</span>
        <ChevronRight className="h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
      </div>
    </div>
  );
};
