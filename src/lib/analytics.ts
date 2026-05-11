// Google Ads + GA4 tracking helpers.
// IDs são públicos (Measurement ID / Conversion ID) — podem ficar no código.

export const GA4_ID = "G-R7WVSM499B";
export const GADS_ID = "AW-11394967004";

// Conversões cadastradas no Google Ads (Conversion ID/Label).
export const CONVERSIONS = {
  whatsappClick: "AW-11394967004/wWAACO_Al5AZENzLxbkq",
  // whatsapp2: "AW-11394967004/XXXXXXXXXXXXXXXXX", // 2ª conversão — preencher
} as const;

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

export function gtag(...args: unknown[]) {
  if (typeof window === "undefined") return;
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push(args);
}

/** Dispara uma conversão do Google Ads. */
export function trackConversion(sendTo: string) {
  if (typeof window === "undefined" || typeof window.gtag !== "function") return;
  window.gtag("event", "conversion", { send_to: sendTo });
}

/** Conversão padrão de clique no WhatsApp. */
export function trackWhatsAppClick() {
  trackConversion(CONVERSIONS.whatsappClick);
  // Evento também para o GA4 (aparece em "Eventos" e pode virar conversão lá).
  if (typeof window !== "undefined" && typeof window.gtag === "function") {
    window.gtag("event", "whatsapp_click");
  }
}

/** Verdadeiro se a URL é um link de WhatsApp (wa.me ou api.whatsapp.com). */
export function isWhatsAppUrl(href: string | null | undefined): boolean {
  if (!href) return false;
  return /(?:^|\/\/)(?:api\.whatsapp\.com|wa\.me)\b/i.test(href);
}
