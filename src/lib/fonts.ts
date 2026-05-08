export type FontCombo = {
  id: string;
  label: string;
  display: string;
  sans: string;
};

export const FONT_COMBOS: FontCombo[] = [
  { id: "astral", label: "Astral (Mulish)", display: "'Mulish', sans-serif", sans: "'Mulish', sans-serif" },
  { id: "fraunces", label: "Fraunces + DM Sans", display: "'Fraunces', serif", sans: "'DM Sans', sans-serif" },
  { id: "playfair", label: "Playfair + Inter", display: "'Playfair Display', serif", sans: "'Inter', sans-serif" },
  { id: "cormorant", label: "Cormorant + Manrope", display: "'Cormorant Garamond', serif", sans: "'Manrope', sans-serif" },
  { id: "sora", label: "Sora + Jakarta", display: "'Sora', sans-serif", sans: "'Plus Jakarta Sans', sans-serif" },
];

export const DEFAULT_FONT_ID = "astral";
export const FONT_STORAGE_KEY = "astral-font-combo";
