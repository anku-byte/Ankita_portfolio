"use client";

import React from "react";

export function MovingWaveTransition() {
  return (
    <div className="relative w-full overflow-hidden select-none pointer-events-none">
      {/* Sleek Shortened Wave Transition */}
      <div className="relative w-full h-8 sm:h-12 md:h-14">
        {/* Layer 1: Warm Gold Ribbon Wave (#E5CD82) */}
        <div className="absolute inset-0 w-[200%] animate-wave-slow opacity-35">
          <svg
            className="w-full h-full"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0,40 C150,90 350,-10 500,40 C650,90 850,-10 1000,40 C1150,90 1350,-10 1500,40 C1650,90 1850,-10 2000,40 C2150,90 2350,-10 2400,40 L2400,120 L0,120 Z"
              fill="#E5CD82"
            />
          </svg>
        </div>

        {/* Layer 2: Sage Green Mid Wave (#728E6D) */}
        <div className="absolute inset-0 w-[200%] animate-wave-mid opacity-70">
          <svg
            className="w-full h-full"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0,60 C200,15 400,95 600,60 C800,15 1000,95 1200,60 C1400,15 1600,95 1800,60 C2000,15 2200,95 2400,60 L2400,120 L0,120 Z"
              fill="#728E6D"
            />
          </svg>
        </div>

        {/* Layer 3: Deep Forest Green Base Wave (#15370D) */}
        <div className="absolute inset-0 w-[200%] animate-wave-fast">
          <svg
            className="w-full h-full"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0,75 C250,30 450,105 700,75 C950,30 1150,105 1400,75 C1650,30 1850,105 2100,75 C2350,30 2550,105 2800,75 L2800,120 L0,120 Z"
              fill="#15370D"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}

export function MovingWaveDividerReverse() {
  return (
    <div className="relative w-full overflow-hidden select-none pointer-events-none">
      <div className="relative w-full h-6 sm:h-9">
        {/* Reverse Layer 1: Warm Gold Accent (#E5CD82) */}
        <div className="absolute inset-0 w-[200%] animate-wave-mid opacity-35">
          <svg
            className="w-full h-full"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0,30 C300,80 600,10 900,50 C1200,90 1500,20 1800,60 C2100,100 2400,30 2700,70 L2700,0 L0,0 Z"
              fill="#E5CD82"
            />
          </svg>
        </div>

        {/* Reverse Layer 2: Sage Green (#728E6D) */}
        <div className="absolute inset-0 w-[200%] animate-wave-slow opacity-80">
          <svg
            className="w-full h-full"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0,50 C250,95 500,15 750,55 C1000,95 1250,15 1500,55 C1750,95 2000,15 2250,55 L2250,0 L0,0 Z"
              fill="#728E6D"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}
