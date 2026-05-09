import logoRinnai from "@/assets/logo-rinnai.png";
import logoKomeco from "@/assets/logo-komeco.png";
import logoBosch from "@/assets/logo-bosch.png";
import logoLorenzetti from "@/assets/logo-lorenzetti.png";
import logoRheem from "@/assets/logo-rheem.png";
import logoOrbis from "@/assets/logo-orbis.png";

export function TrustBar() {
  const brands = [
    { src: logoRinnai, alt: "Rinnai" },
    { src: logoKomeco, alt: "Komeco" },
    { src: logoBosch, alt: "Bosch" },
    { src: logoLorenzetti, alt: "Lorenzetti" },
    { src: logoRheem, alt: "Rheem" },
    { src: logoOrbis, alt: "Orbis" },
  ];
  return (
    <section className="border-y border-border bg-secondary py-8">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <p className="mb-6 text-center text-xs uppercase tracking-widest text-muted-foreground">
          Trabalhamos com as principais marcas do mercado
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6">
          {brands.map((b) => (
            <img
              key={b.alt}
              src={b.src}
              alt={`Logo ${b.alt}`}
              className="h-10 w-auto object-contain opacity-70 transition-opacity hover:opacity-100"
              loading="lazy"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
