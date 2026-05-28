import { motion } from "framer-motion";
import { profile } from "@/data/profile";
import { Mail, MapPin, Linkedin, Github, ArrowUpRight } from "lucide-react";

const channels = [
  {
    icon: Mail,
    label: "Email",
    value: profile.email,
    href: `mailto:${profile.email}`,
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/trishnadas7897",
    href: profile.links.linkedin,
    external: true,
  },
  {
    icon: Github,
    label: "GitHub",
    value: "github.com/trishnadas7897",
    href: profile.links.github,
    external: true,
  },
  {
    icon: MapPin,
    label: "Based in",
    value: profile.location,
  },
] as const;

export default function Contact() {
  return (
    <section id="contact" className="section">
      <div className="section-inner">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="glass relative overflow-hidden p-10 md:p-16"
        >
          {/* Decorative grid */}
          <div className="pointer-events-none absolute inset-0 grid-overlay opacity-40" />

          <div className="relative grid items-end gap-10 lg:grid-cols-[1.2fr_1fr]">
            <div>
              <div className="eyebrow">06 - Contact</div>
              <h2 className="font-display text-4xl font-semibold tracking-tightest text-foreground md:text-6xl">
                Let's build <span className="text-gradient-gold">something serious</span>.
              </h2>
              <p className="mt-5 max-w-xl text-base text-foreground/65 md:text-lg">
                Open to full-time roles in 2027, summer 2026 collaborations, and
                interesting side projects in AI systems / fintech / regulated
                infrastructure. Always replying within a day.
              </p>

              <motion.a
                whileHover={{ y: -1 }}
                href={`mailto:${profile.email}`}
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-gold px-6 py-3 text-sm font-semibold tracking-tight text-navy-950 shadow-[0_10px_36px_rgba(201,169,110,0.3)]"
              >
                {profile.email}
                <ArrowUpRight size={16} />
              </motion.a>
            </div>

            <ul className="space-y-3">
              {channels.map(({ icon: Icon, label, value, href, external }) => {
                const inner = (
                  <span className="flex items-center justify-between gap-4 rounded-2xl border border-white/[0.06] bg-white/[0.02] px-5 py-4 transition-colors hover:border-gold/30 hover:bg-white/[0.04]">
                    <span className="flex items-center gap-4">
                      <span className="grid h-9 w-9 place-items-center rounded-xl border border-gold/30 bg-gold/[0.06] text-gold">
                        <Icon size={16} strokeWidth={1.6} />
                      </span>
                      <span>
                        <span className="block font-mono text-[10px] uppercase tracking-widest text-foreground/40">
                          {label}
                        </span>
                        <span className="block text-sm text-foreground/85">
                          {value}
                        </span>
                      </span>
                    </span>
                    {href && (
                      <ArrowUpRight size={16} className="text-foreground/40" />
                    )}
                  </span>
                );
                return (
                  <li key={label}>
                    {href ? (
                      <a
                        href={href}
                        target={external ? "_blank" : undefined}
                        rel={external ? "noopener" : undefined}
                      >
                        {inner}
                      </a>
                    ) : (
                      inner
                    )}
                  </li>
                );
              })}
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
