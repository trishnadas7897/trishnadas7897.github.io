import { motion } from "framer-motion";
import { profile, education, certifications } from "@/data/profile";

const ease = [0.16, 1, 0.3, 1] as const;
const reveal = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.7, ease },
};

export default function About() {
  return (
    <section id="about" className="section">
      <div className="section-inner grid gap-16 lg:grid-cols-12">
        <motion.div {...reveal} className="lg:col-span-5">
          <div className="eyebrow">01 - About</div>
          <h2 className="section-title">
            Engineer who ships across the stack.
          </h2>
          <p className="mt-6 text-base leading-relaxed text-foreground/75 md:text-lg">
            {profile.summary}
          </p>

          <dl className="mt-8 grid grid-cols-2 gap-3 font-mono text-[11px] uppercase tracking-[0.22em] text-foreground/55">
            <div className="rounded-lg border border-white/[0.06] bg-white/[0.015] px-4 py-3">
              <dt>Base</dt>
              <dd className="mt-1 text-sm normal-case tracking-normal text-foreground">{profile.location}</dd>
            </div>
            <div className="rounded-lg border border-mint/25 bg-mint/[0.05] px-4 py-3">
              <dt className="text-mint">Status</dt>
              <dd className="mt-1 text-sm normal-case tracking-normal text-foreground">{profile.relocate}</dd>
            </div>
          </dl>
        </motion.div>

        <motion.div {...reveal} className="lg:col-span-7">
          {/* Metrics rail */}
          <div className="grid grid-cols-2 gap-4">
            {profile.metrics.map((m) => (
              <motion.div
                key={m.label}
                whileHover={{ y: -3 }}
                className="surface p-6"
              >
                <div className="font-display text-4xl font-semibold tracking-tighter text-gradient-mint md:text-5xl">
                  {m.value}
                </div>
                <p className="mt-2 text-sm text-foreground/55">{m.label}</p>
              </motion.div>
            ))}
          </div>

          {/* Education + certifications stack */}
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <div className="surface p-6">
              <h3 className="font-mono text-[11px] uppercase tracking-[0.22em] text-mint">
                Education
              </h3>
              <ul className="mt-5 space-y-4 text-sm">
                {education.map((ed) => (
                  <li key={ed.school}>
                    <p className="font-medium text-foreground">{ed.school}</p>
                    <p className="mt-0.5 text-foreground/55">
                      {ed.degree}
                      {ed.grade && (
                        <>
                          <span className="mx-2 text-foreground/20">&middot;</span>
                          {ed.grade}
                        </>
                      )}
                    </p>
                    {ed.period && (
                      <p className="mt-0.5 font-mono text-[10px] uppercase tracking-[0.22em] text-foreground/40">
                        {ed.period}
                      </p>
                    )}
                  </li>
                ))}
              </ul>
            </div>

            <div className="surface p-6">
              <h3 className="font-mono text-[11px] uppercase tracking-[0.22em] text-mint">
                Certifications
              </h3>
              <ul className="mt-5 space-y-4 text-sm">
                {certifications.map((c) => (
                  <li key={c.name} className="flex items-start gap-3">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-mint" />
                    <div>
                      <p className="font-medium text-foreground">{c.name}</p>
                      <p className="mt-0.5 text-foreground/55">{c.issuer}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
