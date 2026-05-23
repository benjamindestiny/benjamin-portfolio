import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";
import {
  Code2,
  Palette,
  Share2,
  Globe,
  Smartphone,
  Figma,
  Zap,
  Database,
  Rocket,
  Cpu,
  CircuitBoard,
  Binary,
  Sparkles,
} from "lucide-react";
import benjamin from "../assets/benjamin.jpg";

const highlights = [
  { icon: Code2, label: "Web Development", desc: "React, TypeScript, Next.js, Tailwind CSS" },
  { icon: Palette, label: "Graphic Design", desc: "Brand identity, logos, visual systems" },
  { icon: Share2, label: "Social Media", desc: "Strategy, content creation & audience growth" },
  { icon: Globe, label: "Responsive Design", desc: "Mobile-first, cross-browser compatible" },
  { icon: Smartphone, label: "Mobile Development", desc: "React Native, PWA, mobile optimization" },
  { icon: Figma, label: "UI/UX Design", desc: "Wireframes, prototypes, user flows" },
  { icon: Zap, label: "Performance", desc: "Core Web Vitals, speed optimization" },
  { icon: Database, label: "Backend Basics", desc: "Node.js, MongoDB, REST APIs" },
  { icon: Rocket, label: "SEO & Analytics", desc: "Search optimization, Google Analytics" },
];

// Floating tech particles
function TechParticles() {
  const particles = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 3 + 1,
    duration: Math.random() * 10 + 5,
    delay: Math.random() * 5,
  }));

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full bg-primary/20"
          style={{
            width: p.size,
            height: p.size,
            left: `${p.x}%`,
            top: `${p.y}%`,
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, Math.random() * 20 - 10, 0],
            opacity: [0, 0.5, 0],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            delay: p.delay,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}

// Animated circuit lines
function CircuitLines() {
  return (
    <svg className="absolute inset-0 h-full w-full pointer-events-none opacity-20">
      <motion.path
        d="M 50 50 L 50 150 L 150 150 L 150 250"
        stroke="currentColor"
        fill="none"
        strokeWidth="1"
        className="text-primary"
        initial={{ pathLength: 0, opacity: 0 }}
        whileInView={{ pathLength: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, delay: 0.5 }}
      />
      <motion.path
        d="M 250 80 L 250 180 L 350 180 L 350 280"
        stroke="currentColor"
        fill="none"
        strokeWidth="1"
        className="text-primary"
        initial={{ pathLength: 0, opacity: 0 }}
        whileInView={{ pathLength: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, delay: 0.8 }}
      />
      <motion.circle
        cx="50"
        cy="50"
        r="4"
        fill="currentColor"
        className="text-primary"
        initial={{ scale: 0, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 1 }}
      />
      <motion.circle
        cx="150"
        cy="250"
        r="4"
        fill="currentColor"
        className="text-primary"
        initial={{ scale: 0, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 1.2 }}
      />
    </svg>
  );
}

export default function AboutSection() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const parallaxY = useTransform(scrollYProgress, [0, 1], [0, 100]);

  return (
    <section id="about" className="section-padding relative overflow-hidden" ref={sectionRef}>
      <TechParticles />
      <CircuitLines />

      <div className="mx-auto max-w-6xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="grid gap-12 md:grid-cols-2 md:items-center"
        >
          {/* Image with Tech overlay */}
          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0, scale: 0.8, rotateY: 90 }}
            whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
          >
            <div className="relative">
              {/* Glowing rings around image */}
              <motion.div
                className="absolute -inset-4 rounded-2xl bg-gradient-to-r from-primary/30 via-primary/20 to-transparent blur-xl"
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.3, 0.5, 0.3],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />

              <div className="glass-card glow-border relative h-80 w-80 overflow-hidden rounded-2xl">
                <img src={benjamin} alt="Profile" className="h-full w-full object-cover" />

                {/* Tech overlay on image */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />

                {/* Scanning line effect */}
                <motion.div
                  className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent"
                  animate={{
                    top: ["0%", "100%"],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />

                {/* Tech icons floating over image */}
                <motion.div
                  className="absolute top-4 left-4"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                >
                  <Cpu size={20} className="text-primary/60" />
                </motion.div>
                <motion.div
                  className="absolute bottom-4 right-4"
                  animate={{ rotate: -360 }}
                  transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                >
                  <CircuitBoard size={20} className="text-primary/60" />
                </motion.div>
                <motion.div
                  className="absolute top-4 right-4"
                  animate={{ opacity: [0, 1, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <Binary size={16} className="text-primary/60" />
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Text with animations */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <motion.div
              initial={{ opacity: 0, width: 0 }}
              whileInView={{ opacity: 1, width: "auto" }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-block"
            >
              <p className="mb-2 text-sm font-medium tracking-widest uppercase text-primary flex items-center gap-2">
                <Sparkles size={14} /> About Me <Sparkles size={14} />
              </p>
            </motion.div>

            <motion.h2
              className="font-display text-3xl font-bold sm:text-4xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              Crafting digital experiences that{" "}
              <motion.span
                className="text-gradient inline-block"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                stand out
              </motion.span>
            </motion.h2>

            <motion.p
              className="mt-4 leading-relaxed text-muted-foreground"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              I'm a creative developer and graphic designer passionate about turning ideas into
              elegant, high-performing digital products. With a blend of design sensibility and
              technical expertise, I deliver solutions that look stunning and convert effectively.
            </motion.p>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {highlights.map((h, i) => (
                <motion.div
                  key={h.label}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05, duration: 0.4, type: "spring", stiffness: 200 }}
                  whileHover={{ scale: 1.02, x: 5 }}
                  className="glass-card flex items-center gap-3 rounded-xl p-3 cursor-pointer group"
                >
                  <motion.div
                    className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    <h.icon size={16} />
                  </motion.div>
                  <div>
                    <p className="font-display text-xs font-semibold">{h.label}</p>
                    <p className="text-[11px] text-muted-foreground">{h.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
