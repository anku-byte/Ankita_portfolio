"use client";

import React from "react";
import { PERSONAL_INFO } from "@/data/portfolioData";
import { ArrowUp, Github, Linkedin, Heart } from "lucide-react";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-zinc-200 dark:border-zinc-800/80 bg-white dark:bg-zinc-950 py-12 transition-colors">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand & Copyright */}
          <div>
            <div className="text-sm font-bold text-zinc-900 dark:text-white flex items-center gap-2">
              <span>{PERSONAL_INFO.name}</span>
              <span className="text-zinc-400">•</span>
              <span className="text-xs font-mono font-normal text-zinc-500 dark:text-zinc-400">
                Full-Stack Software Developer
              </span>
            </div>
            <p className="text-xs font-mono text-zinc-500 dark:text-zinc-400 mt-1">
              Engineered with Next.js 14, TypeScript & Tailwind CSS. Hosted with high-performance edge routing.
            </p>
          </div>

          {/* Socials & Back to Top */}
          <div className="flex items-center gap-4">
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-zinc-500 hover:text-zinc-950 dark:hover:text-white transition-colors"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-zinc-500 hover:text-[#0077b5] transition-colors"
            >
              <Linkedin className="w-4 h-4" />
            </a>

            <button
              onClick={scrollToTop}
              aria-label="Scroll to top"
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-zinc-200 dark:border-zinc-800 text-xs font-mono text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-zinc-900 transition-colors"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-zinc-100 dark:border-zinc-900 flex flex-col sm:flex-row items-center justify-between text-[11px] font-mono text-zinc-400">
          <div>
            © {new Date().getFullYear()} Ankita Naik. All rights reserved.
          </div>
          <div className="mt-2 sm:mt-0">
            Veer Surendra Sai University of Technology, Burla
          </div>
        </div>
      </div>
    </footer>
  );
}
