import { ChevronDown, Wrench, ShoppingBag } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon";
import {
  PHONE_SALES,
  PHONE_SALES_DISPLAY,
  PHONE_MAINTENANCE,
  PHONE_MAINTENANCE_DISPLAY,
  waLink,
} from "@/lib/contact";

type Variant = "gold" | "whatsapp";

export function SpecialistDropdown({
  label = "Falar com Especialista",
  variant = "gold",
  className = "",
}: {
  label?: string;
  variant?: Variant;
  className?: string;
}) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-transform hover:scale-105";
  const variants: Record<Variant, string> = {
    gold: "bg-gold px-5 py-2.5 text-sm text-navy-deep",
    whatsapp:
      "bg-whatsapp px-7 py-4 text-white shadow-[0_10px_40px_-10px_rgba(34,197,94,0.6)]",
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        className={`${base} ${variants[variant]} ${className}`}
        aria-label="Escolher tipo de atendimento no WhatsApp"
      >
        <WhatsAppIcon
          className={
            variant === "gold" ? "h-4 w-4 text-whatsapp" : "h-5 w-5"
          }
        />
        {label}
        <ChevronDown className="h-4 w-4 opacity-70" />
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-72 p-2">
        <DropdownMenuItem asChild>
          <a
            href={waLink(
              PHONE_SALES,
              "Olá! Vim pelo site da Astral Gás e gostaria de um orçamento."
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-start gap-3 rounded-lg p-3 cursor-pointer"
          >
            <span className="mt-0.5 flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-gold/20">
              <ShoppingBag className="h-4 w-4 text-navy-deep" />
            </span>
            <span className="flex flex-col">
              <span className="font-semibold text-navy-deep">
                Compra e Instalação
              </span>
              <span className="text-xs text-foreground/60">
                {PHONE_SALES_DISPLAY}
              </span>
            </span>
          </a>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <a
            href={waLink(
              PHONE_MAINTENANCE,
              "Olá! Vim pelo site da Astral Gás e preciso de manutenção no meu aquecedor."
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-start gap-3 rounded-lg p-3 cursor-pointer"
          >
            <span className="mt-0.5 flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-whatsapp/20">
              <Wrench className="h-4 w-4 text-whatsapp" />
            </span>
            <span className="flex flex-col">
              <span className="font-semibold text-navy-deep">Manutenção</span>
              <span className="text-xs text-foreground/60">
                {PHONE_MAINTENANCE_DISPLAY}
              </span>
            </span>
          </a>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
