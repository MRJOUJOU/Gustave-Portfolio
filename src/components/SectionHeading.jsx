import { motion } from "framer-motion";

export default function SectionHeading({ index, id, title, subtitle }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="mb-12 md:mb-16"
    >
      <p className="eyebrow mb-3">// {index}_{id}</p>
      <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-(--color-text-primary)">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-3 max-w-2xl text-(--color-text-secondary) text-base md:text-lg">
          {subtitle}
        </p>
      )}
      <div className="mt-6 h-px w-full bg-(--color-border)" />
    </motion.div>
  );
}
