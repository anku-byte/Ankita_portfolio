"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Code2, Database, Cpu, Award, Sparkles } from "lucide-react";
import { PERSONAL_INFO } from "@/data/portfolioData";

export function FolderIntroSection() {
  const [activeTab, setActiveTab] = useState<"intro" | "expertise" | "stack">("intro");

  return (
    <section id="about" className="py-4 sm:py-6">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Running Header Rule */}
        <div className="running-header-light mb-3 sm:mb-4">
          <span>ABOUT ANKITA NAIK</span>
          <span>B.TECH CSE &bull; VSSUT (CGPA: 9.49)</span>
          <span>2026</span>
        </div>

        {/* Tabbed Folder Container */}
        <div className="relative">
          {/* Top Folder Tabs */}
          <div className="flex items-end gap-1.5 pl-2 sm:pl-4 overflow-x-auto scrollbar-none">
            <button
              onClick={() => setActiveTab("intro")}
              className={`px-4 sm:px-6 py-2.5 text-xs font-mono uppercase tracking-wider font-bold transition-all rounded-t-xl border-t border-x ${
                activeTab === "intro"
                  ? "bg-[#0E2508] text-[#E5CD82] border-[#E5CD82]/70 shadow-lg"
                  : "bg-[#15370D] text-[#728E6D] border-[#728E6D]/40 hover:text-white"
              }`}
            >
              Introduction &rarr;
            </button>
            <button
              onClick={() => setActiveTab("expertise")}
              className={`px-4 sm:px-6 py-2.5 text-xs font-mono uppercase tracking-wider font-bold transition-all rounded-t-xl border-t border-x ${
                activeTab === "expertise"
                  ? "bg-[#0E2508] text-[#E5CD82] border-[#E5CD82]/70 shadow-lg"
                  : "bg-[#15370D] text-[#728E6D] border-[#728E6D]/40 hover:text-white"
              }`}
            >
              Architecture &amp; Systems
            </button>
            <button
              onClick={() => setActiveTab("stack")}
              className={`px-4 sm:px-6 py-2.5 text-xs font-mono uppercase tracking-wider font-bold transition-all rounded-t-xl border-t border-x ${
                activeTab === "stack"
                  ? "bg-[#0E2508] text-[#E5CD82] border-[#E5CD82]/70 shadow-lg"
                  : "bg-[#15370D] text-[#728E6D] border-[#728E6D]/40 hover:text-white"
              }`}
            >
              Tools &amp; Stack
            </button>
          </div>

          {/* Folder Body with tight gaps and borders */}
          <div className="rounded-2xl sm:rounded-3xl bg-[#0E2508] text-[#FAF5E4] p-4 sm:p-7 shadow-2xl border border-[#728E6D]/50">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-5 sm:gap-6 items-center">
              {/* Left Column: Clean Framed Portrait Only (No Text, Small Side Borders) */}
              <div className="md:col-span-5 flex justify-center">
                <div className="w-full max-w-[260px] bg-[#15370D] rounded-2xl shadow-xl overflow-hidden border border-[#728E6D]/60 p-2 sm:p-2.5">
                  {/* Subtle Window Dot Header */}
                  <div className="flex items-center gap-1.5 pb-2 border-b border-[#728E6D]/40 px-1">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#E5CD82]/80"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-[#728E6D]/80"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-[#204E14]/80"></span>
                  </div>

                  {/* Real Photo Only - No overlay text, no footer text */}
                  <div className="mt-2 relative rounded-xl aspect-[3/4] overflow-hidden border border-[#E5CD82]/30 shadow-inner group">
                    <Image
                      src="/ankita.jpg"
                      alt="Ankita Naik"
                      fill
                      priority
                      className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </div>
              </div>

              {/* Right Column: Information Content */}
              <div className="md:col-span-7 space-y-5">
                {activeTab === "intro" && (
                  <div className="space-y-4">
                    {/* Header badge & Title */}
                    <div className="flex flex-wrap items-center gap-3">
                      <span className="px-3.5 py-1 rounded-full bg-[#15370D] text-[#E5CD82] border border-[#E5CD82]/50 font-bold text-xs uppercase tracking-wider shadow-sm font-mono flex items-center gap-1.5">
                        <Sparkles className="w-3 h-3 text-[#E5CD82]" />
                        <span>Hi! I&apos;m Ankita</span>
                      </span>
                      <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-[#E5CD82]">
                        About Me
                      </h2>
                    </div>

                    {/* Exact Bio specified by the user */}
                    <p className="text-[#FAF5E4] text-sm sm:text-base leading-relaxed font-normal">
                      I’m a B.Tech student at Veer Surendra Sai University of Technology (VSSUT) focused on building practical, full-stack web applications and intelligent system tools. My work spans modern web architectures—using Next.js, React, TypeScript, and Prisma—as well as Python-based system monitoring and machine learning.
                    </p>

                    {/* Academic Highlight Pill */}
                    <div className="p-3.5 rounded-2xl bg-[#15370D] border border-[#E5CD82]/40 flex items-center justify-between">
                      <div className="flex items-center gap-2.5">
                        <Award className="w-5 h-5 text-[#E5CD82]" />
                        <div>
                          <span className="text-xs font-mono font-bold text-[#E5CD82] block">Academic Standing</span>
                          <span className="text-[11px] text-[#D8E2D6]">Veer Surendra Sai University of Technology (VSSUT)</span>
                        </div>
                      </div>
                      <span className="px-3 py-1 rounded-xl bg-[#E5CD82] text-[#0E2508] font-mono font-black text-xs shadow">
                        CGPA: 9.49
                      </span>
                    </div>

                    {/* Quick highlight pills */}
                    <div className="flex flex-wrap gap-2 pt-1">
                      <span className="px-2.5 py-1 rounded-lg bg-[#15370D] text-[#E5CD82] font-mono text-xs border border-[#728E6D]/50">
                        Next.js 14 &bull; React &bull; TypeScript
                      </span>
                      <span className="px-2.5 py-1 rounded-lg bg-[#15370D] text-[#E5CD82] font-mono text-xs border border-[#728E6D]/50">
                        Prisma ORM &bull; PostgreSQL
                      </span>
                      <span className="px-2.5 py-1 rounded-lg bg-[#15370D] text-[#E5CD82] font-mono text-xs border border-[#728E6D]/50">
                        Python System Monitoring &bull; ML
                      </span>
                      <span className="px-2.5 py-1 rounded-lg bg-[#15370D] text-[#E5CD82] font-mono text-xs border border-[#728E6D]/50">
                        DRDO (PXE) Research Intern
                      </span>
                    </div>
                  </div>
                )}

                {activeTab === "expertise" && (
                  <div className="space-y-4">
                    <span className="px-3.5 py-1 rounded-full bg-[#15370D] text-[#E5CD82] border border-[#E5CD82]/50 font-bold text-xs uppercase tracking-wider shadow-sm inline-block font-mono">
                      Specializations
                    </span>
                    <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-[#E5CD82]">
                      Full-Stack &amp; System Architecture
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                      <div className="p-3.5 rounded-xl bg-[#15370D] border border-[#728E6D]/50">
                        <h4 className="font-bold text-sm text-[#E5CD82] mb-1 flex items-center gap-1.5">
                          <Code2 className="w-3.5 h-3.5 text-[#E5CD82]" />
                          Modern Web Architectures
                        </h4>
                        <p className="text-xs text-[#D8E2D6] leading-relaxed">
                          Server-side rendering, App Router patterns, type-safe API contracts with Next.js, React, and TypeScript.
                        </p>
                      </div>
                      <div className="p-3.5 rounded-xl bg-[#15370D] border border-[#728E6D]/50">
                        <h4 className="font-bold text-sm text-[#E5CD82] mb-1 flex items-center gap-1.5">
                          <Database className="w-3.5 h-3.5 text-[#E5CD82]" />
                          Databases &amp; Prisma
                        </h4>
                        <p className="text-xs text-[#D8E2D6] leading-relaxed">
                          PostgreSQL schema design, ACID transactions, Prisma ORM migrations, JWT session validation.
                        </p>
                      </div>
                      <div className="p-3.5 rounded-xl bg-[#15370D] border border-[#728E6D]/50">
                        <h4 className="font-bold text-sm text-[#E5CD82] mb-1 flex items-center gap-1.5">
                          <Cpu className="w-3.5 h-3.5 text-[#E5CD82]" />
                          Python System Monitoring
                        </h4>
                        <p className="text-xs text-[#D8E2D6] leading-relaxed">
                          Intelligent system telemetry, automated pipeline tracking, and machine learning models.
                        </p>
                      </div>
                      <div className="p-3.5 rounded-xl bg-[#15370D] border border-[#728E6D]/50">
                        <h4 className="font-bold text-sm text-[#E5CD82] mb-1 flex items-center gap-1.5">
                          <Award className="w-3.5 h-3.5 text-[#E5CD82]" />
                          Algorithmic Rigor (CGPA: 9.49)
                        </h4>
                        <p className="text-xs text-[#D8E2D6] leading-relaxed">
                          Consistently applying algorithmic depth to real-world software bottlenecks and research problems.
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === "stack" && (
                  <div className="space-y-4">
                    <span className="px-3.5 py-1 rounded-full bg-[#15370D] text-[#E5CD82] border border-[#E5CD82]/50 font-bold text-xs uppercase tracking-wider shadow-sm inline-block font-mono">
                      Technologies
                    </span>
                    <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-[#E5CD82]">
                      Full-Stack &amp; Python Stack
                    </h2>
                    <div className="flex flex-wrap gap-2 pt-2">
                      {[
                        "Next.js 14",
                        "React.js",
                        "TypeScript",
                        "Prisma ORM",
                        "PostgreSQL",
                        "Tailwind CSS",
                        "Python",
                        "Machine Learning",
                        "Scikit-Learn",
                        "NLP / TF-IDF",
                        "System Monitoring",
                        "LangGraph",
                        "NumPy & SciPy",
                        "Node.js & Express",
                        "Git & GitHub",
                      ].map((item) => (
                        <span
                          key={item}
                          className="px-3 py-1.5 rounded-lg bg-[#15370D] text-[#E5CD82] font-mono text-xs font-semibold hover:border-[#E5CD82] transition-colors border border-[#728E6D]/50"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
