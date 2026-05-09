import { motion } from "framer-motion";
import { Clock, Truck, Wrench, BadgeCheck, ArrowRight } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { waLink } from "@/lib/contact";
import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon";
import heroImg from "@/assets/hero-aquecedor.jpg";
import logoRinnai from "@/assets/logo-rinnai.png";
import logoLorenzetti from "@/assets/logo-lorenzetti.png";
import logoRheem from "@/assets/logo-rheem.png";
import logoKomeco from "@/assets/logo-komeco.png";

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
            Venda e Instalação de{" "}
            <span className="bg-gradient-to-r from-gold to-amber-300 bg-clip-text text-transparent">
              Aquecedores a Gás em Curitiba
            </span>
          </h1>

          <p className="mt-6 max-w-lg text-lg text-white/75">
            Instalação no mesmo dia, técnicos certificados e garantia de fábrica. Rinnai, Komeco, Bosch e Lorenzetti.
          </p>

          <div className="mt-8 grid gap-3 sm:grid-cols-3">
            {[
              { icon: Truck, label: "Pronta Entrega", desc: "Estoque local em Curitiba" },
              { icon: Wrench, label: "Instalação Inclusa", desc: "Técnicos no mesmo dia" },
              { icon: BadgeCheck, label: "Autorizada Rinnai e Lorenzetti", desc: "Garantia de fábrica" },
            ].map((item) => (
              <div
                key={item.label}
                className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/5 p-3 backdrop-blur"
              >
                <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg bg-gold/15">
                  <item.icon className="h-4 w-4 text-gold" />
                </span>
                <div className="min-w-0">
                  <div className="text-sm font-semibold text-white leading-tight">{item.label}</div>
                  <div className="mt-0.5 text-xs text-white/60">{item.desc}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <a
              href={waLink()}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Falar com especialista pelo WhatsApp"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-whatsapp px-7 py-4 font-semibold text-white shadow-[0_10px_40px_-10px_rgba(34,197,94,0.6)] transition-transform hover:scale-105"
            >
              <WhatsAppIcon className="h-5 w-5" />
              Falar com Especialista Agora
            </a>
            <Link
              to="/servicos/aquecedor-a-gas"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 px-7 py-4 font-semibold text-white backdrop-blur transition-colors hover:bg-white/10"
            >
              Ver Preços e Modelos
              <ArrowRight className="h-5 w-5 text-gold" />
            </Link>
          </div>

          <div className="mt-8">
            <div className="mb-3 text-[11px] uppercase tracking-widest text-white/40">Marcas autorizadas</div>
            <div className="grid grid-cols-4 gap-2 sm:gap-3">
              {[
                { src: logoRinnai, alt: "Rinnai" },
                { src: logoLorenzetti, alt: "Lorenzetti" },
                { src: logoRheem, alt: "Rheem" },
                { src: logoKomeco, alt: "Komeco" },
              ].map((b) => (
                <div
                  key={b.alt}
                  className="flex items-center justify-center rounded-md border border-white/10 bg-white/85 backdrop-blur px-1 py-0.5"
                >
                  <img src={b.src} alt={`Logo ${b.alt}`} className="h-11 sm:h-14 w-auto object-contain" loading="lazy" />
                </div>
              ))}
            </div>
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
