import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, CheckCircle2 } from "lucide-react";
import SectionHeading from "../components/SectionHeading";
import SocialLinks from "../components/SocialLinks";
import Testimonials from "../components/Testimonials";
import CommentsSection from "../components/CommentsSection";
import { profile } from "../data/profile";
import { useI18n } from "../i18n/I18nContext";

export default function Contact() {
  const { t } = useI18n();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const CONTACT_INFO = [
    { icon: Mail, label: t("contact.email"), value: profile.email, href: `mailto:${profile.email}` },
    { icon: Phone, label: "Téléphone", value: profile.phone, href: `tel:${profile.phone.replace(/\s/g, "")}` },
    { icon: MapPin, label: profile.location, value: profile.location, href: null },
  ];

  const handleChange = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Contact portfolio — ${form.name || "Nouveau message"}`);
    const body = encodeURIComponent(
      `Nom : ${form.name}\nEmail : ${form.email}\n\nMessage :\n${form.message}`
    );
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
    setSent(true);
  };

  return (
    <section id="contact" className="py-24 md:py-32 bg-(--color-panel-2)/40">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          index="08"
          id="CONTACT"
          title={t("contact.title")}
          subtitle={t("contact.subtitle")}
        />

        <div className="grid lg:grid-cols-[0.4fr_0.6fr] gap-10 mb-14">
          <div className="space-y-4">
            {CONTACT_INFO.map(({ icon: Icon, label, value, href }) => {
              const content = (
                <div className="panel rounded-xl p-5 flex items-center gap-4 hover:border-(--color-cyan)/50 transition-colors">
                  <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-(--color-cyan-dim) text-(--color-cyan)">
                    <Icon size={18} />
                  </span>
                  <div>
                    <p className="font-mono text-[10px] uppercase tracking-wider text-(--color-text-muted)">
                      {label}
                    </p>
                    <p className="text-(--color-text-primary) text-sm mt-0.5">{value}</p>
                  </div>
                </div>
              );
              return href ? (
                <a key={label} href={href} className="block">
                  {content}
                </a>
              ) : (
                <div key={label}>{content}</div>
              );
            })}
            <div className="pt-2">
              <SocialLinks />
            </div>
            <Testimonials />
          </div>

          <motion.form
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.45 }}
            onSubmit={handleSubmit}
            className="panel rounded-xl p-6 sm:p-8 space-y-5 h-fit"
          >
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label htmlFor="name" className="font-mono text-[10px] uppercase tracking-wider text-(--color-text-muted)">
                  {t("contact.name")}
                </label>
                <input
                  id="name"
                  name="name"
                  required
                  value={form.name}
                  onChange={handleChange}
                  placeholder={t("contact.name")}
                  className="mt-2 w-full rounded-md border border-(--color-border-strong) bg-(--color-bg) px-4 py-2.5 text-sm text-(--color-text-primary) outline-none focus:border-(--color-cyan) transition-colors"
                />
              </div>
              <div>
                <label htmlFor="email" className="font-mono text-[10px] uppercase tracking-wider text-(--color-text-muted)">
                  {t("contact.email")}
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  placeholder="vous@exemple.com"
                  className="mt-2 w-full rounded-md border border-(--color-border-strong) bg-(--color-bg) px-4 py-2.5 text-sm text-(--color-text-primary) outline-none focus:border-(--color-cyan) transition-colors"
                />
              </div>
            </div>
            <div>
              <label htmlFor="message" className="font-mono text-[10px] uppercase tracking-wider text-(--color-text-muted)">
                {t("contact.message")}
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                value={form.message}
                onChange={handleChange}
                placeholder={t("contact.message")}
                className="mt-2 w-full rounded-md border border-(--color-border-strong) bg-(--color-bg) px-4 py-2.5 text-sm text-(--color-text-primary) outline-none focus:border-(--color-cyan) transition-colors resize-none"
              />
            </div>
            <button
              type="submit"
              className="inline-flex items-center gap-2 rounded-md bg-(--color-cyan) px-6 py-3 font-medium text-[#06110F] transition-transform hover:-translate-y-0.5"
            >
              <Send size={16} /> {t("contact.send")}
            </button>
            {sent && (
              <p className="flex items-center gap-2 text-sm text-(--color-cyan)">
                <CheckCircle2 size={16} /> {t("contact.sent")}
              </p>
            )}
            <p className="text-xs text-(--color-text-muted)">{t("contact.note")}</p>
          </motion.form>
        </div>

        <CommentsSection />
      </div>
    </section>
  );
}
