import { useEffect, useState } from "react";
import { Palette, Check } from "lucide-react";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { FONT_COMBOS, DEFAULT_FONT_ID, FONT_STORAGE_KEY, type FontCombo } from "@/lib/fonts";
import { THEMES, DEFAULT_THEME_ID, THEME_STORAGE_KEY, type Theme } from "@/lib/themes";

const applyFont = (combo: FontCombo) => {
  const root = document.documentElement;
  root.style.setProperty("--font-display-active", combo.display);
  root.style.setProperty("--font-sans-active", combo.sans);
};

const applyTheme = (theme: Theme) => {
  const root = document.documentElement;
  Object.entries(theme.vars).forEach(([k, v]) => root.style.setProperty(k, v));
};

export function StyleSwitcher() {
  // Só aparece no editor Lovable (Vite dev). No site publicado fica oculto.
  if (!import.meta.env.DEV) return null;

  const [fontId, setFontId] = useState<string>(DEFAULT_FONT_ID);
  const [themeId, setThemeId] = useState<string>(DEFAULT_THEME_ID);

  useEffect(() => {
    const savedFont = localStorage.getItem(FONT_STORAGE_KEY);
    const font = FONT_COMBOS.find((c) => c.id === savedFont) ?? FONT_COMBOS.find((c) => c.id === DEFAULT_FONT_ID);
    if (font) { setFontId(font.id); applyFont(font); }

    const savedTheme = localStorage.getItem(THEME_STORAGE_KEY);
    const theme = THEMES.find((t) => t.id === savedTheme) ?? THEMES.find((t) => t.id === DEFAULT_THEME_ID);
    if (theme) { setThemeId(theme.id); applyTheme(theme); }
  }, []);

  const selectFont = (c: FontCombo) => {
    setFontId(c.id);
    applyFont(c);
    localStorage.setItem(FONT_STORAGE_KEY, c.id);
  };

  const selectTheme = (t: Theme) => {
    setThemeId(t.id);
    applyTheme(t);
    localStorage.setItem(THEME_STORAGE_KEY, t.id);
  };

  return (
    <Popover>
      <PopoverTrigger asChild>
        <button
          aria-label="Personalizar visual"
          className="fixed bottom-6 left-6 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-navy-deep text-gold shadow-[0_10px_30px_-10px_rgba(0,0,0,0.5)] transition-transform hover:scale-105"
        >
          <Palette className="h-5 w-5" />
        </button>
      </PopoverTrigger>
      <PopoverContent side="top" align="start" className="w-80 p-3">
        <Tabs defaultValue="colors">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="colors">Cores</TabsTrigger>
            <TabsTrigger value="fonts">Fontes</TabsTrigger>
          </TabsList>

          <TabsContent value="colors" className="mt-3 space-y-1.5">
            {THEMES.map((t) => {
              const active = t.id === themeId;
              return (
                <button
                  key={t.id}
                  onClick={() => selectTheme(t)}
                  className={`flex w-full items-center justify-between rounded-md px-3 py-2.5 text-left transition-colors ${
                    active ? "bg-secondary ring-2 ring-gold" : "hover:bg-secondary/60"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className="flex h-7 w-14 overflow-hidden rounded-md ring-1 ring-border">
                      {t.swatches.map((s, i) => (
                        <div key={i} className="flex-1" style={{ background: s }} />
                      ))}
                    </div>
                    <span className="text-sm font-medium text-foreground">{t.label}</span>
                  </div>
                  {active && <Check className="h-4 w-4 text-gold" />}
                </button>
              );
            })}
          </TabsContent>

          <TabsContent value="fonts" className="mt-3 space-y-1">
            {FONT_COMBOS.map((c) => {
              const active = c.id === fontId;
              return (
                <button
                  key={c.id}
                  onClick={() => selectFont(c)}
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
          </TabsContent>
        </Tabs>
      </PopoverContent>
    </Popover>
  );
}
