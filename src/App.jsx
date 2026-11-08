import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import StatsSection from './components/StatsSection';
import SkillsSection from './components/SkillsSection';
import ProjectsSection from './components/ProjectsSection';
import DemosSection from './components/DemosSection';
import ExperienceSection from './components/ExperienceSection';
import EducationAndCerts from './components/EducationAndCerts';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import ResumeModal from './components/ResumeModal';

export default function App() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col selection:bg-cyan-500 selection:text-slate-950">
      {/* Navigation Header */}
      <Navbar onOpenResume={() => setIsResumeOpen(true)} />

      {/* Main Content */}
      <main className="flex-grow">
        {/* Hero Section with Interactive Status Terminal */}
        <Hero onOpenResume={() => setIsResumeOpen(true)} />

        {/* Stats Metrics Counter */}
        <StatsSection />

        {/* Technical Skills Matrix */}
        <SkillsSection />

        {/* Featured Projects with Architecture Deep-Dives */}
        <ProjectsSection />

        {/* Interactive DevOps Pipeline & Architecture Simulators */}
        <DemosSection />

        {/* Career Experience & Contributions */}
        <ExperienceSection />

        {/* Academic Credentials & Certifications */}
        <EducationAndCerts />

        {/* Direct Contact & Collaboration Form */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer onOpenResume={() => setIsResumeOpen(true)} />

      {/* Full Resume View & Print Modal */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />
    </div>
  );
}
