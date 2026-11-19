"use client";

import React from "react";
import { ArrowUp } from "lucide-react";

export function MinimalFooter() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-[#2C4F22] py-4 sm:py-5 text-xs font-mono text-[#C8D9C5] bg-[#0E2508]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <span className="font-bold text-[#E5CD82]">ankita.dev</span>
          <span>&bull;</span>
          <span>&copy; {new Date().getFullYear()}</span>
          <span>&bull;</span>
          <span>Full-Stack &bull; System Tools &bull; VSSUT</span>
        </div>

        <div className="flex items-center gap-4">
          <button
            onClick={scrollToTop}
            aria-label="Back to top"
            className="p-2 rounded-full border border-[#2C4F22] bg-[#122C0C] hover:bg-[#E5CD82] hover:text-[#15370D] hover:border-[#E5CD82] text-[#E5CD82] transition-all"
          >
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
