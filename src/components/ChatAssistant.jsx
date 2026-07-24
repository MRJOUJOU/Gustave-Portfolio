import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send, Bot, Mail } from "lucide-react";
import { useI18n } from "../i18n/I18nContext";
import { matchFaq } from "../data/faq";

export default function ChatAssistant() {
  const { t } = useI18n();
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([{ role: "bot", text: t("chat.greeting") }]);
  const endRef = useRef(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, open]);

  const handleSend = (e) => {
    e.preventDefault();
    const question = input.trim();
    if (!question) return;
    const answer = matchFaq(question);
    setMessages((m) => [
      ...m,
      { role: "user", text: question },
      answer ? { role: "bot", text: answer } : { role: "bot", text: t("chat.fallback"), cta: true },
    ]);
    setInput("");
  };

  return (
    <>
      <motion.button
        onClick={() => setOpen((o) => !o)}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1, type: "spring", stiffness: 260, damping: 20 }}
        aria-label="Assistant"
        className="fixed bottom-6 left-6 z-40 inline-flex items-center justify-center rounded-full bg-(--color-cyan) text-[#06110F] shadow-lg cursor-pointer"
        style={{ height: 52, width: 52 }}
      >
        {open ? <X size={20} /> : <Bot size={22} />}
      </motion.button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.96 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-24 left-6 z-40 w-[90vw] max-w-sm rounded-2xl panel overflow-hidden flex flex-col"
            style={{ height: 420 }}
          >
            <div className="flex items-center gap-2 px-4 py-3 border-b border-(--color-border) bg-(--color-panel-2)">
              <MessageCircle size={16} className="text-(--color-cyan)" />
              <p className="font-mono text-xs uppercase tracking-wide text-(--color-text-primary)">{t("chat.title")}</p>
            </div>

            <div className="flex-1 overflow-y-auto px-4 py-4 space-y-3">
              {messages.map((m, i) => (
                <div key={i} className={`flex flex-col ${m.role === "user" ? "items-end" : "items-start"}`}>
                  <p
                    className={`max-w-[85%] rounded-xl px-3.5 py-2 text-sm leading-relaxed ${
                      m.role === "user"
                        ? "bg-(--color-cyan) text-[#06110F]"
                        : "bg-(--color-panel-2) text-(--color-text-secondary)"
                    }`}
                  >
                    {m.text}
                  </p>
                  {m.cta && (
                    <button
                      onClick={() => {
                        setOpen(false);
                        document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
                      }}
                      className="mt-2 inline-flex items-center gap-1.5 rounded-full bg-(--color-cyan) px-3.5 py-1.5 text-xs font-medium text-[#06110F]"
                    >
                      <Mail size={12} /> {t("nav.contact")}
                    </button>
                  )}
                </div>
              ))}
              <div ref={endRef} />
            </div>

            <form onSubmit={handleSend} className="flex items-center gap-2 border-t border-(--color-border) p-3">
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder={t("chat.placeholder")}
                className="flex-1 rounded-full bg-(--color-panel-2) px-4 py-2 text-sm text-(--color-text-primary) outline-none focus:ring-1 focus:ring-(--color-cyan)"
              />
              <button
                type="submit"
                aria-label={t("chat.send")}
                className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-(--color-cyan) text-[#06110F] shrink-0"
              >
                <Send size={15} />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
