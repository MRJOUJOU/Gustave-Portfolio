import { useState } from "react";
import { motion } from "framer-motion";
import { Code2, Server, Database, ShieldHalf, Palette, MapPin } from "lucide-react";
import SectionHeading from "../components/SectionHeading";
import TypingText from "../components/TypingText";
import { profile, profileQuotes } from "../data/profile";
import { useI18n } from "../i18n/I18nContext";

const ICONS = [Code2, Server, Database, ShieldHalf, Palette];

export default function About() {
  const { t } = useI18n();
  const [photoFailed, setPhotoFailed] = useState(false);

  return (
    <section id="a-propos" className="py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading index="01" id="A_PROPOS" title={t("about.title")} subtitle={t("about.subtitle")} />

        <div className="grid lg:grid-cols-[0.38fr_0.62fr] gap-14 items-start">
          {/* Personal card — shows a real photo if found at /profile-photo.jpg,
              falls back to the monogram automatically otherwise. */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5 }}
              className="relative panel rounded-2xl p-8 flex flex-col items-center text-center overflow-hidden"
            >
              <motion.div
                aria-hidden
                className="absolute -inset-16 opacity-30"
                style={{ background: "conic-gradient(from 0deg, var(--accent-cyan), transparent 35%, var(--accent-amber), transparent 70%, var(--accent-cyan))" }}
                animate={{ rotate: 360 }}
                transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
              />
              {!photoFailed ? (
                <img
                  src={profile.photoPath}
                  onError={() => setPhotoFailed(true)}
                  alt={profile.fullName}
                  className="relative h-28 w-28 rounded-full object-cover border border-(--color-border-strong) mb-5"
                />
              ) : (
                <div className="relative h-28 w-28 rounded-full bg-(--color-panel-2) border border-(--color-border-strong) flex items-center justify-center mb-5">
                  <span className="font-display text-4xl font-semibold text-(--color-cyan)">{profile.initials}</span>
                </div>
              )}
              <h3 className="relative font-display text-xl font-semibold text-(--color-text-primary)">
                {profile.fullName}
              </h3>
              <p className="relative text-(--color-cyan) text-sm mt-1">{profile.role}</p>
              <p className="relative flex items-center gap-1.5 text-(--color-text-muted) text-xs mt-3 font-mono">
                <MapPin size={12} /> {profile.location}
              </p>
            </motion.div>

            <div className="mt-4 panel rounded-xl px-5 py-4 min-h-[56px] flex items-center">
              <p className="font-mono text-xs text-(--color-text-secondary) italic">
                <TypingText strings={profileQuotes} typingSpeed={35} deletingSpeed={15} pause={2600} />
              </p>
            </div>
          </div>

          <div className="space-y-8">
            <div className="space-y-5 text-(--color-text-secondary) text-base sm:text-lg leading-relaxed">
              <p>{t("content.aboutIntro")}</p>
              <p>{t("content.aboutText")}</p>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              {profile.about.focusAreas.map((area, i) => {
                const Icon = ICONS[i % ICONS.length];
                return (
                  <motion.div
                    key={area.label}
                    initial={{ opacity: 0, y: 14 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{ duration: 0.4, delay: i * 0.06 }}
                    className="panel rounded-xl p-5 hover:border-(--color-cyan)/50 transition-colors"
                  >
                    <span className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-(--color-cyan-dim) text-(--color-cyan) mb-3">
                      <Icon size={17} />
                    </span>
                    <p className="font-medium text-(--color-text-primary) text-sm">{area.label}</p>
                    <p className="text-(--color-text-muted) text-xs mt-1.5 leading-relaxed">{area.desc}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
