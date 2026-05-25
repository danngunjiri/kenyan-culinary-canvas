import { motion } from "framer-motion";

export function SectionHeader({
  eyebrow,
  title,
  subtitle,
  align = "center",
}: {
  eyebrow: string;
  title: React.ReactNode;
  subtitle?: string;
  align?: "center" | "left";
}) {
  const alignment = align === "center" ? "items-center text-center" : "items-start text-left";
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7 }}
      className={`flex flex-col gap-5 ${alignment}`}
    >
      <span className="inline-flex items-center gap-3 text-xs uppercase tracking-[0.4em] text-gold">
        <span className="h-px w-8 bg-gold/60" /> {eyebrow}
      </span>
      <h2 className="max-w-3xl font-display text-balance text-4xl font-medium leading-tight text-cream sm:text-5xl md:text-6xl">
        {title}
      </h2>
      {subtitle && (
        <p className="max-w-2xl text-pretty text-base leading-relaxed text-cream/70">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
