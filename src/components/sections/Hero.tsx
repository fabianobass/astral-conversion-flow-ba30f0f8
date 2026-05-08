import { motion } from "framer-motion";
import { Check, Phone, Clock } from "lucide-react";
import { PHONE_SALES, waLink } from "@/lib/contact";
import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon";
import heroImg from "@/assets/hero-aquecedor.jpg";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-navy-deep pt-32 pb-20 lg:pt-40 lg:pb-28">
      {/* Decorative glows */}
      <div className="absolute -top-32 -left-32 h-96 w-96 rounded-full bg-gold/20 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-navy/40 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 lg:grid-cols-2 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-white"
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/10 px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-gold">
            <Clock className="h-3.5 w-3.5" /> Atendimento em até 30 minutos
          </div>

          <h1 className="font-display text-4xl font-bold leading-[1.05] sm:text-5xl lg:text-6xl">
            Aquecedor a Gás em Curitiba com{" "}
            <span className="bg-gradient-to-r from-gold to-amber-300 bg-clip-text text-transparent">
              instalação no mesmo dia
            </span>
          </h1>

          <p className="mt-6 max-w-lg text-lg text-white/75">
            Venda, instalação e manutenção de aquecedores Rinnai, Komeco, Bosch e Lorenzetti. Técnicos certificados e garantia de fábrica.
          </p>

          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {[
              "Orçamento gratuito em 5 min",
              "Técnicos certificados",
              "Pagamento facilitado",
              "Peças 100% originais",
            ].map((item) => (
              <li key={item} className="flex items-center gap-2 text-sm text-white/90">
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-gold/20">
                  <Check className="h-3 w-3 text-gold" strokeWidth={3} />
                </span>
                {item}
              </li>
            ))}
          </ul>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <a
              href={waLink()}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Solicitar orçamento gratuito pelo WhatsApp"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-whatsapp px-7 py-4 font-semibold text-white shadow-[0_10px_40px_-10px_rgba(34,197,94,0.6)] transition-transform hover:scale-105"
            >
              <WhatsAppIcon className="h-5 w-5" />
              Orçamento no WhatsApp
            </a>
            <a
              href={`tel:+${PHONE_SALES}`}
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 px-7 py-4 font-semibold text-white backdrop-blur transition-colors hover:bg-white/10"
            >
              <Phone className="h-5 w-5 text-gold" />
              Ligar agora
            </a>
          </div>

          <div className="mt-10 flex items-center gap-6 text-xs text-white/60">
            <div>
              <div className="font-display text-2xl font-bold text-gold">+15</div>
              anos no mercado
            </div>
            <div className="h-10 w-px bg-white/15" />
            <div>
              <div className="font-display text-2xl font-bold text-gold">+2.000</div>
              instalações
            </div>
            <div className="h-10 w-px bg-white/15" />
            <div>
              <div className="font-display text-2xl font-bold text-gold">4.9★</div>
              avaliação Google
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative mx-auto w-full max-w-md"
        >
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-gold/30 to-transparent blur-2xl" />
          <img
            src={heroImg}
            alt="Aquecedor a gás premium instalado pela Astral Gás"
            width={1024}
            height={1024}
            className="relative rounded-3xl shadow-[0_30px_80px_-20px_rgba(0,0,0,0.6)]"
          />
        </motion.div>
      </div>
    </section>
  );
}
