import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { METHODS } from "../lib/methods";

export const Route = createFileRoute("/healing-methods")({
  head: () => ({
    meta: [
      { title: "Healing Methods — Yoga, Sound, Breathwork, Ice Bath, Chakra, EFT" },
      { name: "description", content: "Six sacred healing practices at House of Awakenings — each a doorway to a different layer of your being." },
      { property: "og:title", content: "Healing Methods — House of Awakenings" },
      { property: "og:description", content: "Six pathways back to wholeness." },
      { property: "og:image", content: METHODS[0].image },
    ],
  }),
  component: HealingMethodsPage,
});

function HealingMethodsPage() {
  // Scroll to hash on load
  useEffect(() => {
    if (typeof window === "undefined") return;
    const id = window.location.hash.replace("#", "");
    if (!id) return;
    const t = setTimeout(() => {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 200);
    return () => clearTimeout(t);
  }, []);

  return (
    <>
      <section className="px-6 pt-36 pb-16 md:pt-44 md:pb-24 text-center">
        <div className="eyebrow mb-4">Our Practices</div>
        <h1 className="font-display text-4xl md:text-6xl leading-[1.1]">Healing Methods</h1>
        <p className="mx-auto mt-6 max-w-2xl opacity-75">
          Six sacred modalities woven together to meet you in body, mind, and spirit.
        </p>
      </section>

      {METHODS.map((m, i) => (
        <section
          id={m.id}
          key={m.id}
          className="px-6 py-20 md:py-28 scroll-mt-24"
        >
          <div className={`mx-auto grid max-w-7xl gap-12 md:gap-16 items-center md:grid-cols-2 ${i % 2 === 1 ? "md:[&>div:first-child]:order-2" : ""}`}>
            <motion.div
              initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.9 }}
            >
              <div className="overflow-hidden rounded-3xl">
                <img src={m.image} alt={m.name} className="w-full aspect-[4/5] object-cover" loading="lazy" />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.9, delay: 0.1 }}
            >
              <div className="eyebrow text-primary mb-3">0{i + 1} · Method</div>
              <h2 className="font-display text-3xl md:text-5xl leading-[1.1]">{m.name}</h2>
              <p className="mt-6 text-base md:text-lg leading-[1.85] opacity-85">{m.long}</p>
              <Link to="/offerings" className="btn-primary mt-8">
                Experience This <ArrowRight size={18} />
              </Link>
            </motion.div>
          </div>
        </section>
      ))}
    </>
  );
}
