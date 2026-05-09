import { useState } from "react";
import { Phone } from "lucide-react";
import { PHONE_SALES, PHONE_SALES_DISPLAY, PHONE_MAINTENANCE, waLink } from "@/lib/contact";
import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon";

type FieldErrors = { name?: string; phone?: string; service?: string };

const PHONE_DIGITS_RE = /\d/g;

function validate({ name, phone, service }: { name: string; phone: string; service: string }): FieldErrors {
  const errors: FieldErrors = {};
  if (!name.trim()) errors.name = "Informe seu nome.";
  else if (name.trim().length < 2) errors.name = "Nome muito curto.";

  const digits = phone.match(PHONE_DIGITS_RE)?.join("") ?? "";
  if (!phone.trim()) errors.phone = "Informe seu WhatsApp com DDD.";
  else if (digits.length < 10 || digits.length > 13) errors.phone = "Telefone inválido — inclua DDD e número (ex.: 41 99999-9999).";

  if (!service) errors.service = "Selecione um serviço.";
  return errors;
}

export function CtaForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [service, setService] = useState("Aquecedor a Gás");
  const [errors, setErrors] = useState<FieldErrors>({});
  const [submitAttempted, setSubmitAttempted] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");

  const validateAndUpdate = (next: { name: string; phone: string; service: string }) => {
    const result = validate(next);
    setErrors(result);
    return result;
  };

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitAttempted(true);
    const result = validateAndUpdate({ name, phone, service });
    const errorList = Object.values(result);

    if (errorList.length > 0) {
      const summary = `Não foi possível enviar. ${errorList.length === 1 ? "Há 1 erro no formulário" : `Há ${errorList.length} erros no formulário`}: ${errorList.join(" ")}`;
      setStatusMessage(summary);
      // Move o foco para o primeiro campo com erro para leitores de tela
      const firstErrorId = result.name ? "cta-name" : result.phone ? "cta-phone" : "cta-service";
      document.getElementById(firstErrorId)?.focus();
      return;
    }

    setStatusMessage("Formulário válido. Abrindo WhatsApp em uma nova aba…");
    const text = `Olá! Meu nome é ${name}. Telefone: ${phone}. Tenho interesse em: ${service}. Vim pelo Google.`;
    const target = service === "Manutenção" ? PHONE_MAINTENANCE : PHONE_SALES;
    window.open(waLink(target, text), "_blank", "noopener,noreferrer");
  };

  // Re-valida em tempo real apenas após a primeira tentativa de envio
  const onChangeName = (v: string) => {
    setName(v);
    if (submitAttempted) validateAndUpdate({ name: v, phone, service });
  };
  const onChangePhone = (v: string) => {
    setPhone(v);
    if (submitAttempted) validateAndUpdate({ name, phone: v, service });
  };
  const onChangeService = (v: string) => {
    setService(v);
    if (submitAttempted) validateAndUpdate({ name, phone, service: v });
  };

  const fieldClass = (hasError: boolean) =>
    `w-full rounded-xl border bg-nav-fg/5 px-4 py-3 text-nav-fg placeholder:text-nav-fg/55 outline-none transition-colors focus-ring-nav ${
      hasError
        ? "border-red-400 focus:border-red-300 focus:ring-2 focus:ring-red-400/40"
        : "border-nav-fg/15 focus:border-nav-accent"
    }`;

  return (
    <section data-nav-surface="dark" className="relative overflow-hidden bg-navy-deep py-24 text-white">
      <div className="absolute -left-40 top-1/2 h-96 w-96 -translate-y-1/2 rounded-full bg-gold/15 blur-3xl" />
      <div className="absolute -right-40 top-0 h-96 w-96 rounded-full bg-navy/40 blur-3xl" />

      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-4 lg:grid-cols-2 lg:px-8">
        <div>
          <div className="mb-3 text-xs uppercase tracking-widest text-nav-accent font-semibold">Solicite agora</div>
          <h2 className="font-display text-4xl font-bold leading-tight sm:text-5xl">
            Receba seu <span className="italic text-nav-accent">orçamento gratuito</span> em minutos
          </h2>
          <p className="mt-5 text-nav-fg/80">
            Preencha seus dados ou fale direto pelo WhatsApp. Atendemos das 8h às 18h em Curitiba e região.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href={waLink()}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Falar com a Astral Gás pelo WhatsApp"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-whatsapp px-6 py-3.5 font-semibold text-white outline-none transition-all hover:bg-emerald-500 hover:scale-[1.02] active:scale-[0.98] focus-visible:ring-2 focus-visible:ring-emerald-300/80 motion-reduce:transition-none motion-reduce:hover:scale-100 motion-reduce:active:scale-100"
            >
              <WhatsAppIcon className="h-5 w-5" /> WhatsApp
            </a>
            <a
              href={`tel:+${PHONE_SALES}`}
              className="inline-flex items-center justify-center gap-2 rounded-full border border-nav-fg/20 bg-nav-fg/5 px-6 py-3.5 font-semibold text-nav-fg outline-none transition-all hover:border-nav-accent hover:bg-nav-bg-hover hover:text-nav-fg-hover focus-ring-nav active:scale-[0.98] motion-reduce:active:scale-100"
            >
              <Phone className="h-5 w-5 text-nav-accent" /> {PHONE_SALES_DISPLAY}
            </a>
          </div>
        </div>

        <form
          onSubmit={submit}
          noValidate
          aria-describedby="cta-form-status"
          className="rounded-3xl border border-white/10 bg-white/[0.04] p-8 backdrop-blur"
        >
          {/* Região live para anunciar status/erros aos leitores de tela */}
          <div
            id="cta-form-status"
            role="status"
            aria-live="polite"
            aria-atomic="true"
            className="sr-only"
          >
            {statusMessage}
          </div>

          <div className="space-y-4">
            <div>
              <label htmlFor="cta-name" className="mb-1.5 block text-xs uppercase tracking-wider text-white/60">
                Nome
              </label>
              <input
                id="cta-name"
                name="name"
                autoComplete="name"
                required
                aria-required="true"
                aria-invalid={!!errors.name}
                aria-describedby={errors.name ? "cta-name-error" : undefined}
                value={name}
                onChange={(e) => onChangeName(e.target.value)}
                className={fieldClass(!!errors.name)}
                placeholder="Seu nome"
              />
              {errors.name && (
                <p id="cta-name-error" className="mt-1.5 text-xs font-medium text-red-300">
                  {errors.name}
                </p>
              )}
            </div>

            <div>
              <label htmlFor="cta-phone" className="mb-1.5 block text-xs uppercase tracking-wider text-white/60">
                WhatsApp
              </label>
              <input
                id="cta-phone"
                name="phone"
                type="tel"
                inputMode="tel"
                autoComplete="tel"
                required
                aria-required="true"
                aria-invalid={!!errors.phone}
                aria-describedby={errors.phone ? "cta-phone-error" : "cta-phone-hint"}
                value={phone}
                onChange={(e) => onChangePhone(e.target.value)}
                className={fieldClass(!!errors.phone)}
                placeholder="(41) 9 9999-9999"
              />
              {errors.phone ? (
                <p id="cta-phone-error" className="mt-1.5 text-xs font-medium text-red-300">
                  {errors.phone}
                </p>
              ) : (
                <p id="cta-phone-hint" className="mt-1.5 text-xs text-white/65">
                  Inclua DDD. Ex.: (41) 99999-9999.
                </p>
              )}
            </div>

            <div>
              <label htmlFor="cta-service" className="mb-1.5 block text-xs uppercase tracking-wider text-white/60">
                Serviço
              </label>
              <select
                id="cta-service"
                name="service"
                aria-invalid={!!errors.service}
                aria-describedby={errors.service ? "cta-service-error" : undefined}
                value={service}
                onChange={(e) => onChangeService(e.target.value)}
                className={fieldClass(!!errors.service)}
              >
                <option className="bg-navy-deep">Aquecedor a Gás</option>
                <option className="bg-navy-deep">Manutenção</option>
                <option className="bg-navy-deep">Pressurizador</option>
                <option className="bg-navy-deep">Bomba de Calor</option>
              </select>
              {errors.service && (
                <p id="cta-service-error" className="mt-1.5 text-xs font-medium text-red-300">
                  {errors.service}
                </p>
              )}
            </div>

            <button
              type="submit"
              className="mt-2 w-full rounded-full bg-gradient-to-r from-gold to-amber-500 py-4 font-semibold text-navy-deep transition-transform hover:scale-[1.02] focus-ring-nav"
            >
              Falar com Especialista no WhatsApp
            </button>
            <p className="text-center text-xs text-white/65">
              Ao enviar você será redirecionado para o WhatsApp.
            </p>
          </div>
        </form>
      </div>
    </section>
  );
}
