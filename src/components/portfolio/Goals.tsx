import { Reveal } from "./Reveal";
import { Rocket, Target, Sparkles } from "lucide-react";

export function Goals() {
  const cards = [
    { icon: Rocket, title: "Contribute", text: "Ship real, impactful software as part of a driven engineering team." },
    { icon: Target, title: "Learn", text: "Master modern full-stack, cloud, and system design at production scale." },
    { icon: Sparkles, title: "Grow", text: "Evolve into a well-rounded engineer who bridges code, product, and users." },
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
              Seeking opportunities as a <span className="text-gradient font-semibold">Full Stack Developer</span> where I can contribute, learn, and grow by building impactful software solutions. As a fresher, I bring curiosity, discipline, and a strong drive to turn ideas into real products.
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
