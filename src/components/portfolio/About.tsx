import { Reveal } from "./Reveal";
import { GraduationCap, Zap, Users, Code2 } from "lucide-react";

const stats = [
  { icon: Zap, label: "EXPERIENCE", value: "Entry Level" },
  { icon: GraduationCap, label: "B.Tech CSE", value: "AI & ML" },
  { icon: Code2, label: "Graduation", value: "2025" },
  { icon: Users, label: "Traits", value: "Team Player" },
];

export function About() {
  return (
    <section id="about" className="relative py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-primary">01 / about</p>
          <h2 className="mt-3 text-4xl font-bold sm:text-5xl">
            About <span className="text-gradient">Me</span>
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-10 lg:grid-cols-[1.3fr_1fr]">
          <Reveal>
            <div className="glass rounded-2xl p-8">
              <p className="text-lg leading-relaxed text-foreground/90">
                Hi, I'm <span className="text-gradient font-semibold">Venkatesh Varma Addanki</span>, a 2025 B.Tech graduate seeking Python Backend Engineer or Software Engineer roles where I can build production APIs, integrate AI/LLM systems, and ship real features alongside a driven engineering team. I bring strong fundamentals, real project experience, and the drive to grow fast.
              </p>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                <span className="text-foreground/90 font-medium">What I do:</span>
              </p>
              <ul className="mt-2 space-y-2 leading-relaxed text-muted-foreground">
                <li className="flex gap-2"><span className="text-primary">→</span> Build and ship production-grade web applications (React + Node.js + PostgreSQL)</li>
                <li className="flex gap-2"><span className="text-primary">→</span> Design data pipelines and analytics dashboards (Python + Power BI + SQL)</li>
                <li className="flex gap-2"><span className="text-primary">→</span> Translate business problems into working technical solutions</li>
              </ul>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                Currently: Actively building projects at the intersection of AI and full-stack development. Open to Full Stack Engineer, Data Analyst, Business Analyst, Power BI Developer, Python Developer, and Forward-Deployed Engineer roles at companies using AI to solve real problems.
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {["Python", "Django", "REST APIs", "PostgreSQL", "LangChain", "OpenAI", "Docker", "Problem Solver"].map((t) => (
                  <span key={t} className="rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs text-foreground/90">
                    {t}
                  </span>
                ))}
              </div>
              <div className="mt-6 flex flex-wrap gap-3 text-sm">
                <a href="https://github.com/vvarmaaddanki" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-xl border border-primary/20 bg-primary/10 px-4 py-2 text-primary transition-all hover:shadow-neon hover:-translate-y-0.5">📌 GitHub</a>
                <a href="https://vvarmaaddanki.github.io/varma-vision-folio" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-xl border border-primary/20 bg-primary/10 px-4 py-2 text-primary transition-all hover:shadow-neon hover:-translate-y-0.5">🖇️ Portfolio</a>
                <a href="mailto:varmakbm9@gmail.com" className="inline-flex items-center gap-2 rounded-xl border border-primary/20 bg-primary/10 px-4 py-2 text-primary transition-all hover:shadow-neon hover:-translate-y-0.5">📩 Email</a>
              </div>
            </div>
          </Reveal>

          <Reveal delay={150}>
            <div className="grid grid-cols-2 gap-4">
              {stats.map(({ icon: Icon, label, value }) => (
                <div key={label} className="glass group relative overflow-hidden rounded-2xl p-5 transition-all hover:-translate-y-1 hover:shadow-neon">
                  <div className="absolute -right-6 -top-6 h-20 w-20 rounded-full bg-primary/20 blur-2xl transition-all group-hover:bg-primary/40" />
                  <Icon className="text-primary" size={22} />
                  <p className="mt-4 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">{label}</p>
                  <p className="mt-1 font-display text-lg font-bold text-foreground">{value}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
