import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight, Quote } from "lucide-react";
import SectionHeading from "../components/SectionHeading";
import PageHero from "../components/PageHero";
import Mandala from "../components/Mandala";

export const Route = createFileRoute("/impact")({
  head: () => ({
    meta: [
      { title: "Impact — Stories of Transformation | House of Awakenings" },
      { name: "description", content: "Heartfelt testimonials from individuals who've walked the path of inner healing with House of Awakenings." },
      { property: "og:title", content: "Impact — House of Awakenings" },
      { property: "og:description", content: "Real stories of release, resilience and return." },
    ],
  }),
  component: ImpactPage,
});

const TESTIMONIALS = [
  { name: "Ananya R.", role: "Bangalore", text: "I came carrying decades of quiet anxiety. After three months at House of Awakenings, I sleep deeper, breathe slower, and recognize myself again. Gunja holds space like no one I've ever met." },
  { name: "Rohan M.", role: "Tech Founder", text: "The corporate program shifted something in our entire team. People are showing up softer, clearer, more present. The ROI is invisible at first — and then it's everything." },
  { name: "Priya S.", role: "Marketing Lead", text: "My first ice bath terrified me. My twentieth changed me. I've found a calm in myself I didn't know existed. This space is rare and precious." },
  { name: "Karthik V.", role: "Doctor", text: "Sound healing here is unlike anything I've experienced clinically. It works on layers I can't measure — and the results are undeniable." },
  { name: "Meera J.", role: "Architect", text: "Breathwork sessions have replaced years of therapy. There is wisdom in this body — Gunja gently helps you remember how to listen." },
  { name: "Saurabh G.", role: "Investment Banker", text: "I came skeptical. I left undone, and rebuilt — better. House of Awakenings is the most important investment I've ever made." },
];

function ImpactPage() {
  return (
    <>
      <PageHero
        eyebrow="Impact"
        title={<>Stories of <span className="italic text-gold">becoming</span></>}
        subtitle="Quiet revolutions, lived in real bodies and real lives."
        ornament="॥ अनुभव ॥"
      />

      <section className="px-5 py-12 md:py-20">
        <div className="mx-auto grid max-w-7xl gap-5 md:gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {TESTIMONIALS.map((t, i) => (
            <motion.figure
              key={t.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: (i % 3) * 0.08 }}
              className="card-luxe p-7 md:p-9 group"
            >
              <Quote size={24} className="text-gold opacity-70" />
              <blockquote className="mt-4 text-[14.5px] md:text-[15.5px] leading-[1.8] opacity-90 font-light italic">
                "{t.text}"
              </blockquote>
              <figcaption className="mt-6 pt-5 border-t border-[color-mix(in_oklab,var(--gold)_18%,var(--border))]">
                <div className="font-display text-lg md:text-xl font-medium">{t.name}</div>
                <div className="text-[10px] md:text-[11px] uppercase tracking-[0.3em] text-gold mt-1.5">{t.role}</div>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </section>

      <section className="relative px-5 py-24 md:py-32 overflow-hidden bg-paper">
        <div className="aurora-bg opacity-50" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.05] pointer-events-none">
          <Mandala size={620} />
        </div>
        <div className="relative">
          <SectionHeading
            eyebrow="Video Testimonials"
            title={<>Hear it in their <span className="italic text-gold">own voices</span></>}
          />
          <div className="mx-auto mt-12 grid max-w-6xl gap-5 md:gap-6 grid-cols-1 md:grid-cols-2">
            {[1, 2].map((n) => (
              <motion.div
                key={n}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: n * 0.1 }}
                className="card-luxe aspect-video flex items-center justify-center group cursor-pointer"
              >
                <div className="text-center">
                  <div className="mx-auto h-16 w-16 rounded-full border border-[color-mix(in_oklab,var(--gold)_50%,transparent)] bg-[color-mix(in_oklab,var(--gold)_8%,transparent)] flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:border-[var(--gold)]">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" className="text-gold ml-1">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                  <div className="mt-4 text-[12px] md:text-sm uppercase tracking-[0.25em] opacity-70">Testimonial {n}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative px-5 py-24 md:py-32 text-center overflow-hidden">
        <div className="relative">
          <SectionHeading title={<>Beyond words — feel the <span className="italic text-gold">space</span></>} />
          <div className="mt-10">
            <Link to="/moments" className="btn-primary">
              Feel the Experience <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
