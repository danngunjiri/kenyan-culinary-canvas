import { motion } from "framer-motion";
import { SectionHeader } from "./SectionHeader";
import diners from "@/assets/gallery-diners.jpg";
import drinks from "@/assets/gallery-drinks.jpg";
import outdoor from "@/assets/gallery-outdoor.jpg";
import music from "@/assets/gallery-music.jpg";
import spices from "@/assets/gallery-spices.jpg";
import interior from "@/assets/interior.jpg";

const items = [
  { src: diners, span: "row-span-2", label: "The Table" },
  { src: drinks, span: "", label: "The Bar" },
  { src: outdoor, span: "", label: "Garden Patio" },
  { src: music, span: "", label: "Live Nights" },
  { src: spices, span: "", label: "The Spice" },
  { src: interior, span: "row-span-2", label: "The Room" },
];

export function Gallery() {
  return (
    <section id="gallery" className="relative bg-charcoal py-28">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          eyebrow="Gallery"
          title={<>Moments around <em className="not-italic text-gold">the fire</em></>}
          subtitle="A visual taste of Jiko — the food, the room, the people."
        />

        <div className="mt-16 grid auto-rows-[220px] grid-cols-2 gap-4 md:grid-cols-4">
          {items.map((it, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: (i % 4) * 0.08 }}
              className={`group relative overflow-hidden rounded-2xl border border-border/60 ${it.span}`}
            >
              <img
                src={it.src}
                alt={it.label}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-[1500ms] ease-out group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-transparent to-transparent opacity-60 transition-opacity group-hover:opacity-90" />
              <div className="absolute bottom-4 left-4 translate-y-2 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                <span className="text-[10px] uppercase tracking-[0.3em] text-gold">Jiko</span>
                <div className="font-display text-xl text-cream">{it.label}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
