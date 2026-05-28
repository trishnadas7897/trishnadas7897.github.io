import { motion } from "framer-motion";
import { achievements } from "@/data/profile";
import { Trophy, Star, Sparkles } from "lucide-react";

const iconFor = (badge?: "gold" | "silver" | "blue") => {
  if (badge === "gold") return Trophy;
  if (badge === "silver") return Sparkles;
  return Star;
};

const ringFor = (badge?: "gold" | "silver" | "blue") => {
  if (badge === "gold") return "border-gold/40 bg-gold/[0.08] text-gold";
  if (badge === "silver") return "border-foreground/15 bg-white/[0.04] text-foreground/80";
  return "border-blue-300/25 bg-blue-300/[0.05] text-blue-200";
};

export default function Achievements() {
  return (
    <section
      id="achievements"
      className="section bg-gradient-to-b from-navy-900/40 to-transparent"
    >
      <div className="section-inner">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mb-14 max-w-3xl"
        >
          <div className="eyebrow">05 - Recognition</div>
          <h2 className="section-title">
            Awards, hackathons, <span className="text-gradient-gold">national finals</span>.
          </h2>
          <p className="mt-5 text-base text-foreground/65 md:text-lg">
            Six wins / podiums across product, robotics, and AI in the last two years.
          </p>
        </motion.div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
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
                  delay: i * 0.04,
                  ease: [0.16, 1, 0.3, 1],
                }}
                whileHover={{ y: -3 }}
                className="glass flex h-full gap-4 p-5"
              >
                <span
                  className={[
                    "grid h-11 w-11 shrink-0 place-items-center rounded-xl border",
                    ringFor(a.badge),
                  ].join(" ")}
                >
                  <Icon size={18} strokeWidth={1.5} />
                </span>
                <div className="min-w-0">
                  <p className="text-sm font-medium leading-snug text-foreground">
                    {a.title}
                  </p>
                  <p className="mt-1 text-xs text-foreground/55">
                    {a.issuer}
                    {a.year && (
                      <>
                        <span className="mx-1.5 text-foreground/25">·</span>
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
