import { useState, useRef, useCallback, useEffect } from "react";
import { whatsappLink } from "../data/whatsapp";
import { WhatsAppIcon, SparklesIcon } from "../components/icons";

interface TransformationItem {
  id: string;
  procedure: string;
  subtitle: string;
  description: string;
  beforeImg: string;
  afterImg: string;
  tag: string;
}

const TRANSFORMATIONS: TransformationItem[] = [
  {
    id: "skincare",
    procedure: "Limpeza de Pele Profunda & Glow",
    subtitle: "Desobstrução de poros, remoção de cravos e restauração do viço",
    description:
      "Resultado imediato pós-sessão: redução visível de cravos e poros dilatados, controle da oleosidade e uma pele iluminada sem marcas ou vermelhidão excessiva.",
    beforeImg: "/images/before-skincare.jpg",
    afterImg: "/images/after-skincare.jpg",
    tag: "Estética Facial",
  },
  {
    id: "eyebrows",
    procedure: "Visagismo de Sobrancelhas",
    subtitle: "Alinhamento personalizado que harmoniza com as linhas do seu rosto",
    description:
      "Desenho estratégico que preenche falhas naturais, alinha fios rebeldes e valoriza o olhar com expressão marcante e naturalidade.",
    beforeImg: "/images/before-eyebrows.jpg",
    afterImg: "/images/after-eyebrows.jpg",
    tag: "Design do Olhar",
  },
  {
    id: "nails",
    procedure: "Spa das Mãos & Esmaltação em Gel",
    subtitle: "Cutilagem suave, hidratação profunda e brilho espelhado duradouro",
    description:
      "Unhas alinhadas e protegidas contra quebras, com acabamento impecável e durabilidade média de 20 a 25 dias intactas.",
    beforeImg: "/images/service-nails.jpg",
    afterImg: "/images/service-nails.jpg",
    tag: "Nails Care",
  },
];

