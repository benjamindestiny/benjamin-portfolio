import { useState, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  Mail,
  MessageCircle,
  Send,
  Sparkles,
  Shield,
  Lock,
  CheckCircle,
  User,
  AtSign,
  FileText,
} from "lucide-react";
import emailjs from "@emailjs/browser";

// Animated background particles
function ContactParticles() {
  const particles = Array.from({ length: 50 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 4 + 1,
    duration: Math.random() * 15 + 8,
    delay: Math.random() * 5,
  }));

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
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
            x: [0, Math.random() * 40 - 20, 0],
            opacity: [0, 0.6, 0],
            scale: [1, 2, 1],
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

// Animated grid background
function AnimatedGrid() {
  return (
    <div className="absolute inset-0 pointer-events-none">
      <svg className="absolute inset-0 h-full w-full opacity-10">
        <defs>
          <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <motion.path
              d="M 40 0 L 0 0 0 40"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.5"
              className="text-primary"
              animate={{ opacity: [0.3, 1, 0.3] }}
              transition={{ duration: 3, repeat: Infinity }}
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>
    </div>
  );
}

// Floating shapes
function FloatingShapes() {
  const shapes = [
    { size: "w-32 h-32", top: "top-20", left: "left-10", delay: 0, duration: 8 },
    { size: "w-40 h-40", bottom: "bottom-20", right: "right-10", delay: 1, duration: 10 },
    { size: "w-56 h-56", top: "top-1/2", left: "left-1/2", delay: 2, duration: 6 },
    { size: "w-24 h-24", top: "top-1/3", right: "right-20", delay: 0.5, duration: 7 },
    { size: "w-36 h-36", bottom: "bottom-1/3", left: "left-20", delay: 1.5, duration: 9 },
    { size: "w-48 h-48", top: "top-3/4", right: "right-1/4", delay: 2.5, duration: 12 },
  ];

  return (
    <>
      {shapes.map((shape, i) => (
        <motion.div
          key={i}
          className={`absolute ${shape.size} rounded-full bg-primary/5 blur-2xl`}
          style={{
            ...(shape.top ? { top: shape.top } : {}),
            ...(shape.bottom ? { bottom: shape.bottom } : {}),
            ...(shape.left ? { left: shape.left } : {}),
            ...(shape.right ? { right: shape.right } : {}),
          }}
          animate={{
            scale: [1, 1.3, 1],
            x: [0, Math.random() * 40 - 20, 0],
            y: [0, Math.random() * 40 - 20, 0],
            opacity: [0.2, 0.6, 0.2],
          }}
          transition={{
            duration: shape.duration,
            repeat: Infinity,
            ease: "easeInOut",
            delay: shape.delay,
          }}
        />
      ))}
    </>
  );
}

