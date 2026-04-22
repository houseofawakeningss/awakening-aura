import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { motion } from "framer-motion";
import { Instagram, MessageCircle, MapPin, ArrowRight, Mail, Phone } from "lucide-react";
import PageHero from "../components/PageHero";
import Mandala from "../components/Mandala";

const WA_PREFILL = "https://wa.me/919113216212?text=Hi%20House%20of%20Awakenings%2C%20I%27d%20like%20to%20begin%20my%20healing%20journey.%20Please%20share%20more%20details.";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Begin Your Journey | House of Awakenings" },
      { name: "description", content: "Reach House of Awakenings on WhatsApp, Instagram or via the form. Bangalore, India." },
      { property: "og:title", content: "Contact — House of Awakenings" },
      { property: "og:description", content: "Start your healing journey today." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title={<>Let's <span className="italic text-gold">begin</span></>}
        subtitle="Reach out on the channel that feels easiest. We respond personally."
        ornament="✦ संपर्क ✦"
      />

      <section className="px-5 py-12 md:py-16">
        <div className="mx-auto grid max-w-6xl gap-4 md:gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {[
            { icon: MessageCircle, label: "WhatsApp", value: "+91 91132 16212", href: WA_PREFILL },
            { icon: Instagram, label: "Instagram", value: "@houseofawakenings", href: "https://instagram.com" },
            { icon: Mail, label: "Email", value: "yoga@houseofawakeningss.com", href: "mailto:yoga@houseofawakeningss.com" },
          ].map(({ icon: Icon, label, value, href }, i) => (
            <motion.a
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: i * 0.07 }}
              className="card-luxe p-7 md:p-8 group"
            >
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-[color-mix(in_oklab,var(--gold)_45%,transparent)] bg-[color-mix(in_oklab,var(--gold)_8%,transparent)] transition-colors group-hover:border-[var(--gold)]">
                <Icon size={20} strokeWidth={1.4} className="text-gold" />
              </div>
              <div className="eyebrow mt-5 text-gold justify-start">{label}</div>
              <div className="mt-2 font-display text-lg md:text-xl break-words font-medium">{value}</div>
            </motion.a>
          ))}
        </div>
      </section>

      <section className="relative px-5 py-16 md:py-24 overflow-hidden bg-paper">
        <div className="absolute right-0 top-0 opacity-[0.04] pointer-events-none translate-x-1/3">
          <Mandala size={620} />
        </div>
        <div className="relative mx-auto grid max-w-6xl gap-7 md:gap-10 grid-cols-1 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="overflow-hidden rounded-2xl md:rounded-3xl border border-[color-mix(in_oklab,var(--gold)_25%,transparent)] shadow-[0_24px_50px_-22px_color-mix(in_oklab,var(--ink)_30%,transparent)]"
          >
            <iframe
              title="Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62217.04877651523!2d77.5945627!3d12.9715987!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670c9b44e6d%3A0xf8dfc3e8517e4fe0!2sBengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1700000000000"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: 360 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </motion.div>

          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}
            className="card-luxe p-7 md:p-9"
          >
            <h2 className="font-display text-2xl md:text-3xl font-medium">Send a query</h2>
            <p className="mt-2 text-[13px] md:text-sm opacity-70">We'll respond within 24 hours.</p>
            <div className="divider-glow w-12 my-5" />

            <div className="space-y-3.5">
              <input required type="text" placeholder="Your name"
                className="w-full rounded-xl border border-[color-mix(in_oklab,var(--gold)_18%,var(--border))] bg-background/60 px-4 py-3.5 text-[14px] outline-none focus:border-[var(--gold)] transition" />
              <input required type="email" placeholder="Email"
                className="w-full rounded-xl border border-[color-mix(in_oklab,var(--gold)_18%,var(--border))] bg-background/60 px-4 py-3.5 text-[14px] outline-none focus:border-[var(--gold)] transition" />
              <input type="tel" placeholder="Phone (optional)"
                className="w-full rounded-xl border border-[color-mix(in_oklab,var(--gold)_18%,var(--border))] bg-background/60 px-4 py-3.5 text-[14px] outline-none focus:border-[var(--gold)] transition" />
              <textarea required rows={4} placeholder="Tell us a little about what brings you here..."
                className="w-full rounded-xl border border-[color-mix(in_oklab,var(--gold)_18%,var(--border))] bg-background/60 px-4 py-3.5 text-[14px] outline-none focus:border-[var(--gold)] transition resize-none" />
              <button type="submit" className="btn-primary w-full">
                {submitted ? "Thank you — we'll be in touch ✦" : "Send Message"}
              </button>
            </div>
          </motion.form>
        </div>
      </section>

      <section className="relative px-5 py-24 md:py-32 text-center overflow-hidden">
        <div className="aurora-bg opacity-50" />
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mx-auto max-w-3xl"
          >
            <div className="sanskrit text-xl mb-5">॥ अभी ॥</div>
            <h2 className="font-display text-[28px] sm:text-4xl md:text-[52px] leading-[1.15] italic font-medium">
              Your awakening doesn't wait<br />
              for a <span className="text-gold">perfect moment</span>
            </h2>
            <p className="mt-5 text-[14px] md:text-base opacity-75 font-light">Step in. We'll meet you where you are.</p>
            <a href={WA_PREFILL} target="_blank" rel="noreferrer" className="btn-primary mt-9">
              Start Your Healing Journey <ArrowRight size={16} />
            </a>
            <div className="mt-9 flex flex-wrap justify-center gap-5 md:gap-7 text-[11px] md:text-[12px] uppercase tracking-[0.25em] opacity-70">
              <span className="inline-flex items-center gap-2"><Phone size={13} className="text-gold" /> +91 91132 16212</span>
              <span className="inline-flex items-center gap-2"><MapPin size={13} className="text-gold" /> Bangalore, India</span>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
