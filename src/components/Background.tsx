import { motion } from "framer-motion";

export default function GlobalBackground() {
  return (
    <>
      {/* Animated grid background */}
      <div className="fixed inset-0 -z-10 opacity-30">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px]" />
      </div>

      {/* Floating orbs background */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        {[
          { size: 500, x: "70%", y: "20%", color: "oklch(0.65 0.25 265 / 15%)", dur: 20, delay: 0 },
          { size: 350, x: "20%", y: "60%", color: "oklch(0.6 0.28 300 / 12%)", dur: 25, delay: 2 },
          { size: 200, x: "80%", y: "70%", color: "oklch(0.65 0.25 265 / 10%)", dur: 18, delay: 4 },
          { size: 150, x: "10%", y: "20%", color: "oklch(0.7 0.2 180 / 8%)", dur: 22, delay: 1 },
          { size: 280, x: "50%", y: "80%", color: "oklch(0.6 0.28 300 / 8%)", dur: 28, delay: 3 },
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
              x: [0, 30, -20, 15, 0],
              y: [0, -25, 20, -10, 0],
              scale: [1, 1.1, 0.95, 1.05, 1],
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
    </>
  );
}