import React from 'react';
import { X, CheckCircle2, Layers } from 'lucide-react';

export default function ProjectDetailModal({ project, onClose }) {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/80 backdrop-blur-md animate-fade-in overflow-y-auto">
      <div className="relative w-full max-w-3xl bg-slate-900 border border-slate-700/80 rounded-2xl shadow-2xl p-4 sm:p-8 max-h-[90vh] overflow-y-auto">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 sm:top-5 sm:right-5 p-2 rounded-xl bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700 transition-colors"
          aria-label="Close project modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="space-y-2 pr-10 mb-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/30 text-xs font-mono font-medium">
            {project.category}
          </div>
          <h3 className="text-xl sm:text-3xl font-extrabold text-white">
            {project.title}
          </h3>
          <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
            {project.subtitle}
          </p>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 sm:gap-3 mb-6">
          {project.metrics.map((m) => (
            <div key={m.label} className="p-3 rounded-xl bg-slate-950/70 border border-slate-800 text-center">
              <span className="block text-xs font-mono text-slate-400">{m.label}</span>
              <span className="block text-sm sm:text-base font-bold text-cyan-400 mt-0.5">{m.value}</span>
            </div>
          ))}
        </div>

        {/* Architecture Flow Breakdown */}
        {project.architectureSteps && (
          <div className="mb-6 space-y-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-slate-300 font-mono flex items-center gap-2">
              <Layers className="w-4 h-4 text-cyan-400" />
              Step-by-Step Architecture Pipeline
            </h4>
            <div className="space-y-2.5">
              {project.architectureSteps.map((step, idx) => (
                <div 
                  key={step.step}
                  className="flex items-start gap-3 p-3 rounded-xl bg-slate-950/50 border border-slate-800/80 hover:border-cyan-500/30 transition-colors"
                >
                  <div className="w-6 h-6 rounded-full bg-cyan-500/20 text-cyan-400 flex items-center justify-center text-xs font-mono font-bold shrink-0 mt-0.5">
                    {idx + 1}
                  </div>
                  <div>
                    <h5 className="text-xs font-bold text-slate-200 font-mono">{step.step}</h5>
                    <p className="text-xs text-slate-400 mt-0.5 leading-relaxed">{step.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Detailed Bullet Points */}
        <div className="mb-6 space-y-3">
          <h4 className="text-sm font-bold uppercase tracking-wider text-slate-300 font-mono flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            Key Technical Implementations
          </h4>
          <ul className="space-y-2">
            {project.bulletPoints.map((point, idx) => (
              <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-300 leading-relaxed">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shrink-0 mt-1.5"></span>
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Tech Stack Pills */}
        <div className="pt-4 border-t border-slate-800">
          <span className="block text-xs font-mono text-slate-400 mb-2">Technologies Used:</span>
          <div className="flex flex-wrap gap-1.5">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-1 rounded-lg bg-slate-800/80 text-cyan-300 border border-slate-700/80 text-xs font-mono"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Footer Actions */}
        <div className="mt-6 flex justify-end gap-3">
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold transition-colors cursor-pointer"
          >
            Close Overview
          </button>
        </div>

      </div>
    </div>
  );
}
