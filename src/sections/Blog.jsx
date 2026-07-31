import { useState } from "react";
import { motion } from "framer-motion";
import { FileText, Clock } from "lucide-react";
import SectionHeading from "../components/SectionHeading";
import { blogPosts } from "../data/blog";
import { useI18n } from "../i18n/I18nContext";

export default function Blog() {
  const { t, lang } = useI18n();
  const [showAllBlog, setShowAllBlog] = useState(false);

  const formatDate = (iso) =>
    new Intl.DateTimeFormat(lang === "fr" ? "fr-FR" : lang === "de" ? "de-DE" : "en-US", {
      day: "numeric",
      month: "short",
      year: "numeric",
    }).format(new Date(iso));

  const displayedPosts = showAllBlog ? blogPosts : blogPosts.slice(0, 3);

  return (
    <section id="blog" className="py-24 md:py-32 bg-(--color-panel-2)/40">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading index="07" id="BLOG" title={t("blog.title")} subtitle={t("blog.subtitle")} />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedPosts.map((post, i) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="panel rounded-xl p-6 flex flex-col"
            >
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-md bg-(--color-cyan-dim) text-(--color-cyan) mb-4">
                <FileText size={18} />
              </span>
              <div className="flex items-center gap-3 font-mono text-[10px] uppercase tracking-wide text-(--color-text-muted) mb-3">
                <span>{formatDate(post.date)}</span>
                <span className="flex items-center gap-1">
                  <Clock size={10} /> {post.readTime}
                </span>
              </div>
              <h3 className="font-display font-semibold text-(--color-text-primary) leading-snug mb-2">
                {post.title}
              </h3>
              <p className="text-(--color-text-secondary) text-sm leading-relaxed">{post.excerpt}</p>
            </motion.article>
          ))}
        </div>

        {blogPosts.length > 3 && (
          <div className="flex justify-center mt-12">
            <button
              onClick={() => setShowAllBlog((prev) => !prev)}
              className="group flex items-center gap-2 px-8 py-3 rounded-full bg-panel border border-border hover:border-cyan text-text-secondary hover:text-cyan transition-all duration-300 font-medium text-sm tracking-wide"
            >
              {showAllBlog ? (
                <>
                  <span>{t("blog.showLess")}</span>
                  <svg
                    className="w-4 h-4 transform rotate-180 transition-transform duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                  </svg>
                </>
              ) : (
                <>
                  <span>{t("blog.showMore")}</span>
                  <svg
                    className="w-4 h-4 transition-transform duration-300 group-hover:translate-y-0.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </>
              )}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}