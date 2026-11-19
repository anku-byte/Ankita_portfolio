"use client";

import React, { useState } from "react";
import { PROJECTS } from "@/data/portfolioData";
import { Project } from "@/types";
import { ExternalLink, Github, ArrowUpRight, Sparkles, Brain } from "lucide-react";
import { ProjectModal } from "./ProjectModal";

export function FolderProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [filter, setFilter] = useState<"all" | "aiml" | "fullstack">("all");

  const displayedProjects = PROJECTS.filter((p) => {
    if (filter === "all") return true;
    if (filter === "aiml") return p.category === "AI / ML" || p.category === "AI & Systems" || p.category === "Research";
    if (filter === "fullstack") return p.category === "Full-Stack" || p.category === "Web Apps";
    return true;
  });

  return (
    <section id="projects" className="py-8 sm:py-12">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Running Header */}
        <div className="running-header">
          <span>PORTFOLIO DIRECTORY</span>
          <span>FULL-STACK &amp; AI/ML WORKSPACE</span>
          <span>2026</span>
        </div>

        {/* Tabbed Folder Container */}
        <div>
          {/* Top Tabs */}
          <div className="flex items-end gap-1.5 pl-2 sm:pl-4 overflow-x-auto scrollbar-none">
            <button
              onClick={() => setFilter("all")}
              className={`px-4 sm:px-6 py-2.5 text-xs font-mono uppercase tracking-wider font-bold transition-all rounded-t-xl ${
                filter === "all"
                  ? "bg-[#6061B6] text-white shadow-sm"
                  : "bg-[#00105B] text-white/80 hover:bg-[#6061B6]/80"
              }`}
            >
              All Projects &rarr;
            </button>
            <button
              onClick={() => setFilter("aiml")}
              className={`px-4 sm:px-6 py-2.5 text-xs font-mono uppercase tracking-wider font-bold transition-all rounded-t-xl flex items-center gap-1.5 ${
                filter === "aiml"
                  ? "bg-[#6061B6] text-white shadow-sm"
                  : "bg-[#00105B] text-white/80 hover:bg-[#6061B6]/80"
              }`}
            >
              <Brain className="w-3.5 h-3.5 text-[#C9B5E0]" />
              <span>AI / ML Projects</span>
            </button>
            <button
              onClick={() => setFilter("fullstack")}
              className={`px-4 sm:px-6 py-2.5 text-xs font-mono uppercase tracking-wider font-bold transition-all rounded-t-xl ${
                filter === "fullstack"
                  ? "bg-[#6061B6] text-white shadow-sm"
                  : "bg-[#00105B] text-white/80 hover:bg-[#6061B6]/80"
              }`}
            >
              Full-Stack Systems
            </button>
          </div>

          {/* Folder Body */}
          <div className="rounded-2xl sm:rounded-3xl bg-[#6061B6] text-white p-5 sm:p-8 shadow-xl border border-[#00105B]/15">
            {/* Gallery Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              {displayedProjects.slice(0, 4).map((project) => (
                <div
                  key={project.id}
                  className="bg-[#FCF9EC] text-[#00105B] rounded-2xl p-4 sm:p-5 shadow-lg border border-[#C9B5E0] flex flex-col justify-between transition-all hover:-translate-y-1 hover:shadow-2xl group"
                >
                  {/* Window Bar */}
                  <div>
                    <div className="flex items-center justify-between pb-2.5 border-b border-[#E9E2CA] mb-3">
                      <div className="flex items-center gap-1.5">
                        <span className="w-2.5 h-2.5 rounded-full bg-[#00105B]"></span>
                        <span className="w-2.5 h-2.5 rounded-full bg-[#6061B6]"></span>
                        <span className="w-2.5 h-2.5 rounded-full bg-[#C9B5E0]"></span>
                      </div>
                      <span className="text-[10px] font-mono text-[#6061B6] font-semibold uppercase">
                        {project.period}
                      </span>
                    </div>

                    {/* Category pill */}
                    <div className="flex items-center gap-1.5 mb-2">
                      <span className="inline-block px-2.5 py-0.5 rounded-full bg-[#C9B5E0]/40 text-[#00105B] text-[10px] font-mono font-bold uppercase tracking-wider border border-[#C9B5E0]/70">
                        {project.category}
                      </span>
                      {project.category === "AI / ML" && (
                        <span className="inline-flex items-center gap-0.5 text-[9px] font-mono text-[#6061B6] font-semibold">
                          <Sparkles className="w-2.5 h-2.5 text-[#6061B6]" />
                          <span>Featured AI</span>
                        </span>
                      )}
                    </div>

                    {/* Title */}
                    <h3 className="font-black text-base sm:text-lg text-[#00105B] group-hover:text-[#6061B6] transition-colors leading-tight mb-2">
                      {project.title}
                    </h3>

                    {/* Brief description */}
                    <p className="text-xs text-[#00105B]/80 line-clamp-2 leading-relaxed mb-4 font-normal">
                      {project.subtitle}
                    </p>

                    {/* Tech stack pills */}
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {project.techStack.slice(0, 3).map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-0.5 rounded bg-[#E9E2CA]/50 text-[#00105B] text-[10px] font-mono font-medium border border-[#E9E2CA]"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.techStack.length > 3 && (
                        <span className="px-1.5 py-0.5 rounded bg-[#E9E2CA]/50 text-[#6061B6] text-[10px] font-mono font-medium">
                          +{project.techStack.length - 3}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Actions & Links */}
                  <div className="pt-3 border-t border-[#E9E2CA] flex items-center justify-between">
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="inline-flex items-center gap-1 text-xs font-mono font-bold text-[#6061B6] hover:text-[#00105B] hover:underline transition-colors"
                    >
                      <span>Case Details</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </button>

                    <div className="flex items-center gap-2">
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label="GitHub Repository"
                          className="p-1.5 rounded-lg bg-[#E9E2CA]/60 hover:bg-[#6061B6] hover:text-white text-[#00105B] transition-colors"
                        >
                          <Github className="w-3.5 h-3.5" />
                        </a>
                      )}
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label="Live Demo"
                          className="p-1.5 rounded-lg bg-[#E9E2CA]/60 hover:bg-[#6061B6] hover:text-white text-[#00105B] transition-colors"
                        >
                          <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
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
