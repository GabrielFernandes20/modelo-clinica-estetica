import { useEffect, useState } from "react";
import { company } from "../data/company";
import { whatsappLink } from "../data/whatsapp";
import { MenuIcon, CloseIcon, WhatsAppIcon, ClockIcon } from "./icons";

// Links principais mais nobres e estratégicos para o Header Desktop (arejado e sem amontoamento)
const DESKTOP_NAV_LINKS = [
  { label: "Procedimentos", href: "#servicos" },
  { label: "Antes & Depois", href: "#resultados" },
  { label: "Monte Seu Dia", href: "#monte-seu-dia" },
  { label: "A Clínica", href: "#sobre" },
  { label: "Avaliações", href: "#avaliacoes" },
  { label: "Contato", href: "#contato" },
];

// Menu completo para o Drawer Mobile
const ALL_NAV_LINKS = [
  { label: "Início", href: "#inicio" },
  { label: "Procedimentos", href: "#servicos" },
  { label: "Antes & Depois", href: "#resultados" },
  { label: "Monte Seu Dia (Simulador)", href: "#monte-seu-dia" },
  { label: "A Clínica & O Espaço", href: "#sobre" },
  { label: "Galeria de Fotos", href: "#galeria" },
  { label: "Diferenciais", href: "#diferenciais" },
  { label: "Avaliações de Clientes", href: "#avaliacoes" },
  { label: "Dúvidas Frequentes", href: "#faq" },
  { label: "Localização & Contato", href: "#contato" },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 15);
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        setScrollProgress(Math.min(100, Math.max(0, (window.scrollY / totalScroll) * 100)));
      }
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) setIsOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [isOpen]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <>
      {/* Faixa Superior Fina & Refinada (Substitui as faixas empilhadas por uma barra limpa e elegante) */}
      <div className="bg-ink text-paper py-2 px-4 text-xs font-medium border-b border-white/5">
        <div className="container-editorial flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="inline-block h-2 w-2 rounded-full bg-emerald-400 animate-pulse flex-shrink-0" />
            <span className="text-paper/90 text-[11px] sm:text-xs">
              Atendimento exclusivo com hora marcada · {company.address.neighborhood}, {company.city}
            </span>
          </div>
          <div className="hidden sm:flex items-center gap-4 text-paper/70 text-[11px] sm:text-xs">
            <span className="flex items-center gap-1.5">
              <ClockIcon className="w-3.5 h-3.5 text-gold" />
              Terça a Sábado
            </span>
            <span className="opacity-30">|</span>
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gold hover:text-white transition-colors flex items-center gap-1 font-semibold"
            >
              <WhatsAppIcon className="w-3.5 h-3.5" />
              <span>Agendamento Direto</span>
            </a>
          </div>
        </div>
      </div>

      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          scrolled
            ? "bg-paper/95 backdrop-blur-md shadow-editorial border-b border-line"
            : "bg-paper/90 backdrop-blur-sm border-b border-line/60"
        }`}
      >
        {/* Barra de progresso de rolagem refinada */}
        <div
          className="absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-wine via-gold to-wine shadow-wine-glow transition-[width] duration-100 ease-out"
          style={{ width: `${scrollProgress}%` }}
          aria-hidden="true"
        />

        <div className="container-editorial flex h-20 sm:h-22 items-center justify-between gap-6">
          {/* Logo com tratamento de blend e respiro generoso */}
          <a
            href="#inicio"
            className="group flex items-center gap-3 py-1 flex-shrink-0"
            aria-label={`${company.name} — Voltar ao início`}
          >
            <img
              src="/images/logo-bella-estetica.jpg"
              alt={`${company.name} — Clínica & Estética`}
              className="h-12 sm:h-14 w-auto object-contain mix-blend-multiply transition-transform duration-300 group-hover:scale-105"
            />
          </a>

          {/* Navegação Desktop com espaçamento generoso e visual nobre */}
          <nav className="hidden items-center gap-7 xl:gap-9 lg:flex" aria-label="Navegação principal">
            {DESKTOP_NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-[13px] xl:text-sm font-semibold tracking-wide text-inkSoft transition-colors duration-200 hover:text-wine relative py-1 after:absolute after:bottom-0 after:left-0 after:h-[1.5px] after:w-0 after:bg-wine after:transition-all hover:after:w-full"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA Desktop */}
          <div className="hidden lg:flex items-center flex-shrink-0">
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-luxury-shimmer inline-flex items-center gap-2 rounded-full bg-wine px-5 py-2.5 text-xs xl:text-sm font-semibold text-paper shadow-wine-glow transition-all duration-300 hover:bg-wineDark hover:shadow-wine-glow-lg hover:-translate-y-0.5 active:scale-[0.98]"
            >
              <WhatsAppIcon className="h-4 w-4" />
              <span>Agendar Horário</span>
            </a>
          </div>

          {/* Hambúrguer Mobile */}
          <button
            type="button"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-line bg-paper text-ink transition-all duration-200 hover:border-wine hover:text-wine active:scale-95 lg:hidden"
            aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={isOpen}
            onClick={() => setIsOpen((v) => !v)}
          >
            <span className="transition-transform duration-300">
              {isOpen ? <CloseIcon /> : <MenuIcon />}
            </span>
          </button>
        </div>

        {/* Drawer Mobile com transição suave */}
        {isOpen && (
          <div className="fixed inset-0 top-[120px] z-50 bg-paper/98 backdrop-blur-xl border-t border-line lg:hidden animate-fade-in flex flex-col justify-between p-6 overflow-y-auto">
            <nav className="flex flex-col space-y-4 pt-2" aria-label="Menu móvel">
              {ALL_NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="font-display text-xl font-medium text-ink hover:text-wine transition-colors py-2 border-b border-line/40 flex items-center justify-between"
                >
                  <span>{link.label}</span>
                  <span className="text-xs text-inkMuted">→</span>
                </a>
              ))}
            </nav>

            <div className="pt-6 pb-8 border-t border-line space-y-4">
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
                className="btn-luxury-shimmer w-full inline-flex items-center justify-center gap-2.5 rounded-full bg-wine py-3.5 text-sm font-medium text-paper shadow-wine-glow"
              >
                <WhatsAppIcon className="h-4 w-4" />
                <span>Agendar pelo WhatsApp</span>
              </a>

              <p className="text-center text-xs text-inkMuted">
                {company.address.street}, {company.address.neighborhood} · {company.city}/{company.state}
              </p>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
