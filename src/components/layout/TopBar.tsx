import { Clock, Phone } from "lucide-react";
import { PHONE_SALES, PHONE_SALES_DISPLAY, waLink } from "@/lib/contact";

export function TopBar() {
  return (
    <div className="bg-navy-deep text-white/85 text-[12px]">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-1.5 lg:px-8">
        <div className="flex items-center gap-2 min-w-0">
          <Clock className="h-3.5 w-3.5 text-gold shrink-0" aria-hidden="true" />
          <span className="truncate">
            <span className="hidden sm:inline">Atendimento em até 30 min · </span>Seg–Sex 8h–18h · Sáb 8h–12h
          </span>
        </div>
        <a
          href={waLink(PHONE_SALES, "Olá! Vim pelo site da Astral Gás")}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 font-semibold text-white hover:text-gold transition-colors"
          aria-label={`WhatsApp ${PHONE_SALES_DISPLAY}`}
        >
          <Phone className="h-3.5 w-3.5 text-gold" aria-hidden="true" />
          <span>{PHONE_SALES_DISPLAY}</span>
        </a>
      </div>
    </div>
  );
}

