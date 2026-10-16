import { company } from "../data/company";
import { whatsappLink } from "../data/whatsapp";
import { MapPinIcon, ClockIcon, WhatsAppIcon, SparklesIcon } from "../components/icons";

export function Location() {
  return (
    <section id="contato" className="py-20 lg:py-28">
      <div className="container-editorial">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          {/* Dados */}
          <div className="reveal-init">
            <h2 className="font-display text-3xl sm:text-4xl lg:text-[2.65rem] font-medium leading-[1.15] text-ink">
              Fácil acesso no Centro de {company.city}
            </h2>

            <p className="mt-4 text-base text-inkSoft leading-relaxed">
              Um ambiente projetado para ser o seu refúgio de paz. Atendemos com hora marcada para garantir privacidade e tranquilidade durante toda a visita.
            </p>

            <div className="mt-8 space-y-4">
              {/* Endereço */}
              <div className="card-interactive flex gap-4 items-start rounded-2xl bg-paperPure p-5 border border-line shadow-sm hover:shadow-editorial hover:border-wine/30">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-wineLight text-wine">
                  <MapPinIcon className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-base font-semibold text-ink">Endereço</h3>
                  <p className="text-sm text-inkSoft mt-1">
                    {company.address.street} — {company.address.neighborhood}
                  </p>
                  <p className="text-sm text-inkMuted">
                    {company.address.city}/{company.address.state} — CEP {company.address.zip}
                  </p>
                  {company.address.reference && (
                    <p className="text-xs text-wine font-medium mt-1.5">
                      {company.address.reference}
                    </p>
                  )}
                </div>
              </div>

              {/* Horários */}
              <div className="card-interactive flex gap-4 items-start rounded-2xl bg-paperPure p-5 border border-line shadow-sm hover:shadow-editorial hover:border-wine/30">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-wineLight text-wine">
                  <ClockIcon className="h-5 w-5" />
                </div>
                <div className="w-full">
                  <h3 className="text-base font-semibold text-ink">Horários</h3>
                  <ul className="mt-2 divide-y divide-line/60 text-sm">
                    {company.hours.map((h) => (
                      <li key={h.days} className="py-1.5 flex justify-between gap-4">
                        <span className="font-medium text-inkSoft">{h.days}:</span>
                        <span className="text-ink text-right">{h.hours}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-3 flex items-center gap-1.5 text-xs text-wine font-medium">
                    <SparklesIcon className="h-3.5 w-3.5" />
                    <span>Exclusivamente com agendamento prévio</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Ações */}
            <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
              <a
                href={company.address.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-line bg-paperPure px-6 py-3.5 text-sm font-medium text-ink transition-all duration-300 hover:border-wine hover:text-wine hover:-translate-y-0.5 active:scale-[0.98] shadow-sm"
              >
                <MapPinIcon className="h-4 w-4 text-wine" />
                <span>Traçar Rota no Google Maps</span>
              </a>

              <a
                href={whatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-luxury-shimmer inline-flex items-center justify-center gap-2 rounded-full bg-wine px-6 py-3.5 text-sm font-medium text-paper shadow-wine-glow transition-all duration-300 hover:bg-wineDark hover:shadow-wine-glow-lg hover:-translate-y-0.5 active:scale-[0.98]"
              >
                <WhatsAppIcon className="h-4 w-4" />
                <span>Agendar Horário</span>
              </a>
            </div>
          </div>

          {/* Mapa */}
          <div className="reveal-init reveal-delay-2 card-interactive overflow-hidden rounded-2xl border border-line bg-paperAlt shadow-editorial-lg aspect-[4/3] sm:aspect-[16/11] lg:aspect-auto lg:h-[460px]">
            <iframe
              title={`Localização do ${company.name} em ${company.address.city}/${company.address.state}`}
              src={`https://www.google.com/maps?q=${encodeURIComponent(
                `${company.address.street}, ${company.address.neighborhood}, ${company.address.city} - ${company.address.state}`
              )}&output=embed`}
              className="h-full w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
