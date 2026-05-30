import { motion } from "framer-motion";
import { achievements } from "@/data/profile";
import { Trophy, Star } from "lucide-react";

const iconFor = (badge?: "primary" | "secondary") =>
  badge === "primary" ? Trophy : Star;

const ringFor = (badge?: "primary" | "secondary") =>
  badge === "primary"
    ? "border-mint/40 bg-mint/[0.08] text-mint"
    : "border-foreground/15 bg-white/[0.04] text-foreground/80";

const ease = [0.16, 1, 0.3, 1] as const;

export default function Achievements() {
  return (
    <section
      id="achievements"
      className="section bg-gradient-to-b from-graphite-950/40 to-transparent"
    >
      <div className="section-inner">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease }}
          className="mb-14 max-w-3xl"
        >
          <div className="eyebrow">05 - Recognition</div>
          <h2 className="section-title">
            Awards &amp; <span className="text-gradient-mint">national finals</span>.
          </h2>
          <p className="mt-5 text-base text-foreground/65 md:text-lg">
            Four entries the latest resume calls out: a J.P. Morgan finalist run, an IIT Bhubaneswar hackathon, an industry coding competition, and a robotics-club win.
          </p>
        </motion.div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-2">
          {achievements.map((a, i) => {
            const Icon = iconFor(a.badge);
            return (
              <motion.div
                key={a.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{
                  duration: 0.5,
                  delay: i * 0.05,
                  ease,
                }}
                whileHover={{ y: -3 }}
                className="surface flex h-full gap-4 p-6"
              >
                <span
                  className={[
                    "grid h-12 w-12 shrink-0 place-items-center rounded-xl border",
                    ringFor(a.badge),
                  ].join(" ")}
                >
                  <Icon size={20} strokeWidth={1.5} />
                </span>
                <div className="min-w-0">
                  <p className="text-sm font-medium leading-snug text-foreground">
                    {a.title}
                  </p>
                  <p className="mt-1 text-xs text-foreground/55">
                    {a.issuer}
                    {a.year && (
                      <>
                        <span className="mx-1.5 text-foreground/25">&middot;</span>
                        {a.year}
                      </>
                    )}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
