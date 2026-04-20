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
      <section className="px-6 pt-36 pb-12 md:pt-44 text-center">
        <div className="eyebrow mb-4">About</div>
        <h1 className="font-display text-4xl md:text-6xl">Gunja Tolani</h1>
        <p className="mt-3 opacity-70 italic">Founder · House of Awakenings</p>
      </section>

      <section className="px-6 py-12 md:py-20">
        <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-[1fr_1.4fr] items-start">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
            className="md:sticky md:top-28"
          >
            <div className="overflow-hidden rounded-3xl">
              <img src={FOUNDER} alt="Gunja Tolani" className="w-full object-cover" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.1 }}
            className="space-y-5 text-base md:text-[17px] leading-[1.8] opacity-90 font-sans"
          >
            <p>Gunja Tolani is the founder of House of Awakenings—a space born not just from knowledge, but from lived transformation.</p>
            <p>With a background in Mechanical Engineering and an MBA in Operations and Finance from IIM Calcutta, Gunja began her journey in the corporate world, building a decade-long career with globally respected organizations such as Cummins, Whirlpool, and Gap. Her years in these high-performance environments shaped her discipline, perspective, and understanding of modern-day stress, ambition, and imbalance.</p>
            <p>Yet, beneath professional success, there was a deeper calling.</p>
            <p>What began as a personal exploration to address physical fatigue, mental overwhelm, and emotional disconnect gradually unfolded into a profound inner journey. Through consistent practice and self-inquiry, Gunja experienced a complete shift—not just in her health, but in how she related to herself and life.</p>
            <p className="font-display text-xl italic text-primary">This transformation became the turning point.</p>
            <p>Choosing to step away from a conventional career path, she immersed herself fully in the world of holistic wellness. Over the years, she has undergone extensive training across multiple disciplines, including advanced yoga studies (TTC, PGD in Yoga Therapy), and certifications in modalities such as breath-led practices, cold immersion therapy, sound healing, and EFT. Each learning has not just been acquired, but embodied—deepening her ability to hold space with authenticity and depth.</p>
            <p>House of Awakenings is a reflection of this journey.</p>
            <p>It is not built on trends or surface-level wellness, but on the understanding that true change happens when the body, mind, and energy are addressed together. Through thoughtfully curated experiences, Gunja now guides individuals, communities, and organizations to move beyond burnout and disconnection—toward resilience, clarity, and conscious living.</p>
            <p className="font-display text-xl italic">Her work is simple yet powerful: to help you pause, reconnect, and awaken to your truest self.</p>
          </motion.div>
        </div>
      </section>

      {/* VISION & MISSION */}
      <section className="px-6 py-24 md:py-32 bg-[color-mix(in_oklab,var(--cream)_60%,transparent)]">
        <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-2">
          {[
            { label: "Vision", text: "To build a conscious ecosystem where individuals awaken to their true selves, communities grow in shared awareness, and workplaces evolve into spaces of balance, purpose, and growth." },
            { label: "Mission", text: "From personal wellbeing to collective culture, our mission is to integrate inner awareness into everyday life—supporting individuals, empowering communities, and helping organizations build healthier, more conscious environments." },
          ].map((b, i) => (
            <motion.div
              key={b.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.1 }}
              className="rounded-3xl bg-card p-10 border border-border/40"
            >
              <div className="eyebrow text-primary">{b.label}</div>
              <p className="mt-5 font-display text-2xl leading-[1.4]">{b.text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* WHY US */}
      <section className="px-6 py-24 md:py-32">
        <SectionHeading eyebrow="Why Choose Us" title="Eight quiet promises." />
        <div className="mx-auto mt-16 grid max-w-7xl gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {WHY.map(({ icon: Icon, title, text }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: (i % 4) * 0.08 }}
              className="rounded-2xl border border-border/50 bg-card p-7"
            >
              <Icon size={26} strokeWidth={1.5} className="text-primary" />
              <h3 className="mt-5 font-display text-lg leading-snug">{title}</h3>
              <p className="mt-3 text-sm opacity-75 leading-relaxed">{text}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Link to="/healing-methods" className="btn-primary">
            Explore Our Healing Methods <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </>
  );
}
