import { Reveal } from "../components/Reveal";
import { Kicker, PageMeta } from "../components/ui";
import { useLanguage } from "../i18n/LanguageContext";

export function Approach() {
  const { t } = useLanguage();
  return (
    <section id="approach" className="relative flex min-h-screen flex-col justify-center bg-black px-6 py-28 text-white sm:px-10 lg:px-16">
      <div className="grid grid-cols-1 gap-14 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <Reveal>
            <Kicker tone="light">{t.approach.kicker}</Kicker>
            <h2 className="mt-8 font-display text-5xl font-medium leading-tight tracking-tight sm:text-6xl">
              {t.approach.heading}
            </h2>
          </Reveal>
          <Reveal delay={150} className="mt-8 max-w-md text-base leading-relaxed text-white/70">
            {t.approach.paragraph}
          </Reveal>
        </div>

        <div className="lg:col-span-6 lg:col-start-7">
          <div className="space-y-0">
            {t.approach.points.map((p, i) => (
              <Reveal key={p.title} delay={i * 120} className="border-t border-white/15 py-8 last:border-b">
                <h3 className="font-display text-2xl font-medium tracking-tight">{p.title}</h3>
                <p className="mt-3 max-w-md text-sm leading-relaxed text-white/60">{p.copy}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>

      <PageMeta index="07" label={t.sectionIndex[6].label} tone="light" />
    </section>
  );
}
