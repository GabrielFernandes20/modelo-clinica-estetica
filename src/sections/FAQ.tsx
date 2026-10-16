import { useState } from "react";
import { company } from "../data/company";
import { whatsappLink } from "../data/whatsapp";
import { ChevronDownIcon, WhatsAppIcon, SparklesIcon } from "../components/icons";

interface FAQItem {
  question: string;
  answer: string;
}

const FAQ_ITEMS: FAQItem[] = [
  {
    question: "Como funciona o agendamento no Espaço Bella Estética?",
    answer:
      "Nosso atendimento é 100% individualizado e com hora marcada para assegurar que você receba dedicação exclusiva, sem salas de espera cheias. O agendamento é feito de forma rápida pelo WhatsApp com confirmação prévia.",
  },
  {
    question: "Como é garantida a biossegurança e esterilização dos instrumentos?",
    answer:
      "Seguimos rigorosos padrões sanitários. Todos os alicates e instrumentos metálicos passam por termodesinfecção e são esterilizados em autoclave hospitalar, lacrados em embalagens cirúrgicas com fita indicadora química de ciclo.",
  },
  {
    question: "Nunca fiz limpeza de pele profunda, vou ficar com o rosto vermelho?",
    answer:
      "Nosso protocolo combina vapor de ozônio, extração delicada com peeling ultrassônico e máscara hidroplástica calmante de efeito glow. O procedimento é projetado para acalmar a derme imediatamente, permitindo que você retorne à sua rotina com viço natural.",
  },
  {
    question: "Quais são as formas de pagamento disponíveis?",
    answer:
      "Aceitamos cartões de crédito (com possibilidade de parcelamento conforme o procedimento), cartões de débito e transferências instantâneas via Pix.",
  },
  {
    question: "Onde o espaço está localizado em Itatiba?",
    answer:
      `Estamos no Centro de ${company.city}, na ${company.address.street} (${company.address.reference}). O local oferece fácil acesso, segurança e vagas de estacionamento nas imediações.`,
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex((current) => (current === idx ? null : idx));
  };

  return (
    <section id="faq" className="py-20 lg:py-28 bg-paperAlt/20 border-t border-line/60">
      <div className="container-editorial">
        <div className="reveal-init max-w-2xl mx-auto text-center mb-12">
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-widest text-wine mb-3">
            <SparklesIcon className="h-4 w-4" />
            <span>Tire suas Dúvidas</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-[2.65rem] font-medium leading-[1.15] text-ink">
            Perguntas Frequentes
          </h2>
          <p className="mt-3 text-base text-inkSoft">
            Tudo o que você precisa saber para se sentir confiante e acolhida em sua primeira visita.
          </p>
        </div>

        <div className="reveal-init reveal-delay-1 max-w-3xl mx-auto space-y-4">
          {FAQ_ITEMS.map((item, idx) => {
            const isOpen = openIndex === idx;
            const number = String(idx + 1).padStart(2, "0");
            return (
              <div
                key={idx}
                className={`card-interactive group overflow-hidden rounded-2xl border transition-all duration-300 ${
                  isOpen
                    ? "bg-white border-wine/40 shadow-editorial ring-1 ring-wine/10"
                    : "bg-paperPure border-line shadow-sm hover:border-wine/30 hover:shadow-editorial hover:bg-white"
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggle(idx)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between p-5 sm:p-6 text-left font-display text-base sm:text-lg font-medium text-ink transition-colors duration-200 group-hover:text-wine cursor-pointer"
                >
                  <div className="flex items-center gap-3.5 sm:gap-4 pr-4">
                    <span
                      className={`text-xs sm:text-sm font-semibold tracking-wider font-body transition-colors duration-200 ${
                        isOpen ? "text-wine" : "text-inkMuted group-hover:text-wine"
                      }`}
                    >
                      {number}
                    </span>
                    <span className="leading-snug">{item.question}</span>
                  </div>

                  <span
                    className={`flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full transition-all duration-300 ${
                      isOpen
                        ? "rotate-180 bg-wine text-paper shadow-wine-glow scale-105"
                        : "bg-paperAlt text-inkSoft group-hover:bg-wineLight group-hover:text-wine group-hover:scale-105"
                    }`}
                  >
                    <ChevronDownIcon className="h-4 w-4" />
                  </span>
                </button>

                <div
                  className={`grid transition-all duration-300 ease-out ${
                    isOpen ? "grid-rows-[1fr] opacity-100 pb-6 px-5 sm:px-6" : "grid-rows-[0fr] opacity-0 px-5 sm:px-6"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="pt-2 border-t border-line/60">
                      <div className="border-l-2 border-wine/40 pl-4 py-1">
                        <p className="text-sm sm:text-base leading-relaxed text-inkSoft">
                          {item.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Suporte WhatsApp */}
        <div className="reveal-init reveal-delay-2 mt-12 text-center">
          <p className="text-xs sm:text-sm text-inkMuted">
            Tem outra dúvida? Converse com nossa equipe diretamente:
          </p>
          <div className="mt-3 inline-flex">
            <a
              href={whatsappLink("Olá! Tenho uma dúvida sobre o atendimento no Espaço Bella Estética.")}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-luxury-shimmer inline-flex items-center gap-2 rounded-full border border-line bg-paperPure px-6 py-3 text-xs sm:text-sm font-medium text-ink transition-all duration-300 hover:border-wine hover:text-wine hover:shadow-wine-glow hover:-translate-y-0.5 active:scale-95 shadow-sm"
            >
              <WhatsAppIcon className="h-4 w-4 text-wine" />
              <span>Tirar Dúvidas no WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
