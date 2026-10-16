import { company } from "../data/company";

export function Differentials() {
  return (
    <section id="diferenciais" className="py-20 lg:py-28 bg-paperAlt/30">
      <div className="container-editorial">
        <div className="reveal-init max-w-2xl mb-14">
          <h2 className="font-display text-3xl sm:text-4xl lg:text-[2.65rem] font-medium leading-[1.15] text-ink">
            A atenção que transforma o atendimento em bem-estar
          </h2>
          <p className="mt-4 text-base text-inkSoft leading-relaxed">
            Cada detalhe da nossa rotina foi pensado para quem valoriza pontualidade, higiene cirúrgica e resultados com elegância.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-5">
          {company.differentials.map((item, idx) => (
            <div
              key={item.id}
              className={`card-interactive reveal-init reveal-delay-${
                idx + 1
              } group flex flex-col justify-between rounded-2xl bg-paperPure border border-line p-7 sm:p-8 shadow-editorial hover:shadow-editorial-lg hover:border-wine/40`}
            >
              <div>
                <h3 className="font-display text-xl font-medium text-ink leading-snug group-hover:text-wine transition-colors">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-relaxed text-inkSoft">
                  {item.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-line/60">
                <span className="text-[11px] font-semibold uppercase tracking-wide text-wine transition-colors group-hover:text-wineDark">
                  Padrão Bella Estética
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
