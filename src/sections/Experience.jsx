import { motion } from "framer-motion";
import { Briefcase, GraduationCap } from "lucide-react";
import SectionHeading from "../components/SectionHeading";
import { experiences, education } from "../data/experiences";
import { useI18n } from "../i18n/I18nContext";

export default function Experience() {
  const { t } = useI18n();
  return (
    <section id="experience" className="py-24 md:py-32 bg-(--color-panel-2)/40">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          index="05"
          id="EXPERIENCE"
          title={t("experience.title")}
          subtitle={t("experience.subtitle")}
        />

        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <h3 className="font-mono text-xs uppercase tracking-wider text-(--color-text-muted) mb-6 flex items-center gap-2">
              <Briefcase size={14} className="text-(--color-cyan)" /> {t("experience.pro")}
            </h3>
            <div className="space-y-8 border-l border-(--color-border) pl-6">
              {experiences.map((exp, i) => (
                <motion.div
                  key={exp.id}
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.45, delay: i * 0.08 }}
                  className="relative"
                >
                  <span className="absolute -left-[29px] top-1.5 h-2.5 w-2.5 rounded-full bg-(--color-cyan) ring-4 ring-(--color-cyan-dim)" />
                  <p className="font-mono text-xs text-(--color-cyan) mb-1">{exp.period}</p>
                  <h4 className="font-display font-semibold text-(--color-text-primary)">{exp.role}</h4>
                  <p className="text-(--color-text-secondary) text-sm mb-3">
                    {exp.company} — {exp.location}
                  </p>
                  <ul className="space-y-1.5">
                    {exp.missions.map((m) => (
                      <li key={m} className="text-sm text-(--color-text-secondary) flex gap-2">
                        <span className="text-(--color-amber) mt-1.5 h-1 w-1 rounded-full bg-(--color-amber) shrink-0" />
                        {m}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-mono text-xs uppercase tracking-wider text-(--color-text-muted) mb-6 flex items-center gap-2">
              <GraduationCap size={14} className="text-(--color-cyan)" /> {t("experience.formation")}
            </h3>
            <div className="space-y-8 border-l border-(--color-border) pl-6">
              {education.map((edu, i) => (
                <motion.div
                  key={edu.id}
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.45, delay: i * 0.08 }}
                  className="relative"
                >
                  <span className="absolute -left-[29px] top-1.5 h-2.5 w-2.5 rounded-full bg-(--color-amber) ring-4 ring-(--color-amber-dim)" />
                  <p className="font-mono text-xs text-(--color-amber) mb-1">{edu.period}</p>
                  <h4 className="font-display font-semibold text-(--color-text-primary)">{edu.degree}</h4>
                  <p className="text-(--color-text-secondary) text-sm">{edu.school}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
