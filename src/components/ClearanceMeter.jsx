import { motion } from "framer-motion";
import { levelLabels } from "../data/skills";

/**
 * Signature element: skills shown as "clearance level" segments,
 * (1-5) instead of a generic percentage bar — ties skill mastery
 * to the security/access-panel identity of the whole site.
 */
export default function ClearanceMeter({ name, level, slug, color }) {
  return (
    <div className="group">
      <div className="flex items-baseline justify-between mb-1.5">
        <span className="flex items-center gap-2 text-sm font-medium text-(--color-text-primary)">
          {slug && (
            <img
              src={`https://cdn.simpleicons.org/${slug}/${color}`}
              alt=""
              width={14}
              height={14}
              loading="lazy"
              className="opacity-70 group-hover:opacity-100 group-hover:scale-110 transition-all"
            />
          )}
          {name}
        </span>
        <span className="font-mono text-[10px] uppercase tracking-wider text-(--color-text-muted)">
          {levelLabels[level]}
        </span>
      </div>
      <div className="flex gap-1">
        {Array.from({ length: 5 }).map((_, i) => (
          <motion.span
            key={i}
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35, delay: i * 0.06, ease: "easeOut" }}
            style={{ transformOrigin: "bottom" }}
            className="h-2.5 flex-1 rounded-[2px]"
            data-filled={i < level}
          >
            <span
              className="block h-full w-full rounded-[2px]"
              style={{
                backgroundColor: i < level ? "var(--accent-cyan)" : "var(--border-strong)",
              }}
            />
          </motion.span>
        ))}
      </div>
    </div>
  );
}
