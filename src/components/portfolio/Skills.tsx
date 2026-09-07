import { Reveal } from "./Reveal";

const groups = [
  {
    title: "Backend Development",
    items: [
      { name: "Python", level: 95 },
      { name: "Django", level: 88 },
      { name: "Django REST Framework", level: 88 },
      { name: "REST APIs", level: 88 },
      { name: "API Development", level: 85 },
      { name: "Backend Development", level: 90 },
    ],
  },
  {
    title: "Databases",
    items: [
      { name: "SQL", level: 88 },
      { name: "PostgreSQL", level: 85 },
      { name: "MySQL", level: 78 },
      { name: "Database Design", level: 82 },
      { name: "Query Optimization", level: 80 },
    ],
  },
  {
    title: "AI & Data",
    items: [
      { name: "AI/LLM Integration", level: 82 },
      { name: "Prompt Engineering", level: 78 },
      { name: "NLP", level: 75 },
      { name: "Pandas", level: 82 },
      { name: "NumPy", level: 80 },
      { name: "Scikit-learn", level: 78 },
    ],
  },
  {
    title: "Analytics & BI",
    items: [
      { name: "Power BI", level: 80 },
      { name: "DAX", level: 76 },
      { name: "Power Query", level: 78 },
      { name: "Data Modeling", level: 78 },
    ],
  },
  {
    title: "Tools & Deployment",
    items: [
      { name: "Git", level: 90 },
      { name: "GitHub", level: 90 },
      { name: "Docker", level: 75 },
      { name: "Render", level: 72 },
      { name: "Git Bash", level: 82 },
    ],
  },
];

export function Skills() {
  return (
    <section id="skills" className="relative py-24">
      <div className="absolute inset-0 -z-10 bg-cyber-grid opacity-20 [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_75%)]" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-primary">02 / skills</p>
          <h2 className="mt-3 text-4xl font-bold sm:text-5xl">
            Tech <span className="text-gradient">Arsenal</span>
          </h2>
          <p className="mt-3 max-w-2xl text-muted-foreground">
            A practical toolkit for building Python backends, integrating AI, working with data, and deploying reliable applications.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {groups.map((g, gi) => (
            <Reveal key={g.title} delay={gi * 100}>
              <div className="glass group h-full rounded-2xl p-6 transition-all hover:shadow-neon">
                <div className="flex items-center justify-between">
                  <h3 className="font-display text-xl font-bold">{g.title}</h3>
                  <span className="font-mono text-xs text-muted-foreground">{g.items.length} skills</span>
                </div>
                <ul className="mt-6 space-y-4">
                  {g.items.map((it) => (
                    <li key={it.name}>
                      <div className="mb-1.5 flex items-center justify-between text-sm">
                        <span className="text-foreground/90">{it.name}</span>
                        <span className="font-mono text-xs text-primary">{it.level}%</span>
                      </div>
                      <div className="h-1.5 overflow-hidden rounded-full bg-white/5">
                        <div
                          className="h-full rounded-full bg-gradient-primary shadow-neon"
                          style={{ width: `${it.level}%` }}
                        />
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
