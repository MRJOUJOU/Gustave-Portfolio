import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const LINES = ["init_portfolio.sh", "loading assets...", "checking clearance...", "access granted"];

export default function LoadingScreen({ onDone }) {
  const [lineIndex, setLineIndex] = useState(0);

  useEffect(() => {
    if (lineIndex >= LINES.length) {
      const t = setTimeout(onDone, 350);
      return () => clearTimeout(t);
    }
    const t = setTimeout(() => setLineIndex((i) => i + 1), 260);
    return () => clearTimeout(t);
  }, [lineIndex, onDone]);

  return (
    <motion.div
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-(--color-bg)"
    >
      <div className="font-mono text-sm w-72">
        {LINES.slice(0, lineIndex).map((line, i) => (
          <p key={line} className={i === LINES.length - 1 ? "text-(--color-cyan)" : "text-(--color-text-muted)"}>
            {i < LINES.length - 1 ? "$ " : "✓ "}
            {line}
          </p>
        ))}
        <div className="mt-4 h-1 w-full rounded-full bg-(--color-panel-2) overflow-hidden">
          <motion.div
            className="h-full bg-(--color-cyan)"
            initial={{ width: "0%" }}
            animate={{ width: `${(lineIndex / LINES.length) * 100}%` }}
            transition={{ duration: 0.25 }}
          />
        </div>
      </div>
    </motion.div>
  );
}
