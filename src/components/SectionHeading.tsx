import { motion } from "framer-motion";
import type { ReactNode } from "react";

export default function SectionHeading({
  eyebrow, title, subtitle, center = true,
}: { eyebrow?: string; title: ReactNode; subtitle?: ReactNode; center?: boolean }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
      className={`max-w-3xl ${center ? "mx-auto text-center" : ""}`}
    >
      {eyebrow && <div className="eyebrow mb-4">{eyebrow}</div>}
      <h2 className="font-display text-3xl md:text-5xl leading-[1.1]">{title}</h2>
      {subtitle && (
        <p className="mt-5 text-base md:text-lg leading-relaxed opacity-75">{subtitle}</p>
      )}
    </motion.div>
  );
}
