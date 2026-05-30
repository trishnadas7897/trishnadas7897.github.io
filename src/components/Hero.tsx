import { motion } from "framer-motion";
import { profile } from "@/data/profile";

// Banned per spec: typewriter animations, particle backgrounds, generic
// catchphrases. Hero uses smooth fade + staggered slide-ups only, with
// the resume's real "Full Stack Software Engineer | AI & Automation
// Engineer" tagline and the verbatim professional summary.

const ease = [0.16, 1, 0.3, 1] as const;

export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[100dvh] w-full flex-col items-center justify-center overflow-hidden px-6 lg:px-12"
    >
      {/* Static gradient mesh - the only "wow" the background gets.
          Three soft radial gradients (mint + cool blue + cyan tint) on
          a graphite ground, with a subtle SVG-noise overlay to prevent
          gradient banding. No particles, no floating dots. */}
      <div
        className="pointer-events-none absolute inset-0 -z-30"
        aria-hidden
        style={{
          background: [
            "radial-gradient(ellipse 60% 50% at 12% 0%, rgba(0,230,118,0.16), transparent 70%)",
            "radial-gradient(ellipse 50% 60% at 88% 100%, rgba(91,161,255,0.10), transparent 70%)",
            "radial-gradient(ellipse 40% 40% at 50% 50%, rgba(0,230,118,0.04), transparent 70%)",
            "linear-gradient(180deg, #121417 0%, #0a0c0f 100%)",
          ].join(", "),
        }}
      />
      <div className="pointer-events-none absolute inset-0 -z-20 grid-overlay opacity-70" />
      <div className="pointer-events-none absolute inset-0 -z-10 noise" />
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,transparent_25%,rgba(10,12,15,0.85)_80%)]" />

      <div className="mx-auto flex max-w-5xl flex-col items-start text-left md:items-center md:text-center">
        {/* Currently-at badge - data-driven, no invented copy. */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease }}
          className="mb-8 inline-flex items-center gap-3 rounded-full border border-mint/25 bg-mint/[0.05] px-4 py-1.5 backdrop-blur-sm"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-mint opacity-70" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-mint" />
          </span>
          <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-mint">
            JPMorgan Chase &middot; CIB Rates Tech
          </span>
        </motion.div>

        {/* Headline - smooth-fade staggered, no typewriter. */}
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.95, delay: 0.06, ease }}
          className="font-display text-5xl font-semibold leading-[1.04] tracking-tightest text-foreground md:text-7xl lg:text-[5.4rem]"
        >
          <span className="block">{profile.name}.</span>
          <motion.span
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.95, delay: 0.18, ease }}
            className="mt-2 block text-gradient-mint"
          >
            {profile.tagline}.
          </motion.span>
        </motion.h1>

        {/* Verbatim professional summary from the resume. No "I build
            things for the web" or other generic copy. */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.95, delay: 0.32, ease }}
          className="mt-7 max-w-2xl text-base leading-relaxed text-foreground/70 md:text-lg"
        >
          {profile.summary}
        </motion.p>

        {/* CTA row */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.95, delay: 0.42, ease }}
          className="mt-10 flex flex-wrap items-center gap-3 md:justify-center"
        >
          <a href="#projects" className="btn-mint">
            View projects
            <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14" /><path d="M12 5l7 7-7 7" />
            </svg>
          </a>
          <a href={profile.links.transcriber} className="btn-outline">
            Try the live demo
            <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M7 17L17 7" /><path d="M7 7h10v10" />
            </svg>
          </a>
          <a href={profile.links.resume} className="btn-outline" target="_blank" rel="noopener">
            Resume
            <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
          </a>
        </motion.div>

        {/* Identity strip - location, contact, source */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="mt-10 flex flex-wrap items-center gap-x-5 gap-y-2 font-mono text-[11px] uppercase tracking-[0.22em] text-foreground/45 md:justify-center"
        >
          <span>{profile.location}</span>
          <span className="hidden h-1 w-1 rounded-full bg-mint/50 md:inline-block" />
          <span className="text-mint/80">{profile.relocate}</span>
          <span className="hidden h-1 w-1 rounded-full bg-mint/50 md:inline-block" />
          <a href={profile.links.linkedin} target="_blank" rel="noopener" className="transition-colors hover:text-mint">LinkedIn</a>
          <span className="hidden h-1 w-1 rounded-full bg-mint/50 md:inline-block" />
          <a href={profile.links.github} target="_blank" rel="noopener" className="transition-colors hover:text-mint">GitHub</a>
        </motion.div>
      </div>

      {/* Scroll cue */}
      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.1, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 font-mono text-[10px] uppercase tracking-[0.3em] text-foreground/35 transition-colors hover:text-mint"
        aria-label="Scroll down"
      >
        <span className="mb-2 block text-center">scroll</span>
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
