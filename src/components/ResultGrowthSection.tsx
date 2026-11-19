"use client";

import React from "react";
import { Check, TrendingUp, Award, Zap } from "lucide-react";

export function ResultGrowthSection() {
  return (
    <section id="results" className="py-10 sm:py-14">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Running Header */}
        <div className="running-header">
          <span>PORTFOLIO</span>
          <span>FULL-STACK DEVELOPER</span>
          <span>2026</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Title */}
          <div className="lg:col-span-4 space-y-3">
            <h2 className="text-4xl sm:text-5xl font-black tracking-tight text-[#1E7BE8] leading-none">
              Result &amp;<br />
              Growth
            </h2>
            <p className="text-xs sm:text-sm text-[#555] leading-relaxed max-w-xs pt-1">
              Consistent engineering and domain-focused architecture delivering measurable performance.
            </p>
          </div>

          {/* Center: Circular Stat Bubbles */}
          <div className="lg:col-span-5 flex flex-wrap sm:flex-nowrap items-center justify-center gap-4 sm:gap-6">
            {/* Bubble 1 */}
            <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-full bg-[#EDE8DC] border border-[#DDD6C5] flex flex-col items-center justify-center text-center p-2 shadow-sm transition-transform hover:scale-105">
              <span className="text-2xl sm:text-3xl font-black text-[#141414] tracking-tight">
                100%
              </span>
              <span className="text-[10px] font-mono uppercase text-[#666] tracking-wider mt-1 leading-tight">
                Collision<br />Free
              </span>
            </div>

            {/* Bubble 2 */}
            <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-full bg-[#1E7BE8] text-white flex flex-col items-center justify-center text-center p-2 shadow-md transition-transform hover:scale-105">
              <span className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                +80%
              </span>
              <span className="text-[10px] font-mono uppercase text-white/80 tracking-wider mt-1 leading-tight">
                Speedup<br />Rate
              </span>
            </div>

            {/* Bubble 3 */}
            <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-full bg-[#EDE8DC] border border-[#DDD6C5] flex flex-col items-center justify-center text-center p-2 shadow-sm transition-transform hover:scale-105">
              <span className="text-2xl sm:text-3xl font-black text-[#141414] tracking-tight">
                99.9%
              </span>
              <span className="text-[10px] font-mono uppercase text-[#666] tracking-wider mt-1 leading-tight">
                ACID<br />Integrity
              </span>
            </div>
          </div>

          {/* Right: Dark Key Metrics Card */}
          <div className="lg:col-span-3">
            <div className="bg-[#18181A] text-white p-5 rounded-2xl shadow-xl border border-white/10">
              <div className="flex items-center justify-between mb-3 text-xs font-mono text-zinc-300 border-b border-zinc-800 pb-2.5">
                <span className="font-bold uppercase tracking-wider text-[11px]">Key Metrics</span>
                <Check className="w-4 h-4 text-emerald-400" />
              </div>
              <ul className="space-y-2 text-xs text-zinc-300 font-mono">
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#1E7BE8] mt-1.5 flex-shrink-0"></span>
                  <span>3+ Full-Stack Production Systems</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#1E7BE8] mt-1.5 flex-shrink-0"></span>
                  <span>DRDO Research Internship</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#1E7BE8] mt-1.5 flex-shrink-0"></span>
                  <span>Zero Overlap Timetable Engine</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#1E7BE8] mt-1.5 flex-shrink-0"></span>
                  <span>Sub-second PDF &amp; XLSX Generation</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
