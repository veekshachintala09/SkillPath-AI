import React, { useState, useRef, useEffect } from 'react';
import { useRoadmap } from '../context/RoadmapContext';
import { Search, Sparkles, ArrowRight, BookOpen, PlusCircle } from 'lucide-react';
import { popularSkillChips, preloadedRoadmaps, skillCategories } from '../data/roadmaps';

export const SearchBar: React.FC = () => {
  const { loadRoadmapBySlug, generateCustomSkillRoadmap, setPendingSkillToPersonalize, setPersonalizationModalOpen } = useRoadmap();
  const [query, setQuery] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Close dropdown on click outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Filter matched skills
  const cleanQuery = query.trim().toLowerCase();

  const matchedPreloaded = Object.values(preloadedRoadmaps).filter((r) =>
    r.title.toLowerCase().includes(cleanQuery) || r.slug.toLowerCase().includes(cleanQuery)
  );

  // Also search within categories
  const matchedCategories = skillCategories.flatMap((cat) =>
    cat.skills.filter((s) => s.name.toLowerCase().includes(cleanQuery))
  );

  // Deduplicate by slug
  const seenSlugs = new Set<string>();
  const combinedSuggestions: { name: string; slug: string; subtitle?: string }[] = [];

  for (const r of matchedPreloaded) {
    if (!seenSlugs.has(r.slug)) {
      seenSlugs.add(r.slug);
      combinedSuggestions.push({ name: r.title, slug: r.slug, subtitle: r.subtitle });
    }
  }

  for (const s of matchedCategories) {
    if (!seenSlugs.has(s.targetSlug)) {
      seenSlugs.add(s.targetSlug);
      combinedSuggestions.push({ name: s.name, slug: s.targetSlug, subtitle: s.description });
    }
  }

  const handleSelectSkill = (slug: string) => {
    setIsOpen(false);
    setQuery('');
    loadRoadmapBySlug(slug);
  };

  const handleCustomGenerate = (skillName: string) => {
    setIsOpen(false);
    setQuery('');
    setPendingSkillToPersonalize(skillName);
    setPersonalizationModalOpen(true);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;

    // Check exact match
    if (combinedSuggestions.length > 0) {
      handleSelectSkill(combinedSuggestions[0].slug);
    } else {
      handleCustomGenerate(query.trim());
    }
  };

  return (
    <div ref={containerRef} className="w-full max-w-3xl mx-auto relative z-30">
      <form onSubmit={handleSubmit} className="relative">
        <div className="relative flex items-center rounded-2xl bg-[#0D1220] border border-purple-500/40 p-1.5 shadow-2xl shadow-purple-950/40 focus-within:border-cyan-400 focus-within:ring-2 focus-within:ring-cyan-500/20 transition-all">
          <div className="pl-4 pr-2 text-slate-400">
            <Search className="h-5 w-5 text-purple-400" />
          </div>

          <input
            type="text"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setIsOpen(true);
            }}
            onFocus={() => setIsOpen(true)}
            placeholder="Try Java, Python, Cybersecurity, AI, Web Development..."
            className="w-full bg-transparent py-3 pr-4 text-sm sm:text-base text-white placeholder-slate-400 focus:outline-none"
          />

          <button
            type="submit"
            className="shrink-0 flex items-center gap-2 px-5 sm:px-6 py-3 rounded-xl bg-gradient-to-r from-purple-600 via-indigo-600 to-cyan-500 hover:from-purple-500 hover:to-cyan-400 text-white text-xs sm:text-sm font-semibold shadow-lg shadow-purple-500/25 transition-all cursor-pointer whitespace-nowrap"
          >
            <Sparkles className="h-4 w-4 text-yellow-300" />
            <span>Generate Roadmap</span>
          </button>
        </div>
      </form>

      {/* Autocomplete Dropdown */}
      {isOpen && query.trim().length > 0 && (
        <div className="absolute left-0 right-0 mt-2 bg-[#0D1220] border border-slate-700/80 rounded-2xl shadow-2xl shadow-black/80 overflow-hidden backdrop-blur-xl z-50 divide-y divide-slate-800">
          {combinedSuggestions.length > 0 ? (
            <div className="p-2 space-y-1">
              <div className="px-3 py-1.5 text-[11px] font-semibold uppercase tracking-wider text-slate-400">
                Matching Roadmaps
              </div>
              {combinedSuggestions.slice(0, 5).map((item) => (
                <button
                  key={item.slug}
                  onClick={() => handleSelectSkill(item.slug)}
                  className="w-full flex items-center justify-between p-3 rounded-xl text-left hover:bg-slate-800/70 transition-colors group cursor-pointer"
                >
                  <div className="flex items-center gap-3">
                    <div className="h-8 w-8 rounded-lg bg-purple-900/40 border border-purple-500/30 flex items-center justify-center text-purple-300 group-hover:scale-105 transition-transform">
                      <BookOpen className="h-4 w-4" />
                    </div>
                    <div>
                      <div className="text-sm font-medium text-white group-hover:text-cyan-300 transition-colors">
                        {item.name}
                      </div>
                      {item.subtitle && (
                        <div className="text-xs text-slate-400 truncate max-w-md">
                          {item.subtitle}
                        </div>
                      )}
                    </div>
                  </div>
                  <ArrowRight className="h-4 w-4 text-slate-500 group-hover:text-cyan-400 group-hover:translate-x-1 transition-all" />
                </button>
              ))}
            </div>
          ) : null}

          {/* Create custom roadmap action */}
          <div className="p-2 bg-[#121A2B]/60">
            <button
              onClick={() => handleCustomGenerate(query.trim())}
              className="w-full flex items-center justify-between p-3 rounded-xl text-left hover:bg-purple-900/30 border border-purple-500/30 transition-colors group cursor-pointer"
            >
              <div className="flex items-center gap-3">
                <div className="h-8 w-8 rounded-lg bg-cyan-900/40 border border-cyan-500/30 flex items-center justify-center text-cyan-300">
                  <PlusCircle className="h-4 w-4" />
                </div>
                <div>
                  <div className="text-sm font-medium text-white flex items-center gap-1.5">
                    <span>Create custom roadmap for</span>
                    <span className="text-cyan-300 font-semibold underline">"{query}"</span>
                  </div>
                  <div className="text-xs text-slate-400">
                    AI will architect a complete beginner → job-ready curriculum
                  </div>
                </div>
              </div>
              <Sparkles className="h-4 w-4 text-amber-300 animate-pulse" />
            </button>
          </div>
        </div>
      )}

      {/* Popular Skills Chips */}
      <div className="mt-4 flex flex-wrap items-center justify-center gap-2 text-xs">
        <span className="text-slate-400 font-medium mr-1">Popular Skills:</span>
        {popularSkillChips.map((chip) => (
          <button
            key={chip.slug}
            onClick={() => handleSelectSkill(chip.slug)}
            className="px-3 py-1.5 rounded-lg bg-[#121A2B] hover:bg-slate-800 text-slate-200 hover:text-white border border-slate-700/60 hover:border-purple-500/50 shadow-sm transition-all cursor-pointer flex items-center gap-1.5 active:scale-95"
          >
            <span>{chip.name}</span>
          </button>
        ))}
      </div>
    </div>
  );
};
