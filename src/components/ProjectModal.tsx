"use client";

import React, { useEffect } from "react";
import { Project } from "@/types";
import { X, ExternalLink, Github, AlertCircle, Cpu } from "lucide-react";
import { PERSONAL_INFO } from "@/data/portfolioData";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (project) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-fade-in">
      <div
        className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-3xl bg-[#122C0C] border-2 border-[#E5CD82] shadow-2xl shadow-black p-6 sm:p-8 text-white"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
      >
        {/* Window Top Controls & Close */}
        <div className="flex items-center justify-between pb-3.5 border-b border-[#2C4F22] mb-5">
          <div className="flex items-center gap-1.5">
            <span className="w-3 h-3 rounded-full bg-[#E5CD82]"></span>
            <span className="w-3 h-3 rounded-full bg-[#728E6D]"></span>
            <span className="w-3 h-3 rounded-full bg-[#15370D] border border-[#728E6D]"></span>
            <span className="text-xs font-mono text-[#E5CD82] ml-2">
              DIR: /projects/{project.id}
            </span>
          </div>
          <button
            onClick={onClose}
            aria-label="Close modal"
            className="p-1.5 rounded-full border border-[#2C4F22] bg-[#0E2508] hover:bg-[#E5CD82] text-[#E5CD82] hover:text-[#15370D] transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Modal Header */}
        <div className="mb-5">
          <div className="flex items-center gap-2 mb-2 font-mono text-xs">
            <span className="px-2.5 py-0.5 rounded-full bg-[#E5CD82] text-[#15370D] font-black uppercase tracking-wider text-[10px]">
              {project.category}
            </span>
            <span className="text-[#728E6D]">&bull;</span>
            <span className="text-[#C8D9C5] font-medium">{project.period}</span>
          </div>
          <h2 id="modal-title" className="text-2xl sm:text-3xl font-black text-[#E5CD82] tracking-tight">
            {project.title}
          </h2>
          <p className="text-sm text-[#C8D9C5] mt-1 font-medium">
            {project.subtitle}
          </p>
        </div>

        {/* Metrics Banner */}
        {project.metrics && project.metrics.length > 0 && (
          <div className="grid grid-cols-3 gap-2 p-3 mb-5 rounded-2xl bg-[#0E2508] border border-[#2C4F22]">
            {project.metrics.map((m, idx) => (
              <div key={idx} className="text-center">
                <div className="text-base sm:text-lg font-mono font-black text-[#E5CD82]">
                  {m.value}
                </div>
                <div className="text-[10px] font-mono uppercase tracking-wider text-[#C8D9C5]">
                  {m.label}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Problem & Solution */}
        <div className="space-y-3.5 text-xs sm:text-sm text-[#F0F4FF] mb-5">
          <div className="p-4 rounded-xl bg-[#0E2508] border border-[#2C4F22]">
            <span className="font-mono text-xs uppercase font-bold text-[#E5CD82] flex items-center gap-1.5 mb-1">
              <AlertCircle className="w-3.5 h-3.5" />
              The Challenge &amp; Problem
            </span>
            <p className="leading-relaxed text-[#D2E2D0]">{project.problem}</p>
          </div>

          <div className="p-4 rounded-xl bg-[#0E2508] border border-[#2C4F22]">
            <span className="font-mono text-xs uppercase font-bold text-[#728E6D] flex items-center gap-1.5 mb-1">
              <Cpu className="w-3.5 h-3.5 text-[#728E6D]" />
              Architected Solution &amp; Implementation
            </span>
            <p className="leading-relaxed text-[#D2E2D0]">{project.solution}</p>
          </div>
        </div>

        {/* Tech Stack Chips */}
        <div className="mb-6">
          <span className="text-xs font-mono font-bold uppercase text-[#C8D9C5] block mb-2">
            Technology Stack:
          </span>
          <div className="flex flex-wrap gap-1.5">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-1 rounded-lg bg-[#0E2508] text-[#E5CD82] border border-[#2C4F22] font-mono text-[11px]"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Actions */}
        <div className="flex flex-wrap items-center justify-between gap-3 pt-4 border-t border-[#2C4F22]">
          <div className="flex items-center gap-2">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#E5CD82] text-[#15370D] text-xs font-mono font-black hover:bg-white transition-all shadow-md"
              >
                <Github className="w-3.5 h-3.5" />
                <span>View GitHub Repository</span>
              </a>
            )}
          </div>

          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl border border-[#2C4F22] bg-[#0E2508] hover:bg-[#E5CD82] text-[#C8D9C5] hover:text-[#15370D] text-xs font-mono font-bold transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
