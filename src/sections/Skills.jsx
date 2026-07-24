import { motion } from "framer-motion";
import SectionHeading from "../components/SectionHeading";
import ClearanceMeter from "../components/ClearanceMeter";
import { skillCategories } from "../data/skills";
import { useI18n } from "../i18n/I18nContext";

export default function Skills() {
  const { t } = useI18n();
  return (
    <section id="competences" className="py-24 md:py-32 bg-(--color-panel-2)/40">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          index="02"
          id="COMPETENCES"
          title={t("skills.title")}
          subtitle={t("skills.subtitle")}
        />

        <div className="grid md:grid-cols-3 gap-6">
          {skillCategories.map((cat, ci) => (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45, delay: ci * 0.08 }}
              className="panel rounded-xl p-6"
            >
              <div className="flex items-center justify-between mb-6">
                <h3 className="font-display font-semibold text-(--color-text-primary)">{cat.title}</h3>
                <span className="font-mono text-[10px] text-(--color-text-muted) border border-(--color-border-strong) rounded px-2 py-1">
                  {cat.tag}
                </span>
              </div>
              <div className="space-y-4">
                {cat.skills.map((skill) => (
                  <ClearanceMeter
                    key={skill.name}
                    name={skill.name}
                    level={skill.level}
                    slug={skill.slug}
                    color={skill.color}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
