import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { experience } from "@/data/profile";

// Vertical timeline whose active-state mint glow tracks the user's
// scroll position. The rail itself is a thin vertical gradient that
// "fills" as the user scrolls past each role.

const ease = [0.16, 1, 0.3, 1] as const;

export default function Experience() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 70%", "end 30%"],
  });

  // The rail fills top-to-bottom as scrollYProgress goes 0 -> 1.
  const fillScaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section
      id="experience"
      ref={containerRef}
      className="section bg-gradient-to-b from-transparent to-graphite-950/40"
    >
      <div className="section-inner">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease }}
          className="mb-14 max-w-3xl"
        >
          <div className="eyebrow">02 - Experience</div>
          <h2 className="section-title">
            Five internships, one thread: <span className="text-gradient-mint">ship the system</span>.
          </h2>
          <p className="mt-5 text-base text-foreground/65 md:text-lg">
            From a San Francisco mortgage CRM to a Mumbai trading desk - production code, real users, real constraints.
          </p>
        </motion.div>

        <div className="relative">
          {/* Static rail (faint) + animated mint fill (scroll-driven) */}
          <div className="absolute left-3 top-2 hidden h-[calc(100%-1rem)] w-px md:block">
            <div className="h-full w-px bg-gradient-to-b from-white/10 via-white/[0.04] to-transparent" />
            <motion.div
              style={{ scaleY: fillScaleY, transformOrigin: "0% 0%" }}
              className="absolute inset-0 w-px bg-gradient-to-b from-mint via-mint/60 to-transparent"
            />
          </div>

          <ol className="space-y-10">
            {experience.map((exp, i) => (
              <Row key={`${exp.company}-${exp.period}`} exp={exp} index={i} />
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

function Row({ exp, index }: { exp: typeof experience[number]; index: number }) {
  return (
    <motion.li
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.65, delay: index * 0.05, ease }}
      className="relative md:pl-12"
    >
      {/* Timeline node - mint ring for the current role */}
      <span
        className={[
          "absolute left-0 top-7 hidden h-6 w-6 items-center justify-center rounded-full border md:flex",
          exp.highlight
            ? "border-mint bg-mint/15 shadow-[0_0_0_4px_rgba(0,230,118,0.12)]"
            : "border-white/15 bg-graphite-900",
        ].join(" ")}
        aria-hidden
      >
        <span
          className={[
            "h-2 w-2 rounded-full",
            exp.highlight ? "bg-mint" : "bg-foreground/40",
          ].join(" ")}
        />
      </span>

      <article
        className={[
          "surface p-7 md:p-8",
          exp.highlight ? "ring-1 ring-mint/25" : "",
        ].join(" ")}
      >
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-mint">
              {exp.period}
            </p>
            <h3 className="mt-2 font-display text-xl font-semibold tracking-tight text-foreground md:text-2xl">
              {exp.role}
            </h3>
            <p className="mt-1 text-sm text-foreground/65">
              {exp.link ? (
                <a
                  href={exp.link}
                  target="_blank"
                  rel="noopener"
                  className="underline-offset-4 transition-colors hover:text-mint hover:underline"
                >
                  {exp.company}
                </a>
              ) : (
                exp.company
              )}
              <span className="mx-2 text-foreground/20">&middot;</span>
              {exp.location}
            </p>
          </div>
          {exp.highlight && (
            <span className="inline-flex items-center gap-2 rounded-full border border-mint/40 bg-mint/10 px-3 py-1 font-mono text-[10px] uppercase tracking-widest text-mint">
              <span className="h-1.5 w-1.5 animate-pulse-glow rounded-full bg-mint" />
              Current
            </span>
          )}
        </div>

        <ul className="mt-5 space-y-2.5 text-sm leading-relaxed text-foreground/65">
          {exp.bullets.map((b, j) => (
            <li key={j} className="flex gap-3">
              <span className="mt-2 h-[3px] w-3 shrink-0 rounded-full bg-mint/70" />
              <span>{b}</span>
            </li>
          ))}
        </ul>

        <div className="mt-6 flex flex-wrap gap-2">
          {exp.stack.map((t) => (
            <span key={t} className="chip">{t}</span>
          ))}
        </div>
      </article>
    </motion.li>
  );
}