export default function ContactSection() {
  const [form, setForm] = useState({ name: "", email: "", details: "" });
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState<{ type: "success" | "error" | null; message: string }>({
    type: null,
    message: "",
  });
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, 50]);

  const EMAILJS_SERVICE_ID = process.env.REACT_APP_EMAILJS_SERVICE_ID || "service_o6ok3r4";
  const EMAILJS_TEMPLATE_ID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID || "template_ylokxi8";
  const EMAILJS_PUBLIC_KEY = process.env.REACT_APP_EMAILJS_PUBLIC_KEY || "qAU1A9HbYpNOPBf4R";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setStatus({ type: null, message: "" });

    try {
      const response = await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        { name: form.name, email: form.email, details: form.details },
        EMAILJS_PUBLIC_KEY
      );
      if (response.status === 200) {
        setStatus({ type: "success", message: "Thanks for reaching out! I'll get back to you soon." });
        setForm({ name: "", email: "", details: "" });
      }
    } catch (error) {
      setStatus({ type: "error", message: "Something went wrong. Please try again or contact me directly." });
    } finally {
      setIsLoading(false);
      setTimeout(() => setStatus({ type: null, message: "" }), 5000);
    }
  };

  // Gentle input animation (only on page load, not while typing)
  const inputVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1, duration: 0.5 },
    }),
  };

  return (
    <section id="contact" className="section-padding relative overflow-hidden" ref={sectionRef}>
      <ContactParticles />
      <AnimatedGrid />
      <FloatingShapes />

      <div className="mx-auto max-w-4xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mb-14 text-center"
        >
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, type: "spring" as const, stiffness: 200 }}
            className="inline-block mb-4"
          >
            <div className="glass-card rounded-full px-4 py-2 inline-flex items-center gap-2">
              <motion.div animate={{ rotate: 360 }} transition={{ duration: 20, repeat: Infinity, ease: "linear" }}>
                <Sparkles size={14} className="text-primary" />
              </motion.div>
              <span className="text-xs font-medium">Let's Connect</span>
              <motion.div animate={{ rotate: -360 }} transition={{ duration: 20, repeat: Infinity, ease: "linear" }}>
                <Sparkles size={14} className="text-primary" />
              </motion.div>
            </div>
          </motion.div>

          <motion.p
            className="mb-2 text-sm font-medium tracking-widest uppercase text-primary"
            initial={{ opacity: 0, letterSpacing: "10px" }}
            whileInView={{ opacity: 1, letterSpacing: "2px" }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Get In Touch
          </motion.p>

          <motion.h2
            className="font-display text-3xl font-bold sm:text-4xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            Have a Project in Mind?{" "}
            <motion.span
              className="text-gradient inline-block"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring" as const, stiffness: 300 }}
            >
              Let's Build It Right.
            </motion.span>
          </motion.h2>
        </motion.div>

        <motion.div
          style={{ y }}
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6, type: "spring" as const, stiffness: 100 }}
        >
          <form onSubmit={handleSubmit} className="glass-card mx-auto max-w-xl rounded-2xl p-8 relative overflow-hidden">
            {/* Animated background pulse - subtle */}
            <motion.div
              className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 via-transparent to-primary/5"
              animate={{ opacity: [0.2, 0.4, 0.2] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            />

            {/* Name Field */}
            <div className="mb-5 relative z-10">
              <label className="mb-1.5 block text-sm font-medium flex items-center gap-2">
                <User size={14} className="text-primary" />
                <span>Name</span>
              </label>
              <motion.div custom={0} variants={inputVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                <input
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full rounded-lg bg-gray-800/50 border border-gray-700 px-4 py-3 text-white placeholder-gray-400 focus:border-primary focus:ring-2 focus:ring-primary/50 transition-all outline-none"
                  placeholder="Your name"
                />
              </motion.div>
            </div>

            {/* Email Field */}
            <div className="mb-5 relative z-10">
              <label className="mb-1.5 block text-sm font-medium flex items-center gap-2">
                <AtSign size={14} className="text-primary" />
                <span>Email</span>
              </label>
              <motion.div custom={1} variants={inputVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                <input
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full rounded-lg bg-gray-800/50 border border-gray-700 px-4 py-3 text-white placeholder-gray-400 focus:border-primary focus:ring-2 focus:ring-primary/50 transition-all outline-none"
                  placeholder="you@email.com"
                />
              </motion.div>
            </div>

            {/* Details Field - No moving animation */}
            <div className="mb-6 relative z-10">
              <label className="mb-1.5 block text-sm font-medium flex items-center gap-2">
                <FileText size={14} className="text-primary" />
                <span>Project Details</span>
              </label>
              <motion.div custom={2} variants={inputVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                <textarea
                  rows={5}
                  required
                  value={form.details}
                  onChange={(e) => setForm({ ...form, details: e.target.value })}
                  className="w-full rounded-lg bg-gray-800/50 border border-gray-700 px-4 py-3 text-white placeholder-gray-400 focus:border-primary focus:ring-2 focus:ring-primary/50 transition-all outline-none resize-none"
                  placeholder="Tell me about your project..."
                />
              </motion.div>
            </div>

            {/* Status Message */}
            {status.message && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className={`mb-4 rounded-lg p-3 text-sm flex items-center gap-2 ${status.type === "success" ? "bg-green-500/20 text-green-400 border border-green-500/30" : "bg-red-500/20 text-red-400 border border-red-500/30"}`}
              >
                {status.type === "success" ? <CheckCircle size={16} /> : <Shield size={16} />}
                {status.message}
              </motion.div>
            )}

            {/* Submit Button */}
            <motion.button
              type="submit"
              disabled={isLoading}
              className="btn-primary-glow flex w-full items-center justify-center gap-2 rounded-xl py-3 text-sm font-semibold relative overflow-hidden group"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <motion.span
                className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/30 to-primary/0"
                animate={{ x: ["-100%", "100%"] }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              />
              {isLoading ? (
                <motion.div animate={{ rotate: 360 }} transition={{ duration: 1, repeat: Infinity }}>
                  <Send size={16} />
                </motion.div>
              ) : (
                <>
                  <Send size={16} /> Get a Quote
                </>
              )}
            </motion.button>

            {/* Alternative contact methods */}
            <div className="mt-6 flex items-center justify-center gap-6 text-sm text-muted-foreground">
              <a href="mailto:benjamindestiny449@gmail.com" className="inline-flex items-center gap-1.5 hover:text-primary transition-colors">
                <Mail size={14} /> Benjamin Bright
              </a>
              <a href="https://wa.me/2347017153753" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 hover:text-primary transition-colors">
                <MessageCircle size={14} /> WhatsApp
              </a>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
}