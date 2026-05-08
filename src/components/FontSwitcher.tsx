import { useEffect, useState } from "react";
import { Type, Check } from "lucide-react";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { FONT_COMBOS, DEFAULT_FONT_ID, FONT_STORAGE_KEY, type FontCombo } from "@/lib/fonts";

const applyCombo = (combo: FontCombo) => {
  const root = document.documentElement;
  root.style.setProperty("--font-display-active", combo.display);
  root.style.setProperty("--font-sans-active", combo.sans);
};

export function FontSwitcher() {
  const [activeId, setActiveId] = useState<string>(DEFAULT_FONT_ID);

  useEffect(() => {
    const saved = localStorage.getItem(FONT_STORAGE_KEY);
    const combo = FONT_COMBOS.find((c) => c.id === saved) ?? FONT_COMBOS.find((c) => c.id === DEFAULT_FONT_ID);
    if (combo) {
      setActiveId(combo.id);
      applyCombo(combo);
    }
  }, []);

  const select = (combo: FontCombo) => {
    setActiveId(combo.id);
    applyCombo(combo);
    localStorage.setItem(FONT_STORAGE_KEY, combo.id);
  };

  return (
    <Popover>
      <PopoverTrigger asChild>
        <button
          aria-label="Trocar fonte"
          className="fixed bottom-6 left-6 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-navy-deep text-gold shadow-[0_10px_30px_-10px_rgba(0,0,0,0.5)] transition-transform hover:scale-105"
        >
          <Type className="h-5 w-5" />
        </button>
      </PopoverTrigger>
      <PopoverContent side="top" align="start" className="w-72 p-2">
        <div className="px-3 py-2">
          <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Tipografia</div>
          <div className="text-[11px] text-muted-foreground/70">Aplica em todo o site</div>
        </div>
        <div className="space-y-1">
          {FONT_COMBOS.map((c) => {
            const active = c.id === activeId;
            return (
              <button
                key={c.id}
                onClick={() => select(c)}
                className={`flex w-full items-center justify-between rounded-md px-3 py-2.5 text-left transition-colors ${
                  active ? "bg-navy-deep text-white" : "hover:bg-secondary"
                }`}
              >
                <div className="flex flex-col leading-tight">
                  <span style={{ fontFamily: c.display }} className="text-lg font-semibold">
                    {c.label.split(" + ")[0]}
                  </span>
                  <span style={{ fontFamily: c.sans }} className="text-xs opacity-70">
                    + {c.label.split(" + ")[1]}
                  </span>
                </div>
                {active && <Check className="h-4 w-4 text-gold" />}
              </button>
            );
          })}
        </div>
      </PopoverContent>
    </Popover>
  );
}
