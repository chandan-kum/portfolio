import React, { useState, useEffect } from 'react';
import { 
  Cpu, 
  ArrowRight, 
  Download, 
  Mail, 
  Phone, 
  MapPin, 
  CheckCircle2, 
  Play, 
  Layers,
  Globe
} from 'lucide-react';
import { Linkedin } from './Icons';
import { resumeData } from '../data/resumeData';

export default function Hero({ onOpenResume }) {
  const titles = [
    "DevOps & Cloud Engineer",
    "Kubernetes & GitOps Specialist",
    "GenAI & Hybrid RAG Architect",
    "FastAPI & Real-Time Backend Developer"
  ];
  const [titleIndex, setTitleIndex] = useState(0);
  const [activeTab, setActiveTab] = useState('k8s');

  useEffect(() => {
    const interval = setInterval(() => {
      setTitleIndex((prev) => (prev + 1) % titles.length);
    }, 3200);
    return () => clearInterval(interval);
  }, [titles.length]);

  return (
    <section id="about" className="relative pt-24 sm:pt-32 pb-16 sm:pb-24 overflow-hidden bg-slate-950">
      {/* Background radial glow & grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-60"></div>
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute top-1/3 -right-40 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute -bottom-20 left-1/3 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headline, Bio & Actions */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Availability Badge */}
            <div className="inline-flex items-center gap-2.5 px-3 py-1.5 rounded-full bg-slate-900/90 border border-slate-800 text-xs text-slate-300 shadow-inner">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-cyan-500"></span>
              </span>
              <span className="font-mono text-cyan-300 font-semibold tracking-wide">STATUS:</span>
              <span className="text-slate-300">{resumeData.personal.availability}</span>
            </div>

            {/* Main Heading */}
            <div className="space-y-2">
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight">
                Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-blue-500">{resumeData.personal.name}</span>
              </h1>
              
              {/* Animated Rotating Role */}
              <div className="min-h-[2.5rem] sm:min-h-[3rem] flex items-center">
                <span className="text-lg sm:text-2xl lg:text-3xl font-semibold text-slate-300 font-mono flex items-center gap-2">
                  <span className="text-cyan-400">&gt;</span>
                  <span className="text-cyan-300 border-b-2 border-cyan-400 pb-0.5 animate-pulse break-words">
                    {titles[titleIndex]}
                  </span>
                </span>
              </div>
            </div>

            {/* Description */}
            <p className="text-slate-300 text-sm sm:text-lg leading-relaxed max-w-2xl">
              Specialized in <span className="text-cyan-300 font-semibold">AWS & GCP Cloud Architecture</span>, 
              declarative <span className="text-sky-300 font-semibold">GitOps on Kubernetes (EKS & GKE)</span>, 
              Infrastructure as Code via <span className="text-cyan-300 font-semibold">Terraform</span>, and production-ready 
              <span className="text-purple-300 font-semibold"> Hybrid RAG (ChromaDB + Neo4j)</span> and Agentic AI workflows.
            </p>

            {/* Quick Contact & Location Badges */}
            <div className="flex flex-wrap items-center gap-2 sm:gap-3 pt-1 text-xs font-mono text-slate-400">
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-slate-900 border border-slate-800 text-slate-300">
                <MapPin className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                <span>Ghaziabad, India</span>
              </div>
              <a 
                href={`mailto:${resumeData.personal.email}`}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-slate-900 border border-slate-800 text-slate-300 hover:text-cyan-300 hover:border-cyan-500/40 transition-colors break-all"
              >
                <Mail className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                <span>{resumeData.personal.email}</span>
              </a>
              <a 
                href={`tel:${resumeData.personal.rawPhone}`}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-slate-900 border border-slate-800 text-slate-300 hover:text-cyan-300 hover:border-cyan-500/40 transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                <span>{resumeData.personal.phone}</span>
              </a>
              <a 
                href={resumeData.personal.linkedin}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-slate-900 border border-slate-800 text-slate-300 hover:text-cyan-300 hover:border-cyan-500/40 transition-colors"
              >
                <Linkedin className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                <span>LinkedIn</span>
              </a>
              <a 
                href={resumeData.personal.portfolio}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-slate-900 border border-slate-800 text-slate-300 hover:text-cyan-300 hover:border-cyan-500/40 transition-colors"
              >
                <Globe className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                <span>Portfolio</span>
              </a>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-3 sm:gap-4 pt-4">
              <a
                href="#projects"
                className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 via-sky-500 to-blue-600 text-slate-950 font-bold text-sm shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/45 hover:scale-[1.02] transition-all text-center"
              >
                View DevOps & AI Projects
                <ArrowRight className="w-4 h-4" />
              </a>

              <button
                onClick={onOpenResume}
                className="flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-semibold text-sm border border-slate-700 hover:border-cyan-500/50 transition-all shadow-sm cursor-pointer text-center"
              >
                <Download className="w-4 h-4 text-cyan-400" />
                View & Print Resume
              </button>

              <a
                href="#demos"
                className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-slate-300 hover:text-cyan-400 text-sm font-medium hover:bg-slate-900/60 transition-colors text-center"
              >
                <Play className="w-4 h-4 text-emerald-400" />
                Live Architecture Visualizer
              </a>
            </div>

          </div>

          {/* Right Column: Interactive Terminal & Cluster Status */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl bg-slate-900/90 border border-slate-800 shadow-2xl shadow-cyan-500/5 backdrop-blur-xl overflow-hidden">
              
              {/* Terminal Title Bar */}
              <div className="flex items-center justify-between px-4 py-3 bg-slate-950/80 border-b border-slate-800">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-amber-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80"></div>
                  <span className="ml-2 font-mono text-xs text-slate-400">chandan@cluster-control:~</span>
                </div>
                
                {/* Tabs */}
                <div className="flex items-center gap-1 font-mono text-[11px]">
                  <button
                    onClick={() => setActiveTab('k8s')}
                    className={`px-2 py-0.5 rounded transition-colors ${
                      activeTab === 'k8s' ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40' : 'text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    K8s EKS
                  </button>
                  <button
                    onClick={() => setActiveTab('rag')}
                    className={`px-2 py-0.5 rounded transition-colors ${
                      activeTab === 'rag' ? 'bg-purple-500/20 text-purple-300 border border-purple-500/40' : 'text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    Hybrid RAG
                  </button>
                  <button
                    onClick={() => setActiveTab('argocd')}
                    className={`px-2 py-0.5 rounded transition-colors ${
                      activeTab === 'argocd' ? 'bg-blue-500/20 text-blue-300 border border-blue-500/40' : 'text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    GitOps
                  </button>
                </div>
              </div>

              {/* Terminal Body */}
              <div className="p-4 font-mono text-xs text-slate-300 space-y-3 min-h-[310px] overflow-x-auto">
                {activeTab === 'k8s' && (
                  <div className="space-y-2">
                    <p className="text-slate-400">
                      <span className="text-emerald-400">$</span> kubectl get nodes -o wide
                    </p>
                    <div className="bg-slate-950/60 p-2.5 rounded border border-slate-800/80 text-[11px] leading-relaxed text-slate-300">
                      <div className="text-slate-400 font-bold border-b border-slate-800 pb-1 mb-1 grid grid-cols-12 gap-1">
                        <span className="col-span-5">NAME</span>
                        <span className="col-span-3">STATUS</span>
                        <span className="col-span-2">ROLES</span>
                        <span className="col-span-2">VERSION</span>
                      </div>
                      <div className="grid grid-cols-12 gap-1 text-slate-300">
                        <span className="col-span-5 text-cyan-300">ip-10-0-1-42.ec2</span>
                        <span className="col-span-3 text-emerald-400">Ready</span>
                        <span className="col-span-2">worker</span>
                        <span className="col-span-2">v1.30.2</span>
                      </div>
                      <div className="grid grid-cols-12 gap-1 text-slate-300">
                        <span className="col-span-5 text-cyan-300">ip-10-0-2-89.ec2</span>
                        <span className="col-span-3 text-emerald-400">Ready</span>
                        <span className="col-span-2">worker</span>
                        <span className="col-span-2">v1.30.2</span>
                      </div>
                      <div className="grid grid-cols-12 gap-1 text-slate-300">
                        <span className="col-span-5 text-cyan-300">ip-10-0-3-11.ec2</span>
                        <span className="col-span-3 text-emerald-400">Ready</span>
                        <span className="col-span-2">worker</span>
                        <span className="col-span-2">v1.30.2</span>
                      </div>
                    </div>

                    <p className="text-slate-400 pt-1">
                      <span className="text-emerald-400">$</span> helm status travel-booking-prod
                    </p>
                    <div className="bg-slate-950/60 p-2 rounded border border-slate-800/80 text-[11px] space-y-1">
                      <p><span className="text-slate-500">STATUS:</span> <span className="text-emerald-400 font-semibold">deployed</span></p>
                      <p><span className="text-slate-500">REVISION:</span> 14</p>
                      <p><span className="text-slate-500">TEST SUITE:</span> None</p>
                      <p><span className="text-slate-500">HPA TARGET:</span> 5/15 Pods active (CPU avg: 34%)</p>
                    </div>
                  </div>
                )}

                {activeTab === 'rag' && (
                  <div className="space-y-2">
                    <p className="text-slate-400">
                      <span className="text-emerald-400">$</span> python3 -m rag_engine.query --type=hybrid
                    </p>
                    <div className="bg-slate-950/60 p-2.5 rounded border border-slate-800/80 text-[11px] space-y-1.5">
                      <div className="text-purple-300 font-semibold flex items-center gap-1.5">
                        <Cpu className="w-3.5 h-3.5 text-purple-400" />
                        [Vector Store] ChromaDB dense query: 1536 dim
                      </div>
                      <p className="text-slate-400 pl-4 border-l border-purple-500/30">
                        &rarr; Cosine similarity top-k: 0.942, 0.918
                      </p>
                      <div className="text-sky-300 font-semibold flex items-center gap-1.5 pt-1">
                        <Layers className="w-3.5 h-3.5 text-sky-400" />
                        [Knowledge Graph] Neo4j Cypher multi-hop traversal
                      </div>
                      <p className="text-slate-400 pl-4 border-l border-sky-500/30">
                        &rarr; MATCH (s:Service)-[:DEPENDS_ON]-&gt;(d:Database) RETURN path
                      </p>
                      <div className="text-emerald-300 font-semibold flex items-center gap-1.5 pt-1">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                        [Llama 2] Synthesis complete in 142ms
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === 'argocd' && (
                  <div className="space-y-2">
                    <p className="text-slate-400">
                      <span className="text-emerald-400">$</span> argocd app list
                    </p>
                    <div className="bg-slate-950/60 p-2.5 rounded border border-slate-800/80 text-[11px] space-y-2">
                      <div className="flex items-center justify-between pb-1 border-b border-slate-800 text-slate-400 font-semibold">
                        <span>APPLICATION</span>
                        <span>HEALTH</span>
                        <span>SYNC</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-cyan-300">eks-prod-ingress</span>
                        <span className="text-emerald-400 flex items-center gap-1"><span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>Healthy</span>
                        <span className="text-emerald-400">Synced</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-cyan-300">prometheus-stack</span>
                        <span className="text-emerald-400 flex items-center gap-1"><span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>Healthy</span>
                        <span className="text-emerald-400">Synced</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-cyan-300">fastapi-rag-api</span>
                        <span className="text-emerald-400 flex items-center gap-1"><span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>Healthy</span>
                        <span className="text-emerald-400">Synced</span>
                      </div>
                    </div>
                    <p className="text-[11px] text-slate-400 pt-1">
                      <span className="text-emerald-400">&check;</span> ArgoCD Image Updater: listening on GHCR webhook
                    </p>
                  </div>
                )}

                {/* Footer prompt */}
                <div className="pt-2 border-t border-slate-800/60 flex items-center justify-between text-[11px] text-slate-500">
                  <span>Cluster: us-east-1a-eks</span>
                  <span className="text-cyan-400 font-semibold">Prometheus: 0 Alerts Active</span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
