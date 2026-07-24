import { useEffect, useState } from "react";

const STORAGE_KEY = "jg-portfolio-theme";

function getInitialTheme() {
  if (typeof window === "undefined") return "bleu";
  const stored = window.localStorage.getItem(STORAGE_KEY);
  if (stored === "bleu" || stored === "noir") return stored;
  return "bleu";
}

// Two dark variants only — "bleu" (deep navy) and "noir" (near-black).
// No light/white theme, so toggling never produces a bright flash.
export function useTheme() {
  const [theme, setTheme] = useState(getInitialTheme);

  useEffect(() => {
    const root = document.documentElement;
    const applyVariant = () => {
      root.classList.toggle("theme-noir", theme === "noir");
    };

    // Use the View Transitions API for a smooth premium crossfade when supported.
    if (document.startViewTransition) {
      document.startViewTransition(applyVariant);
    } else {
      applyVariant();
    }
    window.localStorage.setItem(STORAGE_KEY, theme);
  }, [theme]);

  const toggleTheme = () => setTheme((t) => (t === "bleu" ? "noir" : "bleu"));

  return { theme, toggleTheme };
}
