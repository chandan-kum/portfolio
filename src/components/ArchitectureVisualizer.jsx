import React, { useState } from 'react';
import { 
  Network, 
  Cloud, 
  Cpu, 
  ShieldCheck 
} from 'lucide-react';

const topologies = {
  k8s: {
    id: 'k8s',
    title: 'AWS EKS GitOps Production Topology',
    badge: 'Kubernetes 1.30 • AWS EKS',
    description: 'High-availability container architecture with automated ingress, GitOps reconciliation, and horizontal autoscaling.',
    nodes: [
      { id: 'dns', title: 'Route 53 & ACM', type: 'Ingress / DNS', detail: 'Global DNS routing with automated TLS certificate management via AWS ACM.', status: 'Active (0.2ms)' },
      { id: 'alb', title: 'AWS ALB Controller', type: 'Load Balancing', detail: 'Application Load Balancer distributing traffic to target Kubernetes Gateway APIs.', status: 'Healthy (24 Targets)' },
      { id: 'gateway', title: 'K8s Gateway API', type: 'Traffic Routing', detail: 'Declarative L7 routing rules directing traffic to microservice namespaces.', status: 'Configured' },
      { id: 'pods', title: 'Worker Pods (HPA)', type: 'Compute / Autoscaling', detail: 'Containerized pods managed by Helm charts, dynamically scaling between 3 to 15 replicas based on CPU & Memory pressure.', status: '3/15 Replicas' },
      { id: 'gitops', title: 'ArgoCD Controller', type: 'GitOps Engine', detail: 'Continuously detects Git state discrepancies and reconciles manifests within seconds.', status: 'Synced & Healthy' },
      { id: 'observability', title: 'Prometheus & Grafana', type: 'Telemetry & SRE', detail: 'Scraping pod metrics every 15s; Alertmanager webhooks connected to Slack.', status: 'SLO 99.98%' }
    ]
  },
  rag: {
    id: 'rag',
    title: 'Dual-Retrieval Hybrid RAG Architecture',
    badge: 'ChromaDB • Neo4j • Llama 2',
    description: 'Combining dense vector semantic search with multi-hop knowledge graph queries to eliminate hallucinations.',
    nodes: [
      { id: 'query', title: 'User Input / Query API', type: 'FastAPI Gateway', detail: 'Asynchronous endpoint receiving natural language queries with query expansion.', status: 'Latency: 12ms' },
      { id: 'embed', title: 'Embedding Model', type: 'Sentence Transformers', detail: 'Converts unstructured query into 1536-dimensional dense vector embeddings.', status: 'Inference: 18ms' },
      { id: 'chroma', title: 'ChromaDB Vector Store', type: 'Dense Retrieval', detail: 'Executes cosine similarity search across chunked documentation to retrieve top-k context.', status: 'Cosine: 0.94' },
      { id: 'neo4j', title: 'Neo4j Knowledge Graph', type: 'Graph Retrieval', detail: 'Cypher queries traverse entity-relationship triples (Service -> DependsOn -> Database) up to 2 hops.', status: 'Graph Depth: 2' },
      { id: 'fusion', title: 'Context Fusion Engine', type: 'Re-ranking & Deduplication', detail: 'Merges vector text chunks with structured graph triples and strips redundant context.', status: 'Dedup: 100%' },
      { id: 'llm', title: 'Llama 2 (Hardened Container)', type: 'LLM Generation', detail: 'Generates grounded, citation-backed response from a private container registry.', status: 'Tokens: 48 tok/s' }
    ]
  }
};

