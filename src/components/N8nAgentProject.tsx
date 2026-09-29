import React, { useState, useRef, useEffect } from 'react';
import { useRoadmap } from '../context/RoadmapContext';
import {
  Bot,
  Send,
  Sparkles,
  RefreshCw,
  Settings,
  ChevronDown,
  ChevronUp,
  Copy,
  Check,
  Zap,
  Terminal,
  Layers,
  ArrowRight,
  ShieldCheck,
  Clock,
  Code2,
  Workflow,
  ExternalLink,
} from 'lucide-react';
import { sendN8nMessage } from '../utils/n8nClient';

interface ChatMessage {
  id: string;
  sender: 'user' | 'agent';
  text: string;
  timestamp: string;
  latencyMs?: number;
  rawPayload?: any;
}

export const N8nAgentProject: React.FC = () => {
  const { currentRoadmap, userProgress, n8nWebhookUrl, setN8nWebhookUrl } = useRoadmap();

  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'welcome-1',
      sender: 'agent',
      text: `Hello! I am **SkillPath AI**, powered by your **n8n cloud AI Agent workflow**.

Whether you want to learn programming (Java, Python, C++), dive into Web Development, explore AI & Machine Learning, or master any other skill, I am connected live to your n8n webhook:
\`${n8nWebhookUrl}\`

Ask me to build a custom roadmap, explain a tough concept, give you interview advice, or test automated workflow actions! What are we learning today?`,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    },
  ]);

  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [sessionId, setSessionId] = useState<string>(() => `session-${Date.now().toString(36)}`);
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);
  const [showInspector, setShowInspector] = useState(false);
  const [lastPayloadSent, setLastPayloadSent] = useState<any>(null);
  const [lastPayloadReceived, setLastPayloadReceived] = useState<any>(null);
  const [editingWebhook, setEditingWebhook] = useState(false);
  const [tempWebhookUrl, setTempWebhookUrl] = useState(n8nWebhookUrl);
  const [activeTabSub, setActiveTabSub] = useState<'chat' | 'architecture' | 'workflow-code'>('chat');

  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isLoading]);

  const defaultWebhook = 'https://veeksha09.app.n8n.cloud/webhook/5c0b5dc9-97a6-493d-b0a3-1d508d6129b9/chat';

  const quickPrompts = [
    'Create a 4-week Python roadmap for complete beginners',
    'I want to learn Java. What are the best 3 beginner projects to build?',
    'Explain Object-Oriented Programming (OOP) with a simple real-life analogy',
    'What skills do I need to land a Junior Backend Developer role?',
    'Review my current learning progress in ' + currentRoadmap.title,
  ];

  const handleSendMessage = async (textToSend?: string) => {
    const message = (textToSend || inputValue).trim();
    if (!message || isLoading) return;

    const userMsg: ChatMessage = {
      id: `user-${Date.now()}`,
      sender: 'user',
      text: message,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputValue('');
    setIsLoading(true);

    const outgoingPayload = {
      action: 'sendMessage',
      sessionId: sessionId,
      chatInput: message,
    };
    setLastPayloadSent(outgoingPayload);

    const startTime = Date.now();

    try {
      const result = await sendN8nMessage({
        message,
        sessionId,
        webhookUrl: n8nWebhookUrl,
      });

      const elapsed = Date.now() - startTime;
      setLastPayloadReceived(result.raw || { output: result.output, source: result.source });

      if (result.success && result.output) {
        const agentMsg: ChatMessage = {
          id: `agent-${Date.now()}`,
          sender: 'agent',
          text: result.output,
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
          latencyMs: result.latencyMs || elapsed,
          rawPayload: result.raw,
        };
        setMessages((prev) => [...prev, agentMsg]);
      } else {
        const errorText =
          result.error ||
          result.output ||
          'Could not retrieve response from n8n webhook.';
        const fallbackMsg: ChatMessage = {
          id: `agent-${Date.now()}`,
          sender: 'agent',
          text: `⚠️ **n8n Agent Response:**\n${errorText}\n\n*Tip:* Verify that your n8n workflow at \`${n8nWebhookUrl}\` is toggled to **Active** in your n8n Cloud editor.`,
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
          latencyMs: elapsed,
          rawPayload: result.raw,
        };
        setMessages((prev) => [...prev, fallbackMsg]);
      }
    } catch (err: any) {
      const elapsed = Date.now() - startTime;
      const agentErrorMsg: ChatMessage = {
        id: `agent-${Date.now()}`,
        sender: 'agent',
        text: `⚠️ **Connection Error:** Could not contact n8n webhook.\n\n\`${err?.message || err}\``,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        latencyMs: elapsed,
      };
      setMessages((prev) => [...prev, agentErrorMsg]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleResetSession = () => {
    const newSession = `session-${Date.now().toString(36)}`;
    setSessionId(newSession);
    setMessages([
      {
        id: `welcome-${Date.now()}`,
        sender: 'agent',
        text: `Session reset! Starting a brand new conversation with the n8n agent (Session ID: \`${newSession}\`). How can I help you?`,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      },
    ]);
  };

  const handleInjectRoadmapContext = () => {
    const completedCount = userProgress.completedTopicIds.length;
    const prompt = `I am currently studying the "${currentRoadmap.title}" (${currentRoadmap.difficulty}). I have completed ${completedCount} topics so far. Can you give me tailored advice on what to focus on next, common beginner pitfalls in this track, and a mini-project idea?`;
    handleSendMessage(prompt);
  };

  const copyToClipboard = (text: string, idx: number) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(idx);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  // Sample n8n Workflow JSON for the architecture guide
  const sampleWorkflowJson = {
    name: 'SkillPath AI Agent',
    nodes: [
      {
        parameters: {
          public: true,
          options: {},
        },
        type: '@n8n/n8n-nodes-langchain.chatTrigger',
        typeVersion: 1.1,
        position: [0, 0],
        id: 'chat-trigger',
        name: 'When chat message received',
        webhookId: '5c0b5dc9-97a6-493d-b0a3-1d508d6129b9',
      },
      {
        parameters: {
          options: {
            systemMessage:
              'You are SkillPath AI, an expert technical mentor and curriculum architect. Provide encouraging, step-by-step beginner guidance with practical code examples and clear analogies.',
          },
        },
        type: '@n8n/n8n-nodes-langchain.agent',
        typeVersion: 1.7,
        position: [240, 0],
        id: 'ai-agent',
        name: 'AI Agent',
      },
      {
        parameters: {
          model: 'gemini-1.5-flash',
          options: { temperature: 0.7 },
        },
        type: '@n8n/n8n-nodes-langchain.lmChatGoogleGemini',
        typeVersion: 1,
        position: [240, 200],
        id: 'gemini-model',
        name: 'Google Gemini Chat Model',
      },
      {
        parameters: {
          sessionIdKey: 'sessionId',
        },
        type: '@n8n/n8n-nodes-langchain.memoryBufferWindow',
        typeVersion: 1.3,
        position: [400, 200],
        id: 'window-memory',
        name: 'Window Buffer Memory',
      },
    ],
    connections: {
      'chat-trigger': {
        main: [[{ node: 'ai-agent', type: 'main', index: 0 }]],
      },
      'gemini-model': {
        ai_languageModel: [[{ node: 'ai-agent', type: 'ai_languageModel', index: 0 }]],
      },
      'window-memory': {
        ai_memory: [[{ node: 'ai-agent', type: 'ai_memory', index: 0 }]],
      },
    },
  };

  return (
    <div className="py-8 sm:py-12 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Top Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
        <div>
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-cyan-400 mb-1">
            <Workflow className="h-4 w-4" />
            <span>n8n Cloud Webhook Integration</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white flex items-center gap-3">
            <span>n8n AI Agent Project</span>
            <span className="text-xs px-2.5 py-1 rounded-full font-mono font-medium bg-emerald-950/60 border border-emerald-500/40 text-emerald-400 flex items-center gap-1.5">
              <span className="h-2 w-2 rounded-full bg-emerald-400 animate-ping" />
              Live Connected
            </span>
          </h1>
          <p className="mt-1 text-sm text-slate-300 max-w-2xl">
            Directly connected to your live n8n workflow at{' '}
            <code className="text-xs font-mono text-purple-300 bg-purple-950/40 px-1.5 py-0.5 rounded border border-purple-500/30">
              veeksha09.app.n8n.cloud
            </code>
            . Ask roadmap questions, test workflow payloads, or view the architecture blueprint.
          </p>
        </div>

        {/* Action Controls */}
        <div className="flex items-center gap-2 self-start md:self-center">
          <button
            onClick={() => handleResetSession()}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#121A2B] hover:bg-slate-800 border border-slate-700 text-xs font-semibold text-slate-300 hover:text-white transition-colors cursor-pointer"
            title="Reset Session Memory"
          >
            <RefreshCw className="h-3.5 w-3.5 text-cyan-400" />
            <span>New Session</span>
          </button>

          <button
            onClick={() => setEditingWebhook(!editingWebhook)}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#121A2B] hover:bg-slate-800 border border-slate-700 text-xs font-semibold text-slate-300 hover:text-white transition-colors cursor-pointer"
          >
            <Settings className="h-3.5 w-3.5 text-purple-400" />
            <span>Config</span>
          </button>
        </div>
      </div>

      {/* Webhook Configuration Bar (if editing) */}
      {editingWebhook && (
        <div className="p-4 rounded-2xl bg-[#0D1220] border border-purple-500/40 mb-6 space-y-3 shadow-xl">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-white uppercase tracking-wider">
              n8n Webhook Endpoint Configuration
            </span>
            <button
              onClick={() => {
                setTempWebhookUrl(defaultWebhook);
                setN8nWebhookUrl(defaultWebhook);
              }}
              className="text-xs text-cyan-400 hover:underline"
            >
              Reset to Default User Webhook
            </button>
          </div>
          <div className="flex gap-2">
            <input
              type="text"
              value={tempWebhookUrl}
              onChange={(e) => setTempWebhookUrl(e.target.value)}
              placeholder="https://your-n8n-instance.app.n8n.cloud/webhook/.../chat"
              className="flex-1 px-3.5 py-2 rounded-xl bg-[#121A2B] border border-slate-700 text-xs sm:text-sm text-white font-mono focus:outline-none focus:border-cyan-400"
            />
            <button
              onClick={() => {
                setN8nWebhookUrl(tempWebhookUrl.trim());
                setEditingWebhook(false);
              }}
              className="px-4 py-2 bg-gradient-to-r from-purple-600 to-cyan-500 hover:from-purple-500 hover:to-cyan-400 text-white rounded-xl text-xs font-bold transition-all cursor-pointer"
            >
              Save URL
            </button>
          </div>
        </div>
      )}

      {/* View Switcher Tabs: Live Chat vs Architecture Blueprint vs Workflow JSON */}
      <div className="flex items-center gap-2 p-1.5 bg-[#0D1220] border border-slate-800 rounded-2xl mb-6 w-fit">
        <button
          onClick={() => setActiveTabSub('chat')}
          className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
            activeTabSub === 'chat'
              ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-md'
              : 'text-slate-400 hover:text-white hover:bg-slate-800/40'
          }`}
        >
          <Bot className="h-4 w-4 text-cyan-300" />
          <span>Interactive Agent Chat</span>
        </button>

        <button
          onClick={() => setActiveTabSub('architecture')}
          className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
            activeTabSub === 'architecture'
              ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-md'
              : 'text-slate-400 hover:text-white hover:bg-slate-800/40'
          }`}
        >
          <Layers className="h-4 w-4 text-purple-300" />
          <span>n8n Agent Architecture</span>
        </button>

        <button
          onClick={() => setActiveTabSub('workflow-code')}
          className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
            activeTabSub === 'workflow-code'
              ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-md'
              : 'text-slate-400 hover:text-white hover:bg-slate-800/40'
          }`}
        >
          <Code2 className="h-4 w-4 text-emerald-300" />
          <span>Workflow Template JSON</span>
        </button>
      </div>

      {/* TAB 1: INTERACTIVE CHAT */}
      {activeTabSub === 'chat' && (
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Main Chat Conversation (3 cols) */}
          <div className="lg:col-span-3 flex flex-col h-[650px] rounded-3xl bg-[#0D1220] border border-purple-500/30 shadow-2xl overflow-hidden">
            {/* Chat Messages Log */}
            <div className="flex-1 p-5 sm:p-6 overflow-y-auto space-y-4">
              {messages.map((msg, idx) => (
                <div
                  key={msg.id}
                  className={`flex gap-3.5 ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  {msg.sender === 'agent' && (
                    <div className="h-8 w-8 rounded-xl bg-purple-900/60 border border-purple-500/40 flex items-center justify-center text-cyan-300 shrink-0 mt-0.5">
                      <Bot className="h-4 w-4" />
                    </div>
                  )}

                  <div
                    className={`max-w-[85%] rounded-2xl p-4 text-xs sm:text-sm leading-relaxed shadow-md ${
                      msg.sender === 'user'
                        ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-br-none'
                        : 'bg-[#121A2B] border border-slate-800 text-slate-200 rounded-bl-none'
                    }`}
                  >
                    <div className="whitespace-pre-line">{msg.text}</div>

                    <div className="mt-2 pt-2 border-t border-white/10 flex items-center justify-between text-[10px] text-slate-400 font-mono">
                      <span>{msg.timestamp}</span>
                      <div className="flex items-center gap-2">
                        {msg.latencyMs && (
                          <span className="text-cyan-400 flex items-center gap-0.5">
                            <Clock className="h-2.5 w-2.5" />
                            {msg.latencyMs}ms
                          </span>
                        )}
                        <button
                          onClick={() => copyToClipboard(msg.text, idx)}
                          className="hover:text-white transition-colors cursor-pointer"
                          title="Copy message"
                        >
                          {copiedIndex === idx ? (
                            <Check className="h-3 w-3 text-emerald-400" />
                          ) : (
                            <Copy className="h-3 w-3" />
                          )}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}

              {isLoading && (
                <div className="flex gap-3.5 items-center text-slate-400 text-xs">
                  <div className="h-8 w-8 rounded-xl bg-purple-900/40 border border-purple-500/30 flex items-center justify-center text-cyan-300 shrink-0 animate-pulse">
                    <Bot className="h-4 w-4" />
                  </div>
                  <div className="px-4 py-3 rounded-2xl bg-[#121A2B] border border-slate-800 flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-cyan-400 animate-ping" />
                    <span>n8n agent executing workflow & reasoning...</span>
                  </div>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Quick Context & Prompts Bar */}
            <div className="p-3 bg-[#070B14]/90 border-t border-slate-800/80 flex items-center gap-2 overflow-x-auto">
              <button
                onClick={handleInjectRoadmapContext}
                className="shrink-0 flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-purple-950/60 border border-purple-500/40 text-purple-300 text-xs font-semibold hover:bg-purple-900/60 transition-colors cursor-pointer whitespace-nowrap"
              >
                <Sparkles className="h-3 w-3 text-yellow-300" />
                <span>Inject "{currentRoadmap.title.replace(' Roadmap', '')}" Context</span>
              </button>

              {quickPrompts.slice(0, 3).map((prompt, i) => (
                <button
                  key={i}
                  onClick={() => handleSendMessage(prompt)}
                  className="shrink-0 text-xs text-slate-400 hover:text-white px-2.5 py-1.5 rounded-lg bg-slate-900 border border-slate-800 hover:border-slate-700 transition-colors whitespace-nowrap cursor-pointer"
                >
                  {prompt}
                </button>
              ))}
            </div>

            {/* Chat Input Field */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSendMessage();
              }}
              className="p-4 bg-[#0D1220] border-t border-slate-800 flex items-center gap-2"
            >
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Ask the n8n AI agent anything about your learning roadmap..."
                disabled={isLoading}
                className="flex-1 px-4 py-3 bg-[#121A2B] border border-slate-700 rounded-xl text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400"
              />
              <button
                type="submit"
                disabled={isLoading || !inputValue.trim()}
                className="px-5 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-cyan-500 hover:from-purple-500 hover:to-cyan-400 text-white font-bold text-xs sm:text-sm flex items-center gap-1.5 shadow-lg shadow-purple-600/30 transition-all disabled:opacity-40 cursor-pointer"
              >
                <span>Send</span>
                <Send className="h-3.5 w-3.5" />
              </button>
            </form>
          </div>

          {/* Side Info & Webhook Payload Inspector (1 col) */}
          <div className="space-y-4">
            {/* Status Card */}
            <div className="p-5 rounded-3xl bg-[#0D1220] border border-slate-800 space-y-3">
              <div className="text-xs font-bold uppercase tracking-wider text-slate-400">
                Agent Workflow Info
              </div>
              <div className="space-y-2 text-xs text-slate-300">
                <div className="flex justify-between items-center py-1 border-b border-slate-800">
                  <span className="text-slate-400">Status</span>
                  <span className="text-emerald-400 font-semibold font-mono">LIVE / ACTIVE</span>
                </div>
                <div className="flex justify-between items-center py-1 border-b border-slate-800">
                  <span className="text-slate-400">Host</span>
                  <span className="font-mono text-purple-300 truncate max-w-[140px]">
                    veeksha09.app.n8n.cloud
                  </span>
                </div>
                <div className="flex justify-between items-center py-1 border-b border-slate-800">
                  <span className="text-slate-400">Session ID</span>
                  <span className="font-mono text-cyan-300 truncate max-w-[130px]">{sessionId}</span>
                </div>
                <div className="flex justify-between items-center py-1">
                  <span className="text-slate-400">Trigger Node</span>
                  <span className="font-mono text-amber-300">@n8n/chat</span>
                </div>
              </div>
            </div>

            {/* Live Payload Inspector Toggle */}
            <div className="p-5 rounded-3xl bg-[#0D1220] border border-slate-800 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-cyan-400 flex items-center gap-1.5">
                  <Terminal className="h-3.5 w-3.5" />
                  <span>Payload Inspector</span>
                </span>
                <button
                  onClick={() => setShowInspector(!showInspector)}
                  className="text-slate-400 hover:text-white"
                >
                  {showInspector ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
                </button>
              </div>

              <p className="text-xs text-slate-400 leading-normal">
                Inspect raw HTTP POST payloads and responses sent to the n8n webhook.
              </p>

              {showInspector && (
                <div className="space-y-3 pt-2 border-t border-slate-800">
                  <div>
                    <div className="text-[10px] font-mono uppercase text-slate-500 mb-1">
                      Request Body (POST):
                    </div>
                    <pre className="p-2.5 rounded-lg bg-[#070B14] border border-slate-800 text-[10px] font-mono text-purple-300 overflow-x-auto max-h-36">
                      {lastPayloadSent
                        ? JSON.stringify(lastPayloadSent, null, 2)
                        : '// Send a message to see outgoing JSON'}
                    </pre>
                  </div>

                  <div>
                    <div className="text-[10px] font-mono uppercase text-slate-500 mb-1">
                      Response Data:
                    </div>
                    <pre className="p-2.5 rounded-lg bg-[#070B14] border border-slate-800 text-[10px] font-mono text-cyan-300 overflow-x-auto max-h-36">
                      {lastPayloadReceived
                        ? JSON.stringify(lastPayloadReceived, null, 2)
                        : '// Awaiting server response'}
                    </pre>
                  </div>
                </div>
              )}
            </div>

            {/* Quick Actions */}
            <div className="p-5 rounded-3xl bg-gradient-to-b from-[#121A2B] to-[#0D1220] border border-purple-500/30 space-y-2.5">
              <div className="text-xs font-bold text-white flex items-center gap-1.5">
                <Sparkles className="h-3.5 w-3.5 text-yellow-300" />
                <span>Try Suggested Prompts</span>
              </div>
              <div className="space-y-1.5">
                {quickPrompts.slice(2, 5).map((q, i) => (
                  <button
                    key={i}
                    onClick={() => handleSendMessage(q)}
                    className="w-full text-left p-2 rounded-xl bg-[#070B14]/80 hover:bg-purple-950/40 border border-slate-800 hover:border-purple-500/30 text-xs text-slate-300 hover:text-white transition-all cursor-pointer"
                  >
                    {q}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* TAB 2: ARCHITECTURE BLUEPRINT GUIDE */}
      {activeTabSub === 'architecture' && (
        <div className="rounded-3xl bg-[#0D1220] border border-purple-500/30 p-6 sm:p-10 shadow-2xl space-y-8">
          <div>
            <div className="text-xs font-mono font-bold uppercase tracking-wider text-cyan-400 mb-1">
              SYSTEM ARCHITECTURE
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
              How This n8n AI Agent Workflow Works
            </h2>
            <p className="mt-2 text-sm text-slate-300 leading-relaxed max-w-3xl">
              This AI Agent project connects a modern web frontend with an autonomous n8n cloud workflow that chains triggers, language models, and session memories together.
            </p>
          </div>

          {/* Visual Step-by-Step Node Flow */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="p-5 rounded-2xl bg-[#121A2B] border border-purple-500/40 relative">
              <div className="h-9 w-9 rounded-xl bg-purple-950 flex items-center justify-center text-cyan-300 font-mono font-bold text-xs mb-3 border border-purple-500/40">
                01
              </div>
              <h3 className="text-base font-bold text-white mb-1">Chat Trigger Node</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Listens at <code className="text-[11px] text-purple-300">/webhook/.../chat</code>. Receives the user's message and <code className="text-[11px] text-purple-300">sessionId</code>.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-[#121A2B] border border-indigo-500/40 relative">
              <div className="h-9 w-9 rounded-xl bg-indigo-950 flex items-center justify-center text-indigo-300 font-mono font-bold text-xs mb-3 border border-indigo-500/40">
                02
              </div>
              <h3 className="text-base font-bold text-white mb-1">AI Agent Node</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Autonomous LangChain agent reasoning over the user request, applying system prompt instructions.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-[#121A2B] border border-cyan-500/40 relative">
              <div className="h-9 w-9 rounded-xl bg-cyan-950 flex items-center justify-center text-cyan-300 font-mono font-bold text-xs mb-3 border border-cyan-500/40">
                03
              </div>
              <h3 className="text-base font-bold text-white mb-1">LLM & Memory</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Google Gemini / OpenAI model paired with Window Buffer Memory to preserve multi-turn dialogue context.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-[#121A2B] border border-emerald-500/40 relative">
              <div className="h-9 w-9 rounded-xl bg-emerald-950 flex items-center justify-center text-emerald-300 font-mono font-bold text-xs mb-3 border border-emerald-500/40">
                04
              </div>
              <h3 className="text-base font-bold text-white mb-1">JSON Response</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Outputs clean formatted response payload: <code className="text-[11px] text-emerald-300">{'{ "output": "..." }'}</code> back to the user interface.
              </p>
            </div>
          </div>

          {/* Deep Dive Section */}
          <div className="p-6 rounded-2xl bg-[#070B14] border border-slate-800 space-y-4">
            <h3 className="text-lg font-bold text-white flex items-center gap-2">
              <Sparkles className="h-4 w-4 text-cyan-400" />
              <span>Key Features of this n8n AI Agent</span>
            </h3>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-300">
              <li className="flex items-start gap-2">
                <span className="text-cyan-400 font-bold">•</span>
                <span><strong>Multi-Turn Memory:</strong> Because the frontend sends a consistent <code className="text-xs font-mono text-purple-300">sessionId</code>, the agent remembers what you said in previous turns.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-cyan-400 font-bold">•</span>
                <span><strong>Zero-CORS Express Proxy:</strong> The web app routes requests through <code className="text-xs font-mono text-purple-300">/api/n8n-agent/chat</code> to protect private instance tokens and guarantee zero browser CORS blocks.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-cyan-400 font-bold">•</span>
                <span><strong>Extensible with n8n Tools:</strong> In your n8n canvas, you can easily attach tools like Google Sheets, Calculator, Wikipedia search, or Vector Store RAG directly into the AI Agent node.</span>
              </li>
            </ul>
          </div>
        </div>
      )}

      {/* TAB 3: WORKFLOW TEMPLATE JSON */}
      {activeTabSub === 'workflow-code' && (
        <div className="rounded-3xl bg-[#0D1220] border border-purple-500/30 p-6 sm:p-10 shadow-2xl space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <div className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-400 mb-1">
                IMPORTABLE N8N TEMPLATE
              </div>
              <h2 className="text-2xl font-extrabold text-white">
                n8n Workflow JSON Specification
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 mt-1">
                Copy this JSON and paste it directly into your n8n editor canvas (Ctrl+V / Cmd+V) to reproduce this AI Agent!
              </p>
            </div>

            <button
              onClick={() => copyToClipboard(JSON.stringify(sampleWorkflowJson, null, 2), 999)}
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-purple-600 hover:bg-purple-500 text-white text-xs font-bold transition-all cursor-pointer whitespace-nowrap self-start"
            >
              {copiedIndex === 999 ? (
                <>
                  <Check className="h-4 w-4 text-emerald-400" />
                  <span>Copied Workflow JSON</span>
                </>
              ) : (
                <>
                  <Copy className="h-4 w-4" />
                  <span>Copy n8n Workflow JSON</span>
                </>
              )}
            </button>
          </div>

          <pre className="p-5 rounded-2xl bg-[#070B14] border border-slate-800 text-xs font-mono text-cyan-200 overflow-x-auto max-h-[500px] leading-relaxed">
            <code>{JSON.stringify(sampleWorkflowJson, null, 2)}</code>
          </pre>
        </div>
      )}
    </div>
  );
};
