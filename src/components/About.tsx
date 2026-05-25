import { motion } from "framer-motion";
import chef from "@/assets/about-chef.avif";
import interior from "@/assets/interior.jpg";
import spices from "@/assets/gallery-spices.jpg";

export function About() {
  return (
    <section id="about" className="relative overflow-hidden bg-cocoa/40 py-28">
      <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-2 lg:items-center">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="relative aspect-[4/5] overflow-hidden rounded-3xl shadow-card">
            <img
              src={chef}
              alt="Chef grilling over open flame"
              loading="lazy"
              width={1280}
              height={1600}
              className="h-full w-full object-cover"
            />
          </div>
          <div className="absolute -bottom-10 -right-6 hidden aspect-square w-52 overflow-hidden rounded-2xl border-4 border-charcoal shadow-glow-gold md:block">
            <img src={spices} alt="Kenyan spices" loading="lazy" width={512} height={512} className="h-full w-full object-cover" />
          </div>
          <div className="absolute -left-6 -top-6 hidden aspect-video w-48 overflow-hidden rounded-2xl border-4 border-charcoal shadow-card md:block">
            <img src={interior} alt="Restaurant interior" loading="lazy" width={480} height={270} className="h-full w-full object-cover" />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-flex items-center gap-3 text-xs uppercase tracking-[0.4em] text-gold">
            <span className="h-px w-8 bg-gold/60" /> Our Story
          </span>
          <h2 className="mt-5 font-display text-4xl font-medium leading-tight text-cream sm:text-5xl md:text-6xl">
            Recipes passed down. <em className="not-italic text-gold">Plated for today.</em>
          </h2>
          <p className="mt-6 text-base leading-relaxed text-cream/75">
            Born in the heart of Nairobi, <span className="text-gold">Jiko</span> is a modern home
            for Kenyan cuisine — where charcoal-smoke meets candlelight. Our chefs cook from
            family recipes, sourcing produce from local markets and grilling over real fire.
          </p>
          <p className="mt-4 text-base leading-relaxed text-cream/75">
            Every plate is a celebration of heritage: coastal Swahili spice, highland greens,
            and the unmistakable char of nyama choma served the way it should be — generous,
            warm and shared.
          </p>

          <div className="mt-10 grid grid-cols-3 gap-6 border-t border-border/60 pt-8">
            {[
              { k: "12+", v: "Years cooking" },
              { k: "30+", v: "Signature dishes" },
              { k: "4.9★", v: "Guest rating" },
            ].map((s) => (
              <div key={s.v}>
                <div className="font-display text-3xl text-gold sm:text-4xl">{s.k}</div>
                <div className="mt-1 text-xs uppercase tracking-[0.2em] text-cream/60">{s.v}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
