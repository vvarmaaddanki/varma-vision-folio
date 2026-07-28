import { useState } from "react";
import { Reveal } from "./Reveal";
import { Mail, Github, Linkedin, Send } from "lucide-react";
import { toast } from "sonner";

export function Contact() {
  const [sending, setSending] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSending(true);
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") || "");
    const email = String(data.get("email") || "");
    const message = String(data.get("message") || "");
    const body = encodeURIComponent(`Hi Venkatesh,\n\n${message}\n\n— ${name} (${email})`);
    window.location.href = `mailto:varmakbm9@gmail.com?subject=${encodeURIComponent("Portfolio Contact from " + name)}&body=${body}`;
    setTimeout(() => {
      setSending(false);
      toast.success("Opening your email client…");
      form.reset();
    }, 500);
  };

  return (
    <section id="contact" className="relative py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-primary">06 / contact</p>
          <h2 className="mt-3 text-4xl font-bold sm:text-5xl">
            Let's <span className="text-gradient">Connect</span>
          </h2>
          <p className="mt-3 max-w-2xl text-muted-foreground">
            Have a role, project, or idea in mind? Drop a message — I'll respond within 24 hours.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-8 lg:grid-cols-[1fr_1.2fr]">
          <Reveal>
            <div className="glass h-full rounded-2xl p-8">
              <h3 className="font-display text-xl font-bold">Reach me directly</h3>
              <p className="mt-2 text-sm text-muted-foreground">Prefer a quick ping? Use any of these.</p>
              <div className="mt-6 space-y-3">
                <a href="mailto:varmakbm9@gmail.com" className="glass group flex items-center gap-3 rounded-xl p-4 transition-all hover:shadow-neon">
                  <span className="grid h-10 w-10 place-items-center rounded-lg bg-primary/15 text-primary"><Mail size={18} /></span>
                  <span>
                    <span className="block text-xs uppercase tracking-widest text-muted-foreground">Email</span>
                    <span className="block text-sm text-foreground">varmakbm9@gmail.com</span>
                  </span>
                </a>
                <a href="https://www.linkedin.com/in/vvarmaaddanki/" target="_blank" rel="noreferrer" className="glass group flex items-center gap-3 rounded-xl p-4 transition-all hover:shadow-neon">
                  <span className="grid h-10 w-10 place-items-center rounded-lg bg-primary/15 text-primary"><Linkedin size={18} /></span>
                  <span>
                    <span className="block text-xs uppercase tracking-widest text-muted-foreground">LinkedIn</span>
                    <span className="block text-sm text-foreground">/in/vvarmaaddanki</span>
                  </span>
                </a>
                <a href="https://github.com/vvarmaaddanki" target="_blank" rel="noreferrer" className="glass group flex items-center gap-3 rounded-xl p-4 transition-all hover:shadow-neon">
                  <span className="grid h-10 w-10 place-items-center rounded-lg bg-primary/15 text-primary"><Github size={18} /></span>
                  <span>
                    <span className="block text-xs uppercase tracking-widest text-muted-foreground">GitHub</span>
                    <span className="block text-sm text-foreground">/vvarmaaddanki</span>
                  </span>
                </a>
              </div>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <form onSubmit={onSubmit} className="glass neon-border rounded-2xl p-8">
              <div className="grid gap-5 sm:grid-cols-2">
                <Field label="Name" name="name" placeholder="Your name" required />
                <Field label="Email" name="email" type="email" placeholder="you@email.com" required />
              </div>
              <div className="mt-5">
                <Field label="Subject" name="subject" placeholder="Opportunity / Project" />
              </div>
              <div className="mt-5">
                <label className="mb-2 block font-mono text-xs uppercase tracking-widest text-muted-foreground">Message</label>
                <textarea
                  name="message"
                  required
                  rows={5}
                  placeholder="Tell me a bit about it…"
                  className="w-full resize-none rounded-xl border border-primary/20 bg-background/50 px-4 py-3 text-sm text-foreground outline-none transition-all placeholder:text-muted-foreground/60 focus:border-primary/60 focus:shadow-neon"
                />
              </div>
              <button
                type="submit"
                disabled={sending}
                className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-neon transition-all hover:shadow-neon-strong hover:-translate-y-0.5 disabled:opacity-60"
              >
                <Send size={16} /> {sending ? "Sending…" : "Send Message"}
              </button>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Field({ label, ...props }: { label: string } & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <label className="block">
      <span className="mb-2 block font-mono text-xs uppercase tracking-widest text-muted-foreground">{label}</span>
      <input
        {...props}
        className="w-full rounded-xl border border-primary/20 bg-background/50 px-4 py-3 text-sm text-foreground outline-none transition-all placeholder:text-muted-foreground/60 focus:border-primary/60 focus:shadow-neon"
      />
    </label>
  );
}
