import { motion } from "framer-motion";
import { experience } from "@/data/profile";

export default function Experience() {
  return (
    <section id="experience" className="section bg-gradient-to-b from-transparent to-navy-900/40">
      <div className="section-inner">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mb-14 max-w-3xl"
        >
          <div className="eyebrow">02 - Experience</div>
          <h2 className="section-title">
            Five internships. One thread:{" "}
            <span className="text-gradient-gold">ship the system</span>.
          </h2>
          <p className="mt-5 text-base text-foreground/65 md:text-lg">
            From a San Francisco mortgage CRM to a Mumbai trading desk - production
            code, real users, real constraints.
          </p>
        </motion.div>

        <div className="relative">
          {/* Vertical timeline rail */}
          <div className="absolute left-3 top-2 hidden h-[calc(100%-1rem)] w-px bg-gradient-to-b from-gold/40 via-gold/10 to-transparent md:block" />

          <ol className="space-y-8">
            {experience.map((exp, i) => (
              <motion.li
                key={`${exp.company}-${exp.period}`}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{
                  duration: 0.65,
                  delay: i * 0.05,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="relative md:pl-12"
              >
                {/* Timeline dot */}
                <span
                  className={[
                    "absolute left-0 top-7 hidden h-6 w-6 items-center justify-center rounded-full border md:flex",
                    exp.highlight
                      ? "border-gold bg-gold/15 shadow-[0_0_0_4px_rgba(201,169,110,0.12)]"
                      : "border-white/15 bg-background",
                  ].join(" ")}
                  aria-hidden
                >
                  <span
                    className={[
                      "h-2 w-2 rounded-full",
                      exp.highlight ? "bg-gold" : "bg-foreground/40",
                    ].join(" ")}
                  />
                </span>

                <article
                  className={[
                    "glass p-7 md:p-8",
                    exp.highlight ? "ring-1 ring-gold/25" : "",
                  ].join(" ")}
                >
                  <div className="flex flex-wrap items-start justify-between gap-4">
                    <div>
                      <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-gold">
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
                            className="underline-offset-4 transition-colors hover:text-gold hover:underline"
                          >
                            {exp.company}
                          </a>
                        ) : (
                          exp.company
                        )}
                        <span className="mx-2 text-foreground/20">·</span>
                        {exp.location}
                      </p>
                    </div>
                    {exp.highlight && (
                      <span className="rounded-full border border-gold/40 bg-gold/10 px-3 py-1 font-mono text-[10px] uppercase tracking-widest text-gold">
                        Current
                      </span>
                    )}
                  </div>

                  <p className="mt-5 text-sm leading-relaxed text-foreground/70 md:text-base">
                    {exp.summary}
                  </p>

                  <ul className="mt-5 space-y-2.5 text-sm leading-relaxed text-foreground/65">
                    {exp.bullets.map((b, j) => (
                      <li key={j} className="flex gap-3">
                        <span className="mt-2 h-[3px] w-3 shrink-0 rounded-full bg-gold/60" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {exp.stack.map((t) => (
                      <span key={t} className="chip">
                        {t}
                      </span>
                    ))}
                  </div>
                </article>
              </motion.li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
