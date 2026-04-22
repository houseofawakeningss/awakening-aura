import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight, User, Users, Sparkles, Building2, Landmark, Mountain } from "lucide-react";
import SectionHeading from "../components/SectionHeading";
import PageHero from "../components/PageHero";
import Mandala from "../components/Mandala";

export const Route = createFileRoute("/offerings")({
  head: () => ({
    meta: [
      { title: "Our Offerings — 1:1, Group, Workshops, Corporate & Retreats" },
      { name: "description", content: "Personal sessions, group classes, workshops, corporate wellness, institutional programs and retreats with House of Awakenings." },
      { property: "og:title", content: "Our Offerings — House of Awakenings" },
      { property: "og:description", content: "Choose how you'd like to begin." },
    ],
  }),
  component: OfferingsPage,
});

const OFFERINGS = [
  { icon: User, title: "1:1 Sessions", text: "Deeply personalized journeys held in a private, sacred container.", symbol: "✦" },
  { icon: Users, title: "Group Classes", text: "Weekly yoga, breathwork, and meditation in shared community.", symbol: "❋" },
  { icon: Sparkles, title: "Workshops", text: "Half-day & full-day deep dives into specific modalities.", symbol: "✸" },
  { icon: Building2, title: "Corporate Wellness", text: "Programs that bring resilience and presence into workplaces.", symbol: "❉" },
  { icon: Landmark, title: "Institutional", text: "Tailored programs for organizations embedding wellbeing.", symbol: "᳚" },
  { icon: Mountain, title: "Retreats", text: "Multi-day getaways in nature — to reset, restore, remember.", symbol: "↟" },
];

function OfferingsPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Offerings"
        title={<>Choose your <span className="italic text-gold">way in</span></>}
        subtitle="From private one-on-one journeys to immersive retreats — each held with the same intention."
        ornament="✦ ॐ ✦"
      />

      <section className="relative px-5 py-16 md:py-24 overflow-hidden bg-paper">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.05] pointer-events-none">
          <Mandala size={760} />
        </div>
        <div className="relative mx-auto grid max-w-7xl gap-5 md:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {OFFERINGS.map(({ icon: Icon, title, text, symbol }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: (i % 3) * 0.08 }}
              className="card-luxe group p-8 md:p-10 overflow-hidden"
            >
              <div className="absolute -bottom-16 -right-16 opacity-[0.05] group-hover:opacity-[0.12] transition-opacity duration-700 pointer-events-none">
                <Mandala size={220} />
              </div>
              <div className="relative">
                <div className="flex items-center justify-between">
                  <span className="font-display italic text-gold text-sm tracking-[0.2em]">0{i + 1}</span>
                  <span className="sanskrit text-xl opacity-70">{symbol}</span>
                </div>
                <div className="mt-6 inline-flex h-14 w-14 items-center justify-center rounded-full border border-[color-mix(in_oklab,var(--gold)_45%,transparent)] bg-[color-mix(in_oklab,var(--gold)_8%,transparent)] transition-colors duration-500 group-hover:border-[var(--gold)]">
                  <Icon size={22} strokeWidth={1.3} className="text-gold" />
                </div>
                <h3 className="mt-6 font-display text-[22px] md:text-[26px] font-medium leading-tight">{title}</h3>
                <div className="divider-glow w-10 my-3" />
                <p className="text-[14px] leading-[1.75] opacity-75 font-light">{text}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="relative px-5 py-24 md:py-32 text-center overflow-hidden">
        <div className="aurora-bg opacity-40" />
        <div className="relative">
          <SectionHeading
            title={<>Hear from those who've <span className="italic text-gold">walked this path</span></>}
            subtitle="Real stories of release, resilience and return."
          />
          <div className="mt-10">
            <Link to="/impact" className="btn-primary">
              See Real Experiences <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
