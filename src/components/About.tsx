import { motion } from "framer-motion";
import { profile, education } from "@/data/profile";

const reveal = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
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
          <p className="mt-6 text-base leading-relaxed text-foreground/70 md:text-lg">
            From a J.P. Morgan trading desk in Mumbai to leading an eight-person team
            on a live food-delivery + ride-hailing stack at OPM, I write code where the
            stakes are high - production, regulated, or both. My work sits where
            backend reliability, AI integration, and product instinct overlap.
          </p>
          <p className="mt-4 text-base leading-relaxed text-foreground/60">
            I'm a B.Tech CSE undergrad at VSSUT, runner-up at J.P. Morgan Code for Good 2025
            (top 6 nationally), and the kind of engineer who'd rather ship the boring
            reliable thing than the impressive fragile one.
          </p>
        </motion.div>

        {/* Metrics rail */}
        <motion.div {...reveal} className="lg:col-span-7">
          <div className="grid grid-cols-2 gap-4 md:grid-cols-2">
            {profile.metrics.map((m) => (
              <motion.div
                key={m.label}
                whileHover={{ y: -3 }}
                className="glass p-6"
              >
                <div className="font-display text-4xl font-semibold tracking-tighter text-gradient-gold md:text-5xl">
                  {m.value}
                </div>
                <p className="mt-2 text-sm text-foreground/55">{m.label}</p>
              </motion.div>
            ))}
          </div>

          {/* Education stack */}
          <div className="mt-8 glass p-6">
            <h3 className="font-mono text-[11px] uppercase tracking-[0.22em] text-gold">
              Education
            </h3>
            <ul className="mt-5 space-y-5">
              {education.map((ed) => (
                <li key={ed.school} className="grid gap-1 md:grid-cols-[1fr_auto] md:items-baseline">
                  <div>
                    <p className="font-medium text-foreground">{ed.school}</p>
                    <p className="text-sm text-foreground/55">
                      {ed.degree} <span className="mx-2 text-foreground/20">·</span> {ed.grade}
                    </p>
                  </div>
                  <p className="font-mono text-xs uppercase tracking-wider text-foreground/40">
                    {ed.period}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
