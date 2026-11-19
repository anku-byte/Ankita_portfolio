"use client";

import React from "react";
import { Github, Linkedin, Mail, Check, Sparkles, Brain, ArrowUpRight, Code2 } from "lucide-react";
import { PERSONAL_INFO } from "@/data/portfolioData";

export function MinimalHero() {
  return (
    <section className="pt-6 sm:pt-10 pb-12 sm:pb-16 overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Replaced giant 'Portfolio' with 'Ankita Naik' with refined, balanced typography */}
        <div className="text-center sm:text-left mb-5 sm:mb-7">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#C9B5E0]/30 border border-[#C9B5E0]/60 text-[#00105B] text-[11px] font-mono uppercase tracking-wider mb-2 font-bold">
            <Sparkles className="w-3 h-3 text-[#6061B6]" />
            <span>Full-Stack Developer &bull; AI/ML Enthusiast</span>
          </div>
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight text-[#00105B] select-none leading-none">
            Ankita Naik
          </h1>
        </div>

        {/* Hero Graphic Container with Palette: #00105B, #6061B6, #C9B5E0, #FCF9EC */}
        <div className="relative pt-4 sm:pt-8 pb-6 sm:pb-10">
          {/* Main Stylized Folder Motif */}
          <div className="relative mx-auto w-full max-w-4xl">
            {/* Folder Cutout Handle at Top */}
            <div className="w-48 sm:w-64 md:w-72 h-10 sm:h-12 mx-auto bg-[#FCF9EC] border-[6px] sm:border-[8px] border-[#6061B6] rounded-t-2xl sm:rounded-t-3xl border-b-0 -mb-[2px] relative z-0"></div>

            {/* Folder Main Body */}
            <div className="relative z-10 w-full min-h-[250px] sm:min-h-[290px] md:min-h-[320px] rounded-3xl bg-[#6061B6] shadow-xl p-6 sm:p-9 flex flex-col justify-between text-white overflow-hidden border border-[#00105B]/10">
              {/* Subtle lavender glow inside folder */}
              <div className="absolute top-0 right-0 w-72 h-72 bg-[#C9B5E0]/20 rounded-full blur-3xl pointer-events-none" />

              {/* Top row inside folder */}
              <div className="flex items-center justify-between border-b border-white/20 pb-3 text-xs font-mono tracking-widest text-white/90">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#C9B5E0] animate-pulse"></span>
                  <span className="uppercase text-[11px] font-semibold text-[#FCF9EC]">
                    Engineering &amp; AI Workspace
                  </span>
                </div>
                <span className="uppercase text-[11px] font-semibold text-[#C9B5E0]">
                  VSSUT &bull; 2026
                </span>
              </div>

              {/* Middle minimalist folder content */}
              <div className="py-4 sm:py-7 text-center">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#00105B]/30 text-[#FCF9EC] text-[11px] font-mono uppercase tracking-wider mb-2.5 backdrop-blur-sm border border-white/10">
                  <Brain className="w-3.5 h-3.5 text-[#C9B5E0]" />
                  <span>Full-Stack Systems &amp; Autonomous AI</span>
                </div>
                <p className="text-lg sm:text-2xl md:text-3xl font-bold tracking-tight text-white max-w-xl mx-auto leading-snug">
                  Building scalable web applications, agentic AI workflows &amp; algorithmic architectures.
                </p>
              </div>

              {/* Bottom bar inside folder */}
              <div className="flex items-center justify-between text-xs font-mono text-white/80 pt-3 border-t border-white/20">
                <span className="text-[11px] text-[#FCF9EC]/90">
                  DIR: /ankita-naik/fullstack-aiml
                </span>
                <a
                  href="#projects"
                  className="inline-flex items-center gap-1.5 text-white hover:text-[#C9B5E0] text-[11px] font-semibold transition-colors"
                >
                  <span>Explore AI &amp; Projects</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>

          {/* Floating Card Left: 2026 Edition + Socials (Deep Navy #00105B card) */}
          <div className="sm:absolute sm:top-10 sm:left-2 md:left-6 mt-4 sm:mt-0 z-20">
            <div className="w-full sm:w-56 bg-[#00105B] text-white p-4 rounded-2xl shadow-xl sm:-rotate-2 border border-[#6061B6]/30 transition-transform hover:rotate-0">
              <div className="flex items-center justify-between mb-3 text-xs font-mono text-[#C9B5E0]">
                <span className="font-bold tracking-wider uppercase text-[11px]">2026 Edition</span>
                <span className="text-[10px] px-1.5 py-0.5 rounded bg-[#6061B6] text-white">SWE + AI</span>
              </div>
              <div className="flex items-center gap-2 text-zinc-300 text-xs">
                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="p-1.5 rounded-lg bg-[#6061B6]/40 hover:bg-[#C9B5E0] hover:text-[#00105B] transition-colors text-white"
                >
                  <Github className="w-3.5 h-3.5" />
                </a>
                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="p-1.5 rounded-lg bg-[#6061B6]/40 hover:bg-[#C9B5E0] hover:text-[#00105B] transition-colors text-white"
                >
                  <Linkedin className="w-3.5 h-3.5" />
                </a>
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  aria-label="Email"
                  className="p-1.5 rounded-lg bg-[#6061B6]/40 hover:bg-[#C9B5E0] hover:text-[#00105B] transition-colors text-white"
                >
                  <Mail className="w-3.5 h-3.5" />
                </a>
                <span className="ml-auto text-[10px] font-mono text-[#C9B5E0]">@anku-byte</span>
              </div>
            </div>

            {/* Left Below Statement: Bold Stacked Slogan */}
            <div className="hidden md:block mt-5 max-w-[210px]">
              <h2 className="text-xs font-black uppercase tracking-wider leading-snug text-[#00105B]">
                BUILDING SCALABLE<br />
                SYSTEMS THROUGH CODE<br />
                &amp; APPLIED AI
              </h2>
            </div>
          </div>

          {/* Floating Card Right: Identity + Checklist Badge */}
          <div className="sm:absolute sm:top-10 sm:right-2 md:right-6 mt-4 sm:mt-0 z-20 flex flex-col items-start sm:items-end">
            {/* Identity Text */}
            <div className="text-left sm:text-right mb-3">
              <h2 className="text-xl sm:text-2xl font-black tracking-tight text-[#00105B] uppercase leading-none">
                ANKITA NAIK
              </h2>
              <p className="text-xs font-mono font-medium text-[#6061B6] mt-1">
                Full-Stack &bull; AI/ML Enthusiast
              </p>
            </div>

            {/* Tilted Checklist Badge */}
            <div className="w-full sm:w-56 bg-[#00105B] text-white p-4 rounded-2xl shadow-xl sm:rotate-2 border border-[#6061B6]/30 transition-transform hover:rotate-0">
              <div className="flex items-center justify-between mb-2 text-xs font-mono text-[#C9B5E0] border-b border-[#6061B6]/40 pb-2">
                <span className="text-[11px] font-bold uppercase tracking-wider">Core Capabilities</span>
                <Check className="w-3.5 h-3.5 text-[#C9B5E0]" />
              </div>
              <ul className="space-y-1.5 text-xs text-white/90 font-mono">
                <li className="flex items-center gap-2">
                  <span className="text-[#C9B5E0] font-bold">&bull;</span>
                  <span>Agentic AI &amp; LangGraph</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#C9B5E0] font-bold">&bull;</span>
                  <span>Full-Stack Next.js &amp; Prisma</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#C9B5E0] font-bold">&bull;</span>
                  <span>Quantum &amp; Signal Modeling</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Mobile-only slogan */}
        <div className="md:hidden text-center mt-4">
          <p className="text-xs font-bold uppercase tracking-wider text-[#6061B6] font-mono">
            BUILDING SCALABLE SYSTEMS &bull; FULL-STACK &bull; AI/ML
          </p>
        </div>
      </div>
    </section>
  );
}
