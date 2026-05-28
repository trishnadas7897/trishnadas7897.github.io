// Single source of truth for resume / portfolio content.
// Mirrors the canonical resume; update here and every section picks it up.

export const profile = {
  name: "Trishna Das",
  tagline: "Full-Stack · AI Systems Engineer",
  headline:
    "Building scalable systems where backend, AI, and product meet - from regulated finance to live consumer apps.",
  location: "Bhubaneswar, India",
  email: "trishnadas7897@gmail.com",
  phone: "+91 7439523511",
  links: {
    github: "https://github.com/trishnadas7897",
    linkedin: "https://linkedin.com/in/trishnadas7897",
    resume: "/resume.pdf",
    transcriber: "/transcriber/",
  },
  metrics: [
    { value: "5+", label: "internships across full-stack, cloud, AI" },
    { value: "8", label: "engineers led on a 3-product live stack" },
    { value: "35%", label: "load-time reduction shipped at OPM" },
    { value: "99.7%", label: "API uptime on Ridlin microservices" },
  ],
} as const;

// ----------------------------------------------------------------------------
// Experience timeline - most recent first.
// ----------------------------------------------------------------------------

export type Experience = {
  company: string;
  role: string;
  location: string;
  period: string;
  highlight?: boolean;
  link?: string;
  summary: string;
  bullets: string[];
  stack: string[];
};

export const experience: Experience[] = [
  {
    company: "J.P. Morgan Services India",
    role: "Software Engineer Intern - CIB Rates Team",
    location: "Mumbai, India",
    period: "May 2026 – Jul 2026",
    highlight: true,
    link: "https://www.jpmorgan.com/",
    summary:
      "Software Engineer Program internship within Corporate & Investment Banking, secured via the Code for Good national pathway.",
    bullets: [
      "Contributing to engineering and reliability workflows on scalable backend systems for high-volume fixed-income trading infrastructure.",
      "Working alongside senior engineers in a regulated financial environment under JPMC's Code of Conduct, Personal Account Dealing Policy, and enterprise-grade security standards.",
      "Selected through a highly competitive national programme - Top 6 nationally at JP Morgan Code for Good 2025.",
    ],
    stack: ["Java", "Spring", "Distributed Systems", "Reliability", "Fixed Income"],
  },
  {
    company: "OPM Corporation",
    role: "SDE II - Project Lead",
    location: "Bhubaneswar, India (Hybrid)",
    period: "Aug 2025 – Dec 2025",
    summary:
      "Led a cross-functional team of 8 across 3 live products - MyFojo (food delivery), Ridlin (ride-hailing), and PARIBHASHA (NLP multilingual platform).",
    bullets: [
      "Owned sprint planning, architecture, and deployments across three production stacks.",
      "Re-engineered Node.js APIs and restructured MongoDB schemas on MyFojo - cut app load time by 35 % across high-traffic endpoints.",
      "Refactored Ridlin's Node.js microservices to 99.7 % API uptime; built a WhatsApp-Commerce ordering system integrating Razorpay + Pet Pooja POS for automated multi-restaurant onboarding.",
      "Streamlined CI/CD pipelines and added automated regression testing across multiple deployment environments.",
    ],
    stack: [
      "Node.js",
      "Express",
      "MongoDB",
      "Razorpay",
      "WhatsApp Commerce",
      "CI/CD",
      "Team Leadership",
    ],
  },
  {
    company: "WNS Global Services",
    role: "EU Analytics Intern - Full-Stack",
    location: "Bengaluru, India (Remote)",
    period: "May 2025 – Aug 2025",
    summary:
      "Built a dual-portal healthcare web app and an agentic AI task-assignment platform for a US insurance client.",
    bullets: [
      "Developed a dual-portal healthcare web app (Member & Provider) using Flask + Angular + MongoDB, secured with JWT and aligned to HIPAA-compliant architecture standards.",
      "Integrated LangChain + OpenAI to automate prior-authorization and claims-validation workflows - 35 % lower processing latency, 80 % less manual task management.",
      "Designed and shipped Agent Task Tracker, an agentic-AI task-assignment platform with REST APIs for creation, real-time tracking, role-based access, and reporting across distributed teams.",
    ],
    stack: ["Flask", "Angular", "MongoDB", "LangChain", "OpenAI", "JWT", "HIPAA"],
  },
  {
    company: "Inovaare Corporation",
    role: "Cloud Platform & Product Dev Intern",
    location: "Bhubaneswar, India (On-site)",
    period: "Jun 2025 – Jul 2025",
    summary:
      "Automated regulated-document processing pipelines for 200+ healthcare facilities.",
    bullets: [
      "Built OCR + AWS Lambda pipelines - 85 % improvement in extraction accuracy across 200+ healthcare facilities.",
      "Built KPI compliance dashboards tracking 15+ metrics on AWS S3 with role-aware drill-downs.",
    ],
    stack: ["AWS Lambda", "S3", "OCR", "Python", "Compliance"],
  },
  {
    company: "Codecis AI",
    role: "Backend Developer Intern",
    location: "San Francisco, USA (Remote)",
    period: "Jan 2025 – Mar 2025",
    summary:
      "Engineered a Flask-Docker CRM backend processing 1 000+ daily transactions for Western Capital Mortgage.",
    bullets: [
      "Built a Flask + Docker CRM backend handling 1 000+ daily transactions - 40 % latency reduction.",
      "Designed REST APIs for mortgage analytics dashboards used by 100+ employees.",
      "Deployed containerised apps on AWS + Azure for improved reliability and deployment scalability.",
    ],
    stack: ["Flask", "Docker", "AWS", "Azure", "REST", "PostgreSQL"],
  },
];

