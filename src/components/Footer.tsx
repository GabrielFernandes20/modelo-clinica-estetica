import { useState } from "react";
import { company } from "../data/company";
import { whatsappLink } from "../data/whatsapp";
import {
  InstagramIcon,
  WhatsAppIcon,
  MapPinIcon,
  ClockIcon,
  ShieldCheckIcon,
  LockClosedIcon,
} from "./icons";
import { PrivacyModal } from "./PrivacyModal";

export function Footer() {
  const [isPrivacyOpen, setIsPrivacyOpen] = useState(false);
  const year = new Date().getFullYear();

  return (
    <>
      <footer className="border-t border-line bg-paperAlt/90">
        <div className="container-editorial py-16 lg:py-20">
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-12">
            {/* Coluna 1: Marca & Missão (Lg: col-span-4) */}
            <div className="lg:col-span-4 flex flex-col items-start">
              <span className="font-display text-2xl font-semibold tracking-tight text-ink">
                {company.name}
              </span>
              <span className="text-[11px] uppercase tracking-[0.2em] text-wine font-medium mt-1">
                Ateliê de Beleza & Estética Avançada
              </span>
              <p className="mt-4 max-w-sm text-sm text-inkSoft leading-relaxed">
                Atendimento individualizado e protocolos exclusivos no coração de {company.city}/{company.state}. Cuidado, conforto e resultados naturais para a sua melhor versão.
              </p>

              <div className="mt-6 flex items-center gap-3">
                <a
                  href={company.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Siga nosso Instagram ${company.instagramHandle}`}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-line bg-paperPure text-ink transition-colors hover:border-wine hover:text-wine shadow-sm"
                >
                  <InstagramIcon className="h-4 w-4" />
                </a>
                <a
                  href={whatsappLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Fale conosco no WhatsApp"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-line bg-paperPure text-ink transition-colors hover:border-wine hover:text-wine shadow-sm"
                >
                  <WhatsAppIcon className="h-4 w-4" />
                </a>
              </div>
            </div>

            {/* Coluna 2: Navegação Rápida (Lg: col-span-2) */}
            <div className="lg:col-span-2">
              <p className="text-xs font-bold uppercase tracking-widest text-ink">Navegação</p>
              <ul className="mt-4 space-y-2.5 text-sm text-inkSoft">
                <li><a href="#inicio" className="transition-colors hover:text-wine">Início</a></li>
                <li><a href="#servicos" className="transition-colors hover:text-wine">Procedimentos</a></li>
                <li><a href="#sobre" className="transition-colors hover:text-wine">O Espaço</a></li>
                <li><a href="#galeria" className="transition-colors hover:text-wine">Galeria</a></li>
                <li><a href="#diferenciais" className="transition-colors hover:text-wine">Diferenciais</a></li>
                <li><a href="#avaliacoes" className="transition-colors hover:text-wine">Avaliações</a></li>
                <li><a href="#contato" className="transition-colors hover:text-wine">Localização</a></li>
              </ul>
            </div>

            {/* Coluna 3: Horários (Lg: col-span-3) */}
            <div className="lg:col-span-3">
              <p className="text-xs font-bold uppercase tracking-widest text-ink">Horários</p>
              <div className="mt-4 space-y-3 text-sm text-inkSoft">
                <div className="flex items-start gap-2.5">
                  <ClockIcon className="h-4 w-4 text-wine flex-shrink-0 mt-0.5" />
                  <ul className="space-y-1 text-xs sm:text-sm">
                    {company.hours.map((h) => (
                      <li key={h.days}>
                        <span className="font-semibold text-ink">{h.days}:</span> {h.hours}
                      </li>
                    ))}
                  </ul>
                </div>
                <p className="text-xs text-wine font-medium pt-1">
                  • Atendimento exclusivamente com agendamento prévio.
                </p>
              </div>
            </div>

            {/* Coluna 4: Localização (Lg: col-span-3) */}
            <div className="lg:col-span-3">
              <p className="text-xs font-bold uppercase tracking-widest text-ink">Localização</p>
              <div className="mt-4 space-y-3 text-sm text-inkSoft">
                <a
                  href={company.address.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-start gap-2.5 text-xs sm:text-sm text-inkSoft hover:text-wine transition-colors"
                >
                  <MapPinIcon className="h-4 w-4 text-wine flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                  <span>
                    {company.address.street} — {company.address.neighborhood}
                    <br />
                    {company.address.city}/{company.address.state} — CEP {company.address.zip}
                  </span>
                </a>

                <a
                  href={whatsappLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-flex items-center gap-2 text-xs font-medium text-wine underline underline-offset-4 hover:text-wineDark"
                >
                  <WhatsAppIcon className="h-3.5 w-3.5" />
                  <span>Agendar horário pelo WhatsApp</span>
                </a>
              </div>
            </div>
          </div>

          {/* Faixa de Segurança, Privacidade e Confiança do Cliente */}
          <div className="mt-12 rounded-2xl border border-line bg-paperPure/80 p-5 sm:p-6 backdrop-blur-sm">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 sm:gap-6 text-xs text-inkSoft">
                <div className="flex items-center gap-2">
                  <LockClosedIcon className="h-4 w-4 text-wine" />
                  <span>Conexão Segura & SSL Criptografado</span>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheckIcon className="h-4 w-4 text-wine" />
                  <span>Conformidade com a LGPD (Lei 13.709/18)</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-emerald-500" />
                  <span>Biossegurança e Autoclave ANVISA</span>
                </div>
              </div>

              <div className="flex items-center gap-4 text-xs">
                <button
                  type="button"
                  onClick={() => setIsPrivacyOpen(true)}
                  className="font-medium text-wine underline underline-offset-4 hover:text-wineDark transition-colors cursor-pointer"
                >
                  Privacidade & Termos LGPD
                </button>
                <span className="text-line">|</span>
                <button
                  type="button"
                  onClick={() => setIsPrivacyOpen(true)}
                  className="font-medium text-inkSoft hover:text-wine transition-colors cursor-pointer"
                >
                  Protocolo Sanitário
                </button>
              </div>
            </div>
          </div>

          {/* Rodapé Inferior */}
          <div className="mt-10 pt-6 border-t border-line/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-inkMuted">
            <p>
              © {year} {company.name}. Todos os direitos reservados.
            </p>
            <p>
              {company.city}/{company.state} • Ateliê de Beleza e Estética
            </p>
          </div>
        </div>
      </footer>

      {/* Modal de Privacidade e Biossegurança */}
      <PrivacyModal isOpen={isPrivacyOpen} onClose={() => setIsPrivacyOpen(false)} />
    </>
  );
}
