import { Reveal } from "../components/Reveal";
import { GoldButton, Kicker, PageMeta } from "../components/ui";
import { useLanguage } from "../i18n/LanguageContext";

export function Closing() {
  const { t } = useLanguage();
  return (
    <section id="closing" className="relative flex min-h-screen flex-col justify-center overflow-hidden bg-black px-6 py-28 text-white sm:px-10 lg:px-16">
      <div className="absolute inset-0">
        <img src="/images/closing-abstract.jpg" alt="" className="h-full w-full object-cover opacity-40" />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/40" />

      <div className="relative z-10 mx-auto max-w-3xl text-center">
        <Reveal>
          <Kicker tone="light" className="justify-center">
            {t.closing.kicker}
          </Kicker>
        </Reveal>
        <Reveal delay={120}>
          <h2 className="mt-10 font-display text-4xl font-medium leading-tight tracking-tight sm:text-6xl">
            {t.closing.heading}
          </h2>
        </Reveal>
        <Reveal delay={240} className="mx-auto mt-8 max-w-xl text-base leading-relaxed text-white/70">
          {t.closing.paragraph}
        </Reveal>
        <Reveal delay={320} className="mt-10 flex justify-center">
          <GoldButton href="#contact" tone="light">
            {t.closing.cta}
          </GoldButton>
        </Reveal>
      </div>

      <PageMeta index="15" label={t.sectionIndex[14].label} tone="light" />
    </section>
  );
}
