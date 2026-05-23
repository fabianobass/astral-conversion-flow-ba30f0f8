export function RmcCities({ className = "" }: { className?: string }) {
  return (
    <p className={`mx-auto max-w-3xl px-4 text-center text-sm leading-relaxed text-foreground/60 lg:px-8 ${className}`}>
      <span className="font-medium text-foreground/70">Atendemos também:</span>{" "}
      São José dos Pinhais · Pinhais · Colombo · Araucária · Campo Largo · Piraquara · Fazenda Rio Grande · Almirante Tamandaré · Quatro Barras · Campina Grande do Sul · Bocaiúva do Sul
    </p>
  );
}
