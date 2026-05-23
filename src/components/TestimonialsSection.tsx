import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote, Star, Sparkles, ChevronLeft, ChevronRight, User, Heart } from "lucide-react";

const testimonials = [
  {
    name: "Ruth William",
    text: "Thank you for being trustworthy and delivering exactly what I needed. Your professionalism and dedication are truly commendable.",
    avatar: "SM",
  },
  {
    name: "Favor",
    role: "Founder of Lizfav Layouts",
    text: "Benjamin creative contribution was one of a kind , loved him for his innovative skills.",
    rating: 5,
    avatar: "SM",
  },
  {
    name: "David Micheal",
    role: "Marketing Director",
    text: "Working with Benjamin was a fantastic experience. Fast delivery, clean code, and incredible attention to detail.",
    rating: 5,
    avatar: "DC",
  },
  {
    name: "Engr Divine",
    role: "Software Engineer",
    text: "Destiny is someone who is determined, to make sure whatever project he is working on is successful. He's commited to his work and always delivers on time. I highly recommend him for any project you have in mind.",
    rating: 5,
    avatar: "ED",
  },
  // {
  //   name: "Ol",
  //   role: "Creative Agency Lead",
  //   text: "One of the most talented developers I've collaborated with. Nova brings both design sense and technical skill.",
  //   rating: 4,
  //   avatar: "LR",
  // },
];

// Animated background particles
function TestimonialParticles() {
  const particles = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 3 + 1,
    duration: Math.random() * 15 + 10,
    delay: Math.random() * 5,
  }));

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full bg-gradient-to-r from-primary/20 to-primary/5"
          style={{
            width: p.size,
            height: p.size,
            left: `${p.x}%`,
            top: `${p.y}%`,
          }}
          animate={{
            y: [0, -40, 0],
            x: [0, Math.random() * 20 - 10, 0],
            opacity: [0, 0.5, 0],
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

// Floating quote icons
function FloatingQuotes() {
  const quotes = Array.from({ length: 6 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    delay: Math.random() * 10,
  }));

  return (
    <div className="absolute inset-0 pointer-events-none">
      {quotes.map((q) => (
        <motion.div
          key={q.id}
          className="absolute text-primary/10"
          style={{ left: `${q.x}%`, top: `${q.y}%` }}
          animate={{
            y: [0, -30, 0],
            rotate: [0, 10, -10, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            delay: q.delay,
            ease: "easeInOut",
          }}
        >
          <Quote size={40} />
        </motion.div>
      ))}
    </div>
  );
}

// Star rating component
function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5 justify-center">
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: i * 0.1, duration: 0.3, type: "spring" }}
        >
          <Star
            size={14}
            className={`${
              i < rating ? "fill-yellow-500 text-yellow-500" : "text-muted-foreground/30"
            }`}
          />
        </motion.div>
      ))}
    </div>
  );
}