export default function ArchitectureVisualizer() {
  const [activeTopologyKey, setActiveTopologyKey] = useState('k8s');
  const [selectedNode, setSelectedNode] = useState(0);

  const currentTopology = topologies[activeTopologyKey];
  const activeNode = currentTopology.nodes[selectedNode] || currentTopology.nodes[0];

  const handleSwitchTopology = (key) => {
    setActiveTopologyKey(key);
    setSelectedNode(0);
  };

  return (
    <div className="rounded-2xl bg-slate-900/90 border border-slate-800 p-4 sm:p-8 backdrop-blur-xl mt-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 sm:mb-8">
        <div>
          <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 mb-1">
            <Network className="w-4 h-4" />
            TOPOLOGY & INTERACTIVE SYSTEM SCHEMATICS
          </div>
          <h3 className="text-xl sm:text-2xl font-bold text-white">
            Interactive Architecture Flow
          </h3>
          <p className="text-xs sm:text-sm text-slate-400 mt-1">
            Inspect the topology of Chandan's AWS EKS GitOps cluster and Hybrid RAG retrieval pipeline.
          </p>
        </div>

        {/* Switcher Buttons */}
        <div className="flex items-center gap-1.5 bg-slate-950 p-1.5 rounded-xl border border-slate-800 self-stretch sm:self-auto">
          <button
            onClick={() => handleSwitchTopology('k8s')}
            className={`flex-1 sm:flex-none flex items-center justify-center gap-2 px-3 py-2 rounded-lg text-xs font-mono font-medium transition-all cursor-pointer ${
              activeTopologyKey === 'k8s'
                ? 'bg-cyan-500 text-slate-950 font-bold shadow-md shadow-cyan-500/20'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <Cloud className="w-3.5 h-3.5" />
            AWS EKS GitOps
          </button>

          <button
            onClick={() => handleSwitchTopology('rag')}
            className={`flex-1 sm:flex-none flex items-center justify-center gap-2 px-3 py-2 rounded-lg text-xs font-mono font-medium transition-all cursor-pointer ${
              activeTopologyKey === 'rag'
                ? 'bg-purple-500 text-slate-950 font-bold shadow-md shadow-purple-500/20'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <Cpu className="w-3.5 h-3.5" />
            Hybrid RAG Graph
          </button>
        </div>
      </div>

      {/* Description & Badge */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-6 pb-4 border-b border-slate-800">
        <div>
          <h4 className="text-base font-bold text-white font-heading">{currentTopology.title}</h4>
          <p className="text-xs text-slate-400 mt-0.5">{currentTopology.description}</p>
        </div>
        <span className="self-start sm:self-auto text-[11px] font-mono px-3 py-1 rounded-full bg-slate-950 text-cyan-400 border border-cyan-500/30">
          {currentTopology.badge}
        </span>
      </div>

      {/* Architecture Flowchart Nodes */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 mb-6">
        {currentTopology.nodes.map((node, idx) => {
          const isSelected = selectedNode === idx;
          return (
            <button
              key={node.id}
              onClick={() => setSelectedNode(idx)}
              className={`p-3 rounded-xl border text-left transition-all cursor-pointer relative ${
                isSelected
                  ? activeTopologyKey === 'k8s'
                    ? 'bg-cyan-500/15 border-cyan-400 text-white shadow-lg shadow-cyan-500/10'
                    : 'bg-purple-500/15 border-purple-400 text-white shadow-lg shadow-purple-500/10'
                  : 'bg-slate-950/60 border-slate-800 text-slate-400 hover:border-slate-700 hover:text-slate-200'
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-[10px] font-mono font-bold text-cyan-400">Step 0{idx + 1}</span>
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              </div>
              <h5 className="text-xs font-bold font-heading truncate text-slate-200">{node.title}</h5>
              <p className="text-[10px] font-mono text-slate-500 truncate mt-0.5">{node.type}</p>
            </button>
          );
        })}
      </div>

      {/* Detailed Node Inspector Card */}
      <div className="rounded-xl bg-slate-950 border border-slate-800 p-5 font-mono text-xs shadow-inner">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-3 border-b border-slate-800 gap-2 mb-3">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-cyan-400"></span>
            <span className="font-bold text-sm text-white">{activeNode.title}</span>
            <span className="text-slate-500">[{activeNode.type}]</span>
          </div>

          <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded text-[11px] bg-emerald-500/10 text-emerald-300 border border-emerald-500/30">
            <ShieldCheck className="w-3.5 h-3.5" />
            {activeNode.status}
          </span>
        </div>

        <p className="text-slate-300 text-xs sm:text-sm font-sans leading-relaxed mb-4">
          {activeNode.detail}
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-3 border-t border-slate-900 text-[11px] text-slate-400">
          <div>
            <span className="block text-slate-500">Node Cluster Role:</span>
            <span className="text-slate-200 font-semibold">{activeNode.type}</span>
          </div>
          <div>
            <span className="block text-slate-500">Fault Tolerance:</span>
            <span className="text-emerald-400 font-semibold">Multi-AZ Redundant</span>
          </div>
          <div>
            <span className="block text-slate-500">Deployment Manager:</span>
            <span className="text-cyan-400 font-semibold">Terraform & ArgoCD</span>
          </div>
        </div>
      </div>
    </div>
  );
}