// ----------------------------------------------------------------------------
// Projects - featured first.
// ----------------------------------------------------------------------------

export type Project = {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  featured?: boolean;
  liveUrl?: string;
  repoUrl?: string;
  stack: string[];
  bullets: string[];
};

export const projects: Project[] = [
  {
    slug: "transcriber",
    name: "Hinglish Live Transcription",
    tagline: "Real-time Hindi + English transcription on Vercel + Groq Whisper",
    featured: true,
    description:
      "A live demo that listens to your mic, ships 3-second WAV chunks to Groq's Whisper Large v3 Turbo, and renders the transcript with smooth word-by-word reveals. Built as the public face of a larger Hinglish ASR research project.",
    liveUrl: "https://transcriber.cyrussaas.com/",
    repoUrl: "https://github.com/trishnadas7897/transcriber/tree/demo",
    stack: ["Vercel", "Node 20", "Groq Whisper", "Web Audio API", "Vanilla JS", "Three.js-grade UI"],
    bullets: [
      "HTTP-POST architecture (no WebSockets) - works on Vercel Node serverless out of the box.",
      "Per-IP rate limiting, hallucination blocklist for known Whisper artefacts, 60-second session cap.",
      "Frosted-glass UI with a live canvas waveform, gradient mic button, animated session timer.",
      "Sister branch (`develop`) is a full production architecture: multi-tenant Postgres + RLS, Prometheus, GitHub Actions CI/CD, on-call runbooks.",
    ],
  },
  {
    slug: "agent-task-tracker",
    name: "Agent Task Tracker",
    tagline: "Agentic AI task-assignment platform",
    description:
      "REST-API platform that assigns, tracks, and reports on tasks across distributed teams using an agentic-AI scheduler. Built at WNS to retire 80 % of manual task-management overhead.",
    repoUrl: "https://github.com/trishnadas7897",
    stack: ["Flask", "SQLite", "LangChain", "OpenAI", "REST"],
    bullets: [
      "Role-based access control with audit trail across creation, assignment, and completion.",
      "Real-time task progress tracking and reporting for distributed teams.",
      "Automated 80 % of manual task-management overhead the team faced pre-launch.",
    ],
  },
  {
    slug: "attendance-app",
    name: "Attendance Management App",
    tagline: "Flutter + Flask attendance with QR + face recognition",
    description:
      "Full-stack attendance platform combining QR scanning and facial recognition with encrypted MongoDB storage and role-based authentication.",
    repoUrl: "https://github.com/trishnadas7897",
    stack: ["Flutter", "Flask", "MongoDB", "OpenCV", "JWT"],
    bullets: [
      "98 % validation accuracy across mixed QR + facial-recognition flows.",
      "Encrypted-at-rest MongoDB with role-aware endpoints for students, faculty, and admins.",
      "Built end-to-end (mobile, backend, recognition pipeline) in a single sprint.",
    ],
  },
  {
    slug: "adversarial-ai-detector",
    name: "Adversarial AI Image Detector",
    tagline: "100k-image synthetic-media detection pipeline",
    description:
      "PyTorch + NumPy + OpenCV pipeline that classifies AI-generated images (Stable Diffusion, Midjourney, etc.) across a 100 000-image dataset. Built for the IIT Bhubaneswar ML Hackathon 2025.",
    repoUrl: "https://github.com/trishnadas7897",
    stack: ["PyTorch", "NumPy", "OpenCV", "Adversarial ML"],
    bullets: [
      "Designed for precision + recall + F1 across diverse synthetic-media generators.",
      "Trained on a curated 100 k-image dataset spanning multiple diffusion models.",
      "Built end-to-end in 36 hours at the IIT Bhubaneswar ML Hackathon.",
    ],
  },
];

