import { Reveal } from "../components/Reveal";
import { Kicker, PageMeta, TagPill } from "../components/ui";
import { useLanguage } from "../i18n/LanguageContext";

export function Services() {
  const { t } = useLanguage();
  return (
    <section id="services" className="relative flex min-h-screen flex-col justify-center bg-[#fafaf8] px-6 py-28 text-black sm:px-10 lg:px-16">
      <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
        <Reveal>
          <Kicker>{t.services.kicker}</Kicker>
          <h2 className="mt-8 max-w-xl font-display text-5xl font-medium leading-tight tracking-tight sm:text-6xl">
            {t.services.heading}
          </h2>
        </Reveal>
        <Reveal delay={150} className="max-w-sm text-sm leading-relaxed text-black/60">
          {t.services.subheading}
        </Reveal>
      </div>

      <div className="mt-16 grid grid-cols-1 gap-0 sm:grid-cols-2 lg:grid-cols-3">
        {t.services.items.map((s, i) => (
          <Reveal
            key={s.no}
            delay={i * 90}
            className="group border-t border-black/10 py-8 pe-6 transition-colors hover:bg-black/[0.02] lg:border-e lg:last:border-e-0 lg:[&:nth-child(3n)]:border-e-0"
          >
            <div className="flex items-start justify-between">
              <span className="font-display text-sm text-black/30">{s.no}</span>
              <span className="h-2 w-2 rounded-full bg-[var(--color-accent)] opacity-0 transition-opacity group-hover:opacity-100" />
            </div>
            <h3 className="mt-4 font-display text-xl font-medium tracking-tight">{s.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-black/60">{s.copy}</p>
            <div className="mt-5 flex flex-wrap gap-2">
              {s.tags.map((tag) => (
                <TagPill key={tag}>{tag}</TagPill>
              ))}
            </div>
          </Reveal>
        ))}
      </div>

      <PageMeta index="06" label={t.sectionIndex[5].label} />
    </section>
  );
}
