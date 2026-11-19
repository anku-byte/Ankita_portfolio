# Ankita Naik — Personal Developer Portfolio

A responsive, high-performance developer portfolio built with **Next.js 14 (App Router)**, **TypeScript**, and **Tailwind CSS**.

Designed with a **dark-mode-first aesthetic** (slate/zinc palette with electric sky/cyan and emerald accents), crisp typography (Inter + JetBrains Mono), Bento-grid project showcase, interactive case-study deep dives, and WCAG-compliant accessible contrast.

---

## ⚡ Quick Start

### 1. Install Dependencies
```bash
npm install
```

### 2. Run the Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Production Build
```bash
npm run build
npm run start
```

---

## 📁 Project Architecture

```
ankita-portfolio/
├── public/                 # Static assets (favicons, resume.pdf)
├── src/
│   ├── app/
│   │   ├── globals.css     # Global Tailwind styles & dark mode variables
│   │   ├── layout.tsx      # Root layout, fonts (Inter/Mono), and SEO metadata
│   │   └── page.tsx        # Main portfolio composition
│   ├── components/
│   │   ├── Navbar.tsx            # Sticky glassmorphic navbar with mobile menu
│   │   ├── ThemeToggle.tsx       # Dark/Light mode switcher with persistence
│   │   ├── Hero.tsx              # Value proposition headline, CTAs & stats
│   │   ├── ProjectsSection.tsx   # Bento grid project showcase with filtering
│   │   ├── ProjectCard.tsx       # Case study cards (Problem, Solution, Impact)
│   │   ├── ProjectModal.tsx      # Deep-dive interactive case study modal
│   │   ├── SkillsSection.tsx     # Categorized skill taxonomy with sleek badges
│   │   ├── ExperienceSection.tsx # DRDO intern, ENIGMA club & IIC leadership
│   │   ├── AboutSection.tsx      # Bio, engineering philosophy & VSSUT education
│   │   ├── ContactSection.tsx    # Validated contact form + one-click copy email
│   │   └── Footer.tsx            # Clean footer with navigation & copyright
│   ├── data/
│   │   └── portfolioData.ts      # Profile, projects, skills & timeline data
│   ├── lib/
│   │   └── utils.ts              # Tailwind clsx/twMerge utility
│   └── types/
│       └── index.ts              # TypeScript interfaces for portfolio data
├── next.config.js
├── tailwind.config.ts
├── tsconfig.json
└── package.json
```

---

## 🚀 Deployment to Vercel

The portfolio is pre-configured for instant zero-config deployment to Vercel:
1. Push this directory to your GitHub repository: `github.com/anku-byte/portfolio`.
2. Connect the repository on [Vercel](https://vercel.com).
3. The framework preset `Next.js` will automatically be detected and deployed.
