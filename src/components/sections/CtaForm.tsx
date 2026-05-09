import { useState } from "react";
import { Phone } from "lucide-react";
import { PHONE_SALES, PHONE_SALES_DISPLAY, waLink } from "@/lib/contact";
import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon";

export function CtaForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [service, setService] = useState("Aquecedor a Gás");

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Olá! Meu nome é ${name}. Telefone: ${phone}. Tenho interesse em: ${service}. Vim pelo Google.`;
    window.open(waLink(PHONE_SALES, text), "_blank", "noopener,noreferrer");
  };

  return (
    <section className="relative overflow-hidden bg-navy-deep py-24 text-white">
      <div className="absolute -left-40 top-1/2 h-96 w-96 -translate-y-1/2 rounded-full bg-gold/15 blur-3xl" />
      <div className="absolute -right-40 top-0 h-96 w-96 rounded-full bg-navy/40 blur-3xl" />

      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-4 lg:grid-cols-2 lg:px-8">
        <div>
          <div className="mb-3 text-xs uppercase tracking-widest text-gold font-semibold">Solicite agora</div>
          <h2 className="font-display text-4xl font-bold leading-tight sm:text-5xl">
            Receba seu <span className="italic text-gold">orçamento gratuito</span> em minutos
          </h2>
          <p className="mt-5 text-white/70">
            Preencha seus dados ou fale direto pelo WhatsApp. Atendemos das 8h às 18h em Curitiba e região.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href={waLink()}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Falar com a Astral Gás pelo WhatsApp"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-whatsapp px-6 py-3.5 font-semibold text-white"
            >
              <WhatsAppIcon className="h-5 w-5" /> WhatsApp
            </a>
            <a
              href={`tel:+${PHONE_SALES}`}
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3.5 font-semibold"
            >
              <Phone className="h-5 w-5 text-gold" /> {PHONE_SALES_DISPLAY}
            </a>
          </div>
        </div>

        <form
          onSubmit={submit}
          className="rounded-3xl border border-white/10 bg-white/[0.04] p-8 backdrop-blur"
        >
          <div className="space-y-4">
            <div>
              <label className="mb-1.5 block text-xs uppercase tracking-wider text-white/60">Nome</label>
              <input
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-white placeholder:text-white/30 focus:border-gold focus:outline-none"
                placeholder="Seu nome"
              />
            </div>
            <div>
              <label className="mb-1.5 block text-xs uppercase tracking-wider text-white/60">WhatsApp</label>
              <input
                required
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-white placeholder:text-white/30 focus:border-gold focus:outline-none"
                placeholder="(41) 9 9999-9999"
              />
            </div>
            <div>
              <label className="mb-1.5 block text-xs uppercase tracking-wider text-white/60">Serviço</label>
              <select
                value={service}
                onChange={(e) => setService(e.target.value)}
                className="w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-white focus:border-gold focus:outline-none"
              >
                <option className="bg-navy-deep">Aquecedor a Gás</option>
                <option className="bg-navy-deep">Manutenção</option>
                <option className="bg-navy-deep">Pressurizador</option>
                <option className="bg-navy-deep">Bomba de Calor</option>
              </select>
            </div>
            <button
              type="submit"
              className="mt-2 w-full rounded-full bg-gradient-to-r from-gold to-amber-500 py-4 font-semibold text-navy-deep transition-transform hover:scale-[1.02]"
            >
              Falar com Especialista no WhatsApp
            </button>
            <p className="text-center text-xs text-white/40">
              Ao enviar você será redirecionado para o WhatsApp.
            </p>
          </div>
        </form>
      </div>
    </section>
  );
}
