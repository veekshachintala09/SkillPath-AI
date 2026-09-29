import React, { useState } from 'react';
import { useRoadmap } from '../context/RoadmapContext';
import {
  X,
  CheckCircle2,
  Circle,
  Code2,
  Lightbulb,
  Target,
  Sparkles,
  Copy,
  Check,
  Send,
  HelpCircle,
  ChevronRight,
  BookOpen,
} from 'lucide-react';
import { sendN8nMessage } from '../utils/n8nClient';

export const LearningPanel: React.FC = () => {
  const { activeTopic, setActiveTopic, toggleTopicCompletion, isTopicCompleted, currentRoadmap, n8nWebhookUrl } = useRoadmap();
  const [copiedCode, setCopiedCode] = useState(false);
  const [visibleHints, setVisibleHints] = useState<Record<string, boolean>>({});
  const [visibleSolutions, setVisibleSolutions] = useState<Record<string, boolean>>({});
  const [aiQuestion, setAiQuestion] = useState('');
  const [aiAnswer, setAiAnswer] = useState<string | null>(null);
  const [isAiLoading, setIsAiLoading] = useState(false);
  const [askTarget, setAskTarget] = useState<'n8n' | 'builtin'>('n8n');

  if (!activeTopic) return null;

  const completed = isTopicCompleted(activeTopic.id);

  const handleCopyCode = (code: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  const toggleHint = (exId: string) => {
    setVisibleHints((prev) => ({ ...prev, [exId]: !prev[exId] }));
  };

  const toggleSolution = (exId: string) => {
    setVisibleSolutions((prev) => ({ ...prev, [exId]: !prev[exId] }));
  };

  const handleAskAi = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!aiQuestion.trim()) return;

    setIsAiLoading(true);
    setAiAnswer(null);

    if (askTarget === 'n8n') {
      try {
        const fullPrompt = `Topic: "${activeTopic.title}" in ${currentRoadmap.title}.\nUser Question: ${aiQuestion.trim()}`;
        const result = await sendN8nMessage({
          message: fullPrompt,
          sessionId: `lesson-${activeTopic.id}`,
          webhookUrl: n8nWebhookUrl,
        });
        setAiAnswer(result.output || result.error || 'Connected to n8n AI Agent.');
      } catch (err: any) {
        setAiAnswer(`Could not reach n8n agent: ${err?.message || err}`);
      } finally {
        setIsAiLoading(false);
      }
      return;
    }

    try {
      const res = await fetch('/api/ai-explain-topic', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          topicTitle: activeTopic.title,
          skill: currentRoadmap.title,
          userQuestion: aiQuestion,
        }),
      });
      const data = await res.json();
      setAiAnswer(data.answer || 'Keep practicing! Breaking down problems into small steps is the best way forward.');
    } catch (err) {
      setAiAnswer(
        `Here is a quick breakdown for **${activeTopic.title}**: Focus on the core concept first, experiment with simple 2-line code examples, and test edge cases!`
      );
    } finally {
      setIsAiLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-black/75 backdrop-blur-sm flex justify-end animate-fadeIn">
      {/* Drawer Overlay Backdrop */}
      <div
        className="absolute inset-0 cursor-pointer"
        onClick={() => {
          setActiveTopic(null);
          setAiAnswer(null);
          setAiQuestion('');
        }}
      />

      {/* Slide-in Content Panel */}
      <div className="relative w-full max-w-2xl bg-[#0D1220] border-l border-slate-800 h-full overflow-y-auto shadow-2xl flex flex-col z-10">
        {/* Panel Header */}
        <div className="sticky top-0 z-20 flex items-center justify-between p-5 sm:p-6 bg-[#0D1220]/95 backdrop-blur-md border-b border-slate-800">
          <div className="flex items-center gap-3">
            <button
              onClick={() => toggleTopicCompletion(activeTopic.id)}
              className="flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-semibold cursor-pointer transition-colors border"
              style={{
                backgroundColor: completed ? 'rgba(16, 185, 129, 0.15)' : 'rgba(30, 41, 59, 0.8)',
                borderColor: completed ? 'rgba(16, 185, 129, 0.4)' : 'rgba(51, 65, 85, 0.8)',
                color: completed ? '#34D399' : '#CBD5E1',
              }}
            >
              {completed ? (
                <>
                  <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                  <span>Completed</span>
                </>
              ) : (
                <>
                  <Circle className="h-4 w-4 text-slate-500" />
                  <span>Mark Complete</span>
                </>
              )}
            </button>

            <span className="text-xs text-slate-400 font-mono">
              ⏱ {activeTopic.estimatedHours}
            </span>
          </div>

          <button
            onClick={() => {
              setActiveTopic(null);
              setAiAnswer(null);
              setAiQuestion('');
            }}
            className="p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors cursor-pointer"
            aria-label="Close lesson panel"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Panel Body Content */}
        <div className="p-6 sm:p-8 space-y-8 flex-1">
          {/* Topic Title Lockup */}
          <div>
            <div className="text-xs font-mono font-semibold uppercase tracking-wider text-purple-400 mb-1">
              {currentRoadmap.title.replace(' Roadmap', '')} · Topic Lesson
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
              {activeTopic.title}
            </h2>
            {activeTopic.subtitle && (
              <p className="mt-1 text-sm text-slate-300">
                {activeTopic.subtitle}
              </p>
            )}
          </div>

          {/* 1. What is it? */}
          <div className="rounded-2xl bg-[#121A2B] border border-slate-800/80 p-5 sm:p-6 shadow-md">
            <div className="flex items-center gap-2 text-sm font-bold text-cyan-300 mb-2">
              <BookOpen className="h-4 w-4" />
              <span>What is it?</span>
            </div>
            <p className="text-sm sm:text-base text-slate-200 leading-relaxed whitespace-pre-line">
              {activeTopic.whatIsIt}
            </p>
          </div>

          {/* 2. Why should I learn it? */}
          <div className="rounded-2xl bg-[#121A2B] border border-slate-800/80 p-5 sm:p-6 shadow-md">
            <div className="flex items-center gap-2 text-sm font-bold text-amber-300 mb-2">
              <Lightbulb className="h-4 w-4" />
              <span>Why should I learn it?</span>
            </div>
            <p className="text-sm sm:text-base text-slate-200 leading-relaxed whitespace-pre-line">
              {activeTopic.whyLearnIt}
            </p>
          </div>

          {/* 3. Example Code */}
          {activeTopic.codeExample && (
            <div className="rounded-2xl bg-[#070B14] border border-purple-500/30 overflow-hidden shadow-lg">
              <div className="flex items-center justify-between px-4 py-2.5 bg-slate-900 border-b border-slate-800">
                <div className="flex items-center gap-2 text-xs font-mono text-purple-300 font-semibold">
                  <Code2 className="h-4 w-4" />
                  <span>{activeTopic.codeExample.language.toUpperCase()} Example</span>
                </div>
                <button
                  onClick={() => handleCopyCode(activeTopic.codeExample!.code)}
                  className="flex items-center gap-1.5 text-xs text-slate-400 hover:text-white px-2 py-1 rounded bg-slate-800 hover:bg-slate-700 transition-colors cursor-pointer"
                >
                  {copiedCode ? (
                    <>
                      <Check className="h-3.5 w-3.5 text-emerald-400" />
                      <span className="text-emerald-400">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="h-3.5 w-3.5" />
                      <span>Copy Code</span>
                    </>
                  )}
                </button>
              </div>

              <pre className="p-4 sm:p-5 overflow-x-auto text-xs sm:text-sm font-mono text-cyan-200 leading-relaxed">
                <code>{activeTopic.codeExample.code}</code>
              </pre>

              {activeTopic.codeExample.explanation && (
                <div className="p-3.5 bg-[#0D1220] border-t border-slate-800 text-xs text-slate-300">
                  <span className="font-semibold text-slate-200">How it works: </span>
                  {activeTopic.codeExample.explanation}
                </div>
              )}
            </div>
          )}

          {/* 4. Practice Exercises */}
          {activeTopic.practiceExercises && activeTopic.practiceExercises.length > 0 && (
            <div>
              <div className="flex items-center gap-2 text-base font-bold text-white mb-3">
                <Target className="h-4 w-4 text-purple-400" />
                <span>Beginner Practice Drills ({activeTopic.practiceExercises.length})</span>
              </div>

              <div className="space-y-3">
                {activeTopic.practiceExercises.map((ex, idx) => (
                  <div
                    key={ex.id}
                    className="p-4 rounded-xl bg-[#121A2B] border border-slate-800 space-y-2"
                  >
                    <div className="flex items-start gap-2.5">
                      <span className="h-5 w-5 rounded-full bg-purple-900/60 border border-purple-500/40 text-purple-300 text-[11px] font-mono font-bold flex items-center justify-center shrink-0">
                        {idx + 1}
                      </span>
                      <p className="text-xs sm:text-sm text-slate-200 leading-relaxed font-medium">
                        {ex.task}
                      </p>
                    </div>

                    {/* Hint Toggle */}
                    {ex.hint && (
                      <div className="pl-7.5">
                        <button
                          onClick={() => toggleHint(ex.id)}
                          className="text-[11px] font-semibold text-cyan-400 hover:underline flex items-center gap-1 cursor-pointer"
                        >
                          <HelpCircle className="h-3 w-3" />
                          <span>{visibleHints[ex.id] ? 'Hide Hint' : 'Show Hint'}</span>
                        </button>
                        {visibleHints[ex.id] && (
                          <div className="mt-1.5 p-2.5 rounded-lg bg-[#070B14] border border-cyan-500/30 text-xs text-cyan-200">
                            💡 {ex.hint}
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* 5. Mini Challenge */}
          {activeTopic.miniChallenge && (
            <div className="rounded-2xl bg-gradient-to-r from-purple-950/40 to-indigo-950/40 border border-purple-500/40 p-5 sm:p-6 shadow-md">
              <div className="flex items-center gap-2 text-sm font-bold text-purple-300 mb-2">
                <Sparkles className="h-4 w-4 text-yellow-300" />
                <span>Mini Challenge: {activeTopic.miniChallenge.title}</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                {activeTopic.miniChallenge.description}
              </p>
              {activeTopic.miniChallenge.tips && (
                <div className="mt-3 p-3 rounded-xl bg-[#070B14]/80 border border-purple-500/20 text-xs text-purple-200">
                  <span className="font-semibold text-purple-300">Pro Tip: </span>
                  {activeTopic.miniChallenge.tips}
                </div>
              )}
            </div>
          )}

          {/* 6. AI Tutor Live Assistant Box */}
          <div className="rounded-2xl bg-[#070B14] border border-cyan-500/40 p-5 shadow-lg">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2 text-sm font-bold text-cyan-300">
                <Sparkles className="h-4 w-4 text-cyan-400" />
                <span>Ask AI Tutor About This Topic</span>
              </div>

              {/* Selector */}
              <div className="flex items-center gap-1 bg-[#0D1220] p-1 rounded-lg border border-slate-800 text-[11px]">
                <button
                  type="button"
                  onClick={() => setAskTarget('n8n')}
                  className={`px-2 py-0.5 rounded font-medium transition-colors cursor-pointer ${
                    askTarget === 'n8n'
                      ? 'bg-cyan-600 text-white shadow-sm'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  n8n AI Agent
                </button>
                <button
                  type="button"
                  onClick={() => setAskTarget('builtin')}
                  className={`px-2 py-0.5 rounded font-medium transition-colors cursor-pointer ${
                    askTarget === 'builtin'
                      ? 'bg-purple-600 text-white shadow-sm'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  Local Tutor
                </button>
              </div>
            </div>

            <p className="text-xs text-slate-400 mb-3">
              {askTarget === 'n8n'
                ? 'Routing directly to your live n8n cloud AI Agent workflow.'
                : 'Still stuck or want an extra simple analogy? Ask a question:'}
            </p>

            <form onSubmit={handleAskAi} className="flex gap-2">
              <input
                type="text"
                value={aiQuestion}
                onChange={(e) => setAiQuestion(e.target.value)}
                placeholder={`e.g. Can you explain ${activeTopic.title} with a kitchen analogy?`}
                className="flex-1 px-3.5 py-2 bg-[#0D1220] border border-slate-700 rounded-xl text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400"
              />
              <button
                type="submit"
                disabled={isAiLoading}
                className="px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white rounded-xl text-xs font-semibold flex items-center gap-1.5 transition-all disabled:opacity-50 cursor-pointer"
              >
                {isAiLoading ? 'Thinking...' : 'Ask AI'}
                <Send className="h-3 w-3" />
              </button>
            </form>

            {/* Answer Display */}
            {aiAnswer && (
              <div className="mt-4 p-4 rounded-xl bg-[#0D1220] border border-cyan-500/30 text-xs sm:text-sm text-slate-200 leading-relaxed whitespace-pre-line">
                {aiAnswer}
              </div>
            )}
          </div>
        </div>

        {/* Panel Footer Action */}
        <div className="sticky bottom-0 p-4 bg-[#0D1220] border-t border-slate-800 flex items-center justify-between">
          <button
            onClick={() => {
              setActiveTopic(null);
              setAiAnswer(null);
              setAiQuestion('');
            }}
            className="text-xs text-slate-400 hover:text-white transition-colors cursor-pointer"
          >
            Close Lesson
          </button>

          <button
            onClick={() => {
              toggleTopicCompletion(activeTopic.id);
              if (!completed) {
                // If user just completed, close or go to next
                setTimeout(() => setActiveTopic(null), 500);
              }
            }}
            className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-purple-600 to-cyan-500 hover:from-purple-500 hover:to-cyan-400 text-white text-xs sm:text-sm font-bold shadow-lg shadow-purple-600/30 transition-all cursor-pointer"
          >
            {completed ? 'Mark as Incomplete' : 'Complete Topic & Continue'}
            <CheckCircle2 className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
