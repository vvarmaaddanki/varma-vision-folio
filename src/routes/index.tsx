import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/portfolio/Navbar";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Skills } from "@/components/portfolio/Skills";
import { Projects } from "@/components/portfolio/Projects";
import { Education } from "@/components/portfolio/Education";
import { Goals } from "@/components/portfolio/Goals";
import { Contact } from "@/components/portfolio/Contact";
import { Footer } from "@/components/portfolio/Footer";
import { Toaster } from "@/components/ui/sonner";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Venkatesh Varma Addanki | Backend Developer | Python & Django" },
      {
        name: "description",
        content:
          "Venkatesh Varma Addanki — Backend Developer specializing in Python, Django, REST APIs, SQL, AI-powered applications, databases, and data-driven solutions.",
      },
      { property: "og:title", content: "Venkatesh Varma Addanki | Backend Developer" },
      { property: "og:description", content: "Backend Developer specializing in Python, Django, REST APIs, SQL, AI applications, and database-driven solutions." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Orbitron:wght@500;700;900&family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500;700&display=swap",
      },
    ],
  }),
});

function Index() {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Goals />
        <Contact />
      </main>
      <Footer />
      <Toaster theme="dark" />
    </div>
  );
}
