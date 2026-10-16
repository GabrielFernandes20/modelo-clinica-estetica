import { company } from "../data/company";
import { StarIcon } from "../components/icons";

export function Testimonials() {
  return (
    <section id="avaliacoes" className="py-20 lg:py-28 border-y border-line/60">
      <div className="container-editorial">
        {/* Cabeçalho */}
        <div className="reveal-init flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-line">
          <div className="max-w-xl">
            <h2 className="font-display text-3xl sm:text-4xl lg:text-[2.65rem] font-medium leading-[1.15] text-ink">
              O que dizem as clientes que confiam em nós
            </h2>
          </div>

          {/* Avaliação média */}
          <div className="card-interactive flex items-center gap-3 rounded-2xl bg-paperPure border border-line p-4 shadow-sm flex-shrink-0">
            <div className="flex text-amber-500">
              {[...Array(5)].map((_, i) => (
                <StarIcon key={i} className="h-5 w-5 fill-current" />
              ))}
            </div>
            <div>
              <p className="text-sm font-semibold text-ink leading-none">
                4.9 / 5.0 no Google
              </p>
              <p className="text-[11px] text-inkMuted mt-0.5">
                Mais de 1.200 atendimentos em Itatiba
              </p>
            </div>
          </div>
        </div>

        {/* Depoimentos */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {company.testimonials.map((t, idx) => (
            <div
              key={t.id}
              className={`card-interactive reveal-init reveal-delay-${
                idx + 1
              } flex flex-col justify-between rounded-2xl bg-paperPure p-7 sm:p-8 border border-line shadow-editorial hover:shadow-editorial-lg hover:border-wine/30`}
            >
              <div>
                <div className="flex items-center justify-between">
                  <div className="flex text-amber-500">
                    {[...Array(t.rating)].map((_, i) => (
                      <StarIcon key={i} className="h-4 w-4 fill-current transition-transform hover:scale-125 duration-150" />
                    ))}
                  </div>
                  {t.date && (
                    <span className="text-[11px] text-inkMuted">{t.date}</span>
                  )}
                </div>

                <p className="mt-5 text-sm sm:text-base leading-relaxed text-inkSoft">
                  "{t.comment}"
                </p>
              </div>

              <div className="mt-6 pt-5 border-t border-line/60">
                <p className="font-display text-base font-semibold text-ink">
                  {t.name}
                </p>
                <p className="text-xs text-wine font-medium mt-0.5">
                  {t.service}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
