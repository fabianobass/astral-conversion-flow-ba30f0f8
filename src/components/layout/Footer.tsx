import { Link } from "@tanstack/react-router";
import { Phone, MapPin, Clock, Instagram, Facebook } from "lucide-react";
import { PHONE_SALES_DISPLAY, PHONE_MAINTENANCE_DISPLAY, PHONE_SALES, PHONE_MAINTENANCE, waLink } from "@/lib/contact";
import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon";
import logoAstral from "@/assets/logo-astral.webp";

export function Footer() {
  return (
    <footer className="bg-navy-deep text-white/80">
      <div className="mx-auto max-w-7xl px-4 py-16 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="relative mb-4 inline-block">
              <span
                aria-hidden
                className="pointer-events-none absolute inset-0 -z-10 scale-150 rounded-full bg-[radial-gradient(ellipse_at_center,_color-mix(in_oklab,_var(--gold)_65%,_transparent),_transparent_70%)] blur-2xl"
              />
              <img src={logoAstral} alt="Astral Gás Aquecedores" className="relative h-12 w-auto" />
            </div>
            <p className="text-sm leading-relaxed">
              Referência em aquecedores a gás, manutenção e sistemas de aquecimento em Curitiba e região metropolitana há mais de 15 anos.
            </p>
          </div>

          <div>
            <h4 className="mb-4 font-display text-lg text-white">Serviços</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/servicos/aquecedor-a-gas" className="hover:text-gold">Aquecedor a Gás</Link></li>
              <li><Link to="/servicos/manutencao" className="hover:text-gold">Manutenção</Link></li>
              <li><Link to="/servicos/pressurizador" className="hover:text-gold">Pressurizador</Link></li>
              <li><Link to="/servicos/bomba-de-calor" className="hover:text-gold">Bomba de Calor</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 font-display text-lg text-white">Contato</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <div className="text-xs uppercase tracking-wider text-gold">Vendas</div>
                <a href={`tel:+${PHONE_SALES}`} className="flex items-center gap-2 hover:text-gold">
                  <Phone className="h-4 w-4" /> {PHONE_SALES_DISPLAY}
                </a>
              </li>
              <li>
                <div className="text-xs uppercase tracking-wider text-gold">Manutenção</div>
                <a href={`tel:+${PHONE_MAINTENANCE}`} className="flex items-center gap-2 hover:text-gold">
                  <Phone className="h-4 w-4" /> {PHONE_MAINTENANCE_DISPLAY}
                </a>
              </li>
              <li>
                <a href={waLink()} target="_blank" rel="noopener noreferrer" aria-label="Falar com a Astral Gás pelo WhatsApp" className="inline-flex items-center gap-2 rounded-full bg-whatsapp px-4 py-2 font-semibold text-white hover:scale-105 transition-transform">
                  <WhatsAppIcon className="h-4 w-4" /> WhatsApp
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 font-display text-lg text-white">Atendimento</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <Clock className="h-4 w-4 mt-0.5 text-gold" />
                <div>
                  Seg–Sex: 08h às 18h<br />
                  Sábado: 08h às 13h
                </div>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-0.5 text-gold" />
                <div>Curitiba e região metropolitana</div>
              </li>
              <li>
                <div className="mb-2 text-xs uppercase tracking-wider text-gold">Redes sociais</div>
                <div className="flex items-center gap-3">
                  <a
                    href="https://www.instagram.com/gasastral/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Astral Gás no Instagram"
                    className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white/80 transition-colors hover:border-gold hover:text-gold"
                  >
                    <Instagram className="h-5 w-5" />
                  </a>
                  <a
                    href="https://www.facebook.com/people/Astral-G%C3%A1s/pfbid078UjkMYXPN2HoKkA3CP1AHXJ1Ekq8RFDTUCqDLnyGezWcz75dF88742F2db1ecJ3l/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Astral Gás no Facebook"
                    className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white/80 transition-colors hover:border-gold hover:text-gold"
                  >
                    <Facebook className="h-5 w-5" />
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-6 text-center">
          <p className="font-display text-base text-gold sm:text-lg">
            Atendimento especializado em Curitiba e Região
          </p>
          <p className="mt-3 text-xs text-white/65">
            © {new Date().getFullYear()} Astral Gás Aquecedores. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
