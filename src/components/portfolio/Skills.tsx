import { Reveal } from "./Reveal";

const groups = [
  {
    title: "Python Backend",
    items: [
      { name: "Python", level: 95 },
      { name: "Django", level: 88 },
      { name: "Django REST Framework", level: 88 },
      { name: "Flask", level: 80 },
      { name: "FastAPI", level: 70 },
      { name: "Celery", level: 75 },
    ],
  },
  {
    title: "AI / LLM Stack",
    items: [
      { name: "LangChain", level: 80 },
      { name: "OpenAI API", level: 82 },
      { name: "NLP", level: 75 },
      { name: "Scikit-learn", level: 78 },
      { name: "Prompt Engineering", level: 72 },
    ],
  },
  {
    title: "Database & Data",
    items: [
      { name: "PostgreSQL", level: 85 },
      { name: "SQL Server", level: 78 },
      { name: "SQL", level: 88 },
      { name: "Pandas", level: 82 },
      { name: "Power BI", level: 80 },
    ],
  },
  {
    title: "DevOps & Tools",
    items: [
      { name: "Docker", level: 75 },
      { name: "Git & GitHub", level: 90 },
      { name: "REST APIs", level: 88 },
      { name: "Postman", level: 85 },
      { name: "Linux", level: 70 },
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
            A blend of frontend, backend, database, and tooling — the stack I use to ship modern applications end-to-end.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
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
