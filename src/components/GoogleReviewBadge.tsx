import { Star } from "lucide-react";

function GoogleG({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden="true">
      <path fill="#FFC107" d="M43.6 20.5H42V20H24v8h11.3c-1.6 4.7-6.1 8-11.3 8-6.6 0-12-5.4-12-12s5.4-12 12-12c3.1 0 5.8 1.2 7.9 3.1l5.7-5.7C34.1 6.1 29.3 4 24 4 12.9 4 4 12.9 4 24s8.9 20 20 20 20-8.9 20-20c0-1.3-.1-2.4-.4-3.5z" />
      <path fill="#FF3D00" d="M6.3 14.7l6.6 4.8C14.6 16 18.9 13 24 13c3.1 0 5.8 1.2 7.9 3.1l5.7-5.7C34.1 6.1 29.3 4 24 4 16.3 4 9.7 8.3 6.3 14.7z" />
      <path fill="#4CAF50" d="M24 44c5.2 0 9.9-2 13.4-5.2l-6.2-5.2C29.2 35 26.7 36 24 36c-5.2 0-9.6-3.3-11.3-8l-6.5 5C9.5 39.6 16.2 44 24 44z" />
      <path fill="#1976D2" d="M43.6 20.5H42V20H24v8h11.3c-.8 2.3-2.3 4.3-4.1 5.6l6.2 5.2C40.9 36 44 30.5 44 24c0-1.3-.1-2.4-.4-3.5z" />
    </svg>
  );
}

export function GoogleReviewBadge({
  variant = "dark",
  rating = "4.9",
  count = "+200 avaliações",
  size = "md",
  href = "https://www.google.com/search?q=astral+g%C3%A1s+curitiba",
}: {
  variant?: "dark" | "light";
  rating?: string;
  count?: string;
  size?: "sm" | "md" | "lg";
  href?: string;
}) {
  const isDark = variant === "dark";
  const sizes = {
    sm: { pad: "px-3 py-1.5", text: "text-xs", star: "h-3.5 w-3.5", g: "h-3.5 w-3.5", rating: "text-sm" },
    md: { pad: "px-4 py-2", text: "text-sm", star: "h-4 w-4", g: "h-4 w-4", rating: "text-base" },
    lg: { pad: "px-5 py-2.5", text: "text-sm", star: "h-5 w-5", g: "h-5 w-5", rating: "text-lg" },
  }[size];

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Avaliação ${rating} estrelas no Google, ${count}`}
      className={`inline-flex items-center gap-2.5 rounded-full border backdrop-blur transition-all hover:scale-[1.02] ${sizes.pad} ${
        isDark
          ? "border-white/15 bg-white/[0.06] text-white hover:border-gold/40 hover:bg-white/10"
          : "border-border bg-card text-foreground shadow-sm hover:border-gold/50"
      }`}
    >
      <GoogleG className={sizes.g} />
      <span className={`font-display font-bold ${sizes.rating} ${isDark ? "text-white" : "text-foreground"}`}>{rating}</span>
      <span className="flex gap-0.5" aria-hidden="true">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star key={i} className={`${sizes.star} fill-gold text-gold`} />
        ))}
      </span>
      <span className={`${sizes.text} ${isDark ? "text-white/70" : "text-muted-foreground"} hidden sm:inline`}>{count}</span>
    </a>
  );
}
