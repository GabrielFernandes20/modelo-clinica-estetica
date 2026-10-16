import { useState, useEffect } from "react";
import { whatsappLink } from "../data/whatsapp";
import { WhatsAppIcon, CloseIcon } from "./icons";

export function WhatsAppFloat() {
  const [showTooltip, setShowTooltip] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    // Show gentle tooltip after 2.5 seconds
    const timer = setTimeout(() => {
      setShowTooltip(true);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="fixed bottom-5 right-4 sm:right-6 z-40 flex items-center justify-end pointer-events-none">
      {/* Tooltip de convite com animação suave — visível apenas em telas médias e grandes */}
      {showTooltip && !dismissed && (
        <div className="hidden md:flex pointer-events-auto items-center gap-2 mr-3 rounded-2xl bg-paperPure/95 backdrop-blur-md px-4 py-2.5 shadow-editorial-lg border border-line text-xs font-medium text-ink animate-scale-in">
          <span>Olá! Agende seu horário pelo WhatsApp ✨</span>
          <button
            type="button"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              setDismissed(true);
            }}
            aria-label="Fechar aviso"
            className="text-inkMuted hover:text-ink transition-colors p-0.5 rounded-full"
          >
            <CloseIcon className="h-3.5 w-3.5" />
          </button>
        </div>
      )}

      <a
        href={whatsappLink()}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Agendar no WhatsApp com a equipe do Espaço Bella Estética"
        className="pointer-events-auto group relative flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-xl shadow-[#25D366]/30 transition-all duration-300 hover:scale-110 active:scale-95 focus:outline-none focus:ring-4 focus:ring-[#25D366]/40 flex-shrink-0"
      >
        {/* Anel de pulso radar */}
        <span
          className="absolute inset-0 rounded-full bg-[#25D366] opacity-35 animate-ping pointer-events-none"
          aria-hidden="true"
        />

        <WhatsAppIcon className="h-7 w-7 transition-transform duration-300 group-hover:rotate-12" />

        {/* Indicador de disponibilidade */}
        <span
          className="absolute top-1 right-1 h-3.5 w-3.5 rounded-full border-2 border-white bg-emerald-300 shadow-sm"
          aria-hidden="true"
        />
      </a>
    </div>
  );
}
