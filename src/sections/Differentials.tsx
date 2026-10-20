import { company } from "../data/company";
import { ClockIcon, ShieldCheckIcon, SparklesIcon, CheckIcon } from "../components/icons";

export function Differentials() {
  const iconMap: Record<number, React.ReactNode> = {
    0: <ClockIcon className="w-6 h-6 text-wine" />,
    1: <ShieldCheckIcon className="w-6 h-6 text-wine" />,
    2: <SparklesIcon className="w-6 h-6 text-wine" />,
    3: <CheckIcon className="w-6 h-6 text-wine" />,
  };

  return (
    <section id="diferenciais" className="py-20 lg:py-28 bg-paperAlt/30">
      <div className="container-editorial">
        <div className="reveal-init max-w-2xl mb-14">
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-widest text-wine mb-3">
            <SparklesIcon className="h-4 w-4" />
            <span>Nossos Compromissos</span>
          </div>
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
                <div className="w-12 h-12 rounded-xl bg-wineLight/70 text-wine flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:rotate-3 shadow-sm mb-5">
                  {iconMap[idx] || <SparklesIcon className="w-6 h-6 text-wine" />}
                </div>

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
