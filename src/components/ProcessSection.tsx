"use client";

import React from "react";
import { Search, Compass, Cpu, Gauge } from "lucide-react";

export function ProcessSection() {
  const steps = [
    {
      step: "01",
      icon: Search,
      title: "Research",
      desc: "Understanding domain rules, user constraints, and data flows.",
    },
    {
      step: "02",
      icon: Compass,
      title: "Architecture",
      desc: "Relational schema modeling, API contracts, and edge handling.",
    },
    {
      step: "03",
      icon: Cpu,
      title: "Execution",
      desc: "Type-safe Next.js & PostgreSQL coding with test suites.",
    },
    {
      step: "04",
      icon: Gauge,
      title: "Optimization",
      desc: "Sub-second exports, zero collisions, and deployment polish.",
    },
  ];

  return (
    <section id="process" className="py-10 sm:py-14">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Running Header */}
        <div className="running-header">
          <span>PORTFOLIO</span>
          <span>FULL-STACK DEVELOPER</span>
          <span>2026</span>
        </div>

        {/* Tab Header */}
        <div className="flex items-end gap-1.5 pl-2 sm:pl-4">
          <div className="px-5 py-2.5 bg-[#1E7BE8] text-white text-xs font-mono font-bold uppercase tracking-wider rounded-t-xl">
            Work Process &rarr;
          </div>
          <div className="px-5 py-2.5 bg-[#1667C8] text-white/80 text-xs font-mono font-bold uppercase tracking-wider rounded-t-xl">
            Engineering Methodology
          </div>
        </div>

        {/* Blue Container with 4 Process Circles */}
        <div className="rounded-2xl sm:rounded-3xl bg-[#1E7BE8] text-white p-6 sm:p-10 shadow-xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {steps.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.step} className="flex flex-col items-center">
                  {/* Circle Icon Badge */}
                  <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-white text-[#1E7BE8] flex items-center justify-center shadow-lg mb-3 transition-transform hover:scale-110">
                    <Icon className="w-8 h-8 sm:w-10 sm:h-10 text-[#1E7BE8]" />
                  </div>

                  {/* Title */}
                  <h4 className="font-bold text-base text-white mb-1">
                    {item.title}
                  </h4>

                  {/* Description */}
                  <p className="text-xs text-white/80 max-w-[180px] leading-relaxed">
                    {item.desc}
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
