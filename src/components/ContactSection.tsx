import { useState, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  Mail,
  MessageCircle,
  Send,
  Sparkles,
  ArrowRight,
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
  const particles = Array.from({ length: 30 }, (_, i) => ({
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
            y: [0, -50, 0],
            x: [0, Math.random() * 30 - 15, 0],
            opacity: [0, 0.6, 0],
            scale: [1, 1.5, 1],
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
            <path
              d="M 40 0 L 0 0 0 40"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.5"
              className="text-primary"
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
  return (
    <>
      <motion.div
        className="absolute top-20 left-10 w-32 h-32 rounded-full bg-primary/5 blur-2xl"
        animate={{
          scale: [1, 1.2, 1],
          x: [0, 20, 0],
          y: [0, -20, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-40 h-40 rounded-full bg-primary/5 blur-2xl"
        animate={{
          scale: [1, 1.3, 1],
          x: [0, -20, 0],
          y: [0, 20, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      />
      <motion.div
        className="absolute top-1/2 left-1/2 w-56 h-56 rounded-full bg-primary/5 blur-3xl"
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
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
  const [focusedField, setFocusedField] = useState<string | null>(null);
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, 50]);

  // EmailJS configuration - Replace with your actual keys
  const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID || "service_o6ok3r4";
  const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "template_ylokxi8";
  const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "qAU1A9HbYpNOPBf4R";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setStatus({ type: null, message: "" });

    try {
      const templateParams = {
        name: form.name,
        email: form.email,
        details: form.details,
      };

      const response = await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams,
        EMAILJS_PUBLIC_KEY,
      );

      if (response.status === 200) {
        setStatus({
          type: "success",
          message: "Thanks for reaching out! I'll get back to you soon.",
        });
        setForm({ name: "", email: "", details: "" });
      }
    } catch (error: any) {
      console.error("EmailJS error:", error);
      let errorMessage = "Something went wrong. ";
      if (error?.status === 404) {
        errorMessage =
          "Email service configuration error. Please contact me directly via email or WhatsApp.";
      } else if (error?.status === 401) {
        errorMessage = "Invalid API key. Please check your EmailJS configuration.";
      } else {
        errorMessage += "Please try again or contact me directly via email/WhatsApp.";
      }
      setStatus({
        type: "error",
        message: errorMessage,
      });
    } finally {
      setIsLoading(false);
      setTimeout(() => setStatus({ type: null, message: "" }), 5000);
    }
  };

  // Input field variants - no crossing animations
  const inputVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1, duration: 0.5, type: "spring" as const, stiffness: 100 },
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
              <Sparkles size={14} className="text-primary" />
              <span className="text-xs font-medium">Let's Connect</span>
              <Sparkles size={14} className="text-primary" />
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
          <motion.form
            onSubmit={handleSubmit}
            className="glass-card mx-auto max-w-xl rounded-2xl p-8 relative overflow-hidden"
            whileHover={{ boxShadow: "0 0 30px rgba(139, 92, 246, 0.2)" }}
            transition={{ duration: 0.3 }}
          >
            {/* Animated background pulse instead of crossing line */}
            <motion.div
              className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 via-transparent to-primary/5"
              animate={{
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />

            {/* Name Field */}
            <div className="mb-5 relative z-10">
              <motion.label
                className="mb-1.5 block text-sm font-medium flex items-center gap-2"
                htmlFor="name"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                <User size={14} className="text-primary" />
                <span>Name</span>
                <motion.span
                  animate={{ opacity: [1, 0.5, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="text-xs text-primary"
                >
                  *
                </motion.span>
              </motion.label>
              <motion.div
                custom={0}
                variants={inputVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                animate={focusedField === "name" ? "focused" : ""}
                transition={{ duration: 0.2 }}
              >
                <input
                  id="name"
                  type="text"
                  required
                  value={form.name}
                  onFocus={() => setFocusedField("name")}
                  onBlur={() => setFocusedField(null)}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full rounded-lg border border-border bg-input px-4 py-2.5 text-sm text-foreground placeholder-muted-foreground outline-none transition-all focus:border-primary focus:ring-2 focus:ring-primary/20"
                  placeholder="Your name"
                />
              </motion.div>
            </div>

            {/* Email Field */}
            <div className="mb-5 relative z-10">
              <motion.label
                className="mb-1.5 block text-sm font-medium flex items-center gap-2"
                htmlFor="email"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
              >
                <AtSign size={14} className="text-primary" />
                <span>Email</span>
                <Lock size={12} className="text-muted-foreground" />
              </motion.label>
              <motion.div
                custom={1}
                variants={inputVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                animate={focusedField === "email" ? "focused" : ""}
                transition={{ duration: 0.2 }}
              >
                <input
                  id="email"
                  type="email"
                  required
                  value={form.email}
                  onFocus={() => setFocusedField("email")}
                  onBlur={() => setFocusedField(null)}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full rounded-lg border border-border bg-input px-4 py-2.5 text-sm text-foreground placeholder-muted-foreground outline-none transition-all focus:border-primary focus:ring-2 focus:ring-primary/20"
                  placeholder="you@email.com"
                />
              </motion.div>
            </div>

            {/* Details Field - No crossing animation */}
            <div className="mb-6 relative z-10">
              <motion.label
                className="mb-1.5 block text-sm font-medium flex items-center gap-2"
                htmlFor="details"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.7 }}
              >
                <FileText size={14} className="text-primary" />
                <span>Project Details</span>
              </motion.label>
              <motion.div
                custom={2}
                variants={inputVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <textarea
                  id="details"
                  rows={5}
                  required
                  value={form.details}
                  onChange={(e) => setForm({ ...form, details: e.target.value })}
                  className="w-full rounded-lg border border-border bg-input px-4 py-2.5 text-sm text-foreground placeholder-muted-foreground outline-none transition-all focus:border-primary focus:ring-2 focus:ring-primary/20 resize-none"
                  placeholder="Tell me about your project..."
                />
              </motion.div>
            </div>

            {/* Status Message with animation */}
            {status.message && (
              <motion.div
                initial={{ opacity: 0, y: -20, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -20 }}
                className={`mb-4 rounded-lg p-3 text-sm flex items-center gap-2 ${
                  status.type === "success"
                    ? "bg-green-500/10 text-green-500 border border-green-500/20"
                    : "bg-red-500/10 text-red-500 border border-red-500/20"
                }`}
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
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8, duration: 0.5 }}
            >
              <motion.span
                className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/30 to-primary/0"
                animate={{ x: ["-100%", "100%"] }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              />
              {isLoading ? (
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                >
                  <Send size={16} />
                </motion.div>
              ) : (
                <>
                  <Send size={16} /> Get a Quote
                  <motion.span
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <ArrowRight size={14} />
                  </motion.span>
                </>
              )}
            </motion.button>

            {/* Alternative contact methods */}
            <motion.div
              className="mt-6 flex items-center justify-center gap-6 text-sm text-muted-foreground"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.9, duration: 0.5 }}
            >
              <motion.a
                href="mailto:benjamindestiny449@gmail.com"
                className="inline-flex items-center gap-1.5 transition-colors hover:text-foreground group"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Mail size={14} className="group-hover:text-primary transition-colors" />
                <span>Benjamin Bright</span>
              </motion.a>
              <motion.a
                href="https://wa.me/2347017153753"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 transition-colors hover:text-foreground group"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <MessageCircle size={14} className="group-hover:text-primary transition-colors" />
                <span>WhatsApp</span>
              </motion.a>
            </motion.div>

            {/* Security badge with animated shield */}
            <motion.div
              className="mt-6 text-center"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 1, duration: 0.5 }}
            >
              <motion.div
                className="inline-flex items-center gap-1 text-[10px] text-muted-foreground"
                whileHover={{ scale: 1.05 }}
              >
                <motion.div
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <Shield size={10} />
                </motion.div>
                <span>Your information is secure and will not be shared</span>
              </motion.div>
            </motion.div>
          </motion.form>
        </motion.div>
      </div>
    </section>
  );
}
