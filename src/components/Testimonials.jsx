import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Quote } from "lucide-react";
import { useI18n } from "../i18n/I18nContext";
import { testimonials } from "../data/testimonials";

// Rotation toutes les heures, comme demandé — garde l'affichage "vivant"
// sans jamais prétendre être autre chose que des avis d'exemple (voir
// la mention affichée en bas de la carte).
const ROTATE_MS = 60 * 60 * 1000;

function formatRelativeDate(daysAgo, lang) {
  const date = new Date();
  date.setDate(date.getDate() - daysAgo);
  return new Intl.DateTimeFormat(lang === "fr" ? "fr-FR" : lang === "de" ? "de-DE" : "en-US", {
    day: "numeric",
    month: "short",
    year: "numeric",
  }).format(date);
}

export default function Testimonials() {
  const { t, lang } = useI18n();
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % testimonials.length), ROTATE_MS);
    return () => clearInterval(id);
  }, []);

  const current = testimonials[index];

  return (
    <div className="panel rounded-xl p-6 sm:p-8 relative overflow-hidden">
      <Quote size={28} className="text-(--color-cyan)/30 mb-3" />
      <AnimatePresence mode="wait">
        <motion.div
          key={current.name}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.4 }}
        >
          <p className="text-(--color-text-secondary) text-sm sm:text-base leading-relaxed">"{current.message}"</p>
          <div className="mt-4 flex items-baseline justify-between gap-3">
            <p className="text-sm font-medium text-(--color-text-primary)">
              {current.name} <span className="text-(--color-text-muted) font-normal">— {current.role}</span>
            </p>
            <span className="font-mono text-[10px] text-(--color-text-muted) whitespace-nowrap">
              {formatRelativeDate(current.daysAgo, lang)}
            </span>
          </div>
        </motion.div>
      </AnimatePresence>
      <p className="mt-5 font-mono text-[10px] uppercase tracking-wide text-(--color-text-muted) border-t border-(--color-border) pt-3">
        {t("testimonials.disclaimer")}
      </p>
    </div>
  );
}
