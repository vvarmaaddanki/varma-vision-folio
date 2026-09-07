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
                I am a Backend Developer with hands-on experience building <span className="text-gradient font-semibold">Python and Django applications, REST APIs, database-driven systems, and AI-powered solutions</span>. I enjoy transforming real-world requirements into reliable, scalable, and user-friendly applications.
              </p>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                My project experience includes AI-powered database applications, advanced SQL analytics, NLP-based sentiment analysis, and interactive business intelligence dashboards. I continuously strengthen my skills in backend engineering, databases, APIs, AI integration, and modern software development practices.
              </p>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                📍 Bengaluru · Open to Work
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {["Python Backend Engineer", "Django & DRF Developer", "AI/LLM App Builder", "Problem Solver"].map((t) => (
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
