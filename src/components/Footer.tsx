import { Link } from "@tanstack/react-router";
import { Instagram, Mail, MapPin, Phone, MessageCircle } from "lucide-react";
import Mandala from "./Mandala";

const LOGO = "https://files.catbox.moe/5j42wr.webp";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden mt-24 text-[var(--cream)]"
            style={{ background: "linear-gradient(180deg, oklch(0.16 0.03 162) 0%, oklch(0.10 0.02 162) 100%)" }}>
      {/* glow accents */}
      <div className="pointer-events-none absolute inset-0 opacity-60">
        <div className="absolute -top-40 -left-40 w-[40rem] h-[40rem] rounded-full blur-3xl"
             style={{ background: "radial-gradient(circle, color-mix(in oklab, var(--forest) 40%, transparent), transparent 60%)" }} />
        <div className="absolute -bottom-40 -right-40 w-[40rem] h-[40rem] rounded-full blur-3xl"
             style={{ background: "radial-gradient(circle, color-mix(in oklab, var(--gold) 30%, transparent), transparent 60%)" }} />
      </div>
      <div className="pointer-events-none absolute right-[-120px] top-1/2 -translate-y-1/2 opacity-[0.08]">
        <Mandala size={500} />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 py-20 md:px-10 grid gap-12 md:grid-cols-12">
        <div className="md:col-span-5">
          <div className="flex items-center gap-3">
            <span className="relative block h-14 w-14 overflow-hidden rounded-full ring-1 ring-[color-mix(in_oklab,var(--gold)_50%,transparent)]">
              <img src={LOGO} alt="House of Awakenings" className="h-full w-full object-cover" />
            </span>
            <div>
              <div className="font-display text-2xl">House of <span className="italic text-gold">Awakenings</span></div>
              <div className="text-[10px] uppercase tracking-[0.4em] opacity-60">Bangalore · India</div>
            </div>
          </div>
          <p className="mt-6 max-w-md text-[14px] leading-[1.8] opacity-75 font-light">
            A sanctuary for deep inner work — where you release, realign,
            and return to yourself. Founded by Gunja Tolani.
          </p>
          <div className="mt-7 sanskrit text-base">सत्यं शिवं सुन्दरम्</div>
        </div>

        <div className="md:col-span-3">
          <h4 className="font-display text-base mb-5 text-gold">Explore</h4>
          <ul className="space-y-2.5 text-[13px] opacity-80">
            <li><Link to="/about" className="link-gold inline-block">About Us</Link></li>
            <li><Link to="/healing-methods" className="link-gold inline-block">Healing Methods</Link></li>
            <li><Link to="/offerings" className="link-gold inline-block">Our Offerings</Link></li>
            <li><Link to="/impact" className="link-gold inline-block">Impact</Link></li>
            <li><Link to="/moments" className="link-gold inline-block">Moments</Link></li>
            <li><Link to="/contact" className="link-gold inline-block">Contact</Link></li>
          </ul>
        </div>

        <div className="md:col-span-4">
          <h4 className="font-display text-base mb-5 text-gold">Connect</h4>
          <ul className="space-y-3.5 text-[13px] opacity-85">
            <li className="flex items-start gap-3"><Phone size={14} className="mt-1 text-[var(--gold)]" /> +91 91132 16212</li>
            <li className="flex items-start gap-3"><Mail size={14} className="mt-1 text-[var(--gold)]" /> yoga@houseofawakeningss.com</li>
            <li className="flex items-start gap-3"><MapPin size={14} className="mt-1 text-[var(--gold)]" /> Bangalore, India</li>
            <li className="flex items-center gap-3 pt-3">
              <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram"
                 className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[color-mix(in_oklab,var(--gold)_40%,transparent)] hover:bg-[color-mix(in_oklab,var(--gold)_15%,transparent)] hover:border-[var(--gold)] transition-all duration-500">
                <Instagram size={16} />
              </a>
              <a href="https://wa.me/919113216212" target="_blank" rel="noreferrer" aria-label="WhatsApp"
                 className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[color-mix(in_oklab,var(--gold)_40%,transparent)] hover:bg-[color-mix(in_oklab,var(--gold)_15%,transparent)] hover:border-[var(--gold)] transition-all duration-500">
                <MessageCircle size={16} />
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="relative border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-5 text-[11px] tracking-[0.15em] uppercase opacity-60 flex flex-col md:flex-row justify-between gap-2">
          <span>© {new Date().getFullYear()} House of Awakenings · All rights reserved</span>
          <span className="sanskrit normal-case tracking-normal text-[12px]">Crafted with intention ✦</span>
        </div>
      </div>
    </footer>
  );
}
