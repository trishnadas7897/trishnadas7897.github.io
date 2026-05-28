import { motion } from "framer-motion";
import { projects } from "@/data/profile";

export default function Projects() {
  const featured = projects.find((p) => p.featured);
  const others = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="section">
      <div className="section-inner">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mb-14 flex flex-wrap items-end justify-between gap-6"
        >
          <div className="max-w-2xl">
            <div className="eyebrow">03 - Selected work</div>
            <h2 className="section-title">
              Projects that ship - <span className="text-gradient-gold">and stay shipped</span>.
            </h2>
          </div>
          <a
            href="https://github.com/trishnadas7897"
            target="_blank"
            rel="noopener"
            className="inline-flex items-center gap-2 text-sm text-foreground/70 transition-colors hover:text-gold"
          >
            View everything on GitHub
            <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M7 17L17 7" /><path d="M7 7h10v10" />
            </svg>
          </a>
        </motion.div>

        {/* Featured: Hinglish Transcriber */}
        {featured && (
          <motion.article
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="glass mb-10 overflow-hidden p-8 md:p-12"
          >
            <div className="grid items-start gap-10 lg:grid-cols-[1.1fr_1fr]">
              <div>
                <div className="flex flex-wrap items-center gap-3">
                  <span className="rounded-full border border-gold/40 bg-gold/10 px-3 py-1 font-mono text-[10px] uppercase tracking-widest text-gold">
                    Featured · Live
                  </span>
                  <span className="font-mono text-xs uppercase tracking-[0.22em] text-foreground/40">
                    /transcriber
                  </span>
                </div>
                <h3 className="mt-5 font-display text-3xl font-semibold tracking-tighter text-foreground md:text-4xl">
                  {featured.name}
                </h3>
                <p className="mt-3 text-base text-foreground/65 md:text-lg">
                  {featured.tagline}
                </p>
                <p className="mt-5 text-sm leading-relaxed text-foreground/65">
                  {featured.description}
                </p>

                <ul className="mt-6 space-y-2.5 text-sm text-foreground/65">
                  {featured.bullets.map((b, i) => (
                    <li key={i} className="flex gap-3">
                      <span className="mt-2 h-[3px] w-3 shrink-0 rounded-full bg-gold/60" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-7 flex flex-wrap gap-3">
                  {featured.liveUrl && (
                    <motion.a
                      whileHover={{ y: -1 }}
                      whileTap={{ y: 0 }}
                      href={featured.liveUrl}
                      target="_blank"
                      rel="noopener"
                      className="inline-flex items-center gap-2 rounded-full bg-gold px-5 py-2.5 text-sm font-semibold text-navy-950 shadow-[0_10px_30px_rgba(201,169,110,0.3)]"
                    >
                      Try the live demo
                      <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M7 17L17 7" /><path d="M7 7h10v10" />
                      </svg>
                    </motion.a>
                  )}
                  {featured.repoUrl && (
                    <a
                      href={featured.repoUrl}
                      target="_blank"
                      rel="noopener"
                      className="inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-white/[0.02] px-5 py-2.5 text-sm font-medium text-foreground/80 transition-colors hover:border-gold/30 hover:text-foreground"
                    >
                      View source
                    </a>
                  )}
                </div>
              </div>

              {/* Visual placeholder - animated radial / waveform-ish */}
              <FeaturedVisual />
            </div>

            <div className="mt-8 flex flex-wrap gap-2 border-t border-white/[0.05] pt-6">
              {featured.stack.map((t) => (
                <span key={t} className="chip">{t}</span>
              ))}
            </div>
          </motion.article>
        )}

        {/* Project grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {others.map((p, i) => (
            <motion.article
              key={p.slug}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -4 }}
              className="glass group flex h-full flex-col p-6"
            >
              <div className="flex items-center justify-between">
                <span className="font-mono text-[10px] uppercase tracking-widest text-foreground/35">
                  0{i + 2}
                </span>
                <span className="inline-flex h-7 w-7 items-center justify-center rounded-full border border-white/[0.06] text-foreground/40 transition-colors group-hover:border-gold/40 group-hover:text-gold">
                  <svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M7 17L17 7" /><path d="M7 7h10v10" />
                  </svg>
                </span>
              </div>

              <h3 className="mt-5 font-display text-xl font-semibold tracking-tight text-foreground">
                {p.name}
              </h3>
              <p className="mt-1 text-sm text-foreground/55">{p.tagline}</p>
              <p className="mt-4 line-clamp-4 text-sm leading-relaxed text-foreground/65">
                {p.description}
              </p>

              <div className="mt-5 flex flex-wrap gap-1.5">
                {p.stack.slice(0, 4).map((t) => (
                  <span key={t} className="chip">{t}</span>
                ))}
                {p.stack.length > 4 && (
                  <span className="chip text-foreground/45">+{p.stack.length - 4}</span>
                )}
              </div>

              <div className="mt-6 flex items-center gap-4 border-t border-white/[0.05] pt-4 text-xs">
                {p.repoUrl && (
                  <a
                    href={p.repoUrl}
                    target="_blank"
                    rel="noopener"
                    className="text-foreground/60 transition-colors hover:text-gold"
                  >
                    Source ↗
                  </a>
                )}
                {p.liveUrl && (
                  <a
                    href={p.liveUrl}
                    target="_blank"
                    rel="noopener"
                    className="text-gold transition-colors hover:text-gold-light"
                  >
                    Live ↗
                  </a>
                )}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

/** Decorative animated "data flow" visual for the featured card. */
function FeaturedVisual() {
  return (
    <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-white/[0.06] bg-gradient-to-br from-navy-800 to-navy-900">
      <div className="absolute inset-0 grid-overlay opacity-50" />

      {/* Concentric arcs */}
      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 400 300"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <radialGradient id="featGold" cx="50%" cy="50%" r="60%">
            <stop offset="0%" stopColor="#d4b275" stopOpacity="0.5" />
            <stop offset="60%" stopColor="#d4b275" stopOpacity="0.1" />
            <stop offset="100%" stopColor="#d4b275" stopOpacity="0" />
          </radialGradient>
        </defs>
        <circle cx="200" cy="150" r="120" fill="url(#featGold)" />
        {[40, 70, 100, 130].map((r, i) => (
          <circle
            key={r}
            cx="200"
            cy="150"
            r={r}
            fill="none"
            stroke="#c9a96e"
            strokeOpacity={0.18 - i * 0.03}
            strokeWidth="1"
          />
        ))}

        {/* Animated "data" bars across the centre */}
        <g transform="translate(70 150)">
          {Array.from({ length: 36 }).map((_, i) => (
            <rect
              key={i}
              x={i * 7}
              y={-12}
              width="3"
              height="24"
              rx="1.5"
              fill="#c9a96e"
              opacity="0.7"
            >
              <animate
                attributeName="height"
                values={`${8 + (i % 5) * 6};${20 + ((i + 3) % 6) * 5};${10 + (i % 4) * 4}`}
                dur={`${2 + (i % 3) * 0.4}s`}
                repeatCount="indefinite"
                keyTimes="0;0.5;1"
              />
              <animate
                attributeName="y"
                values={`${-(8 + (i % 5) * 6) / 2};${-(20 + ((i + 3) % 6) * 5) / 2};${-(10 + (i % 4) * 4) / 2}`}
                dur={`${2 + (i % 3) * 0.4}s`}
                repeatCount="indefinite"
                keyTimes="0;0.5;1"
              />
            </rect>
          ))}
        </g>

        {/* Hinglish phrase whispered on the canvas */}
        <text
          x="200"
          y="260"
          textAnchor="middle"
          fontFamily="JetBrains Mono, monospace"
          fontSize="10"
          fill="#c9a96e"
          opacity="0.55"
        >
          main · aaj · office · nahi · jaunga
        </text>
      </svg>
    </div>
  );
}
