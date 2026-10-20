import { Reveal } from "../components/Reveal";
import { Kicker, PageMeta } from "../components/ui";
import { useLanguage } from "../i18n/LanguageContext";

export function Why() {
  const { t } = useLanguage();
  return (
    <section id="why" className="relative flex min-h-screen flex-col justify-center bg-black px-6 py-28 text-white sm:px-10 lg:px-16">
      <Reveal>
        <Kicker tone="light">{t.why.kicker}</Kicker>
        <h2 className="mt-8 max-w-3xl font-display text-5xl font-medium leading-tight tracking-tight sm:text-6xl">
          {t.why.heading}
        </h2>
      </Reveal>

      <div className="mt-16 grid grid-cols-1 gap-10 sm:grid-cols-2">
        {t.why.points.map((p, i) => (
          <Reveal key={p.no} delay={i * 110} className="flex gap-6 border-t border-white/15 pt-8">
            <span className="font-display text-3xl font-light text-[var(--color-accent)]">{p.no}</span>
            <div>
              <h3 className="font-display text-xl font-medium tracking-tight">{p.title}</h3>
              <p className="mt-3 max-w-md text-sm leading-relaxed text-white/65">{p.copy}</p>
            </div>
          </Reveal>
        ))}
      </div>

      <PageMeta index="13" label={t.sectionIndex[12].label} tone="light" />
    </section>
  );
}
