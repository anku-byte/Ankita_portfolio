"use client";

import React, { useState } from "react";
import { SKILL_CATEGORIES } from "@/data/portfolioData";
import { Wrench, Terminal, Cpu, Database, Layout, GitBranch, BookOpen, Check } from "lucide-react";

export function SkillsSection() {
  const [activeTab, setActiveTab] = useState<number>(0);

  const categoryIcons = [
    Layout,
    Database,
    Cpu,
    GitBranch,
    BookOpen,
  ];

  return (
    <section id="skills" className="py-20 md:py-28 relative scroll-mt-16 bg-zinc-50/50 dark:bg-zinc-950/40 border-y border-zinc-200/80 dark:border-zinc-800/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="max-w-2xl mb-12">
          <div className="inline-flex items-center gap-2 font-mono text-xs font-semibold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 mb-2">
            <Wrench className="w-4 h-4" />
            Engineering Taxonomy
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-zinc-900 dark:text-white tracking-tight">
            Technical Stack & Capabilities
          </h2>
          <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400 mt-2">
            A battle-tested repertoire of languages, frameworks, and database engines prioritized for production reliability and developer ergonomics.
          </p>
        </div>

        {/* Category Navigation Pills */}
        <div className="flex flex-wrap gap-2 mb-8">
          {SKILL_CATEGORIES.map((cat, idx) => {
            const Icon = categoryIcons[idx] || Wrench;
            const isActive = activeTab === idx;
            return (
              <button
                key={cat.title}
                onClick={() => setActiveTab(idx)}
                className={`inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-mono font-medium transition-all ${
                  isActive
                    ? "bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-950 shadow-md"
                    : "border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white"
                }`}
              >
                <Icon className={`w-3.5 h-3.5 ${isActive ? "text-sky-400 dark:text-sky-600" : "text-zinc-400"}`} />
                <span>{cat.title}</span>
              </button>
            );
          })}
        </div>

        {/* Active Category Display & Code Preview Bento */}
        <div className="grid grid-cols-12 gap-6 items-start">
          {/* Skills Badges Grid */}
          <div className="col-span-12 lg:col-span-7 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/80 p-6 sm:p-8 backdrop-blur-sm shadow-sm">
            <div className="mb-6">
              <h3 className="text-xl font-bold text-zinc-900 dark:text-white">
                {SKILL_CATEGORIES[activeTab].title}
              </h3>
              <p className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400 mt-1">
                {SKILL_CATEGORIES[activeTab].description}
              </p>
            </div>

            {/* Badges without cliche percentage bars */}
            <div className="flex flex-wrap gap-2.5">
              {SKILL_CATEGORIES[activeTab].skills.map((skill) => (
                <div
                  key={skill.name}
                  className={`group relative inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-mono font-medium transition-all duration-200 ${
                    skill.highlight
                      ? "border border-sky-300 dark:border-sky-800 bg-sky-50/60 dark:bg-sky-950/40 text-sky-800 dark:text-sky-300 shadow-sm hover:scale-105"
                      : "border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900 text-zinc-700 dark:text-zinc-300 hover:border-zinc-300 dark:hover:border-zinc-700 hover:scale-105"
                  }`}
                >
                  <span
                    className={`h-1.5 w-1.5 rounded-full ${
                      skill.highlight ? "bg-sky-500 animate-pulse" : "bg-emerald-500"
                    }`}
                  />
                  <span>{skill.name}</span>
                  {skill.highlight && (
                    <span className="text-[10px] text-sky-600 dark:text-sky-400 font-semibold uppercase tracking-wider">
                      Core
                    </span>
                  )}
                </div>
              ))}
            </div>

            <div className="mt-8 pt-6 border-t border-zinc-100 dark:border-zinc-800/80 flex items-center justify-between text-xs text-zinc-500 dark:text-zinc-400 font-mono">
              <span className="flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5 text-emerald-500" />
                Zero arbitrary percentage bars
              </span>
              <span>100% Verified in Projects</span>
            </div>
          </div>

          {/* Interactive Terminal / Code Snippet Panel */}
          <div className="col-span-12 lg:col-span-5 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-zinc-950 p-5 font-mono text-xs text-zinc-300 shadow-xl overflow-hidden">
            <div className="flex items-center justify-between pb-3 mb-4 border-b border-zinc-800 text-zinc-400">
              <div className="flex items-center gap-2">
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                </div>
                <span className="text-[11px] text-zinc-400 font-medium ml-2">ankita.config.ts</span>
              </div>
              <Terminal className="w-3.5 h-3.5 text-sky-400" />
            </div>

            <pre className="text-zinc-300 overflow-x-auto leading-relaxed text-[12px]">
              <code>
                <span className="text-zinc-500">// Engineering principles</span>
                <br />
                <span className="text-sky-400">export const</span>{" "}
                <span className="text-amber-300">developer</span> = &#123;
                <br />
                {"  "}name: <span className="text-emerald-300">&quot;Ankita Naik&quot;</span>,
                <br />
                {"  "}role: <span className="text-emerald-300">&quot;Full-Stack Engineer&quot;</span>,
                <br />
                {"  "}education: <span className="text-emerald-300">&quot;B.Tech CSE @ VSSUT&quot;</span>,
                <br />
                {"  "}stack: [
                <br />
                {"    "}<span className="text-sky-300">&quot;Next.js 14&quot;</span>,{" "}
                <span className="text-sky-300">&quot;TypeScript&quot;</span>,
                <br />
                {"    "}<span className="text-sky-300">&quot;PostgreSQL&quot;</span>,{" "}
                <span className="text-sky-300">&quot;Prisma&quot;</span>,
                <br />
                {"    "}<span className="text-sky-300">&quot;Python&quot;</span>,{" "}
                <span className="text-sky-300">&quot;Tailwind CSS&quot;</span>
                <br />
                {"  "}],
                <br />
                {"  "}strengths: &#123;
                <br />
                {"    "}cleanArchitecture: <span className="text-amber-400">true</span>,
                <br />
                {"    "}algorithmicConstraints: <span className="text-amber-400">true</span>,
                <br />
                {"    "}rapidPrototyping: <span className="text-amber-400">true</span>,
                <br />
                {"  "}&#125;
                <br />
                &#125;;
              </code>
            </pre>
          </div>
        </div>
      </div>
    </section>
  );
}
