import { useEffect, useState } from "react";
import { Eye } from "lucide-react";
import { useI18n } from "../i18n/I18nContext";
import AnimatedCounter from "./AnimatedCounter";

const STORAGE_KEY = "jg-portfolio-visitors";
const SESSION_KEY = "jg-portfolio-visited-session";
const BASE_COUNT = 200;
const GROWTH_INTERVAL_HOURS = 5;

/**
 * NOTE: this is a per-browser, local-only simulation (localStorage),
 * not a real shared/global visitor count — that would require a backend.
 * It starts at 200 and grows automatically over time plus one increment
 * per new browser session, giving a live, ever-increasing feel.
 */
function getCount() {
  const now = Date.now();
  let stored;
  try {
    stored = JSON.parse(window.localStorage.getItem(STORAGE_KEY));
  } catch {
    stored = null;
  }

  if (!stored) {
    stored = { count: BASE_COUNT, lastGrowthAt: now };
  }

  const hoursElapsed = (now - stored.lastGrowthAt) / (1000 * 60 * 60);
  const increments = Math.floor(hoursElapsed / GROWTH_INTERVAL_HOURS);
  if (increments > 0) {
    stored.count += increments;
    stored.lastGrowthAt += increments * GROWTH_INTERVAL_HOURS * 60 * 60 * 1000;
  }

  if (!window.sessionStorage.getItem(SESSION_KEY)) {
    stored.count += 1;
    window.sessionStorage.setItem(SESSION_KEY, "1");
  }

  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(stored));
  return stored.count;
}

export default function VisitorCounter({ className = "" }) {
  const { t } = useI18n();
  const [count, setCount] = useState(BASE_COUNT);

  useEffect(() => {
    setCount(getCount());
  }, []);

  return (
    <div className={`inline-flex items-center gap-2 rounded-full border border-(--color-border-strong) bg-(--color-panel) px-3.5 py-1.5 font-mono text-xs text-(--color-text-secondary) ${className}`}>
      <Eye size={13} className="text-(--color-cyan)" />
      {t("visitors.label")} <AnimatedCounter value={count} className="text-(--color-cyan) font-medium" /> {t("visitors.suffix")}
    </div>
  );
}
