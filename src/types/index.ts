export interface Project {
  id: string;
  title: string;
  subtitle: string;
  featured: boolean;
  bentoSpan?: string; // e.g., 'col-span-12 lg:col-span-7'
  period: string;
  problem: string;
  solution: string;
  impact: string;
  techStack: string[];
  metrics?: { label: string; value: string }[];
  liveUrl?: string;
  githubUrl: string;
  category: "AI / ML" | "Full-Stack" | "AI & Systems" | "Web Apps" | "Security" | "Research";
  highlights: string[];
}

export interface SkillCategory {
  title: string;
  description: string;
  skills: {
    name: string;
    icon?: string;
    level?: string;
    highlight?: boolean;
  }[];
}

export interface Experience {
  company: string;
  role: string;
  location: string;
  period: string;
  type: "Internship" | "Leadership" | "Club";
  summary: string;
  bullets: string[];
  tags: string[];
}

export interface Education {
  institution: string;
  degree: string;
  field: string;
  period: string;
  location: string;
  highlights: string[];
}

export interface EducationItem {
  institution: string;
  degree: string;
  board?: string;
  field?: string;
  period: string;
  score: string;
  scoreType: "CGPA" | "Percentage";
  location?: string;
  highlights?: string[];
}
