import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, X, Sparkles, Eye } from "lucide-react";

// Custom GitHub Icon
const GithubIcon = ({ size = 14 }: { size?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.108-.775.418-1.305.762-1.604-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
  </svg>
);

const projects = [
  { title: "FGBN", desc: "A real time Bank Application where users can withdraw, deposit money", tech: ["React", "Firebase", "Git"], color: "oklch(0.65 0.25 265 / 20%)", liveLink: "#", githubLink: "#" },
  { title: "Vella", desc: "A real-time school AI Agent that guides students and instructors", tech: ["React", "TypeScript", "Node.js"], color: "oklch(0.65 0.25 265 / 20%)", liveLink: "#", githubLink: "#" },
  { title: "Portfolio Website", desc: "A sleek personal portfolio with smooth animations", tech: ["React", "Tailwind", "Framer"], color: "oklch(0.65 0.25 265 / 20%)", liveLink: "#", githubLink: "#" },
  { title: "Quiz App", desc: "Interactive quiz platform with real-time scoring", tech: ["React", "Vercel", "Git"], color: "oklch(0.6 0.28 300 / 20%)", liveLink: "#", githubLink: "#" },
  { title: "My Romance", desc: "A quiz based couples app", tech: ["React", "MongoDB", "Express"], color: "oklch(0.6 0.28 300 / 20%)", liveLink: "#", githubLink: "#" },
  { title: "E-commerce Cart App", desc: "Full-featured shopping cart with payments", tech: ["React", "Node.js", "Stripe"], color: "oklch(0.7 0.2 180 / 20%)", liveLink: "#", githubLink: "#" },
];

export default function ProjectsSection() {
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <section id="projects" className="section-padding">
      <div className="mx-auto max-w-6xl">
        <div className="mb-14 text-center">
          <div className="inline-block mb-4">
            <div className="glass-card rounded-full px-4 py-2 inline-flex items-center gap-2">
              <Sparkles size={14} className="text-primary" />
              <span className="text-xs font-medium">My Work</span>
              <Sparkles size={14} className="text-primary" />
            </div>
          </div>
          <p className="mb-2 text-sm font-medium tracking-widest uppercase text-primary">Portfolio</p>
          <h2 className="font-display text-3xl font-bold sm:text-4xl">Featured <span className="text-gradient">Projects</span></h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
          {projects.map((p, i) => (
            <div
              key={p.title}
              onClick={() => setSelected(i)}
              className="glass-card group cursor-pointer overflow-hidden rounded-2xl transition-all duration-300 hover:glow-border"
            >
              <div className="flex h-48 items-center justify-center text-6xl font-bold font-display text-foreground/20" style={{ background: p.color }}>
                {p.title.charAt(0)}
              </div>
              <div className="p-6">
                <h3 className="font-display text-lg font-semibold group-hover:text-primary transition-colors">{p.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground line-clamp-2">{p.desc}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {p.tech.map((t) => (
                    <span key={t} className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selected !== null && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-background/90 px-4 backdrop-blur-md" onClick={() => setSelected(null)}>
            <div className="glass-card relative w-full max-w-lg rounded-2xl p-8" onClick={(e) => e.stopPropagation()}>
              <button onClick={() => setSelected(null)} className="absolute top-4 right-4 text-muted-foreground hover:text-foreground">
                <X size={20} />
              </button>
              <h3 className="font-display text-2xl font-bold text-gradient">{projects[selected].title}</h3>
              <p className="mt-3 text-muted-foreground">{projects[selected].desc}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {projects[selected].tech.map((t) => (
                  <span key={t} className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                    {t}
                  </span>
                ))}
              </div>
              <div className="mt-6 flex gap-4">
                <a href={projects[selected].liveLink} className="btn-primary-glow inline-flex items-center gap-2 rounded-lg px-5 py-2.5 text-sm font-medium">
                  <ExternalLink size={14} /> Live Demo
                </a>
                <a href={projects[selected].githubLink} className="btn-outline-glow inline-flex items-center gap-2 rounded-lg px-5 py-2.5 text-sm font-medium">
                  <GithubIcon size={14} /> GitHub
                </a>
              </div>
            </div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
