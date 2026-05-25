import { motion } from "framer-motion";
import { ArrowRight, UtensilsCrossed } from "lucide-react";
import heroImg from "@/assets/hero-nyama.jpg";

export function Hero() {
  return (
    <section id="home" className="relative h-screen min-h-[700px] w-full overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={heroImg}
          alt="Sizzling Kenyan nyama choma on the grill"
          width={1920}
          height={1080}
          className="h-full w-full animate-slow-zoom object-cover"
        />
        <div className="absolute inset-0 gradient-hero-overlay" />
      </div>

      <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-6 inline-flex items-center gap-3"
        >
          <span className="h-px w-12 bg-gold/60" />
          <span className="text-xs uppercase tracking-[0.4em] text-gold">
            Karibu · A Taste of Kenya
          </span>
          <span className="h-px w-12 bg-gold/60" />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.15 }}
          className="font-display text-balance text-5xl font-medium leading-[1.05] text-cream sm:text-7xl md:text-8xl"
        >
          Authentic Kenyan <br />
          Flavors <em className="not-italic text-gold">Served Fresh</em>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-7 max-w-2xl text-pretty text-base leading-relaxed text-cream/80 sm:text-lg"
        >
          Experience the taste of Kenya with premium local cuisine, fire-grilled
          specialties, handcrafted cocktails and an unforgettable dining ritual.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-10 flex flex-col items-center gap-4 sm:flex-row"
        >
          <a
            href="#menu"
            className="group relative inline-flex items-center gap-3 overflow-hidden rounded-full gradient-ember px-8 py-4 text-sm uppercase tracking-[0.25em] text-cream shadow-glow-ember transition-transform hover:-translate-y-0.5"
          >
            <UtensilsCrossed size={16} />
            View Menu
            <span className="absolute inset-0 -translate-x-full bg-white/10 transition-transform duration-700 group-hover:translate-x-full" />
          </a>
          <a
            href="#reservations"
            className="group inline-flex items-center gap-3 rounded-full border border-gold/60 bg-charcoal/30 px-8 py-4 text-sm uppercase tracking-[0.25em] text-gold backdrop-blur-md transition-all hover:bg-gold hover:text-charcoal hover:shadow-glow-gold"
          >
            Reserve a Table
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-[10px] uppercase tracking-[0.4em] text-cream/50"
        >
          Scroll to explore
          <div className="mx-auto mt-3 h-10 w-px animate-pulse bg-gradient-to-b from-gold to-transparent" />
        </motion.div>
      </div>
    </section>
  );
}
