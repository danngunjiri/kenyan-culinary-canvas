import { Instagram, Facebook } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border/60 bg-charcoal py-14">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-10 md:grid-cols-4">
          <div>
            <div className="flex items-center gap-2">
              <span className="grid h-9 w-9 place-items-center rounded-full gradient-ember">
                <span className="font-display text-lg font-bold text-cream">J</span>
              </span>
              <span className="font-display text-xl text-cream">Jiko<span className="text-gold">.</span></span>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-cream/60">
              A modern home for authentic Kenyan cuisine. Fire-grilled, family-recipe, fiercely local.
            </p>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-[0.3em] text-gold">Explore</h4>
            <ul className="mt-4 space-y-2 text-sm text-cream/70">
              {["Menu","About","Gallery","Reservations","Contact"].map((l) => (
                <li key={l}><a href={`#${l.toLowerCase()}`} className="transition-colors hover:text-gold">{l}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-[0.3em] text-gold">Contact</h4>
            <ul className="mt-4 space-y-2 text-sm text-cream/70">
              <li>Westlands Plaza, Nairobi</li>
              <li>+254 700 000 000</li>
              <li>hello@jikorestaurant.co.ke</li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-[0.3em] text-gold">Follow</h4>
            <div className="mt-4 flex gap-3">
              {[<Instagram key="i" size={16} />, <Facebook key="f" size={16} />].map((I, i) => (
                <a key={i} href="#" className="grid h-9 w-9 place-items-center rounded-full border border-gold/30 text-gold hover:bg-gold hover:text-charcoal">{I}</a>
              ))}
            </div>
          </div>
        </div>

        <div className="divider-gold mt-12" />
        <p className="mt-6 text-center text-xs uppercase tracking-[0.3em] text-cream/40">
          © {new Date().getFullYear()} Jiko Restaurant · Made with fire in Nairobi
        </p>
      </div>
    </footer>
  );
}
