import React, { useState, useRef, useEffect } from 'react';
import { useRoadmap } from '../context/RoadmapContext';
import {
  Bot,
  X,
  Send,
  Maximize2,
  RefreshCw,
  Sparkles,
  Clock,
  Workflow,
} from 'lucide-react';

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
      text: 'Hi! I am your live n8n AI Agent. Ask me anything about your current learning path or request custom advice!',
    },
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [sessionId] = useState(() => `widget-${Date.now().toString(36)}`);
  const chatEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isLoading, n8nWidgetOpen]);

  const handleSend = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    const query = input.trim();
    if (!query || isLoading) return;

    setMessages((prev) => [...prev, { id: `u-${Date.now()}`, sender: 'user', text: query }]);
    setInput('');
    setIsLoading(true);

    try {
      const res = await fetch('/api/n8n-agent/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: query,
          sessionId,
          webhookUrl: n8nWebhookUrl,
        }),
      });

      const data = await res.json();
      if (data && data.success && data.output) {
        setMessages((prev) => [
          ...prev,
          { id: `a-${Date.now()}`, sender: 'agent', text: data.output },
        ]);
      } else {
        setMessages((prev) => [
          ...prev,
          {
            id: `a-${Date.now()}`,
            sender: 'agent',
            text: data?.error || 'Received empty output from n8n agent workflow.',
          },
        ]);
      }
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
    <div className="fixed bottom-6 right-6 z-40">
      {/* Floating Toggle Button */}
      {!n8nWidgetOpen && (
        <button
          onClick={() => setN8nWidgetOpen(true)}
          className="group flex items-center gap-2.5 px-4 py-3 rounded-full bg-gradient-to-r from-purple-600 via-indigo-600 to-cyan-500 hover:from-purple-500 hover:to-cyan-400 text-white font-bold text-xs sm:text-sm shadow-2xl shadow-purple-600/40 hover:shadow-cyan-500/40 hover:scale-105 active:scale-95 transition-all cursor-pointer border border-white/20"
        >
          <div className="relative">
            <Bot className="h-5 w-5 text-white" />
            <span className="absolute -top-1 -right-1 h-2.5 w-2.5 rounded-full bg-emerald-400 border border-[#070B14] animate-ping" />
            <span className="absolute -top-1 -right-1 h-2.5 w-2.5 rounded-full bg-emerald-400 border border-[#070B14]" />
          </div>
          <span>Ask n8n AI Agent</span>
        </button>
      )}

      {/* Floating Chat Popup Window */}
      {n8nWidgetOpen && (
        <div className="w-[360px] sm:w-[420px] h-[520px] rounded-3xl bg-[#0D1220] border border-purple-500/40 shadow-2xl flex flex-col overflow-hidden animate-fadeIn backdrop-blur-xl">
          {/* Header */}
          <div className="p-4 bg-gradient-to-r from-[#121A2B] to-[#0D1220] border-b border-slate-800 flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="h-8 w-8 rounded-xl bg-purple-900/60 border border-purple-500/40 flex items-center justify-center text-cyan-300">
                <Bot className="h-4 w-4" />
              </div>
              <div>
                <div className="text-xs font-bold text-white flex items-center gap-1.5">
                  <span>n8n AI Agent</span>
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                </div>
                <div className="text-[10px] text-slate-400 font-mono">
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
                title="Expand to Full Project Page"
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
          <div className="px-3 py-1.5 bg-[#070B14] border-b border-slate-800/80 flex items-center justify-between text-[11px] text-slate-400">
            <span>Context: {currentRoadmap.title}</span>
            <button
              onClick={() => {
                setInput(`I'm learning ${currentRoadmap.title}. Can you suggest the best 3 starter exercises?`);
              }}
              className="text-cyan-400 hover:underline cursor-pointer"
            >
              Ask about {currentRoadmap.title.replace(' Roadmap', '')}
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
                  className={`p-3 rounded-2xl max-w-[85%] whitespace-pre-line ${
                    m.sender === 'user'
                      ? 'bg-purple-600 text-white rounded-br-none'
                      : 'bg-[#121A2B] border border-slate-800 text-slate-200 rounded-bl-none'
                  }`}
                >
                  {m.text}
                </div>
              </div>
            ))}

            {isLoading && (
              <div className="flex items-center gap-2 text-xs text-slate-400">
                <span className="h-2 w-2 rounded-full bg-cyan-400 animate-ping" />
                <span>n8n AI agent is responding...</span>
              </div>
            )}
            <div ref={chatEndRef} />
          </div>

          {/* Input Form */}
          <form onSubmit={handleSend} className="p-3 bg-[#0D1220] border-t border-slate-800 flex gap-2">
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
              className="p-2.5 rounded-xl bg-purple-600 hover:bg-purple-500 text-white disabled:opacity-40 transition-colors cursor-pointer"
            >
              <Send className="h-3.5 w-3.5" />
            </button>
          </form>
        </div>
      )}
    </div>
  );
};
