import { MessageCircle } from "lucide-react";
import { waLink } from "@/lib/contact";

export function WhatsAppFloat() {
  return (
    <a
      href={waLink()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 rounded-full bg-whatsapp px-5 py-4 text-whatsapp-foreground shadow-[0_10px_40px_-10px_rgba(34,197,94,0.6)] transition-transform hover:scale-105"
    >
      <MessageCircle className="h-6 w-6" strokeWidth={2.5} />
      <span className="hidden font-semibold sm:inline">Fale conosco</span>
      <span className="absolute -right-1 -top-1 flex h-3 w-3">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-whatsapp opacity-75" />
        <span className="relative inline-flex h-3 w-3 rounded-full bg-whatsapp" />
      </span>
    </a>
  );
}
