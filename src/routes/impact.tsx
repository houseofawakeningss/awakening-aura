import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight, Quote } from "lucide-react";
import SectionHeading from "../components/SectionHeading";

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
      <section className="px-6 pt-36 pb-12 md:pt-44 text-center">
        <div className="eyebrow mb-4">Impact</div>
        <h1 className="font-display text-4xl md:text-6xl">Stories of becoming.</h1>
        <p className="mx-auto mt-6 max-w-2xl opacity-75">
          What people carry away from this space — quiet revolutions, lived in real bodies, real lives.
        </p>
      </section>

      <section className="px-6 py-16">
        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-2 lg:grid-cols-3">
          {TESTIMONIALS.map((t, i) => (
            <motion.figure
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, delay: (i % 3) * 0.1 }}
              className="rounded-3xl border border-border/50 bg-card p-8"
            >
              <Quote size={28} className="text-primary opacity-60" />
              <blockquote className="mt-5 text-base leading-relaxed opacity-90">"{t.text}"</blockquote>
              <figcaption className="mt-6 pt-5 border-t border-border/40">
                <div className="font-display text-lg">{t.name}</div>
                <div className="text-xs uppercase tracking-[0.25em] opacity-60 mt-1">{t.role}</div>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </section>

      <section className="px-6 py-24 md:py-32 bg-[color-mix(in_oklab,var(--cream)_60%,transparent)]">
        <SectionHeading eyebrow="Video Testimonials" title="Hear it in their own voices." />
        <div className="mx-auto mt-12 grid max-w-6xl gap-6 md:grid-cols-2">
          {[1, 2].map((n) => (
            <motion.div
              key={n}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="aspect-video rounded-3xl overflow-hidden bg-black/5 border border-border/40 flex items-center justify-center"
            >
              <div className="text-center opacity-60">
                <div className="mx-auto h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z" /></svg>
                </div>
                <div className="mt-3 text-sm">Video testimonial {n}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="px-6 py-24 text-center">
        <SectionHeading title="Beyond words — feel the space itself." />
        <div className="mt-10">
          <Link to="/moments" className="btn-primary">
            Feel the Experience <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </>
  );
}
