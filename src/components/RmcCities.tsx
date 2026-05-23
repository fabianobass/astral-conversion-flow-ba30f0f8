export function RmcCities({ className = "" }: { className?: string }) {
  return (
    <div className={`mx-auto max-w-3xl px-4 text-center lg:px-8 ${className}`}>
      <p className="text-base leading-relaxed text-foreground/80">
        A Astral Gás é referência na venda, manutenção e instalação de aquecedores a gás Rinnai, Komeco e Lorenzetti em Curitiba e região metropolitana. Trabalhamos também com Rheem, Orbis e Bosch entre outras marcas, sempre com assistência técnica autorizada especializada.
      </p>
      <p className="mt-6 text-sm leading-relaxed text-foreground/60">
        <span className="font-medium text-foreground/70">Atendemos também:</span>{" "}
        São José dos Pinhais · Pinhais · Colombo · Araucária · Campo Largo · Piraquara · Fazenda Rio Grande · Almirante Tamandaré · Quatro Barras · Campina Grande do Sul · Bocaiúva do Sul
      </p>
    </div>
  );
}
