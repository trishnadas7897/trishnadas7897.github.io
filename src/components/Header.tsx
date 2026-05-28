import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { sectionsNav, profile } from "@/data/profile";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={[
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-white/[0.06] bg-background/70 backdrop-blur-xl"
          : "bg-transparent",
      ].join(" ")}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6 lg:px-12">
        <a href="#top" className="group flex items-center gap-3" aria-label="Home">
          <span className="grid h-9 w-9 place-items-center rounded-full border border-gold/30 bg-gold/5 font-mono text-sm font-semibold text-gold">
            TD
          </span>
          <span className="hidden font-display text-sm font-medium tracking-tight text-foreground/90 transition-colors group-hover:text-foreground md:block">
            Trishna Das
          </span>
        </a>

        <nav className="hidden items-center gap-1 md:flex">
          {sectionsNav.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              className="rounded-full px-3 py-1.5 text-sm text-foreground/70 transition-colors hover:bg-white/[0.04] hover:text-foreground"
            >
              {s.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={profile.links.github}
            target="_blank"
            rel="noopener"
            className="hidden rounded-full border border-white/[0.06] bg-white/[0.02] px-3 py-1.5 text-xs font-medium text-foreground/80 transition-colors hover:border-gold/30 hover:text-foreground md:inline-flex"
          >
            GitHub
          </a>
          <motion.a
            whileHover={{ y: -1 }}
            whileTap={{ y: 0 }}
            href={`mailto:${profile.email}`}
            className="inline-flex items-center gap-2 rounded-full bg-gold px-4 py-1.5 text-xs font-semibold tracking-tight text-navy-950 shadow-[0_8px_30px_rgba(201,169,110,0.25)] transition-shadow hover:shadow-[0_10px_36px_rgba(201,169,110,0.45)]"
          >
            Get in touch
          </motion.a>
          <button
            className="ml-1 grid h-9 w-9 place-items-center rounded-full border border-white/[0.06] text-foreground/80 md:hidden"
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
          >
            <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.6">
              <line x1="4" y1="7" x2="20" y2="7" />
              <line x1="4" y1="12" x2="20" y2="12" />
              <line x1="4" y1="17" x2="20" y2="17" />
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <nav className="border-t border-white/[0.06] bg-background/95 backdrop-blur-xl md:hidden">
          <ul className="mx-auto max-w-6xl px-6 py-3">
            {sectionsNav.map((s) => (
              <li key={s.id}>
                <a
                  href={`#${s.id}`}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-3 py-2 text-sm text-foreground/80 hover:bg-white/[0.04]"
                >
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
