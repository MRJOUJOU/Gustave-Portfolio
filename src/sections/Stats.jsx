import { motion } from "framer-motion";
import { useI18n } from "../i18n/I18nContext";
import AnimatedCounter from "../components/AnimatedCounter";
import VisitorCounter from "../components/VisitorCounter";
import { profile } from "../data/profile";
import { projects, professionalProjects } from "../data/projects";
import { totalTechCount } from "../data/skills";
import { getExperience } from "../utils/experience";

export default function Stats() {
  const { t } = useI18n();
  const exp = getExperience(profile.experienceStart);
  const totalProjects = projects.length + professionalProjects.length;

  const items = [
    { value: totalProjects, prefix: "+", label: t("stats.projects") },
    { value: exp.value, prefix: "+", label: `${t(`stats.${exp.unit}`)} ${t("stats.experience")}` },
    { value: totalTechCount, prefix: "+", label: t("stats.tech") },
    { value: 5, prefix: "+", label: t("stats.domains") },
    { value: 15000, prefix: "+", label: t("stats.loc") },
  ];

  return (
    <section className="py-16 border-y border-(--color-border) bg-(--color-panel-2)/40">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="flex justify-center mb-10">
          <VisitorCounter />
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8">
          {items.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: i * 0.07 }}
              className="text-center"
            >
              <AnimatedCounter
                value={item.value}
                prefix={item.prefix}
                className="block font-display text-3xl sm:text-4xl font-semibold text-(--color-cyan)"
              />
              <p className="mt-2 text-xs sm:text-sm text-(--color-text-muted) leading-snug">{item.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
