import { motion } from "framer-motion";
import { ArrowDown, Download, FolderGit2, Github } from "lucide-react";
import { profile } from "../data/profile";
import TypingText from "../components/TypingText";
import SocialLinks from "../components/SocialLinks";
import { useI18n } from "../i18n/I18nContext";

export default function Hero() {
  const { t } = useI18n();
  return (
    <section
      id="accueil"
      className="relative min-h-screen flex items-center pt-24 pb-16 scan-grid overflow-hidden"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 right-[-10%] h-[520px] w-[520px] rounded-full opacity-30 blur-3xl"
        style={{ background: "radial-gradient(circle, var(--accent-cyan) 0%, transparent 70%)" }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-[-20%] left-[-10%] h-[420px] w-[420px] rounded-full opacity-20 blur-3xl"
        style={{ background: "radial-gradient(circle, var(--accent-amber) 0%, transparent 70%)" }}
      />

      <div className="relative mx-auto max-w-6xl w-full px-5 sm:px-8 grid lg:grid-cols-[1.15fr_0.85fr] gap-12 items-center">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full border border-(--color-border-strong) bg-(--color-panel) px-3.5 py-1.5 font-mono text-xs text-(--color-text-secondary) mb-8"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-(--color-cyan) animate-pulse" />
            {t("hero.badge")} · {profile.location.toUpperCase()}
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display font-semibold tracking-tight text-(--color-text-primary) leading-[1.05] text-4xl sm:text-5xl md:text-6xl"
          >
            {profile.firstName}
            <br />
            <span className="text-(--color-text-secondary)">{profile.lastName}</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-5 h-7 text-lg sm:text-xl text-(--color-cyan)"
          >
            <TypingText strings={profile.rolesTyped} />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-6 max-w-xl text-(--color-text-secondary) text-base sm:text-lg leading-relaxed"
          >
            {t("content.summary")}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <a
              href="#projets"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("projets")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="inline-flex items-center gap-2 rounded-md bg-(--color-cyan) px-5 py-3 font-medium text-[#06110F] transition-transform hover:-translate-y-0.5"
            >
              <FolderGit2 size={17} /> {t("hero.cta1")}
            </a>
            <a
              href={profile.cvPath}
              download
              className="inline-flex items-center gap-2 rounded-md border border-(--color-border-strong) px-5 py-3 font-medium text-(--color-text-primary) transition-colors hover:border-(--color-amber) hover:text-(--color-amber)"
            >
              <Download size={17} /> {t("hero.cta2")}
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center gap-2 rounded-md px-5 py-3 font-medium text-(--color-text-primary) border border-(--color-border-strong) overflow-hidden relative transition-colors hover:text-[#06110F]"
            >
              <span className="absolute inset-0 bg-(--color-cyan) -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out" />
              <Github size={17} className="relative" />
              <span className="relative">{t("hero.githubCta")}</span>
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.55 }}
            className="mt-8"
          >
            <SocialLinks />
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="hidden lg:block panel rounded-2xl p-6 font-mono text-xs"
        >
          <div className="flex items-center gap-1.5 mb-5">
            <span className="h-2.5 w-2.5 rounded-full bg-(--color-red)/70" />
            <span className="h-2.5 w-2.5 rounded-full bg-(--color-amber)/70" />
            <span className="h-2.5 w-2.5 rounded-full bg-(--color-cyan)/70" />
            <span className="ml-3 text-(--color-text-muted)">access_panel.sh</span>
          </div>
          <p className="text-(--color-text-muted)">$ whoami</p>
          <p className="text-(--color-cyan) mb-3">{profile.fullName}</p>
          <p className="text-(--color-text-muted)">$ cat role.txt</p>
          <p className="text-(--color-text-primary) mb-3">{profile.role}</p>
          <p className="text-(--color-text-muted)">$ status --check</p>
          <p className="text-(--color-amber) mb-3">✓ OPEN_TO_WORK</p>
          <p className="text-(--color-text-muted)">$ location --get</p>
          <p className="text-(--color-text-primary)">{profile.location}</p>
        </motion.div>
      </div>

      <motion.button
        onClick={() => document.getElementById("a-propos")?.scrollIntoView({ behavior: "smooth" })}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 8, 0] }}
        transition={{ opacity: { delay: 1 }, y: { repeat: Infinity, duration: 1.8 } }}
        aria-label="Défiler vers la section suivante"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-(--color-text-muted) hover:text-(--color-cyan) cursor-pointer"
      >
        <ArrowDown size={20} />
      </motion.button>
    </section>
  );
}
