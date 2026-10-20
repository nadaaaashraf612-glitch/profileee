import { Reveal } from "../components/Reveal";
import { Kicker, PageMeta } from "../components/ui";
import { useLanguage } from "../i18n/LanguageContext";

export function Expertise() {
  const { t } = useLanguage();
  return (
    <section id="expertise" className="relative flex min-h-screen flex-col justify-center bg-black px-6 py-28 text-white sm:px-10 lg:px-16">
      <Reveal>
        <Kicker tone="light">{t.expertise.kicker}</Kicker>
        <h2 className="mt-8 max-w-3xl font-display text-5xl font-medium leading-tight tracking-tight sm:text-6xl">
          {t.expertise.heading}
        </h2>
      </Reveal>

      <div className="mt-16 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
        {t.expertise.groups.map((g, i) => (
          <Reveal key={g.group} delay={i * 100} className="border-t border-white/15 pt-6">
            <h3 className="font-display text-sm uppercase tracking-[0.3em] text-[var(--color-accent)]">{g.group}</h3>
            <ul className="mt-5 space-y-3">
              {g.items.map((item) => (
                <li key={item} className="text-base text-white/75">
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>

      <PageMeta index="09" label={t.sectionIndex[8].label} tone="light" />
    </section>
  );
}
