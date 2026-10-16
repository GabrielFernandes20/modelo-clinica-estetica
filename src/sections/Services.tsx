import { useState, useMemo } from "react";
import { company, type Service } from "../data/company";
import { whatsappLink } from "../data/whatsapp";
import { WhatsAppIcon, ClockIcon, CheckIcon, SparklesIcon } from "../components/icons";

type CategoryFilter = "todos" | "facial" | "corporal";

export function Services() {
  const [activeTab, setActiveTab] = useState<CategoryFilter>("todos");

  const filteredServices = useMemo(() => {
    if (activeTab === "facial") {
      return company.services.filter((s) => s.id === "svc-1" || s.id === "svc-2");
    }
    if (activeTab === "corporal") {
      return company.services.filter((s) => s.id === "svc-3" || s.id === "svc-4");
    }
    return company.services;
  }, [activeTab]);

  return (
    <section id="servicos" className="py-20 lg:py-28 border-y border-line/60">
      <div className="container-editorial">
        {/* Cabeçalho da Seção */}
        <div className="reveal-init flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-line">
          <div className="max-w-2xl">
            <h2 className="font-display text-3xl sm:text-4xl lg:text-[2.75rem] font-medium leading-[1.15] text-ink">
              Procedimentos para realçar a sua beleza com precisão
            </h2>
            <p className="mt-4 text-base sm:text-lg text-inkSoft leading-relaxed">
              Tratamentos executados com calma, protocolo técnico e dermocosméticos de grau profissional em Itatiba.
            </p>
          </div>

          <div className="hidden lg:block text-right flex-shrink-0">
            <p className="text-xs text-inkMuted mb-2">Precisa de recomendação personalizada?</p>
            <a
              href={whatsappLink("Olá! Gostaria de tirar dúvidas sobre os procedimentos da Espaço Bella Estética.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium text-wine hover:text-wineDark transition-colors group"
            >
              <WhatsAppIcon className="h-4 w-4 transition-transform group-hover:scale-110" />
              <span className="underline decoration-line underline-offset-4 group-hover:decoration-wine">
                Fale com nossa especialista
              </span>
            </a>
          </div>
        </div>

        {/* Abas Interativas de Filtro (Delight & Operabilidade) */}
        <div className="reveal-init reveal-delay-1 mt-8 flex items-center gap-2 overflow-x-auto pb-2 sm:pb-0" role="tablist" aria-label="Filtrar por categoria">
          <button
            type="button"
            role="tab"
            aria-selected={activeTab === "todos"}
            onClick={() => setActiveTab("todos")}
            className={`rounded-full px-5 py-2 text-xs sm:text-sm font-medium transition-all duration-200 active:scale-95 ${
              activeTab === "todos"
                ? "bg-wine text-paper shadow-sm"
                : "bg-paperPure text-inkSoft border border-line hover:border-wine/50 hover:text-ink"
            }`}
          >
            Todos os Procedimentos
          </button>
          <button
            type="button"
            role="tab"
            aria-selected={activeTab === "facial"}
            onClick={() => setActiveTab("facial")}
            className={`rounded-full px-5 py-2 text-xs sm:text-sm font-medium transition-all duration-200 active:scale-95 ${
              activeTab === "facial"
                ? "bg-wine text-paper shadow-sm"
                : "bg-paperPure text-inkSoft border border-line hover:border-wine/50 hover:text-ink"
            }`}
          >
            Rosto & Olhar
          </button>
          <button
            type="button"
            role="tab"
            aria-selected={activeTab === "corporal"}
            onClick={() => setActiveTab("corporal")}
            className={`rounded-full px-5 py-2 text-xs sm:text-sm font-medium transition-all duration-200 active:scale-95 ${
              activeTab === "corporal"
                ? "bg-wine text-paper shadow-sm"
                : "bg-paperPure text-inkSoft border border-line hover:border-wine/50 hover:text-ink"
            }`}
          >
            Unhas & Relaxamento
          </button>
        </div>

        {/* Grade de Procedimentos */}
        <div className="reveal-init reveal-delay-2 mt-8 grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 transition-all duration-300">
          {filteredServices.map((service: Service) => (
            <article
              key={service.id}
              className="card-interactive group flex flex-col justify-between overflow-hidden rounded-2xl bg-paperPure border border-line shadow-editorial hover:shadow-editorial-lg hover:border-wine/40"
            >
              <div>
                {/* Imagem do Procedimento com zoom suave ao passar o mouse */}
                {service.image && (
                  <div className="relative aspect-[16/10] w-full overflow-hidden bg-paperAlt">
                    <img
                      src={service.image}
                      alt={service.name}
                      className="h-full w-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                      loading="lazy"
                      width="600"
                      height="375"
                    />
                    {/* Badge de destaque */}
                    {service.highlight && (
                      <div className="absolute top-4 left-4 inline-flex items-center gap-1.5 rounded-full bg-paperPure/90 backdrop-blur-md px-3 py-1 text-xs font-semibold text-wine border border-line/60 shadow-sm">
                        <SparklesIcon className="h-3.5 w-3.5" />
                        <span>{service.highlight}</span>
                      </div>
                    )}
                    {service.duration && (
                      <div className="absolute bottom-4 right-4 inline-flex items-center gap-1.5 rounded-full bg-ink/80 backdrop-blur-sm px-3 py-1 text-xs font-medium text-paper shadow-sm">
                        <ClockIcon className="h-3.5 w-3.5" />
                        <span>{service.duration}</span>
                      </div>
                    )}
                  </div>
                )}

                {/* Conteúdo */}
                <div className="p-6 sm:p-8">
                  <h3 className="font-display text-2xl font-medium text-ink group-hover:text-wine transition-colors leading-snug">
                    {service.name}
                  </h3>

                  <p className="mt-3 text-sm sm:text-base leading-relaxed text-inkSoft">
                    {service.description}
                  </p>

                  {service.benefits && service.benefits.length > 0 && (
                    <ul className="mt-5 space-y-2 pt-5 border-t border-line/70">
                      {service.benefits.map((benefit, i) => (
                        <li key={i} className="flex items-center gap-2.5 text-xs sm:text-sm text-inkSoft">
                          <span className="flex h-4 w-4 items-center justify-center rounded-full bg-wineLight text-wine flex-shrink-0">
                            <CheckIcon className="h-3 w-3" />
                          </span>
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>

              {/* CTA de agendamento */}
              <div className="p-6 sm:p-8 pt-0">
                <a
                  href={whatsappLink(
                    `Olá! Gostaria de agendar o procedimento "${service.name}" no Espaço Bella Estética em Itatiba.`
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-luxury-shimmer w-full inline-flex items-center justify-center gap-2 rounded-xl bg-paperAlt/80 py-3.5 px-5 text-sm font-medium text-ink border border-line transition-all duration-200 hover:bg-wine hover:text-paper hover:border-wine hover:shadow-wine-glow active:scale-[0.98]"
                >
                  <WhatsAppIcon className="h-4 w-4" />
                  <span>Agendar pelo WhatsApp</span>
                </a>
              </div>
            </article>
          ))}
        </div>

        {/* Rodapé da seção */}
        <div className="reveal-init reveal-delay-2 mt-12 rounded-2xl border border-line bg-paperPure p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 card-interactive">
          <div>
            <h4 className="text-base font-semibold text-ink">
              Não sabe qual protocolo escolher?
            </h4>
            <p className="text-xs sm:text-sm text-inkSoft mt-1">
              Nossa equipe faz uma avaliação inicial gratuita para recomendar o tratamento certo para você.
            </p>
          </div>

          <a
            href={whatsappLink("Olá! Gostaria de agendar uma avaliação inicial no Espaço Bella Estética.")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-full border border-wine bg-transparent px-6 py-3 text-xs sm:text-sm font-medium text-wine transition-all duration-200 hover:bg-wine hover:text-paper hover:shadow-wine-glow active:scale-[0.98] flex-shrink-0 whitespace-nowrap"
          >
            Solicitar Avaliação Gratuita
          </a>
        </div>
      </div>
    </section>
  );
}
