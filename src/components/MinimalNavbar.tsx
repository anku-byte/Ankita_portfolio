"use client";

import React, { useState, useEffect } from "react";
import { Github, Linkedin, ArrowUpRight } from "lucide-react";
import { PERSONAL_INFO } from "@/data/portfolioData";

export function MinimalNavbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 25);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-40 transition-all duration-200 border-b ${
        scrolled
          ? "bg-[#15370D]/90 backdrop-blur-md border-[#728E6D]/50 shadow-lg shadow-black/40 py-2.5"
          : "bg-[#15370D]/75 backdrop-blur-sm border-[#728E6D]/30 py-3.5"
      }`}
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 flex items-center justify-between text-xs tracking-wider">
        {/* Brand: strictly ankita.dev */}
        <div className="flex items-center gap-3">
          <a
            href="#"
            className="flex items-center gap-2 font-mono text-sm sm:text-base font-bold tracking-tight text-[#E5CD82] hover:text-white transition-colors group"
          >
            <span className="w-2.5 h-2.5 rounded-full bg-[#E5CD82] group-hover:bg-[#728E6D] transition-colors shadow-sm shadow-[#E5CD82]/80 animate-pulse"></span>
            <span>
              ankita<span className="text-[#728E6D]">.dev</span>
            </span>
          </a>
        </div>

        {/* Center Navigation Links: About, Experience, Projects, Contact */}
        <nav className="hidden md:flex items-center gap-6 font-mono text-xs uppercase text-[#D8E2D6] font-medium">
          <a href="#about" className="hover:text-[#E5CD82] transition-colors">
            About
          </a>
          <a
            href="#experience"
            className="hover:text-[#E5CD82] transition-colors px-2 py-0.5 rounded-md hover:bg-[#0E2508] border border-transparent hover:border-[#728E6D]/40"
          >
            Experience
          </a>
          <a href="#projects" className="hover:text-[#E5CD82] transition-colors">
            Projects
          </a>
          <a href="#contact" className="hover:text-[#E5CD82] transition-colors">
            Contact
          </a>
        </nav>

        {/* Right Actions: Socials + Connect CTA (Resume download kept exclusively in Get In Touch) */}
        <div className="flex items-center gap-2 sm:gap-3">
          <a
            href={PERSONAL_INFO.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            className="w-8 h-8 rounded-full border border-[#728E6D]/40 bg-[#0E2508] flex items-center justify-center text-[#D8E2D6] hover:bg-[#728E6D] hover:text-[#0E2508] hover:border-[#E5CD82] transition-all"
          >
            <Github className="w-3.5 h-3.5" />
          </a>
          <a
            href={PERSONAL_INFO.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
            className="w-8 h-8 rounded-full border border-[#728E6D]/40 bg-[#0E2508] flex items-center justify-center text-[#D8E2D6] hover:bg-[#728E6D] hover:text-[#0E2508] hover:border-[#E5CD82] transition-all"
          >
            <Linkedin className="w-3.5 h-3.5" />
          </a>
          <a
            href="#contact"
            className="hidden sm:inline-flex items-center gap-1 px-3 py-1.5 rounded-full bg-[#E5CD82] text-[#0E2508] font-mono text-[11px] uppercase font-bold hover:brightness-110 transition-all shadow-md shadow-[#E5CD82]/30"
          >
            <span>Connect</span>
            <ArrowUpRight className="w-3 h-3" />
          </a>
        </div>
      </div>
    </header>
  );
}
