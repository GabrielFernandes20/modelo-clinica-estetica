import { useState, useMemo, useEffect, useCallback } from "react";
import { company, type GalleryImage } from "../data/company";
import { whatsappLink } from "../data/whatsapp";
import {
  InstagramIcon,
  WhatsAppIcon,
  CloseIcon,
  SparklesIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from "../components/icons";

type GalleryFilter = "todos" | "espaco" | "procedimentos";

export function Gallery() {
  const [activeFilter, setActiveFilter] = useState<GalleryFilter>("todos");
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  // Filtro adaptativo das imagens
  const filteredGallery = useMemo(() => {
    if (activeFilter === "espaco") {
      return company.gallery.filter(
        (img) => img.category === "O Espaço" || img.category === "Nossa Filosofia"
      );
    }
    if (activeFilter === "procedimentos") {
      return company.gallery.filter(
        (img) => img.category !== "O Espaço" && img.category !== "Nossa Filosofia"
      );
    }
    return company.gallery;
  }, [activeFilter]);

  const selectedImage = selectedIndex !== null ? filteredGallery[selectedIndex] : null;

  const handleNext = useCallback(() => {
    if (selectedIndex === null) return;
    setSelectedIndex((prev) => (prev! + 1) % filteredGallery.length);
  }, [selectedIndex, filteredGallery.length]);

  const handlePrev = useCallback(() => {
    if (selectedIndex === null) return;
    setSelectedIndex((prev) => (prev! - 1 + filteredGallery.length) % filteredGallery.length);
  }, [selectedIndex, filteredGallery.length]);

  // Navegação por teclado para acessibilidade (Impeccable craft floor)
  useEffect(() => {
    if (selectedIndex === null) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedIndex(null);
      if (e.key === "ArrowRight") handleNext();
      if (e.key === "ArrowLeft") handlePrev();
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [selectedIndex, handleNext, handlePrev]);

  return (
    <section id="galeria" className="py-20 lg:py-28 border-t border-line/60">
      <div className="container-editorial">
        {/* Cabeçalho */}
        <div className="reveal-init flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-line">
          <div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-[2.65rem] font-medium leading-[1.15] text-ink">
              Resultados e atmosfera do nosso espaço
            </h2>
            <p className="mt-3 text-base text-inkSoft max-w-xl leading-relaxed">
              Um registro visual do nosso cuidado diário, dos procedimentos e do ambiente preparado para receber você em Itatiba.
            </p>
          </div>

          <div className="flex-shrink-0">
            <a
              href={company.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-line bg-paperPure px-5 py-2.5 text-xs sm:text-sm font-medium text-ink transition-all duration-300 hover:border-wine hover:text-wine hover:-translate-y-0.5 active:scale-95 shadow-sm"
            >
              <InstagramIcon className="h-4 w-4 text-wine" />
              <span>{company.instagramHandle}</span>
            </a>
          </div>
        </div>

        {/* Abas de Filtro da Galeria (Delight & Operabilidade Adaptativa) */}
        <div className="reveal-init reveal-delay-1 mt-8 flex items-center gap-2 overflow-x-auto pb-2" role="tablist" aria-label="Filtrar galeria">
          <button
            type="button"
            role="tab"
            aria-selected={activeFilter === "todos"}
            onClick={() => {
              setActiveFilter("todos");
              setSelectedIndex(null);
            }}
            className={`min-h-[40px] rounded-full px-5 py-2 text-xs sm:text-sm font-medium transition-all duration-200 active:scale-95 ${
              activeFilter === "todos"
                ? "bg-wine text-paper shadow-sm"
                : "bg-paperPure text-inkSoft border border-line hover:border-wine/50 hover:text-ink"
            }`}
          >
            Todas as Fotos ({company.gallery.length})
          </button>
          <button
            type="button"
            role="tab"
            aria-selected={activeFilter === "espaco"}
            onClick={() => {
              setActiveFilter("espaco");
              setSelectedIndex(null);
            }}
            className={`min-h-[40px] rounded-full px-5 py-2 text-xs sm:text-sm font-medium transition-all duration-200 active:scale-95 ${
              activeFilter === "espaco"
                ? "bg-wine text-paper shadow-sm"
                : "bg-paperPure text-inkSoft border border-line hover:border-wine/50 hover:text-ink"
            }`}
          >
            O Espaço & Ambiente
          </button>
          <button
            type="button"
            role="tab"
            aria-selected={activeFilter === "procedimentos"}
            onClick={() => {
              setActiveFilter("procedimentos");
              setSelectedIndex(null);
            }}
            className={`min-h-[40px] rounded-full px-5 py-2 text-xs sm:text-sm font-medium transition-all duration-200 active:scale-95 ${
              activeFilter === "procedimentos"
                ? "bg-wine text-paper shadow-sm"
                : "bg-paperPure text-inkSoft border border-line hover:border-wine/50 hover:text-ink"
            }`}
          >
            Procedimentos & Cuidados
          </button>
        </div>

        {/* Grade Adaptativa: No mobile (1 coluna empilhada e respirável), no desktop (grid assimétrico refinado) */}
        <div className="reveal-init reveal-delay-2 mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-5 sm:gap-6">
          {filteredGallery.map((img: GalleryImage, idx: number) => {
            // Em layout completo ("todos"), manter proporções editoriais ricas
            const isFirst = activeFilter === "todos" && idx === 0;
            const isSecond = activeFilter === "todos" && idx === 1;

            let colSpan = "col-span-1 md:col-span-1 lg:col-span-4";
            let aspect = "aspect-[4/3]";

            if (isFirst) {
              colSpan = "col-span-1 md:col-span-2 lg:col-span-7";
              aspect = "aspect-[16/11]";
            } else if (isSecond) {
              colSpan = "col-span-1 md:col-span-2 lg:col-span-5";
              aspect = "aspect-[4/5] md:aspect-[16/11] lg:aspect-auto lg:h-full";
            }

            return (
              <div
                key={img.id}
                onClick={() => setSelectedIndex(idx)}
                className={`${colSpan} group relative overflow-hidden rounded-2xl border border-line/80 bg-ink shadow-editorial card-interactive cursor-pointer transition-all duration-300 hover:shadow-editorial-lg hover:border-gold/50`}
              >
                <div className={`w-full ${aspect} relative overflow-hidden`}>
                  <img
                    src={img.imageUrl}
                    alt={img.alt}
                    className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    loading="lazy"
                    width="700"
                    height="480"
                  />

                  {/* Gradiente escuro profundo de alto contraste garantido (Craft Floor: ≥ 7:1) */}
                  <div
                    className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/55 to-transparent transition-opacity duration-300 group-hover:from-black/98"
                    aria-hidden="true"
                  />

                  {/* Conteúdo com tipografia clara, nítida e com sombra de leitura */}
                  <div className="absolute bottom-0 inset-x-0 p-5 sm:p-6 flex items-end justify-between gap-3">
                    <div className="transition-transform duration-300 group-hover:-translate-y-1">
                      {/* Pílula translúcida com a categoria para legibilidade total */}
                      <span className="inline-block rounded-full bg-black/60 backdrop-blur-md px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-[#FCE6BD] border border-white/15 shadow-sm">
                        {img.category}
                      </span>

                      {/* Título com cor branca explícita e sombra para nunca contrastar com o fundo */}
                      <h3 className="font-display text-xl sm:text-2xl font-medium mt-2 !text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)] leading-snug">
                        {img.title}
                      </h3>
                    </div>

                    <span className="hidden sm:inline-flex items-center gap-1.5 rounded-full bg-white/20 backdrop-blur-md px-3.5 py-1.5 text-xs text-white font-medium border border-white/30 transition-all duration-300 group-hover:bg-wine group-hover:border-wine group-hover:shadow-wine-glow flex-shrink-0">
                      <SparklesIcon className="h-3.5 w-3.5 text-[#FCE6BD]" />
                      <span>Ampliar</span>
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Modal de Zoom da Imagem (Lightbox com Navegação e Controles Adaptativos) */}
        {selectedImage && selectedIndex !== null && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-3 sm:p-6 animate-scale-in"
            role="dialog"
            aria-modal="true"
            aria-label="Visualização da foto da galeria"
            onClick={() => setSelectedIndex(null)}
          >
            <div
              className="relative max-w-4xl w-full rounded-2xl bg-paperPure border border-line overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Barra superior de controle */}
              <div className="absolute top-4 inset-x-4 z-20 flex items-center justify-between pointer-events-none">
                <span className="pointer-events-auto rounded-full bg-black/60 backdrop-blur-md px-3.5 py-1 text-xs font-medium text-paperPure border border-white/20 shadow-md">
                  Foto {selectedIndex + 1} de {filteredGallery.length}
                </span>

                <button
                  type="button"
                  onClick={() => setSelectedIndex(null)}
                  aria-label="Fechar visualizador"
                  className="pointer-events-auto flex h-10 w-10 items-center justify-center rounded-full bg-black/60 backdrop-blur-md text-white hover:bg-wine transition-colors shadow-md"
                >
                  <CloseIcon className="h-5 w-5" />
                </button>
              </div>

              {/* Área visual com botões de navegação lateral */}
              <div className="relative aspect-[16/10] sm:aspect-[16/10] w-full bg-black flex items-center justify-center">
                <img
                  src={selectedImage.imageUrl}
                  alt={selectedImage.alt}
                  className="h-full w-full object-cover sm:object-contain"
                />

                {/* Botão Anterior */}
                <button
                  type="button"
                  onClick={handlePrev}
                  aria-label="Foto anterior"
                  className="absolute left-3 sm:left-4 z-10 flex h-11 w-11 items-center justify-center rounded-full bg-black/60 backdrop-blur-md text-white hover:bg-wine transition-all duration-200 active:scale-95 shadow-md"
                >
                  <ChevronLeftIcon className="h-6 w-6" />
                </button>

                {/* Botão Próximo */}
                <button
                  type="button"
                  onClick={handleNext}
                  aria-label="Próxima foto"
                  className="absolute right-3 sm:right-4 z-10 flex h-11 w-11 items-center justify-center rounded-full bg-black/60 backdrop-blur-md text-white hover:bg-wine transition-all duration-200 active:scale-95 shadow-md"
                >
                  <ChevronRightIcon className="h-6 w-6" />
                </button>
              </div>

              {/* Rodapé do Modal */}
              <div className="p-5 sm:p-7 flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-paperPure border-t border-line">
                <div>
                  <span className="inline-block rounded-full bg-wineLight px-2.5 py-0.5 text-xs font-semibold uppercase tracking-wider text-wine">
                    {selectedImage.category}
                  </span>
                  <h3 className="font-display text-2xl font-medium text-ink mt-1.5">
                    {selectedImage.title}
                  </h3>
                  <p className="text-sm text-inkSoft mt-1">
                    {selectedImage.alt}
                  </p>
                </div>

                <a
                  href={whatsappLink(
                    `Olá! Gostei da foto "${selectedImage.title}" (${selectedImage.category}) na galeria do site e gostaria de saber mais informações!`
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-luxury-shimmer inline-flex items-center justify-center gap-2 rounded-full bg-wine px-6 py-3.5 text-sm font-medium text-paper shadow-wine-glow transition-all duration-300 hover:bg-wineDark active:scale-95 flex-shrink-0 min-h-[44px]"
                >
                  <WhatsAppIcon className="h-4 w-4" />
                  <span>Quero este resultado</span>
                </a>
              </div>
            </div>
          </div>
        )}

        {/* CTA de galeria */}
        <div className="reveal-init reveal-delay-2 mt-12 text-center">
          <p className="text-sm text-inkSoft">
            Gostou de algum trabalho ou detalhe do espaço? Envie a referência diretamente pelo WhatsApp:
          </p>
          <div className="mt-4 inline-flex">
            <a
              href={whatsappLink("Olá! Vi as fotos da galeria no site e gostaria de agendar um procedimento similar.")}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-luxury-shimmer inline-flex items-center gap-2 rounded-full bg-wine px-7 py-3.5 text-sm font-medium text-paper shadow-wine-glow transition-all duration-300 hover:bg-wineDark hover:shadow-wine-glow-lg hover:-translate-y-0.5 active:scale-[0.98] min-h-[44px]"
            >
              <WhatsAppIcon className="h-4 w-4" />
              <span>Agendar pelo WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
