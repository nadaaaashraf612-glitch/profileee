import { Reveal } from "../components/Reveal";
import { Kicker, PageMeta } from "../components/ui";
import { useLanguage } from "../i18n/LanguageContext";

export function Quality() {
  const { t } = useLanguage();
  return (
    <section id="quality" className="relative flex min-h-screen flex-col justify-center bg-[#fafaf8] px-6 py-28 text-black sm:px-10 lg:px-16">
      <Reveal>
        <Kicker>{t.quality.kicker}</Kicker>
        <h2 className="mt-8 max-w-3xl font-display text-5xl font-medium leading-tight tracking-tight sm:text-6xl">
          {t.quality.heading}
        </h2>
      </Reveal>

      <div className="mt-16 grid grid-cols-1 gap-0 sm:grid-cols-2 lg:grid-cols-4">
        {t.quality.points.map((p, i) => (
          <Reveal key={p.title} delay={i * 100} className="border-t border-black/10 py-8 pe-6">
            <h3 className="font-display text-lg font-medium tracking-tight">{p.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-black/60">{p.copy}</p>
          </Reveal>
        ))}
      </div>

      <PageMeta index="14" label={t.sectionIndex[13].label} />
    </section>
  );
}
