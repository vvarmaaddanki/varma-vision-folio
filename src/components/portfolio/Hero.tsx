import { Particles } from "./Particles";
import { Typewriter } from "./Typewriter";
import { Download, Mail, ArrowRight, Sparkles } from "lucide-react";

export function Hero() {
  return (
    <section id="home" className="relative flex min-h-screen items-center overflow-hidden pt-24">
      {/* Background layers */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-cyber-grid opacity-40 animate-grid [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]" />
        <Particles />
        <div className="absolute -left-40 top-1/3 h-96 w-96 rounded-full bg-primary/25 blur-[120px]" />
        <div className="absolute -right-40 top-10 h-96 w-96 rounded-full bg-accent/25 blur-[120px]" />
      </div>

      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-12 px-4 sm:px-6 lg:grid-cols-[1.2fr_1fr] lg:px-8">
        <div className="animate-fade-up">
          <div className="glass inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs text-muted-foreground">
            <Sparkles size={14} className="text-primary" /> Available for opportunities
          </div>
          <h1 className="mt-6 font-display text-5xl font-black leading-[1.05] sm:text-6xl lg:text-7xl">
            ADDANKI <br />
            <span className="text-gradient">VENKATESH VARMA</span>
          </h1>
          <p className="mt-4 font-mono text-lg text-foreground/80 sm:text-xl">
            Python Backend Engineer
          </p>
          <p className="mt-1 text-sm text-muted-foreground italic">
            Building Future with Code
          </p>

          <div className="mt-6 flex min-h-[2.5rem] items-center gap-2 text-xl sm:text-2xl">
            <span className="text-muted-foreground">&gt;</span>
            <Typewriter
              words={[
                "Software Engineer",
                "Python Developer",
                "Problem Solver",
                "Data Analyst",
              ]}
            />
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="group relative inline-flex items-center gap-2 rounded-full bg-gradient-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-neon transition-all hover:shadow-neon-strong hover:-translate-y-0.5"
            >
              View Projects <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href="/resume.pdf"
              className="glass inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-foreground transition-all hover:border-primary/60 hover:shadow-neon"
            >
              <Download size={16} /> Download Resume
            </a>
            <a
              href="mailto:varmakbm9@gmail.com"
              className="inline-flex items-center gap-2 rounded-full border border-primary/40 px-6 py-3 text-sm font-semibold text-foreground transition-all hover:bg-primary/10 hover:shadow-neon"
            >
              <Mail size={16} /> Contact Me
            </a>
          </div>
        </div>

        {/* Terminal / code card */}
        <div className="animate-fade-up [animation-delay:200ms]">
          <div className="glass neon-border rounded-2xl p-1 animate-float">
            <div className="rounded-xl bg-background/60 p-5 font-mono text-sm">
              <div className="mb-3 flex items-center gap-2">
                <span className="h-3 w-3 rounded-full bg-red-500/80" />
                <span className="h-3 w-3 rounded-full bg-yellow-500/80" />
                <span className="h-3 w-3 rounded-full bg-green-500/80" />
                <span className="ml-3 text-xs text-muted-foreground">~/venkatesh.dev</span>
              </div>
              <pre className="whitespace-pre-wrap leading-relaxed text-foreground/90">
{`const analyst = {
  name: "Venkatesh Varma",
  role: "Data Analyst",
  stack: ["Excel","SQL","Python",
          "Power BI","Tableau","Stats"],
  focus: "Data-Driven Insights",
  learning: true,
};`}
              </pre>
              <div className="mt-3 text-xs text-primary">// ready to build the future →</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
