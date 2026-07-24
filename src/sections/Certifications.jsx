import { motion } from "framer-motion";
import { BadgeCheck, Sparkles } from "lucide-react";
import SectionHeading from "../components/SectionHeading";
import { certifications } from "../data/certifications";
import { useI18n } from "../i18n/I18nContext";

export default function Certifications() {
  const { t } = useI18n();
  const earned = certifications.filter((c) => c.status === "obtenue");
  const inProgress = certifications.filter((c) => c.status === "preparation");

  return (
    <section id="certifications" className="py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          index="06"
          id="CERTIFICATIONS"
          title={t("certifications.title")}
          subtitle={t("certifications.subtitle")}
        />

        <div className="mb-12">
          <p className="font-mono text-xs uppercase tracking-wider text-(--color-text-muted) mb-5">
            {t("certifications.earned")}
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            {earned.map((cert, i) => (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className="panel rounded-xl p-5 flex items-start gap-4"
              >
                <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-(--color-cyan-dim) text-(--color-cyan)">
                  <BadgeCheck size={19} />
                </span>
                <div>
                  <p className="font-medium text-(--color-text-primary) text-sm">{cert.title}</p>
                  <p className="text-(--color-text-muted) text-xs mt-1">{cert.issuer}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div>
          <p className="font-mono text-xs uppercase tracking-wider text-(--color-text-muted) mb-5">
            {t("certifications.inProgress")}
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            {inProgress.map((cert, i) => (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className="rounded-xl p-5 flex items-start gap-4 border border-dashed border-(--color-border-strong)"
              >
                <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-(--color-amber-dim) text-(--color-amber)">
                  <Sparkles size={19} />
                </span>
                <div>
                  <p className="font-medium text-(--color-text-primary) text-sm">{cert.title}</p>
                  <p className="text-(--color-text-muted) text-xs mt-1">{cert.issuer}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
