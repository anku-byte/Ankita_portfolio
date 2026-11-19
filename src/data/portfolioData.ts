import { Project, Experience, Education, EducationItem, SkillCategory } from "@/types";

export const PERSONAL_INFO = {
  name: "Ankita Naik",
  role: "Full-Stack Web Developer & Intelligent Systems",
  tagline: "Building practical web architectures and intelligent systems.",
  location: "Burla, Odisha, India",
  university: "Veer Surendra Sai University of Technology (VSSUT)",
  cgpa: "9.49",
  phone: "9078305850",
  email: "ankita.naik922123@gmail.com",
  github: "https://github.com/anku-byte",
  linkedin: "https://www.linkedin.com/in/ankita-naik-90541a330/",
  resumeUrl: "/Ankita_Naik_Resume.pdf",
  status: "Open to Software Engineering & Systems Opportunities",
  bio: "I’m a B.Tech student at Veer Surendra Sai University of Technology (VSSUT) focused on building practical, full-stack web applications and intelligent system tools. My work spans modern web architectures—using Next.js, React, TypeScript, and Prisma—as well as Python-based system monitoring and machine learning.",
};

export const PROJECTS: Project[] = [
  {
    id: "timetable-generator",
    title: "University Timetable Generator",
    subtitle: "Automated Academic Scheduling & Conflict Resolution Engine",
    featured: true,
    bentoSpan: "col-span-12 lg:col-span-6",
    period: "Sept 2026",
    category: "Full-Stack",
    problem:
      "Universities struggle with manual academic scheduling across hundreds of course sections, multi-department faculty, physical labs, and room capacities—resulting in recurring collisions and administrative bottlenecks.",
    solution:
      "Architected a production-ready scheduling platform using Next.js 14 App Router, TypeScript, PostgreSQL, and Prisma ORM. Integrated algorithmic conflict validation, secure JWT/bcrypt authentication, and instant PDF/Excel exports with jsPDF and xlsx.",
    impact:
      "Eliminated scheduling overlaps with 100% collision-free allocations, while reducing generation time from days to seconds with instant PDF and Excel exports.",
    techStack: [
      "Next.js 14",
      "TypeScript",
      "PostgreSQL",
      "Prisma ORM",
      "Tailwind CSS",
      "jsPDF",
      "xlsx",
      "bcryptjs",
      "JWT"
    ],
    metrics: [
      { label: "Conflict Rate", value: "0%" },
      { label: "Export Speed", value: "<1.2s" },
      { label: "Data Integrity", value: "100% ACID" },
    ],
    highlights: [
      "Dynamic allocation algorithm factoring in faculty preferences, lab buffers, and room limits",
      "JWT session cookie security with salted bcrypt password hashing",
      "Export pipelines for high-resolution PDF printouts and spreadsheet-ready XLSX files",
      "Collaborative scheduling dashboard designed for campus administrators"
    ],
    liveUrl: "https://github.com/anku-byte/University_TimeTable_Generator",
    githubUrl: "https://github.com/anku-byte/University_TimeTable_Generator",
  },
  {
    id: "autonomous-research-agent",
    title: "Autonomous AI Research Agent",
    subtitle: "Multi-Agent Information Retrieval & Report Synthesis Pipeline",
    featured: true,
    bentoSpan: "col-span-12 lg:col-span-6",
    period: "Oct 2025",
    category: "AI / ML",
    problem:
      "Technical research requires scouring through hundreds of scientific papers and technical sources, verifying citations, and synthesizing cohesive findings without bias or hallucination.",
    solution:
      "Engineered an agent-based workflow leveraging LangGraph, Python, LLM reasoning loops, and structured web scrapers. Implemented cyclic critique nodes, self-correcting validation steps, and automated report generation.",
    impact:
      "Cut literature review turnaround by 85% with autonomous multi-step verification and automated citation-grounded analytical dossiers.",
    techStack: [
      "Python",
      "LangGraph",
      "LLMs",
      "Web Search",
      "RAG Architecture",
      "Vector Retrieval",
      "Multi-Agent Systems"
    ],
    metrics: [
      { label: "Synthesis", value: "Autonomous" },
      { label: "Efficiency", value: "+85%" },
      { label: "Grounding", value: "100% Sourced" },
    ],
    highlights: [
      "Graph-based agent state machine with cyclic reflection and self-correction loops",
      "Source citation grounding to suppress hallucination in technical summaries",
      "Automatic markdown synthesis and structured dossier report export"
    ],
    liveUrl: "https://github.com/anku-byte/Autonomus-research-agent",
    githubUrl: "https://github.com/anku-byte/Autonomus-research-agent",
  },
  {
    id: "fake-news-detection",
    title: "Fake News Detection System",
    subtitle: "End-to-End Machine Learning & NLP Text Classification Pipeline",
    featured: true,
    bentoSpan: "col-span-12 lg:col-span-6",
    period: "2025",
    category: "AI / ML",
    problem:
      "The rapid spread of online disinformation and clickbait headlines requires automated, real-time linguistic and semantic verification to protect information integrity.",
    solution:
      "Engineered an NLP machine learning classifier in Python using Scikit-Learn. Extracted linguistic features using TF-IDF vectorization and trained PassiveAggressive / Logistic Regression models to identify fake news articles with high accuracy.",
    impact:
      "Achieved high classification precision with low latency inference, successfully separating fabricated articles from verified reporting.",
    techStack: [
      "Python",
      "Machine Learning",
      "Scikit-Learn",
      "NLP",
      "TF-IDF Vectorizer",
      "PassiveAggressive",
      "Pandas",
      "NumPy"
    ],
    metrics: [
      { label: "Accuracy", value: "94%+" },
      { label: "Pipeline", value: "TF-IDF + ML" },
      { label: "Latency", value: "<50ms" },
    ],
    highlights: [
      "TF-IDF n-gram feature extraction capturing semantic and linguistic bias indicators",
      "Comparative model benchmarking evaluating precision, recall, and F1-score",
      "Clean modular inference API for real-time article verification"
    ],
    liveUrl: "https://github.com/anku-byte/fake_news_detectionsystem_ml",
    githubUrl: "https://github.com/anku-byte/fake_news_detectionsystem_ml",
  },
  
  {
    id: "secure-email-system",
    title: "Secure Email Encryption System",
    subtitle: "Cryptographic SMTP Security & Tamper-Evident Protocol",
    featured: true,
    bentoSpan: "col-span-12 lg:col-span-6",
    period: "Nov 2025",
    category: "Security",
    problem:
      "Standard SMTP mail relays frequently expose sensitive information to interception, eavesdropping, and man-in-the-middle attacks over untrusted transit networks.",
    solution:
      "Built a secure email application in Python that encrypts email messages prior to envelope dispatch via SSL/TLS-wrapped SMTP channels, implementing cryptographic mechanisms for message integrity.",
    impact:
      "Guarantees confidentiality and message integrity, preventing unauthorized interception and ensuring data integrity during transmission.",
    techStack: [
      "Python",
      "SMTP Protocol",
      "SSL/TLS",
      "Cryptography",
      "HTML5",
      "CSS3",
      "Security Protocols"
    ],
    metrics: [
      { label: "Transit", value: "TLS 1.3" },
      { label: "Payload", value: "Encrypted" },
      { label: "Integrity", value: "Verified" },
    ],
    highlights: [
      "Client-side message encryption pipeline with cryptographic layers",
      "RFC-compliant SMTP client with automatic SSL handshake validation",
      "Delivery verification and tamper-evident confirmation feedback"
    ],
    liveUrl: "https://github.com/anku-byte",
    githubUrl: "https://github.com/anku-byte",
  },
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Frontend & Full-Stack",
    description: "Modern web architectures using Next.js, React, TypeScript, and Prisma",
    skills: [
      { name: "React.js", highlight: true },
      { name: "Next.js 14", highlight: true },
      { name: "TypeScript", highlight: true },
      { name: "Tailwind CSS", highlight: true },
      { name: "HTML5 / CSS3", highlight: false },
      { name: "JavaScript", highlight: true },
    ],
  },
  {
    title: "Backend & Databases",
    description: "Database modeling, PostgreSQL, and scalable APIs",
    skills: [
      { name: "Node.js", highlight: true },
      { name: "Express.js", highlight: true },
      { name: "PostgreSQL", highlight: true },
      { name: "Prisma ORM", highlight: true },
      { name: "SQL", highlight: true },
      { name: "RESTful APIs", highlight: true },
    ],
  },
  {
    title: "Python, ML & Intelligent Tools",
    description: "Python-based system monitoring, machine learning, and agentic workflows",
    skills: [
      { name: "Python", highlight: true },
      { name: "LangGraph", highlight: true },
      { name: "Scikit-Learn", highlight: true },
      { name: "NLP & TF-IDF", highlight: true },
      { name: "NumPy & SciPy", highlight: true },
      { name: "System Monitoring", highlight: true },
    ],
  },
  {
    title: "DevOps & Core Systems",
    description: "Tools, version control, and computer science foundations",
    skills: [
      { name: "Git & GitHub", highlight: true },
      { name: "Linux / Bash", highlight: true },
      { name: "Data Structures & Algorithms", highlight: true },
      { name: "DBMS", highlight: true },
      { name: "OOP", highlight: true },
    ],
  },
];

