import { useEffect, useState } from "react";
import { Link, useLocation } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const LOGO = "https://files.catbox.moe/5j42wr.webp";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/healing-methods", label: "Healing" },
  { to: "/offerings", label: "Offerings" },
  { to: "/impact", label: "Impact" },
  { to: "/moments", label: "Moments" },
  { to: "/contact", label: "Contact" },
] as const;

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setOpen(false); }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  const isActive = (to: string) =>
    to === "/" ? location.pathname === "/" : location.pathname === to;

  return (
    <>
      <motion.header
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.2, 0.8, 0.2, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled || open
            ? "backdrop-blur-2xl bg-background/55 border-b border-[color-mix(in_oklab,var(--gold)_25%,transparent)] shadow-[0_8px_32px_-12px_rgba(0,0,0,0.25)]"
            : "bg-transparent"
        }`}
      >
        {/* gold hairline */}
        <div className={`absolute inset-x-0 bottom-0 h-px transition-opacity duration-500 ${scrolled || open ? "opacity-100" : "opacity-0"}`}
             style={{ background: "linear-gradient(90deg, transparent, color-mix(in oklab, var(--gold) 80%, transparent), transparent)" }} />

        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3 md:px-8 md:py-4">
          <Link to="/" className="flex items-center gap-3 relative z-[60] group">
            <span className="relative block h-10 w-10 md:h-12 md:w-12 overflow-hidden rounded-full">
              <span className="absolute inset-0 rounded-full"
                    style={{ background: "conic-gradient(from 0deg, var(--gold), transparent 30%, var(--gold) 60%, transparent 90%, var(--gold))" }} />
              <span className="absolute inset-[2px] overflow-hidden rounded-full bg-background">
                <img src={LOGO} alt="House of Awakenings" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
              </span>
            </span>
            <span className="hidden font-display text-base md:text-lg leading-tight tracking-tight md:flex md:flex-col">
              <span>House of <span className="italic text-gold">Awakenings</span></span>
              <span className="text-[9px] font-sans uppercase tracking-[0.4em] opacity-60">Bangalore · India</span>
            </span>
          </Link>

          <nav className="hidden lg:flex items-center gap-7">
            {links.map((l) => {
              const active = isActive(l.to);
              return (
                <Link
                  key={l.to}
                  to={l.to}
                  onClick={(e) => {
                    if (active) {
                      e.preventDefault();
                      window.scrollTo({ top: 0, behavior: "smooth" });
                      document.querySelector("main")?.classList.remove("page-in");
                      requestAnimationFrame(() => {
                        document.querySelector("main")?.classList.add("page-in");
                      });
                    }
                  }}
                  className={`link-gold text-[13px] tracking-[0.12em] uppercase font-medium transition ${active ? "is-active" : "opacity-75 hover:opacity-100"}`}
                >
                  {l.label}
                </Link>
              );
            })}
          </nav>

          <button
            className="lg:hidden p-2 -mr-2 relative z-[60]"
            onClick={() => setOpen((o) => !o)}
            aria-label="Toggle menu"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </motion.header>

      {/* Full-screen mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[55] lg:hidden"
          >
            <div className="absolute inset-0 backdrop-blur-2xl bg-background/90" />
            <div className="absolute inset-0 aurora-bg" />

            <motion.nav
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.4, ease: [0.2, 0.8, 0.2, 1] }}
              className="relative h-full flex flex-col justify-center px-9 gap-1 pt-16"
            >
              <div className="mb-6 sanskrit text-sm">ॐ नमः शिवाय</div>
              {links.map((l, i) => {
                const active = isActive(l.to);
                return (
                  <motion.div
                    key={l.to}
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.18 + i * 0.05, duration: 0.35 }}
                  >
                    <Link
                      to={l.to}
                      onClick={(e) => {
                        if (active) {
                          e.preventDefault();
                          setOpen(false);
                          window.scrollTo({ top: 0, behavior: "smooth" });
                        }
                      }}
                      className={`group block py-3.5 font-display text-[28px] border-b border-[color-mix(in_oklab,var(--gold)_18%,transparent)] transition-colors ${active ? "text-gold" : "hover:text-gold"}`}
                    >
                      <span className="text-[10px] mr-3 align-middle opacity-50 tracking-[0.3em]">0{i + 1}</span>
                      {l.label}
                    </Link>
                  </motion.div>
                );
              })}
              <div className="mt-8 text-[11px] uppercase tracking-[0.35em] opacity-60">
                +91 91132 16212
              </div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