// ----------------------------------------------------------------------------
// Skills - grouped for the visual grid.
// ----------------------------------------------------------------------------

export type SkillGroup = {
  category: string;
  items: string[];
};

export const skills: SkillGroup[] = [
  {
    category: "Languages",
    items: ["Python", "C++", "Java", "JavaScript", "TypeScript", "Dart", "SQL"],
  },
  {
    category: "Frameworks",
    items: [
      "Node.js",
      "Express",
      "React",
      "Angular",
      "Flask",
      "FastAPI",
      "Django",
      "Flutter",
    ],
  },
  {
    category: "Cloud & DevOps",
    items: [
      "AWS (Lambda, S3)",
      "Azure",
      "GCP",
      "Docker",
      "Kubernetes",
      "CI/CD",
      "Jenkins",
      "Git",
    ],
  },
  {
    category: "Databases",
    items: ["MongoDB", "PostgreSQL", "MySQL", "SQLite", "SQLAlchemy"],
  },
  {
    category: "AI / ML",
    items: ["LangChain", "OpenAI APIs", "Groq", "PyTorch", "NumPy", "OpenCV"],
  },
  {
    category: "Analytics & BI",
    items: ["Power BI", "Tableau", "Matplotlib", "Data Visualisation"],
  },
];

// ----------------------------------------------------------------------------
// Achievements - for the standalone awards strip.
// ----------------------------------------------------------------------------

export type Achievement = {
  title: string;
  issuer: string;
  year?: string;
  badge?: "gold" | "silver" | "blue";
};

export const achievements: Achievement[] = [
  {
    title: "Runner-up - Code for Good 2025",
    issuer: "J.P. Morgan · Top 6 nationally",
    year: "2025",
    badge: "gold",
  },
  {
    title: "Winner - Shark Tank 2.0",
    issuer: "Sambalpur University",
    year: "2024",
    badge: "gold",
  },
  {
    title: "Winner - Ideathon 2024",
    issuer: "E-Cell VSSUT",
    year: "2024",
    badge: "gold",
  },
  {
    title: "Winner - Maze Hunt 2024",
    issuer: "Robotics Club, VSSUT",
    year: "2024",
    badge: "silver",
  },
  {
    title: "Top 60 - e-Yantra Robotics",
    issuer: "IIT Bombay",
    year: "2024",
    badge: "blue",
  },
  {
    title: "Presenter - Startup Odisha 2.0",
    issuer: "Government of Odisha",
    year: "2024",
    badge: "blue",
  },
];

// ----------------------------------------------------------------------------
// Education
// ----------------------------------------------------------------------------

export const education = [
  {
    school: "Veer Surendra Sai University of Technology (VSSUT)",
    degree: "B.Tech, Computer Science & Engineering",
    grade: "CGPA 8.67 (up to 4th sem) · SGPA 9.16 (1st sem)",
    period: "2023 – 2027",
    location: "Burla, Odisha",
  },
  {
    school: "Delhi Public School, Ruby Park",
    degree: "Senior Secondary (XII) - CBSE Science",
    grade: "93.60 %",
    period: "2022 – 2023",
    location: "Kolkata",
  },
  {
    school: "Mahadevi Birla Shishu Vihar",
    degree: "Secondary (X) - ICSE",
    grade: "95.10 %",
    period: "2020 – 2021",
    location: "Kolkata",
  },
];

export const sectionsNav = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "achievements", label: "Achievements" },
  { id: "contact", label: "Contact" },
];