export const EXPERIENCES: Experience[] = [
  {
    company: "IIC (Institution's Innovation Council), VSSUT",
    role: "CS-Domain Co-Lead",
    location: "Burla, Odisha",
    period: "Oct 2024 – Present",
    type: "Leadership",
    summary:
      "Leading technical domain initiatives, coding workshops, and student innovation teams across the university.",
    bullets: [
      "Co-leading the Computer Science wing at IIC, orchestrating hands-on workshops, ideathons, and prototype building sessions.",
      "Mentoring junior undergraduates in full-stack web architectures, algorithmic problem solving, and modern dev tools.",
      "Collaborating with university faculty and innovation leads to incubate student engineering projects.",
    ],
    tags: ["Leadership", "Innovation", "Full-Stack", "Mentorship", "VSSUT"],
  },
  {
    company: "DRDO – (PXE)",
    role: "Summer Research Intern",
    location: "Chandipur, Odisha",
    period: "May 2026 – June 2026",
    type: "Internship",
    summary:
      "Worked on 'Quantum Illumination and Image Reconstruction using Correlation Analysis'.",
    bullets: [
      "Developed a Python-based implementation of image reconstruction techniques using correlation analysis.",
      "Explored concepts at the intersection of quantum illumination, image processing, and computational research.",
      "Applied Python programming, scientific computing, data analysis, and algorithm development to research challenges.",
      "Project recommended for presentation during the Pre-LRC meeting, highlighting its research potential.",
    ],
    tags: ["Python", "Scientific Computing", "Correlation Analysis", "Algorithms", "DRDO"],
  },
  {
    company: "ENIGMA",
    role: "Technical Team Member",
    location: "VSSUT, Odisha",
    period: "May 2025 – Present",
    type: "Club",
    summary:
      "Collaborating to develop real-world web applications and campus-focused digital solutions.",
    bullets: [
      "Contributed to the development of a University Timetable Generator to simplify academic scheduling.",
      "Worked on the Samavesh Website, supporting the development of a platform for college events and activities.",
    ],
    tags: ["Next.js", "TypeScript", "PostgreSQL", "Full-Stack"],
  },
];

