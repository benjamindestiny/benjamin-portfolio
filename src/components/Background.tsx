import { motion } from "framer-motion";

export default function GlobalBackground() {
  // More particles for a richer background
  const particles = Array.from({ length: 60 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 4 + 1,
    duration: Math.random() * 20 + 10,
    delay: Math.random() * 10,
    direction: Math.random() > 0.5 ? 1 : -1,
  }));

  // More floating orbs with varied colors
  const orbs = [
    {
      size: 500,
      x: "70%",
      y: "20%",
      color: "oklch(0.65 0.25 265 / 12%)",
      dur: 20,
      delay: 0,
    },
    {
      size: 350,
      x: "20%",
      y: "60%",
      color: "oklch(0.6 0.28 300 / 10%)",
      dur: 25,
      delay: 2,
    },
    {
      size: 200,
      x: "80%",
      y: "70%",
      color: "oklch(0.65 0.25 265 / 8%)",
      dur: 18,
      delay: 4,
    },
    {
      size: 150,
      x: "10%",
      y: "20%",
      color: "oklch(0.7 0.2 180 / 7%)",
      dur: 22,
      delay: 1,
    },
    {
      size: 280,
      x: "50%",
      y: "80%",
      color: "oklch(0.6 0.28 300 / 7%)",
      dur: 28,
      delay: 3,
    },
    {
      size: 120,
      x: "85%",
      y: "40%",
      color: "oklch(0.65 0.25 265 / 9%)",
      dur: 15,
      delay: 5,
    },
    {
      size: 180,
      x: "15%",
      y: "85%",
      color: "oklch(0.6 0.28 300 / 8%)",
      dur: 30,
      delay: 6,
    },
    {
      size: 250,
      x: "45%",
      y: "45%",
      color: "oklch(0.7 0.2 180 / 6%)",
      dur: 24,
      delay: 2.5,
    },
    {
      size: 100,
      x: "90%",
      y: "15%",
      color: "oklch(0.65 0.25 265 / 11%)",
      dur: 12,
      delay: 7,
    },
    {
      size: 300,
      x: "5%",
      y: "50%",
      color: "oklch(0.6 0.28 300 / 9%)",
      dur: 26,
      delay: 4.5,
    },
  ];

  // Glowing dots scattered across the screen
  const glowDots = Array.from({ length: 80 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 6 + 2,
    delay: Math.random() * 15,
    duration: Math.random() * 8 + 4,
  }));

  // Floating lines for tech feel
  const lines = [
    { x1: "10%", y1: "20%", x2: "30%", y2: "40%", delay: 0 },
    { x1: "70%", y1: "60%", x2: "90%", y2: "80%", delay: 2 },
    { x1: "40%", y1: "10%", x2: "60%", y2: "30%", delay: 4 },
    { x1: "20%", y1: "80%", x2: "40%", y2: "90%", delay: 6 },
    { x1: "80%", y1: "20%", x2: "95%", y2: "35%", delay: 8 },
  ];

  return (
    <>
      {/* Animated grid background - more dynamic */}
      <div className="fixed inset-0 -z-10 opacity-40">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px]" />
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-primary/5"
          animate={{
            opacity: [0.3, 0.6, 0.3],
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      {/* Floating particles - animated */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        {particles.map((p) => (
          <motion.div
            key={p.id}
            className="absolute rounded-full bg-gradient-to-r from-primary/30 to-primary/10"
            style={{
              width: p.size,
              height: p.size,
              left: `${p.x}%`,
              top: `${p.y}%`,
            }}
            animate={{
              y: [0, -80, 0],
              x: [0, (Math.random() * 60 - 30) * p.direction, 0],
              opacity: [0, 0.7, 0],
              scale: [1, 2.5, 1],
              rotate: [0, 360],
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

      {/* Floating orbs with smooth morphing */}
      {orbs.map((orb, i) => (
        <motion.div
          key={i}
          className="fixed rounded-full blur-3xl pointer-events-none"
          style={{
            width: orb.size,
            height: orb.size,
            left: orb.x,
            top: orb.y,
            background: orb.color,
          }}
          animate={{
            x: [0, 40, -30, 25, -15, 0],
            y: [0, -35, 25, -20, 15, 0],
            scale: [1, 1.15, 0.9, 1.08, 0.95, 1],
            rotate: [0, 5, -3, 7, -4, 0],
          }}
          transition={{
            duration: orb.dur,
            repeat: Infinity,
            ease: "easeInOut",
            delay: orb.delay,
          }}
        />
      ))}

      {/* Glowing dots with pulse effect */}
      {glowDots.map((dot) => (
        <motion.div
          key={dot.id}
          className="fixed rounded-full bg-primary/40 pointer-events-none"
          style={{
            width: dot.size,
            height: dot.size,
            left: `${dot.x}%`,
            top: `${dot.y}%`,
          }}
          animate={{
            scale: [1, 2, 1],
            opacity: [0.2, 0.6, 0.2],
          }}
          transition={{
            duration: dot.duration,
            repeat: Infinity,
            delay: dot.delay,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Animated tech lines */}
      <svg className="fixed inset-0 -z-10 pointer-events-none opacity-20">
        {lines.map((line, i) => (
          <motion.path
            key={i}
            d={`M ${line.x1} ${line.y1} L ${line.x2} ${line.y2}`}
            stroke="currentColor"
            strokeWidth="1"
            className="text-primary"
            fill="none"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{
              duration: 2,
              delay: line.delay,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        ))}
      </svg>

      {/* Scanning light effect */}
      <motion.div
        className="fixed inset-0 -z-5 pointer-events-none bg-gradient-to-r from-transparent via-primary/5 to-transparent"
        animate={{
          x: ["-100%", "100%"],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* Rotating ring effect */}
      <motion.div
        className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full border border-primary/10 pointer-events-none -z-5"
        animate={{
          rotate: 360,
          scale: [1, 1.1, 1],
        }}
        transition={{
          rotate: { duration: 60, repeat: Infinity, ease: "linear" },
          scale: { duration: 10, repeat: Infinity, ease: "easeInOut" },
        }}
      />

      {/* Mouse trail glow effect - subtle */}
      <motion.div
        className="fixed inset-0 -z-5 pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
        transition={{ duration: 2 }}
      >
        <div className="absolute top-1/2 left-1/2 w-96 h-96 rounded-full bg-primary/5 blur-3xl animate-pulse" />
      </motion.div>
    </>
  );
}
