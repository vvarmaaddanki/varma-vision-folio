import { Reveal } from "./Reveal";
import { ExternalLink, Github, Sparkles } from "lucide-react";

const projects = [
  {
    title: "Blinkit Sales Analysis",
    subtitle: "Power BI • Python • ML",
    description:
      "End-to-end sales analysis dashboard for Blinkit, powered by Python and LightGBM with SHAP explainability. Interactive Power BI dashboard surfaces category, outlet, and item-level insights for data-driven decisions.",
    tags: ["Python", "Machine Learning", "LightGBM", "SHAP", "Power BI"],
    featured: true,
  },
  {
    title: "E-Commerce Web App",
    subtitle: "Coming soon",
    description:
      "Full-stack shopping platform with cart, checkout, and admin panel. Built with React, Spring Boot, and MySQL.",
    tags: ["React", "Spring Boot", "MySQL"],
  },
  {
    title: "Task Management System",
    subtitle: "Coming soon",
    description:
      "Kanban-style productivity tool with authentication, real-time updates, and team collaboration.",
    tags: ["Node.js", "Express", "MongoDB"],
  },
  {
    title: "Portfolio Website",
    subtitle: "This site",
    description:
      "Cyberpunk-inspired personal portfolio built with React and Tailwind CSS — animations, glassmorphism, and neon accents.",
    tags: ["React", "Tailwind", "TypeScript"],
  },
];

export function Projects() {
  return (
    <section id="projects" className="relative py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-primary">03 / projects</p>
          <h2 className="mt-3 text-4xl font-bold sm:text-5xl">
            Featured <span className="text-gradient">Work</span>
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {projects.map((p, i) => (
            <Reveal key={p.title} delay={i * 100}>
              <article
                className={`glass group relative h-full overflow-hidden rounded-2xl p-6 transition-all duration-500 hover:-translate-y-2 hover:shadow-neon-strong ${
                  p.featured ? "md:col-span-2" : ""
                }`}
              >
                <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity group-hover:opacity-100">
                  <div className="absolute -left-16 -top-16 h-56 w-56 rounded-full bg-primary/20 blur-3xl" />
                  <div className="absolute -bottom-16 -right-16 h-56 w-56 rounded-full bg-accent/20 blur-3xl" />
                </div>

                <div className="relative flex items-start justify-between gap-4">
                  <div>
                    <div className="flex items-center gap-2">
                      {p.featured && <Sparkles size={14} className="text-primary" />}
                      <p className="font-mono text-xs uppercase tracking-wider text-primary">{p.subtitle}</p>
                    </div>
                    <h3 className="mt-2 font-display text-2xl font-bold">{p.title}</h3>
                  </div>
                  <div className="flex gap-2">
                    <a
                      href="#"
                      className="glass grid h-9 w-9 place-items-center rounded-full text-muted-foreground transition-all hover:text-primary hover:shadow-neon"
                      aria-label="GitHub"
                    >
                      <Github size={16} />
                    </a>
                    <a
                      href="#"
                      className="glass grid h-9 w-9 place-items-center rounded-full text-muted-foreground transition-all hover:text-primary hover:shadow-neon"
                      aria-label="Live"
                    >
                      <ExternalLink size={16} />
                    </a>
                  </div>
                </div>

                <p className="relative mt-4 leading-relaxed text-muted-foreground">{p.description}</p>

                <div className="relative mt-5 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span key={t} className="rounded-md border border-primary/30 bg-primary/10 px-2.5 py-1 font-mono text-[11px] text-foreground/90">
                      {t}
                    </span>
                  ))}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