export const EDUCATION: Education = {
  institution: "Veer Surendra Sai University of Technology (VSSUT)",
  degree: "Bachelor of Technology (B.Tech)",
  field: "Computer Science and Engineering",
  period: "Sep 2024 – Present",
  location: "Burla, Odisha",
  highlights: [
    "CGPA: 9.49 / 10.0 (Outstanding Academic Standing)",
    "Core coursework in DSA, OOP, DBMS, Computer Networks, Operating Systems, Theory of Computation",
    "CS-Domain Co-Lead at IIC (Institution's Innovation Council), VSSUT (Oct 2026 – Present)",
  ],
};

export const EDUCATION_HISTORY: EducationItem[] = [
  {
    institution: "Veer Surendra Sai University of Technology",
    degree: "Bachelor of Technology in Computer Science and Engineering",
    board: "Autonomous Technical University",
    field: "Computer Science & Engineering",
    period: "2024 – Present",
    score: "CGPA: 9.49",
    scoreType: "CGPA",
    location: "Burla, Sambalpur, Odisha",
    highlights: [
      "Outstanding academic rank with CGPA: 9.49",
      "CS-Domain Co-Lead at IIC (Institution's Innovation Council), VSSUT",
      "Core focus: Advanced Data Structures, Algorithms, Full-Stack Architectures & Machine Learning",
    ],
  },
  {
    institution: "Newton Higher Secondary School of Science",
    degree: "Higher Secondary (+2 Science)",
    board: "Council of Higher Secondary Education, Odisha",
    field: "Science (PCMB / CS)",
    period: "2020 – 2022",
    score: "Percentage: 95.17%",
    scoreType: "Percentage",
    location: "Sambalpur, Odisha",
    highlights: [
      "Secured top tier distinction with 95.17% overall aggregate",
      "Excellence in Mathematics, Physics, and Chemistry analytical foundations",
    ],
  },
  {
    institution: "Janata High School, Bhukta",
    degree: "High School Matriculation (10th)",
    board: "Board of Secondary Education, Odisha",
    field: "General Secondary Curriculum",
    period: "2020",
    score: "Percentage: 92.33%",
    scoreType: "Percentage",
    location: "Bhukta, Bargarh, Odisha",
    highlights: [
      "Secured 92.33% distinction in State Board Secondary Examinations",
      "Consistent academic top ranker and science exhibition participant",
    ],
  },
];
