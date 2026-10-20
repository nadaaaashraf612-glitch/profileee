import { motion } from "framer-motion";
import { useParallax } from "../hooks/useReveal";
import { PageMeta } from "../components/ui";
import { useLanguage } from "../i18n/LanguageContext";

export function Cover() {
  const bg = useParallax<HTMLDivElement>(0.08);
  const { t } = useLanguage();

  return (
    <section id="cover" className="relative flex min-h-screen flex-col overflow-hidden bg-black text-white">
      <div ref={bg.ref} className="absolute inset-0" style={{ transform: `translateY(${bg.offset}px)` }}>
        <img src="/images/hero-bg.jpg" alt="" className="h-[120%] w-full object-cover opacity-50" />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black" />
      <div className="grain absolute inset-0" />

      <motion.div
        aria-hidden
        className="pointer-events-none absolute -end-32 -top-32 h-96 w-96 rounded-full bg-[var(--color-accent)]/10 blur-3xl"
        animate={{ scale: [1, 1.2, 1], opacity: [0.4, 0.7, 0.4] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative z-10 flex flex-1 flex-col px-6 pt-28 sm:px-10 sm:pt-32 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-start justify-between gap-6 text-[11px] uppercase tracking-[0.35em] text-white/50 sm:flex-row sm:items-center"
        >
          <span>{t.cover.badge}</span>
          <span>{t.cover.tagline}</span>
        </motion.div>

        <div className="relative mt-16 flex flex-1 flex-col justify-center sm:mt-20">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-6 font-display text-sm uppercase tracking-[0.5em] text-white/40"
          >
            {t.cover.intro}
          </motion.p>
          <h1 className="relative select-none font-display font-semibold leading-[0.82] tracking-tight">
            <motion.span
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="block text-[20vw] sm:text-[17vw] lg:text-[15vw]"
            >
              {t.cover.title}
            </motion.span>
          </h1>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.6 }}
            className="mt-10 grid max-w-3xl grid-cols-1 gap-6 border-t border-white/15 pt-8 sm:grid-cols-[1fr_auto] sm:items-end"
          >
            <p className="font-display text-xl font-light leading-snug text-white/80 sm:text-2xl">
              {t.cover.subtitle}
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="mb-10 flex items-center justify-between text-[11px] uppercase tracking-[0.3em] text-white/40"
        >
          <span className="hidden sm:inline">{t.cover.tags}</span>
          <span className="flex items-center gap-3">
            {t.cover.scroll}
            <span className="block h-8 w-px animate-pulse bg-white/50" />
          </span>
        </motion.div>
      </div>

      <PageMeta index="01" label={t.sectionIndex[0].label} tone="light" />
    </section>
  );
}
