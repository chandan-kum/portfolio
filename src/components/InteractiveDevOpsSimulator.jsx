import React, { useState } from 'react';
import { 
  GitCommit, 
  ShieldAlert, 
  Box, 
  RefreshCw, 
  Server, 
  Activity, 
  Play, 
  RotateCcw, 
  CheckCircle2, 
  Terminal 
} from 'lucide-react';
import { resumeData } from '../data/resumeData';

const iconMap = {
  GitCommit,
  ShieldAlert,
  Box,
  RefreshCw,
  Server,
  Activity
};

export default function InteractiveDevOpsSimulator() {
  const stages = resumeData.devopsPipelineDemo;
  const [activeStageIndex, setActiveStageIndex] = useState(0);
  const [isSimulating, setIsSimulating] = useState(false);

  const activeStage = stages[activeStageIndex];
  const ActiveIcon = iconMap[activeStage.icon] || Server;

  const runSimulation = () => {
    setIsSimulating(true);
    let index = 0;
    const interval = setInterval(() => {
      index++;
      if (index >= stages.length) {
        clearInterval(interval);
        setIsSimulating(false);
      } else {
        setActiveStageIndex(index);
      }
    }, 1500);
  };

  return (
    <div className="rounded-2xl bg-slate-900/90 border border-slate-800 p-4 sm:p-8 backdrop-blur-xl">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 sm:mb-8">
        <div>
          <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 mb-1">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping"></span>
            LIVE PIPELINE SIMULATOR
          </div>
          <h3 className="text-xl sm:text-2xl font-bold text-white">
            GitOps CI/CD & Kubernetes Pipeline
          </h3>
          <p className="text-xs sm:text-sm text-slate-400 mt-1">
            Experience Chandan's automated deployment flow from commit to cluster monitoring.
          </p>
        </div>

        <div className="flex items-center gap-2 self-stretch sm:self-auto">
          <button
            onClick={runSimulation}
            disabled={isSimulating}
            className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-bold text-xs transition-all disabled:opacity-50 cursor-pointer shadow-md shadow-cyan-500/20"
          >
            <Play className={`w-3.5 h-3.5 ${isSimulating ? 'animate-spin' : ''}`} />
            {isSimulating ? 'Simulating...' : 'Run Automated Flow'}
          </button>
          
          <button
            onClick={() => setActiveStageIndex(0)}
            className="p-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs transition-colors shrink-0"
            title="Reset"
          >
            <RotateCcw className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Stepper Stages */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 sm:gap-3 mb-6 sm:mb-8">
        {stages.map((stage, idx) => {
          const StageIcon = iconMap[stage.icon] || Server;
          const isSelected = activeStageIndex === idx;
          const isPassed = activeStageIndex > idx;

          return (
            <button
              key={stage.id}
              onClick={() => setActiveStageIndex(idx)}
              className={`p-3 rounded-xl border text-left transition-all cursor-pointer relative ${
                isSelected
                  ? 'bg-cyan-500/15 border-cyan-500 text-white shadow-lg shadow-cyan-500/10'
                  : isPassed
                  ? 'bg-slate-950/60 border-emerald-500/30 text-slate-300'
                  : 'bg-slate-950/40 border-slate-800 text-slate-400 hover:border-slate-700'
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <div className={`w-7 h-7 rounded-lg flex items-center justify-center ${
                  isSelected ? 'bg-cyan-500 text-slate-950 font-bold' : isPassed ? 'bg-emerald-500/20 text-emerald-400' : 'bg-slate-800 text-slate-400'
                }`}>
                  <StageIcon className="w-3.5 h-3.5" />
                </div>
                <span className="text-[10px] font-mono font-semibold text-slate-500">0{idx + 1}</span>
              </div>
              <h4 className="text-xs font-bold font-heading truncate text-slate-200">{stage.title}</h4>
              <p className="text-[10px] font-mono text-cyan-400/90 truncate mt-0.5">{stage.tool}</p>
            </button>
          );
        })}
      </div>

      {/* Active Stage Terminal Inspection */}
      <div className="rounded-xl bg-slate-950 border border-slate-800 overflow-hidden font-mono text-xs shadow-inner">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between px-4 py-2.5 bg-slate-900 border-b border-slate-800 gap-2">
          <div className="flex items-center gap-2 min-w-0">
            <Terminal className="w-4 h-4 text-cyan-400 shrink-0" />
            <span className="text-slate-300 font-semibold truncate text-[11px] sm:text-xs">
              Stage 0{activeStageIndex + 1}: {activeStage.title} ({activeStage.tool})
            </span>
          </div>
          <span className="self-start sm:self-auto inline-flex items-center gap-1.5 px-2 py-0.5 rounded text-[10px] bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 shrink-0">
            <CheckCircle2 className="w-3 h-3" />
            Status: {activeStage.status}
          </span>
        </div>

        <div className="p-4 space-y-3">
          <div>
            <span className="text-slate-500 text-[11px] block mb-1">COMMAND / TRIGGER EXECUTION:</span>
            <div className="p-2.5 rounded bg-slate-900/90 text-cyan-300 border border-slate-800/80 text-[11px] break-all">
              <span className="text-emerald-400 mr-2">$</span>
              {activeStage.detail}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 pt-2 text-[11px]">
            <div className="p-2.5 rounded bg-slate-900/60 border border-slate-800">
              <span className="text-slate-500 block">Security & Policy</span>
              <span className="text-slate-200 font-semibold mt-0.5 block">Trivy Vulnerability Gate OK</span>
            </div>
            <div className="p-2.5 rounded bg-slate-900/60 border border-slate-800">
              <span className="text-slate-500 block">Target Cluster</span>
              <span className="text-slate-200 font-semibold mt-0.5 block">AWS EKS 1.30 / GKE Autopilot</span>
            </div>
            <div className="p-2.5 rounded bg-slate-900/60 border border-slate-800">
              <span className="text-slate-500 block">Sync Reconciliation</span>
              <span className="text-emerald-400 font-semibold mt-0.5 block">Zero-Downtime Rolling Update</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
