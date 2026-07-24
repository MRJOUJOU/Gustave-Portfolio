import { createContext, useContext, useEffect, useState } from "react";
import { translations } from "./translations";

const I18nContext = createContext(null);
const STORAGE_KEY = "jg-portfolio-lang";

function getInitialLang() {
  if (typeof window === "undefined") return "fr";
  const stored = window.localStorage.getItem(STORAGE_KEY);
  if (stored && translations[stored]) return stored;
  return "fr";
}

export function I18nProvider({ children }) {
  const [lang, setLang] = useState(getInitialLang);

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, lang);
    document.documentElement.lang = lang;
  }, [lang]);

  // Retrieves a nested string by dot path, e.g. t("hero.cta1")
  const t = (path) => {
    const parts = path.split(".");
    let node = translations[lang];
    for (const p of parts) {
      node = node?.[p];
    }
    return node ?? path;
  };

  return <I18nContext.Provider value={{ lang, setLang, t }}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useI18n must be used within I18nProvider");
  return ctx;
}
