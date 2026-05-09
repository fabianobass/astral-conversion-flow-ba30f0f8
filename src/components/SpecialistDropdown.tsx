import { ChevronDown, Wrench, Flame } from "lucide-react";
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
  disabled = false,
}: {
  label?: string;
  variant?: Variant;
  className?: string;
  disabled?: boolean;
}) {
  // Trigger uses nav-palette tokens for hover/active/disabled — same source of
  // truth as the header so contrast stays consistent on desktop and mobile.
  const base =
    "inline-flex items-center justify-center gap-2 rounded-full font-semibold outline-none transition-all duration-200 " +
    "focus-ring-nav " +
    "hover:scale-[1.03] active:scale-[0.97] " +
    "disabled:cursor-not-allowed disabled:opacity-60 disabled:scale-100 disabled:bg-nav-fg-disabled disabled:text-background disabled:shadow-none " +
    "motion-reduce:hover:scale-100 motion-reduce:active:scale-100 motion-reduce:transition-none";

  const variants: Record<Variant, string> = {
    // Gold: navy text on gold (~7:1). Hover darkens via gold→accent overlap.
    gold:
      "bg-gold px-5 py-2.5 text-sm text-navy-deep shadow-sm hover:bg-nav-accent hover:shadow-md active:shadow-sm",
    // WhatsApp: white on green (~4.6:1). Hover deepens to emerald-500.
    whatsapp:
      "bg-whatsapp px-7 py-4 text-white shadow-[0_10px_40px_-10px_rgba(34,197,94,0.6)] hover:bg-emerald-500 active:bg-emerald-600",
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        disabled={disabled}
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
      {/* Content sits on bg-popover (light surface) — light nav tokens apply */}
      <DropdownMenuContent align="end" className="w-72 p-2">
        <DropdownMenuItem
          asChild
          className="rounded-lg p-0 text-nav-fg transition-colors focus:bg-nav-bg-hover focus:text-nav-fg-hover data-[highlighted]:bg-nav-bg-hover data-[highlighted]:text-nav-fg-hover data-[state=open]:bg-nav-bg-active data-[disabled]:pointer-events-none data-[disabled]:text-nav-fg-disabled data-[disabled]:opacity-60"
        >
          <a
            href={waLink(
              PHONE_SALES,
              "Olá! Vim pelo site da Astral Gás e gostaria de um orçamento."
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="flex w-full items-start gap-3 rounded-lg p-3 cursor-pointer outline-none focus-ring-nav"
          >
            <span className="mt-0.5 flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-whatsapp/10 text-whatsapp">
              <Flame className="h-4 w-4" />
            </span>
            <span className="flex flex-col">
              <span className="font-semibold">Compra e Instalação</span>
              <span className="text-xs opacity-80">
                {PHONE_SALES_DISPLAY}
              </span>
            </span>
          </a>
        </DropdownMenuItem>
        <DropdownMenuItem
          asChild
          className="rounded-lg p-0 text-nav-fg transition-colors focus:bg-nav-bg-hover focus:text-nav-fg-hover data-[highlighted]:bg-nav-bg-hover data-[highlighted]:text-nav-fg-hover data-[state=open]:bg-nav-bg-active data-[disabled]:pointer-events-none data-[disabled]:text-nav-fg-disabled data-[disabled]:opacity-60"
        >
          <a
            href={waLink(
              PHONE_MAINTENANCE,
              "Olá! Vim pelo site da Astral Gás e preciso de manutenção no meu aquecedor."
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="flex w-full items-start gap-3 rounded-lg p-3 cursor-pointer outline-none focus-ring-nav"
          >
            <span className="mt-0.5 flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-whatsapp/10 text-whatsapp">
              <Wrench className="h-4 w-4" />
            </span>
            <span className="flex flex-col">
              <span className="font-semibold">Manutenção</span>
              <span className="text-xs opacity-80">
                {PHONE_MAINTENANCE_DISPLAY}
              </span>
            </span>
          </a>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
