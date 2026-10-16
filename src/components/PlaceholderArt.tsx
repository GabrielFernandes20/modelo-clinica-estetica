interface PlaceholderArtProps {
  className?: string;
  variant?: 0 | 1 | 2 | 3 | 4;
}

/**
 * Textura abstrata elegante usada como espaço reservado para fotografia
 * profissional do cliente. Sem dependências externas de imagem.
 */
export function PlaceholderArt({ className = "", variant = 0 }: PlaceholderArtProps) {
  const paths = [
    "M-10 90 C 30 40, 70 140, 130 60",
    "M-10 40 C 40 120, 60 -10, 130 90",
    "M-10 110 C 50 30, 80 150, 130 40",
    "M-10 60 C 30 10, 90 130, 130 70",
    "M-10 100 C 40 150, 90 20, 130 90",
  ];

  return (
    <div
      className={`relative overflow-hidden bg-gradient-to-br from-paperAlt to-[#E4D7C2] ${className}`}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 120 120"
        preserveAspectRatio="none"
        className="absolute inset-0 h-full w-full opacity-60"
      >
        <path
          d={paths[variant % paths.length]}
          fill="none"
          stroke="#7A2E3A"
          strokeWidth="0.6"
        />
      </svg>
      <div className="absolute inset-0 mix-blend-multiply opacity-[0.04] bg-ink" />
    </div>
  );
}
