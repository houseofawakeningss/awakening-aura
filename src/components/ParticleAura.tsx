import { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  r: number;
  o: number;
  hue: number;
  life: number;
  max: number;
}

interface Props {
  density?: number; // particles count
  color?: "gold" | "green" | "mixed";
  className?: string;
}

/**
 * Lightweight canvas particle aura.
 * - Gentle floating particles
 * - Soft glow blend
 * - Respects reduced-motion
 */
export default function ParticleAura({ density = 36, color = "mixed", className = "" }: Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let raf = 0;
    let particles: Particle[] = [];
    let dpr = Math.min(window.devicePixelRatio || 1, 2);

    const resize = () => {
      const parent = canvas.parentElement;
      if (!parent) return;
      const w = parent.clientWidth;
      const h = parent.clientHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      canvas.style.width = w + "px";
      canvas.style.height = h + "px";
      ctx.scale(dpr, dpr);
    };

    const hueFor = () => {
      if (color === "gold") return 42;
      if (color === "green") return 142;
      return Math.random() > 0.55 ? 42 : 142;
    };

    const spawn = (count: number) => {
      const w = canvas.width / dpr;
      const h = canvas.height / dpr;
      for (let i = 0; i < count; i++) {
        particles.push({
          x: Math.random() * w,
          y: Math.random() * h,
          vx: (Math.random() - 0.5) * 0.18,
          vy: -0.05 - Math.random() * 0.25,
          r: 0.6 + Math.random() * 2.2,
          o: 0.15 + Math.random() * 0.55,
          hue: hueFor(),
          life: 0,
          max: 400 + Math.random() * 800,
        });
      }
    };

    resize();
    spawn(density);

    const render = () => {
      const w = canvas.width / dpr;
      const h = canvas.height / dpr;
      ctx.clearRect(0, 0, w, h);
      ctx.globalCompositeOperation = "lighter";

      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;
        p.life++;
        const fade = Math.min(1, p.life / 80) * Math.max(0, 1 - (p.life - p.max + 80) / 80);
        const o = p.o * fade;
        const grad = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.r * 6);
        grad.addColorStop(0, `hsla(${p.hue}, 80%, 70%, ${o})`);
        grad.addColorStop(1, `hsla(${p.hue}, 80%, 60%, 0)`);
        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r * 6, 0, Math.PI * 2);
        ctx.fill();
      }
      particles = particles.filter((p) => p.life < p.max && p.y > -20);
      if (particles.length < density) spawn(density - particles.length);

      if (!reduce) raf = requestAnimationFrame(render);
    };

    if (!reduce) raf = requestAnimationFrame(render);
    else render();

    const onResize = () => {
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      resize();
    };
    window.addEventListener("resize", onResize);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", onResize);
    };
  }, [density, color]);

  return (
    <canvas
      ref={canvasRef}
      className={`pointer-events-none absolute inset-0 ${className}`}
      aria-hidden="true"
    />
  );
}
