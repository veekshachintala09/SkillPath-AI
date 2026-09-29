import React from 'react';
import { RoadmapProvider, useRoadmap } from './context/RoadmapContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ExploreSkills } from './components/ExploreSkills';
import { RoadmapTimeline } from './components/RoadmapTimeline';
import { ProgressDashboard } from './components/ProgressDashboard';
import { AboutSection } from './components/AboutSection';
import { LearningPanel } from './components/LearningPanel';
import { PersonalizationModal } from './components/PersonalizationModal';
import { CustomSkillModal } from './components/CustomSkillModal';
import { N8nAgentProject } from './components/N8nAgentProject';
import { N8nFloatingWidget } from './components/N8nFloatingWidget';
import { Footer } from './components/Footer';

function MainAppContent() {
  const { activeTab } = useRoadmap();

  return (
    <div className="min-h-screen flex flex-col bg-[#070B14] text-[#F8FAFC]">
      {/* Top Navbar */}
      <Navbar />

      {/* Main View Router */}
      <main className="flex-1">
        {activeTab === 'home' && (
          <>
            <Hero />
            <ExploreSkills />
          </>
        )}

        {activeTab === 'explore' && <ExploreSkills />}

        {activeTab === 'roadmap' && <RoadmapTimeline />}

        {activeTab === 'n8n-agent' && <N8nAgentProject />}

        {activeTab === 'progress' && <ProgressDashboard />}

        {activeTab === 'about' && <AboutSection />}
      </main>

      {/* Global Interactive Modals & Drawers */}
      <LearningPanel />
      <PersonalizationModal />
      <CustomSkillModal />

      {/* Floating n8n AI Agent Chat Widget */}
      <N8nFloatingWidget />

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <RoadmapProvider>
      <MainAppContent />
    </RoadmapProvider>
  );
}
