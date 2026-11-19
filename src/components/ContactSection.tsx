"use client";

import React, { useState } from "react";
import { PERSONAL_INFO } from "@/data/portfolioData";
import { Mail, Copy, Check, Send, Github, Linkedin, MessageSquare, Clock, ShieldCheck } from "lucide-react";

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = "Please enter your name";
    if (!formData.email.trim()) {
      newErrors.email = "Please enter your email address";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }
    if (!formData.message.trim()) newErrors.message = "Please write a brief message";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    // Simulate API dispatch / mail submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 1000);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="contact" className="py-20 md:py-28 relative scroll-mt-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="max-w-2xl mb-12">
          <div className="inline-flex items-center gap-2 font-mono text-xs font-semibold uppercase tracking-wider text-sky-600 dark:text-sky-400 mb-2">
            <Mail className="w-4 h-4" />
            Get In Touch
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-zinc-900 dark:text-white tracking-tight">
            Let&apos;s Build Something Resilient Together
          </h2>
          <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400 mt-2">
            Have a project in mind, an internship opportunity, or want to discuss full-stack architecture? Drop a note or connect directly.
          </p>
        </div>

        <div className="grid grid-cols-12 gap-8 items-start">
          {/* Quick Contact & Info Card (col-span-12 lg:col-span-5) */}
          <div className="col-span-12 lg:col-span-5 space-y-6">
            <div className="rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white/70 dark:bg-zinc-900/60 p-6 sm:p-7 backdrop-blur-sm shadow-sm">
              <h3 className="text-lg font-bold text-zinc-900 dark:text-white mb-2">
                Direct Contact
              </h3>
              <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 mb-6">
                Preferred communication channel is direct email. I monitor inquiries daily.
              </p>

              {/* One-Click Copy Email Banner */}
              <div className="p-3.5 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-950/60 flex items-center justify-between gap-3 mb-6">
                <div className="truncate">
                  <span className="text-[10px] font-mono text-zinc-400 uppercase tracking-wider block">
                    Email Address
                  </span>
                  <span className="text-xs sm:text-sm font-mono font-medium text-zinc-800 dark:text-zinc-200 truncate select-all">
                    {PERSONAL_INFO.email}
                  </span>
                </div>

                <button
                  onClick={handleCopy}
                  aria-label="Copy email to clipboard"
                  className="px-3 py-1.5 rounded-lg border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-800 hover:bg-zinc-100 dark:hover:bg-zinc-700 text-xs font-mono font-medium text-zinc-800 dark:text-zinc-200 flex items-center gap-1.5 transition-all shrink-0"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-500" />
                      <span className="text-emerald-500 font-semibold">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-zinc-500" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>

              {/* Social Channels */}
              <div className="space-y-3">
                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-950/30 hover:border-sky-300 dark:hover:border-sky-800 transition-colors text-xs font-medium text-zinc-700 dark:text-zinc-300"
                >
                  <span className="flex items-center gap-2.5">
                    <Linkedin className="w-4 h-4 text-[#0077b5]" />
                    <span>LinkedIn Profile</span>
                  </span>
                  <span className="font-mono text-zinc-400">/in/ankita-naik-90541a330</span>
                </a>

                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-950/30 hover:border-sky-300 dark:hover:border-sky-800 transition-colors text-xs font-medium text-zinc-700 dark:text-zinc-300"
                >
                  <span className="flex items-center gap-2.5">
                    <Github className="w-4 h-4" />
                    <span>GitHub Organization</span>
                  </span>
                  <span className="font-mono text-zinc-400">@anku-byte</span>
                </a>
              </div>

              {/* SLA / Availability note */}
              <div className="mt-6 pt-5 border-t border-zinc-100 dark:border-zinc-800/80 flex items-center gap-2 text-xs font-mono text-zinc-500 dark:text-zinc-400">
                <Clock className="w-4 h-4 text-emerald-500" />
                <span>Response time: Within 24-48 hours</span>
              </div>
            </div>
          </div>

          {/* Interactive Form Card (col-span-12 lg:col-span-7) */}
          <div className="col-span-12 lg:col-span-7 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/80 p-6 sm:p-8 backdrop-blur-sm shadow-sm">
            {submitted ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-12 h-12 rounded-full bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mx-auto">
                  <Check className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-zinc-900 dark:text-white">
                  Message Dispatched Successfully
                </h3>
                <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 max-w-md mx-auto">
                  Thank you for reaching out! I have received your message and will get back to you shortly.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-4 px-4 py-2 text-xs font-mono font-semibold rounded-lg bg-zinc-900 text-white dark:bg-white dark:text-zinc-950 hover:opacity-90"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name field */}
                  <div>
                    <label className="block text-xs font-mono font-medium text-zinc-700 dark:text-zinc-300 mb-1.5">
                      Your Name <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Jane Doe"
                      className={`w-full px-3.5 py-2.5 rounded-xl text-xs sm:text-sm border ${
                        errors.name
                          ? "border-rose-500 focus:ring-rose-500"
                          : "border-zinc-300 dark:border-zinc-700 focus:border-sky-500"
                      } bg-zinc-50/50 dark:bg-zinc-950/50 text-zinc-900 dark:text-white focus:outline-none transition-colors`}
                    />
                    {errors.name && (
                      <p className="text-[11px] font-mono text-rose-500 mt-1">{errors.name}</p>
                    )}
                  </div>

                  {/* Email field */}
                  <div>
                    <label className="block text-xs font-mono font-medium text-zinc-700 dark:text-zinc-300 mb-1.5">
                      Your Email <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="jane@company.com"
                      className={`w-full px-3.5 py-2.5 rounded-xl text-xs sm:text-sm border ${
                        errors.email
                          ? "border-rose-500 focus:ring-rose-500"
                          : "border-zinc-300 dark:border-zinc-700 focus:border-sky-500"
                      } bg-zinc-50/50 dark:bg-zinc-950/50 text-zinc-900 dark:text-white focus:outline-none transition-colors`}
                    />
                    {errors.email && (
                      <p className="text-[11px] font-mono text-rose-500 mt-1">{errors.email}</p>
                    )}
                  </div>
                </div>

                {/* Subject field */}
                <div>
                  <label className="block text-xs font-mono font-medium text-zinc-700 dark:text-zinc-300 mb-1.5">
                    Subject / Topic
                  </label>
                  <input
                    type="text"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="Internship Inquiry / Project Collaboration"
                    className="w-full px-3.5 py-2.5 rounded-xl text-xs sm:text-sm border border-zinc-300 dark:border-zinc-700 focus:border-sky-500 bg-zinc-50/50 dark:bg-zinc-950/50 text-zinc-900 dark:text-white focus:outline-none transition-colors"
                  />
                </div>

                {/* Message field */}
                <div>
                  <label className="block text-xs font-mono font-medium text-zinc-700 dark:text-zinc-300 mb-1.5">
                    Message <span className="text-rose-500">*</span>
                  </label>
                  <textarea
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Describe your project, timeline, or engineering role..."
                    className={`w-full px-3.5 py-2.5 rounded-xl text-xs sm:text-sm border ${
                      errors.message
                        ? "border-rose-500 focus:ring-rose-500"
                        : "border-zinc-300 dark:border-zinc-700 focus:border-sky-500"
                    } bg-zinc-50/50 dark:bg-zinc-950/50 text-zinc-900 dark:text-white focus:outline-none transition-colors resize-none`}
                  />
                  {errors.message && (
                    <p className="text-[11px] font-mono text-rose-500 mt-1">{errors.message}</p>
                  )}
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-white dark:bg-white dark:text-zinc-950 dark:hover:bg-zinc-100 font-medium text-sm transition-all shadow-sm disabled:opacity-70"
                >
                  {isSubmitting ? (
                    <span className="font-mono text-xs">Sending payload...</span>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
