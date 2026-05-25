import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { SectionHeader } from "./SectionHeader";
import nyama from "@/assets/dish-nyama.jpg";
import pilau from "@/assets/dish-pilau.jpg";
import fish from "@/assets/dish-fish.jpg";
import mukimo from "@/assets/dish-mukimo.jpg";
import chapati from "@/assets/dish-chapati.jpg";

const dishes = [
  { img: nyama, name: "Nyama Choma Platter", desc: "Charcoal-grilled beef & goat, kachumbari, ugali.", price: "KSh 1,500", tag: "Signature" },
  { img: pilau, name: "Chicken Pilau", desc: "Aromatic basmati slow-cooked with Swahili spices.", price: "KSh 850", tag: "House" },
  { img: fish, name: "Swahili Coconut Fish", desc: "Coastal red snapper in coconut & tamarind sauce.", price: "KSh 1,200", tag: "Coastal" },
  { img: mukimo, name: "Mukimo Beef Bowl", desc: "Kikuyu mashed greens & potatoes with rich beef stew.", price: "KSh 950", tag: "Heritage" },
  { img: chapati, name: "Chapati & Wet Fry", desc: "Soft layered chapati with juicy beef wet fry.", price: "KSh 700", tag: "Classic" },
  { img: nyama, name: "Mishkaki Skewers", desc: "Spiced beef skewers, smoky char, lime aioli.", price: "KSh 900", tag: "Grill" },
];

export function MenuSection() {
  return (
    <section id="menu" className="relative bg-charcoal py-28">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          eyebrow="The Menu"
          title={<>Fire, spice & <em className="not-italic text-gold">soul</em></>}
          subtitle="A curated selection of Kenyan classics, reimagined with modern flair and the freshest local ingredients sourced daily."
        />

        <div className="mt-20 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {dishes.map((d, i) => (
            <motion.article
              key={d.name + i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: (i % 3) * 0.08 }}
              whileHover={{ y: -8 }}
              className="group relative overflow-hidden rounded-2xl border border-border/60 bg-card shadow-card transition-shadow hover:shadow-glow-ember"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={d.img}
                  alt={d.name}
                  loading="lazy"
                  width={1024}
                  height={1024}
                  className="h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/20 to-transparent" />
                <span className="absolute left-4 top-4 rounded-full border border-gold/60 bg-charcoal/70 px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-gold backdrop-blur">
                  {d.tag}
                </span>
                <span className="absolute right-4 top-4 rounded-full bg-charcoal/70 px-3 py-1 text-xs font-medium text-cream backdrop-blur">
                  {d.price}
                </span>
              </div>
              <div className="p-6">
                <h3 className="font-display text-2xl text-cream">{d.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-cream/65">{d.desc}</p>
                <button className="mt-5 inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-gold transition-all hover:gap-3">
                  Order Now
                  <ArrowUpRight size={14} className="transition-transform group-hover:rotate-45" />
                </button>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
