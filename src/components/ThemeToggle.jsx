import { Moon, CircleDot } from "lucide-react";

export default function ThemeToggle({ theme, toggleTheme }) {
  const isNoir = theme === "noir";
  return (
    <button
      onClick={toggleTheme}
      aria-label={isNoir ? "Passer au thème Bleu" : "Passer au thème Noir"}
      title={isNoir ? "Thème : Noir" : "Thème : Bleu"}
      className="relative inline-flex h-9 w-9 items-center justify-center rounded-full border border-(--color-border-strong) text-(--color-text-secondary) transition-colors hover:text-(--color-cyan) hover:border-(--color-cyan) cursor-pointer"
    >
      {isNoir ? <CircleDot size={16} /> : <Moon size={16} />}
    </button>
  );
}
