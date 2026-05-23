import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect } from "react";
import { ArrowRight, MessageSquare, Sparkles, Code, Palette, Cpu, Zap, Globe, Database, Layers, Rocket, Star } from "lucide-react";

function FloatingOrbs() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {[
        { size: 500, x: "70%", y: "20%", color: "oklch(0.65 0.25 265 / 15%)", dur: 20, delay: 0 },
        { size: 350, x: "20%", y: "60%", color: "oklch(0.6 0.28 300 / 12%)", dur: 25, delay: 2 },
        { size: 200, x: "80%", y: "70%", color: "oklch(0.65 0.25 265 / 10%)", dur: 18, delay: 4 },
        { size: 150, x: "10%", y: "20%", color: "oklch(0.7 0.2 180 / 8%)", dur: 22, delay: 1 },
        { size: 280, x: "50%", y: "80%", color: "oklch(0.6 0.28 300 / 8%)", dur: 28, delay: 3 },
        { size: 120, x: "85%", y: "40%", color: "oklch(0.65 0.25 265 / 12%)", dur: 15, delay: 5 },
        { size: 180, x: "15%", y: "85%", color: "oklch(0.6 0.28 300 / 10%)", dur: 30, delay: 6 },
      ].map((orb, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full blur-3xl"
          style={{
            width: orb.size,
            height: orb.size,
            left: orb.x,
            top: orb.y,
            background: orb.color,
          }}
          animate={{
            x: [0, 40, -30, 20, 0],
            y: [0, -35, 25, -15, 0],
            scale: [1, 1.15, 0.9, 1.05, 1],
            rotate: [0, 5, -3, 2, 0],
          }}
          transition={{
            duration: orb.dur,
            repeat: Infinity,
            ease: "easeInOut",
            delay: orb.delay,
          }}
        />
      ))}
    </div>
  );
}

// Mouse follower effect
function MouseFollower() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 300 };
  const x = useSpring(mouseX, springConfig);
  const y = useSpring(mouseY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <motion.div
      className="pointer-events-none fixed z-50 hidden lg:block"
      style={{
        x: useTransform(x, (value: number) => value - 20),
        y: useTransform(y, (value: number) => value - 20),
      }}
    >
      <div className="h-40 w-40 rounded-full bg-gradient-to-r from-primary/5 to-primary/10 blur-2xl" />
    </motion.div>
  );
}

