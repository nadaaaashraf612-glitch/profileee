import { Reveal } from "../components/Reveal";
import { GlassCard, Kicker, PageMeta, TagPill } from "../components/ui";
import { useLanguage } from "../i18n/LanguageContext";

export function CaseSpotlight() {
  const { t } = useLanguage();
  return (
    <section
      id="case-spotlight"
      className="relative flex min-h-screen flex-col justify-center overflow-hidden bg-[#fafaf8] px-6 py-28 text-black sm:px-10 lg:px-16"
    >
      <div className="grid grid-cols-1 gap-14 lg:grid-cols-12">
        <div className="lg:col-span-6">
          <Reveal>
            <Kicker>{t.caseSpotlight.kicker}</Kicker>
            <TagPill>Orbit Analytics</TagPill>
            <h2 className="mt-6 font-display text-4xl font-medium leading-tight tracking-tight sm:text-5xl">
              {t.caseSpotlight.heading}
            </h2>
          </Reveal>

          <Reveal delay={150} className="mt-8 max-w-md text-base leading-relaxed text-black/70">
            {t.caseSpotlight.paragraph}
          </Reveal>

          <Reveal delay={250} className="mt-10 grid max-w-xl grid-cols-1 gap-5 sm:grid-cols-3">
            <GlassCard tone="light" className="p-5">
              <p className="font-display text-[10px] uppercase tracking-[0.3em] text-black/40">
                {t.caseSpotlight.challengeTitle}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-black/70">{t.caseSpotlight.challengeCopy}</p>
            </GlassCard>
            <GlassCard tone="light" className="p-5">
              <p className="font-display text-[10px] uppercase tracking-[0.3em] text-black/40">
                {t.caseSpotlight.solutionTitle}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-black/70">{t.caseSpotlight.solutionCopy}</p>
            </GlassCard>
            <GlassCard tone="light" className="border-[var(--color-accent)]/40 p-5">
              <p className="font-display text-[10px] uppercase tracking-[0.3em] text-[var(--color-accent)]">
                {t.caseSpotlight.resultTitle}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-black/70">{t.caseSpotlight.resultCopy}</p>
            </GlassCard>
          </Reveal>
        </div>

        <div className="lg:col-span-6">
          <Reveal delay={200} className="relative">
            <div className="absolute -inset-4 -z-10 rounded-3xl border border-black/10" />
            <div className="overflow-hidden rounded-2xl border border-black/10 bg-white shadow-[0_30px_80px_rgba(0,0,0,0.12)]">
              <img src="/images/case-spotlight.jpg" alt="Case spotlight visual" className="h-full w-full object-cover" />
            </div>
          </Reveal>
        </div>
      </div>

      <PageMeta index="12" label={t.sectionIndex[11].label} />
    </section>
  );
}
