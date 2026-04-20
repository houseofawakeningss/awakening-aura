import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight, User, Users, Sparkles, Building2, Landmark, Mountain } from "lucide-react";
import SectionHeading from "../components/SectionHeading";

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
  { icon: User, title: "1:1 Sessions", text: "Deeply personalized journeys held in a private, sacred container — for those who want focused transformation." },
  { icon: Users, title: "Group Classes", text: "Weekly yoga, breathwork, and meditation in a community of like-minded seekers." },
  { icon: Sparkles, title: "Workshops & Immersions", text: "Half-day and full-day deep dives into specific modalities and themes." },
  { icon: Building2, title: "Corporate Wellness", text: "Curated programs that bring resilience, clarity, and presence into your workplace." },
  { icon: Landmark, title: "Government & Institutional", text: "Tailored programs for institutions ready to embed wellbeing into their culture." },
  { icon: Mountain, title: "Retreats & Events", text: "Multi-day getaways in nature — designed to reset, restore, and remember." },
];

function OfferingsPage() {
  return (
    <>
      <section className="px-6 pt-36 pb-12 md:pt-44 text-center">
        <div className="eyebrow mb-4">Our Offerings</div>
        <h1 className="font-display text-4xl md:text-6xl leading-[1.1]">Choose your way in.</h1>
        <p className="mx-auto mt-6 max-w-2xl opacity-75">
          From private one-on-one journeys to immersive retreats — each offering is held with the same intention: to bring you home to yourself.
        </p>
      </section>

      <section className="px-6 py-16 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {OFFERINGS.map(({ icon: Icon, title, text }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, delay: (i % 3) * 0.1 }}
              className="group relative overflow-hidden rounded-3xl border border-border/50 bg-card p-9 transition hover:border-primary/40 hover:shadow-[0_30px_60px_-30px_rgba(10,61,51,0.25)]"
            >
              <Icon size={30} strokeWidth={1.4} className="text-primary" />
              <h3 className="mt-6 font-display text-2xl">{title}</h3>
              <p className="mt-4 text-sm md:text-base leading-relaxed opacity-80">{text}</p>
              <div className="absolute -bottom-12 -right-12 h-40 w-40 rounded-full bg-accent/10 transition group-hover:scale-150" />
            </motion.div>
          ))}
        </div>
      </section>

      <section className="px-6 py-24 text-center">
        <SectionHeading
          title="Hear from those who've walked this path."
          subtitle="Real stories of release, resilience and return."
        />
        <div className="mt-10">
          <Link to="/impact" className="btn-primary">
            See Real Experiences <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </>
  );
}
