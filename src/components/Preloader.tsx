import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const LOGO = "https://files.catbox.moe/5j42wr.webp";

export default function Preloader() {
  const [done, setDone] = useState(false);

  useEffect(() => {
    document.body.classList.add("no-scroll");
    const t = setTimeout(() => {
      setDone(true);
      document.body.classList.remove("no-scroll");
    }, 2600);
    return () => {
      clearTimeout(t);
      document.body.classList.remove("no-scroll");
    };
  }, []);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.9, ease: [0.4, 0, 0.2, 1] }}
        >
          <div className="relative flex items-center justify-center">
            {/* Glowing ring */}
            <svg
              className="absolute"
              width="220"
              height="220"
              viewBox="0 0 220 220"
              style={{ filter: "drop-shadow(0 0 18px rgba(168,195,181,0.55))" }}
            >
              <circle
                cx="110" cy="110" r="100"
                fill="none"
                stroke="rgba(168,195,181,0.15)"
                strokeWidth="1.5"
              />
              <motion.circle
                cx="110" cy="110" r="100"
                fill="none"
                stroke="#A8C3B5"
                strokeWidth="2"
                strokeLinecap="round"
                strokeDasharray={2 * Math.PI * 100}
                initial={{ strokeDashoffset: 2 * Math.PI * 100, rotate: -90 }}
                animate={{ strokeDashoffset: 0 }}
                transition={{ duration: 1.6, delay: 0.7, ease: [0.4, 0, 0.2, 1] }}
                style={{ transformOrigin: "center" }}
                transform="rotate(-90 110 110)"
              />
            </svg>

            {/* Logo */}
            <motion.div
              className="relative overflow-hidden rounded-full"
              initial={{ scale: 0.2, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1.1, ease: [0.4, 0, 0.2, 1] }}
              style={{ width: 150, height: 150 }}
            >
              <img
                src={LOGO}
                alt="House of Awakenings"
                className="h-full w-full object-cover"
              />
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
