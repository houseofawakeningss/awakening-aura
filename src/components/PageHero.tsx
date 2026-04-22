import { motion } from "framer-motion";
import type { ReactNode } from "react";
import Mandala from "./Mandala";

export default function PageHero({
  eyebrow, title, subtitle, ornament = "✦",
}: {
  eyebrow: string;
  title: ReactNode;
  subtitle?: ReactNode;
  ornament?: string;
}) {
  return (
    <section className="relative overflow-hidden px-5 pt-32 pb-14 md:pt-44 md:pb-20 text-center">
      {/* Soft glow backdrop */}
      <div className="aurora-bg" />
      <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.05]">
        <Mandala size={620} />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.2, 0.8, 0.2, 1] }}
        className="relative mx-auto max-w-4xl"
      >
        <div className="eyebrow text-gold mb-5 justify-center">{eyebrow}</div>
        <h1 className="font-display text-[34px] sm:text-5xl md:text-[68px] leading-[1.05] tracking-[-0.02em]">
          {title}
        </h1>
        <div className="mx-auto my-6 ornament">{ornament}</div>
        {subtitle && (
          <p className="mx-auto max-w-2xl text-[14px] md:text-lg leading-[1.8] opacity-75 font-light">
            {subtitle}
          </p>
        )}
      </motion.div>
    </section>
  );
}
