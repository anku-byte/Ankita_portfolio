"use client";

import React, { useState, useRef, useEffect } from "react";
import { PROJECTS, PERSONAL_INFO } from "@/data/portfolioData";
import { Project } from "@/types";
import {
  ExternalLink,
  Github,
  ArrowUpRight,
  Sparkles,
  Brain,
  Cpu,
  Calendar,
  ShieldCheck,
  Newspaper,
  ChevronLeft,
  ChevronRight,
  Play,
  Pause,
} from "lucide-react";
import { ProjectModal } from "./ProjectModal";

export function PosterProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeFilter, setActiveFilter] = useState<"all" | "fullstack" | "aiml" | "security">("all");
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const postersConfig = [
    {
      id: "timetable-generator",
      tag: "FULL-STACK SCHEDULER",
      badge: "Next.js 14",
      accent: "#E5CD82",
      borderColor: "border-[#E5CD82]/60 hover:border-[#E5CD82]",
      gradient: "from-[#0E2508] via-[#15370D] to-[#0E2508]",
      graphic: (
        <div className="relative w-full h-full flex flex-col items-center justify-between p-4 sm:p-5 text-white">
          <div className="flex items-center justify-between w-full font-mono text-[10px] tracking-widest text-[#E5CD82]">
            <span>ACID VERIFIED</span>
            <span>0% CONFLICT</span>
          </div>

          {/* Matrix Grid / Algorithmic Flow */}
          <div className="relative my-4 w-28 h-28 flex flex-col items-center justify-center">
            <div className="grid grid-cols-3 gap-1.5 w-full h-full p-2 rounded-2xl bg-[#0E2508] border border-[#E5CD82]/40 shadow-inner">
              {[...Array(9)].map((_, i) => (
                <div
                  key={i}
                  className={`rounded-lg flex items-center justify-center text-[10px] font-mono font-bold transition-all duration-500 ${
                    i === 4
                      ? "bg-[#E5CD82] text-[#0E2508] shadow-sm shadow-[#E5CD82]"
                      : i % 2 === 0
                      ? "bg-[#728E6D] text-[#0E2508]"
                      : "bg-[#15370D] text-[#E5CD82] border border-[#728E6D]/40"
                  }`}
                >
                  {i === 4 ? "✓" : `S${i + 1}`}
                </div>
              ))}
            </div>
          </div>

          <div className="w-full text-center">
            <h4 className="font-black text-xl sm:text-2xl tracking-tighter uppercase text-[#E5CD82] leading-none mb-1">
              TIMETABLE<br />GENERATOR
            </h4>
            <span className="text-[10px] font-mono tracking-widest text-[#FAF5E4]">
              NEXT.JS 14 &bull; PRISMA &bull; POSTGRES
            </span>
          </div>
        </div>
      ),
    },
    {
      id: "autonomous-research-agent",
      tag: "MULTI-AGENT RAG",
      badge: "LangGraph",
      accent: "#E5CD82",
      borderColor: "border-[#728E6D]/70 hover:border-[#E5CD82]",
      gradient: "from-[#0E2508] via-[#15370D] to-[#0E2508]",
      graphic: (
        <div className="relative w-full h-full flex flex-col items-center justify-between p-4 sm:p-5 text-white">
          <div className="flex items-center justify-between w-full font-mono text-[10px] tracking-widest text-[#E5CD82]">
            <span>NODE 01</span>
            <span>AUTONOMOUS</span>
          </div>

          {/* Agent Loop Visual */}
          <div className="relative my-4 w-28 h-28 flex items-center justify-center">
            <div className="absolute inset-0 rounded-full border-2 border-dashed border-[#E5CD82]/50 animate-spin" style={{ animationDuration: '22s' }} />
            <div className="absolute inset-2.5 rounded-full border border-[#728E6D]/50 animate-pulse" />
            <div className="w-14 h-14 rounded-2xl bg-[#15370D] border border-[#E5CD82] shadow-lg flex items-center justify-center transform rotate-12 transition-transform group-hover:rotate-45">
              <Brain className="w-7 h-7 text-[#E5CD82]" />
            </div>
            <div className="absolute top-0 right-1 w-3 h-3 rounded-full bg-[#E5CD82] shadow" />
            <div className="absolute bottom-1 left-1 w-2.5 h-2.5 rounded-full bg-[#728E6D] shadow" />
          </div>

          <div className="w-full text-center">
            <h4 className="font-black text-xl sm:text-2xl tracking-tighter uppercase text-[#E5CD82] leading-none mb-1">
              RESEARCH<br />AGENT
            </h4>
            <span className="text-[10px] font-mono tracking-widest text-[#FAF5E4]">
              PYTHON &bull; LANGGRAPH &bull; LLMS
            </span>
          </div>
        </div>
      ),
    },
    {
      id: "fake-news-detection",
      tag: "NLP CLASSIFIER",
      badge: "Scikit-Learn",
      accent: "#E5CD82",
      borderColor: "border-[#E5CD82]/60 hover:border-[#E5CD82]",
      gradient: "from-[#0E2508] via-[#15370D] to-[#0E2508]",
      graphic: (
        <div className="relative w-full h-full flex flex-col items-center justify-between p-4 sm:p-5 text-white">
          <div className="flex items-center justify-between w-full font-mono text-[10px] tracking-widest text-[#E5CD82]">
            <span>TF-IDF PIPELINE</span>
            <span>94%+ ACCURACY</span>
          </div>

          {/* NLP Verification Radar */}
          <div className="relative my-4 w-28 h-28 flex items-center justify-center">
            <div className="w-20 h-20 rounded-2xl bg-[#0E2508] border border-[#E5CD82]/60 p-2.5 flex flex-col justify-between shadow-lg">
              <div className="flex items-center justify-between">
                <Newspaper className="w-5 h-5 text-[#E5CD82]" />
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              </div>
              <div className="space-y-1">
                <div className="w-full h-1.5 bg-[#15370D] rounded-full overflow-hidden">
                  <div className="w-[94%] h-full bg-[#E5CD82]"></div>
                </div>
                <div className="text-[9px] font-mono text-[#E5CD82] text-right font-bold">VERIFIED</div>
              </div>
            </div>
          </div>

          <div className="w-full text-center">
            <h4 className="font-black text-xl sm:text-2xl tracking-tighter uppercase text-[#E5CD82] leading-none mb-1">
              FAKE NEWS<br />DETECTOR
            </h4>
            <span className="text-[10px] font-mono tracking-widest text-[#FAF5E4]">
              PYTHON &bull; SCIKIT-LEARN &bull; NLP
            </span>
          </div>
        </div>
      ),
    },
    {
      id: "quantum-image-reconstruction",
      tag: "DEFENSE RESEARCH",
      badge: "DRDO (PXE)",
      accent: "#E5CD82",
      borderColor: "border-[#728E6D]/70 hover:border-[#E5CD82]",
      gradient: "from-[#0E2508] via-[#15370D] to-[#0E2508]",
      graphic: (
        <div className="relative w-full h-full flex flex-col items-center justify-between p-4 sm:p-5 text-white">
          <div className="flex items-center justify-between w-full font-mono text-[10px] tracking-widest text-[#E5CD82]">
            <span>DRDO LABS</span>
            <span>CORRELATION</span>
          </div>

          {/* Quantum Correlation Disc */}
          <div className="relative my-4 w-28 h-28 rounded-full bg-[#0E2508] p-1.5 flex items-center justify-center shadow-xl border border-[#E5CD82]/40">
            <div className="w-full h-full rounded-full border border-[#728E6D]/50 flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-2 rounded-full border border-[#E5CD82]/40" />
              <div className="absolute w-full h-0.5 bg-gradient-to-r from-transparent via-[#E5CD82] to-white transform rotate-45 animate-spin" style={{ animationDuration: '6s' }} />
              <Cpu className="w-7 h-7 text-[#E5CD82] relative z-10" />
            </div>
          </div>

          <div className="w-full text-center">
            <h4 className="font-black text-xl sm:text-2xl tracking-tighter uppercase text-[#E5CD82] leading-none mb-1">
              QUANTUM<br />VISION
            </h4>
            <span className="text-[10px] font-mono tracking-widest text-[#FAF5E4]">
              SIGNAL MODELING &bull; NUMPY
            </span>
          </div>
        </div>
      ),
    },
    {
      id: "secure-email-system",
      tag: "CRYPTOGRAPHIC SMTP",
      badge: "Security",
      accent: "#E5CD82",
      borderColor: "border-[#728E6D]/70 hover:border-[#E5CD82]",
      gradient: "from-[#0E2508] via-[#15370D] to-[#0E2508]",
      graphic: (
        <div className="relative w-full h-full flex flex-col items-center justify-between p-4 sm:p-5 text-white">
          <div className="flex items-center justify-between w-full font-mono text-[10px] tracking-widest text-[#E5CD82]">
            <span>SSL / TLS 1.3</span>
            <span>ENCRYPTED</span>
          </div>

          {/* Security Shield Visual */}
          <div className="relative my-4 w-28 h-28 flex items-center justify-center">
            <div className="w-20 h-20 rounded-2xl bg-[#0E2508] border border-[#E5CD82]/50 p-3 flex flex-col items-center justify-center shadow-xl">
              <ShieldCheck className="w-10 h-10 text-[#E5CD82] mb-1 animate-pulse" />
              <span className="text-[8px] font-mono text-[#E5CD82] tracking-wider uppercase">SECURE SMTP</span>
            </div>
          </div>

          <div className="w-full text-center">
            <h4 className="font-black text-xl sm:text-2xl tracking-tighter uppercase text-[#E5CD82] leading-none mb-1">
              SECURE<br />EMAIL
            </h4>
            <span className="text-[10px] font-mono tracking-widest text-[#FAF5E4]">
              PYTHON &bull; CRYPTOGRAPHY &bull; SMTP
            </span>
          </div>
        </div>
      ),
    },
  ];

  const displayedPosters = postersConfig.filter((p) => {
    if (activeFilter === "all") return true;
    if (activeFilter === "fullstack") return p.id === "timetable-generator";
    if (activeFilter === "aiml") return p.id === "autonomous-research-agent" || p.id === "fake-news-detection" || p.id === "quantum-image-reconstruction";
    if (activeFilter === "security") return p.id === "secure-email-system";
    return true;
  });

  // Looping items for smooth continuous moving stream
  const streamPosters =
    displayedPosters.length <= 3
      ? [...displayedPosters, ...displayedPosters, ...displayedPosters]
      : [...displayedPosters, ...displayedPosters];

  // Auto-scrolling conveyor / moving horizontal track
  useEffect(() => {
    const el = scrollContainerRef.current;
    if (!el) return;

    let animId: number;
    let lastTime = performance.now();
    const speed = 32; // pixels per second

    const step = (time: number) => {
      const dt = Math.min((time - lastTime) / 1000, 0.1);
      lastTime = time;

      if (!isPaused && !isHovered && el) {
        el.scrollLeft += speed * dt;
        // Loop back seamlessly when reaching the end
        const maxScroll = el.scrollWidth - el.clientWidth;
        if (el.scrollLeft >= maxScroll - 5) {
          el.scrollLeft = 0;
        }
      }
      animId = requestAnimationFrame(step);
    };

    animId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(animId);
  }, [isPaused, isHovered, displayedPosters]);

  const handleScroll = (direction: "left" | "right") => {
    if (!scrollContainerRef.current) return;
    const scrollAmount = 300;
    scrollContainerRef.current.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <section id="projects" className="py-4 sm:py-7 relative scroll-mt-16 overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Running Header */}
        <div className="running-header mb-2 sm:mb-3">
          <span>PORTFOLIO SHOWCASE &bull; HORIZONTAL TRACK</span>
          <span>CURATED PRODUCTION &bull; RESEARCH &bull; SYSTEMS</span>
          <span>2026</span>
        </div>

        {/* Section Header with Left/Right Controls and Movement Indicator */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 mb-3 sm:mb-4">
          <div>
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#E5CD82] block mb-0.5">
              Tactile Project Posters &bull; Interactive Moving Stream
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#E5CD82] tracking-tight uppercase">
              Featured Systems &amp; Projects
            </h2>
          </div>

          {/* Interactive Navigation & Play/Pause Controls */}
          <div className="flex items-center gap-2">
            {/* Auto-moving status pill */}
            <div className="hidden sm:inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#0E2508] border border-[#728E6D]/50 font-mono text-[11px] text-[#E5CD82]">
              <span className={`w-2 h-2 rounded-full ${isPaused || isHovered ? "bg-amber-400" : "bg-emerald-400 animate-pulse"}`}></span>
              <span>{isPaused || isHovered ? "Paused" : "Auto-Moving"}</span>
            </div>

            {/* Play/Pause Button */}
            <button
              onClick={() => setIsPaused((prev) => !prev)}
              aria-label={isPaused ? "Resume auto-scroll" : "Pause auto-scroll"}
              className="p-1.5 rounded-lg bg-[#0E2508] border border-[#728E6D]/50 text-[#E5CD82] hover:bg-[#728E6D] hover:text-[#0E2508] transition-all"
              title={isPaused ? "Resume Movement" : "Pause Movement"}
            >
              {isPaused ? <Play className="w-3.5 h-3.5" /> : <Pause className="w-3.5 h-3.5" />}
            </button>

            {/* Left Scroll Button */}
            <button
              onClick={() => handleScroll("left")}
              aria-label="Scroll left"
              className="p-1.5 rounded-lg bg-[#0E2508] border border-[#728E6D]/50 text-[#E5CD82] hover:bg-[#728E6D] hover:text-[#0E2508] transition-all active:scale-95 shadow-sm"
              title="Scroll Left"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

            {/* Right Scroll Button */}
            <button
              onClick={() => handleScroll("right")}
              aria-label="Scroll right"
              className="p-1.5 rounded-lg bg-[#0E2508] border border-[#728E6D]/50 text-[#E5CD82] hover:bg-[#728E6D] hover:text-[#0E2508] transition-all active:scale-95 shadow-sm"
              title="Scroll Right"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 mb-3 sm:mb-4 font-mono text-xs">
          <button
            onClick={() => setActiveFilter("all")}
            className={`px-3 py-1 rounded-full transition-all ${
              activeFilter === "all"
                ? "bg-[#E5CD82] text-[#0E2508] font-bold shadow-md shadow-[#E5CD82]/30"
                : "bg-[#0E2508] text-[#D8E2D6] border border-[#728E6D]/50 hover:border-[#E5CD82]"
            }`}
          >
            All Projects ({postersConfig.length})
          </button>
          <button
            onClick={() => setActiveFilter("fullstack")}
            className={`px-3 py-1 rounded-full transition-all ${
              activeFilter === "fullstack"
                ? "bg-[#E5CD82] text-[#0E2508] font-bold shadow-md shadow-[#E5CD82]/30"
                : "bg-[#0E2508] text-[#D8E2D6] border border-[#728E6D]/50 hover:border-[#E5CD82]"
            }`}
          >
            Full-Stack Systems (1)
          </button>
          <button
            onClick={() => setActiveFilter("aiml")}
            className={`px-3 py-1 rounded-full transition-all ${
              activeFilter === "aiml"
                ? "bg-[#E5CD82] text-[#0E2508] font-bold shadow-md shadow-[#E5CD82]/30"
                : "bg-[#0E2508] text-[#D8E2D6] border border-[#728E6D]/50 hover:border-[#E5CD82]"
            }`}
          >
            Machine Learning &amp; AI (3)
          </button>
          <button
            onClick={() => setActiveFilter("security")}
            className={`px-3 py-1 rounded-full transition-all ${
              activeFilter === "security"
                ? "bg-[#E5CD82] text-[#0E2508] font-bold shadow-md shadow-[#E5CD82]/30"
                : "bg-[#0E2508] text-[#D8E2D6] border border-[#728E6D]/50 hover:border-[#E5CD82]"
            }`}
          >
            Security (1)
          </button>
        </div>
      </div>

      {/* Horizontally Scrollable & Moving Carousel Track */}
      <div
        className="relative w-full overflow-hidden"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Left Fade Mask */}
        <div className="absolute left-0 top-0 bottom-0 w-8 sm:w-16 bg-gradient-to-r from-[#15370D] to-transparent z-10 pointer-events-none" />

        {/* Right Fade Mask */}
        <div className="absolute right-0 top-0 bottom-0 w-8 sm:w-16 bg-gradient-to-l from-[#15370D] to-transparent z-10 pointer-events-none" />

        {/* Scrollable Container */}
        <div
          ref={scrollContainerRef}
          className="flex items-start gap-4 sm:gap-6 overflow-x-auto scrollbar-none py-3 px-4 sm:px-8 cursor-grab active:cursor-grabbing select-none"
          style={{ scrollBehavior: "auto" }}
        >
          {streamPosters.map((item, index) => {
            const project = PROJECTS.find((p) => p.id === item.id) || PROJECTS[0];
            return (
              <div
                key={`${item.id}-${index}`}
                className="shrink-0 flex flex-col items-center group cursor-pointer w-[240px] sm:w-[270px]"
              >
                {/* Tactile Poster Card */}
                <div
                  onClick={() => setSelectedProject(project)}
                  className={`relative w-full aspect-[3/4.2] rounded-2xl bg-gradient-to-br ${item.gradient} p-2 shadow-xl transition-all duration-300 transform group-hover:-translate-y-2 border-2 ${item.borderColor}`}
                  style={{
                    boxShadow: "0 12px 28px -8px rgba(14, 37, 8, 0.7), 0 0 16px -4px rgba(229, 205, 130, 0.2)",
                  }}
                >
                  {/* Poster Inner Matte Frame */}
                  <div className="relative w-full h-full rounded-xl bg-[#0E2508]/85 backdrop-blur-md border border-white/10 overflow-hidden flex flex-col justify-between">
                    {/* Top Tape Element */}
                    <div className="absolute top-1.5 left-1/2 -translate-x-1/2 w-10 h-2 rounded-full bg-white/20 backdrop-blur-md border border-white/25 z-20 pointer-events-none" />

                    {/* Graphic Content */}
                    {item.graphic}
                  </div>
                </div>

                {/* Minimalist Centered Metadata under each poster */}
                <div className="mt-2.5 text-center space-y-1 w-full">
                  <h3
                    onClick={() => setSelectedProject(project)}
                    className="font-mono text-sm sm:text-base font-bold text-[#E5CD82] group-hover:text-white transition-colors uppercase tracking-tight truncate"
                  >
                    {project.title}
                  </h3>
                  <p className="text-[11px] font-mono text-[#D8E2D6] tracking-wide truncate">
                    {item.tag}
                  </p>

                  {/* Direct Actions: GitHub Repo Link + Case Details */}
                  <div className="pt-1.5 flex items-center justify-center gap-2">
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="inline-flex items-center gap-1 text-[11px] font-mono font-bold text-[#E5CD82] hover:text-white transition-colors"
                    >
                      <span>Case Details</span>
                      <ArrowUpRight className="w-3 h-3" />
                    </button>

                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-[#0E2508] hover:bg-[#728E6D] text-[#E5CD82] hover:text-[#0E2508] border border-[#728E6D]/50 text-[10px] font-mono font-semibold transition-all"
                        title="View GitHub Repository"
                      >
                        <Github className="w-3 h-3 text-[#E5CD82]" />
                        <span>GitHub</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Case Study Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
}
