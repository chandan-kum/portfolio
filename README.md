# Chandan Kumar — Cloud & DevOps Engineer | GenAI Systems Portfolio

A high-performance, modern React portfolio website tailored specifically for **Chandan Kumar**, showcasing deep expertise across Cloud Architecture (AWS & GCP), Kubernetes (EKS & GKE), GitOps (ArgoCD), CI/CD Automation (GitHub Actions & Jenkins), Observability (Prometheus, Grafana, ELK), and Generative AI (Hybrid RAG with ChromaDB & Neo4j Knowledge Graphs, FastAPI & WebSockets).

---

## 🚀 Live Demo & Key Highlights

- **Hero & Live Status Terminal**: Simulated cluster status with `kubectl`, `helm`, `argocd`, and `hybrid_rag` queries.
- **Interactive DevOps Pipeline Simulator**: Step-by-step visualizer for the GitOps workflow (`Git Push` → `Trivy Scan` → `Docker Build` → `ArgoCD Sync` → `Helm Deploy` → `Prometheus Monitoring`).
- **Interactive Architecture Topology Visualizer**: Interactive network and topology schematics for AWS EKS GitOps cluster and Hybrid RAG pipelines.
- **Projects with Deep Architecture Modals**: Step-by-step breakdowns for:
  1. *GitOps-Based Kubernetes Deployment & Monitoring on AWS EKS*
  2. *TravelBooking – Cloud-Native DevOps Implementation (GCP)*
  3. *AI-Powered Real Estate Management & Lead Analytics Platform (Evoluxar)*
  4. *Hybrid RAG (Retrieval-Augmented Generation) System (Crystal Analysis)*
- **Skills Matrix with Real-Time Search**: Search and filter through IaC, Containerization, CI/CD, Observability, GenAI, and Databases.
- **Interactive Resume Modal**: Full formal view of Chandan's resume with 1-click **Print / Save as PDF** and **Copy Text**.
- **Contact & Direct Messaging**: Direct email, phone, LinkedIn connections, and rapid message dispatch.

---

## 🛠️ Tech Stack

- **Framework**: React 19 + Vite 6
- **Styling**: Tailwind CSS v4 + Custom Glassmorphism & Cyber/Cloud Glow
- **Icons**: Lucide React + Custom SVG Brand Badges
- **Typography**: Inter, Plus Jakarta Sans, Fira Code
- **Deployment**: Zero-config static output in `dist/` (compatible with Vercel, Netlify, GitHub Pages, AWS S3/CloudFront)

---

## 📦 Getting Started

### 1. Start Development Server
```bash
npm run dev
# or: npm start
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 2. Build for Production
```bash
npm run build
```
Generates a minified, production-ready static bundle in [`dist/`](file:///home/chandan/wivecode/portfolio/dist).

### 3. Preview Production Build
```bash
npm run preview
```

### 🐳 Run with Docker
```bash
# Build the production Docker image
docker build -t chandan-portfolio:latest .

# Run container on port 3000
docker run -d -p 3000:80 --name chandan-portfolio chandan-portfolio:latest

# Or using Docker Compose
docker compose up -d
```
Visit [http://localhost:3000](http://localhost:3000) (includes healthcheck at `/healthz`).

---

## 📂 Project Directory Structure

```
portfolio/
├── dist/                          # Production static build
│   ├── assets/
│   │   ├── index-*.css
│   │   └── index-*.js
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Navbar.jsx                 # Top navigation with status badge
│   │   ├── Hero.jsx                   # Hero with interactive cluster status terminal
│   │   ├── StatsSection.jsx           # Impact metrics counter
│   │   ├── SkillsSection.jsx          # Searchable technical skills matrix
│   │   ├── ProjectsSection.jsx        # Project showcase cards
│   │   ├── ProjectDetailModal.jsx     # Step-by-step pipeline modal
│   │   ├── DemosSection.jsx           # Interactive demonstrations wrapper
│   │   ├── InteractiveDevOpsSimulator.jsx # 6-stage GitOps pipeline visualizer
│   │   ├── ArchitectureVisualizer.jsx # EKS cluster & RAG topology diagram
│   │   ├── ExperienceSection.jsx      # Work history timeline
│   │   ├── EducationAndCerts.jsx      # Degrees and certifications
│   │   ├── ContactSection.jsx         # Direct contact details & message form
│   │   ├── ResumeModal.jsx            # Formatted printable resume modal
│   │   ├── Footer.jsx                 # Footer & declaration statement
│   │   └── Icons.jsx                  # Custom SVG brand icons
│   ├── data/
│   │   └── resumeData.js              # Complete resume data schema
│   ├── App.jsx                        # Root React layout
│   ├── index.css                      # Tailwind CSS v4 & theme styling
│   └── main.jsx                       # React entrypoint
├── index.html                         # HTML template
├── package.json                       # Scripts & dependencies
├── vite.config.js                     # Vite build configuration
├── .gitignore                         # Git ignore configuration
└── README.md                          # Documentation
```
│   │   ├── DemosSection.jsx             # Interactive visualizer hub
│   │   ├── InteractiveDevOpsSimulator.jsx # 6-stage clickable GitOps pipeline
│   │   ├── InteractiveRagSimulator.jsx  # ChromaDB + Neo4j Hybrid RAG demo
│   │   ├── ExperienceSection.jsx        # Work history & career achievements
│   │   ├── EducationAndCerts.jsx        # B.E. Degree, Bihar Board & Certifications
│   │   ├── ContactSection.jsx           # Contact cards & interactive message form
│   │   ├── ResumeModal.jsx              # Formatted printable resume view
│   │   ├── Footer.jsx                   # Footer & authenticity declaration
│   │   └── Icons.jsx                    # Social & platform SVG icons
│   ├── data/
│   │   └── resumeData.js                # Single source of truth from resume
│   ├── App.jsx                          # Main application layout
│   ├── index.css                        # Tailwind v4 theme & glowing styles
│   └── main.jsx                         # React entrypoint
├── index.html                           # HTML template with Google Fonts
├── package.json                         # Dependencies & scripts
├── serve.py                             # Lightweight local preview HTTP server
└── vite.config.js                       # Vite configuration
```

---

## 📄 Source Information

All data reflects **Chandan Kumar**'s resume:
- **Email**: `chandan1185073@gmail.com`
- **Phone**: `+91 8368701991`
- **LinkedIn**: [https://www.linkedin.com/in/chandan-kumar](https://www.linkedin.com/in/chandan-kumar)
- **Education**: B.E. in Computer Science & Engineering (2019-2024), Dr. A P J Abdul Kalam Technical University, India
