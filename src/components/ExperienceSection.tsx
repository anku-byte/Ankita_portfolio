"use client";

import React, { useState } from "react";
import { EDUCATION_HISTORY, EXPERIENCES } from "@/data/portfolioData";
import {
  Briefcase,
  GraduationCap,
  Award,
  Calendar,
  MapPin,
  CheckCircle,
} from "lucide-react";

export function ExperienceSection() {
  const [activeTab, setActiveTab] = useState<"education" | "experience">("education");

  return (
    <section id="experience" className="py-4 sm:py-7 relative scroll-mt-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Retro Running Header */}
        <div className="running-header-light mb-2 sm:mb-3">
          <span>ACADEMIC BACKGROUND &bull; LEADERSHIP &bull; RESEARCH</span>
          <span>VSSUT &bull; CHSE &bull; BSE &bull; IIC &bull; DRDO</span>
          <span>2020 &ndash; 2026</span>
        </div>

        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 mb-4 sm:mb-6">
          <div>
            <div className="inline-flex items-center gap-1.5 font-mono text-xs font-semibold uppercase tracking-wider text-[#E5CD82] mb-1.5 px-3 py-0.5 rounded-full bg-[#0E2508] border border-[#728E6D]/50 shadow-sm">
              <Briefcase className="w-3 h-3 text-[#E5CD82]" />
              <span>Experience &amp; Education</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-white tracking-tight">
              Academic Rigor &amp; <span className="text-[#E5CD82]">Experience</span>
            </h2>
          </div>

          {/* Interactive Filter Pills */}
          <div className="flex items-center gap-1.5 p-1 rounded-xl bg-[#0E2508] border border-[#728E6D]/50 font-mono text-xs font-bold self-start sm:self-auto">
            <button
              onClick={() => setActiveTab("education")}
              className={`px-4 py-1.5 rounded-xl transition-all flex items-center gap-1.5 ${
                activeTab === "education"
                  ? "bg-[#E5CD82] text-[#0E2508] shadow-md shadow-[#E5CD82]/20 font-black"
                  : "text-[#D8E2D6] hover:text-[#E5CD82]"
              }`}
            >
              <GraduationCap className="w-3.5 h-3.5" />
              <span>Education</span>
            </button>
            <button
              onClick={() => setActiveTab("experience")}
              className={`px-4 py-1.5 rounded-xl transition-all flex items-center gap-1.5 ${
                activeTab === "experience"
                  ? "bg-[#E5CD82] text-[#0E2508] shadow-md shadow-[#E5CD82]/20 font-black"
                  : "text-[#D8E2D6] hover:text-[#E5CD82]"
              }`}
            >
              <Briefcase className="w-3.5 h-3.5" />
              <span>Experience &amp; Leadership</span>
            </button>
          </div>
        </div>

        {/* Tab 1: Education Section */}
        {activeTab === "education" && (
          <div className="space-y-3.5">
            <div className="relative pl-5 sm:pl-7 border-l-2 border-[#728E6D]/40 space-y-4 my-2">
              {EDUCATION_HISTORY.map((edu, idx) => (
                <div key={idx} className="relative group">
                  {/* Timeline Node Dot */}
                  <div className="absolute -left-[27px] sm:-left-[35px] top-2 h-3.5 w-3.5 rounded-full border-2 border-[#0E2508] bg-[#E5CD82] group-hover:scale-125 transition-transform shadow-md shadow-[#E5CD82]/50" />

                  {/* Institution Card */}
                  <div className="rounded-xl sm:rounded-2xl border border-[#728E6D]/60 bg-[#0E2508] p-4 sm:p-5 shadow-xl hover:border-[#E5CD82] transition-all group">
                    <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2.5 mb-2">
                      <div>
                        {/* Board / Level Badge */}
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-[10px] font-mono font-bold text-[#E5CD82] uppercase tracking-wider px-2 py-0.5 rounded-md bg-[#15370D] border border-[#728E6D]/40">
                            {edu.board}
                          </span>
                        </div>

                        <h3 className="text-lg sm:text-xl font-bold text-[#E5CD82] group-hover:text-white transition-colors">
                          {edu.institution}
                        </h3>
                        <div className="text-xs sm:text-sm font-semibold text-white mt-0.5">
                          {edu.degree}
                        </div>
                      </div>

                      {/* Right Meta Column: Score & Period */}
                      <div className="flex flex-col sm:items-end gap-1 shrink-0">
                        {/* Highlighted Score Badge */}
                        <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-lg bg-[#E5CD82] text-[#0E2508] font-mono font-black text-xs shadow-md shadow-[#E5CD82]/30">
                          <Award className="w-3 h-3" />
                          <span>{edu.score}</span>
                        </div>

                        <div className="text-[11px] font-mono text-[#D8E2D6] flex items-center gap-2.5">
                          <span className="flex items-center gap-1">
                            <Calendar className="w-3 h-3 text-[#E5CD82]" />
                            {edu.period}
                          </span>
                          {edu.location && (
                            <span className="flex items-center gap-1">
                              <MapPin className="w-3 h-3 text-[#728E6D]" />
                              {edu.location}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Highlights */}
                    {edu.highlights && edu.highlights.length > 0 && (
                      <ul className="mt-2.5 pt-2.5 border-t border-[#728E6D]/30 space-y-1.5">
                        {edu.highlights.map((h, hIdx) => (
                          <li
                            key={hIdx}
                            className="flex items-start gap-2 text-xs text-[#FAF5E4]"
                          >
                            <CheckCircle className="w-3.5 h-3.5 text-[#E5CD82] mt-0.5 shrink-0" />
                            <span>{h}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab 2: Experience / Internships & Leadership */}
        {activeTab === "experience" && (
          <div className="space-y-3.5">
            <div className="relative pl-5 sm:pl-7 border-l-2 border-[#728E6D]/40 space-y-4 my-2">
              {EXPERIENCES.map((exp, idx) => (
                <div key={idx} className="relative group">
                  {/* Timeline Dot */}
                  <div className="absolute -left-[27px] sm:-left-[35px] top-2 h-3.5 w-3.5 rounded-full border-2 border-[#0E2508] bg-[#E5CD82] group-hover:scale-125 transition-transform shadow-md shadow-[#E5CD82]/50" />

                  <div className="rounded-xl sm:rounded-2xl border border-[#728E6D]/60 bg-[#0E2508] p-4 sm:p-5 shadow-xl hover:border-[#E5CD82] transition-all">
                    <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2.5 mb-2">
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-[10px] font-mono font-bold text-[#E5CD82] uppercase tracking-wider px-2 py-0.5 rounded-md bg-[#15370D] border border-[#728E6D]/40">
                            {exp.type}
                          </span>
                        </div>
                        <h3 className="text-lg sm:text-xl font-bold text-[#E5CD82]">
                          {exp.role}
                        </h3>
                        <div className="text-xs sm:text-sm font-semibold text-white">
                          {exp.company}
                        </div>
                      </div>

                      <div className="text-[11px] font-mono text-[#D8E2D6] flex flex-col sm:items-end gap-0.5 shrink-0">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3 h-3 text-[#E5CD82]" />
                          {exp.period}
                        </span>
                        <span className="flex items-center gap-1">
                          <MapPin className="w-3 h-3 text-[#728E6D]" />
                          {exp.location}
                        </span>
                      </div>
                    </div>

                    <p className="text-xs text-[#FAF5E4] italic mb-2.5">
                      {exp.summary}
                    </p>

                    <ul className="space-y-1.5 mb-3">
                      {exp.bullets.map((bullet, bIdx) => (
                        <li
                          key={bIdx}
                          className="flex items-start gap-2 text-xs text-[#D8E2D6]"
                        >
                          <CheckCircle className="w-3.5 h-3.5 text-[#E5CD82] mt-0.5 shrink-0" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-1.5 pt-2.5 border-t border-[#728E6D]/30">
                      {exp.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-[#15370D] text-[#E5CD82] border border-[#728E6D]/40"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
