import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ankita Naik — Full-Stack Web Developer & Intelligent Systems",
  description:
    "Portfolio of Ankita Naik — Senior B.Tech Student at VSSUT (CGPA: 9.49). Specializing in Next.js, React, TypeScript, Prisma, Python system monitoring, and machine learning.",
  keywords: [
    "Ankita Naik",
    "ankita.dev",
    "Full-Stack Developer",
    "Software Engineer",
    "VSSUT",
    "Next.js",
    "TypeScript",
    "Prisma",
    "Python",
    "DRDO",
  ],
  authors: [{ name: "Ankita Naik", url: "https://github.com/anku-byte" }],
  creator: "Ankita Naik",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className="font-sans antialiased text-[#FAF5E4] bg-[#15370D] selection:bg-[#728E6D] selection:text-white">
        {children}
      </body>
    </html>
  );
}
