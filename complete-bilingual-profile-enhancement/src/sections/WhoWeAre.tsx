import { Reveal } from "../components/Reveal";
import { GlassCard, Kicker, PageMeta } from "../components/ui";
import { useLanguage } from "../i18n/LanguageContext";

export function WhoWeAre() {
  const { t } = useLanguage();
  const stats = [
    { label: t.whoWeAre.statLabel1, value: t.whoWeAre.statValue1 },
    { label: t.whoWeAre.statLabel2, value: t.whoWeAre.statValue2 },
    { label: t.whoWeAre.statLabel3, value: t.whoWeAre.statValue3 },
  ];

  return (
    <section id="who-we-are" className="relative flex min-h-screen flex-col justify-center overflow-hidden bg-black px-6 py-28 text-white sm:px-10 lg:px-16">
      <div className="pointer-events-none absolute inset-0 opacity-[0.08]">
        <div className="h-full w-full bg-[linear-gradient(to_right,white_1px,transparent_1px),linear-gradient(to_bottom,white_1px,transparent_1px)] bg-[size:64px_64px]" />
      </div>

      <div className="relative grid grid-cols-1 gap-16 lg:grid-cols-12">
        <div className="lg:col-span-6">
          <Reveal>
            <Kicker tone="light">{t.whoWeAre.kicker}</Kicker>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="mt-8 font-display text-5xl font-medium leading-[1.05] tracking-tight sm:text-6xl">
              {t.whoWeAre.heading}
            </h2>
          </Reveal>
          <Reveal delay={200} className="mt-8 max-w-md space-y-5 text-base leading-relaxed text-white/70">
            <p>{t.whoWeAre.paragraph1}</p>
            <p>{t.whoWeAre.paragraph2}</p>
          </Reveal>

          <Reveal delay={300} className="mt-12 grid grid-cols-3 gap-4 max-w-md">
            {stats.map((s) => (
              <GlassCard key={s.label} tone="dark" className="p-4 text-center">
                <p className="font-display text-xl font-semibold text-[var(--color-accent)]">{s.value}</p>
                <p className="mt-1 text-[10px] uppercase tracking-[0.2em] text-white/50">{s.label}</p>
              </GlassCard>
            ))}
          </Reveal>
        </div>

        <div className="lg:col-span-6">
          <Reveal delay={150} className="relative h-full min-h-[320px]">
            <div className="group relative h-full overflow-hidden rounded-3xl border border-white/10">
              <img
                src="/images/about-abstract.jpg"
                alt="PUIUX studio abstract visual"
                className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
            </div>
          </Reveal>
        </div>
      </div>

      <PageMeta index="03" label={t.sectionIndex[2].label} tone="light" />
    </section>
  );
}
