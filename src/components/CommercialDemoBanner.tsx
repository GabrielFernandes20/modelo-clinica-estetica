import { useState } from "react";
import { SparklesIcon, CloseIcon, WhatsAppIcon, CheckIcon } from "./icons";

export function CommercialDemoBanner() {
  const [isOpen, setIsOpen] = useState(true);
  const [showModal, setShowModal] = useState(false);

  // Link direto para o WhatsApp do Gabriel (desenvolvedor)
  // O cliente pode clicar para contratar a implantação do modelo
  const gabrielWhatsapp = "https://wa.me/5519999999999?text=" + encodeURIComponent(
    "Olá Gabriel! Vi a demonstração do site de estética/beleza e tenho interesse em implantar no meu negócio por R$ 4.000."
  );

  if (!isOpen) {
    return (
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className="fixed bottom-24 left-4 z-40 inline-flex items-center gap-2 rounded-full bg-ink/90 backdrop-blur-md px-3.5 py-2 text-xs font-semibold text-paper shadow-xl border border-white/10 hover:bg-ink transition-all hover:scale-105"
        title="Ver informações da demonstração"
      >
        <SparklesIcon className="h-3.5 w-3.5 text-gold" />
        <span>Modelo Comercial</span>
      </button>
    );
  }

  return (
    <>
      {/* Banner Superior Fixo */}
      <div className="relative z-50 bg-gradient-to-r from-ink via-zinc-900 to-ink text-paper py-2.5 px-4 text-xs shadow-md border-b border-white/10">
        <div className="container-editorial flex flex-col sm:flex-row items-center justify-between gap-2.5">
          <div className="flex items-center gap-2 text-center sm:text-left">
            <span className="inline-flex h-2 w-2 rounded-full bg-gold animate-pulse flex-shrink-0" />
            <span className="text-paper/90 font-medium">
              <strong className="text-gold font-bold">MODELO DEMONSTRATIVO:</strong> Plataforma de alta conversão para Clínicas de Estética & Salões.
            </span>
          </div>

          <div className="flex items-center gap-2.5 flex-shrink-0">
            <button
              type="button"
              onClick={() => setShowModal(true)}
              className="rounded-full bg-gold/20 hover:bg-gold/30 border border-gold/40 text-goldLight px-3.5 py-1 text-xs font-semibold transition-all hover:scale-105 active:scale-95"
            >
              Ver O Que Está Incluso
            </button>

            <button
              type="button"
              onClick={() => setIsOpen(false)}
              aria-label="Minimizar aviso"
              className="text-paper/60 hover:text-paper p-1 rounded-full hover:bg-white/10 transition-colors"
            >
              <CloseIcon className="h-3.5 w-3.5" />
            </button>
          </div>
        </div>
      </div>

      {/* Modal de Detalhes da Proposta Comercial */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
          <div className="relative w-full max-w-lg rounded-3xl bg-paperPure p-6 sm:p-8 border border-line shadow-2xl animate-scale-in max-h-[90vh] overflow-y-auto">
            <button
              type="button"
              onClick={() => setShowModal(false)}
              className="absolute top-5 right-5 text-inkMuted hover:text-ink p-1 rounded-full hover:bg-paperAlt transition-colors"
            >
              <CloseIcon className="h-5 w-5" />
            </button>

            <div className="inline-flex items-center gap-1.5 rounded-full bg-goldLight px-3 py-1 text-xs font-bold text-goldDark mb-3">
              <SparklesIcon className="h-3.5 w-3.5" />
              <span>Oportunidade Comercial</span>
            </div>

            <h3 className="font-display text-2xl font-semibold text-ink leading-tight">
              Plataforma Digital de Alta Conversão
            </h3>
            <p className="mt-2 text-sm text-inkSoft">
              Este modelo foi desenvolvido sob medida para posicionar sua clínica ou salão como referência local e transformar visitantes em agendamentos diários.
            </p>

            <div className="mt-5 space-y-2.5 bg-paperAlt/60 p-4 rounded-2xl border border-line/60 text-xs sm:text-sm">
              <div className="flex items-start gap-2.5">
                <CheckIcon className="h-4 w-4 text-wine flex-shrink-0 mt-0.5" />
                <span><strong>Design Exclusivo & Responsivo:</strong> Adaptado à sua marca, cores e logotipo em até 7 dias úteis.</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckIcon className="h-4 w-4 text-wine flex-shrink-0 mt-0.5" />
                <span><strong>Comparador de Antes & Depois:</strong> A ferramenta visual mais persuasiva do mercado de estética.</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckIcon className="h-4 w-4 text-wine flex-shrink-0 mt-0.5" />
                <span><strong>Simulador de Pacotes no WhatsApp:</strong> O cliente escolhe os procedimentos e já envia a mensagem pronta.</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckIcon className="h-4 w-4 text-wine flex-shrink-0 mt-0.5" />
                <span><strong>SEO Local & Google Maps:</strong> Estruturado para atrair clientes que pesquisam pelo seu serviço na sua cidade.</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckIcon className="h-4 w-4 text-wine flex-shrink-0 mt-0.5" />
                <span><strong>Velocidade Máxima (&lt; 1s):</strong> Carregamento instantâneo sem perda de clientes por lentidão.</span>
              </div>
            </div>

            <div className="mt-6 pt-5 border-t border-line flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <span className="text-xs text-inkMuted block">Investimento Único</span>
                <span className="font-display text-2xl font-bold text-wine">R$ 4.000,00</span>
                <span className="text-[11px] text-inkSoft block">Ou em até 12x no cartão</span>
              </div>

              <a
                href={gabrielWhatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-luxury-shimmer w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-wine px-6 py-3.5 text-xs sm:text-sm font-semibold text-paper shadow-wine-glow hover:bg-wineDark transition-all"
              >
                <WhatsAppIcon className="h-4 w-4" />
                <span>Contratar Implantação</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
