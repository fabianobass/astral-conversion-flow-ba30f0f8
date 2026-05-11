// Google Ads + GA4 tracking helpers.
// IDs são públicos (Measurement ID / Conversion ID) — podem ficar no código.

import { PHONE_MAINTENANCE } from "@/lib/contact";

export const GA4_ID = "G-R7WVSM499B";
export const GADS_ID = "AW-11394967004";

// Conversões cadastradas no Google Ads (Conversion ID/Label).
export const CONVERSIONS = {
  whatsappClick: { sendTo: "AW-11394967004/wWAACO_Al5AZENzLxbkq" },
  whatsappMaintenance: {
    sendTo: "AW-11394967004/qsj_CO7izJYcENzLxbkq",
    value: 1.0,
    currency: "BRL",
  },
} as const;

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

type ConversionParams = {
  send_to: string;
  value?: number;
  currency?: string;
};

/** Dispara uma conversão do Google Ads. */
export function trackConversion(params: ConversionParams) {
  if (typeof window === "undefined" || typeof window.gtag !== "function") return;
  window.gtag("event", "conversion", params);
}

function gtagEvent(name: string, params?: Record<string, unknown>) {
  if (typeof window === "undefined" || typeof window.gtag !== "function") return;
  window.gtag("event", name, params ?? {});
}

/** Conversão padrão de clique no WhatsApp (vendas/geral). */
export function trackWhatsAppClick() {
  trackConversion({ send_to: CONVERSIONS.whatsappClick.sendTo });
  gtagEvent("whatsapp_click", { kind: "sales" });
}

/** Conversão de clique no WhatsApp de manutenção. */
export function trackWhatsAppMaintenance() {
  const c = CONVERSIONS.whatsappMaintenance;
  trackConversion({ send_to: c.sendTo, value: c.value, currency: c.currency });
  gtagEvent("whatsapp_click", { kind: "maintenance" });
}

/** Verdadeiro se a URL é um link de WhatsApp (wa.me ou api.whatsapp.com). */
export function isWhatsAppUrl(href: string | null | undefined): boolean {
  if (!href) return false;
  return /(?:^|\/\/)(?:api\.whatsapp\.com|wa\.me)\b/i.test(href);
}

/** Verdadeiro se o link de WhatsApp aponta para o número de manutenção. */
export function isMaintenanceWhatsAppUrl(href: string | null | undefined): boolean {
  if (!href) return false;
  return href.includes(PHONE_MAINTENANCE);
}
