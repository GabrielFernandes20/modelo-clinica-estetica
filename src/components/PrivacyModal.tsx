import { useEffect } from "react";
import { company } from "../data/company";
import { CloseIcon, ShieldCheckIcon, LockClosedIcon, CheckIcon } from "./icons";

interface PrivacyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function PrivacyModal({ isOpen, onClose }: PrivacyModalProps) {
  useEffect(() => {
    if (!isOpen) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 backdrop-blur-sm p-4 sm:p-6 animate-scale-in"
      role="dialog"
      aria-modal="true"
      aria-labelledby="privacy-modal-title"
      onClick={onClose}
    >
      <div
        className="relative max-w-2xl w-full max-h-[90vh] overflow-y-auto rounded-2xl bg-paperPure border border-line shadow-2xl p-6 sm:p-8 text-ink font-body"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Botão Fechar */}
        <button
          type="button"
          onClick={onClose}
          aria-label="Fechar janela de termos e privacidade"
          className="absolute top-5 right-5 flex h-9 w-9 items-center justify-center rounded-full bg-paperAlt text-ink hover:bg-wine hover:text-white transition-colors"
        >
          <CloseIcon className="h-4 w-4" />
        </button>

        {/* Cabeçalho */}
        <div className="flex items-center gap-2.5 text-xs font-semibold uppercase tracking-wider text-wine mb-2">
          <ShieldCheckIcon className="h-4 w-4 text-wine" />
          <span>Transparência, Segurança & Biossegurança</span>
        </div>

        <h2 id="privacy-modal-title" className="font-display text-2xl sm:text-3xl font-medium text-ink leading-tight">
          Privacidade e Compromisso com a sua Saúde
        </h2>

        <p className="mt-2 text-xs sm:text-sm text-inkSoft leading-relaxed">
          No {company.name}, respeitamos rigorosamente a sua privacidade conforme a LGPD (Lei Geral de Proteção de Dados) e seguimos os mais altos padrões sanitários da ANVISA.
        </p>

        {/* Seção 1: Proteção de Dados (LGPD) */}
        <div className="mt-6 rounded-xl border border-line/80 bg-paperAlt/40 p-4 sm:p-5">
          <div className="flex items-center gap-2 text-sm font-semibold text-ink mb-2">
            <LockClosedIcon className="h-4 w-4 text-wine" />
            <span>1. Proteção de Dados Pessoais (LGPD — Lei 13.709/2018)</span>
          </div>
          <ul className="space-y-2 text-xs sm:text-sm text-inkSoft leading-relaxed">
            <li className="flex items-start gap-2">
              <CheckIcon className="h-4 w-4 text-wine flex-shrink-0 mt-0.5" />
              <span><strong>Finalidade Exclusiva:</strong> Seus dados de contato (nome e WhatsApp) são utilizados unicamente para confirmar seus horários e dúvidas sobre procedimentos.</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckIcon className="h-4 w-4 text-wine flex-shrink-0 mt-0.5" />
              <span><strong>Sem Compartilhamento:</strong> Suas informações nunca são vendidas, alugadas ou compartilhadas com empresas terceiras ou parceiros comerciais.</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckIcon className="h-4 w-4 text-wine flex-shrink-0 mt-0.5" />
              <span><strong>Segurança da Informação:</strong> Nosso site utiliza navegação protegida por criptografia SSL/TLS e cabeçalhos de segurança estritos.</span>
            </li>
          </ul>
        </div>

        {/* Seção 2: Biossegurança e Padrão Hospitalar */}
        <div className="mt-4 rounded-xl border border-line/80 bg-paperAlt/40 p-4 sm:p-5">
          <div className="flex items-center gap-2 text-sm font-semibold text-ink mb-2">
            <ShieldCheckIcon className="h-4 w-4 text-wine" />
            <span>2. Protocolo Sanitário e Biossegurança (ANVISA)</span>
          </div>
          <ul className="space-y-2 text-xs sm:text-sm text-inkSoft leading-relaxed">
            <li className="flex items-start gap-2">
              <CheckIcon className="h-4 w-4 text-wine flex-shrink-0 mt-0.5" />
              <span><strong>Esterilização em Autoclave:</strong> Todos os instrumentos de corte e metálicos passam por processo de esterilização hospitalar com fita teste química.</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckIcon className="h-4 w-4 text-wine flex-shrink-0 mt-0.5" />
              <span><strong>Descartáveis Individuais:</strong> Lençóis de maca, luvas, agulhas (quando aplicável) e lixas são 100% descartáveis e abertos na presença da cliente.</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckIcon className="h-4 w-4 text-wine flex-shrink-0 mt-0.5" />
              <span><strong>Dermocosméticos Registrados:</strong> Produtos profissionais devidamente regularizados na ANVISA, com formulações dermatologicamente testadas.</span>
            </li>
          </ul>
        </div>

        {/* Rodapé do Modal */}
        <div className="mt-6 pt-4 border-t border-line flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-inkMuted">
          <span>{company.name} • CNPJ & Endereço: {company.address.street}, {company.city}/{company.state}</span>
          <button
            type="button"
            onClick={onClose}
            className="w-full sm:w-auto rounded-full bg-wine px-6 py-2.5 text-xs font-medium text-paper hover:bg-wineDark transition-colors"
          >
            Entendido e Conforme
          </button>
        </div>
      </div>
    </div>
  );
}
