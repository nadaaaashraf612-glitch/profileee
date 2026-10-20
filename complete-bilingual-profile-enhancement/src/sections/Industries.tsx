import { Reveal } from "../components/Reveal";
import { Kicker, PageMeta } from "../components/ui";
import { useLanguage } from "../i18n/LanguageContext";

export function Industries() {
  const { t } = useLanguage();
  const loopItems = [...t.industries.items, ...t.industries.items];

  return (
    <section id="industries" className="relative flex min-h-screen flex-col justify-center overflow-hidden bg-[#fafaf8] px-6 py-28 text-black sm:px-10 lg:px-16">
      <Reveal>
        <Kicker>{t.industries.kicker}</Kicker>
        <h2 className="mt-8 max-w-3xl font-display text-5xl font-medium leading-tight tracking-tight sm:text-6xl">
          {t.industries.heading}
        </h2>
      </Reveal>

      <div className="mt-20 space-y-6">
        <div className="mask-fade-x overflow-hidden border-y border-black/10 py-6">
          <div className="animate-marquee flex w-max gap-10">
            {loopItems.map((item, i) => (
              <span key={`${item}-${i}`} className="flex items-center gap-10 font-display text-3xl font-medium tracking-tight text-black/80 sm:text-5xl">
                {item}
                <span className="text-[var(--color-accent)]">•</span>
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-16 grid grid-cols-2 gap-4 sm:grid-cols-4">
        {t.industries.items.map((item, i) => (
          <Reveal key={item} delay={i * 60} className="rounded-xl border border-black/10 p-4 text-center text-sm font-medium text-black/70">
            {item}
          </Reveal>
        ))}
      </div>

      <PageMeta index="10" label={t.sectionIndex[9].label} />
    </section>
  );
}
