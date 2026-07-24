import { useEffect, useState } from "react";
import { Menu, X, ShieldCheck } from "lucide-react";
import ThemeToggle from "./ThemeToggle";
import LanguageSwitcher from "./LanguageSwitcher";
import { profile } from "../data/profile";
import { useI18n } from "../i18n/I18nContext";

const NAV_IDS = ["accueil", "a-propos", "competences", "projets", "experience", "certifications", "blog", "contact"];
const NAV_KEYS = { accueil: "accueil", "a-propos": "apropos", competences: "competences", projets: "projets",
  experience: "experience", certifications: "certifications", blog: "blog", contact: "contact" };

export default function Navbar({ theme, toggleTheme }) {
  const { t } = useI18n();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("accueil");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = NAV_IDS.map((id) => document.getElementById(id)).filter(Boolean);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -45% 0px" }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  const handleNavClick = (id) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? "backdrop-blur-md bg-(--color-bg)/80 border-b border-(--color-border)" : "bg-transparent"
      }`}
    >
      <nav className="mx-auto max-w-6xl px-5 sm:px-8 h-16 flex items-center justify-between">
        <button
          onClick={() => handleNavClick("accueil")}
          className="flex items-center gap-2 font-display font-semibold text-(--color-text-primary) cursor-pointer"
        >
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-md border border-(--color-cyan)/40 bg-(--color-cyan-dim) text-(--color-cyan)">
            <ShieldCheck size={16} />
          </span>
          <span className="hidden sm:inline">{profile.initials}.AMOULE</span>
        </button>

        <ul className="hidden xl:flex items-center gap-0.5 font-mono text-[11px] uppercase tracking-wide">
          {NAV_IDS.map((id) => (
            <li key={id}>
              <button
                onClick={() => handleNavClick(id)}
                className={`px-2.5 py-2 rounded-md transition-colors cursor-pointer whitespace-nowrap ${
                  active === id
                    ? "text-(--color-cyan)"
                    : "text-(--color-text-muted) hover:text-(--color-text-primary)"
                }`}
              >
                {t(`nav.${NAV_KEYS[id]}`)}
              </button>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <LanguageSwitcher compact />
          <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
          <button
            onClick={() => setOpen((o) => !o)}
            aria-label="Ouvrir le menu"
            className="xl:hidden inline-flex h-9 w-9 items-center justify-center rounded-full border border-(--color-border-strong) text-(--color-text-secondary) cursor-pointer"
          >
            {open ? <X size={16} /> : <Menu size={16} />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="xl:hidden border-t border-(--color-border) bg-(--color-bg) px-5 py-4">
          <ul className="flex flex-col gap-1 font-mono text-sm uppercase tracking-wide">
            {NAV_IDS.map((id) => (
              <li key={id}>
                <button
                  onClick={() => handleNavClick(id)}
                  className={`w-full text-left px-2 py-2.5 rounded-md transition-colors cursor-pointer ${
                    active === id ? "text-(--color-cyan)" : "text-(--color-text-muted)"
                  }`}
                >
                  {t(`nav.${NAV_KEYS[id]}`)}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
