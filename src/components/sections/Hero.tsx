import { useState } from "react";
import { m } from "framer-motion";
import { Clock, Truck, Wrench, BadgeCheck, ArrowRight } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { waLink } from "@/lib/contact";
import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon";
import { SpecialistDropdown } from "@/components/SpecialistDropdown";
import { GoogleReviewBadge } from "@/components/GoogleReviewBadge";
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
    <section data-nav-surface="dark" className="relative overflow-hidden bg-[#0A101E] pt-32 pb-20 lg:pt-40 lg:pb-28">
      {/* Visual background layers */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(212,175,55,0.08),transparent_40%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(15,52,96,0.3),transparent_50%)]" />
      
      {/* Decorative glows */}
      <div className="absolute -top-32 -left-32 h-[500px] w-[500px] rounded-full bg-gold/15 blur-[120px] animate-pulse" />
      <div className="absolute top-1/2 -right-32 h-96 w-96 rounded-full bg-navy/30 blur-[100px]" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 lg:grid-cols-2 lg:px-8">
        <m.div
          initial={false}
          animate={fadeUpAnimate}
          transition={heroTransition}
          onAnimationComplete={() => setTextDone(true)}
          style={textDone ? willChangeReset : willChangeStyle}
          className="text-white"
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/10 px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.1em] text-gold shadow-[0_0_20px_rgba(212,175,55,0.2)]">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gold opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-gold"></span>
            </span>
            Atendimento em até 30 minutos
          </div>

          <h1 className="font-display text-[32px] font-extrabold leading-[1.1] sm:text-5xl lg:text-6xl text-balance tracking-tight">
            <span className="bg-gradient-to-r from-gold via-amber-200 to-gold bg-[length:200%_auto] animate-shimmer bg-clip-text text-transparent">
              Aquecedor a gás em Curitiba
            </span>{" "}
            com instalação <span className="text-gold italic">no mesmo dia</span>
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
                className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/5 p-3 backdrop-blur transition-all duration-200 hover:-translate-y-0.5 hover:border-gold/40 hover:bg-white/10"
              >
                <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg bg-gold/15">
                  <item.icon className="h-4 w-4 text-gold" />
                </span>
                <div className="min-w-0">
                  <div className="text-sm font-semibold text-white leading-tight">{item.label}</div>
                  <div className="mt-0.5 text-xs text-white/75">{item.desc}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <SpecialistDropdown variant="whatsapp" label="Orçamento rápido no WhatsApp" />

            <Link
              to="/servicos/aquecedor-a-gas"
              className="group inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 px-7 py-4.5 font-bold text-white backdrop-blur outline-none transition-all duration-300 hover:border-gold/50 hover:bg-white/10 focus-ring-nav active:scale-[0.98] motion-reduce:transition-none"
            >
              Comprar aquecedor a gás
              <ArrowRight className="h-5 w-5 text-nav-accent transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          <div className="mt-6">
            <GoogleReviewBadge variant="dark" size="md" />
          </div>

          <div className="mt-8">
            <div className="mb-3 text-[11px] uppercase tracking-widest text-white/80">Marcas autorizadas</div>
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

          <div className="mt-10 grid grid-cols-2 gap-3 text-center text-xs text-white/75 sm:flex sm:items-center sm:gap-6 sm:text-left">
            <div>
              <div className="font-display text-2xl font-bold text-gold">+15</div>
              anos no mercado
            </div>
            <div className="hidden h-10 w-px bg-white/15 sm:block" />
            <div>
              <div className="font-display text-2xl font-bold text-gold">+2.000</div>
              instalações realizadas
            </div>
          </div>
        </m.div>

        <m.div
          initial={fadeScaleInitial}
          animate={fadeScaleAnimate}
          transition={heroTransition}
          onAnimationComplete={() => setImageDone(true)}
          style={imageDone ? willChangeReset : willChangeStyle}
          className="relative mx-auto w-full max-w-lg lg:ml-auto"
        >
          <div className="absolute -inset-4 rounded-[40px] bg-gradient-to-br from-gold/40 via-transparent to-navy/40 blur-3xl opacity-50" />
          <div className="absolute inset-0 rounded-[32px] ring-1 ring-white/10" />
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
        </m.div>
      </div>
    </section>
  );
}
