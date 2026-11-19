"use client";

import React, { useState } from "react";
import { Mail, Github, Linkedin, Check, ArrowUpRight, MapPin, Sparkles, Phone, FileDown } from "lucide-react";
import { PERSONAL_INFO } from "@/data/portfolioData";

export function WorkWithMeSection() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-5 sm:py-8 relative scroll-mt-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Running Header */}
        <div className="running-header-light mb-2 sm:mb-3">
          <span>CONNECT</span>
          <span>FULL-STACK &bull; SYSTEM TOOLS &bull; SOFTWARE ENGINEERING</span>
          <span>2026</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-5 sm:gap-6 items-center">
          {/* Left: Giant Bold Typography */}
          <div className="md:col-span-7 space-y-3">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-[#E5CD82] leading-[0.95]">
              Work<br />
              with<br />
              <span className="text-white">Me!</span>
            </h2>
            <p className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#C8D9C5] max-w-sm pt-1 font-mono">
              Available for Software Engineering, System Engineering, and Full-Stack development roles.
            </p>

            {/* Resume Download CTA */}
            <div className="pt-1.5">
              <a
                href={PERSONAL_INFO.resumeUrl}
                download="Ankita_Naik_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl bg-[#E5CD82] hover:bg-white text-[#15370D] font-mono text-xs font-black transition-all shadow-xl shadow-black/40 group"
              >
                <FileDown className="w-4 h-4 text-[#15370D] group-hover:animate-bounce" />
                <span>Download Official Resume (PDF)</span>
              </a>
            </div>
          </div>

          {/* Right: Dark Contact Badge Card */}
          <div className="md:col-span-5">
            <div className="bg-[#122C0C] text-white p-6 rounded-3xl shadow-2xl border-2 border-[#2C4F22] space-y-4">
              <div className="flex items-center justify-between border-b border-[#2C4F22] pb-3 text-xs font-mono text-[#E5CD82]">
                <span className="font-bold uppercase tracking-wider text-xs flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-[#E5CD82]" />
                  <span>CONTACT DETAILS</span>
                </span>
                <Check className="w-4 h-4 text-[#E5CD82]" />
              </div>

              {/* Direct email click / copy */}
              <div className="space-y-3 font-mono text-xs">
                {/* Email row */}
                <button
                  onClick={handleCopyEmail}
                  className="w-full flex items-center justify-between p-3 rounded-xl bg-[#0E2508] hover:bg-[#1A4211] text-left transition-colors group border border-[#2C4F22]"
                >
                  <div className="flex items-center gap-2.5 truncate">
                    <Mail className="w-4 h-4 text-[#E5CD82] flex-shrink-0" />
                    <span className="truncate text-white">{PERSONAL_INFO.email}</span>
                  </div>
                  <span className="text-[10px] text-[#E5CD82] group-hover:text-white flex-shrink-0 ml-2">
                    {copied ? "Copied!" : "Copy"}
                  </span>
                </button>

                {/* Phone row from resume */}
                <div className="flex items-center justify-between p-3 rounded-xl bg-[#0E2508] text-left border border-[#2C4F22]">
                  <div className="flex items-center gap-2.5">
                    <Phone className="w-4 h-4 text-[#E5CD82]" />
                    <span className="text-white">+91 9078305850</span>
                  </div>
                  <span className="text-[10px] text-[#C8D9C5]">Direct</span>
                </div>

                {/* GitHub link */}
                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 rounded-xl bg-[#0E2508] hover:bg-[#1A4211] text-left transition-colors group border border-[#2C4F22]"
                >
                  <div className="flex items-center gap-2.5">
                    <Github className="w-4 h-4 text-[#E5CD82]" />
                    <span className="text-white">github.com/anku-byte</span>
                  </div>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#E5CD82] group-hover:text-white" />
                </a>

                {/* LinkedIn link */}
                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 rounded-xl bg-[#0E2508] hover:bg-[#1A4211] text-left transition-colors group border border-[#2C4F22]"
                >
                  <div className="flex items-center gap-2.5">
                    <Linkedin className="w-4 h-4 text-[#E5CD82]" />
                    <span className="text-white">linkedin.com/in/ankita-naik</span>
                  </div>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#E5CD82] group-hover:text-white" />
                </a>

                {/* Location row */}
                <div className="flex items-center gap-2.5 px-3 py-2 text-[#C8D9C5] text-[11px]">
                  <MapPin className="w-3.5 h-3.5 text-[#E5CD82]" />
                  <span>Burla, Odisha, India &bull; Open to Relocation</span>
                </div>
              </div>

              {/* Status pill */}
              <div className="pt-2 border-t border-[#2C4F22] flex items-center justify-between text-[11px] font-mono text-[#C8D9C5]">
                <span className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-[#E5CD82] animate-pulse"></span>
                  <span className="text-white">Available for 2026 roles</span>
                </span>
                <span className="text-[#E5CD82] font-bold">VSSUT &bull; 9.49 CGPA</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
