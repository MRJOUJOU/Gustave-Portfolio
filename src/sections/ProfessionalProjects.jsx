import { useState } from "react";
import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";
import SectionHeading from "../components/SectionHeading";
import { professionalProjects } from "../data/projects";
import { useI18n } from "../i18n/I18nContext";
import { professionalProjectTranslations, localize } from "../i18n/projectTranslations";

export default function ProfessionalProjects() {
  const { t, lang } = useI18n();
  const [showAllPro, setShowAllPro] = useState(false);

  const localized = professionalProjects.map((p) => localize(p, professionalProjectTranslations, lang));

  const displayedProjects = showAllPro ? localized : localized.slice(0, 2);

  return (
    <section id="projets-pro" className="py-24 md:py-32 bg-(--color-panel-2)/40">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          index="04"
          id="PROJETS_PRO"
          title={t("projectsPro.title")}
          subtitle={t("projectsPro.subtitle")}
        />
        <div className="grid sm:grid-cols-2 gap-6">
          {displayedProjects.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
              className="panel rounded-xl p-6"
            >
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-md bg-(--color-cyan-dim) text-(--color-cyan)">
                    <Briefcase size={18} />
                  </span>
                  <div>
                    <h3 className="font-display font-semibold text-(--color-text-primary)">{project.title}</h3>
                    <p className="text-(--color-text-muted) text-xs">{project.client}</p>
                  </div>
                </div>
                <span className="font-mono text-[10px] text-(--color-text-muted) border border-(--color-border-strong) rounded px-2 py-0.5">
                  {project.tag}
                </span>
              </div>
              <p className="text-(--color-text-secondary) text-sm leading-relaxed mb-3">{project.description}</p>
              <p className="font-mono text-[11px] text-(--color-text-muted) mb-4">→ {project.role}</p>
              <div className="flex flex-wrap gap-1.5">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="font-mono text-[10px] rounded-full border border-(--color-border-strong) px-2.5 py-1 text-(--color-text-secondary)"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
        {professionalProjects.length > 2 && (
          <div className="flex justify-center mt-12">
            <button
              onClick={() => setShowAllPro((prev) => !prev)}
              className="group flex items-center gap-2 px-8 py-3 rounded-full bg-panel border border-border hover:border-cyan text-text-secondary hover:text-cyan transition-all duration-300 font-medium text-sm tracking-wide"
            >
              {showAllPro ? (
                <>
                  <span>{t("projectsPro.showLess")}</span>
                  <svg
                    className="w-4 h-4 transform rotate-180 transition-transform duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                  </svg>
                </>
              ) : (
                <>
                  <span>{t("projectsPro.showMore")}</span>
                  <svg
                    className="w-4 h-4 transition-transform duration-300 group-hover:translate-y-0.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </>
              )}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}