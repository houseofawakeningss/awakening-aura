import { useEffect, useState } from "react";
import { Link, useLocation } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const LOGO = "https://files.catbox.moe/5j42wr.webp";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About Us" },
  { to: "/healing-methods", label: "Healing Methods" },
  { to: "/offerings", label: "Our Offerings" },
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

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled || open
            ? "backdrop-blur-xl bg-background/80 border-b border-border/40"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3 md:px-8 md:py-4">
          <Link to="/" className="flex items-center gap-2.5 relative z-[60]">
            <span className="block h-9 w-9 md:h-11 md:w-11 overflow-hidden rounded-full ring-1 ring-foreground/10">
              <img src={LOGO} alt="House of Awakenings" className="h-full w-full object-cover" />
            </span>
            <span className="hidden font-display text-base md:text-lg leading-tight tracking-tight md:flex md:flex-col">
              <span>House of Awakenings</span>
              <span className="text-[10px] font-sans uppercase tracking-[0.3em] opacity-60">Bangalore</span>
            </span>
          </Link>

          <nav className="hidden lg:flex items-center gap-8">
            {links.map((l) => {
              const isActive = l.to === "/" ? location.pathname === "/" : location.pathname === l.to;
              return (
                <Link
                  key={l.to}
                  to={l.to}
                  onClick={(e) => {
                    if (isActive) {
                      e.preventDefault();
                      window.scrollTo({ top: 0, behavior: "smooth" });
                      // soft refresh feel
                      document.querySelector("main")?.classList.remove("page-in");
                      requestAnimationFrame(() => {
                        document.querySelector("main")?.classList.add("page-in");
                      });
                    }
                  }}
                  className="relative text-sm tracking-wide opacity-80 transition hover:opacity-100 after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-primary after:transition-all hover:after:w-full"
                  activeProps={{ className: "opacity-100 font-medium after:!w-full" }}
                  activeOptions={{ exact: l.to === "/" }}
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
      </header>

      {/* Full-screen slide-in mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="mobile-menu"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
            className="fixed inset-0 z-[55] lg:hidden bg-background/95 backdrop-blur-2xl"
          >
            <nav className="flex h-full flex-col justify-center px-8 gap-1 pt-16">
              {links.map((l, i) => {
                const isActive = l.to === "/" ? location.pathname === "/" : location.pathname === l.to;
                return (
                  <motion.div
                    key={l.to}
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.15 + i * 0.05, duration: 0.3 }}
                  >
                    <Link
                      to={l.to}
                      onClick={(e) => {
                        if (isActive) {
                          e.preventDefault();
                          setOpen(false);
                          window.scrollTo({ top: 0, behavior: "smooth" });
                        }
                      }}
                      className="block py-3 font-display text-2xl border-b border-border/30"
                      activeProps={{ className: "text-primary" }}
                      activeOptions={{ exact: l.to === "/" }}
                    >
                      {l.label}
                    </Link>
                  </motion.div>
                );
              })}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
