import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { projects } from "@/data/profile";

// Sticky horizontal-scroll "scrollytelling" projects section.
//
// Implementation pattern:
//   - The outer <section> is `n * 100vh` tall. Vertical scroll inside
//     this region drives a horizontal translateX on the inner rail.
//   - The inner container is `position: sticky; top: 0; h-screen` so it
//     pins to the viewport while the outer section is scrolled through.
//   - useScroll + useTransform map scroll progress (0..1) -> negative X
//     percentage to slide the rail left. The X range is chosen so the
//     last card's right edge lines up with the viewport's right edge.
//
// This is the bespoke, "I was paid to design this" pattern. No JS
// scroll listeners; framer-motion does all the work, GPU-accelerated.

const ease = [0.16, 1, 0.3, 1] as const;

export default function Projects() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Slide-distance maths:
  //   We render `projects.length + 1` panels (one Intro panel + each
  //   project). The rail width is therefore (projects.length + 1) * 100%
  //   of the viewport width. To reveal the last panel, translate the
  //   rail by - (projects.length / (projects.length + 1)) * 100%.
  const slideEnd = -(projects.length / (projects.length + 1)) * 100;
  const x = useTransform(scrollYProgress, [0, 1], ["0%", `${slideEnd}%`]);

  // Outer section height: roughly 100vh per panel (1 intro + N projects).
  // Picks (N + 1) * 100vh; the user scrolls that much vertically to
  // traverse the horizontal rail end-to-end.
  const outerHeight = `${(projects.length + 1) * 100}vh`;

  return (
    <section id="projects" ref={containerRef} style={{ height: outerHeight }} className="relative">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        {/* Header sits on top of the rail, doesn't move with it */}
        <div className="pointer-events-none absolute left-6 right-6 top-24 z-10 mx-auto flex max-w-6xl flex-wrap items-end justify-between gap-6 lg:left-12 lg:right-12">
          <div className="max-w-xl">
            <div className="eyebrow">03 - Selected work</div>
            <h2 className="section-title">
              Projects that <span className="text-gradient-mint">ship</span>.
            </h2>
            <p className="mt-3 font-mono text-xs uppercase tracking-[0.22em] text-foreground/45">
              Scroll vertically &middot; rail moves horizontally
            </p>
          </div>
          <ScrollProgress progress={scrollYProgress} count={projects.length} />
        </div>

        {/* Horizontal rail */}
        <motion.div
          style={{ x }}
          className="flex h-full items-center pl-6 lg:pl-12"
        >
          {/* Intro panel - sets the scene, then the cards roll past */}
          <IntroPanel />
          {projects.map((p, i) => (
            <ProjectPanel key={p.slug} project={p} index={i + 1} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function IntroPanel() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.98 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: false, amount: 0.4 }}
      transition={{ duration: 0.7, ease }}
      className="relative mr-8 flex h-[68vh] w-[88vw] max-w-3xl shrink-0 flex-col justify-end rounded-2xl border border-white/[0.06] bg-gradient-to-br from-graphite-800/60 to-graphite-900/40 p-10 md:mr-12 md:w-[64vw] md:p-14"
    >
      <div className="absolute inset-0 pointer-events-none grid-overlay opacity-40 rounded-2xl" />
      <div className="absolute inset-0 pointer-events-none rounded-2xl bg-[radial-gradient(ellipse_at_top_left,rgba(0,230,118,0.10),transparent_60%)]" />
      <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-mint">
        04 case studies &middot; live + repos
      </p>
      <h3 className="mt-4 font-display text-3xl font-semibold tracking-tighter text-foreground md:text-5xl">
        Production-grade by default, demo-friendly by design.
      </h3>
      <p className="mt-4 max-w-md text-sm leading-relaxed text-foreground/65 md:text-base">
        Live ASR, agentic AI, full-stack mobile, adversarial vision. Each card on the rail is a real shipped artefact with links to the source and (where possible) a live URL.
      </p>
    </motion.div>
  );
}

function ProjectPanel({ project, index }: { project: typeof projects[number]; index: number }) {
  return (
    <motion.article
      initial={{ opacity: 0.5, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.4 }}
      transition={{ duration: 0.6, ease }}
      className="relative mr-8 flex h-[72vh] w-[88vw] max-w-3xl shrink-0 flex-col card-data p-8 md:mr-12 md:w-[64vw] md:p-12"
    >
      <div className="flex items-center justify-between">
        <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-mint">
          {String(index).padStart(2, "0")} &middot; {project.featured ? "Featured" : "Project"}
        </span>
        {project.liveUrl && (
          <span className="inline-flex items-center gap-2 rounded-full border border-mint/40 bg-mint/[0.08] px-3 py-1 font-mono text-[10px] uppercase tracking-widest text-mint">
            <span className="h-1.5 w-1.5 animate-pulse-glow rounded-full bg-mint" />
            Live
          </span>
        )}
      </div>

      <h3 className="mt-5 font-display text-3xl font-semibold tracking-tighter text-foreground md:text-4xl">
        {project.name}
      </h3>
      <p className="mt-2 text-base text-foreground/65 md:text-lg">{project.tagline}</p>

      <p className="mt-5 text-sm leading-relaxed text-foreground/65 md:text-[15px]">
        {project.description}
      </p>

      <ul className="mt-5 space-y-2 text-sm text-foreground/65">
        {project.bullets.map((b, i) => (
          <li key={i} className="flex gap-3">
            <span className="mt-2 h-[3px] w-3 shrink-0 rounded-full bg-mint/70" />
            <span>{b}</span>
          </li>
        ))}
      </ul>

      <div className="mt-auto pt-6">
        <div className="flex flex-wrap gap-1.5">
          {project.stack.map((t) => (
            <span key={t} className="chip">{t}</span>
          ))}
        </div>

        <div className="mt-5 flex flex-wrap gap-3">
          {project.liveUrl && (
            <a href={project.liveUrl} target="_blank" rel="noopener" className="btn-mint">
              Try the demo
              <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M7 17L17 7" /><path d="M7 7h10v10" />
              </svg>
            </a>
          )}
          {project.repoUrl && (
            <a href={project.repoUrl} target="_blank" rel="noopener" className="btn-outline">
              Source
              <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M7 17L17 7" /><path d="M7 7h10v10" />
              </svg>
            </a>
          )}
        </div>
      </div>
    </motion.article>
  );
}

/** Mini progress indicator - tells the user "this section ends here" */
function ScrollProgress({
  progress,
  count,
}: {
  progress: ReturnType<typeof useScroll>["scrollYProgress"];
  count: number;
}) {
  return (
    <div className="hidden items-center gap-3 font-mono text-[10px] uppercase tracking-[0.22em] text-foreground/50 md:flex">
      <span>01</span>
      <div className="relative h-[2px] w-32 overflow-hidden rounded-full bg-white/10">
        <motion.div
          style={{ scaleX: progress, transformOrigin: "0% 50%" }}
          className="absolute inset-0 bg-mint"
        />
      </div>
      <span>{String(count + 1).padStart(2, "0")}</span>
    </div>
  );
}