export default function HeroSection() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
      <MouseFollower />
      <FloatingOrbs />

      {/* Animated grid background */}
      <motion.div
        className="absolute inset-0 opacity-30"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
        transition={{ duration: 1.5 }}
      >
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px]" />
      </motion.div>

      {/* Animated floating icons - more of them */}
      <motion.div
        className="absolute left-5 lg:left-10 top-1/4 hidden sm:block"
        initial={{ opacity: 0, x: -50, y: -20 }}
        animate={{ opacity: 1, x: 0, y: [0, -10, 0] }}
        transition={{
          delay: 0.8,
          duration: 0.8,
          y: { repeat: Infinity, duration: 3, ease: "easeInOut" },
        }}
      >
        <div className="glass-card rounded-2xl p-2 lg:p-3">
          <Code size={24} className="text-primary" />
          <motion.div
            className="absolute inset-0 rounded-2xl bg-primary/20"
            animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0, 0.3] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>

      <motion.div
        className="absolute right-5 lg:right-10 top-1/3 hidden sm:block"
        initial={{ opacity: 0, x: 50, y: 20 }}
        animate={{ opacity: 1, x: 0, y: [0, 10, 0] }}
        transition={{
          delay: 1,
          duration: 0.8,
          y: { repeat: Infinity, duration: 4, ease: "easeInOut" },
        }}
      >
        <div className="glass-card rounded-2xl p-2 lg:p-3">
          <Palette size={24} className="text-primary" />
        </div>
      </motion.div>

      <motion.div
        className="absolute bottom-32 left-10 lg:left-1/4 hidden sm:block"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.5, duration: 0.5 }}
      >
        <motion.div
          className="glass-card rounded-2xl p-2"
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        >
          <Cpu size={18} className="text-primary/60" />
        </motion.div>
      </motion.div>

      <motion.div
        className="absolute bottom-40 right-10 lg:right-1/4 hidden sm:block"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.8, duration: 0.5 }}
      >
        <motion.div
          className="glass-card rounded-2xl p-2"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.5, 1, 0.5],
          }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <Zap size={18} className="text-primary/60" />
        </motion.div>
      </motion.div>

      {/* Additional floating icons */}
      <motion.div
        className="absolute top-1/3 right-32 hidden xl:block"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: [0, -15, 0] }}
        transition={{ delay: 2, duration: 0.5, y: { repeat: Infinity, duration: 5, ease: "easeInOut" } }}
      >
        <div className="glass-card rounded-xl p-1.5">
          <Globe size={16} className="text-primary/50" />
        </div>
      </motion.div>

      <motion.div
        className="absolute bottom-1/4 left-32 hidden xl:block"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: [0, -10, 0] }}
        transition={{ delay: 2.2, duration: 0.5, x: { repeat: Infinity, duration: 6, ease: "easeInOut" } }}
      >
        <div className="glass-card rounded-xl p-1.5">
          <Database size={16} className="text-primary/50" />
        </div>
      </motion.div>

      <motion.div
        className="absolute top-1/4 right-1/4 hidden xl:block"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 2.5, duration: 0.5 }}
      >
        <motion.div
          className="glass-card rounded-xl p-1.5"
          animate={{ rotate: 360 }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        >
          <Star size={14} className="text-yellow-500/50" />
        </motion.div>
      </motion.div>

      <div className="relative z-10 mx-auto max-w-5xl px-4 sm:px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.p
            className="mb-4 text-sm font-medium tracking-widest uppercase text-primary px-4"
            initial={{ opacity: 0, letterSpacing: "10px" }}
            animate={{ opacity: 1, letterSpacing: "2px" }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            Web Developer · Graphic Designer
          </motion.p>

          <motion.h1
            className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-tight tracking-tight px-2"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            Hi, I&apos;m{" "}
            <motion.span
              className="text-gradient inline-block"
              initial={{ backgroundPosition: "0% 50%" }}
              animate={{ backgroundPosition: "100% 50%" }}
              transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
              style={{ backgroundSize: "200% auto" }}
            >
              Benjamin D. Bright
            </motion.span>
          </motion.h1>

          <motion.p
            className="mx-auto mt-4 sm:mt-6 max-w-2xl text-base sm:text-lg text-muted-foreground px-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            I build high-converting digital experiences that captivate users and drive results.
          </motion.p>

          {/* Animated buttons */}
          <motion.div
            className="mt-8 sm:mt-10 flex flex-col items-center gap-3 sm:flex-row sm:justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            <motion.a
              href="#projects"
              className="btn-primary-glow inline-flex items-center gap-2 rounded-xl px-6 sm:px-8 py-3 sm:py-3.5 text-sm font-semibold relative overflow-hidden group"
              whileHover={{ scale: 1.05, gap: "12px" }}
              whileTap={{ scale: 0.98 }}
            >
              <motion.span
                className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/30 to-primary/0"
                animate={{ x: ["-100%", "100%"] }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              />
              View Projects{" "}
              <motion.div
                animate={{ x: [0, 5, 0] }}
                transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
              >
                <ArrowRight size={16} />
              </motion.div>
            </motion.a>
            <motion.a
              href="#contact"
              className="btn-outline-glow inline-flex items-center gap-2 rounded-xl px-6 sm:px-8 py-3 sm:py-3.5 text-sm font-semibold relative overflow-hidden"
              whileHover={{ scale: 1.05, gap: "12px" }}
              whileTap={{ scale: 0.98 }}
            >
              <MessageSquare size={16} /> Get a Quote
            </motion.a>
          </motion.div>

          {/* Tech stack indicator */}
          <motion.div
            className="mt-12 sm:mt-16 flex flex-wrap justify-center gap-2 sm:gap-3 opacity-60 px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.6 }}
            transition={{ delay: 1, duration: 0.6 }}
          >
            {["React", "TypeScript", "Tailwind", "Next.js", "Node.js"].map((tech, i) => (
              <motion.span
                key={tech}
                className="text-xs text-muted-foreground"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2 + i * 0.1 }}
                whileHover={{ color: "var(--primary)", y: -2 }}
              >
                {tech}
                {i < 4 && <span className="mx-1">•</span>}
              </motion.span>
            ))}
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            className="absolute -bottom-16 left-1/2 -translate-x-1/2 cursor-pointer"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4, duration: 0.6 }}
            onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
          >
            <div className="flex flex-col items-center gap-2">
              <span className="text-xs text-muted-foreground">Scroll</span>
              <motion.div
                className="flex h-10 w-6 items-start justify-center rounded-full border-2 border-foreground/20"
                animate={{ y: [0, 8, 0] }}
                transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
              >
                <motion.div
                  className="mt-2 h-2 w-1 rounded-full bg-foreground/40"
                  animate={{ scaleY: [1, 1.5, 1] }}
                  transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                />
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}