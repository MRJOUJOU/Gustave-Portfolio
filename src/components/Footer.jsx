import { profile } from "../data/profile";
import SocialLinks from "./SocialLinks";
import { useI18n } from "../i18n/I18nContext";

export default function Footer() {
  const { t } = useI18n();
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-(--color-border) py-10">
      <div className="mx-auto max-w-6xl px-5 sm:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div>
          <p className="font-display font-semibold text-(--color-text-primary)">{profile.fullName}</p>
          <p className="font-mono text-xs text-(--color-text-muted) mt-1">
            © {year} — {profile.location} · <span className="text-(--color-cyan)">{t("footer.status")}</span>
          </p>
        </div>
        <SocialLinks />
      </div>
    </footer>
  );
}