export function BeforeAfter() {
  const [activeItem, setActiveItem] = useState<TransformationItem>(TRANSFORMATIONS[0]);
  const [sliderPosition, setSliderPosition] = useState<number>(50);
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  }, []);

  const handleTouchMove = useCallback(
    (e: TouchEvent) => {
      if (!isDragging) return;
      handleMove(e.touches[0].clientX);
    },
    [isDragging, handleMove]
  );

  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      if (!isDragging) return;
      handleMove(e.clientX);
    },
    [isDragging, handleMove]
  );

  const handleMouseUp = useCallback(() => {
    setIsDragging(false);
  }, []);

  useEffect(() => {
    if (isDragging) {
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mouseup", handleMouseUp);
      window.addEventListener("touchmove", handleTouchMove, { passive: true });
      window.addEventListener("touchend", handleMouseUp);
    }
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", handleMouseUp);
    };
  }, [isDragging, handleMouseMove, handleMouseUp, handleTouchMove]);

  return (
    <section id="resultados" className="py-20 lg:py-28 bg-paperAlt/40 border-b border-line/60">
      <div className="container-editorial">
        {/* Cabeçalho */}
        <div className="reveal-init text-center max-w-2xl mx-auto pb-10">
          <div className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-goldLight/70 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-goldDark mb-4">
            <SparklesIcon className="h-3.5 w-3.5 text-goldDark" />
            <span>Transformações Reais</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-[2.75rem] font-medium leading-[1.15] text-ink">
            Resultados visíveis com naturalidade e precisão
          </h2>
          <p className="mt-4 text-base sm:text-lg text-inkSoft leading-relaxed">
            Arraste a barra para comparar o antes e depois dos nossos principais procedimentos.
          </p>

          {/* Abas dos procedimentos */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
            {TRANSFORMATIONS.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => {
                  setActiveItem(item);
                  setSliderPosition(50);
                }}
                className={`rounded-full px-5 py-2 text-xs sm:text-sm font-medium transition-all duration-200 active:scale-95 ${
                  activeItem.id === item.id
                    ? "bg-wine text-paper shadow-sm"
                    : "bg-paperPure text-inkSoft border border-line hover:border-wine/50 hover:text-ink"
                }`}
              >
                {item.procedure.split("&")[0].trim()}
              </button>
            ))}
          </div>
        </div>

        {/* Card do Slider Interativo */}
        <div className="reveal-scale max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-paperPure rounded-3xl p-6 sm:p-8 lg:p-10 border border-line shadow-editorial-lg">
          {/* Lado Esquerdo: Área do Comparador */}
          <div className="reveal-from-left lg:col-span-7">
            <div
              ref={containerRef}
              onMouseDown={() => setIsDragging(true)}
              onTouchStart={() => setIsDragging(true)}
              className={`relative aspect-[4/3] w-full overflow-hidden rounded-2xl select-none bg-ink/5 border border-line shadow-inner touch-none transition-all ${
                isDragging ? "cursor-grabbing" : "cursor-ew-resize"
              }`}
            >
              {/* Imagem do "Depois" (fundo completo) */}
              <img
                src={activeItem.afterImg}
                alt={`${activeItem.procedure} - Depois`}
                className="absolute inset-0 h-full w-full object-cover object-center pointer-events-none"
              />
              <span className="absolute top-4 right-4 z-10 rounded-full bg-wine/90 backdrop-blur-md px-3 py-1 text-xs font-semibold text-paper shadow-md">
                Depois ✨
              </span>

              {/* Imagem do "Antes" (recortada via clip-path) */}
              <div
                className="absolute inset-0 overflow-hidden pointer-events-none"
                style={{
                  clipPath: `polygon(0 0, ${sliderPosition}% 0, ${sliderPosition}% 100%, 0 100%)`,
                }}
              >
                <img
                  src={activeItem.beforeImg}
                  alt={`${activeItem.procedure} - Antes`}
                  className="absolute inset-0 h-full w-full object-cover object-center filter saturate-[0.85] contrast-[0.95]"
                />
                <span className="absolute top-4 left-4 z-10 rounded-full bg-ink/80 backdrop-blur-md px-3 py-1 text-xs font-semibold text-paper shadow-md">
                  Antes
                </span>
              </div>

              {/* Linha Divisória com Alça de Arraste */}
              <div
                className="absolute top-0 bottom-0 w-1 bg-white shadow-[0_0_10px_rgba(0,0,0,0.5)] z-20 pointer-events-none"
                style={{ left: `${sliderPosition}%` }}
              >
                <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 h-11 w-11 rounded-full bg-paperPure border-2 border-wine shadow-lg flex items-center justify-center text-wine font-bold text-xs animate-pulse-handle transition-transform hover:scale-110">
                  <span>⟷</span>
                </div>
              </div>
            </div>
            <p className="mt-3 text-center text-xs text-inkMuted">
              Toque ou arraste a linha central para visualizar o resultado completo
            </p>
          </div>

          {/* Lado Direito: Detalhes e CTA Direto */}
          <div className="reveal-from-right lg:col-span-5 flex flex-col justify-between h-full space-y-6">
            <div>
              <div className="inline-block rounded-full bg-wineLight px-3 py-1 text-xs font-semibold text-wine mb-3">
                {activeItem.tag}
              </div>
              <h3 className="font-display text-2xl sm:text-3xl font-medium text-ink leading-tight">
                {activeItem.procedure}
              </h3>
              <p className="mt-2 text-sm font-medium text-wine">
                {activeItem.subtitle}
              </p>
              <p className="mt-4 text-sm text-inkSoft leading-relaxed">
                {activeItem.description}
              </p>
            </div>

            <div className="pt-6 border-t border-line/70">
              <a
                href={whatsappLink(
                  `Olá! Vi os resultados de "${activeItem.procedure}" no site e gostaria de agendar uma avaliação.`
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-luxury-shimmer w-full inline-flex items-center justify-center gap-2.5 rounded-full bg-wine px-6 py-4 text-sm font-semibold text-paper shadow-wine-glow transition-all duration-300 hover:bg-wineDark hover:shadow-wine-glow-lg hover:-translate-y-0.5 active:scale-[0.98]"
              >
                <WhatsAppIcon className="h-4 w-4" />
                <span>Quero esse resultado</span>
              </a>
              <p className="mt-2 text-center text-[11px] text-inkMuted">
                Protocolo personalizado e seguro para o seu tipo de pele
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
