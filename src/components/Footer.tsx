import { profile } from "@/data/profile";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-white/[0.06] px-6 py-12 lg:px-12">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 md:flex-row md:items-end">
        <div>
          <div className="flex items-center gap-3">
            <span className="grid h-9 w-9 place-items-center rounded-full border border-gold/30 bg-gold/5 font-mono text-sm font-semibold text-gold">
              TD
            </span>
            <div>
              <p className="font-display text-base font-semibold text-foreground">
                Trishna Das
              </p>
              <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-foreground/40">
                {profile.tagline}
              </p>
            </div>
          </div>
        </div>

        <nav className="flex items-center gap-5 text-xs text-foreground/55">
          <a
            href={profile.links.github}
            target="_blank"
            rel="noopener"
            className="transition-colors hover:text-gold"
          >
            GitHub
          </a>
          <a
            href={profile.links.linkedin}
            target="_blank"
            rel="noopener"
            className="transition-colors hover:text-gold"
          >
            LinkedIn
          </a>
          <a
            href={`mailto:${profile.email}`}
            className="transition-colors hover:text-gold"
          >
            Email
          </a>
          <a
            href={profile.links.transcriber}
            className="transition-colors hover:text-gold"
          >
            /transcriber
          </a>
        </nav>

        <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-foreground/35">
          © {year} · Bhubaneswar
        </p>
      </div>
    </footer>
  );
}
