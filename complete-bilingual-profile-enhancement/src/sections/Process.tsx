import { Reveal } from "../components/Reveal";
import { Kicker, PageMeta } from "../components/ui";
import { useLanguage } from "../i18n/LanguageContext";

export function Process() {
  const { t } = useLanguage();
  return (
    <section id="process" className="relative flex min-h-screen flex-col justify-center bg-[#fafaf8] px-6 py-28 text-black sm:px-10 lg:px-16">
      <Reveal>
        <Kicker>{t.process.kicker}</Kicker>
        <h2 className="mt-8 max-w-3xl font-display text-5xl font-medium leading-tight tracking-tight sm:text-6xl">
          {t.process.heading}
        </h2>
      </Reveal>

      <div className="relative mt-16">
        <div className="absolute start-[18px] top-0 hidden h-full w-px bg-black/10 sm:block" />
        <div className="space-y-0">
          {t.process.steps.map((step, i) => (
            <Reveal key={step.no} delay={i * 90} className="group relative flex flex-col gap-3 border-t border-black/10 py-7 sm:flex-row sm:items-center sm:gap-10 sm:ps-12">
              <span className="absolute start-0 top-1/2 hidden h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-black/15 bg-[#fafaf8] font-display text-xs text-black/50 transition group-hover:border-[var(--color-accent)] group-hover:text-[var(--color-accent)] sm:flex">
                {step.no}
              </span>
              <span className="font-display text-sm text-black/30 sm:hidden">{step.no}</span>
              <h3 className="font-display text-xl font-medium tracking-tight sm:w-56 sm:flex-shrink-0">{step.title}</h3>
              <p className="max-w-xl text-sm leading-relaxed text-black/60">{step.copy}</p>
            </Reveal>
          ))}
        </div>
      </div>

      <PageMeta index="08" label={t.sectionIndex[7].label} />
    </section>
  );
}
