import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Sparkles, Code, Zap } from "lucide-react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Services", href: "#services" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

// Animated underline component
const Underline = () => (
  <motion.div
    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-primary to-primary/50"
    layoutId="underline"
    initial={{ scaleX: 0 }}
    animate={{ scaleX: 1 }}
    exit={{ scaleX: 0 }}
    transition={{ duration: 0.3 }}
  />
);

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);

      // Update active link based on scroll position
      const sections = navLinks.map((link) => link.href.substring(1));
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveLink(`#${section}`);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Smooth scroll with offset
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.substring(1);
    const element = document.getElementById(targetId);
    if (element) {
      const offset = 80;
      const elementPosition = element.offsetTop - offset;
      window.scrollTo({
        top: elementPosition,
        behavior: "smooth",
      });
    }
    setMobileOpen(false);
  };

  // Logo animation variants
  const logoVariants = {
    hover: {
      scale: 1.05,
      transition: { stiffness: 300 },
    },
    tap: { scale: 0.95 },
  };

  // Letter animation for logo
  const letterVariants = {
    hover: (i: number) => ({
      y: [0, -5, 0],
      transition: { delay: i * 0.05, duration: 0.3 },
    }),
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, stiffness: 100, damping: 20 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? "glass-card py-3 shadow-lg border-b border-primary/10" : "bg-transparent py-5"
        }`}
      >
        {/* Animated gradient border on scroll */}
        {scrolled && (
          <motion.div
            className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent"
            initial={{ scaleX: 0, opacity: 0 }}
            animate={{ scaleX: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
          />
        )}

        <div className="mx-auto flex max-w-7xl items-center justify-between px-6">
          {/* Animated Logo */}
          <motion.a
            href="#"
            className="relative group"
            variants={logoVariants}
            whileHover="hover"
            whileTap="tap"
            onClick={(e) => handleClick(e, "#")}
          >
            <motion.div className="flex items-center gap-2">
              <motion.span
                className="font-display text-2xl font-bold text-gradient"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                {"Bright.".split("").map((letter, i) => (
                  <motion.span
                    key={i}
                    custom={i}
                    variants={letterVariants}
                    whileHover="hover"
                    className="inline-block"
                  >
                    {letter === " " ? "\u00A0" : letter}
                  </motion.span>
                ))}
              </motion.span>
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="hidden sm:block"
              >
                <Sparkles size={16} className="text-primary/60" />
              </motion.div>
            </motion.div>

            {/* Animated dot under logo */}
            <motion.div
              className="absolute -bottom-1 left-0 w-2 h-0.5 bg-primary rounded-full"
              animate={{
                width: ["0%", "100%", "0%"],
                left: ["0%", "0%", "100%"],
              }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            />
          </motion.a>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-8 md:flex">
            {navLinks.map((l, i) => (
              <motion.a
                key={l.href}
                href={l.href}
                className="relative text-sm text-muted-foreground transition-colors hover:text-foreground group"
                onClick={(e) => handleClick(e, l.href)}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05, duration: 0.4 }}
                whileHover={{ y: -2 }}
              >
                {l.label}
                {activeLink === l.href && <Underline />}
                <motion.div
                  className="absolute inset-0 bg-primary/5 rounded-md -z-10 opacity-0 group-hover:opacity-100"
                  initial={{ scale: 0.8 }}
                  whileHover={{ scale: 1 }}
                  transition={{ duration: 0.2 }}
                />
              </motion.a>
            ))}

            {/* CTA Button with animations */}
            <motion.a
              href="#contact"
              className="btn-primary-glow rounded-lg px-5 py-2 text-sm font-medium relative overflow-hidden group"
              onClick={(e) => handleClick(e, "#contact")}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.4 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <motion.span
                className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/30 to-primary/0"
                animate={{ x: ["-100%", "100%"] }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              />
              Get a Quote
              <motion.span
                className="inline-block ml-1"
                animate={{ x: [0, 3, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                →
              </motion.span>
            </motion.a>
          </div>

          {/* Mobile toggle button */}
          <motion.button
            className="text-foreground md:hidden relative"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            {mobileOpen ? (
              <motion.div
                initial={{ rotate: -90 }}
                animate={{ rotate: 0 }}
                transition={{ duration: 0.3 }}
              >
                <X size={24} />
              </motion.div>
            ) : (
              <motion.div
                initial={{ rotate: 90 }}
                animate={{ rotate: 0 }}
                transition={{ duration: 0.3 }}
              >
                <Menu size={24} />
              </motion.div>
            )}
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0, y: -20 }}
              animate={{ opacity: 1, height: "auto", y: 0 }}
              exit={{ opacity: 0, height: 0, y: -20 }}
              transition={{ duration: 0.4, stiffness: 200 }}
              className="glass-card mt-2 overflow-hidden md:hidden mx-4 rounded-xl"
            >
              <div className="flex flex-col gap-2 px-4 py-6">
                {navLinks.map((l, i) => (
                  <motion.a
                    key={l.href}
                    href={l.href}
                    onClick={(e) => handleClick(e, l.href)}
                    className="relative text-sm text-muted-foreground transition-colors hover:text-foreground px-4 py-2 rounded-lg hover:bg-primary/10"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05, duration: 0.3 }}
                    whileHover={{ x: 5 }}
                  >
                    <span className="flex items-center gap-3">
                      <motion.span
                        className="w-1 h-1 rounded-full bg-primary"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: i * 0.05 + 0.2 }}
                      />
                      {l.label}
                    </span>
                    {activeLink === l.href && (
                      <motion.div
                        className="absolute left-0 top-0 bottom-0 w-0.5 bg-primary rounded-full"
                        layoutId="mobileActive"
                        initial={{ height: 0 }}
                        animate={{ height: "100%" }}
                        transition={{ duration: 0.3 }}
                      />
                    )}
                  </motion.a>
                ))}
                <motion.a
                  href="#contact"
                  onClick={(e) => handleClick(e, "#contact")}
                  className="btn-primary-glow rounded-lg px-5 py-2.5 text-center text-sm font-medium mt-2 relative overflow-hidden group"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.3 }}
                  whileHover={{ scale: 1.02 }}
                >
                  <motion.span
                    className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/30 to-primary/0"
                    animate={{ x: ["-100%", "100%"] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                  />
                  Get a Quote
                </motion.a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Scroll progress indicator */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-primary to-primary/50 z-50"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        style={{
          scaleX: useScrollProgress(),
          transformOrigin: "0%",
        }}
      />
    </>
  );
}

// Custom hook for scroll progress
function useScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const updateProgress = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = scrollTop / docHeight;
      setProgress(scrollPercent);
    };

    window.addEventListener("scroll", updateProgress);
    return () => window.removeEventListener("scroll", updateProgress);
  }, []);

  return progress;
}
