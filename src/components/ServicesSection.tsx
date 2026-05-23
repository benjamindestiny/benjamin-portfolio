import { motion } from "framer-motion";
import { Brush } from "lucide-react";
import { Code2, Paintbrush, Share2, Sparkles, ArrowRight } from "lucide-react";

const services = [
  {
    icon: Code2,
    title: "Website Development",
    desc: "Custom, responsive websites built with modern frameworks for blazing performance.",
    features: ["React/Next.js", "TypeScript", "Tailwind CSS", "Performance Optimized"],
    gradient: "from-blue-500/20 to-cyan-500/20",
  },
  {
    icon: Paintbrush,
    title: "UI/UX Design",
    desc: "User-centered designs that look beautiful and convert visitors into customers.",
    features: ["Brush", "Wireframes", "Prototypes", "User Testing"],
    gradient: "from-purple-500/20 to-pink-500/20",
  },
  {
    icon: Share2,
    title: "Social Media Management",
    desc: "End-to-end social strategy, content creation, and community growth.",
    features: ["Content Strategy", "Analytics", "Community Growth", "Engagement"],
    gradient: "from-orange-500/20 to-red-500/20",
  },
];

// Smooth scroll to contact section
const scrollToContact = (e: React.MouseEvent<HTMLAnchorElement>) => {
  e.preventDefault();
  const contactSection = document.getElementById("contact");
  if (contactSection) {
    const offset = 80;
    const elementPosition = contactSection.offsetTop - offset;
    window.scrollTo({
      top: elementPosition,
      behavior: "smooth",
    });
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 50, rotateX: -15 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.6,
      
      stiffness: 100,
      damping: 15,
    },
  }),
  hover: {
    y: -12,
    scale: 1.02,
    transition: { duration: 0.3, stiffness: 300 },
  },
};

const iconVariants = {
  hover: {
    rotate: 360,
    scale: 1.1,
    transition: { duration: 0.5, stiffness: 200 },
  },
};

export default function ServicesSection() {
  return (
    <section id="services" className="section-padding relative overflow-hidden">
      {/* Animated background orbs */}
      <motion.div
        className="absolute top-1/4 right-0 w-96 h-96 rounded-full bg-primary/5 blur-3xl"
        animate={{
          x: [0, -50, 0],
          y: [0, 30, 0],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-1/4 left-0 w-80 h-80 rounded-full bg-primary/5 blur-3xl"
        animate={{
          x: [0, 50, 0],
          y: [0, -30, 0],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      />

      <div className="mx-auto max-w-6xl relative z-10">
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
            transition={{ duration: 0.4, stiffness: 200 }}
            className="inline-block mb-4"
          >
            <div className="glass-card rounded-full px-4 py-2 inline-flex items-center gap-2">
              <Sparkles size={14} className="text-primary" />
              <span className="text-xs font-medium">What I Offer</span>
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
            Premium Services
          </motion.p>

          <motion.h2
            className="font-display text-3xl font-bold sm:text-4xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            My <span className="text-gradient">Services</span>
          </motion.h2>

          <motion.p
            className="mt-4 text-muted-foreground max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            Comprehensive digital solutions tailored to your business needs
          </motion.p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-3">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={cardVariants}
              whileHover="hover"
              className="glass-card flex flex-col rounded-2xl p-8 transition-all duration-300 hover:glow-border relative group overflow-hidden"
            >
              {/* Animated gradient background on hover */}
              <motion.div
                className={`absolute inset-0 bg-gradient-to-br ${s.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                initial={{ scale: 0 }}
                whileHover={{ scale: 1 }}
                transition={{ duration: 0.5 }}
              />

              {/* Floating particles on hover */}
              <motion.div
                className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-primary/10 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                animate={{
                  scale: [1, 1.2, 1],
                }}
                transition={{ duration: 3, repeat: Infinity }}
              />

              <motion.div
                className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary relative z-10 group-hover:bg-primary/20 transition-colors"
                variants={iconVariants}
                whileHover="hover"
              >
                <s.icon size={28} />
              </motion.div>

              <motion.h3
                className="font-display text-xl font-semibold relative z-10 group-hover:text-primary transition-colors"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.15 + 0.2 }}
              >
                {s.title}
              </motion.h3>

              <motion.p
                className="mt-2 flex-1 text-sm text-muted-foreground relative z-10"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: i * 0.15 + 0.3 }}
              >
                {s.desc}
              </motion.p>

              {/* Features list */}
              <motion.div
                className="mt-4 flex flex-wrap gap-2"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: i * 0.15 + 0.4 }}
              >
                {s.features.map((feature, idx) => (
                  <motion.span
                    key={feature}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: i * 0.15 + 0.5 + idx * 0.05 }}
                    className="rounded-full bg-primary/5 px-2 py-0.5 text-[10px] font-medium text-primary/80"
                  >
                    {feature}
                  </motion.span>
                ))}
              </motion.div>

              <motion.a
                href="#contact"
                onClick={scrollToContact}
                className="btn-outline-glow mt-6 rounded-lg px-5 py-2.5 text-center text-sm font-medium relative z-10 inline-flex items-center justify-center gap-2 group"
                whileHover={{ scale: 1.02, gap: "8px" }}
                whileTap={{ scale: 0.98 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.15 + 0.6 }}
              >
                Request a Quote
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </motion.a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
