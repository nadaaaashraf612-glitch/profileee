import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Reveal } from "../components/Reveal";
import { Kicker, PageMeta } from "../components/ui";
import { useLanguage } from "../i18n/LanguageContext";

function Counter({ value }: { value: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10% 0px" });
  const [display, setDisplay] = useState("0");

  const numeric = parseInt(value.replace(/\D/g, ""), 10);
  const prefix = value.match(/^\D+/)?.[0] ?? "";
  const suffix = value.match(/\D+$/)?.[0] ?? "";

  useEffect(() => {
    if (!inView || Number.isNaN(numeric)) {
      if (Number.isNaN(numeric)) setDisplay(value);
      return;
    }
    let frame: number;
    const duration = 1400;
    const start = performance.now();
    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(Math.round(eased * numeric).toString());
      if (progress < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [inView, numeric, value]);

  return (
    <span ref={ref}>
      {prefix.replace(/[0-9]/g, "")}
      {Number.isNaN(numeric) ? value : display}
      {suffix}
    </span>
  );
}

export function Glance() {
  const { t } = useLanguage();
  return (
    <section id="glance" className="relative flex min-h-screen flex-col justify-center bg-black px-6 py-28 text-white sm:px-10 lg:px-16">
      <Reveal>
        <Kicker tone="light">{t.glance.kicker}</Kicker>
        <h2 className="mt-8 max-w-3xl font-display text-5xl font-medium leading-tight tracking-tight sm:text-6xl">
          {t.glance.heading}
        </h2>
      </Reveal>

      <div className="mt-20 grid grid-cols-2 gap-10 lg:grid-cols-4">
        {t.glance.stats.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: i * 0.1 }}
            className="border-t border-white/15 pt-6"
          >
            <p className="font-display text-5xl font-semibold tabular-nums text-[var(--color-accent)] sm:text-6xl">
              <Counter value={s.value} />
            </p>
            <p className="mt-3 text-xs uppercase tracking-[0.25em] text-white/50">{s.label}</p>
          </motion.div>
        ))}
      </div>

      <PageMeta index="05" label={t.sectionIndex[4].label} tone="light" />
    </section>
  );
}
