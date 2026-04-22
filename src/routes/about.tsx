import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight, Layers, Sparkles, Mountain, Shield, BookOpen, Compass, Users, LifeBuoy } from "lucide-react";
import SectionHeading from "../components/SectionHeading";
import PageHero from "../components/PageHero";
import Mandala from "../components/Mandala";

const FOUNDER = "https://files.catbox.moe/rj4nah.webp";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Gunja Tolani & House of Awakenings" },
      { name: "description", content: "The founder story of Gunja Tolani — from IIM Calcutta and a global corporate career to creating House of Awakenings in Bangalore." },
      { property: "og:title", content: "About — House of Awakenings" },
      { property: "og:description", content: "Founder Gunja Tolani's journey into holistic wellness." },
      { property: "og:image", content: FOUNDER },
    ],
  }),
  component: AboutPage,
});

const WHY = [
  { icon: Layers, title: "Holistic, Not Fragmented", text: "Body, mind, and energy as one integrated system." },
  { icon: Sparkles, title: "Experience-Led", text: "Practices you feel and embody, not merely learn." },
  { icon: Mountain, title: "Depth Over Quick Fixes", text: "Lasting inner shifts, not temporary relief." },
  { icon: Shield, title: "Safe & Intentional", text: "You feel held, supported, and seen — always." },
  { icon: BookOpen, title: "Wisdom × Today", text: "Ancient teachings, modern science, daily life." },
  { icon: Compass, title: "Real Resilience", text: "Self-regulate. Navigate life with clarity." },
  { icon: Users, title: "Personal × Collective", text: "Your journey, held within community." },
  { icon: LifeBuoy, title: "Real Integration", text: "Transforms how you live, work, and relate." },
];

function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="The Founder"
        title={<>Gunja <span className="italic text-gold">Tolani</span></>}
        subtitle="A space born not from knowledge alone — but from lived transformation."
        ornament="✦ ॐ ✦"
      />

      <section className="relative px-5 py-12 md:py-24 overflow-hidden">
        <div className="absolute top-0 right-0 opacity-[0.04] pointer-events-none translate-x-1/3">
          <Mandala size={680} />
        </div>
        <div className="relative mx-auto grid max-w-6xl gap-10 md:gap-16 grid-cols-1 md:grid-cols-[1fr_1.4fr] items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="md:sticky md:top-28 max-w-sm mx-auto md:max-w-none"
          >
            <div className="relative">
              <div className="absolute -inset-2 rounded-[1.4rem] md:rounded-[2rem] opacity-60"
                   style={{ background: "linear-gradient(135deg, color-mix(in oklab, var(--gold) 60%, transparent), transparent 50%, color-mix(in oklab, var(--forest) 60%, transparent))", filter: "blur(20px)" }} />
              <div className="relative overflow-hidden rounded-2xl md:rounded-3xl border border-[color-mix(in_oklab,var(--gold)_30%,transparent)]">
                <img src={FOUNDER} alt="Gunja Tolani" className="w-full object-cover" loading="lazy" />
              </div>
              <div className="mt-5 text-center">
                <div className="font-display text-xl italic">Gunja Tolani</div>
                <div className="text-[10px] uppercase tracking-[0.35em] opacity-60 mt-1">Founder · Bangalore</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="space-y-5 text-[15px] md:text-[17px] leading-[1.85] opacity-90 font-light"
          >
            <p>Gunja Tolani is the founder of <span className="text-gold font-normal">House of Awakenings</span> — a space born not just from knowledge, but from lived transformation.</p>
            <p>With a background in Mechanical Engineering and an MBA from IIM Calcutta, she built a decade-long career at Cummins, Whirlpool and Gap — shaping a sharp understanding of modern stress and imbalance.</p>
            <p>Yet beneath professional success, there was a deeper calling.</p>
            <p>What began as a personal exploration to address fatigue and emotional disconnect unfolded into a profound inner journey — a complete shift in how she related to herself and life.</p>
            <p className="font-display text-lg md:text-2xl italic text-gold border-l-2 border-[color-mix(in_oklab,var(--gold)_60%,transparent)] pl-5 my-6">This transformation became the turning point.</p>
            <p>She stepped away from the corporate path and immersed herself in holistic wellness — training in advanced yoga (TTC, PGD in Yoga Therapy), breathwork, cold immersion, sound healing, and EFT. Each modality not just learned, but embodied.</p>
            <p>House of Awakenings is the reflection of this journey — built on the understanding that true change happens when body, mind, and energy are addressed together.</p>
            <p className="font-display text-lg md:text-xl italic">Her work is simple yet powerful — to help you pause, reconnect, and awaken to your truest self.</p>
          </motion.div>
        </div>
      </section>

      {/* VISION & MISSION */}
      <section className="relative px-5 py-24 md:py-32 overflow-hidden bg-paper">
        <div className="aurora-bg" />
        <div className="relative mx-auto grid max-w-6xl gap-6 md:gap-8 grid-cols-1 md:grid-cols-2">
          {[
            { label: "Vision", text: "A conscious ecosystem where individuals awaken, communities grow in shared awareness, and workplaces evolve into spaces of balance and purpose." },
            { label: "Mission", text: "To integrate inner awareness into everyday life — supporting individuals, empowering communities, and helping organizations build healthier, more conscious environments." },
          ].map((b, i) => (
            <motion.div
              key={b.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.1 }}
              className="card-luxe p-8 md:p-12"
            >
              <div className="eyebrow text-gold mb-4 justify-start">{b.label}</div>
              <p className="font-display text-[20px] md:text-[26px] leading-[1.4] italic font-medium">"{b.text}"</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* WHY US */}
      <section className="px-5 py-24 md:py-32">
        <SectionHeading
          eyebrow="Why Choose Us"
          title={<>Eight quiet <span className="italic text-gold">promises</span></>}
        />
        <div className="mx-auto mt-14 md:mt-20 grid max-w-7xl gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {WHY.map(({ icon: Icon, title, text }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.55, delay: (i % 4) * 0.07 }}
              className="card-luxe p-6 md:p-7 group"
            >
              <div className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[color-mix(in_oklab,var(--gold)_40%,transparent)] bg-[color-mix(in_oklab,var(--gold)_6%,transparent)] transition-colors group-hover:border-[var(--gold)]">
                <Icon size={18} strokeWidth={1.4} className="text-gold" />
              </div>
              <h3 className="mt-4 font-display text-[17px] md:text-lg leading-snug font-medium">{title}</h3>
              <div className="divider-glow w-8 my-2.5" />
              <p className="text-[13.5px] opacity-75 leading-[1.7] font-light">{text}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 md:mt-20 text-center">
          <Link to="/healing-methods" className="btn-primary">
            Explore Healing Methods <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
