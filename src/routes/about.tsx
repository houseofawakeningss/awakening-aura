import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight, Layers, Sparkles, Mountain, Shield, BookOpen, Compass, Users, LifeBuoy } from "lucide-react";
import SectionHeading from "../components/SectionHeading";

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
  { icon: Layers, title: "Holistic, Not Fragmented", text: "We work with your body, mind, and energy as one integrated system." },
  { icon: Sparkles, title: "Experience-Led, Not Just Taught", text: "We create experiences that you can feel and embody." },
  { icon: Mountain, title: "Depth Over Quick Fixes", text: "Our focus is on lasting inner shifts, not temporary relief." },
  { icon: Shield, title: "Safe & Intentional Spaces", text: "You feel held, supported, and seen — always." },
  { icon: BookOpen, title: "Rooted in Wisdom, Relevant to Today", text: "A blend of ancient teachings and modern science." },
  { icon: Compass, title: "Builds Real Resilience", text: "Learn to regulate yourself and navigate life with clarity." },
  { icon: Users, title: "Personal Yet Collective", text: "Your individual journey, held within a like-minded community." },
  { icon: LifeBuoy, title: "Designed for Real Life Integration", text: "Transforms how you live, work, and relate every day." },
];

function AboutPage() {
  return (
    <>
      <section className="px-5 pt-28 pb-8 md:pt-44 text-center">
        <div className="eyebrow mb-3">About</div>
        <h1 className="font-display text-[28px] sm:text-4xl md:text-6xl">Gunja Tolani</h1>
        <p className="mt-2 text-sm opacity-70 italic">Founder · House of Awakenings</p>
      </section>

      <section className="px-5 py-8 md:py-20">
        <div className="mx-auto grid max-w-6xl gap-8 md:gap-12 grid-cols-1 md:grid-cols-[1fr_1.4fr] items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="md:sticky md:top-28 max-w-sm mx-auto md:max-w-none"
          >
            <div className="overflow-hidden rounded-2xl md:rounded-3xl">
              <img src={FOUNDER} alt="Gunja Tolani" className="w-full object-cover" loading="lazy" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="space-y-4 text-[14px] md:text-[17px] leading-[1.7] md:leading-[1.8] opacity-90 font-sans"
          >
            <p>Gunja Tolani is the founder of House of Awakenings—a space born not just from knowledge, but from lived transformation.</p>
            <p>With a background in Mechanical Engineering and an MBA from IIM Calcutta, Gunja built a decade-long career with global organizations like Cummins, Whirlpool, and Gap — shaping her understanding of modern stress and imbalance.</p>
            <p>Yet beneath professional success, there was a deeper calling.</p>
            <p>What began as a personal exploration to address fatigue and emotional disconnect unfolded into a profound inner journey — a complete shift in how she related to herself and life.</p>
            <p className="font-display text-lg md:text-xl italic text-primary">This transformation became the turning point.</p>
            <p>She stepped away from the corporate path and immersed herself in holistic wellness — training in advanced yoga (TTC, PGD in Yoga Therapy), breathwork, cold immersion, sound healing, and EFT. Each modality not just learned, but embodied.</p>
            <p>House of Awakenings is a reflection of this journey — built on the understanding that true change happens when body, mind, and energy are addressed together.</p>
            <p className="font-display text-lg md:text-xl italic">Her work is simple yet powerful: to help you pause, reconnect, and awaken to your truest self.</p>
          </motion.div>
        </div>
      </section>

      {/* VISION & MISSION */}
      <section className="px-5 py-16 md:py-32 bg-[color-mix(in_oklab,var(--cream)_60%,transparent)]">
        <div className="mx-auto grid max-w-6xl gap-5 md:gap-8 grid-cols-1 md:grid-cols-2">
          {[
            { label: "Vision", text: "A conscious ecosystem where individuals awaken, communities grow in shared awareness, and workplaces evolve into spaces of balance and purpose." },
            { label: "Mission", text: "To integrate inner awareness into everyday life — supporting individuals, empowering communities, and helping organizations build healthier, more conscious environments." },
          ].map((b, i) => (
            <motion.div
              key={b.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="rounded-2xl md:rounded-3xl bg-card p-6 md:p-10 border border-border/40"
            >
              <div className="eyebrow text-primary">{b.label}</div>
              <p className="mt-4 font-display text-lg md:text-2xl leading-[1.4]">{b.text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* WHY US */}
      <section className="px-5 py-16 md:py-32">
        <SectionHeading eyebrow="Why Choose Us" title="Eight quiet promises." />
        <div className="mx-auto mt-10 md:mt-16 grid max-w-7xl gap-4 md:gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {WHY.map(({ icon: Icon, title, text }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: (i % 4) * 0.06 }}
              className="rounded-2xl border border-border/50 bg-card p-5 md:p-7"
            >
              <Icon size={24} strokeWidth={1.5} className="text-primary" />
              <h3 className="mt-4 font-display text-base md:text-lg leading-snug">{title}</h3>
              <p className="mt-2 text-[13px] md:text-sm opacity-75 leading-relaxed">{text}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 md:mt-16 text-center">
          <Link to="/healing-methods" className="btn-primary">
            Explore Healing Methods <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
