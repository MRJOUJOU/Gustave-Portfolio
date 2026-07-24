import { useState } from "react";
import { Globe } from "lucide-react";
import { LANGUAGES } from "../i18n/translations";
import { useI18n } from "../i18n/I18nContext";

export default function LanguageSwitcher({ compact = false }) {
  const { lang, setLang } = useI18n();
  const [open, setOpen] = useState(false);

  return (
    <div className="relative">
      <button
        onClick={() => setOpen((o) => !o)}
        aria-label="Changer de langue"
        className="inline-flex items-center gap-1.5 h-9 px-3 rounded-full border border-(--color-border-strong) text-(--color-text-secondary) hover:text-(--color-cyan) hover:border-(--color-cyan) transition-colors cursor-pointer font-mono text-xs"
      >
        <Globe size={14} />
        {!compact && lang.toUpperCase()}
      </button>
      {open && (
        <div className="absolute right-0 mt-2 w-24 rounded-lg border border-(--color-border-strong) bg-(--color-panel) shadow-lg overflow-hidden z-50">
          {LANGUAGES.map((l) => (
            <button
              key={l.code}
              onClick={() => {
                setLang(l.code);
                setOpen(false);
              }}
              className={`block w-full text-left px-3 py-2 font-mono text-xs transition-colors ${
                lang === l.code ? "text-(--color-cyan) bg-(--color-cyan-dim)" : "text-(--color-text-secondary) hover:bg-(--color-panel-hover)"
              }`}
            >
              {l.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
