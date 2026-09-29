import React, { useState, useRef, useEffect } from 'react';
import { useRoadmap } from '../context/RoadmapContext';
import {
  Bot,
  X,
  Send,
  Maximize2,
  Sparkles,
  Zap,
  ArrowRight,
  MessageSquare,
} from 'lucide-react';
import { sendN8nMessage } from '../utils/n8nClient';

interface FloatingMessage {
  id: string;
  sender: 'user' | 'agent';
  text: string;
}

export const N8nFloatingWidget: React.FC = () => {
  const { n8nWidgetOpen, setN8nWidgetOpen, setActiveTab, n8nWebhookUrl, currentRoadmap } = useRoadmap();
  const [messages, setMessages] = useState<FloatingMessage[]>([
    {
      id: '1',
      sender: 'agent',
      text: 'Hi! I am your live n8n AI Agent. Ask me anything about your current learning path, project ideas, or request custom study tips!',
    },
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [sessionId] = useState(() => `widget-${Date.now().toString(36)}`);
  const chatEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isLoading, n8nWidgetOpen]);

  const handleSend = async (customPrompt?: string) => {
    const query = (customPrompt || input).trim();
    if (!query || isLoading) return;

    setMessages((prev) => [...prev, { id: `u-${Date.now()}`, sender: 'user', text: query }]);
    if (!customPrompt) setInput('');
    setIsLoading(true);

    try {
      const result = await sendN8nMessage({
        message: query,
        sessionId,
        webhookUrl: n8nWebhookUrl,
      });

      setMessages((prev) => [
        ...prev,
        {
          id: `a-${Date.now()}`,
          sender: 'agent',
          text: result.output || result.error || 'Connected to n8n agent workflow.',
        },
      ]);
    } catch (err: any) {
      setMessages((prev) => [
        ...prev,
        {
          id: `a-${Date.now()}`,
          sender: 'agent',
          text: `Error connecting to n8n: ${err?.message || err}`,
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <aside aria-label="n8n AI Agent Assistant" className="fixed bottom-4 sm:bottom-6 right-4 sm:right-6 z-[60]">
      {/* Floating Toggle Button - Always visible, high contrast, vibrant glow */}
      {!n8nWidgetOpen && (
        <button
          onClick={() => setN8nWidgetOpen(true)}
          className="group relative flex items-center gap-2.5 px-4 py-3 sm:px-5 sm:py-3.5 rounded-full bg-gradient-to-r from-purple-600 via-indigo-600 to-cyan-500 hover:from-purple-500 hover:to-cyan-400 text-white font-bold text-xs sm:text-sm shadow-2xl shadow-purple-600/50 hover:shadow-cyan-500/50 hover:scale-105 active:scale-95 transition-all cursor-pointer border border-white/30 backdrop-blur-md"
          title="Ask n8n AI Agent"
          aria-label="Ask n8n AI Agent"
        >
          {/* Animated Glow Halo */}
          <span className="absolute -inset-0.5 rounded-full bg-gradient-to-r from-purple-500 to-cyan-400 opacity-60 blur-sm group-hover:opacity-100 transition-opacity -z-10 animate-pulse" />

          <div className="relative flex items-center justify-center">
            <Bot className="h-5 w-5 text-white group-hover:rotate-12 transition-transform duration-300" />
            <span className="absolute -top-1 -right-1 h-2.5 w-2.5 rounded-full bg-emerald-400 border border-[#070B14] animate-ping" />
            <span className="absolute -top-1 -right-1 h-2.5 w-2.5 rounded-full bg-emerald-400 border border-[#070B14]" />
          </div>

          <span className="tracking-wide flex items-center gap-1.5 font-bold">
            <span>Ask n8n AI Agent</span>
            <span className="hidden sm:inline-block px-1.5 py-0.2 text-[10px] uppercase font-mono rounded bg-white/20 text-cyan-200">
              LIVE
            </span>
          </span>
        </button>
      )}

      {/* Floating Chat Popup Window */}
      {n8nWidgetOpen && (
        <div className="w-[calc(100vw-2rem)] sm:w-[420px] max-w-[420px] h-[520px] max-h-[85vh] rounded-3xl bg-[#0D1220] border border-purple-500/50 shadow-2xl shadow-purple-950/80 flex flex-col overflow-hidden animate-fadeIn backdrop-blur-2xl">
          {/* Header */}
          <div className="p-4 bg-gradient-to-r from-[#121A2B] to-[#0D1220] border-b border-slate-800 flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="h-8 w-8 rounded-xl bg-purple-900/70 border border-purple-500/50 flex items-center justify-center text-cyan-300 shadow-sm">
                <Bot className="h-4 w-4" />
              </div>
              <div>
                <div className="text-xs font-bold text-white flex items-center gap-1.5">
                  <span>Ask n8n AI Agent</span>
                  <span className="h-2 w-2 rounded-full bg-emerald-400 inline-block" />
                  <span className="text-[10px] text-emerald-400 font-mono font-medium">ONLINE</span>
                </div>
                <div className="text-[10px] text-slate-400 font-mono truncate max-w-[190px]">
                  veeksha09.app.n8n.cloud
                </div>
              </div>
            </div>

            <div className="flex items-center gap-1">
              <button
                onClick={() => {
                  setN8nWidgetOpen(false);
                  setActiveTab('n8n-agent');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors cursor-pointer"
                title="Open Fullscreen Agent Studio"
              >
                <Maximize2 className="h-4 w-4" />
              </button>
              <button
                onClick={() => setN8nWidgetOpen(false)}
                className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors cursor-pointer"
                title="Close chat"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
          </div>

          {/* Quick Context Pill */}
          <div className="px-3.5 py-2 bg-[#070B14] border-b border-slate-800/80 flex items-center justify-between text-[11px] text-slate-400">
            <span className="truncate max-w-[200px]">Context: {currentRoadmap.title}</span>
            <button
              onClick={() => {
                handleSend(`I'm learning ${currentRoadmap.title}. Can you recommend the top 3 starter projects to build?`);
              }}
              className="text-cyan-400 hover:text-cyan-300 hover:underline cursor-pointer shrink-0 font-medium"
            >
              Ask about {currentRoadmap.title.replace(' Roadmap', '')} →
            </button>
          </div>

          {/* Messages Body */}
          <div className="flex-1 p-3.5 overflow-y-auto space-y-3">
            {messages.map((m) => (
              <div
                key={m.id}
                className={`flex gap-2 text-xs leading-relaxed ${
                  m.sender === 'user' ? 'justify-end' : 'justify-start'
                }`}
              >
                {m.sender === 'agent' && (
                  <div className="h-6 w-6 rounded-lg bg-purple-900/60 border border-purple-500/40 flex items-center justify-center text-cyan-300 shrink-0 mt-0.5">
                    <Bot className="h-3.5 w-3.5" />
                  </div>
                )}
                <div
                  className={`p-3 rounded-2xl max-w-[85%] whitespace-pre-line shadow-sm ${
                    m.sender === 'user'
                      ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-br-none'
                      : 'bg-[#121A2B] border border-slate-800 text-slate-200 rounded-bl-none'
                  }`}
                >
                  {m.text}
                </div>
              </div>
            ))}

            {isLoading && (
              <div className="flex items-center gap-2 text-xs text-slate-400 p-2">
                <span className="h-2 w-2 rounded-full bg-cyan-400 animate-ping" />
                <span>n8n AI agent is processing via cloud workflow...</span>
              </div>
            )}
            <div ref={chatEndRef} />
          </div>

          {/* Quick Prompts */}
          <div className="px-3 py-1.5 bg-[#070B14]/80 border-t border-slate-800 flex items-center gap-1.5 overflow-x-auto text-[11px]">
            <button
              onClick={() => handleSend('What should I learn first as an absolute beginner?')}
              className="shrink-0 px-2 py-1 rounded bg-[#121A2B] hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-700/60 transition-colors"
            >
              Where to start?
            </button>
            <button
              onClick={() => handleSend('Give me 3 realistic project ideas for my portfolio')}
              className="shrink-0 px-2 py-1 rounded bg-[#121A2B] hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-700/60 transition-colors"
            >
              Project ideas
            </button>
            <button
              onClick={() => handleSend('How do I prepare for a junior developer technical interview?')}
              className="shrink-0 px-2 py-1 rounded bg-[#121A2B] hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-700/60 transition-colors"
            >
              Interview prep
            </button>
          </div>

          {/* Input Form */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSend();
            }}
            className="p-3 bg-[#0D1220] border-t border-slate-800 flex gap-2"
          >
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask n8n agent anything..."
              disabled={isLoading}
              className="flex-1 px-3 py-2 bg-[#121A2B] border border-slate-700 rounded-xl text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400"
            />
            <button
              type="submit"
              disabled={isLoading || !input.trim()}
              className="p-2.5 rounded-xl bg-gradient-to-r from-purple-600 to-cyan-500 hover:from-purple-500 hover:to-cyan-400 text-white disabled:opacity-40 transition-colors cursor-pointer"
            >
              <Send className="h-3.5 w-3.5" />
            </button>
          </form>
        </div>
      )}
    </aside>
  );
};