export default function TestimonialsSection() {
  const [active, setActive] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (!isPaused) {
      const timer = setInterval(() => {
        setDirection(1);
        setActive((p) => (p + 1) % testimonials.length);
      }, 5000);
      return () => clearInterval(timer);
    }
  }, [isPaused]);

  const handlePrev = () => {
    setDirection(-1);
    setActive((p) => (p - 1 + testimonials.length) % testimonials.length);
  };

  const handleNext = () => {
    setDirection(1);
    setActive((p) => (p + 1) % testimonials.length);
  };

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
      scale: 0.8,
      rotateY: direction > 0 ? 15 : -15,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      rotateY: 0,
      transition: {
        duration: 0.5,
        type: "spring",
        stiffness: 200,
        damping: 20,
      },
    },
    exit: (direction: number) => ({
      x: direction > 0 ? -300 : 300,
      opacity: 0,
      scale: 0.8,
      rotateY: direction > 0 ? -15 : 15,
      transition: {
        duration: 0.4,
      },
    }),
  };

  return (
    <section id="testimonials" className="section-padding relative overflow-hidden">
      <TestimonialParticles />
      <FloatingQuotes />

      {/* Animated background orbs */}
      <motion.div
        className="absolute top-20 right-20 w-64 h-64 rounded-full bg-primary/5 blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-20 left-20 w-80 h-80 rounded-full bg-primary/5 blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.5, 0.2],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      />

      <div className="mx-auto max-w-4xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mb-14 text-center"
        >
          <motion.div
            initial={{ scale: 0, opacity: 0, rotate: -180 }}
            whileInView={{ scale: 1, opacity: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, type: "spring", stiffness: 200 }}
            className="inline-block mb-4"
          >
            <div className="glass-card rounded-full px-4 py-2 inline-flex items-center gap-2">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              >
                <Sparkles size={14} className="text-primary" />
              </motion.div>
              <span className="text-xs font-medium">Client Love</span>
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <Heart size={12} className="text-primary" />
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
            Testimonials
          </motion.p>

          <motion.h2
            className="font-display text-3xl font-bold sm:text-4xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            What Clients{" "}
            <motion.span
              className="text-gradient inline-block"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              Say
            </motion.span>
          </motion.h2>

          <motion.p
            className="mt-4 text-muted-foreground max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            Don't just take my word for it - hear what my amazing clients have to say
          </motion.p>
        </motion.div>

        {/* Main Testimonial Card */}
        <div
          className="relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="relative h-[380px] sm:h-[320px] perspective-1000">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={active}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                className="glass-card absolute inset-0 rounded-2xl p-8 overflow-hidden"
              >
                {/* Animated gradient background */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent"
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.5, 0.8, 0.5],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />

                {/* Decorative quote marks */}
                <motion.div
                  className="absolute -top-4 -right-4 opacity-10"
                  animate={{
                    scale: [1, 1.1, 1],
                    rotate: [0, 5, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                  }}
                >
                  <Quote size={80} />
                </motion.div>

                <div className="relative z-10 flex flex-col items-center text-center h-full">
                  {/* Avatar circle with animation */}
                  <motion.div
                    className="mb-4"
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ duration: 0.5, type: "spring" }}
                  >
                    <div className="h-16 w-16 rounded-full bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center">
                      <span className="text-xl font-bold text-gradient">
                        {testimonials[active].avatar}
                      </span>
                    </div>
                  </motion.div>

                  {/* Star rating */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                  >
                    <StarRating rating={testimonials[active].rating} />
                  </motion.div>

                  {/* Testimonial text with typing effect */}
                  <motion.div
                    className="flex-1 flex items-center"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                  >
                    <p className="text-base leading-relaxed text-muted-foreground italic">
                      "{testimonials[active].text}"
                    </p>
                  </motion.div>

                  {/* Name and role */}
                  <motion.div
                    className="mt-4"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                  >
                    <p className="font-display font-semibold text-lg">
                      {testimonials[active].name}
                    </p>
                    <p className="text-xs text-muted-foreground flex items-center justify-center gap-1">
                      <User size={10} />
                      {testimonials[active].role}
                    </p>
                  </motion.div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Buttons */}
          <motion.button
            onClick={handlePrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 rounded-full bg-primary/10 p-2 text-primary backdrop-blur-sm transition-all hover:bg-primary/20"
            whileHover={{ scale: 1.1, x: -3 }}
            whileTap={{ scale: 0.9 }}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
          >
            <ChevronLeft size={20} />
          </motion.button>

          <motion.button
            onClick={handleNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 rounded-full bg-primary/10 p-2 text-primary backdrop-blur-sm transition-all hover:bg-primary/20"
            whileHover={{ scale: 1.1, x: 3 }}
            whileTap={{ scale: 0.9 }}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
          >
            <ChevronRight size={20} />
          </motion.button>
        </div>

        {/* Enhanced Dots with animations */}
        <motion.div
          className="mt-8 flex justify-center gap-3"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.7 }}
        >
          {testimonials.map((_, i) => (
            <motion.button
              key={i}
              onClick={() => {
                setDirection(i > active ? 1 : -1);
                setActive(i);
              }}
              className="relative group"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            >
              <div
                className={`h-2 rounded-full transition-all duration-300 ${
                  i === active
                    ? "w-6 bg-gradient-to-r from-primary to-primary/60"
                    : "w-2 bg-muted-foreground/30"
                }`}
              />
              {i === active && (
                <motion.div
                  className="absolute -top-1 left-0 right-0 h-1 rounded-full bg-primary/30"
                  layoutId="activeDot"
                  transition={{ type: "spring", stiffness: 300 }}
                />
              )}
            </motion.button>
          ))}
        </motion.div>

        {/* Trust indicator */}
        <motion.div
          className="mt-8 flex items-center justify-center gap-2 text-xs text-muted-foreground"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          >
            <Sparkles size={12} className="text-primary" />
          </motion.div>
          <span>Trusted by 50+ happy clients worldwide</span>
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          >
            <Sparkles size={12} className="text-primary" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
