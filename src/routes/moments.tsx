import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, X } from "lucide-react";
import PageHero from "../components/PageHero";

export const Route = createFileRoute("/moments")({
  head: () => ({
    meta: [
      { title: "Moments — Glimpses of the House | House of Awakenings" },
      { name: "description", content: "A visual album of practices, retreats, and quiet moments at House of Awakenings." },
      { property: "og:title", content: "Moments — House of Awakenings" },
      { property: "og:description", content: "Glimpses from inside the sanctuary." },
    ],
  }),
  component: MomentsPage,
});

const IMAGES = [
  "https://files.catbox.moe/w3c51q.jpg",
  "https://files.catbox.moe/yy1bih.jpg",
  "https://files.catbox.moe/wivdac.jpg",
  "https://files.catbox.moe/gmpw6c.jpg",
  "https://files.catbox.moe/x1mtr3.jpg",
  "https://files.catbox.moe/zq2hjt.webp",
  "https://files.catbox.moe/kixhvl.webp",
  "https://files.catbox.moe/rj4nah.webp",
  "https://files.catbox.moe/w3c51q.jpg",
];

function MomentsPage() {
  const [active, setActive] = useState<string | null>(null);

  return (
    <>
      <PageHero
        eyebrow="Moments"
        title={<>Glimpses from <span className="italic text-gold">inside</span></>}
        subtitle="A quiet album of practices, retreats, and small sacred moments."
        ornament="✦ क्षण ✦"
      />

      <section className="px-4 md:px-6 py-10 md:py-16">
        <div className="mx-auto max-w-7xl masonry">
          {IMAGES.map((src, i) => (
            <motion.button
              key={i}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.55, delay: (i % 4) * 0.06 }}
              onClick={() => setActive(src)}
              className="block w-full overflow-hidden rounded-xl md:rounded-2xl group relative border border-[color-mix(in_oklab,var(--gold)_15%,transparent)] hover:border-[color-mix(in_oklab,var(--gold)_45%,transparent)] transition-colors"
            >
              <img
                src={src}
                alt={`Moment ${i + 1}`}
                loading="lazy"
                className="w-full transition-transform duration-700 group-hover:scale-[1.05]"
              />
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                   style={{ background: "linear-gradient(180deg, transparent 60%, color-mix(in oklab, var(--ink) 70%, transparent))" }} />
            </motion.button>
          ))}
        </div>
      </section>

      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-black/95 backdrop-blur-md flex items-center justify-center p-4"
            onClick={() => setActive(null)}
          >
            <button
              className="absolute top-5 right-5 text-white/80 hover:text-[var(--gold)] transition-colors"
              onClick={() => setActive(null)}
              aria-label="Close"
            >
              <X size={28} />
            </button>
            <motion.img
              key={active}
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              src={active}
              alt=""
              className="max-h-[88vh] max-w-[92vw] rounded-2xl object-contain shadow-[0_30px_80px_-20px_rgba(0,0,0,0.8)]"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>

      <section className="relative px-5 py-24 md:py-32 text-center overflow-hidden bg-paper">
        <div className="aurora-bg opacity-50" />
        <div className="relative">
          <div className="sanskrit text-xl mb-4">॥ आओ ॥</div>
          <h2 className="font-display text-[28px] md:text-5xl italic font-medium">Step into the journey</h2>
          <Link to="/contact" className="btn-primary mt-8">
            Join Us <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
