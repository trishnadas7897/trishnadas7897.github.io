import { profile } from "@/data/profile";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-white/[0.06] px-6 py-12 lg:px-12">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 md:flex-row md:items-end">
        <div>
          <div className="flex items-center gap-3">
            <span className="grid h-9 w-9 place-items-center rounded-full border border-mint/30 bg-mint/[0.06] font-mono text-sm font-semibold text-mint">
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

        <nav className="flex flex-wrap items-center gap-5 font-mono text-[11px] uppercase tracking-[0.18em] text-foreground/55">
          <a href={profile.links.github} target="_blank" rel="noopener" className="transition-colors hover:text-mint">
            GitHub
          </a>
          <a href={profile.links.linkedin} target="_blank" rel="noopener" className="transition-colors hover:text-mint">
            LinkedIn
          </a>
          <a href={`mailto:${profile.email}`} className="transition-colors hover:text-mint">
            Email
          </a>
          <a href={profile.links.resume} target="_blank" rel="noopener" className="transition-colors hover:text-mint">
            /resume
          </a>
          <a href={profile.links.transcriber} className="transition-colors hover:text-mint">
            /transcriber
          </a>
        </nav>

        <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-foreground/35">
          &copy; {year} &middot; {profile.location}
        </p>
      </div>
    </footer>
  );
}
