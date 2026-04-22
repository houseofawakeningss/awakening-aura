import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { METHODS } from "../lib/methods";
import PageHero from "../components/PageHero";
import Mandala from "../components/Mandala";

const SYMBOLS = ["ॐ", "᳚", "✸", "❉", "↟", "✦"];

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
  useEffect(() => {
    if (typeof window === "undefined") return;
    const id = window.location.hash.replace("#", "");
    if (!id) return;
    const t = setTimeout(() => {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 250);
    return () => clearTimeout(t);
  }, []);

  return (
    <>
      <PageHero
        eyebrow="Our Practices"
        title={<>Healing <span className="italic text-gold">Methods</span></>}
        subtitle="Six sacred modalities to meet you in body, mind, and spirit."
        ornament="॥ साधना ॥"
      />

      {METHODS.map((m, i) => (
        <section
          id={m.id}
          key={m.id}
          className={`relative px-5 py-16 md:py-28 scroll-mt-24 overflow-hidden ${i % 2 === 0 ? "bg-paper" : ""}`}
        >
          <div className={`absolute top-1/2 ${i % 2 === 0 ? "left-0 -translate-x-1/3" : "right-0 translate-x-1/3"} -translate-y-1/2 opacity-[0.05] pointer-events-none`}>
            <Mandala size={500} spin={i % 2 === 0} className={i % 2 === 1 ? "spin-slower" : ""} />
          </div>

          <div className={`relative mx-auto grid max-w-7xl gap-8 md:gap-16 items-center grid-cols-1 md:grid-cols-2 ${i % 2 === 1 ? "md:[&>div:first-child]:order-2" : ""}`}>
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8, ease: [0.2, 0.8, 0.2, 1] }}
            >
              <div className="relative">
                <div className="absolute -inset-3 rounded-[1.5rem] md:rounded-[2rem] opacity-50"
                     style={{ background: "linear-gradient(135deg, color-mix(in oklab, var(--gold) 50%, transparent), transparent 50%, color-mix(in oklab, var(--forest) 60%, transparent))", filter: "blur(24px)" }} />
                <div className="relative overflow-hidden rounded-2xl md:rounded-3xl border border-[color-mix(in_oklab,var(--gold)_30%,transparent)]">
                  <img src={m.image} alt={m.name} className="w-full aspect-[4/3] md:aspect-[4/5] object-cover" loading="lazy" />
                  <div className="pointer-events-none absolute inset-0" style={{ background: "linear-gradient(180deg, transparent 60%, rgba(0,0,0,0.4))" }} />
                  <div className="absolute bottom-5 left-5 right-5 text-white">
                    <span className="sanskrit text-3xl">{SYMBOLS[i]}</span>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              <div className="eyebrow text-gold mb-3 justify-start">0{i + 1} · Method</div>
              <h2 className="font-display text-[30px] sm:text-4xl md:text-[52px] leading-[1.05] tracking-[-0.02em] font-medium">
                {m.name}
              </h2>
              <div className="divider-glow w-16 my-5" />
              <p className="text-[15px] md:text-[17px] leading-[1.85] opacity-85 font-light">{m.long}</p>
              <Link to="/offerings" className="btn-primary mt-8">
                Experience This <ArrowRight size={16} />
              </Link>
            </motion.div>
          </div>
        </section>
      ))}

      <section className="relative px-5 py-24 md:py-32 text-center overflow-hidden">
        <div className="aurora-bg opacity-40" />
        <div className="relative">
          <div className="sanskrit text-2xl mb-5">॥ ओ३म् ॥</div>
          <h2 className="font-display text-[28px] md:text-5xl italic font-medium">Choose how you'd like to begin</h2>
          <Link to="/offerings" className="btn-primary mt-8">
            View Offerings <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
