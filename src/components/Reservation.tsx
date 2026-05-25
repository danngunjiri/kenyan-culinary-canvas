import { useState } from "react";
import { motion } from "framer-motion";
import { Calendar, Clock, Users, MessageCircle } from "lucide-react";
import { SectionHeader } from "./SectionHeader";

export function Reservation() {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("19:00");
  const [guests, setGuests] = useState(2);

  const wa = `https://wa.me/254700000000?text=${encodeURIComponent(
    `Hello Jiko, I'd like to reserve a table for ${guests} on ${date || "[date]"} at ${time}.`
  )}`;

  return (
    <section id="reservations" className="relative bg-charcoal py-28">
      <div className="mx-auto max-w-5xl px-6">
        <SectionHeader
          eyebrow="Reservations"
          title={<>Book your <em className="not-italic text-gold">table</em></>}
          subtitle="Reserve in seconds. We'll confirm via WhatsApp."
        />

        <motion.form
          onSubmit={(e) => { e.preventDefault(); window.open(wa, "_blank"); }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-16 rounded-3xl border border-border/60 bg-card/80 p-8 shadow-card backdrop-blur md:p-12"
        >
          <div className="grid gap-6 md:grid-cols-3">
            <Field icon={<Calendar size={16} />} label="Date">
              <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                required
                className="w-full bg-transparent text-cream outline-none [color-scheme:dark]"
              />
            </Field>
            <Field icon={<Clock size={16} />} label="Time">
              <select value={time} onChange={(e) => setTime(e.target.value)} className="w-full bg-transparent text-cream outline-none">
                {["17:00","18:00","19:00","20:00","21:00","22:00"].map((t) => (
                  <option key={t} value={t} className="bg-charcoal">{t}</option>
                ))}
              </select>
            </Field>
            <Field icon={<Users size={16} />} label="Guests">
              <select value={guests} onChange={(e) => setGuests(Number(e.target.value))} className="w-full bg-transparent text-cream outline-none">
                {Array.from({ length: 10 }, (_, i) => i + 1).map((n) => (
                  <option key={n} value={n} className="bg-charcoal">{n} {n === 1 ? "guest" : "guests"}</option>
                ))}
              </select>
            </Field>
          </div>

          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <button
              type="submit"
              className="group relative inline-flex items-center gap-3 overflow-hidden rounded-full gradient-ember px-8 py-4 text-sm uppercase tracking-[0.25em] text-cream shadow-glow-ember transition-transform hover:-translate-y-0.5"
            >
              Book Your Table
            </button>
            <a
              href={wa}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-3 rounded-full border border-gold/60 px-8 py-4 text-sm uppercase tracking-[0.25em] text-gold transition-all hover:bg-gold hover:text-charcoal"
            >
              <MessageCircle size={16} /> WhatsApp Us
            </a>
          </div>
        </motion.form>
      </div>
    </section>
  );
}

function Field({ icon, label, children }: { icon: React.ReactNode; label: string; children: React.ReactNode }) {
  return (
    <label className="block rounded-xl border border-border/60 bg-charcoal/60 px-4 py-3 transition-colors focus-within:border-gold">
      <div className="mb-1 flex items-center gap-2 text-[10px] uppercase tracking-[0.3em] text-gold/80">
        {icon} {label}
      </div>
      {children}
    </label>
  );
}
