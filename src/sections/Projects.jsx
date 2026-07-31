import { useState } from "react";
import SectionHeading from "../components/SectionHeading";
import ProjectCard from "../components/ProjectCard";
import { projects } from "../data/projects";
import { useI18n } from "../i18n/I18nContext";
import { projectTranslations, localize } from "../i18n/projectTranslations";

export default function Projects() {
  const { t, lang } = useI18n();
  const [showAll, setShowAll] = useState(false);

  const customOrder = ["mahoussi", "cv-generator", "Site fitness"];

  const sortedProjects = [...projects].sort((a, b) => {
    const indexA = customOrder.indexOf(a.id);
    const indexB = customOrder.indexOf(b.id);

    if (indexA !== -1 && indexB !== -1) {
      return indexA - indexB;
    }
    if (indexA !== -1) return -1;
    if (indexB !== -1) return 1;
    return 0;
  });

  const displayedProjects = showAll ? sortedProjects : sortedProjects.slice(0, 3);

  return (
    <section id="projets" className="py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          index="03"
          id="PROJETS"
          title={t("projects.title")}
          subtitle={t("projects.subtitle")}
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedProjects.map((project, i) => (
            <ProjectCard key={project.id} project={localize(project, projectTranslations, lang)} index={i} />
          ))}
        </div>
        {projects.length > 3 && (
          <div className="flex justify-center mt-12">
            <button
              onClick={() => setShowAll((prev) => !prev)}
              className="group flex items-center gap-2 px-8 py-3 rounded-full bg-panel border border-border hover:border-cyan text-text-secondary hover:text-cyan transition-all duration-300 font-medium text-sm tracking-wide"
            >
              {showAll ? (
                <>
                  <span>{t("projects.showLess")}</span>
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
                  <span>{t("projects.showMore")}</span>
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