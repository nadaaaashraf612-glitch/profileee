import { Reveal } from "../components/Reveal";
import { Divider, Kicker, PageMeta } from "../components/ui";
import { useLanguage } from "../i18n/LanguageContext";

export function VisionMissionValues() {
  const { t } = useLanguage();
  return (
    <section id="vmv" className="relative flex min-h-screen flex-col justify-center bg-[#fafaf8] px-6 py-28 text-black sm:px-10 lg:px-16">
      <Reveal>
        <Kicker>{t.vmv.kicker}</Kicker>
        <h2 className="mt-8 max-w-3xl font-display text-5xl font-medium leading-tight tracking-tight sm:text-6xl">
          {t.vmv.heading}
        </h2>
      </Reveal>

      <Reveal delay={150} className="mt-16 grid grid-cols-1 gap-10 border-y border-black/10 py-12 sm:grid-cols-2">
        <div>
          <p className="font-display text-xs uppercase tracking-[0.3em] text-[var(--color-accent)]">{t.vmv.visionTitle}</p>
          <p className="mt-4 text-xl leading-relaxed text-black/80 sm:text-2xl">{t.vmv.visionCopy}</p>
        </div>
        <div>
          <p className="font-display text-xs uppercase tracking-[0.3em] text-[var(--color-accent)]">{t.vmv.missionTitle}</p>
          <p className="mt-4 text-xl leading-relaxed text-black/80 sm:text-2xl">{t.vmv.missionCopy}</p>
        </div>
      </Reveal>

      <Reveal delay={200}>
        <p className="mt-14 font-display text-xs uppercase tracking-[0.3em] text-black/40">{t.vmv.valuesTitle}</p>
      </Reveal>

      <div className="mt-8 grid grid-cols-1 gap-0 sm:grid-cols-2 lg:grid-cols-4">
        {t.vmv.values.map((v, i) => (
          <Reveal key={v.no} delay={i * 100} className="group border-t border-black/10 py-8 pe-6 transition-colors hover:bg-black/[0.02]">
            <span className="font-display text-sm text-black/30">{v.no}</span>
            <h3 className="mt-4 font-display text-xl font-medium tracking-tight">{v.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-black/60">{v.copy}</p>
          </Reveal>
        ))}
      </div>
      <Divider className="mt-0" />

      <PageMeta index="04" label={t.sectionIndex[3].label} />
    </section>
  );
}
