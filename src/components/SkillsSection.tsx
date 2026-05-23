import { motion } from "framer-motion";
import {
  Code2,
  Figma,
  Globe,
  Layers,
  Palette,
  Smartphone,
  TrendingUp,
  Zap,
  Database,
  Server,
  Cloud,
  Shield,
  GitBranch,
  Terminal,
  Layout,
  Brain,
  Sparkles,
  BarChart,
  Mail,
  PenTool,
  Video,
  Camera,
  Music,
  BookOpen,
  Users,
  Rocket,
  Award,
} from "lucide-react";

const skills = [
  // Frontend & Design
  {
    icon: Code2,
    title: "Frontend Dev",
    desc: "React, TypeScript, Tailwind CSS, Next.js",
    category: "development",
  },
  {
    icon: Layout,
    title: "Responsive Design",
    desc: "Mobile-first, cross-browser, accessible layouts",
    category: "design",
  },
  {
    icon: Palette,
    title: "Graphic Design",
    desc: "Logos, brand kits, social media assets",
    category: "design",
  },
  {
    icon: Figma,
    title: "UI/UX Design",
    desc: "Wireframes, prototypes, user flows, testing",
    category: "design",
  },

  // Backend & Database
  {
    icon: Server,
    title: "Backend Dev",
    desc: "Node.js, Express, Python, REST APIs",
    category: "development",
  },
  {
    icon: Database,
    title: "Databases",
    desc: "MongoDB, PostgreSQL, Firebase, Prisma",
    category: "development",
  },
  {
    icon: Cloud,
    title: "Cloud Services",
    desc: "AWS, Vercel, Netlify, Railway",
    category: "development",
  },
  {
    icon: Shield,
    title: "Security",
    desc: "Authentication, data protection, HTTPS",
    category: "development",
  },

  // Tools & Workflow
  {
    icon: GitBranch,
    title: "Version Control",
    desc: "Git, GitHub, GitLab, branching strategies",
    category: "tools",
  },
  {
    icon: Terminal,
    title: "CLI & Dev Tools",
    desc: "Vite, Webpack, npm, Docker basics",
    category: "tools",
  },
  {
    icon: Brain,
    title: "Problem Solving",
    desc: "Algorithms, debugging, optimization",
    category: "soft",
  },
  { icon: Rocket, title: "Agile Methods", desc: "Scrum, Kanban, Jira, Trello", category: "soft" },

  // Digital Marketing & Content
  {
    icon: TrendingUp,
    title: "SEO Strategy",
    desc: "On-page, technical SEO, analytics",
    category: "marketing",
  },
  {
    icon: BarChart,
    title: "Analytics",
    desc: "Google Analytics, heatmaps, A/B testing",
    category: "marketing",
  },
  {
    icon: Mail,
    title: "Email Marketing",
    desc: "Campaigns, automation, newsletters",
    category: "marketing",
  },
  {
    icon: Users,
    title: "Social Media",
    desc: "Content strategy, engagement, growth",
    category: "marketing",
  },

  // Content Creation
  {
    icon: PenTool,
    title: "Copywriting",
    desc: "Web copy, blogs, ad copy, storytelling",
    category: "content",
  },
  {
    icon: Video,
    title: "Video Editing",
    desc: "Premiere Pro, DaVinci, motion graphics",
    category: "content",
  },
  {
    icon: Camera,
    title: "Photography",
    desc: "Product, portrait, editing in Lightroom",
    category: "content",
  },
  {
    icon: Music,
    title: "Audio Production",
    desc: "Podcasts, voiceovers, sound design",
    category: "content",
  },

  // Performance & Optimization
  {
    icon: Zap,
    title: "Performance",
    desc: "Core Web Vitals, lazy loading, caching",
    category: "development",
  },
  {
    icon: Smartphone,
    title: "Mobile First",
    desc: "PWA, mobile optimization, touch events",
    category: "development",
  },
  {
    icon: Globe,
    title: "Internationalization",
    desc: "i18n, multi-language sites, RTL",
    category: "development",
  },
  {
    icon: Sparkles,
    title: "Animations",
    desc: "Framer Motion, CSS animations, GSAP",
    category: "development",
  },

  // Additional
  {
    icon: Layers,
    title: "Full Stack",
    desc: "End-to-end app development",
    category: "development",
  },
  {
    icon: Award,
    title: "Code Quality",
    desc: "Clean code, testing, documentation",
    category: "soft",
  },
  {
    icon: BookOpen,
    title: "Continuous Learning",
    desc: "Always learning new tech & trends",
    category: "soft",
  },
  {
    icon: Shield,
    title: "Best Practices",
    desc: "SOLID, DRY, accessibility (WCAG)",
    category: "development",
  },
];

// Or if you want a cleaner, curated list of top skills (recommended for portfolio):

const topSkills = [
  { icon: Code2, title: "Frontend Development", desc: "React, Next.js, TypeScript, Tailwind CSS" },
  { icon: Figma, title: "UI/UX Design", desc: "Wireframes, prototypes, user research, Figma" },
  { icon: Palette, title: "Graphic Design", desc: "Brand identity, logos, social media graphics" },
  { icon: Server, title: "Backend Development", desc: "Node.js, Express, MongoDB, PostgreSQL" },
  { icon: Cloud, title: "Cloud & Deployment", desc: "AWS, Vercel, Netlify, Railway" },
  { icon: Zap, title: "Performance Optimization", desc: "Core Web Vitals, speed, SEO" },
  { icon: GitBranch, title: "Version Control", desc: "Git, GitHub, collaborative workflows" },
  { icon: Brain, title: "Problem Solving", desc: "Algorithms, debugging, clean code" },
  { icon: TrendingUp, title: "Digital Strategy", desc: "SEO, analytics, conversion optimization" },
  { icon: Smartphone, title: "Mobile Development", desc: "React Native, responsive, PWA" },
  { icon: Shield, title: "Security Best Practices", desc: "Auth, data protection, HTTPS" },
  { icon: Rocket, title: "Project Management", desc: "Agile, Scrum, team leadership" },
];

export default function SkillsSection() {
  return (
    <section id="skills" className="section-padding">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mb-14 text-center"
        >
          <p className="mb-2 text-sm font-medium tracking-widest uppercase text-primary">
            What I Do
          </p>
          <h2 className="font-display text-3xl font-bold sm:text-4xl">
            Skills & <span className="text-gradient">Expertise</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Over 5+ years of experience in web development, design, and digital strategy
          </p>
        </motion.div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {topSkills.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, duration: 0.5 }}
              whileHover={{ y: -6, scale: 1.03 }}
              className="glass-card group cursor-default rounded-2xl p-6 transition-shadow hover:glow-border"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary/20">
                <s.icon size={24} />
              </div>
              <h3 className="font-display text-base font-semibold">{s.title}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
