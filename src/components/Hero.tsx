import { motion } from "framer-motion";
import { Suspense, lazy } from "react";
import { profile } from "@/data/profile";

// Three.js is heavy - lazy-load + suspend so the rest of the page renders fast.
const ParticleField = lazy(() => import("@/components/ParticleField"));

export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[100dvh] w-full flex-col items-center justify-center overflow-hidden px-6 lg:px-12"
    >
      {/* 3D particle background */}
      <Suspense fallback={null}>
        <div className="absolute inset-0 -z-10">
          <ParticleField />
        </div>
      </Suspense>

      {/* Vignette + grid overlay for depth */}
      <div className="pointer-events-none absolute inset-0 -z-10 grid-overlay opacity-60" />
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,transparent_30%,rgba(4,6,12,0.92)_75%)]" />

      <div className="mx-auto flex max-w-5xl flex-col items-center text-center">
        {/* Currently-at badge */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-8 inline-flex items-center gap-3 rounded-full border border-gold/25 bg-gold/[0.04] px-4 py-1.5 backdrop-blur-sm"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-gold opacity-70" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-gold" />
          </span>
          <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-gold">
            Currently at J.P. Morgan · CIB Rates
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
          className="font-display text-5xl font-semibold leading-[1.02] tracking-tightest text-foreground md:text-7xl lg:text-[5.4rem]"
        >
          <span className="block">Trishna Das.</span>
          <span className="mt-2 block text-gradient-gold">
            Full-Stack · AI Systems Engineer.
          </span>
        </motion.h1>

        {/* Sub-headline */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.18, ease: [0.16, 1, 0.3, 1] }}
          className="mt-7 max-w-2xl text-lg leading-relaxed text-foreground/70 md:text-xl"
        >
          {profile.headline}
        </motion.p>

        {/* CTA row */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.28, ease: [0.16, 1, 0.3, 1] }}
          className="mt-10 flex flex-col items-center gap-3 sm:flex-row"
        >
          <a
            href="#projects"
            className="group relative inline-flex items-center gap-2 rounded-full bg-gold px-6 py-3 text-sm font-semibold tracking-tight text-navy-950 transition-shadow"
            style={{ boxShadow: "0 10px 36px rgba(201,169,110,0.35)" }}
          >
            View projects
            <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform group-hover:translate-x-0.5">
              <path d="M5 12h14" /><path d="M12 5l7 7-7 7" />
            </svg>
          </a>
          <a
            href={profile.links.transcriber}
            className="inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-white/[0.02] px-6 py-3 text-sm font-medium text-foreground/90 backdrop-blur-sm transition-colors hover:border-gold/30 hover:text-foreground"
          >
            Try the live demo
            <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M7 17L17 7" /><path d="M7 7h10v10" />
            </svg>
          </a>
        </motion.div>

        {/* Quick links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-10 flex items-center gap-5 text-xs text-foreground/55"
        >
          <a href={profile.links.linkedin} target="_blank" rel="noopener" className="transition-colors hover:text-gold">
            LinkedIn
          </a>
          <span className="text-foreground/15">·</span>
          <a href={profile.links.github} target="_blank" rel="noopener" className="transition-colors hover:text-gold">
            GitHub
          </a>
          <span className="text-foreground/15">·</span>
          <a href={`mailto:${profile.email}`} className="transition-colors hover:text-gold">
            Email
          </a>
        </motion.div>
      </div>

      {/* Scroll cue */}
      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-xs uppercase tracking-[0.3em] text-foreground/35 transition-colors hover:text-gold"
        aria-label="Scroll down"
      >
        <span className="block mb-2">scroll</span>
        <svg viewBox="0 0 24 40" width="18" height="30" fill="none" stroke="currentColor" strokeWidth="1.2" className="mx-auto">
          <rect x="6" y="2" width="12" height="22" rx="6" />
          <line x1="12" y1="8" x2="12" y2="14">
            <animate attributeName="y2" values="14;20;14" dur="2s" repeatCount="indefinite" />
          </line>
        </svg>
      </motion.a>
    </section>
  );
}
