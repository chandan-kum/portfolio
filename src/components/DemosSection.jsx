import React from 'react';
import { Sparkles } from 'lucide-react';
import InteractiveDevOpsSimulator from './InteractiveDevOpsSimulator';
import ArchitectureVisualizer from './ArchitectureVisualizer';

export default function DemosSection() {
  return (
    <section id="demos" className="py-20 bg-slate-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            Interactive Engineering Demonstrations
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Live Architecture & Pipeline Playground
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Test and interact with simulated representations of Chandan's GitOps CI/CD delivery pipeline and cloud-native architecture.
          </p>
        </div>

        {/* 1. DevOps Pipeline Simulator */}
        <InteractiveDevOpsSimulator />

        {/* 2. Interactive Topology Visualizer */}
        <ArchitectureVisualizer />

      </div>
    </section>
  );
}
