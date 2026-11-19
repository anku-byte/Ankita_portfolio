"use client";

import React from "react";
import { Project } from "@/types";
import { ExternalLink, Github, ArrowRight, Layers, CheckCircle2, Flame } from "lucide-react";

interface ProjectCardProps {
  project: Project;
  onOpenModal: (project: Project) => void;
}

export function ProjectCard({ project, onOpenModal }: ProjectCardProps) {
  return (
    <article
      className={`group relative flex flex-col justify-between rounded-2xl border border-zinc-200/90 dark:border-zinc-800/90 bg-white/70 dark:bg-zinc-900/60 p-6 sm:p-7 backdrop-blur-sm transition-all duration-300 hover:border-zinc-300 dark:hover:border-zinc-700 hover:shadow-xl hover:-translate-y-0.5 ${
        project.bentoSpan || "col-span-12"
      }`}
    >
      {/* Top Bar: Category, Date, Actions */}
      <div>
        <div className="flex items-center justify-between gap-3 mb-4">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-mono font-medium border border-sky-200/80 dark:border-sky-800/50 bg-sky-50 dark:bg-sky-950/40 text-sky-700 dark:text-sky-300">
              {project.category}
            </span>
            {project.featured && (
              <span className="hidden sm:inline-flex items-center gap-1 px-2 py-0.5 rounded text-[11px] font-mono font-semibold bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20">
                <Flame className="w-3 h-3 text-amber-500" />
                Featured
              </span>
            )}
          </div>

          <div className="flex items-center gap-2">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View ${project.title} source on GitHub`}
              className="p-2 rounded-lg border border-zinc-200 dark:border-zinc-800 text-zinc-500 hover:text-zinc-950 dark:hover:text-white hover:border-zinc-300 dark:hover:border-zinc-700 bg-white dark:bg-zinc-900 transition-colors"
            >
              <Github className="w-4 h-4" />
            </a>
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Open ${project.title} live demo`}
                className="p-2 rounded-lg border border-zinc-200 dark:border-zinc-800 text-zinc-500 hover:text-sky-600 dark:hover:text-sky-400 hover:border-zinc-300 dark:hover:border-zinc-700 bg-white dark:bg-zinc-900 transition-colors"
              >
                <ExternalLink className="w-4 h-4" />
              </a>
            )}
          </div>
        </div>

        {/* Title & Subtitle */}
        <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 group-hover:text-sky-600 dark:group-hover:text-sky-400 transition-colors mb-1.5">
          {project.title}
        </h3>
        <p className="text-xs sm:text-sm font-mono text-zinc-500 dark:text-zinc-400 mb-5">
          {project.subtitle}
        </p>

        {/* Problem & Solution Briefs */}
        <div className="space-y-3 mb-5 text-xs sm:text-sm">
          <div className="rounded-lg p-3 bg-zinc-50 dark:bg-zinc-950/40 border border-zinc-200/60 dark:border-zinc-800/60">
            <span className="font-mono text-[11px] font-semibold text-rose-600 dark:text-rose-400 uppercase tracking-wide block mb-1">
              Problem
            </span>
            <p className="text-zinc-600 dark:text-zinc-300 line-clamp-2 leading-relaxed">
              {project.problem}
            </p>
          </div>

          <div className="rounded-lg p-3 bg-zinc-50 dark:bg-zinc-950/40 border border-zinc-200/60 dark:border-zinc-800/60">
            <span className="font-mono text-[11px] font-semibold text-sky-600 dark:text-sky-400 uppercase tracking-wide block mb-1">
              Solution
            </span>
            <p className="text-zinc-600 dark:text-zinc-300 line-clamp-2 leading-relaxed">
              {project.solution}
            </p>
          </div>
        </div>

        {/* Metrics Row (if present) */}
        {project.metrics && project.metrics.length > 0 && (
          <div className="flex flex-wrap items-center gap-2 mb-5">
            {project.metrics.map((metric, idx) => (
              <div
                key={idx}
                className="px-2.5 py-1 rounded-md bg-emerald-50/60 dark:bg-emerald-950/30 border border-emerald-200/50 dark:border-emerald-800/40 text-[11px] font-mono text-emerald-700 dark:text-emerald-300 flex items-center gap-1.5"
              >
                <span className="font-bold">{metric.value}</span>
                <span className="text-zinc-500 dark:text-zinc-400">{metric.label}</span>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Bottom Area: Tech Stack & Case Study Button */}
      <div className="pt-4 border-t border-zinc-200/70 dark:border-zinc-800/70">
        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.techStack.slice(0, 5).map((tech) => (
            <span
              key={tech}
              className="text-[11px] font-mono px-2 py-0.5 rounded border border-zinc-200 dark:border-zinc-800 bg-zinc-100/70 dark:bg-zinc-800/60 text-zinc-600 dark:text-zinc-300"
            >
              {tech}
            </span>
          ))}
          {project.techStack.length > 5 && (
            <span className="text-[11px] font-mono px-1.5 py-0.5 text-zinc-400">
              +{project.techStack.length - 5}
            </span>
          )}
        </div>

        <button
          onClick={() => onOpenModal(project)}
          className="w-full inline-flex items-center justify-between px-3 py-2 text-xs font-semibold rounded-lg bg-zinc-100 hover:bg-zinc-200 dark:bg-zinc-800 dark:hover:bg-zinc-700/80 text-zinc-800 dark:text-zinc-200 transition-all group/btn"
        >
          <span>Read Case Study</span>
          <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
        </button>
      </div>
    </article>
  );
}
