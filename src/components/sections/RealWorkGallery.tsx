import { useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { ArrowLeft, ArrowRight, MapPin } from "lucide-react";

export type WorkPhoto = {
  src: string;
  alt: string;
  caption: string;
  neighborhood?: string;
};

type Props = {
  eyebrow?: string;
  title?: string;
  subtitle?: string;
  photos: WorkPhoto[];
};

export function RealWorkGallery({
  eyebrow = "Trabalhos Reais",
  title = "Instalações feitas pela equipe Astral Gás",
  subtitle = "Fotos reais dos nossos serviços em Curitiba e região. Equipe uniformizada, ferramentas certas e acabamento de qualidade.",
  photos,
}: Props) {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: "start" },
    [Autoplay({ delay: 4000, stopOnInteraction: false, stopOnMouseEnter: true })],
  );
  const [selected, setSelected] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setSelected(emblaApi.selectedScrollSnap());
    setScrollSnaps(emblaApi.scrollSnapList());
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
    onSelect();
  }, [emblaApi]);

  if (!photos || photos.length === 0) return null;

  return (
    <section className="bg-background py-20">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mx-auto mb-10 max-w-2xl text-center">
          <div className="mb-3 text-xs uppercase tracking-widest text-gold font-semibold">
            {eyebrow}
          </div>
          <h2 className="font-display text-3xl font-bold leading-tight text-foreground sm:text-4xl">
            {title}
          </h2>
          <p className="mt-4 text-foreground/70">{subtitle}</p>
        </div>

        <div className="relative">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex -ml-4">
              {photos.map((p, i) => (
                <div
                  key={i}
                  className="min-w-0 shrink-0 grow-0 basis-full pl-4 sm:basis-1/2 lg:basis-1/3 xl:basis-1/4"
                >
                  <figure className="group relative overflow-hidden rounded-2xl border border-border bg-card shadow-lg">
                    <div className="aspect-square overflow-hidden">
                      <img
                        src={p.src}
                        alt={p.alt}
                        loading="lazy"
                        decoding="async"
                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    </div>
                    <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-navy-deep/95 via-navy-deep/70 to-transparent p-5 pt-12 text-white">
                      <div className="text-sm font-semibold leading-snug">{p.caption}</div>
                      {p.neighborhood && (
                        <div className="mt-1 flex items-center gap-1 text-xs text-gold">
                          <MapPin className="h-3 w-3" aria-hidden="true" />
                          {p.neighborhood}
                        </div>
                      )}
                    </figcaption>
                  </figure>
                </div>
              ))}
            </div>
          </div>

          <button
            type="button"
            onClick={() => emblaApi?.scrollPrev()}
            aria-label="Foto anterior"
            className="absolute -left-2 top-1/2 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white text-nav-fg shadow-lg ring-1 ring-border transition-colors hover:bg-nav-bg-active hover:text-nav-fg-hover active:bg-nav-bg-active active:text-nav-fg-active focus-ring-nav sm:flex lg:-left-5"
          >
            <ArrowLeft className="h-5 w-5" />
          </button>
          <button
            type="button"
            onClick={() => emblaApi?.scrollNext()}
            aria-label="Próxima foto"
            className="absolute -right-2 top-1/2 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white text-nav-fg shadow-lg ring-1 ring-border transition-colors hover:bg-nav-bg-active hover:text-nav-fg-hover active:bg-nav-bg-active active:text-nav-fg-active focus-ring-nav sm:flex lg:-right-5"
          >
            <ArrowRight className="h-5 w-5" />
          </button>
        </div>

        <div className="mt-6 flex justify-center gap-2">
          {scrollSnaps.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => emblaApi?.scrollTo(i)}
              aria-label={`Ir para foto ${i + 1}`}
              aria-current={i === selected ? "true" : undefined}
              className={`h-2 rounded-full transition-all outline-none focus-ring-nav ${
                i === selected ? "w-8 bg-nav-accent" : "w-2 bg-nav-fg/25 hover:bg-nav-fg/50"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
