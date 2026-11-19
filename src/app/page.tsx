import { MinimalNavbar } from "@/components/MinimalNavbar";
import { PinHero } from "@/components/PinHero";
import { MovingWaveTransition, MovingWaveDividerReverse } from "@/components/MovingWaveStructure";
import { FolderIntroSection } from "@/components/FolderIntroSection";
import { ExperienceSection } from "@/components/ExperienceSection";
import { PosterProjectsSection } from "@/components/PosterProjectsSection";
import { WorkWithMeSection } from "@/components/WorkWithMeSection";
import { MinimalFooter } from "@/components/MinimalFooter";
import CursorGrid from "@/components/animations/CursorGrid";
import SwarmCursor from "@/components/animations/SwarmCursor";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-[#15370D] text-[#E5CD82] antialiased selection:bg-[#728E6D] selection:text-white relative overflow-x-hidden">
      {/* ReactBits Cursor Grid Animated Background */}
      <CursorGrid
        cellSize={42}
        color="#E5CD82"
        gridColor="#728E6D"
        radius={190}
        falloff="smooth"
        highlight="cell"
        gridStyle="lines"
        holdTime={260}
        fadeDuration={750}
        lineWidth={1}
        maxOpacity={0.7}
        fillOpacity={0.18}
        gridOpacity={0.24}
        cellRadius={4}
        cellGap={2}
        spotlight={0.35}
        clickPulse={true}
        pulseSpeed={6.5}
        ambient={0.03}
        edgeFade={0.2}
      />

      {/* Interactive Swarm Cursor Particle Trail from ReactBits */}
      <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden h-screen w-screen">
        <SwarmCursor
          color="#E5CD82"
          accentColor="#728E6D"
          count={24}
          size={4.5}
          spread={38}
          speed={1.15}
          shape="dot"
          idle="roam"
          clickEffect="burst"
        />
      </div>

      {/* Top Navbar: ankita.dev, About, Experience, Projects, Contact */}
      <MinimalNavbar />

      {/* Main Portfolio Sections - Tight, compact vertical flow */}
      <main className="flex-grow relative z-10">
        {/* Front Page / Hero with Walking Track & Minimal Ankita NAIK */}
        <PinHero />

        {/* Dynamic Moving Wave Ribbon Transition */}
        <MovingWaveTransition />

        {/* Dynamic Wave-Enveloped Section: About Specialization */}
        <div className="relative z-10 bg-gradient-to-b from-[#15370D]/80 via-[#0E2508]/85 to-[#15370D]/80 py-1 sm:py-2 text-white backdrop-blur-[1px]">
          <FolderIntroSection />
        </div>

        {/* Undulating Moving Wave Divider */}
        <MovingWaveDividerReverse />

        {/* Experience & Education Section: VSSUT, CHSE, BSE, DRDO & Personal Projects */}
        <div className="relative z-10 py-1 sm:py-2">
          <ExperienceSection />
        </div>

        {/* Dynamic Moving Wave Ribbon Transition */}
        <MovingWaveTransition />

        {/* Projects Section: Tactile Poster Showcase featuring All Repositories */}
        <div className="relative z-10 bg-gradient-to-b from-[#15370D]/80 via-[#0E2508]/85 to-[#15370D]/80 py-1 sm:py-2 backdrop-blur-[1px]">
          <PosterProjectsSection />
        </div>

        {/* Flowing Moving Wave Ribbon into Contact */}
        <MovingWaveTransition />

        {/* Work with Me! & Direct Contact Details (Exclusive Home for Resume Download) */}
        <div className="relative z-10 bg-gradient-to-b from-[#15370D]/90 via-[#0E2508]/95 to-[#15370D]/90 py-2 sm:py-3 text-white">
          <WorkWithMeSection />
        </div>
      </main>

      {/* Minimal Footer */}
      <MinimalFooter />
    </div>
  );
}
