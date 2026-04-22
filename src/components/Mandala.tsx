interface Props {
  size?: number;
  className?: string;
  spin?: boolean;
}

/**
 * Decorative SVG mandala with gold glow.
 * Pure SVG — zero JS cost, animated via CSS.
 */
export default function Mandala({ size = 320, className = "", spin = true }: Props) {
  const petals = Array.from({ length: 12 });
  const innerPetals = Array.from({ length: 8 });

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 200 200"
      className={`${className} ${spin ? "spin-slow" : ""} mandala-glow`}
      aria-hidden="true"
    >
      <defs>
        <radialGradient id="mg-grad" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="oklch(0.82 0.14 85)" stopOpacity="0.0" />
          <stop offset="60%" stopColor="oklch(0.82 0.14 85)" stopOpacity="0.4" />
          <stop offset="100%" stopColor="oklch(0.82 0.14 85)" stopOpacity="0.9" />
        </radialGradient>
      </defs>

      {/* outer ring */}
      <circle cx="100" cy="100" r="92" fill="none" stroke="url(#mg-grad)" strokeWidth="0.6" opacity="0.7" />
      <circle cx="100" cy="100" r="78" fill="none" stroke="oklch(0.82 0.14 85)" strokeWidth="0.4" opacity="0.5" />
      <circle cx="100" cy="100" r="62" fill="none" stroke="oklch(0.82 0.14 85)" strokeWidth="0.4" opacity="0.6" />
      <circle cx="100" cy="100" r="40" fill="none" stroke="oklch(0.82 0.14 85)" strokeWidth="0.5" opacity="0.7" />
      <circle cx="100" cy="100" r="20" fill="none" stroke="oklch(0.82 0.14 85)" strokeWidth="0.6" opacity="0.85" />

      {/* outer petals */}
      <g>
        {petals.map((_, i) => (
          <g key={`op-${i}`} transform={`rotate(${(360 / petals.length) * i} 100 100)`}>
            <path
              d="M100 18 C108 38, 108 58, 100 78 C92 58, 92 38, 100 18 Z"
              fill="none"
              stroke="oklch(0.82 0.14 85)"
              strokeWidth="0.6"
              opacity="0.7"
            />
            <circle cx="100" cy="14" r="1.6" fill="oklch(0.82 0.14 85)" opacity="0.8" />
          </g>
        ))}
      </g>

      {/* inner petals */}
      <g opacity="0.85">
        {innerPetals.map((_, i) => (
          <g key={`ip-${i}`} transform={`rotate(${(360 / innerPetals.length) * i} 100 100)`}>
            <path
              d="M100 60 C104 70, 104 80, 100 90 C96 80, 96 70, 100 60 Z"
              fill="oklch(0.82 0.14 85 / 0.12)"
              stroke="oklch(0.82 0.14 85)"
              strokeWidth="0.4"
            />
          </g>
        ))}
      </g>

      {/* center bindu */}
      <circle cx="100" cy="100" r="3.2" fill="oklch(0.82 0.14 85)" />
      <circle cx="100" cy="100" r="6.5" fill="none" stroke="oklch(0.82 0.14 85)" strokeWidth="0.5" opacity="0.6" />
    </svg>
  );
}
