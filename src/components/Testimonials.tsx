import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { SectionHeader } from "./SectionHeader";
import a1 from "@/assets/avatar-1.jpg";
import a2 from "@/assets/avatar-2.jpg";
import a3 from "@/assets/avatar-3.jpg";

const reviews = [
  { name: "Wanjiku K.", role: "Food Writer, Nairobi", img: a1, rating: 5, text: "The nyama choma is unreal — perfectly charred, perfectly seasoned. The room glows. I've already booked again." },
  { name: "David Otieno", role: "Regular guest", img: a2, rating: 5, text: "This is what a modern Kenyan dining experience should feel like. Warm, premium, and proudly local." },
  { name: "Amani Hassan", role: "Travel creator", img: a3, rating: 5, text: "From the Swahili fish to the passion-fruit cocktails, every bite was a postcard. Instagram-perfect and soul-satisfying." },
];

export function Testimonials() {
  const [i, setI] = useState(0);
  const r = reviews[i];

  return (
    <section className="relative overflow-hidden bg-cocoa/30 py-28">
      <div className="mx-auto max-w-5xl px-6">
        <SectionHeader
          eyebrow="Guest Stories"
          title={<>Loved by <em className="not-italic text-gold">Nairobi</em></>}
        />

        <div className="relative mt-16">
          <AnimatePresence mode="wait">
            <motion.div
              key={i}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.5 }}
              className="rounded-3xl border border-border/60 bg-card/80 p-10 text-center shadow-card backdrop-blur md:p-14"
            >
              <div className="mx-auto mb-6 flex justify-center gap-1">
                {Array.from({ length: r.rating }).map((_, n) => (
                  <Star key={n} size={18} className="fill-gold text-gold" />
                ))}
              </div>
              <p className="font-display text-2xl italic leading-relaxed text-cream md:text-3xl">
                "{r.text}"
              </p>
              <div className="mt-8 flex items-center justify-center gap-4">
                <img src={r.img} alt={r.name} loading="lazy" width={48} height={48} className="h-12 w-12 rounded-full border-2 border-gold/60 object-cover" />
                <div className="text-left">
                  <div className="font-medium text-cream">{r.name}</div>
                  <div className="text-xs uppercase tracking-[0.2em] text-cream/60">{r.role}</div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="mt-8 flex items-center justify-center gap-6">
            <button
              onClick={() => setI((p) => (p - 1 + reviews.length) % reviews.length)}
              aria-label="Previous"
              className="grid h-11 w-11 place-items-center rounded-full border border-gold/40 text-gold transition-all hover:bg-gold hover:text-charcoal"
            >
              <ChevronLeft size={18} />
            </button>
            <div className="flex gap-2">
              {reviews.map((_, n) => (
                <button
                  key={n}
                  onClick={() => setI(n)}
                  aria-label={`Review ${n + 1}`}
                  className={`h-1.5 rounded-full transition-all ${n === i ? "w-8 bg-gold" : "w-1.5 bg-cream/30"}`}
                />
              ))}
            </div>
            <button
              onClick={() => setI((p) => (p + 1) % reviews.length)}
              aria-label="Next"
              className="grid h-11 w-11 place-items-center rounded-full border border-gold/40 text-gold transition-all hover:bg-gold hover:text-charcoal"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
