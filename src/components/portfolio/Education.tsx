import { Reveal } from "./Reveal";
import { GraduationCap, School, Target } from "lucide-react";

const items = [
  {
    icon: GraduationCap,
    period: "Graduated 2025",
    title: "B.Tech, Computer Science Engineering",
    org: "Specialization: Artificial Intelligence & Machine Learning",
    detail: "Strong foundations in DSA, OOP, databases, backend engineering, and applied AI/ML.",
  },
  {
    icon: School,
    period: "Prior",
    title: "Higher Secondary Education",
    org: "Mathematics, Physics & Computer Science",
    detail: "Consistent academic performance with a focus on logical reasoning and computer fundamentals.",
  },
  {
    icon: Target,
    period: "Ongoing",
    title: "Self-Directed Learning",
    org: "Python, Django, REST APIs, AI Integration",
    detail: "Continuous learning through backend projects, data applications, and hands-on software development practice.",
  },
];

export function Education() {
  return (
    <section id="education" className="relative py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-primary">04 / education</p>
          <h2 className="mt-3 text-4xl font-bold sm:text-5xl">
            My <span className="text-gradient">Journey</span>
          </h2>
        </Reveal>

        <div className="relative mt-14">
          <div className="absolute left-4 top-0 h-full w-px bg-gradient-to-b from-primary/60 via-primary/20 to-transparent md:left-1/2" />
          <div className="space-y-10">
            {items.map((it, i) => {
              const Icon = it.icon;
              const isRight = i % 2 === 1;
              return (
                <Reveal key={it.title} delay={i * 120}>
                  <div className={`relative flex md:items-center ${isRight ? "md:flex-row-reverse" : ""}`}>
                    <div className="absolute left-4 grid h-8 w-8 -translate-x-1/2 place-items-center rounded-full bg-gradient-primary shadow-neon md:left-1/2">
                      <Icon size={14} className="text-primary-foreground" />
                    </div>
                    <div className="ml-12 w-full md:ml-0 md:w-1/2 md:px-8">
                      <div className="glass rounded-2xl p-6 transition-all hover:shadow-neon">
                        <p className="font-mono text-xs uppercase tracking-widest text-primary">{it.period}</p>
                        <h3 className="mt-2 font-display text-xl font-bold">{it.title}</h3>
                        <p className="mt-1 text-sm text-foreground/80">{it.org}</p>
                        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{it.detail}</p>
                      </div>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
