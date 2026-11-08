import React, { useState } from 'react';
import { X, Printer, Copy, Check, FileText, Mail, Phone, Globe } from 'lucide-react';
import { Linkedin } from './Icons';
import { resumeData } from '../data/resumeData';

export default function ResumeModal({ isOpen, onClose }) {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleCopyText = () => {
    const text = `
CHANDAN KUMAR
Location: Ghaziabad, India
Email: ${resumeData.personal.email}
LinkedIn: ${resumeData.personal.linkedin}
Portfolio: ${resumeData.personal.portfolio}
Phone: ${resumeData.personal.phone}

TECHNICAL SKILLS:
- Cloud Platforms: AWS, GCP
- Infrastructure as Code (IaC): Terraform, Ansible
- Containerization & Orchestration: Docker, Kubernetes, Helm
- CI/CD Pipeline Automation: Jenkins, GitHub Actions, ArgoCD, ArgoCD Image Updater
- Monitoring & Observability: Prometheus, Grafana, Alertmanager
- Programming: Python, Golang, FastAPI, WebSockets, REST APIs
- GenAI & Agent Frameworks: Agentic Workflow, RAG, MCP, Fine-Tuning, LangGraph, Claude Code
- Other: Trivy, SonarQube, Networking, Linux, Windows, PostgreSQL, MongoDB, ChromaDB, Redis

WORK EXPERIENCE:
1. Usha International Pvt Ltd. (Thoughtsol infotech ltd) - Jun 2026 - Present
Role: IT Support Engineer
- Troubleshoot technical issues and perform root cause analysis to minimize service disruptions.
- Monitor application and system health, investigate errors, and support incident resolution.
- Analyze application logs and coordinate with development and infrastructure teams to resolve production issues.
- Manage incidents, service requests, and escalations while maintaining SLA requirements.
- Identify recurring issues and contribute to process improvements and operational efficiency.

2. Evoluxar Pvt Ltd. (Freelance Work) - Feb 2025 - Mar 2026
Role: Python Developer & AI Engineer
Project: AI-Powered Real Estate Management & Lead Analytics Platform
- Developed backend APIs using FastAPI and WebSockets to enable real-time communication between users and an AI-powered assistant.
- Integrated OpenAI Assistant API and Function Calling to automate user management, lead analysis, customer queries, and property data retrieval.
- Fine-tuned GPT-3.5-Turbo to generate structured responses with consistent formatting and professional communication.
- Implemented MongoDB for managing user conversations, assistant history, and communication logs.
- Developed REST APIs for lead performance analytics, calculating individual and team performance based on lead qualification status.
- Designed lead status history APIs to track status transitions, user activities, and lead progress.
- Integrated AI capabilities with backend databases to retrieve real-time property information, lead details, and sales performance data.

3. Crystal Analysis - Jul 2024 - Jan 2025
Role: AI Engineer Internship
Project: Hybrid RAG (Retrieval-Augmented Generation)
- Built a RAG system utilizing both open and closed-source LLMs (Llama2) for enhanced data retrieval and private container registry.
- Integrated Chroma for vector storage and open-source embeddings to facilitate semantic search.
- Developed a Hybrid RAG approach combining vector search with Knowledge Graphs using Neo4j.

DEVOPS PROJECTS:
1. GitOps-Based Kubernetes Deployment & Monitoring on AWS EKS
Technologies: AWS, EKS, Terraform, Kubernetes, Docker, GitHub Actions, ArgoCD, Helm, Trivy, Prometheus, Grafana, ELK Stack, Fluent Bit, Route 53, ACM, Slack.
- Infrastructure Automation: Provisioned AWS infrastructure using Terraform, including VPC, subnets, networking, EKS, and S3 remote state backend.
- CI/CD Pipeline: Implemented GitHub Actions workflows to automate source code checkout, Docker image builds, Trivy vulnerability scanning, and publishing images to GHCR.
- GitOps Deployment: Automated continuous deployment with ArgoCD and ArgoCD Image Updater.
- Kubernetes Management: Deployed containerized applications on AWS EKS using Helm, implementing HPA, IRSA, and Pod Identity for scalability and secure access.
- Networking & Security: Configured AWS ALB, Kubernetes Gateway API, Route 53, and ACM for traffic routing and HTTPS access.
- Monitoring & Logging: Implemented Prometheus, Grafana, and Alertmanager for monitoring, and ECK (Elasticsearch, Kibana) with Fluent Bit for centralized logging.
- Alerting & Notifications: Integrated Slack notifications for monitoring alerts and operational visibility.

2. TravelBooking – Cloud-Native DevOps Implementation (GCP)
Technologies: GCP, GKE, Kubernetes, Docker, Terraform, Jenkins, Helm, Prometheus, Grafana, Alertmanager, Trivy, GitHub.
- Automated GCP infrastructure provisioning using Terraform, including VPC, subnets, firewall rules, and Artifact Registry.
- Deployed containerized microservices on GKE using Kubernetes and custom Helm charts.
- Built a 14-stage Jenkins CI/CD pipeline to automate code testing, Docker builds, security scanning, and deployments.
- Integrated Trivy for container vulnerability scanning before deploying images to GKE.
- Implemented Prometheus, Grafana, and Alertmanager for real-time monitoring, dashboards, and proactive alerts.
- Configured automated SSL certificates using cert-manager and Let's Encrypt, enabling secure HTTPS access.
- Integrated GoDaddy DNS with GKE Gateway for domain-based routing and secure application access.

EDUCATION:
- Dr. A P J Abdul Kalam Technical University, India
  Bachelor of Engineering in Computer Science and Engineering (2019-2024)
- 12th (Bihar Board) - +2 H/S Chamhera, Rasalpur, Nalanda (2017-2019)
- 10th (Bihar Board) - S S Academy, Ekangarsarai (2017)

CERTIFICATIONS:
- IBM Python 101 for Data Science
- Crystal Analysis Data Analytics
- DevOps Certification Training

DECLARATION:
I hereby declare that all the information provided in this resume is true, complete, and accurate to the best of my knowledge and belief.
    `.trim();

    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="resume-modal-overlay fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/85 backdrop-blur-md animate-fade-in overflow-y-auto">
      <div className="resume-modal-container relative w-full max-w-4xl bg-slate-900 border border-slate-700/80 rounded-2xl shadow-2xl max-h-[92vh] overflow-y-auto">
        
        {/* Modal Top Control Bar (Hidden on print) */}
        <div className="sticky top-0 z-20 flex flex-col sm:flex-row items-stretch sm:items-center justify-between px-4 sm:px-6 py-3 sm:py-4 bg-slate-950/95 border-b border-slate-800 backdrop-blur-md gap-3 print:hidden">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <FileText className="w-4 h-4 sm:w-5 sm:h-5 text-cyan-400 shrink-0" />
              <span className="font-heading font-bold text-white text-xs sm:text-base truncate">
                Chandan Kumar &mdash; Formal Resume
              </span>
            </div>
            
            {/* Mobile close button on top right */}
            <button
              onClick={onClose}
              className="sm:hidden p-1.5 rounded-lg bg-slate-800 text-slate-400 hover:text-white"
              aria-label="Close modal"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <div className="flex items-center gap-2 justify-end">
            <button
              onClick={handleCopyText}
              className="flex-1 sm:flex-none flex items-center justify-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-medium border border-slate-700 transition-colors cursor-pointer"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              {copied ? 'Copied' : 'Copy Text'}
            </button>

            <button
              onClick={handlePrint}
              className="flex-1 sm:flex-none flex items-center justify-center gap-1.5 px-3 py-1.5 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-slate-950 text-xs font-bold shadow-md shadow-cyan-500/20 transition-all cursor-pointer"
            >
              <Printer className="w-3.5 h-3.5" />
              Print / Save PDF
            </button>

            <button
              onClick={onClose}
              className="hidden sm:inline-flex p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors cursor-pointer ml-1"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Resume Content Body */}
        <div id="resume-document" className="p-6 sm:p-10 space-y-6 sm:space-y-8 bg-slate-900 text-slate-200">
          
          {/* Header */}
          <div className="text-center pb-5 border-b border-slate-800 print-avoid-break">
            <h1 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white">
              CHANDAN KUMAR
            </h1>
            <p className="text-xs font-mono text-cyan-400 mt-1">
              Ghaziabad, India &bull; Open to Relocation & Remote
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 text-xs font-mono mt-2 text-slate-400">
              <span className="flex items-center gap-1">
                <Mail className="w-3.5 h-3.5 text-cyan-400" />
                {resumeData.personal.email}
              </span>
              <span>&bull;</span>
              <a 
                href={resumeData.personal.linkedin}
                target="_blank" 
                rel="noreferrer"
                className="flex items-center gap-1 text-cyan-400 hover:underline"
              >
                <Linkedin className="w-3.5 h-3.5" />
                {resumeData.personal.linkedinDisplay || "LinkedIn"}
              </a>
              <span>&bull;</span>
              <a 
                href={resumeData.personal.portfolio}
                target="_blank" 
                rel="noreferrer"
                className="flex items-center gap-1 text-cyan-400 hover:underline"
              >
                <Globe className="w-3.5 h-3.5" />
                {resumeData.personal.portfolioDisplay}
              </a>
              <span>&bull;</span>
              <span className="flex items-center gap-1">
                <Phone className="w-3.5 h-3.5 text-cyan-400" />
                {resumeData.personal.phone}
              </span>
            </div>
          </div>

          {/* Technical Skills */}
          <div className="space-y-2.5 print-avoid-break">
            <h2 className="text-sm font-bold uppercase tracking-wider text-cyan-400 border-b border-slate-800 pb-1 font-mono">
              TECHNICAL SKILLS
            </h2>
            <div className="text-xs space-y-1.5 leading-relaxed text-slate-300">
              <p><strong className="text-white print:text-black">&bull; Cloud Platforms:</strong> AWS, GCP</p>
              <p><strong className="text-white print:text-black">&bull; Infrastructure as Code (IaC):</strong> Terraform, Ansible</p>
              <p><strong className="text-white print:text-black">&bull; Containerization & Orchestration:</strong> Docker, Kubernetes, Helm</p>
              <p><strong className="text-white print:text-black">&bull; CI/CD Pipeline Automation:</strong> Jenkins, GitHub Actions, ArgoCD, ArgoCD Image Updater</p>
              <p><strong className="text-white print:text-black">&bull; Monitoring & Observability:</strong> Prometheus, Grafana, Alertmanager</p>
              <p><strong className="text-white print:text-black">&bull; Programming:</strong> Python, Golang, FastAPI, WebSockets, REST APIs</p>
              <p><strong className="text-white print:text-black">&bull; GenAI & Agent Frameworks:</strong> Agentic Workflow, RAG, MCP, Fine-Tuning, LangGraph, Claude Code</p>
              <p><strong className="text-white print:text-black">&bull; Other:</strong> Trivy, SonarQube, Networking, Linux, Windows, PostgreSQL, MongoDB, ChromaDB, Redis</p>
            </div>
          </div>

          {/* Work Experience */}
          <div className="space-y-5">
            <h2 className="text-sm font-bold uppercase tracking-wider text-cyan-400 border-b border-slate-800 pb-1 font-mono">
              WORK EXPERIENCE
            </h2>

            {/* Exp 1: Usha */}
            <div className="space-y-2 print-avoid-break">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs">
                <h3 className="font-bold text-white text-sm">
                  Usha International Pvt Ltd. (Thoughtsol infotech ltd)
                </h3>
                <span className="font-mono text-cyan-400 font-semibold">
                  Jun 2026 - Present
                </span>
              </div>
              <p className="text-xs font-semibold text-slate-300 italic">
                Role: IT Support Engineer
              </p>
              <ul className="text-xs text-slate-300 space-y-1 list-disc pl-5">
                <li>Troubleshoot technical issues and perform root cause analysis to minimize service disruptions.</li>
                <li>Monitor application and system health, investigate errors, and support incident resolution.</li>
                <li>Analyze application logs and coordinate with development and infrastructure teams to resolve production issues.</li>
                <li>Manage incidents, service requests, and escalations while maintaining SLA requirements.</li>
                <li>Identify recurring issues and contribute to process improvements and operational efficiency.</li>
              </ul>
            </div>

            {/* Exp 2: Evoluxar */}
            <div className="space-y-2 print-avoid-break">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs">
                <h3 className="font-bold text-white text-sm">
                  Evoluxar Pvt Ltd. (Freelance Work)
                </h3>
                <span className="font-mono text-cyan-400 font-semibold">
                  Feb 2025 - Mar 2026
                </span>
              </div>
              <p className="text-xs font-semibold text-slate-300 italic">
                Role: Python Developer & AI Engineer
              </p>
              <p className="text-xs text-cyan-300 font-semibold">
                Project: AI-Powered Real Estate Management & Lead Analytics Platform
              </p>
              <ul className="text-xs text-slate-300 space-y-1 list-disc pl-5">
                <li>Developed backend APIs using FastAPI and WebSockets to enable real-time communication between users and an AI-powered assistant.</li>
                <li>Integrated OpenAI Assistant API and Function Calling to automate user management, lead analysis, customer queries, and property data retrieval.</li>
                <li>Fine-tuned GPT-3.5-Turbo to generate structured responses with consistent formatting and professional communication.</li>
                <li>Implemented MongoDB for managing user conversations, assistant history, and communication logs.</li>
                <li>Developed REST APIs for lead performance analytics, calculating individual and team performance based on lead qualification status.</li>
                <li>Designed lead status history APIs to track status transitions, user activities, and lead progress.</li>
                <li>Integrated AI capabilities with backend databases to retrieve real-time property information, lead details, and sales performance data.</li>
              </ul>
            </div>

            {/* Exp 3: Crystal Analysis */}
            <div className="space-y-2 print-avoid-break">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs">
                <h3 className="font-bold text-white text-sm">
                  Crystal Analysis
                </h3>
                <span className="font-mono text-cyan-400 font-semibold">
                  Jul 2024 - Jan 2025
                </span>
              </div>
              <p className="text-xs font-semibold text-slate-300 italic">
                Role: AI Engineer Internship
              </p>
              <p className="text-xs text-cyan-300 font-semibold">
                Project: Hybrid RAG (Retrieval-Augmented Generation)
              </p>
              <ul className="text-xs text-slate-300 space-y-1 list-disc pl-5">
                <li>Built a RAG system utilizing both open and closed-source LLMs (Llama2) for enhanced data retrieval and private container registry.</li>
                <li>Integrated Chroma for vector storage and open-source embeddings to facilitate semantic search.</li>
                <li>Developed a Hybrid RAG approach combining vector search with Knowledge Graphs using Neo4j.</li>
              </ul>
            </div>
          </div>

          {/* DevOps Projects */}
          <div className="space-y-5">
            <h2 className="text-sm font-bold uppercase tracking-wider text-cyan-400 border-b border-slate-800 pb-1 font-mono">
              DEVOPS PROJECTS
            </h2>

            {/* Project 1 */}
            <div className="space-y-1.5 print-avoid-break">
              <h3 className="text-sm font-bold text-white">
                Project: GitOps-Based Kubernetes Deployment & Monitoring on AWS EKS
              </h3>
              <p className="text-xs text-slate-400 font-mono">
                <strong>Technologies:</strong> AWS, EKS, Terraform, Kubernetes, Docker, GitHub Actions, ArgoCD, Helm, Trivy, Prometheus, Grafana, ELK Stack, Fluent Bit, Route 53, ACM, Slack.
              </p>
              <ul className="text-xs text-slate-300 space-y-1 list-disc pl-5">
                <li><strong>Infrastructure Automation:</strong> Provisioned AWS infrastructure using Terraform, including VPC, subnets, networking, EKS, and S3 remote state backend.</li>
                <li><strong>CI/CD Pipeline:</strong> Implemented GitHub Actions workflows to automate source code checkout, Docker image builds, Trivy vulnerability scanning, and publishing images to GHCR.</li>
                <li><strong>GitOps Deployment:</strong> Provisioned automated continuous deployment via ArgoCD with remote state synchronizations.</li>
                <li><strong>Kubernetes Management:</strong> Deployed containerized applications on AWS EKS using Helm, implementing HPA, IRSA, and Pod Identity for scalability and secure access.</li>
                <li><strong>Networking & Security:</strong> Configured AWS ALB, Kubernetes Gateway API, Route 53, and ACM for traffic routing and HTTPS access.</li>
                <li><strong>Monitoring & Logging:</strong> Implemented Prometheus, Grafana, and Alertmanager for monitoring, and ECK (Elasticsearch, Kibana) with Fluent Bit for centralized logging.</li>
                <li><strong>Alerting & Notifications:</strong> Integrated Slack notifications for monitoring alerts and operational visibility.</li>
              </ul>
            </div>

            {/* Project 2 */}
            <div className="space-y-1.5 print-avoid-break">
              <h3 className="text-sm font-bold text-white">
                Project: TravelBooking &ndash; Cloud-Native DevOps Implementation (GCP)
              </h3>
              <p className="text-xs text-slate-400 font-mono">
                <strong>Technologies:</strong> GCP, GKE, Kubernetes, Docker, Terraform, Jenkins, Helm, Prometheus, Grafana, Alertmanager, Trivy, GitHub.
              </p>
              <ul className="text-xs text-slate-300 space-y-1 list-disc pl-5">
                <li>Automated GCP infrastructure provisioning using Terraform, including VPC, subnets, firewall rules, and Artifact Registry.</li>
                <li>Deployed containerized microservices on GKE using Kubernetes and custom Helm charts.</li>
                <li>Built a 14-stage Jenkins CI/CD pipeline to automate code testing, Docker builds, security scanning, and deployments.</li>
                <li>Integrated Trivy for container vulnerability scanning before deploying images to GKE.</li>
                <li>Implemented Prometheus, Grafana, and Alertmanager for real-time monitoring, dashboards, and proactive alerts.</li>
                <li>Configured automated SSL certificates using cert-manager and Let's Encrypt, enabling secure HTTPS access.</li>
                <li>Integrated GoDaddy DNS with GKE Gateway for domain-based routing and secure application access.</li>
              </ul>
            </div>
          </div>

          {/* Education & Certifications */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2 print-avoid-break">
            <div>
              <h2 className="text-sm font-bold uppercase tracking-wider text-cyan-400 border-b border-slate-800 pb-1 font-mono mb-2">
                EDUCATION
              </h2>
              <div className="text-xs space-y-2 text-slate-300">
                <div>
                  <div className="flex justify-between font-bold text-white">
                    <span>Dr. A P J Abdul Kalam Technical University, India</span>
                    <span className="font-mono text-cyan-400">2019-2024</span>
                  </div>
                  <p>Bachelor of Engineering in Computer Science and Engineering</p>
                </div>
                <div>
                  <div className="flex justify-between font-bold text-white">
                    <span>.+2 H/S Chamhera, Rasalpur, Nalanda</span>
                    <span className="font-mono text-cyan-400">2017-2019</span>
                  </div>
                  <p>12th (Bihar Board)</p>
                </div>
                <div>
                  <div className="flex justify-between font-bold text-white">
                    <span>S S Academy Ekangarsarai</span>
                    <span className="font-mono text-cyan-400">2017</span>
                  </div>
                  <p>10th (Bihar Board)</p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-sm font-bold uppercase tracking-wider text-cyan-400 border-b border-slate-800 pb-1 font-mono mb-2">
                CERTIFICATION
              </h2>
              <ul className="text-xs space-y-1 text-slate-300 list-disc pl-5">
                <li>IBM Python 101 for Data Science</li>
                <li>Crystal Analysis Data Analytics</li>
                <li>Devops Certification Training</li>
              </ul>
            </div>
          </div>

          {/* Declaration */}
          <div className="pt-4 border-t border-slate-800 text-xs text-slate-400 space-y-2 print-avoid-break">
            <h2 className="font-bold uppercase tracking-wider text-white font-mono">
              DECLARATION
            </h2>
            <p className="italic">
              {resumeData.personal.declaration}
            </p>
          </div>

        </div>

      </div>
    </div>
  );
}
