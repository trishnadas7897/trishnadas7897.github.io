import { motion } from "framer-motion";
import { skills } from "@/data/profile";
import {
  Code2,
  Server,
  Cloud,
  Database,
  Sparkles,
  LineChart,
} from "lucide-react";

const iconFor = (cat: string) => {
  if (cat === "Languages") return Code2;
  if (cat === "Frameworks") return Server;
  if (cat === "Cloud & DevOps") return Cloud;
  if (cat === "Databases") return Database;
  if (cat === "AI / ML") return Sparkles;
  if (cat === "Analytics & BI") return LineChart;
  return Code2;
};

export default function Skills() {
  return (
    <section id="skills" className="section">
      <div className="section-inner">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mb-14 max-w-3xl"
        >
          <div className="eyebrow">04 - Stack</div>
          <h2 className="section-title">
            Tools <span className="text-gradient-gold">I reach for first</span>.
          </h2>
          <p className="mt-5 text-base text-foreground/65 md:text-lg">
            Grouped by where they show up in production - not by what's trendy.
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
                  delay: i * 0.05,
                  ease: [0.16, 1, 0.3, 1],
                }}
                whileHover={{ y: -3 }}
                className="glass p-6"
              >
                <div className="flex items-center gap-3">
                  <span className="grid h-10 w-10 place-items-center rounded-xl border border-gold/30 bg-gold/[0.06] text-gold">
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
