import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Heart, Sprout } from "lucide-react";
import SectionHeading from "../components/SectionHeading";
import { METHODS } from "../lib/methods";

const HERO = "https://files.catbox.moe/kixhvl.webp";
const LOGO = "https://files.catbox.moe/5j42wr.webp";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "House of Awakenings — A Sanctuary for Inner Healing | Bangalore" },
      { name: "description", content: "Yoga, sound healing, breathwork, ice baths, chakra healing & EFT. A premium spiritual wellness space in Bangalore by Gunja Tolani." },
      { property: "og:title", content: "House of Awakenings — A Sanctuary for Inner Healing" },
      { property: "og:description", content: "Release, realign, return to yourself." },
      { property: "og:image", content: HERO },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  const navigate = useNavigate();
  const methodsRef = useRef<HTMLDivElement>(null);
  const darkZoneStart = useRef<HTMLDivElement>(null);
  const darkZoneEnd = useRef<HTMLDivElement>(null);

  // Scroll-triggered light <-> dark theme on home page
  useEffect(() => {
    const onScroll = () => {
      const startEl = darkZoneStart.current;
      const endEl = darkZoneEnd.current;
      if (!startEl || !endEl) return;
      const startY = startEl.getBoundingClientRect().top + window.scrollY - window.innerHeight * 0.4;
      const endY = endEl.getBoundingClientRect().top + window.scrollY - window.innerHeight * 0.4;
      const y = window.scrollY;
      if (y >= startY && y <= endY) {
        document.body.classList.add("theme-dark");
      } else {
        document.body.classList.remove("theme-dark");
      }
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      document.body.classList.remove("theme-dark");
    };
  }, []);

  const scrollToMethods = () => {
    methodsRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <>
      {/* HERO */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <motion.div
          className="absolute inset-0"
          initial={{ scale: 1.15 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2.4, ease: [0.4, 0, 0.2, 1] }}
        >
          <img src={HERO} alt="" className="h-full w-full object-cover" />
          <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, rgba(0,0,0,0.35) 0%, rgba(10,61,51,0.55) 100%)" }} />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 1.6 }}
          className="relative z-10 mx-auto max-w-4xl px-6 text-center text-white"
        >
          <img src={LOGO} alt="House of Awakenings" className="mx-auto h-24 w-24 rounded-full object-cover ring-1 ring-white/30 shadow-2xl" />
          <div className="eyebrow mt-8 text-white/80">House of Awakenings · Bangalore</div>
          <h1 className="mt-6 font-display text-3xl md:text-5xl lg:text-6xl leading-[1.15] text-white">
            A sanctuary for deep inner work,<br className="hidden md:block" />
            <span className="italic opacity-90">where you release, realign, and return to yourself.</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base md:text-lg leading-relaxed text-white/85">
            Every experience is designed to restore balance and awaken your natural state of being.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <button onClick={scrollToMethods} className="btn-primary">
              Begin Your Journey <ArrowRight size={18} />
            </button>
            <button onClick={() => navigate({ to: "/about" })} className="btn-outline border-white text-white hover:bg-white hover:text-[var(--forest)]">
              Know Our Story
            </button>
          </div>
        </motion.div>

        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/70 text-xs tracking-[0.3em] uppercase"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2.5, repeat: Infinity }}
        >
          Scroll
        </motion.div>
      </section>

      {/* WHO WE ARE */}
      <div ref={darkZoneStart} />
      <section className="px-6 py-24 md:py-32">
        <SectionHeading
          eyebrow="Who We Are"
          title={<>A space for inner healing<br />& transformation.</>}
          subtitle="House of Awakenings is a space where ancient practices meet modern techniques — helping individuals find balance, clarity, and peace in a fast-moving world."
        />
        <div className="mx-auto mt-16 grid max-w-5xl gap-6 md:grid-cols-3">
          {[
            { icon: Sparkles, title: "Ancient × Modern", text: "A thoughtful blend of timeless wisdom and contemporary methods." },
            { icon: Heart, title: "Inner Healing", text: "Designed to address body, mind, and energy as one integrated system." },
            { icon: Sprout, title: "Lasting Growth", text: "Real, embodied transformation — not surface-level wellness." },
          ].map(({ icon: Icon, title, text }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.1 }}
              className="rounded-2xl border border-border/50 bg-card p-8 text-center"
            >
              <Icon className="mx-auto mb-5 text-primary" size={28} strokeWidth={1.5} />
              <h3 className="font-display text-xl">{title}</h3>
              <p className="mt-3 text-sm leading-relaxed opacity-75">{text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* WHO IS THIS FOR */}
      <section className="px-6 py-24 md:py-32 bg-[color-mix(in_oklab,var(--cream)_60%,transparent)]">
        <SectionHeading
          eyebrow="Who Is This For"
          title="If your soul is quietly asking for more."
        />
        <div className="mx-auto mt-14 grid max-w-4xl gap-4 md:grid-cols-3">
          {[
            "People dealing with stress & anxiety",
            "Individuals seeking healing & growth",
            "Beginners in mindfulness & spirituality",
          ].map((t, i) => (
            <motion.div
              key={t}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="rounded-2xl border border-border/40 px-6 py-8 text-center"
            >
              <div className="font-display text-2xl mb-2">0{i + 1}</div>
              <p className="text-sm opacity-80">{t}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* HEALING METHODS PREVIEW */}
      <section ref={methodsRef} className="px-6 py-24 md:py-32">
        <SectionHeading
          eyebrow="Healing Methods"
          title="Pathways back to wholeness."
          subtitle="Six sacred practices, each a doorway to a different layer of your being."
        />
        <div className="mx-auto mt-16 grid max-w-7xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {METHODS.map((m, i) => (
            <motion.div
              key={m.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, delay: (i % 3) * 0.1 }}
              className="group overflow-hidden rounded-2xl border border-border/50 bg-card"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={m.image}
                  alt={m.name}
                  className="h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-110"
                  loading="lazy"
                />
              </div>
              <div className="p-7">
                <h3 className="font-display text-2xl">{m.name}</h3>
                <p className="mt-3 text-sm opacity-75 leading-relaxed">{m.short}</p>
                <Link
                  to="/healing-methods"
                  hash={m.id}
                  className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-primary group/link"
                >
                  Learn More
                  <ArrowRight size={16} className="transition-transform group-hover/link:translate-x-1" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* IMPACT TEASER -> transitions back to light */}
      <div ref={darkZoneEnd} />
      <section className="px-6 py-28 md:py-36 text-center">
        <motion.blockquote
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="mx-auto max-w-3xl font-display text-2xl md:text-4xl leading-[1.3] italic"
        >
          "When the body softens, the mind quiets. When the mind quiets, the soul speaks."
        </motion.blockquote>
        <div className="mt-10">
          <Link to="/about" className="btn-primary">
            Know Our Story <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </>
  );
}
