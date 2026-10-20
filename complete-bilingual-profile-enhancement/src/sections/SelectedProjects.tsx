import { motion } from "framer-motion";
import { Reveal } from "../components/Reveal";
import { GoldButton, Kicker, PageMeta, TagPill } from "../components/ui";
import { useLanguage } from "../i18n/LanguageContext";

export function SelectedProjects() {
  const { t, dir } = useLanguage();
  const arrow = dir === "rtl" ? "←" : "→";

  return (
    <section id="projects" className="relative flex min-h-screen flex-col justify-center bg-black px-6 py-28 text-white sm:px-10 lg:px-16">
      <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
        <Reveal>
          <Kicker tone="light">{t.projects.kicker}</Kicker>
          <h2 className="mt-8 max-w-xl font-display text-5xl font-medium leading-tight tracking-tight sm:text-6xl">
            {t.projects.heading}
          </h2>
        </Reveal>
        <Reveal delay={150} className="max-w-xs text-sm leading-relaxed text-white/60">
          {t.projects.subheading}
        </Reveal>
      </div>

      <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-2">
        {t.projects.items.map((p, i) => (
          <Reveal key={p.title} delay={i * 110}>
            <motion.div
              whileHover={{ y: -8 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <img
                  src={p.image}
                  alt={p.title}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/10 to-transparent" />
                <span className="absolute start-4 top-4 rounded-full border border-white/25 bg-black/50 px-3 py-1 text-[10px] uppercase tracking-[0.25em] text-white/70 backdrop-blur">
                  {p.category}
                </span>
              </div>
              <div className="p-6">
                <h3 className="font-display text-2xl font-medium tracking-tight">{p.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-white/65">{p.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {p.tags.map((tag) => (
                    <TagPill key={tag} tone="light">
                      {tag}
                    </TagPill>
                  ))}
                </div>
                <a
                  href={p.link}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-6 inline-flex items-center gap-2 font-display text-sm font-medium uppercase tracking-[0.2em] text-[var(--color-accent)] transition group-hover:gap-4"
                >
                  {p.linkLabel} <span>{arrow}</span>
                </a>
              </div>
            </motion.div>
          </Reveal>
        ))}
      </div>

      <Reveal delay={200} className="mt-14 flex justify-center">
        <GoldButton href="https://www.behance.net/PUIUX" tone="light">
          {t.projects.cta}
        </GoldButton>
      </Reveal>

      <PageMeta index="11" label={t.sectionIndex[10].label} tone="light" />
    </section>
  );
}
