export function TrustBar() {
  const brands = ["RINNAI", "KOMECO", "BOSCH", "LORENZETTI", "CUMULUS", "ORBIS"];
  return (
    <section className="border-y border-border bg-secondary py-8">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <p className="mb-6 text-center text-xs uppercase tracking-widest text-muted-foreground">
          Trabalhamos com as principais marcas do mercado
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-4">
          {brands.map((b) => (
            <span key={b} className="font-display text-xl font-bold tracking-wider text-foreground/40 transition-colors hover:text-navy">
              {b}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
