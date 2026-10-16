import { company } from "../data/company";
import { whatsappLink } from "../data/whatsapp";
import { WhatsAppIcon, ShieldCheckIcon, ClockIcon } from "../components/icons";

export function About() {
  return (
    <section id="sobre" className="py-20 lg:py-28 overflow-hidden bg-paperAlt/30">
      <div className="container-editorial">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16 xl:gap-20">
          {/* Imagem principal do ambiente */}
          <div className="reveal-init relative order-2 lg:order-1">
            <div
              className="absolute -inset-4 rounded-3xl bg-gold/10 -rotate-2 -z-10 transition-transform duration-500 hover:rotate-0"
              aria-hidden="true"
            />

            <div className="card-interactive overflow-hidden rounded-2xl border border-line bg-paperAlt shadow-editorial-lg aspect-[4/3] sm:aspect-[16/11]">
              <img
                src="/images/about-clinic.jpg"
                alt="Cabine privativa de tratamento do Espaço Bella Estética em Itatiba — iluminação quente, maca confortável e ambiente climatizado"
                className="h-full w-full object-cover object-center"
                loading="lazy"
                width="800"
                height="550"
              />
            </div>

            <div className="absolute -bottom-6 -right-3 sm:bottom-6 sm:-right-6 rounded-2xl bg-paperPure/95 backdrop-blur-md p-5 shadow-editorial-lg border border-line max-w-[220px] transition-transform duration-300 hover:-translate-y-1">
              <p className="font-display text-2xl font-semibold text-wine">
                100% Privativo
              </p>
              <p className="text-xs text-inkSoft mt-1 leading-snug">
                Atendimento reservado, sempre com hora marcada.
              </p>
            </div>
          </div>

          {/* Texto e pilares */}
          <div className="reveal-init reveal-delay-1 order-1 lg:order-2 flex flex-col items-start">
            <h2 className="font-display text-3xl sm:text-4xl lg:text-[2.65rem] font-medium leading-[1.15] text-ink">
              {company.about.heading}
            </h2>

            <div className="mt-6 space-y-4 text-sm sm:text-base leading-relaxed text-inkSoft">
              {company.about.paragraphs.map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
            </div>

            {/* Pilares */}
            <div className="mt-8 space-y-5 w-full pt-6 border-t border-line">
              <div className="flex gap-4 items-start group">
                <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-wineLight text-wine mt-0.5 transition-transform duration-300 group-hover:scale-110">
                  <ShieldCheckIcon className="h-4 w-4" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-ink group-hover:text-wine transition-colors">Biossegurança e Esterilização Cirúrgica</h3>
                  <p className="text-xs sm:text-sm text-inkSoft mt-0.5">
                    Alicates e instrumentos metálicos autoclavados e selados com indicador químico por ciclo.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start group">
                <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-wineLight text-wine mt-0.5 transition-transform duration-300 group-hover:scale-110">
                  <ClockIcon className="h-4 w-4" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-ink group-hover:text-wine transition-colors">Respeito ao seu Tempo</h3>
                  <p className="text-xs sm:text-sm text-inkSoft mt-0.5">
                    Intervalos programados entre horários para que você seja atendida na hora exata, sem espera.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <a
                href={whatsappLink("Olá! Gostaria de conhecer o Espaço Bella Estética e saber mais sobre os procedimentos.")}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-luxury-shimmer inline-flex items-center gap-2 rounded-full bg-ink px-7 py-3.5 text-sm font-medium text-paper transition-all duration-300 hover:bg-wine hover:shadow-wine-glow hover:-translate-y-0.5 active:scale-[0.98]"
              >
                <WhatsAppIcon className="h-4 w-4" />
                <span>Conversar com nossa equipe</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
