"use client";

import React, { useState } from "react";
import { Sparkles, ArrowDown } from "lucide-react";

export function PinHero() {
  const [bubbleText, setBubbleText] = useState("Hi! I'm Ankita 👋");

  // Hero fast category navigation
  const navItems = [
    { label: "ABOUT ME", href: "#about" },
    { label: "EXPERIENCE", href: "#experience" },
    { label: "PROJECTS", href: "#projects" },
    { label: "GET IN TOUCH", href: "#contact" },
  ];

  return (
    <section className="relative pt-4 sm:pt-6 pb-2 sm:pb-3 overflow-hidden bg-transparent">
      {/* Background ambient forest glow with gold highlights */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[320px] bg-gradient-to-tr from-[#728E6D]/25 via-[#E5CD82]/15 to-transparent blur-3xl pointer-events-none rounded-full" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Top Header Block: 'Ankita NAIK' without 'ankita.dev' */}
        <div className="flex flex-col mb-4 sm:mb-6">
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
            <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black tracking-tight leading-none uppercase select-none">
              <span className="text-[#E5CD82] retro-hero-title-forest mr-3 sm:mr-5">Ankita</span>
              <span className="text-[#728E6D] retro-hero-title-accent-forest">NAIK</span>
            </h1>
          </div>

          {/* Sub-row under title: Download Resume removed as requested */}
          <div className="flex items-center justify-between text-xs sm:text-sm font-mono font-bold uppercase tracking-widest text-[#E5CD82]/90 pt-3 sm:pt-4 border-b border-[#728E6D]/40 pb-3">
            <div className="flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5 text-[#E5CD82]" />
              <span>FULL-STACK WEB APPLICATIONS &bull; INTELLIGENT SYSTEMS</span>
            </div>
            <span className="text-[#E5CD82] font-black text-sm sm:text-base">
              2026
            </span>
          </div>
        </div>

        {/* Central Illustrated Animated Landscape Track (Clean container without electric box effect) */}
        <div className="my-3 sm:my-4">
          <div className="bg-[#0E2508] rounded-3xl p-4 sm:p-6 border-2 border-[#728E6D]/50 shadow-2xl relative overflow-hidden">
            {/* Subtle botanical dot grid */}
            <div
              className="absolute inset-0 opacity-15 pointer-events-none"
              style={{
                backgroundImage: "radial-gradient(#E5CD82 1px, transparent 1px)",
                backgroundSize: "22px 22px",
              }}
            />

            {/* Scenery along the ground line: stylized mushrooms, stones, and snails in forest green & gold */}
            <div className="relative w-full h-40 sm:h-52 flex flex-col justify-end select-none">
              {/* Floating ambient glowing sparks */}
              <div
                className="absolute top-2 left-1/4 w-2 h-2 rounded-full bg-[#E5CD82] animate-bounce shadow-sm shadow-[#E5CD82]"
                style={{ animationDuration: "3s" }}
              />
              <div
                className="absolute top-6 right-1/3 w-1.5 h-1.5 rounded-full bg-[#728E6D] animate-ping"
                style={{ animationDuration: "4s" }}
              />

              <div className="absolute inset-x-0 bottom-0 flex items-end justify-between px-2 sm:px-6 pointer-events-none">
                {/* Left Mushroom & Snail Cluster */}
                <div className="flex items-end gap-1.5 transform hover:scale-105 transition-transform pointer-events-auto">
                  <div className="text-xl -mb-1 animate-pulse" title="Snail">
                    🐌
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="w-12 sm:w-16 h-5 sm:h-7 rounded-t-full bg-gradient-to-r from-[#728E6D] via-[#E5CD82] to-[#728E6D] shadow-lg border border-[#E5CD82]/40" />
                    <div className="w-3.5 sm:w-5 h-7 sm:h-10 bg-[#0E2508] border-x border-[#728E6D]/50 rounded-b-md" />
                  </div>
                </div>

                {/* Mid-Left Rock & Grass */}
                <div className="hidden sm:flex items-end gap-1 mb-0.5">
                  <div className="w-7 h-3.5 rounded-t-xl bg-[#15370D] border border-[#728E6D]/50" />
                  <div className="w-1.5 h-3 bg-[#728E6D] rounded-t" />
                  <div className="w-1.5 h-4 bg-[#E5CD82] rounded-t" />
                </div>

                {/* Center Mushroom */}
                <div className="flex flex-col items-center opacity-90">
                  <div className="w-9 sm:w-12 h-3.5 sm:h-5 rounded-t-full bg-[#E5CD82] border border-[#728E6D]/50 shadow-sm" />
                  <div className="w-2.5 sm:w-3.5 h-5 sm:h-7 bg-[#0E2508] border-x border-[#728E6D]/50" />
                </div>

                {/* Mid-Right Rock & Sprout */}
                <div className="hidden sm:flex items-end gap-1 mb-0.5">
                  <div className="w-1.5 h-4 bg-[#728E6D] rounded-t" />
                  <div className="w-6 h-3 rounded-t-lg bg-[#15370D] border border-[#728E6D]/50" />
                </div>

                {/* Right Mushroom & Snail Cluster */}
                <div className="flex items-end gap-1.5 transform hover:scale-105 transition-transform pointer-events-auto">
                  <div className="flex flex-col items-center">
                    <div className="w-12 sm:w-16 h-5 sm:h-7 rounded-t-full bg-gradient-to-r from-[#E5CD82] via-[#728E6D] to-[#E5CD82] shadow-lg border border-[#E5CD82]/40" />
                    <div className="w-3.5 sm:w-5 h-7 sm:h-10 bg-[#0E2508] border-x border-[#728E6D]/50 rounded-b-md" />
                  </div>
                  <div className="text-xl -mb-1 animate-pulse" title="Snail">
                    🐌
                  </div>
                </div>
              </div>

              {/* Animated Walking Mascot */}
              <div
                className="absolute bottom-1 mascot-track-walk cursor-pointer z-10"
                onClick={() => {
                  const quotes = [
                    "B.Tech CSE @ VSSUT • CGPA: 9.49!",
                    "Building with Next.js, React, TypeScript & Prisma!",
                    "Python system monitoring & machine learning!",
                    "Quantum Correlation Research @ DRDO (PXE)!",
                    "Explore my projects & experience below! ↓",
                  ];
                  setBubbleText(quotes[Math.floor(Math.random() * quotes.length)]);
                }}
              >
                {/* Speech bubble */}
                <div className="absolute -top-9 left-1/2 -translate-x-1/2 whitespace-nowrap px-2.5 py-0.5 rounded-full bg-[#15370D] text-[#E5CD82] text-[10px] font-mono font-bold shadow-xl border border-[#E5CD82] pointer-events-none">
                  {bubbleText}
                  <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-[#15370D] border-r border-b border-[#E5CD82] rotate-45" />
                </div>

                {/* Walking Cat Character SVG */}
                <div className="mascot-bob transform hover:scale-110 transition-transform">
                  <svg width="46" height="42" viewBox="0 0 46 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <ellipse cx="23" cy="24" rx="13" ry="9" fill="#15370D" stroke="#E5CD82" strokeWidth="1" />
                    <circle cx="34" cy="16" r="7" fill="#15370D" stroke="#E5CD82" strokeWidth="1" />
                    <polygon points="31,10 33,4 36,10" fill="#E5CD82" />
                    <polygon points="36,10 39,4 41,11" fill="#E5CD82" />
                    <ellipse cx="28" cy="25" rx="5" ry="5" fill="#FAF5E4" />
                    <ellipse cx="37" cy="18" rx="2.5" ry="2" fill="#FAF5E4" />
                    <circle cx="35" cy="15" r="1.2" fill="#E5CD82" />
                    <circle cx="38" cy="15" r="1.2" fill="#E5CD82" />
                    <line x1="39" y1="17" x2="44" y2="16" stroke="#E5CD82" strokeWidth="0.8" />
                    <line x1="39" y1="19" x2="44" y2="20" stroke="#E5CD82" strokeWidth="0.8" />
                    <path d="M 12 24 C 6 20 6 10 11 8 C 13 7 14 11 11 14 C 10 16 11 20 13 22" fill="#15370D" stroke="#E5CD82" strokeWidth="1" />
                    <rect x="15" y="30" width="3" height="7" rx="1.5" fill="#FAF5E4" />
                    <rect x="20" y="30" width="3" height="7" rx="1.5" fill="#728E6D" />
                    <rect x="27" y="30" width="3" height="7" rx="1.5" fill="#FAF5E4" />
                    <rect x="32" y="30" width="3" height="7" rx="1.5" fill="#728E6D" />
                  </svg>
                </div>
              </div>

              {/* The Flat Ground Line */}
              <div className="w-full h-1 bg-gradient-to-r from-[#728E6D]/30 via-[#E5CD82] to-[#728E6D]/30 rounded-full relative z-0" />
            </div>
          </div>
        </div>

        {/* Bottom Category Bar: ABOUT ME, EXPERIENCE, PROJECTS, and GET IN TOUCH */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 pt-1.5 sm:pt-2 text-center">
          {navItems.map((item, idx) => (
            <a
              key={idx}
              href={item.href}
              className="py-2 px-3 rounded-xl border border-[#728E6D]/50 bg-[#0E2508] hover:bg-[#728E6D] hover:text-[#0E2508] hover:border-[#E5CD82] text-[#E5CD82] text-[11px] sm:text-xs font-mono font-bold tracking-wider transition-all shadow-md active:scale-95 flex items-center justify-center gap-1.5 group"
            >
              <span>{item.label}</span>
              <ArrowDown className="w-3 h-3 text-[#E5CD82] group-hover:text-[#0E2508] transition-colors" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
