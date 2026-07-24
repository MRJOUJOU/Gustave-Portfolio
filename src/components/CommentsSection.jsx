import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageSquare } from "lucide-react";
import { useI18n } from "../i18n/I18nContext";

const STORAGE_KEY = "jg-portfolio-comments";

function loadComments() {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

export default function CommentsSection() {
  const { t, lang } = useI18n();
  const [comments, setComments] = useState([]);
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    setComments(loadComments());
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim() || !message.trim()) return;
    const entry = { id: Date.now(), name: name.trim(), message: message.trim(), date: new Date().toISOString() };
    const updated = [entry, ...comments];
    setComments(updated);
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
    setName("");
    setMessage("");
  };

  const formatDate = (iso) =>
    new Intl.DateTimeFormat(lang === "fr" ? "fr-FR" : lang === "de" ? "de-DE" : "en-US", {
      day: "numeric",
      month: "short",
      year: "numeric",
    }).format(new Date(iso));

  return (
    <div className="panel rounded-xl p-6 sm:p-8">
      <p className="font-mono text-xs uppercase tracking-wider text-(--color-text-muted) mb-5 flex items-center gap-2">
        <MessageSquare size={14} className="text-(--color-cyan)" /> {t("contact.commentsTitle")}
      </p>

      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 mb-6">
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder={t("contact.name")}
          className="sm:w-40 rounded-md border border-(--color-border-strong) bg-(--color-bg) px-3 py-2 text-sm text-(--color-text-primary) outline-none focus:border-(--color-cyan)"
        />
        <input
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder={t("contact.commentPlaceholder")}
          className="flex-1 rounded-md border border-(--color-border-strong) bg-(--color-bg) px-3 py-2 text-sm text-(--color-text-primary) outline-none focus:border-(--color-cyan)"
        />
        <button
          type="submit"
          className="rounded-md bg-(--color-cyan) px-4 py-2 text-sm font-medium text-[#06110F] shrink-0"
        >
          {t("contact.commentSubmit")}
        </button>
      </form>

      <div className="space-y-3 max-h-72 overflow-y-auto">
        <AnimatePresence initial={false}>
          {comments.length === 0 && (
            <p className="text-sm text-(--color-text-muted)">{t("contact.commentsEmpty")}</p>
          )}
          {comments.map((c) => (
            <motion.div
              key={c.id}
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="border-b border-(--color-border) pb-3"
            >
              <div className="flex items-baseline justify-between gap-3">
                <p className="text-sm font-medium text-(--color-text-primary)">{c.name}</p>
                <span className="font-mono text-[10px] text-(--color-text-muted)">{formatDate(c.date)}</span>
              </div>
              <p className="text-sm text-(--color-text-secondary) mt-1">{c.message}</p>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
}
