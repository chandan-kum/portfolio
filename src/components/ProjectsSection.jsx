import React, { useState } from 'react';
import { 
  ExternalLink, 
  ArrowRight, 
  Layers, 
  Cpu, 
  Cloud 
} from 'lucide-react';
import { resumeData } from '../data/resumeData';
import ProjectDetailModal from './ProjectDetailModal';

export default function ProjectsSection() {
  const [filter, setFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects = resumeData.projects.filter((p) => {
    if (filter === 'All') return true;
    return p.category === filter;
  });

  return (
    <section id="projects" className="py-20 bg-slate-900/30 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono uppercase tracking-wider">
              <Layers className="w-3.5 h-3.5" />
              Engineered Architectures
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Featured Cloud & AI Projects
            </h2>
            <p className="text-slate-400 text-sm sm:text-base max-w-2xl leading-relaxed">
              Production-tested systems demonstrating enterprise GitOps, automated multi-stage CI/CD, and cutting-edge Hybrid RAG graphs.
            </p>
          </div>

          {/* Filter Buttons */}
          <div className="flex items-center gap-2 bg-slate-950 p-1.5 rounded-xl border border-slate-800 self-start md:self-auto">
            {['All', 'DevOps & Cloud', 'GenAI & Backend'].map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all cursor-pointer ${
                  filter === cat
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 font-bold shadow-md shadow-cyan-500/20'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="relative rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-cyan-500/40 p-5 sm:p-8 flex flex-col justify-between transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/10 group"
            >
              <div>
                {/* Top Category & Status */}
                <div className="flex items-center justify-between mb-4">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-mono font-medium bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                    {project.category === 'DevOps & Cloud' ? (
                      <Cloud className="w-3 h-3" />
                    ) : (
                      <Cpu className="w-3 h-3" />
                    )}
                    {project.category}
                  </span>
                  
                  <span className="text-[11px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                    Production Ready
                  </span>
                </div>

                {/* Project Title */}
                <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-cyan-300 transition-colors mb-2">
                  {project.title}
                </h3>

                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-5">
                  {project.subtitle}
                </p>

                {/* Key Metrics Chips */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 py-3 px-3.5 mb-5 rounded-xl bg-slate-950/70 border border-slate-800/80">
                  {project.metrics.map((m) => (
                    <div key={m.label} className="text-center py-1 sm:py-0 border-b sm:border-b-0 border-slate-800/60 last:border-b-0">
                      <span className="block text-[10px] font-mono text-slate-500">{m.label}</span>
                      <span className="block text-xs font-bold text-slate-200 truncate mt-0.5">{m.value}</span>
                    </div>
                  ))}
                </div>

                {/* Bullet Points Preview */}
                <ul className="space-y-2 mb-6">
                  {project.bulletPoints.slice(0, 3).map((bp, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs text-slate-400 leading-relaxed">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shrink-0 mt-1.5"></span>
                      <span className="line-clamp-2">{bp}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                {/* Tech Tags */}
                <div className="flex flex-wrap gap-1.5 mb-6 pt-4 border-t border-slate-800/80">
                  {project.technologies.slice(0, 7).map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 rounded bg-slate-950 text-slate-300 border border-slate-800 text-[11px] font-mono"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 7 && (
                    <span className="px-2 py-0.5 rounded bg-slate-950 text-slate-500 border border-slate-800 text-[11px] font-mono">
                      +{project.technologies.length - 7} more
                    </span>
                  )}
                </div>

                {/* Card Action */}
                <div className="flex items-center justify-between">
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-cyan-400 hover:text-cyan-300 group-hover:underline cursor-pointer"
                  >
                    Deep Dive Architecture & Pipeline
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </button>

                  <button
                    onClick={() => setSelectedProject(project)}
                    className="p-2 rounded-lg bg-slate-800 text-slate-300 hover:text-white hover:bg-slate-700 transition-colors"
                    title="View details"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </button>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* Modal */}
      {selectedProject && (
        <ProjectDetailModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
}
