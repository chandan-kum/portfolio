export const resumeData = {
  personal: {
    name: "Chandan Kumar",
    title: "Cloud & DevOps Engineer | GenAI & AI Systems Developer",
    email: "chandan1185073@gmail.com",
    phone: "+91 8368701991",
    rawPhone: "8368701991",
    linkedin: "https://www.linkedin.com/in/chandan-kumar-aab3b3195?utm_source=share_via&utm_content=profile&utm_medium=member_android",
    linkedinDisplay: "LinkedIn",
    portfolio: "https://portfolio-k8xy.onrender.com",
    portfolioDisplay: "Chandan_Portfolio",
    location: "Ghaziabad / India",
    availability: "Available for Full-time Roles & Contracts",
    summary: "Forward-thinking Cloud & DevOps Engineer and GenAI Developer with extensive experience in automated CI/CD pipelines, GitOps workflows on AWS EKS and GCP GKE, Infrastructure as Code with Terraform, and end-to-end Generative AI systems. Proven expertise in building Hybrid RAG architectures combining ChromaDB with Neo4j Knowledge Graphs, real-time FastAPI backends, and rock-solid Kubernetes observability with Prometheus and Grafana.",
    declaration: "I hereby declare that all the information provided in this resume is true, complete, and accurate to the best of my knowledge and belief."
  },

  stats: [
    { label: "Cloud Platforms", value: "AWS & GCP", description: "EKS, GKE, VPC, ALB, Artifact Registry" },
    { label: "CI/CD & GitOps", value: "14-Stage", description: "Jenkins, GitHub Actions, ArgoCD sync" },
    { label: "GenAI Architectures", value: "Hybrid RAG", description: "Neo4j Knowledge Graphs + ChromaDB" },
    { label: "Infrastructure as Code", value: "100% IaC", description: "Terraform modules with S3 backends" }
  ],

  skillCategories: [
    {
      category: "Cloud & Infrastructure as Code",
      icon: "Cloud",
      skills: [
        { name: "AWS (EKS, VPC, Route 53, ACM, ALB, S3)", level: 90, highlight: true },
        { name: "GCP (GKE, Artifact Registry, VPC, Firewalls)", level: 85, highlight: true },
        { name: "Terraform (Modules, Remote State S3)", level: 92, highlight: true },
        { name: "Ansible", level: 80, highlight: false },
        { name: "Networking (DNS, Gateways, Load Balancing)", level: 85, highlight: false }
      ]
    },
    {
      category: "Containerization & Orchestration",
      icon: "Server",
      skills: [
        { name: "Kubernetes (EKS, GKE, HPA, Pod Identity)", level: 92, highlight: true },
        { name: "Docker & Container Registries (GHCR, Artifact Registry)", level: 90, highlight: true },
        { name: "Helm (Custom charts, Package management)", level: 88, highlight: true },
        { name: "cert-manager & Let's Encrypt SSL", level: 85, highlight: false },
        { name: "Kubernetes Gateway API", level: 82, highlight: false }
      ]
    },
    {
      category: "CI/CD & GitOps Automation",
      icon: "GitBranch",
      skills: [
        { name: "ArgoCD & ArgoCD Image Updater", level: 92, highlight: true },
        { name: "GitHub Actions (Multi-stage CI/CD)", level: 90, highlight: true },
        { name: "Jenkins (14-Stage automated pipelines)", level: 88, highlight: true },
        { name: "Trivy (Vulnerability scanning)", level: 85, highlight: false },
        { name: "SonarQube (Code quality analysis)", level: 82, highlight: false }
      ]
    },
    {
      category: "Monitoring & Observability",
      icon: "Activity",
      skills: [
        { name: "Prometheus & Alertmanager", level: 90, highlight: true },
        { name: "Grafana (Dashboards & proactive alerts)", level: 90, highlight: true },
        { name: "ECK (Elasticsearch & Kibana)", level: 82, highlight: true },
        { name: "Fluent Bit (Centralized logging)", level: 84, highlight: false },
        { name: "Slack Alerting Integration", level: 88, highlight: false }
      ]
    },
    {
      category: "GenAI & Agent Frameworks",
      icon: "Cpu",
      skills: [
        { name: "Hybrid RAG (Vector + Knowledge Graphs)", level: 92, highlight: true },
        { name: "Agentic Workflows & LangGraph", level: 88, highlight: true },
        { name: "OpenAI Assistant API & Function Calling", level: 90, highlight: true },
        { name: "Fine-Tuning (GPT-3.5-Turbo)", level: 85, highlight: true },
        { name: "LLMs (Llama 2, Claude Code, MCP)", level: 88, highlight: true }
      ]
    },
    {
      category: "Programming, Backend & Databases",
      icon: "Database",
      skills: [
        { name: "Python (FastAPI, Async, REST APIs)", level: 92, highlight: true },
        { name: "WebSockets (Real-time communication)", level: 88, highlight: true },
        { name: "Golang", level: 78, highlight: false },
        { name: "ChromaDB & Neo4j", level: 86, highlight: true },
        { name: "MongoDB, PostgreSQL, Redis", level: 85, highlight: false },
        { name: "Linux & Windows System ", level: 90, highlight: false }
      ]
    }
  ],

  experiences: [
    {
      id: "usha",
      role: "IT Support Engineer",
      company: "Usha International Pvt Ltd. (Thoughtsol infotech ltd)",
      period: "Jun 2026 - Present",
      type: "Full-Time",
      location: "India",
      status: "Current",
      summary: "Troubleshooting complex technical incidents, maintaining business-critical application uptime, analyzing system logs, and collaborating closely with infrastructure & development teams to ensure high reliability within strict SLAs.",
      highlights: [
        "Troubleshoot technical issues and perform root cause analysis (RCA) to minimize service disruptions.",
        "Monitor application and system health, investigate errors, and support incident resolution.",
        "Analyze application logs and coordinate with development and infrastructure teams to resolve production issues.",
        "Manage incidents, service requests, and escalations while maintaining SLA requirements.",
        "Identify recurring issues and contribute to process improvements and operational efficiency."
      ],
      tags: ["IT Operations", "RCA", "Incident Management", "Application Health", "Log Analysis", "SLA Adherence"]
    },
    {
      id: "evoluxar",
      role: "Python Developer & AI Engineer",
      company: "Evoluxar Pvt Ltd.",
      type: "Freelance",
      period: "Feb 2025 - Mar 2026",
      location: "Remote",
      status: "Completed",
      project: "AI-Powered Real Estate Management & Lead Analytics Platform",
      summary: "Architected and delivered an intelligent real estate AI assistant platform integrating real-time streaming APIs, GPT fine-tuning, automated function calling, and deep analytics.",
      highlights: [
        "Developed backend APIs using FastAPI and WebSockets to enable real-time communication between users and an AI-powered assistant.",
        "Integrated OpenAI Assistant API and Function Calling to automate user management, lead analysis, customer queries, and property data retrieval.",
        "Fine-tuned GPT-3.5-Turbo to generate structured responses with consistent formatting and professional communication.",
        "Implemented MongoDB for managing user conversations, assistant history, and communication logs.",
        "Developed REST APIs for lead performance analytics, calculating individual and team performance based on lead qualification status.",
        "Designed lead status history APIs to track status transitions, user activities, and lead progress.",
        "Integrated AI capabilities with backend databases to retrieve real-time property information, lead details, and sales performance data."
      ],
      tags: ["FastAPI", "WebSockets", "OpenAI Assistant", "Function Calling", "GPT-3.5 Fine-Tuning", "MongoDB", "Real-Time AI"]
    },
    {
      id: "crystal",
      role: "AI Engineer Internship",
      company: "Crystal Analysis",
      type: "Internship",
      period: "Jul 2024 - Jan 2025",
      location: "Hybrid",
      status: "Completed",
      project: "Hybrid RAG (Retrieval-Augmented Generation)",
      summary: "Engineered high-accuracy Hybrid RAG architecture fusing vector embeddings with knowledge graph relationships for complex enterprise query resolution.",
      highlights: [
        "Built a RAG system utilizing both open and closed-source LLMs (Llama 2) for enhanced data retrieval and private container registry.",
        "Integrated Chroma for vector storage and open-source embeddings to facilitate semantic search.",
        "Developed a Hybrid RAG approach combining vector search with Knowledge Graphs using Neo4j to solve multi-hop context reasoning."
      ],
      tags: ["Hybrid RAG", "Llama 2", "ChromaDB", "Neo4j Knowledge Graphs", "Vector Embeddings", "Semantic Search"]
    }
  ],

  projects: [
    {
      id: "gitops-eks",
      title: "GitOps-Based Kubernetes Deployment & Monitoring on AWS EKS",
      subtitle: "Enterprise-grade declarative GitOps pipeline with continuous vulnerability scanning and centralized observability.",
      category: "DevOps & Cloud",
      featured: true,
      technologies: [
        "AWS", "EKS", "Terraform", "Kubernetes", "Docker", "GitHub Actions",
        "ArgoCD", "Helm", "Trivy", "Prometheus", "Grafana", "ELK Stack",
        "Fluent Bit", "Route 53", "ACM", "Slack"
      ],
      architectureSteps: [
        { step: "IaC Provisioning", detail: "Terraform provisions VPC, private/public subnets, NAT gateways, EKS cluster, and S3 remote backend with state locking." },
        { step: "CI Automation", detail: "GitHub Actions triggers on push, builds multi-arch Docker image, runs Trivy vulnerability scan, and pushes verified image to GHCR." },
        { step: "GitOps Sync", detail: "ArgoCD and ArgoCD Image Updater detect repository updates and declaratively reconcile application manifests to AWS EKS." },
        { step: "K8s Orchestration", detail: "Custom Helm charts configure deployments with Horizontal Pod Autoscaler (HPA), IRSA, and secure Pod Identity." },
        { step: "Ingress & Routing", detail: "AWS ALB ingress controller coupled with Kubernetes Gateway API, Route 53 DNS, and ACM TLS certificates." },
        { step: "Observability", detail: "Prometheus scraping metrics, custom Grafana dashboards, Alertmanager with Slack webhooks, and ECK with Fluent Bit for centralized log aggregation." }
      ],
      bulletPoints: [
        "Infrastructure Automation: Provisioned AWS infrastructure using Terraform, including VPC, subnets, networking, EKS, and S3 remote state backend.",
        "CI/CD Pipeline: Implemented GitHub Actions workflows to automate source code checkout, Docker image builds, Trivy vulnerability scanning, and publishing images to GHCR.",
        "GitOps Deployment: Automated continuous deployment with ArgoCD and ArgoCD Image Updater for git-driven zero-touch rollouts.",
        "Kubernetes Management: Deployed containerized applications on AWS EKS using Helm, implementing HPA, IRSA, and Pod Identity for scalability and secure access.",
        "Networking & Security: Configured AWS ALB, Kubernetes Gateway API, Route 53, and ACM for traffic routing and HTTPS access.",
        "Monitoring & Logging: Implemented Prometheus, Grafana, and Alertmanager for monitoring, and ECK (Elasticsearch, Kibana) with Fluent Bit for centralized logging.",
        "Alerting & Notifications: Integrated Slack notifications for monitoring alerts and operational visibility."
      ],
      metrics: [
        { label: "Deployment Frequency", value: "Automated GitOps" },
        { label: "Security Scanning", value: "100% Trivy scanned" },
        { label: "Observability Stack", value: "Prometheus + ELK" }
      ]
    },
    {
      id: "travel-booking-gcp",
      title: "TravelBooking – Cloud-Native DevOps Implementation (GCP)",
      subtitle: "Multi-microservice cloud-native platform on Google Kubernetes Engine with automated 14-stage Jenkins CI/CD pipeline.",
      category: "DevOps & Cloud",
      featured: true,
      technologies: [
        "GCP", "GKE", "Kubernetes", "Docker", "Terraform", "Jenkins",
        "Helm", "Prometheus", "Grafana", "Alertmanager", "Trivy",
        "GitHub", "cert-manager", "Let's Encrypt", "GoDaddy DNS"
      ],
      architectureSteps: [
        { step: "GCP IaC", detail: "Automated GCP infrastructure provisioning via Terraform: VPC, custom subnets, firewall rules, GKE cluster, and Artifact Registry." },
        { step: "14-Stage Jenkins Pipeline", detail: "Automated pipeline: code checkout, SonarQube linting, unit testing, Docker build, Trivy security scan, Artifact Registry push, Helm linting, and GKE staging/production rollout." },
        { step: "Microservice Packaging", detail: "Modular Helm charts with configurable values per environment, rolling updates, readiness/liveness probes, and resource quotas." },
        { step: "Automated Ingress & TLS", detail: "cert-manager integrated with Let's Encrypt for automatic certificate renewals, hooked to GKE Gateway and GoDaddy DNS routing." },
        { step: "Telemetry & SRE", detail: "Prometheus scraping custom application metrics, Grafana dashboards tracking p95 latency, and Alertmanager alerts for incident prevention." }
      ],
      bulletPoints: [
        "Automated GCP infrastructure provisioning using Terraform, including VPC, subnets, firewall rules, and Artifact Registry.",
        "Deployed containerized microservices on GKE using Kubernetes and custom Helm charts.",
        "Built a 14-stage Jenkins CI/CD pipeline to automate code testing, Docker builds, security scanning, and deployments.",
        "Integrated Trivy for container vulnerability scanning before deploying images to GKE.",
        "Implemented Prometheus, Grafana, and Alertmanager for real-time monitoring, dashboards, and proactive alerts.",
        "Configured automated SSL certificates using cert-manager and Let's Encrypt, enabling secure HTTPS access.",
        "Integrated GoDaddy DNS with GKE Gateway for domain-based routing and secure application access."
      ],
      metrics: [
        { label: "Pipeline Stages", value: "14-Stage Jenkins" },
        { label: "SSL Management", value: "Automated cert-manager" },
        { label: "Cloud Engine", value: "Google GKE" }
      ]
    },
    {
      id: "ai-real-estate",
      title: "AI-Powered Real Estate Management & Lead Analytics Platform",
      subtitle: "Real-time AI backend leveraging FastAPI, WebSockets, OpenAI Assistant function calling, and fine-tuned GPT models.",
      category: "GenAI & Backend",
      featured: true,
      technologies: [
        "Python", "FastAPI", "WebSockets", "OpenAI Assistant API",
        "Function Calling", "GPT-3.5-Turbo Fine-Tuning", "MongoDB",
        "REST APIs", "Analytics Engine"
      ],
      architectureSteps: [
        { step: "Real-Time Layer", detail: "FastAPI with asynchronous WebSockets handling bi-directional low-latency client conversations." },
        { step: "Assistant & Tool Calling", detail: "OpenAI Assistant API executing structured function calling to query databases and update lead states." },
        { step: "Custom Domain Fine-Tuning", detail: "Fine-tuned GPT-3.5-Turbo on proprietary real-estate dialogue sets for consistent domain terminology." },
        { step: "Data & State Store", detail: "MongoDB tracking historical conversation trees, customer preferences, and lead qualification scores." },
        { step: "Performance Analytics API", detail: "REST APIs calculating individual agent conversion rates, velocity metrics, and sales funnel transitions." }
      ],
      bulletPoints: [
        "Developed backend APIs using FastAPI and WebSockets to enable real-time communication between users and an AI-powered assistant.",
        "Integrated OpenAI Assistant API and Function Calling to automate user management, lead analysis, customer queries, and property data retrieval.",
        "Fine-tuned GPT-3.5-Turbo to generate structured responses with consistent formatting and professional communication.",
        "Implemented MongoDB for managing user conversations, assistant history, and communication logs.",
        "Developed REST APIs for lead performance analytics, calculating individual and team performance based on lead qualification status.",
        "Designed lead status history APIs to track status transitions, user activities, and lead progress.",
        "Integrated AI capabilities with backend databases to retrieve real-time property information, lead details, and sales performance data."
      ],
      metrics: [
        { label: "Latency", value: "< 250ms WebSockets" },
        { label: "Model Architecture", value: "Fine-Tuned GPT-3.5" },
        { label: "Automation", value: "100% Function Calling" }
      ]
    },
    {
      id: "hybrid-rag",
      title: "Hybrid RAG with ChromaDB & Neo4j Knowledge Graphs",
      subtitle: "Next-generation Retrieval-Augmented Generation uniting dense vector embeddings with multi-hop graph traversal.",
      category: "GenAI & Backend",
      featured: true,
      technologies: [
        "Hybrid RAG", "Llama 2", "Neo4j", "ChromaDB", "Python",
        "LangGraph", "Embeddings", "Docker", "Private Registry"
      ],
      architectureSteps: [
        { step: "Document Parsing", detail: "Text chunking, entity extraction, and relationship mapping from unstructured technical documentation." },
        { step: "Dense Vector Storage", detail: "ChromaDB storing sentence-transformer dense embeddings for high-dimensional semantic search." },
        { step: "Knowledge Graph Linking", detail: "Neo4j graph database storing extracted entities, dependencies, and hierarchical relationships." },
        { step: "Hybrid Query Engine", detail: "Concurrent retrieval marrying vector similarity scoring with Cypher graph traversal for multi-hop reasoning." },
        { step: "LLM Synthesis", detail: "Context-injected prompt synthesized with localized Llama 2 running in a hardened private container environment." }
      ],
      bulletPoints: [
        "Built a RAG system utilizing both open and closed-source LLMs (Llama 2) for enhanced data retrieval and private container registry.",
        "Integrated Chroma for vector storage and open-source embeddings to facilitate semantic search.",
        "Developed a Hybrid RAG approach combining vector search with Knowledge Graphs using Neo4j to solve complex multi-hop question answering."
      ],
      metrics: [
        { label: "Retrieval Method", value: "Vector + Graph Hybrid" },
        { label: "Open LLM", value: "Llama 2 (Private)" },
        { label: "Graph Engine", value: "Neo4j Cypher" }
      ]
    }
  ],

  certifications: [
    {
      title: "IBM Python 101 for Data Science",
      issuer: "IBM / Cognitive Class",
      badge: "IBM Certified",
      icon: "Award",
      details: "Comprehensive training in Python data structures, algorithms, APIs, Pandas, and data processing workflows."
    },
    {
      title: "Crystal Analysis Data Analytics",
      issuer: "Crystal Analysis",
      badge: "Data Specialist",
      icon: "BarChart3",
      details: "Specialized in data analysis pipelines, exploratory data analysis, graph analytics, and structured data visualization."
    },
    {
      title: "Devops Certification Training",
      issuer: "Professional DevOps Academy",
      badge: "DevOps Certified",
      icon: "ShieldCheck",
      details: "Hands-on mastery of Docker containerization, Kubernetes orchestration, Terraform IaC, Jenkins CI/CD, and Prometheus monitoring."
    }
  ],

  education: [
    {
      degree: "Bachelor of Engineering (B.E.) in Computer Science and Engineering",
      institution: "Dr. A P J Abdul Kalam Technical University, India",
      period: "2019 - 2024",
      highlight: "Major in Computer Science & Engineering",
      details: "Core focus on Distributed Systems, Cloud Computing, Algorithms, Operating Systems, Computer Networks, and Database Management."
    },
    {
      degree: "Intermediate / 12th Standard",
      institution: "+2 H/S Chamhera, Rasalpur, Nalanda (Bihar Board)",
      period: "2017 - 2019",
      highlight: "Science Stream",
      details: "Mathematics, Physics, Chemistry, and Information Technology."
    },
    {
      degree: "Matriculation / 10th Standard",
      institution: "S S Academy, Ekangarsarai (Bihar Board)",
      period: "2017",
      highlight: "Distinction",
      details: "Secondary School Certificate with distinction in Science and Mathematics."
    }
  ],

  devopsPipelineDemo: [
    { id: "code", title: "Git Push", tool: "Git & GitHub", icon: "GitCommit", status: "Triggered", detail: "git commit -m 'feat: deploy microservice v2.4' && git push origin main" },
    { id: "scan", title: "Security & Lint", tool: "Trivy & SonarQube", icon: "ShieldAlert", status: "Passed", detail: "trivy fs --security-checks vuln,config . (0 Critical, 0 High)" },
    { id: "build", title: "Docker Build", tool: "Docker & GHCR", icon: "Box", status: "Completed", detail: "docker build -t ghcr.io/chandan/service:v2.4 --push ." },
    { id: "gitops", title: "GitOps Sync", tool: "ArgoCD", icon: "RefreshCw", status: "Synced", detail: "argocd app sync production-cluster --prune (Status: Synced & Healthy)" },
    { id: "deploy", title: "K8s Deployment", tool: "EKS & Helm", icon: "Server", status: "Live", detail: "helm upgrade --install travel-app ./charts --set replicas=5 (HPA Active)" },
    { id: "monitor", title: "Observability", tool: "Prometheus & Grafana", icon: "Activity", status: "Healthy", detail: "Prometheus 99.98% SLO | Latency: 42ms | Alerts: 0" }
  ]
};
