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
      transition={{ duration: 0.9, ease: [0.2, 0.8, 0.2, 1] }}
      className={`max-w-3xl ${center ? "mx-auto text-center" : ""}`}
    >
      {eyebrow && <div className="eyebrow mb-4 text-gold">{eyebrow}</div>}
      <h2 className="font-display text-[28px] sm:text-4xl md:text-5xl lg:text-[56px] leading-[1.1] tracking-[-0.015em]">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-5 text-[14px] md:text-lg leading-[1.8] opacity-75 font-light max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
