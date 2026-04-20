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
      <section className="px-6 pt-36 pb-12 md:pt-44 text-center">
        <div className="eyebrow mb-4">Moments</div>
        <h1 className="font-display text-4xl md:text-6xl">Glimpses from inside.</h1>
        <p className="mx-auto mt-6 max-w-2xl opacity-75">
          A quiet album of practices, retreats, and the small sacred moments in between.
        </p>
      </section>

      <section className="px-6 py-12">
        <div className="mx-auto max-w-7xl masonry">
          {IMAGES.map((src, i) => (
            <motion.button
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, delay: (i % 6) * 0.05 }}
              onClick={() => setActive(src)}
              className="block w-full overflow-hidden rounded-2xl group"
            >
              <img
                src={src}
                alt={`Moment ${i + 1}`}
                loading="lazy"
                className="w-full transition-transform duration-[1200ms] group-hover:scale-[1.04]"
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

      <section className="px-6 py-24 text-center">
        <Link to="/contact" className="btn-primary">
          Join the Journey <ArrowRight size={18} />
        </Link>
      </section>
    </>
  );
}
