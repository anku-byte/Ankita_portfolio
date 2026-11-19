"use client";

import React from "react";
import { PERSONAL_INFO } from "@/data/portfolioData";
import { User, Target, ShieldCheck, HeartHandshake, Compass } from "lucide-react";

export function AboutSection() {
  const philosophies = [
    {
      icon: Target,
      title: "Pragmatic Problem Solving",
      desc: "I treat code as a tool to solve tangible operational bottlenecks—whether it's campus scheduling clashes or scientific correlation analysis.",
    },
    {
      icon: ShieldCheck,
      title: "Resilient & Clean Architecture",
      desc: "Strong focus on type safety with TypeScript, strict database relationships with Prisma, and defensive error handling.",
    },
    {
      icon: HeartHandshake,
      title: "Collaborative Leadership",
      desc: "Active leadership as CS-Domain Co-Lead at IIC and team developer at ENIGMA, mentoring peers and conducting technical sprints.",
    },
  ];

  return (
    <section id="about" className="py-20 md:py-28 relative scroll-mt-16 bg-zinc-50/40 dark:bg-zinc-950/30 border-t border-zinc-200/80 dark:border-zinc-800/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="max-w-2xl mb-12">
          <div className="inline-flex items-center gap-2 font-mono text-xs font-semibold uppercase tracking-wider text-sky-600 dark:text-sky-400 mb-2">
            <User className="w-4 h-4" />
            Background & Mindset
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-zinc-900 dark:text-white tracking-tight">
            About Ankita Naik
          </h2>
          <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400 mt-2">
            Engineered with curiosity, refined through research, and tested on production-grade systems.
          </p>
        </div>

        <div className="grid grid-cols-12 gap-8 items-stretch">
          {/* Main Bio Card */}
          <div className="col-span-12 lg:col-span-7 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/80 p-7 sm:p-9 shadow-sm flex flex-col justify-between">
            <div className="space-y-5 text-sm sm:text-base text-zinc-600 dark:text-zinc-300 leading-relaxed">
              <p>
                I am a Computer Science undergraduate at <strong className="text-zinc-900 dark:text-white">Veer Surendra Sai University of Technology (VSSUT)</strong>, driven by a deep fascination with building software systems that simplify high-friction processes.
              </p>
              <p>
                My technical journey spans across both high-level modern web stacks (Next.js, React, Node.js, PostgreSQL) and rigorous algorithmic computation. During my internship at <strong className="text-zinc-900 dark:text-white">DRDO–(PXE)</strong>, I worked on quantum illumination models and correlation analysis, formulating scientific computing pipelines in Python.
              </p>
              <p>
                When I&apos;m not writing TypeScript or tuning database indices, I co-lead the Computer Science domain at <strong className="text-zinc-900 dark:text-white">IIC VSSUT</strong>, fostering tech innovation and organizing development workshops for emerging student engineers.
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-zinc-100 dark:border-zinc-800 flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-2 text-xs font-mono text-zinc-500 dark:text-zinc-400">
                <Compass className="w-4 h-4 text-sky-500" />
                <span>Based in Odisha, India</span>
              </div>
              <span className="text-xs font-mono px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800/60 font-semibold">
                Available Globally (Remote/Hybrid)
              </span>
            </div>
          </div>

          {/* Core Tenets Bento Column */}
          <div className="col-span-12 lg:col-span-5 flex flex-col justify-between gap-4">
            {philosophies.map((p, idx) => {
              const Icon = p.icon;
              return (
                <div
                  key={idx}
                  className="rounded-2xl border border-zinc-200/90 dark:border-zinc-800/90 bg-white/70 dark:bg-zinc-900/60 p-5 backdrop-blur-sm shadow-sm transition-all hover:border-zinc-300 dark:hover:border-zinc-700"
                >
                  <div className="flex items-center gap-2.5 mb-2">
                    <div className="p-2 rounded-xl bg-sky-50 dark:bg-sky-950/50 text-sky-600 dark:text-sky-400 border border-sky-100 dark:border-sky-900/60">
                      <Icon className="w-4 h-4" />
                    </div>
                    <h4 className="font-bold text-sm text-zinc-900 dark:text-white">
                      {p.title}
                    </h4>
                  </div>
                  <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">
                    {p.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
