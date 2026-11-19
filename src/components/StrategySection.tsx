"use client";

import React from "react";
import { Plus, Check, Layers, ShieldCheck, Zap } from "lucide-react";

export function StrategySection() {
  const approaches = [
    {
      id: "01",
      title: "Model constraints before writing lines of code",
      description:
        "Deeply understand the domain: faculty availability, room capacity, lab buffers, or state concurrency before architecting solutions.",
    },
    {
      id: "02",
      title: "Type-safe, resilient full-stack systems",
      description:
        "Leverage Next.js App Router, TypeScript, and Prisma ORM to guarantee compile-time safety and eliminate runtime regressions.",
    },
    {
      id: "03",
      title: "Measure impact with quantifiable metrics",
      description:
        "Every system is benchmarked for sub-second generation, zero collision rates, and 100% ACID transaction integrity.",
    },
  ];

  return (
    <section id="approach" className="py-10 sm:py-14">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Running Header */}
        <div className="running-header">
          <span>PORTFOLIO</span>
          <span>FULL-STACK DEVELOPER</span>
          <span>2026</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          {/* Left Column: Big Bold Statement */}
          <div className="md:col-span-6 space-y-4">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-[#1E7BE8] leading-[1.08]">
              Architecture<br />
              first, code<br />
              second.
            </h2>
            <p className="text-sm sm:text-base text-[#444] leading-relaxed max-w-md pt-2">
              My engineering approach ensures that every database schema, API route, and user interaction directly serves systemic reliability and tangible real-world performance.
            </p>
          </div>

          {/* Right Column: Approach Cards */}
          <div className="md:col-span-6 space-y-3.5">
            {approaches.map((item) => (
              <div
                key={item.id}
                className="p-4 sm:p-5 rounded-2xl bg-[#EDE8DC] border border-[#DDD6C5] flex items-start gap-4 transition-all hover:bg-[#E7E1D3]"
              >
                <div className="w-7 h-7 rounded-full bg-[#141414] text-white flex-shrink-0 flex items-center justify-center text-xs font-mono font-bold mt-0.5">
                  <Plus className="w-3.5 h-3.5 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-sm text-[#141414] leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#555] mt-1 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}

            {/* Sub-label at bottom right */}
            <div className="text-right pt-2">
              <span className="font-bold text-sm text-[#141414] tracking-tight uppercase font-mono">
                My Approach &rarr;
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
