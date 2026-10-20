import { useState, useMemo } from "react";
import { company } from "../data/company";
import { whatsappLink } from "../data/whatsapp";
import { WhatsAppIcon, SparklesIcon, CheckIcon, ClockIcon } from "../components/icons";

interface PackageOption {
  id: string;
  name: string;
  durationMinutes: number;
  category: string;
  tag?: string;
}

const PACKAGE_OPTIONS: PackageOption[] = [
  { id: "limpeza", name: "Limpeza de Pele Profunda", durationMinutes: 75, category: "Facial", tag: "Mais pedido" },
  { id: "sobrancelhas", name: "Design & Visagismo de Sobrancelhas", durationMinutes: 40, category: "Olhar" },
  { id: "unhas-gel", name: "Spa das Mãos & Esmaltação em Gel", durationMinutes: 60, category: "Nails" },
  { id: "massagem", name: "Massagem Relaxante com Pedras Quentes", durationMinutes: 60, category: "Corporal", tag: "Relax" },
  { id: "detox-facial", name: "Peeling de Diamante & Hidratação", durationMinutes: 50, category: "Facial" },
  { id: "pedicure-spa", name: "Spa dos Pés com Esfoliação Suave", durationMinutes: 45, category: "Nails" },
];

export function PackageCalculator() {
  const [selectedIds, setSelectedIds] = useState<string[]>(["limpeza", "sobrancelhas"]);

  const toggleService = (id: string) => {
    setSelectedIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const selectedServices = useMemo(() => {
    return PACKAGE_OPTIONS.filter((opt) => selectedIds.includes(opt.id));
  }, [selectedIds]);

  const totalTime = useMemo(() => {
    return selectedServices.reduce((acc, curr) => acc + curr.durationMinutes, 0);
  }, [selectedServices]);

  const whatsappMessage = useMemo(() => {
    if (selectedServices.length === 0) {
      return `Olá! Gostaria de montar um pacote de procedimentos personalizado no ${company.name}.`;
    }
    const names = selectedServices.map((s) => s.name).join(" + ");
    return `Olá! Montei meu pacote personalizado pelo site: [${names}]. Qual a disponibilidade de horários para essa semana?`;
  }, [selectedServices]);

  return (
    <section id="monte-seu-dia" className="py-20 lg:py-28 border-b border-line/60">
      <div className="container-editorial">
        <div className="reveal-init text-center max-w-2xl mx-auto pb-10">
          <div className="inline-flex items-center gap-2 rounded-full border border-wine/30 bg-wineLight px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-wine mb-4">
            <SparklesIcon className="h-3.5 w-3.5 text-wine" />
            <span>Experiência Sob Medida</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-[2.75rem] font-medium leading-[1.15] text-ink">
            Monte o seu momento de cuidado exclusivo
          </h2>
          <p className="mt-4 text-base sm:text-lg text-inkSoft leading-relaxed">
            Selecione os procedimentos que deseja combinar no mesmo dia. Cuidamos do seu horário com calma e atenção total.
          </p>
        </div>

        <div className="reveal-init max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Opções de Seleção */}
          <div className="reveal-from-left lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            {PACKAGE_OPTIONS.map((item) => {
              const isSelected = selectedIds.includes(item.id);
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => toggleService(item.id)}
                  className={`flex flex-col justify-between text-left p-4 rounded-2xl border transition-all duration-200 active:scale-[0.98] ${
                    isSelected
                      ? "border-wine bg-wineLight/60 shadow-sm ring-1 ring-wine/30"
                      : "border-line bg-paperPure hover:border-wine/40 hover:bg-paperAlt/40"
                  }`}
                >
                  <div className="flex items-start justify-between gap-2">
                    <span className="text-xs font-medium text-inkMuted uppercase tracking-wider">
                      {item.category}
                    </span>
                    <span
                      className={`h-5 w-5 rounded-full flex items-center justify-center transition-all duration-200 ${
                        isSelected ? "bg-wine text-paper scale-110 animate-check-spring" : "border border-line bg-white"
                      }`}
                    >
                      {isSelected && <CheckIcon className="h-3 w-3" />}
                    </span>
                  </div>

                  <div className="mt-3">
                    <p className="font-display text-base font-semibold text-ink leading-snug">
                      {item.name}
                    </p>
                    <div className="mt-2 flex items-center gap-1.5 text-xs text-inkSoft">
                      <ClockIcon className="h-3.5 w-3.5 text-wine" />
                      <span>{item.durationMinutes} min de sessão</span>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Resumo do Pacote / Conversão Direta */}
          <div className="reveal-from-right lg:col-span-5 bg-paperPure rounded-3xl p-6 sm:p-8 border border-line shadow-editorial-lg flex flex-col justify-between sticky top-28">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-line">
                <h3 className="font-display text-xl font-medium text-ink">
                  Seu Pacote Personalizado
                </h3>
                <span key={selectedServices.length} className="rounded-full bg-goldLight px-2.5 py-0.5 text-xs font-bold text-goldDark animate-badge-pop">
                  {selectedServices.length} {selectedServices.length === 1 ? "item" : "itens"}
                </span>
              </div>

              {/* Lista dos Selecionados */}
              <div className="py-5 space-y-3 min-h-[120px]">
                {selectedServices.length === 0 ? (
                  <p className="text-sm text-inkMuted text-center py-6">
                    Clique nos procedimentos ao lado para montar sua combinação de tratamentos.
                  </p>
                ) : (
                  selectedServices.map((service) => (
                    <div
                      key={service.id}
                      className="flex items-center justify-between text-sm py-1 border-b border-line/40 last:border-0 animate-toast-slide"
                    >
                      <span className="text-ink font-medium">{service.name}</span>
                      <span className="text-xs text-inkMuted flex-shrink-0">
                        {service.durationMinutes} min
                      </span>
                    </div>
                  ))
                )}
              </div>

              {/* Tempo Total Estimado */}
              {selectedServices.length > 0 && (
                <div key={totalTime} className="bg-paperAlt/60 rounded-xl p-3.5 flex items-center justify-between text-xs text-inkSoft mb-6 animate-price-pop">
                  <span>Tempo estimado total:</span>
                  <span className="font-bold text-ink">
                    aprox. {Math.floor(totalTime / 60) > 0 ? `${Math.floor(totalTime / 60)}h ` : ""}
                    {totalTime % 60 > 0 ? `${totalTime % 60}min` : ""}
                  </span>
                </div>
              )}
            </div>

            {/* CTA Final para Agendamento */}
            <div>
              <a
                href={whatsappLink(whatsappMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-luxury-shimmer w-full inline-flex items-center justify-center gap-2.5 rounded-full bg-wine px-6 py-4 text-sm font-semibold text-paper shadow-wine-glow transition-all duration-300 hover:bg-wineDark hover:shadow-wine-glow-lg hover:-translate-y-0.5 active:scale-[0.98]"
              >
                <WhatsAppIcon className="h-4 w-4" />
                <span>Agendar Pacote no WhatsApp</span>
              </a>
              <p className="mt-2.5 text-center text-[11px] text-inkMuted">
                Confirmação imediata com atendimento humanizado
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
