import { motion } from "framer-motion";
import { Github, ExternalLink, Building2, Gamepad2, Palette, Wrench } from "lucide-react";
import { useI18n } from "../i18n/I18nContext";

const CATEGORY_ICON = {
  "Web / Full Stack": Building2,
  "Développement de jeux": Gamepad2,
  "Design numérique": Palette,
};

export default function ProjectCard({ project, index }) {
  const { t } = useI18n();
  const Icon = CATEGORY_ICON[project.category] || Building2;
  const accentVar = project.accent === "amber" ? "var(--accent-amber)" : "var(--accent-cyan)";

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.45, delay: index * 0.08 }}
      className="group panel rounded-xl overflow-hidden flex flex-col hover:-translate-y-1 transition-transform"
    >
      <div
        className="relative h-40 flex items-center justify-center overflow-hidden"
        style={{
          background: `linear-gradient(135deg, color-mix(in srgb, ${accentVar} 18%, var(--bg-panel)) 0%, var(--bg-panel-2) 100%)`,
        }}
      >
        <div
          aria-hidden
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage:
              "linear-gradient(var(--border) 1px, transparent 1px), linear-gradient(90deg, var(--border) 1px, transparent 1px)",
            backgroundSize: "22px 22px",
          }}
        />
        <span
          className="relative inline-flex h-14 w-14 items-center justify-center rounded-xl"
          style={{ backgroundColor: `color-mix(in srgb, ${accentVar} 18%, transparent)`, color: accentVar }}
        >
          <Icon size={26} />
        </span>
        <span className="absolute top-3 right-3 font-mono text-[10px] tracking-wider text-(--color-text-muted) border border-(--color-border-strong) rounded px-2 py-0.5 bg-(--color-bg)/60">
          {project.tag}
        </span>
        {project.isTraining && (
          <span className="absolute top-3 left-3 inline-flex items-center gap-1 font-mono text-[10px] uppercase tracking-wide text-(--color-amber) border border-(--color-amber)/40 rounded px-2 py-0.5 bg-(--color-bg)/60">
            <Wrench size={10} /> {t("projects.training")}
          </span>
        )}
      </div>

      <div className="p-6 flex flex-col flex-1">
        <div className="flex items-start justify-between gap-3 mb-2">
          <h3 className="font-display font-semibold text-(--color-text-primary) leading-snug">
            {project.title}
          </h3>
          <span
            className="shrink-0 font-mono text-[10px] uppercase rounded px-2 py-1"
            style={{
              color: project.status === "Terminé" ? "var(--accent-cyan)" : "var(--accent-amber)",
              backgroundColor:
                project.status === "Terminé" ? "var(--accent-cyan-dim)" : "var(--accent-amber-dim)",
            }}
          >
            {project.status}
          </span>
        </div>
        <p className="text-(--color-text-secondary) text-sm leading-relaxed mb-3">{project.description}</p>
        {project.role && (
          <p className="font-mono text-[11px] text-(--color-text-muted) mb-4">→ {project.role}</p>
        )}

        <div className="flex flex-wrap gap-1.5 mb-5 mt-auto">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className="font-mono text-[10px] rounded-full border border-(--color-border-strong) px-2.5 py-1 text-(--color-text-secondary)"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-4 pt-4 border-t border-(--color-border)">
          {project.github ? (
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-medium text-(--color-text-secondary) hover:text-(--color-cyan) transition-colors"
            >
              <Github size={15} /> {t("projects.code")}
            </a>
          ) : (
            <span className="inline-flex items-center gap-1.5 text-xs text-(--color-text-muted)">
              <Github size={15} /> {t("projects.private")}
            </span>
          )}
          {project.demo ? (
            <a
              href={project.demo}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-medium text-(--color-text-secondary) hover:text-(--color-cyan) transition-colors"
            >
              <ExternalLink size={15} /> {t("projects.demo")}
            </a>
          ) : null}
        </div>
      </div>
    </motion.article>
  );
}
