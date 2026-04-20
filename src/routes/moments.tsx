import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, X } from "lucide-react";

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
      <section className="px-5 pt-28 pb-8 md:pt-44 text-center">
        <div className="eyebrow mb-3">Moments</div>
        <h1 className="font-display text-[28px] sm:text-4xl md:text-6xl">Glimpses from inside.</h1>
        <p className="mx-auto mt-4 max-w-2xl text-sm md:text-base opacity-75">
          A quiet album of practices, retreats, and small sacred moments.
        </p>
      </section>

      <section className="px-4 md:px-6 py-8 md:py-12">
        <div className="mx-auto max-w-7xl masonry">
          {IMAGES.map((src, i) => (
            <motion.button
              key={i}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.5, delay: (i % 4) * 0.04 }}
              onClick={() => setActive(src)}
              className="block w-full overflow-hidden rounded-xl md:rounded-2xl group"
            >
              <img
                src={src}
                alt={`Moment ${i + 1}`}
                loading="lazy"
                className="w-full transition-transform duration-700 group-hover:scale-[1.04]"
              />
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
            className="fixed inset-0 z-[60] bg-black/90 flex items-center justify-center p-4"
            onClick={() => setActive(null)}
          >
            <button
              className="absolute top-5 right-5 text-white/80 hover:text-white"
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
              className="max-h-[88vh] max-w-[92vw] rounded-2xl object-contain"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>

      <section className="px-5 py-16 md:py-24 text-center">
        <Link to="/contact" className="btn-primary">
          Join the Journey <ArrowRight size={16} />
        </Link>
      </section>
    </>
  );
}
