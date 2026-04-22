import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Sparkles, Heart, Sprout } from "lucide-react";
import SectionHeading from "../components/SectionHeading";
import ParticleAura from "../components/ParticleAura";
import Mandala from "../components/Mandala";
import { METHODS } from "../lib/methods";

const HERO = "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=2400&q=85";
const HERO_FALLBACK = "https://files.catbox.moe/kixhvl.webp";

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
  const heroRef = useRef<HTMLElement>(null);
  const methodsRef = useRef<HTMLDivElement>(null);
  const darkZoneStart = useRef<HTMLDivElement>(null);
  const darkZoneEnd = useRef<HTMLDivElement>(null);

  // Hero parallax
  const { scrollY } = useScroll();
  const heroBgY = useTransform(scrollY, [0, 800], [0, 200]);
  const heroFgY = useTransform(scrollY, [0, 800], [0, -80]);
  const heroOpacity = useTransform(scrollY, [0, 500], [1, 0]);
  const mandalaY = useTransform(scrollY, [0, 800], [0, -120]);

  // Theme switch on scroll
  useEffect(() => {
    const onScroll = () => {
      const startEl = darkZoneStart.current;
      const endEl = darkZoneEnd.current;
      if (!startEl || !endEl) return;
      const startY = startEl.getBoundingClientRect().top + window.scrollY - window.innerHeight * 0.5;
      const endY = endEl.getBoundingClientRect().top + window.scrollY - window.innerHeight * 0.4;
      const y = window.scrollY;
      if (y >= startY && y <= endY) document.body.classList.add("theme-dark");
      else document.body.classList.remove("theme-dark");
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      document.body.classList.remove("theme-dark");
    };
  }, []);

  // Card mousemove glow
  const handleCardMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty("--mx", `${e.clientX - rect.left}px`);
    e.currentTarget.style.setProperty("--my", `${e.clientY - rect.top}px`);
  };

  const scrollToMethods = () =>
    methodsRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });

  return (
    <>
      {/* ============================== HERO ============================== */}
      <section
        ref={heroRef}
        className="relative flex items-center justify-center overflow-hidden"
        style={{ minHeight: "calc(100vh - var(--nav-h))" }}
      >
        {/* Parallax background */}
        <motion.div className="absolute inset-0" style={{ y: heroBgY, scale: 1.1 }}>
          <img
            src={HERO}
            alt="Misty Himalayan dawn"
            className="h-full w-full object-cover"
            onError={(e) => { (e.currentTarget as HTMLImageElement).src = HERO_FALLBACK; }}
          />
          <div className="absolute inset-0 hero-overlay" />
        </motion.div>

        {/* Aurora glows */}
        <motion.div className="absolute inset-0 pointer-events-none" style={{ y: heroFgY }}>
          <div className="absolute top-1/4 left-1/4 w-[40rem] h-[40rem] rounded-full blur-3xl opacity-40 aurora"
               style={{ background: "radial-gradient(circle, color-mix(in oklab, var(--gold) 50%, transparent), transparent 60%)" }} />
          <div className="absolute bottom-0 right-1/4 w-[36rem] h-[36rem] rounded-full blur-3xl opacity-30 aurora"
               style={{ background: "radial-gradient(circle, color-mix(in oklab, var(--forest) 70%, transparent), transparent 60%)", animationDelay: "-6s" }} />
        </motion.div>

        {/* Floating mandala */}
        <motion.div
          className="absolute right-[-120px] top-[8%] opacity-50 hidden md:block"
          style={{ y: mandalaY }}
        >
          <Mandala size={560} />
        </motion.div>
        <motion.div
          className="absolute left-[-80px] bottom-[8%] opacity-30 hidden md:block"
          style={{ y: mandalaY }}
        >
          <Mandala size={320} spin={false} className="spin-slower" />
        </motion.div>

        {/* Particles */}
        <ParticleAura density={50} color="mixed" />

        {/* Floating Sanskrit symbols */}
        <motion.div
          className="absolute top-[18%] left-[12%] sanskrit text-3xl md:text-5xl pulse-glow hidden sm:block"
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        >ॐ</motion.div>
        <motion.div
          className="absolute bottom-[22%] right-[15%] sanskrit text-2xl md:text-4xl pulse-glow hidden sm:block"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        >☸</motion.div>
        <motion.div
          className="absolute top-[55%] left-[8%] sanskrit text-2xl md:text-3xl pulse-glow hidden md:block"
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        >✦</motion.div>

        {/* Hero content */}
        <motion.div
          style={{ opacity: heroOpacity }}
          className="relative z-10 mx-auto max-w-5xl px-6 text-center text-white"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="eyebrow !text-white/80"
          >
            <span className="text-gold">House of Awakenings</span> · Bangalore
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.7, ease: [0.2, 0.8, 0.2, 1] }}
            className="mt-6 font-display text-[34px] sm:text-5xl md:text-6xl lg:text-7xl leading-[1.05] text-white"
          >
            A sanctuary for<br />
            <span className="shimmer-text italic">deep inner work</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.1 }}
            className="mx-auto mt-6 max-w-2xl text-[14px] md:text-lg leading-[1.8] text-white/85 font-light"
          >
            Where you release, realign, and return to yourself.
            Every experience designed to awaken your natural state of being.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.4 }}
            className="mt-9 flex flex-col sm:flex-row gap-3 justify-center items-center"
          >
            <button onClick={scrollToMethods} className="btn-primary w-full sm:w-auto">
              Begin Your Journey <ArrowRight size={16} />
            </button>
            <button
              onClick={() => navigate({ to: "/about" })}
              className="btn-outline w-full sm:w-auto !border-white/60 !text-white"
            >
              Know Our Story
            </button>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/70 text-[10px] tracking-[0.4em] uppercase flex flex-col items-center gap-2"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2.5, repeat: Infinity }}
        >
          <span>Scroll</span>
          <span className="block h-10 w-px bg-gradient-to-b from-white/70 to-transparent" />
        </motion.div>
      </section>

      {/* ============================== WHO WE ARE ============================== */}
      <div ref={darkZoneStart} />
      <section className="relative px-5 py-20 md:py-32 overflow-hidden">
        <div className="aurora-bg" />
        <div className="relative">
          <SectionHeading
            eyebrow="Who We Are"
            title={<>A space for <span className="italic text-gold">inner healing</span><br />& transformation</>}
            subtitle="Where ancient practices meet modern techniques — guiding you toward balance, clarity, and peace in a fast-moving world."
          />
          <div className="mx-auto mt-12 md:mt-20 grid max-w-5xl gap-5 md:gap-7 md:grid-cols-3">
            {[
              { icon: Sparkles, title: "Ancient × Modern", text: "A thoughtful blend of timeless wisdom and contemporary methods." },
              { icon: Heart, title: "Inner Healing", text: "Designed to address body, mind, and energy as one integrated system." },
              { icon: Sprout, title: "Lasting Growth", text: "Real, embodied transformation — not surface-level wellness." },
            ].map(({ icon: Icon, title, text }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8, delay: i * 0.12, ease: [0.2, 0.8, 0.2, 1] }}
                className="group relative rounded-3xl border border-[color-mix(in_oklab,var(--gold)_15%,var(--border))] bg-card p-7 md:p-9 text-center overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_30px_60px_-20px_color-mix(in_oklab,var(--gold)_25%,transparent)]"
              >
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
                     style={{ background: "radial-gradient(circle at center, color-mix(in oklab, var(--gold) 12%, transparent), transparent 60%)" }} />
                <div className="relative">
                  <div className="mx-auto mb-5 inline-flex h-14 w-14 items-center justify-center rounded-full border border-[color-mix(in_oklab,var(--gold)_40%,transparent)] bg-[color-mix(in_oklab,var(--gold)_8%,transparent)]">
                    <Icon className="text-gold" size={22} strokeWidth={1.4} />
                  </div>
                  <h3 className="font-display text-xl md:text-2xl">{title}</h3>
                  <p className="mt-3 text-[13px] md:text-sm leading-[1.75] opacity-75 font-light">{text}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================== WHO IS THIS FOR ============================== */}
      <section className="relative px-5 py-20 md:py-32"
               style={{ background: "linear-gradient(180deg, transparent, color-mix(in oklab, var(--gold) 4%, transparent), transparent)" }}>
        <SectionHeading
          eyebrow="Who Is This For"
          title={<>If your soul is quietly<br /><span className="italic text-gold">asking for more</span></>}
        />
        <div className="mx-auto mt-12 md:mt-16 grid max-w-5xl gap-4 md:gap-6 grid-cols-1 md:grid-cols-3">
          {[
            "People dealing with stress & anxiety",
            "Individuals seeking healing & growth",
            "Beginners in mindfulness & spirituality",
          ].map((t, i) => (
            <motion.div
              key={t}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.1 }}
              className="group relative rounded-2xl border border-[color-mix(in_oklab,var(--gold)_18%,var(--border))] px-6 py-8 md:py-10 text-center backdrop-blur-sm bg-card/60 transition-all duration-500 hover:border-[var(--gold)]"
            >
              <div className="font-display text-3xl md:text-4xl mb-2 text-gold">0{i + 1}</div>
              <div className="divider-glow w-12 mx-auto mb-3" />
              <p className="text-[13px] md:text-sm opacity-85 font-light leading-[1.7]">{t}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ============================== HEALING METHODS ============================== */}
      <section ref={methodsRef} className="relative px-5 py-20 md:py-32 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.06] pointer-events-none">
          <Mandala size={900} />
        </div>
        <div className="relative">
          <SectionHeading
            eyebrow="Healing Methods"
            title={<>Pathways back to <span className="italic text-gold">wholeness</span></>}
            subtitle="Six sacred practices, each a doorway to a different layer of your being."
          />
          <div className="mx-auto mt-12 md:mt-20 grid max-w-7xl gap-5 md:gap-7 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {METHODS.map((m, i) => (
              <motion.div
                key={m.id}
                onMouseMove={handleCardMove}
                initial={{ opacity: 0, y: 50, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.8, delay: (i % 3) * 0.12, ease: [0.2, 0.8, 0.2, 1] }}
                className="method-card group relative overflow-hidden rounded-3xl"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={m.image}
                    alt={m.name}
                    className="card-img h-full w-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-90" />
                  <span className="shine" />
                  <div className="absolute top-4 left-4 rounded-full glass-dark px-3 py-1 text-[10px] tracking-[0.25em] uppercase text-[var(--gold)]">
                    0{i + 1}
                  </div>
                  <div className="absolute bottom-4 left-5 right-5 text-white">
                    <h3 className="font-display text-xl md:text-2xl drop-shadow-lg">{m.name}</h3>
                  </div>
                </div>
                <div className="relative p-6 md:p-7">
                  <p className="text-[13px] md:text-sm opacity-80 leading-[1.7] font-light min-h-[3rem]">{m.short}</p>
                  <Link
                    to="/healing-methods"
                    hash={m.id}
                    className="mt-5 inline-flex items-center gap-2 text-[13px] font-medium uppercase tracking-[0.2em] text-gold group/link"
                  >
                    <span className="relative">
                      Explore
                      <span className="absolute left-0 -bottom-0.5 h-px w-0 bg-[var(--gold)] transition-all duration-500 group-hover/link:w-full" />
                    </span>
                    <ArrowRight size={14} className="transition-transform duration-500 group-hover/link:translate-x-2" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================== QUOTE / CTA ============================== */}
      <div ref={darkZoneEnd} />
      <section className="relative px-5 py-24 md:py-40 text-center overflow-hidden">
        <div className="aurora-bg opacity-50" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.08] pointer-events-none">
          <Mandala size={520} />
        </div>
        <div className="relative">
          <div className="sanskrit text-2xl md:text-3xl mb-6">॥ शान्ति ॥</div>
          <motion.blockquote
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="mx-auto max-w-4xl font-display text-2xl md:text-4xl lg:text-5xl leading-[1.3] italic px-2"
          >
            "When the body softens, the mind quiets.<br />
            <span className="text-gold">When the mind quiets, the soul speaks.</span>"
          </motion.blockquote>
          <div className="mt-10 md:mt-12 flex flex-col sm:flex-row gap-3 justify-center items-center">
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
