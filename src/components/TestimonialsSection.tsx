import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote, Star, Sparkles, ChevronLeft, ChevronRight, User, Heart } from "lucide-react";

const testimonials = [
  { name: "Bright", role: "Software Enginner", text: "Destiny is a kind that i'll forever want to work with, even when assigned a task he doesn't know about within few days he already made research and learn how to cover up that task.", rating: 5, avatar: "BR" },
  { name: "William Ruth", role: "CEO", text: "Benjamin gave his best , he's one of a kind. I enjoyed working with him and thanking him for helping me bring my idea to life.", rating: 5, avatar: "WR" },
  { name: "Solomon Anointed", role: "CEO & Founder", text: "One of the reason i love working with bright is his LEARNING MINDSET", rating: 4, avatar: "AS" },
  { name: "Constance", role: "CEO & Founder", text: "Thank you destiny for your graphic desgin skills", rating: 3, avatar: "CO" },
  { name: "Micheal Solomon", role: "Small Business Owner", text: "I 100% recommend destiny to anyone , both his graphic skills and his developer skills are not just skills to him , his ability to adapt quickly is also one of a kind", rating: 4, avatar: "MS" },
  { name: "Favor", role: "Founder @lizfav layouts", text: "Working with destiny was a fantastic experience. Fast delivery, clean code, and incredible attention to detail.", rating: 4, avatar: "FA" },
  { name: "Engr Divine", role: "Software Engineer", text: "Bright is an incredible developer to work with , he's very hard working and always making this get done.", rating: 5, avatar: "ED" },
  { name: "Victor", role: "Fullstack Developer", text: "One of the most talented developers I've collaborated with. bright brings both design sense and technical skill.", rating: 4.5, avatar: "VI" },
];

function StarRating({ rating = 0 }: { rating?: number }) {
  const stars = [1, 2, 3, 4, 5];
  return (
    <div className="flex gap-0.5 justify-center">
      {stars.map((i) => (
        <Star
          key={i}
          size={14}
          className={i <= (rating || 0) ? "fill-yellow-500 text-yellow-500" : "text-muted-foreground/30"}
        />
      ))}
    </div>
  );
}

export default function TestimonialsSection() {
  const [active, setActive] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (!isPaused) {
      const timer = setInterval(() => setActive((p) => (p + 1) % testimonials.length), 5000);
      return () => clearInterval(timer);
    }
  }, [isPaused]);

  const handlePrev = () => setActive((p) => (p - 1 + testimonials.length) % testimonials.length);
  const handleNext = () => setActive((p) => (p + 1) % testimonials.length);

  return (
    <section id="testimonials" className="section-padding relative overflow-hidden">
      <div className="mx-auto max-w-4xl relative z-10">
        <div className="mb-14 text-center">
          <div className="inline-block mb-4">
            <div className="glass-card rounded-full px-4 py-2 inline-flex items-center gap-2">
              <Sparkles size={14} className="text-primary" />
              <span className="text-xs font-medium">Client Love</span>
              <Heart size={12} className="text-primary" />
            </div>
          </div>
          <p className="mb-2 text-sm font-medium tracking-widest uppercase text-primary">Testimonials</p>
          <h2 className="font-display text-3xl font-bold sm:text-4xl">What Clients <span className="text-gradient">Say</span></h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">Don't just take my word for it - hear what my amazing clients have to say</p>
        </div>

        <div className="relative" onMouseEnter={() => setIsPaused(true)} onMouseLeave={() => setIsPaused(false)}>
          <div className="relative h-[380px] sm:h-[320px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className="glass-card absolute inset-0 rounded-2xl p-8 overflow-hidden"
              >
                <div className="flex flex-col items-center text-center h-full">
                  <div className="h-16 w-16 rounded-full bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center mb-4">
                    <span className="text-xl font-bold text-gradient">{testimonials[active].avatar}</span>
                  </div>
                  <StarRating rating={testimonials[active].rating} />
                  <p className="mt-4 text-base leading-relaxed text-muted-foreground italic flex-1 flex items-center">
                    "{testimonials[active].text}"
                  </p>
                  <div className="mt-4">
                    <p className="font-display font-semibold text-lg">{testimonials[active].name}</p>
                    <p className="text-xs text-muted-foreground flex items-center justify-center gap-1">
                      <User size={10} /> {testimonials[active].role}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <button onClick={handlePrev} className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 rounded-full bg-primary/10 p-2 text-primary hover:bg-primary/20 transition-all">
            <ChevronLeft size={20} />
          </button>
          <button onClick={handleNext} className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 rounded-full bg-primary/10 p-2 text-primary hover:bg-primary/20 transition-all">
            <ChevronRight size={20} />
          </button>
        </div>

        <div className="mt-8 flex justify-center gap-3">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`h-2 rounded-full transition-all duration-300 ${i === active ? "w-6 bg-primary" : "w-2 bg-muted-foreground/30"}`}
            />
          ))}
        </div>

        <div className="mt-8 flex items-center justify-center gap-2 text-xs text-muted-foreground">
          <Sparkles size={12} className="text-primary" />
          <span>Trusted by 50+ happy clients worldwide</span>
          <Sparkles size={12} className="text-primary" />
        </div>
      </div>
    </section>
  );
}
