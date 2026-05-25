import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock, Instagram, Facebook, MessageCircle } from "lucide-react";
import { SectionHeader } from "./SectionHeader";

export function Contact() {
  return (
    <section id="contact" className="relative bg-cocoa/40 py-28">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          eyebrow="Visit Us"
          title={<>Come <em className="not-italic text-gold">say hello</em></>}
        />

        <div className="mt-16 grid gap-10 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="space-y-6"
          >
            <InfoRow icon={<MapPin />} title="Location" lines={["Westlands Plaza, 2nd Floor", "Nairobi, Kenya"]} />
            <InfoRow icon={<Phone />} title="Phone" lines={["+254 700 000 000"]} />
            <InfoRow icon={<MessageCircle />} title="WhatsApp" lines={["+254 700 000 000"]} href="https://wa.me/254700000000" />
            <InfoRow icon={<Mail />} title="Email" lines={["hello@jikorestaurant.co.ke"]} />
            <InfoRow icon={<Clock />} title="Open" lines={["Mon – Thu · 12:00 — 23:00", "Fri – Sun · 12:00 — 01:00"]} />

            <div className="flex items-center gap-4 pt-4">
              <span className="text-xs uppercase tracking-[0.3em] text-cream/60">Follow</span>
              {[
                { i: <Instagram size={16} />, l: "Instagram" },
                { i: <TikTok />, l: "TikTok" },
                { i: <Facebook size={16} />, l: "Facebook" },
              ].map((s) => (
                <a
                  key={s.l}
                  href="#"
                  aria-label={s.l}
                  className="grid h-10 w-10 place-items-center rounded-full border border-gold/40 text-gold transition-all hover:bg-gold hover:text-charcoal hover:shadow-glow-gold"
                >
                  {s.i}
                </a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="overflow-hidden rounded-3xl border border-border/60 shadow-card"
          >
            <iframe
              title="Map"
              src="https://www.google.com/maps?q=Westlands,Nairobi&output=embed"
              className="h-[460px] w-full grayscale-[40%] contrast-110"
              loading="lazy"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function InfoRow({ icon, title, lines, href }: { icon: React.ReactNode; title: string; lines: string[]; href?: string }) {
  const inner = (
    <div className="flex items-start gap-5 rounded-2xl border border-border/60 bg-charcoal/40 p-5 transition-all hover:border-gold/60">
      <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-gold/10 text-gold">{icon}</span>
      <div>
        <div className="text-[10px] uppercase tracking-[0.3em] text-gold/80">{title}</div>
        {lines.map((l) => <div key={l} className="text-cream">{l}</div>)}
      </div>
    </div>
  );
  return href ? <a href={href} target="_blank" rel="noreferrer">{inner}</a> : inner;
}

function TikTok() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M19.6 6.3a5.3 5.3 0 0 1-3.2-1.1V15a6 6 0 1 1-6-6v3a3 3 0 1 0 3 3V2h3a5.3 5.3 0 0 0 3.2 4.3z"/>
    </svg>
  );
}
