import { MessageCircle } from "lucide-react";

export function StickyWhatsApp() {
  return (
    <a
      href="https://wa.me/254700000000"
      target="_blank"
      rel="noreferrer"
      aria-label="WhatsApp us"
      className="fixed bottom-6 right-6 z-40 grid h-14 w-14 place-items-center rounded-full gradient-ember text-cream shadow-glow-ember animate-float-pulse transition-transform hover:scale-110"
    >
      <MessageCircle size={22} />
    </a>
  );
}
