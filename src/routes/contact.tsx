import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { motion } from "framer-motion";
import Instagram from "lucide-react/dist/esm/icons/instagram.js";
import MessageCircle from "lucide-react/dist/esm/icons/message-circle.js";
import MapPin from "lucide-react/dist/esm/icons/map-pin.js";
import ArrowRight from "lucide-react/dist/esm/icons/arrow-right.js";
import Mail from "lucide-react/dist/esm/icons/mail.js";
import Phone from "lucide-react/dist/esm/icons/phone.js";

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
      <section className="px-6 pt-36 pb-12 md:pt-44 text-center">
        <div className="eyebrow mb-4">Contact</div>
        <h1 className="font-display text-4xl md:text-6xl">Let's begin.</h1>
        <p className="mx-auto mt-6 max-w-2xl opacity-75">
          Reach out on the channel that feels easiest. We respond personally.
        </p>
      </section>

      <section className="px-6 py-12">
        <div className="mx-auto grid max-w-6xl gap-4 sm:grid-cols-2 lg:grid-cols-3">
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
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="rounded-2xl border border-border/50 bg-card p-7 hover:border-primary/40 hover:shadow-[0_20px_50px_-30px_rgba(10,61,51,0.3)] transition"
            >
              <Icon size={26} strokeWidth={1.5} className="text-primary" />
              <div className="eyebrow mt-4">{label}</div>
              <div className="mt-2 font-display text-lg">{value}</div>
            </motion.a>
          ))}
        </div>
      </section>

      {/* Map + Form */}
      <section className="px-6 py-16">
        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="overflow-hidden rounded-3xl border border-border/40 aspect-square lg:aspect-auto"
          >
            <iframe
              title="Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62217.04877651523!2d77.5945627!3d12.9715987!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670c9b44e6d%3A0xf8dfc3e8517e4fe0!2sBengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1700000000000"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: 400 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </motion.div>

          <motion.form
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}
            className="rounded-3xl border border-border/50 bg-card p-8"
          >
            <h2 className="font-display text-2xl">Send a query</h2>
            <p className="mt-2 text-sm opacity-70">We'll respond within 24 hours.</p>

            <div className="mt-6 space-y-4">
              <input required type="text" placeholder="Your name" className="w-full rounded-xl border border-border bg-background px-4 py-3 outline-none focus:border-primary transition" />
              <input required type="email" placeholder="Email" className="w-full rounded-xl border border-border bg-background px-4 py-3 outline-none focus:border-primary transition" />
              <input type="tel" placeholder="Phone (optional)" className="w-full rounded-xl border border-border bg-background px-4 py-3 outline-none focus:border-primary transition" />
              <textarea required rows={5} placeholder="Tell us a little about what brings you here..." className="w-full rounded-xl border border-border bg-background px-4 py-3 outline-none focus:border-primary transition resize-none" />
              <button type="submit" className="btn-primary w-full">
                {submitted ? "Thank you — we'll be in touch ✶" : "Send Message"}
              </button>
            </div>
          </motion.form>
        </div>
      </section>

      <section className="px-6 py-24 text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-3xl"
        >
          <h2 className="font-display text-3xl md:text-5xl leading-[1.15]">Your awakening doesn't wait for a perfect moment.</h2>
          <p className="mt-5 opacity-75">Step in. We'll meet you where you are.</p>
          <a href={WA_PREFILL} target="_blank" rel="noreferrer" className="btn-primary mt-10">
            Start Your Healing Journey Today <ArrowRight size={18} />
          </a>
          <div className="mt-10 flex flex-wrap justify-center gap-6 text-sm opacity-70">
            <span className="inline-flex items-center gap-2"><Phone size={14} /> +91 91132 16212</span>
            <span className="inline-flex items-center gap-2"><MapPin size={14} /> Bangalore, India</span>
          </div>
        </motion.div>
      </section>
    </>
  );
}
