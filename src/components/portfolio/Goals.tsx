import { Reveal } from "./Reveal";
import { Rocket, Target, Sparkles } from "lucide-react";

export function Goals() {
  const cards = [
    { icon: Rocket, title: "Build", text: "Create scalable Python and Django applications that solve practical problems." },
    { icon: Target, title: "Engineer", text: "Design reliable REST APIs and database-driven systems for real users." },
    { icon: Sparkles, title: "Integrate", text: "Bring AI technologies into useful, production-minded software solutions." },
  ];
  return (
    <section id="goals" className="relative py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-primary">05 / goals</p>
          <h2 className="mt-3 text-4xl font-bold sm:text-5xl">
            Experience & <span className="text-gradient">Aspirations</span>
          </h2>
        </Reveal>

        <Reveal delay={100}>
          <div className="glass neon-border mt-10 rounded-2xl p-8">
            <p className="text-lg leading-relaxed text-foreground/90">
              <span className="text-gradient font-semibold">Career Goal</span>
              <br />
              To grow as a Backend Developer by building scalable Python and Django applications, designing reliable REST APIs, working with databases, and integrating AI technologies into practical software solutions.
            </p>
          </div>
        </Reveal>

        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {cards.map((c, i) => (
            <Reveal key={c.title} delay={i * 120}>
              <div className="glass group h-full rounded-2xl p-6 transition-all hover:-translate-y-1 hover:shadow-neon">
                <div className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-primary shadow-neon">
                  <c.icon size={18} className="text-primary-foreground" />
                </div>
                <h3 className="mt-4 font-display text-xl font-bold">{c.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{c.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
