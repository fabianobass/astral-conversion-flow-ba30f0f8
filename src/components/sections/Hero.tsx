import { useState } from "react";
import { motion } from "framer-motion";
import { Clock, Truck, Wrench, BadgeCheck, ArrowRight } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { waLink } from "@/lib/contact";
import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon";
import { SpecialistDropdown } from "@/components/SpecialistDropdown";
import {
  heroTransition,
  fadeUpInitial,
  fadeUpAnimate,
  fadeScaleInitial,
  fadeScaleAnimate,
  willChangeStyle,
  willChangeReset,
} from "@/lib/motion-presets";
import heroImg from "@/assets/hero-aquecedor-home.webp";
import logoRinnai from "@/assets/logo-rinnai.webp";
import logoLorenzetti from "@/assets/logo-lorenzetti.webp";
import logoRheem from "@/assets/logo-rheem.webp";
import logoKomeco from "@/assets/logo-komeco.webp";

export function Hero() {
  // Local flags so we can drop the GPU-layer hint as soon as each animation
  // finishes — keeps mobile memory low without losing the smooth entrance.
  const [textDone, setTextDone] = useState(false);
  const [imageDone, setImageDone] = useState(false);

  return (
    <section data-nav-surface="dark" className="relative overflow-hidden bg-navy-deep pt-32 pb-20 lg:pt-40 lg:pb-28">
      {/* Decorative glows */}
      <div className="absolute -top-32 -left-32 h-96 w-96 rounded-full bg-gold/20 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-navy/40 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 lg:grid-cols-2 lg:px-8">
        <motion.div
          initial={fadeUpInitial}
          animate={fadeUpAnimate}
          transition={heroTransition}
          onAnimationComplete={() => setTextDone(true)}
          style={textDone ? willChangeReset : willChangeStyle}
          className="text-white"
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/10 px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-gold">
            <Clock className="h-3.5 w-3.5" /> Atendimento em até 30 minutos
          </div>

          <h1 className="font-display text-[26px] font-bold leading-[1.15] sm:text-4xl lg:text-5xl text-balance">
            <span className="bg-gradient-to-r from-gold to-amber-300 bg-clip-text text-transparent">
              Aquecedor a gás em Curitiba
            </span>{" "}
            com instalação no mesmo dia
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
            <SpecialistDropdown variant="whatsapp" label="Aquecedor a gás em Curitiba — falar agora" />

            <Link
              to="/servicos/aquecedor-a-gas"
              className="group inline-flex items-center justify-center gap-2 rounded-full border border-nav-fg/20 bg-nav-fg/5 px-7 py-4 font-semibold text-nav-fg backdrop-blur outline-none transition-all duration-200 hover:border-nav-accent hover:bg-nav-bg-hover hover:text-nav-fg-hover focus-ring-nav active:scale-[0.98] aria-disabled:pointer-events-none aria-disabled:text-nav-fg-disabled aria-disabled:border-nav-fg-disabled motion-reduce:transition-none motion-reduce:active:scale-100"
            >
              Comprar aquecedor a gás
              <ArrowRight className="h-5 w-5 text-nav-accent transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          <div className="mt-8">
            <div className="mb-3 text-[11px] uppercase tracking-widest text-white/65">Marcas autorizadas</div>
            <div className="grid grid-cols-2 gap-2 sm:grid-cols-4 sm:gap-3">
              {[
                { src: logoRinnai, alt: "Rinnai", h: "h-10 sm:h-12 lg:h-14" },
                { src: logoLorenzetti, alt: "Lorenzetti", h: "h-10 sm:h-12 lg:h-14" },
                { src: logoRheem, alt: "Rheem", h: "h-12 sm:h-14 lg:h-[4.5rem]" },
                { src: logoKomeco, alt: "Komeco", h: "h-10 sm:h-12 lg:h-14" },
              ].map((b) => (
                <div
                  key={b.alt}
                  className="flex items-center justify-center rounded-md border border-white/10 bg-white/40 backdrop-blur px-1.5 py-1 sm:py-0"
                >
                  <img src={b.src} alt={`Logo ${b.alt}`} width="120" height="48" className={`${b.h} w-auto object-contain sm:-my-3`} loading="lazy" decoding="async" />
                </div>
              ))}
            </div>
          </div>

          <div className="mt-10 grid grid-cols-3 gap-3 text-center text-xs text-white/60 sm:flex sm:items-center sm:gap-6 sm:text-left">
            <div>
              <div className="font-display text-2xl font-bold text-gold">+15</div>
              anos no mercado
            </div>
            <div className="hidden h-10 w-px bg-white/15 sm:block" />
            <div>
              <div className="font-display text-2xl font-bold text-gold">+2.000</div>
              instalações
            </div>
            <div className="hidden h-10 w-px bg-white/15 sm:block" />
            <div>
              <div className="font-display text-2xl font-bold text-gold">4.9★</div>
              avaliação Google
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto w-full max-w-md"
        >
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-gold/30 to-transparent blur-2xl" />
          <img
            src={heroImg}
            alt="Aquecedor a gás premium instalado pela Astral Gás"
            width={767}
            height={756}
            sizes="(min-width: 1024px) 448px, (min-width: 640px) 60vw, 90vw"
            fetchPriority="high"
            loading="eager"
            decoding="async"
            className="relative rounded-3xl shadow-[0_30px_80px_-20px_rgba(0,0,0,0.6)]"
          />
        </motion.div>
      </div>
    </section>
  );
}
