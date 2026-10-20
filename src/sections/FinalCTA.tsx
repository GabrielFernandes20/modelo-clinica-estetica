import { company } from "../data/company";
import { whatsappLink } from "../data/whatsapp";
import { WhatsAppIcon, SparklesIcon, MapPinIcon } from "../components/icons";

export function FinalCTA() {
  return (
    <section className="relative overflow-hidden bg-wine text-paper py-20 lg:py-28">
      {/* Luz ambiente suave com animação orgânica */}
      <div
        className="pointer-events-none absolute -top-24 -right-24 h-96 w-96 rounded-full bg-gold/20 blur-3xl ambient-float-1"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -bottom-24 -left-24 h-80 w-80 rounded-full bg-wineDark/80 blur-3xl ambient-float-2"
        aria-hidden="true"
      />

      <div className="container-editorial relative">
        <div className="reveal-scale max-w-3xl mx-auto text-center flex flex-col items-center">
          <div className="flex items-center gap-2 mb-6 text-gold/90 animate-bounce-subtle">
            <SparklesIcon className="h-6 w-6" />
          </div>

          <h2 className="font-display text-3xl sm:text-4xl lg:text-[3rem] font-medium leading-[1.15] text-paper">
            Sua melhor versão começa com uma pausa dedicada a você em {company.city}.
          </h2>

          <p className="mt-5 text-base sm:text-lg text-paper/85 max-w-2xl leading-relaxed">
            Permita-se viver uma experiência de cuidado minucioso, conforto absoluto e resultados que realçam a sua beleza autêntica no {company.shortName}. Fale agora diretamente com a nossa equipe pelo WhatsApp.
          </p>

          <div className="mt-9 flex flex-col sm:flex-row items-center gap-4 w-full justify-center">
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-luxury-shimmer reveal-init reveal-delay-1 w-full sm:w-auto inline-flex items-center justify-center gap-3 rounded-full bg-paper px-9 py-4 text-base font-semibold text-wine shadow-xl transition-all duration-300 hover:bg-paperAlt hover:shadow-2xl hover:-translate-y-0.5 active:scale-[0.98]"
            >
              <WhatsAppIcon className="h-5 w-5" />
              <span>Agendar pelo WhatsApp</span>
            </a>

            <a
              href="#contato"
              className="reveal-init reveal-delay-2 w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full border border-paper/30 bg-transparent px-8 py-4 text-sm font-medium text-paper transition-all duration-300 hover:bg-paper/10 hover:border-paper/60 hover:-translate-y-0.5 active:scale-[0.98]"
            >
              <MapPinIcon className="h-4 w-4" />
              <span>Como Chegar</span>
            </a>
          </div>

          <p className="mt-4 text-xs text-paper/60">
            Atendimento individual com hora marcada — resposta ágil pelo WhatsApp
          </p>
        </div>
      </div>
    </section>
  );
}
