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
        <div className="grid grid-cols-3 items-center justify-items-center gap-x-6 gap-y-8 sm:grid-cols-6 sm:gap-x-10">
          {brands.map((b) => (
            <div key={b.alt} className="flex h-12 w-full items-center justify-center sm:h-14">
              <img
                src={b.src}
                alt={`Logo ${b.alt}`}
                className="max-h-full max-w-[120px] object-contain opacity-70 transition-opacity hover:opacity-100"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
