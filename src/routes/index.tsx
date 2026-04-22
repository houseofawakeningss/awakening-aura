import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useRef } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Heart, Sprout, Flame, Wind, Waves, Snowflake, Activity, Leaf } from "lucide-react";
import SectionHeading from "../components/SectionHeading";
import ParticleAura from "../components/ParticleAura";
import Mandala from "../components/Mandala";

const HERO = "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=2400&q=85";
const HERO_FALLBACK = "https://files.catbox.moe/kixhvl.webp";

const METHOD_CARDS = [
  { id: "yoga", name: "Yoga", short: "A movement of breath and body returning you home.", icon: Leaf, symbol: "ॐ" },
  { id: "sound-healing", name: "Sound Healing", short: "Vibrations that restore the body's natural symphony.", icon: Waves, symbol: "᳚" },
  { id: "chakra-healing", name: "Chakra Healing", short: "Realign your energy centers, reclaim your wholeness.", icon: Flame, symbol: "✸" },
  { id: "ice-bath", name: "Ice Bath", short: "Meet the cold, meet yourself — fully present, alive.", icon: Snowflake, symbol: "❉" },
  { id: "breathwork", name: "Breathwork", short: "The bridge between body, mind, and soul.", icon: Wind, symbol: "↟" },
  { id: "eft", name: "EFT Tapping", short: "Release the emotional weight you no longer need.", icon: Activity, symbol: "✦" },
] as const;

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "House of Awakenings — A Sanctuary for Inner Healing | Bangalore" },
      { name: "description", content: "Yoga, sound healing, breathwork, ice baths, chakra healing & EFT. A premium spiritual wellness sanctuary in Bangalore by Gunja Tolani." },
      { property: "og:title", content: "House of Awakenings — A Sanctuary for Inner Healing" },
      { property: "og:description", content: "Release, realign, return to yourself." },
      { property: "og:image", content: HERO_FALLBACK },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  const navigate = useNavigate();
  const methodsRef = useRef<HTMLDivElement>(null);

  const scrollToMethods = () =>
    methodsRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });

  return (
    <>
      {/* ============================== HERO ============================== */}
      <section
        className="relative flex items-center justify-center overflow-hidden"
        style={{ minHeight: "calc(100vh - var(--nav-h))" }}
      >
        {/* Background image — pure CSS, no scroll-tied JS */}
        <div className="absolute inset-0">
          <img
            src={HERO}
            alt="Misty Himalayan dawn"
            className="h-full w-full object-cover"
            onError={(e) => { (e.currentTarget as HTMLImageElement).src = HERO_FALLBACK; }}
          />
          <div className="absolute inset-0 hero-overlay" />
        </div>

        {/* Aurora glows (CSS only) */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-[36rem] h-[36rem] rounded-full blur-3xl opacity-35 aurora"
               style={{ background: "radial-gradient(circle, color-mix(in oklab, var(--gold) 50%, transparent), transparent 65%)" }} />
          <div className="absolute bottom-0 right-1/4 w-[32rem] h-[32rem] rounded-full blur-3xl opacity-25"
               style={{ background: "radial-gradient(circle, color-mix(in oklab, var(--forest) 70%, transparent), transparent 65%)" }} />
        </div>

        {/* Mandala — CSS spin only */}
        <div className="absolute right-[-140px] top-[10%] opacity-40 hidden md:block">
          <Mandala size={520} />
        </div>
        <div className="absolute left-[-100px] bottom-[8%] opacity-25 hidden md:block">
          <Mandala size={300} spin={false} className="spin-slower" />
        </div>

        <ParticleAura density={20} color="mixed" />

        {/* Floating Sanskrit accents (CSS animation) */}
        <span className="absolute top-[18%] left-[12%] sanskrit text-3xl md:text-5xl pulse-glow hidden sm:block">ॐ</span>
        <span className="absolute bottom-[22%] right-[15%] sanskrit text-2xl md:text-4xl pulse-glow hidden sm:block" style={{ animationDelay: "1.5s" }}>☸</span>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.2, 0.8, 0.2, 1] }}
          className="relative z-10 mx-auto max-w-5xl px-6 text-center text-white"
        >
          <div className="eyebrow !text-white/85 justify-center">
            <span className="text-gold">House of Awakenings</span> · Bangalore
          </div>

          <h1 className="mt-6 font-display text-[36px] sm:text-5xl md:text-7xl lg:text-[88px] leading-[1.02] text-white">
            A sanctuary for<br />
            <span className="shimmer-text italic font-medium">deep inner work</span>
          </h1>

          <p className="mx-auto mt-7 max-w-2xl text-[15px] md:text-lg leading-[1.8] text-white/85 font-light">
            Where you release, realign, and return to yourself.
            Every experience designed to awaken your natural state of being.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-3 justify-center items-center">
            <button onClick={scrollToMethods} className="btn-primary w-full sm:w-auto">
              Begin Your Journey <ArrowRight size={16} />
            </button>
            <button
              onClick={() => navigate({ to: "/about" })}
              className="btn-outline w-full sm:w-auto !border-white/60 !text-white"
            >
              Know Our Story
            </button>
          </div>
        </motion.div>

        {/* Scroll hint */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/70 text-[10px] tracking-[0.45em] uppercase flex flex-col items-center gap-2">
          <span>Scroll</span>
          <span className="block h-10 w-px bg-gradient-to-b from-white/70 to-transparent" />
        </div>
      </section>

      {/* ============================== WHO WE ARE ============================== */}
      <section className="relative px-5 py-24 md:py-36 overflow-hidden bg-paper">
        <div className="aurora-bg" />
        <div className="relative">
          <SectionHeading
            eyebrow="Who We Are"
            title={<>A space for <span className="italic text-gold">inner healing</span><br />& transformation</>}
            subtitle="Where ancient practices meet modern techniques — guiding you toward balance, clarity, and peace in a fast-moving world."
          />
          <div className="mx-auto mt-14 md:mt-20 grid max-w-5xl gap-5 md:gap-7 md:grid-cols-3">
            {[
              { icon: Sparkles, title: "Ancient × Modern", text: "A thoughtful blend of timeless wisdom and contemporary methods." },
              { icon: Heart, title: "Inner Healing", text: "We address body, mind, and energy as one integrated system." },
              { icon: Sprout, title: "Lasting Growth", text: "Real, embodied transformation — not surface wellness." },
            ].map(({ icon: Icon, title, text }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.7, delay: i * 0.1, ease: [0.2, 0.8, 0.2, 1] }}
                className="card-luxe p-8 md:p-10 text-center"
              >
                <div className="mx-auto mb-5 inline-flex h-14 w-14 items-center justify-center rounded-full border border-[color-mix(in_oklab,var(--gold)_45%,transparent)] bg-[color-mix(in_oklab,var(--gold)_8%,transparent)]">
                  <Icon className="text-gold" size={22} strokeWidth={1.4} />
                </div>
                <h3 className="font-display text-xl md:text-2xl font-medium">{title}</h3>
                <div className="divider-glow w-10 mx-auto my-3" />
                <p className="text-[14px] leading-[1.75] opacity-75 font-light">{text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================== WHO IS THIS FOR ============================== */}
      <section className="relative px-5 py-24 md:py-32">
        <SectionHeading
          eyebrow="Who Is This For"
          title={<>If your soul is quietly<br /><span className="italic text-gold">asking for more</span></>}
        />
        <div className="mx-auto mt-14 md:mt-16 grid max-w-5xl gap-4 md:gap-6 grid-cols-1 md:grid-cols-3">
          {[
            "People dealing with stress & anxiety",
            "Individuals seeking healing & growth",
            "Beginners in mindfulness & spirituality",
          ].map((t, i) => (
            <motion.div
              key={t}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="card-luxe px-7 py-9 md:py-10 text-center"
            >
              <div className="num-ring mx-auto mb-4">{i + 1}</div>
              <p className="text-[14px] md:text-[15px] opacity-85 font-light leading-[1.7]">{t}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ============================== HEALING METHODS ============================== */}
      <section ref={methodsRef} className="relative px-5 py-24 md:py-36 overflow-hidden bg-paper">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.05] pointer-events-none">
          <Mandala size={780} />
        </div>
        <div className="relative">
          <SectionHeading
            eyebrow="Healing Methods"
            title={<>Six pathways back to <span className="italic text-gold">wholeness</span></>}
            subtitle="Each practice a doorway to a different layer of your being."
          />
          <div className="mx-auto mt-14 md:mt-20 grid max-w-7xl gap-5 md:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {METHOD_CARDS.map((m, i) => {
              const Icon = m.icon;
              return (
                <motion.div
                  key={m.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.7, delay: (i % 3) * 0.1, ease: [0.2, 0.8, 0.2, 1] }}
                  className="card-luxe group relative p-8 md:p-10 overflow-hidden"
                >
                  {/* subtle mandala backdrop in card */}
                  <div className="absolute -right-12 -bottom-12 opacity-[0.06] pointer-events-none transition-opacity duration-700 group-hover:opacity-[0.12]">
                    <Mandala size={240} />
                  </div>

                  <div className="relative">
                    <div className="flex items-center justify-between">
                      <span className="font-display italic text-gold text-sm tracking-[0.2em]">0{i + 1}</span>
                      <span className="sanskrit text-2xl opacity-70">{m.symbol}</span>
                    </div>

                    <div className="mt-6 inline-flex h-14 w-14 items-center justify-center rounded-full border border-[color-mix(in_oklab,var(--gold)_45%,transparent)] bg-[color-mix(in_oklab,var(--gold)_8%,transparent)] transition-all duration-500 group-hover:border-[var(--gold)] group-hover:bg-[color-mix(in_oklab,var(--gold)_14%,transparent)]">
                      <Icon className="text-gold" size={22} strokeWidth={1.3} />
                    </div>

                    <h3 className="mt-6 font-display text-2xl md:text-3xl font-medium leading-tight transition-colors group-hover:text-gold">
                      {m.name}
                    </h3>
                    <div className="divider-glow w-10 my-4" />
                    <p className="text-[14px] opacity-75 leading-[1.75] font-light min-h-[3.5rem]">{m.short}</p>

                    <Link
                      to="/healing-methods"
                      hash={m.id}
                      className="mt-6 inline-flex items-center gap-2 text-[12px] font-medium uppercase tracking-[0.25em] text-gold link-gold"
                    >
                      Explore
                      <ArrowRight size={14} className="transition-transform duration-500 group-hover:translate-x-1.5" />
                    </Link>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ============================== QUOTE / CTA ============================== */}
      <section className="relative px-5 py-28 md:py-40 text-center overflow-hidden">
        <div className="aurora-bg opacity-50" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.07] pointer-events-none">
          <Mandala size={520} />
        </div>
        <div className="relative">
          <div className="sanskrit text-2xl md:text-3xl mb-6">॥ शान्ति ॥</div>
          <motion.blockquote
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
            className="mx-auto max-w-4xl font-display text-[26px] md:text-4xl lg:text-5xl leading-[1.3] italic px-2 font-medium"
          >
            "When the body softens, the mind quiets.<br />
            <span className="text-gold">When the mind quiets, the soul speaks.</span>"
          </motion.blockquote>
          <div className="mt-12 flex flex-col sm:flex-row gap-3 justify-center items-center">
            <Link to="/about" className="btn-primary">
              Know Our Story <ArrowRight size={16} />
            </Link>
            <Link to="/contact" className="btn-outline">
              Begin a Conversation
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
