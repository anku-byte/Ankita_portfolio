"use client";

import React, { useState } from "react";
import { ArrowDown, FileText, Github, Linkedin, Mail, Check, Sparkles, Terminal } from "lucide-react";
import { PERSONAL_INFO } from "@/data/portfolioData";

export function Hero() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Background radial gradient glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[520px] h-[340px] bg-gradient-to-tr from-sky-500/15 via-emerald-500/10 to-transparent blur-3xl pointer-events-none rounded-full" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Status Pill */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-zinc-200 dark:border-zinc-800 bg-white/70 dark:bg-zinc-900/70 backdrop-blur-md mb-8 shadow-sm">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span className="text-xs font-mono font-medium text-zinc-700 dark:text-zinc-300">
            Open to SWE Internships & Full-Time Roles
          </span>
          <span className="hidden sm:inline-block text-xs font-mono text-zinc-400 dark:text-zinc-500 border-l border-zinc-200 dark:border-zinc-800 pl-2">
            VSSUT '28
          </span>
        </div>

        {/* Main Value Proposition Headline */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-zinc-900 dark:text-zinc-50 leading-[1.12] mb-6">
          Building <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-cyan-400 dark:from-sky-400 dark:to-emerald-400">scalable web apps</span> and solving real-world operational bottlenecks.
        </h1>

        {/* Sub-headline */}
        <p className="text-lg sm:text-xl text-zinc-600 dark:text-zinc-400 max-w-3xl leading-relaxed mb-8">
          Hi, I&apos;m <span className="font-semibold text-zinc-900 dark:text-zinc-100">{PERSONAL_INFO.name}</span> — a Full-Stack Software Developer & CS undergraduate at <span className="text-zinc-800 dark:text-zinc-200 font-medium">VSSUT</span>, specializing in <span className="font-medium text-sky-600 dark:text-sky-400">React</span>, <span className="font-medium text-sky-600 dark:text-sky-400">Next.js</span>, <span className="font-medium text-sky-600 dark:text-sky-400">TypeScript</span>, and high-performance backend architectures.
        </p>

        {/* CTAs & Socials Row */}
        <div className="flex flex-wrap items-center gap-3.5 mb-12">
          {/* Primary CTA */}
          <a
            href="#projects"
            className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-white dark:bg-white dark:text-zinc-950 dark:hover:bg-zinc-100 font-medium text-sm transition-all shadow-sm hover:shadow active:scale-[0.99]"
          >
            <span>View Projects</span>
            <ArrowDown className="w-4 h-4 animate-bounce" />
          </a>

          {/* Secondary CTA */}
          <a
            href="#contact"
            className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl border border-zinc-300 dark:border-zinc-800 bg-white/70 dark:bg-zinc-900/70 hover:bg-zinc-100 dark:hover:bg-zinc-800/80 text-zinc-800 dark:text-zinc-200 font-medium text-sm transition-all backdrop-blur-sm"
          >
            <span>Contact Me</span>
          </a>

          {/* Resume link */}
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl border border-zinc-200 dark:border-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-700 text-zinc-600 dark:text-zinc-300 hover:text-zinc-950 dark:hover:text-white font-medium text-sm transition-colors"
          >
            <FileText className="w-4 h-4 text-sky-500" />
            <span>Resume</span>
          </a>

          {/* Divider */}
          <div className="hidden sm:block h-7 w-[1px] bg-zinc-200 dark:bg-zinc-800 mx-1" />

          {/* Social Links */}
          <div className="flex items-center gap-2">
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="p-3 rounded-xl border border-zinc-200 dark:border-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-700 bg-white/50 dark:bg-zinc-900/50 text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-white transition-all hover:scale-105"
            >
              <Github className="w-4 h-4" />
            </a>

            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="p-3 rounded-xl border border-zinc-200 dark:border-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-700 bg-white/50 dark:bg-zinc-900/50 text-zinc-600 dark:text-zinc-400 hover:text-[#0077b5] dark:hover:text-[#0077b5] transition-all hover:scale-105"
            >
              <Linkedin className="w-4 h-4" />
            </a>

            <button
              onClick={handleCopyEmail}
              aria-label="Copy Email Address"
              className="group relative flex items-center gap-2 px-3 py-3 rounded-xl border border-zinc-200 dark:border-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-700 bg-white/50 dark:bg-zinc-900/50 text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-white text-xs font-mono transition-all"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4 text-emerald-500" />
                  <span className="text-emerald-500 font-semibold">Copied!</span>
                </>
              ) : (
                <>
                  <Mail className="w-4 h-4 text-sky-500" />
                  <span className="hidden md:inline">Copy Email</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Technical Snapshot Banner */}
        <div className="p-4 sm:p-5 rounded-2xl border border-zinc-200/90 dark:border-zinc-800/90 bg-gradient-to-b from-zinc-50/80 to-zinc-100/40 dark:from-zinc-900/80 dark:to-zinc-950/40 backdrop-blur-md">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-xs font-mono text-zinc-500 dark:text-zinc-400">
              <Terminal className="w-4 h-4 text-sky-500" />
              <span className="text-zinc-800 dark:text-zinc-200 font-medium">Core Stack:</span>
              <span className="hidden sm:inline">Next.js 14 • React • TypeScript • PostgreSQL • Prisma • Python</span>
              <span className="sm:hidden">Next.js • TS • Python • SQL</span>
            </div>

            <div className="flex items-center gap-4 text-xs font-mono text-zinc-500 dark:text-zinc-400">
              <span className="flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                DRDO Research Alumni
              </span>
              <span>•</span>
              <span className="text-zinc-700 dark:text-zinc-300">CS-Domain Lead @ IIC</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
