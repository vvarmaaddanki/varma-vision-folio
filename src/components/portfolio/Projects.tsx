import { Reveal } from "./Reveal";
import { ExternalLink, Github, Sparkles } from "lucide-react";

const projects = [
  {
    number: "01",
    title: "AI Database Copilot",
    subtitle: "AI / Backend / Generative AI",
    description:
      "An AI-powered database assistant that enables users to interact with structured data using natural language. The application combines AI/LLM integration with backend APIs and database connectivity to help users generate database queries, execute them, and understand the resulting data through an interactive interface.",
    highlights: [
      "Natural-language database interaction",
      "AI-assisted SQL/query generation",
      "Database connectivity and query execution",
      "AI-powered responses",
      "Backend API architecture",
      "Input validation and error handling",
      "Production deployment",
    ],
    tags: ["Python", "Django", "REST API", "SQL", "AI/LLM", "Prompt Engineering", "Database Integration", "Git", "GitHub", "Render"],
    liveDemo: "https://ai-database-copilot-t1ss.onrender.com",
    featured: true,
  },
  {
    number: "02",
    title: "E-Commerce Funnel & Cohort Analysis",
    subtitle: "Data Analytics / Advanced SQL",
    description:
      "An advanced SQL analytics project focused on understanding e-commerce customer behavior, conversion funnels, retention, churn, and revenue performance. The project transforms transactional data into actionable business insights using complex SQL queries, cohort analysis, customer segmentation, and KPI analysis.",
    highlights: [
      "Revenue and Average Order Value analysis",
      "Customer cohort and retention analysis",
      "Churn and conversion funnel analysis",
      "Customer behavior analysis",
      "Business KPI reporting",
    ],
    tags: ["SQL Server", "T-SQL", "CTEs", "Subqueries", "Window Functions", "Cohort Analysis", "Data Analysis", "Relational Databases"],
    github: "https://github.com/vvarmaaddanki/E-commerce-funnel-and-cohort-analysis",
  },
  {
    number: "03",
    title: "Sentiment Analysis on Social Media",
    subtitle: "Machine Learning / NLP",
    description:
      "An end-to-end Natural Language Processing project that analyzes social media content to identify sentiment and uncover patterns in audience behavior. The pipeline includes text preprocessing, sentiment classification, visualization, and interpretation of sentiment trends.",
    highlights: [
      "Social media data analysis",
      "Text cleaning, tokenization, and stopword removal",
      "Sentiment classification",
      "Positive / Negative / Neutral analysis",
      "Sentiment trend visualization",
      "NLP-based insights",
    ],
    tags: ["Python", "Pandas", "NumPy", "NLTK", "spaCy", "Scikit-learn", "Tweepy", "Plotly", "Matplotlib", "Jupyter Notebook"],
    github: "https://github.com/vvarmaaddanki/Sentiment-analysis-on-social-media",
  },
  {
    number: "04",
    title: "Blinkit Sales Analytics Dashboard",
    subtitle: "Business Intelligence / Power BI",
    description:
      "An interactive Power BI analytics solution developed to analyze retail sales performance across products, outlets, outlet sizes, and locations. The project includes data cleaning, transformation, data modeling, DAX-based KPI development, and interactive dashboard design to support data-driven business decisions.",
    highlights: [
      "Total Sales, Average Sales, Average Rating, and Item Count KPIs",
      "Product category and outlet performance analysis",
      "Outlet size and location-based analysis",
      "Power Query transformations",
      "DAX measures and interactive dashboard filtering",
    ],
    tags: ["Power BI", "DAX", "Power Query", "Data Cleaning", "Data Modeling", "Business Intelligence", "Data Visualization"],
  },
];

export function Projects() {
  return (
    <section id="projects" className="relative py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-primary">03 / projects</p>
          <h2 className="mt-3 text-4xl font-bold sm:text-5xl">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="mt-3 max-w-3xl text-muted-foreground">
            Selected projects demonstrating my experience in backend development, AI applications, databases, machine learning, and business intelligence.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {projects.map((p, i) => (
            <Reveal key={p.title} delay={i * 100}>
              <article
                className={`glass group relative h-full overflow-hidden rounded-2xl p-6 transition-all duration-500 hover:-translate-y-2 hover:shadow-neon-strong ${
                  p.featured ? "md:col-span-2" : ""
                }`}
              >
                <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity group-hover:opacity-100">
                  <div className="absolute -left-16 -top-16 h-56 w-56 rounded-full bg-primary/20 blur-3xl" />
                  <div className="absolute -bottom-16 -right-16 h-56 w-56 rounded-full bg-accent/20 blur-3xl" />
                </div>

                <div className="relative flex items-start justify-between gap-4">
                  <div className="min-w-0">
                    <div className="flex items-center gap-2">
                      {p.featured && <Sparkles size={14} className="shrink-0 text-primary" />}
                      <span className="font-mono text-xs text-primary">PROJECT {p.number}</span>
                    </div>
                    <h3 className="mt-2 font-display text-2xl font-bold">{p.title}</h3>
                    <p className="mt-1 font-mono text-xs uppercase tracking-wider text-muted-foreground">{p.subtitle}</p>
                  </div>
                  <div className="flex shrink-0 gap-2">
                    {p.github && (
                      <a
                        href={p.github}
                        target="_blank"
                        rel="noreferrer"
                        className="glass grid h-9 w-9 place-items-center rounded-full text-muted-foreground transition-all hover:text-primary hover:shadow-neon"
                        aria-label={`View ${p.title} on GitHub`}
                        title="View on GitHub"
                      >
                        <Github size={16} />
                      </a>
                    )}
                    {p.liveDemo && (
                      <a
                        href={p.liveDemo}
                        target="_blank"
                        rel="noreferrer"
                        className="glass grid h-9 w-9 place-items-center rounded-full text-muted-foreground transition-all hover:text-primary hover:shadow-neon"
                        aria-label={`View live demo of ${p.title}`}
                        title="View Live Demo"
                      >
                        <ExternalLink size={16} />
                      </a>
                    )}
                  </div>
                </div>

                <p className="relative mt-4 leading-relaxed text-muted-foreground">{p.description}</p>

                <div className="relative mt-5 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span key={t} className="rounded-md border border-primary/30 bg-primary/10 px-2.5 py-1 font-mono text-[11px] text-foreground/90">
                      {t}
                    </span>
                  ))}
                </div>

                <details className="relative mt-5 border-t border-primary/10 pt-4">
                  <summary className="cursor-pointer font-mono text-xs uppercase tracking-widest text-primary">View Details</summary>
                  <ul className="mt-4 grid gap-2 text-sm text-muted-foreground sm:grid-cols-2">
                    {p.highlights.map((highlight) => (
                      <li key={highlight} className="flex gap-2">
                        <span className="text-primary">→</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-5 flex flex-wrap gap-3">
                    {p.liveDemo && (
                      <a href={p.liveDemo} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-gradient-primary px-4 py-2 text-xs font-semibold text-primary-foreground shadow-neon transition-all hover:shadow-neon-strong">
                        View Live Demo <ExternalLink size={14} />
                      </a>
                    )}
                    {p.github && (
                      <a href={p.github} target="_blank" rel="noreferrer" className="glass inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-semibold text-foreground transition-all hover:text-primary hover:shadow-neon">
                        View on GitHub <Github size={14} />
                      </a>
                    )}
                  </div>
                </details>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}