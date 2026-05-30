import { motion } from "framer-motion";
import { skills } from "@/data/profile";
import {
  Code2,
  Server,
  Cloud,
  Database,
  Sparkles,
  LineChart,
  Wrench,
} from "lucide-react";

// Spec: "Display skills as clean data tags, interactive nodes, or a
// flowing marquee." Picking clean data tags - they read as a checklist
// of capabilities, scan quickly, and don't lie with progress bars.

const iconFor = (cat: string) => {
  if (cat.startsWith("Programming")) return Code2;
  if (cat.startsWith("Frameworks")) return Server;
  if (cat.startsWith("Databases")) return Database;
  if (cat.startsWith("Developer")) return Wrench;
  if (cat.startsWith("Cloud")) return Cloud;
  if (cat.startsWith("Gen AI")) return Sparkles;
  if (cat.startsWith("Machine")) return LineChart;
  return Code2;
};

const ease = [0.16, 1, 0.3, 1] as const;

export default function Skills() {
  return (
    <section id="skills" className="section">
      <div className="section-inner">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease }}
          className="mb-14 max-w-3xl"
        >
          <div className="eyebrow">04 - Stack</div>
          <h2 className="section-title">
            Tools <span className="text-gradient-mint">I reach for first</span>.
          </h2>
          <p className="mt-5 text-base text-foreground/65 md:text-lg">
            Grouped by where they show up in production - not by what's trendy. No progress bars - they would lie.
          </p>
        </motion.div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {skills.map((g, i) => {
            const Icon = iconFor(g.category);
            return (
              <motion.div
                key={g.category}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{
                  duration: 0.6,
                  delay: i * 0.04,
                  ease,
                }}
                whileHover={{ y: -3 }}
                className="surface p-6"
              >
                <div className="flex items-center gap-3">
                  <span className="grid h-10 w-10 place-items-center rounded-xl border border-mint/30 bg-mint/[0.06] text-mint">
                    <Icon size={18} strokeWidth={1.6} />
                  </span>
                  <h3 className="font-display text-base font-semibold tracking-tight text-foreground">
                    {g.category}
                  </h3>
                </div>
                <div className="mt-5 flex flex-wrap gap-2">
                  {g.items.map((s) => (
                    <span key={s} className="chip">
                      {s}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
