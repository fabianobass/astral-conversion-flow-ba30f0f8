import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Flame, Wrench, X } from "lucide-react";
import { PHONE_MAINTENANCE, PHONE_SALES, waLink } from "@/lib/contact";

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" fill="currentColor" className={className} aria-hidden="true">
      <path d="M19.11 17.205c-.372 0-1.088 1.39-1.518 1.39a.63.63 0 0 1-.315-.1c-.802-.402-1.504-.817-2.163-1.447-.545-.516-1.146-1.29-1.46-1.963a.426.426 0 0 1-.073-.215c0-.33.99-.945.99-1.49 0-.143-.73-2.09-.832-2.335-.143-.372-.214-.487-.6-.487-.187 0-.36-.043-.53-.043-.302 0-.53.115-.746.315-.688.645-1.032 1.318-1.06 2.264v.114c-.015.99.472 1.977 1.017 2.78 1.23 1.82 2.506 3.41 4.554 4.34.616.287 2.035.888 2.722.888.817 0 2.15-.515 2.495-1.318.13-.302.13-.6.115-.917-.043-.058-.143-.086-.302-.187zM16.286 27a10.27 10.27 0 0 1-5.272-1.45l-3.683.948.99-3.598a10.317 10.317 0 0 1-1.69-5.69c0-5.696 4.59-10.286 10.286-10.286S26.57 11.514 26.57 17.21 22.054 27 16.286 27zm0-22.86C9.245 4.14 3.43 9.913 3.43 17.211c0 2.292.687 4.46 1.892 6.42L3 31l7.622-1.962a13.073 13.073 0 0 0 6.06 1.6h.043C23.755 30.638 29 24.51 29 17.21 29 9.913 23.755 4.14 16.286 4.14z" />
    </svg>
  );
}

export function WhatsAppFloat() {
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const handler = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    const esc = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("mousedown", handler);
    document.addEventListener("keydown", esc);
    return () => {
      document.removeEventListener("mousedown", handler);
      document.removeEventListener("keydown", esc);
    };
  }, [open]);

  const options = [
    {
      icon: Flame,
      title: "Compra e instalação",
      desc: "Aquecedor a gás novo",
      href: waLink(PHONE_SALES, "Olá! Gostaria de orçamento para compra e instalação de aquecedor a gás."),
    },
    {
      icon: Wrench,
      title: "Manutenção",
      desc: "Conserto e revisão",
      href: waLink(PHONE_MAINTENANCE, "Olá! Preciso de manutenção do meu aquecedor a gás."),
    },
  ];

  return (
    <div ref={containerRef} className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ duration: 0.18 }}
            className="w-[280px] overflow-hidden rounded-2xl border border-border bg-card shadow-2xl"
            role="dialog"
            aria-label="Escolha o atendimento"
          >
            <div className="flex items-center justify-between bg-whatsapp px-4 py-3 text-whatsapp-foreground">
              <div>
                <div className="text-sm font-semibold">Como podemos ajudar?</div>
                <div className="text-xs opacity-90">Resposta rápida no WhatsApp</div>
              </div>
              <button
                onClick={() => setOpen(false)}
                aria-label="Fechar"
                className="rounded-full p-1 transition hover:bg-white/15"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
            <div className="p-2">
              {options.map((o) => (
                <a
                  key={o.title}
                  href={o.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setOpen(false)}
                  className="flex items-center gap-3 rounded-xl p-3 transition hover:bg-secondary"
                >
                  <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-whatsapp/10 text-whatsapp">
                    <o.icon className="h-5 w-5" />
                  </span>
                  <span className="flex-1">
                    <span className="block text-sm font-semibold text-foreground">{o.title}</span>
                    <span className="block text-xs text-muted-foreground">{o.desc}</span>
                  </span>
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-label="Abrir opções de WhatsApp"
        aria-expanded={open}
        className="relative flex h-14 w-14 items-center justify-center rounded-full bg-whatsapp text-whatsapp-foreground shadow-[0_10px_40px_-10px_rgba(34,197,94,0.7)] transition-transform hover:scale-105"
      >
        <WhatsAppIcon className="h-7 w-7" />
        {!open && (
          <span className="absolute -right-1 -top-1 flex h-3 w-3">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-whatsapp opacity-75" />
            <span className="relative inline-flex h-3 w-3 rounded-full bg-whatsapp" />
          </span>
        )}
      </button>
    </div>
  );
}
