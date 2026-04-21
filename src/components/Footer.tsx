import { Link } from "@tanstack/react-router";
import { Instagram, Mail, MapPin, Phone } from "lucide-react";

const LOGO = "https://files.catbox.moe/5j42wr.webp";

export default function Footer() {
  return (
    <footer className="bg-[oklch(0.18_0.04_162)] text-[var(--cream)] mt-24">
      <div className="mx-auto max-w-7xl px-6 py-16 md:px-10 grid gap-12 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex items-center gap-3">
            <img src={LOGO} alt="House of Awakenings" className="h-12 w-12 rounded-full object-cover" />
            <div>
              <div className="font-display text-xl">House of Awakenings</div>
              <div className="text-xs uppercase tracking-[0.3em] opacity-60">Bangalore · India</div>
            </div>
          </div>
          <p className="mt-6 max-w-md text-sm leading-relaxed opacity-75">
            A sanctuary for deep inner work — where you release, realign, and return to yourself.
          </p>
        </div>

        <div>
          <h4 className="font-display text-base mb-4">Explore</h4>
          <ul className="space-y-2 text-sm opacity-80">
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/healing-methods">Healing Methods</Link></li>
            <li><Link to="/offerings">Our Offerings</Link></li>
            <li><Link to="/impact">Impact</Link></li>
            <li><Link to="/moments">Moments</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-display text-base mb-4">Connect</h4>
          <ul className="space-y-3 text-sm opacity-80">
            <li className="flex items-start gap-2"><Phone size={14} className="mt-1" /> +91 91132 16212</li>
            <li className="flex items-start gap-2"><Mail size={14} className="mt-1" /> yoga@houseofawakeningss.com</li>
            <li className="flex items-start gap-2"><MapPin size={14} className="mt-1" /> Bangalore, India</li>
            <li className="flex items-center gap-2 pt-2">
              <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram"
                 className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/20 hover:bg-white/10 transition">
                <Instagram size={16} />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-5 text-xs opacity-60 flex flex-col md:flex-row justify-between gap-2">
          <span>© {new Date().getFullYear()} House of Awakenings. All rights reserved.</span>
          <span>Crafted with intention.</span>
        </div>
      </div>
    </footer>
  );
}
