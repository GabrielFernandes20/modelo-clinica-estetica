import { company } from "../data/company";
import { whatsappLink } from "../data/whatsapp";
import { WhatsAppIcon, StarIcon, SparklesIcon, ShieldCheckIcon, ClockIcon } from "../components/icons";

export function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden pt-10 pb-16 sm:pt-14 sm:pb-24 lg:pt-16 lg:pb-28">
      {/* Luzes ambiente sutis e orgânicas */}
      <div
        className="pointer-events-none absolute -top-40 right-1/4 h-96 w-96 rounded-full bg-gold/15 blur-3xl ambient-float-1"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute top-1/2 left-0 h-80 w-80 rounded-full bg-wine/10 blur-3xl ambient-float-2"
        aria-hidden="true"
      />

      <div className="container-editorial relative grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-14 xl:gap-20">
        {/* Coluna de Conteúdo — sequência focal de entrada */}
        <div className="flex flex-col items-start text-left">
          {/* Badge de boas-vindas com efeito glow suave */}
          <div className="hero-animate-1 inline-flex items-center gap-2 rounded-full border border-gold/40 bg-goldLight/70 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-goldDark mb-6 shadow-sm">
            <SparklesIcon className="h-3.5 w-3.5 text-goldDark animate-pulse" />
            <span>Clínica de Estética & Ateliê de Beleza</span>
          </div>

          {/* H1 com tipografia ampla e elegante */}
          <h1 className="hero-animate-2 font-display text-4xl sm:text-5xl lg:text-[3.4rem] xl:text-[3.8rem] font-medium leading-[1.12] tracking-tight text-ink max-w-[19ch]">
            A sua beleza em evidência, com o cuidado que você merece.
          </h1>

          <p className="hero-animate-3 mt-6 max-w-xl text-base sm:text-lg leading-relaxed text-inkSoft">
            Um espaço acolhedor e sofisticado dedicado ao realce da sua beleza natural.
            Procedimentos faciais avançados, visagismo do olhar, cuidados corporais e terapias relaxantes — com atendimento 100% individualizado e horário marcado.
          </p>

          {/* Indicadores de confiança em linha */}
          <div className="hero-animate-4 mt-8 flex flex-wrap items-center gap-y-3 gap-x-7 text-xs sm:text-[13px] text-inkMuted">
            <div className="flex items-center gap-2 transition-all duration-200 hover:text-ink">
              <ClockIcon className="h-4 w-4 text-wine flex-shrink-0" />
              <span>Hora marcada sem espera</span>
            </div>
            <div className="flex items-center gap-2 transition-all duration-200 hover:text-ink">
              <ShieldCheckIcon className="h-4 w-4 text-wine flex-shrink-0" />
              <span>Biossegurança hospitalar</span>
            </div>
            <div className="flex items-center gap-2 transition-all duration-200 hover:text-ink">
              <SparklesIcon className="h-4 w-4 text-gold flex-shrink-0" />
              <span>Cosméticos de alta performance</span>
            </div>
          </div>

          {/* CTAs */}
          <div className="hero-animate-5 mt-8 flex w-full flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-luxury-shimmer inline-flex items-center justify-center gap-2.5 rounded-full bg-wine px-8 py-4 text-base font-semibold text-paper shadow-wine-glow transition-all duration-300 hover:bg-wineDark hover:shadow-wine-glow-lg hover:-translate-y-1 active:scale-[0.98]"
            >
              <WhatsAppIcon className="h-5 w-5" />
              <span>Agendar pelo WhatsApp</span>
            </a>

            <a
              href="#servicos"
              className="inline-flex items-center justify-center rounded-full border border-line bg-paperPure/90 px-7 py-4 text-sm font-semibold text-ink transition-all duration-300 hover:border-wine hover:text-wine hover:bg-white hover:-translate-y-1 hover:shadow-sm active:scale-[0.98]"
            >
              Conhecer Procedimentos
            </a>
          </div>

          <p className="mt-2.5 text-xs text-inkMuted pl-1">
            Atendimento humanizado e confirmação rápida de horários.
          </p>

          {/* Prova social com design editorial */}
          <div className="hero-animate-6 mt-8 pt-7 border-t border-line/80 w-full flex items-center gap-4">
            <div className="flex text-amber-500">
              {[...Array(5)].map((_, i) => (
                <StarIcon key={i} className="h-4 w-4 fill-current transition-transform duration-200 hover:scale-125" />
              ))}
            </div>
            <div className="text-xs sm:text-sm text-inkSoft">
              <span className="font-semibold text-ink">4.9 de avaliação no Google</span> — centenas de clientes satisfeitas
            </div>
          </div>
        </div>

        {/* Coluna Visual */}
        <div className="hero-visual-animate relative mx-auto w-full max-w-md lg:max-w-none">
          {/* Moldura decorativa sutil */}
          <div
            className="absolute -inset-3 sm:-inset-4 rounded-3xl border border-line bg-paperAlt/50 -rotate-1 transition-transform duration-500 hover:rotate-0"
            aria-hidden="true"
          />

          <div className="card-interactive relative overflow-hidden rounded-3xl shadow-editorial-lg border border-line/60 bg-paperAlt aspect-[3/4] w-full group">
            <img
              src="/images/hero-main.jpg"
              alt="Atendimento estético profissional de alta performance"
              className="h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-[1.02]"
              width="768"
              height="1024"
              fetchPriority="high"
            />

            {/* Localização discreta com badge translúcido */}
            <div className="absolute top-4 right-4 rounded-full bg-paperPure/90 backdrop-blur-md px-3.5 py-1 text-[11px] font-semibold tracking-wide text-ink border border-line/50 shadow-sm transition-transform duration-300 hover:scale-105">
              {company.city} • {company.state}
            </div>

            {/* Card de credencial com leve elevação */}
            <div className="absolute bottom-4 inset-x-4 sm:bottom-6 sm:inset-x-6 rounded-2xl bg-paperPure/95 backdrop-blur-md p-4 sm:p-5 border border-line/80 shadow-editorial transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full bg-wineLight text-wine transition-transform duration-300 group-hover:scale-110">
                  <SparklesIcon className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs sm:text-sm font-semibold text-ink">
                    Experiência Exclusiva e Privativa
                  </p>
                  <p className="text-[11px] sm:text-xs text-inkMuted leading-tight mt-0.5">
                    Ambiente silencioso e relaxante projetado para o seu descanso completo.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Indicador animado de rolagem */}
      <div className="mt-12 lg:mt-16 flex flex-col items-center justify-center animate-fade-in-up" style={{animationDelay: '1000ms'}}>
        <a
          href="#servicos"
          aria-label="Rolar para conhecer procedimentos"
          className="group flex flex-col items-center gap-2 text-inkMuted hover:text-wine transition-colors"
        >
          <span className="text-[11px] font-medium uppercase tracking-widest text-inkMuted group-hover:text-wine transition-colors">
            Role para explorar
          </span>
          <div className="flex h-8 w-5 items-start justify-center rounded-full border border-line group-hover:border-wine p-1 transition-colors">
            <div className="h-1.5 w-1.5 rounded-full bg-wine animate-bounce-subtle" />
          </div>
        </a>
      </div>
    </section>
  );
}
