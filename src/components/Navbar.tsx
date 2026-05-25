import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const links = [
  { label: "Home", href: "#home" },
  { label: "Menu", href: "#menu" },
  { label: "About", href: "#about" },
  { label: "Gallery", href: "#gallery" },
  { label: "Reservations", href: "#reservations" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-charcoal/85 backdrop-blur-xl border-b border-border/60 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6">
        <a href="#home" className="group flex items-center gap-2">
          <span className="grid h-9 w-9 place-items-center rounded-full gradient-ember shadow-glow-ember">
            <span className="font-display text-lg font-bold text-cream">J</span>
          </span>
          <span className="font-display text-xl tracking-wide text-cream">
            Jiko<span className="text-gold">.</span>
          </span>
        </a>

        <nav className="hidden items-center gap-9 lg:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="group relative text-sm uppercase tracking-[0.18em] text-cream/80 transition-colors hover:text-gold"
            >
              {l.label}
              <span className="absolute -bottom-1 left-0 h-px w-0 bg-gold transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        <a
          href="#reservations"
          className="relative hidden overflow-hidden rounded-full border border-gold/60 bg-gold/10 px-5 py-2 text-xs uppercase tracking-[0.2em] text-gold transition-all hover:bg-gold hover:text-charcoal hover:shadow-glow-gold lg:inline-flex"
        >
          Reserve
        </a>

        <button
          aria-label="Menu"
          onClick={() => setOpen((o) => !o)}
          className="grid h-10 w-10 place-items-center rounded-full border border-border/60 text-cream lg:hidden"
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden border-t border-border/40 bg-charcoal/95 backdrop-blur-xl lg:hidden"
          >
            <nav className="flex flex-col px-6 py-6">
              {links.map((l, i) => (
                <motion.a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className="border-b border-border/30 py-4 font-display text-2xl text-cream hover:text-gold"
                >
                  {l.label}
                </motion.a>
              ))}
              <a
                href="#reservations"
                onClick={() => setOpen(false)}
                className="mt-6 rounded-full gradient-ember py-3 text-center text-sm uppercase tracking-[0.2em] text-cream shadow-glow-ember"
              >
                Reserve a Table
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
