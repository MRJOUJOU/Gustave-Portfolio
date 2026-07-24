import SectionHeading from "../components/SectionHeading";
import ProjectCard from "../components/ProjectCard";
import { projects } from "../data/projects";
import { useI18n } from "../i18n/I18nContext";
import { projectTranslations, localize } from "../i18n/projectTranslations";

export default function Projects() {
  const { t, lang } = useI18n();
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
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={localize(project, projectTranslations, lang)} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
