import { Reveal } from "../components/Reveal";
import { Kicker, PageMeta } from "../components/ui";
import { useLanguage } from "../i18n/LanguageContext";

export function Opening() {
  const { t } = useLanguage();
  return (
    <section id="opening" className="relative flex min-h-screen flex-col justify-center bg-[#fafaf8] px-6 py-28 text-black sm:px-10 lg:px-16">
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <Reveal>
            <Kicker>{t.opening.kicker}</Kicker>
          </Reveal>
          <Reveal delay={100} className="mt-8 max-w-xs text-sm leading-relaxed text-black/60">
            {t.opening.lead}
          </Reveal>
        </div>

        <div className="lg:col-span-8">
          <Reveal delay={80}>
            <h2 className="font-display text-[11vw] font-medium leading-[0.95] tracking-tight sm:text-[6.5vw] lg:text-[5.2vw]">
              {t.opening.headline} <span className="text-[var(--color-accent)]">{t.opening.headlineHighlight}</span>{" "}
              {t.opening.headlineEnd}
            </h2>
          </Reveal>

          <Reveal delay={200} className="mt-14 grid max-w-2xl grid-cols-1 gap-8 border-t border-black/10 pt-10 sm:grid-cols-2">
            <p className="text-base leading-relaxed text-black/70">{t.opening.paragraph1}</p>
            <p className="text-base leading-relaxed text-black/70">{t.opening.paragraph2}</p>
          </Reveal>
        </div>
      </div>

      <PageMeta index="02" label={t.sectionIndex[1].label} />
    </section>
  );
}
