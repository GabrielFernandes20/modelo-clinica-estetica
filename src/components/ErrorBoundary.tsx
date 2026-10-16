import React, { Component, type ReactNode } from "react";
import { company } from "../data/company";
import { whatsappLink } from "../data/whatsapp";

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    // Log gracefully without leaking sensitive info to console in production
    if (import.meta.env.DEV) {
      console.error("ErrorBoundary caught:", error, errorInfo);
    }
  }

  public render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-paper flex items-center justify-center p-6 text-center font-body">
          <div className="max-w-md w-full rounded-2xl bg-paperPure border border-line p-8 shadow-editorial">
            <span className="inline-block rounded-full bg-wineLight px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-wine mb-4">
              {company.shortName}
            </span>
            <h1 className="font-display text-2xl font-medium text-ink mb-3">
              Ops! Algo inesperado aconteceu.
            </h1>
            <p className="text-sm text-inkSoft leading-relaxed mb-6">
              Nosso atendimento continua ativo. Você pode tentar atualizar a página ou entrar em contato direto pelo WhatsApp.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <button
                type="button"
                onClick={() => window.location.reload()}
                className="rounded-full border border-line bg-paperAlt px-6 py-2.5 text-xs font-medium text-ink hover:border-wine transition-colors"
              >
                Atualizar Página
              </button>
              <a
                href={whatsappLink("Olá! Estava navegando no site e gostaria de falar com a equipe.")}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-wine px-6 py-2.5 text-xs font-medium text-paper shadow-wine-glow hover:bg-wineDark transition-colors"
              >
                Falar no WhatsApp
              </a>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
