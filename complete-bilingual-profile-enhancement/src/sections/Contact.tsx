import { useState, type FC } from "react";
import { Reveal } from "../components/Reveal";
import { Divider, GlassCard, Kicker } from "../components/ui";
import { useLanguage } from "../i18n/LanguageContext";
import {
  BankIcon,
  BehanceIcon,
  CopyIcon,
  FacebookIcon,
  GlobeIcon,
  InstagramIcon,
  MailIcon,
  PhoneIcon,
  XIcon,
} from "../components/icons";

const socialIcons: Record<string, FC<{ className?: string }>> = {
  Facebook: FacebookIcon,
  "فيسبوك": FacebookIcon,
  "X (Twitter)": XIcon,
  "إكس (تويتر)": XIcon,
  Instagram: InstagramIcon,
  "إنستغرام": InstagramIcon,
  Behance: BehanceIcon,
  "بيهانس": BehanceIcon,
};

function CopyButton({ value }: { value: string }) {
  const [copied, setCopied] = useState(false);
  return (
    <button
      type="button"
      onClick={async () => {
        try {
          await navigator.clipboard.writeText(value);
          setCopied(true);
          setTimeout(() => setCopied(false), 1500);
        } catch {
          setCopied(false);
        }
      }}
      className="inline-flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full border border-white/20 text-white/50 transition hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
      aria-label="Copy"
    >
      {copied ? <span className="text-[10px] font-semibold text-[var(--color-accent)]">✓</span> : <CopyIcon className="h-3.5 w-3.5" />}
    </button>
  );
}

export function Contact() {
  const { t } = useLanguage();

  return (
    <section
      id="contact"
      className="relative flex min-h-screen flex-col justify-between overflow-hidden bg-black px-6 pb-10 pt-28 text-white sm:px-10 lg:px-16"
    >
      <div className="absolute inset-0">
        <img src="/images/contact-pattern.jpg" alt="" className="h-full w-full object-cover opacity-20" />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black/95 to-black" />

      <div className="relative z-10">
        <Reveal>
          <Kicker tone="light">{t.contact.kicker}</Kicker>
        </Reveal>
        <Reveal delay={100}>
          <h2 className="mt-10 max-w-3xl font-display text-5xl font-medium leading-[1.05] tracking-tight sm:text-7xl">
            {t.contact.heading}
          </h2>
        </Reveal>
        <Reveal delay={200} className="mt-8 max-w-lg text-base leading-relaxed text-white/60">
          {t.contact.subheading}
        </Reveal>

        <Divider tone="light" className="my-14" />

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-5">
          <Reveal delay={150} className="lg:col-span-3 space-y-5">
            <GlassCard tone="dark" className="flex items-center gap-4 p-5">
              <span className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full border border-white/15 text-[var(--color-accent)]">
                <MailIcon className="h-5 w-5" />
              </span>
              <div className="min-w-0 flex-1">
                <p className="text-[10px] uppercase tracking-[0.3em] text-white/40">{t.contact.emailLabel}</p>
                <a href={`mailto:${t.contact.email}`} className="mt-1 block truncate text-base font-medium text-white hover:text-[var(--color-accent)]">
                  {t.contact.email}
                </a>
              </div>
              <CopyButton value={t.contact.email} />
            </GlassCard>

            <GlassCard tone="dark" className="flex items-center gap-4 p-5">
              <span className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full border border-white/15 text-[var(--color-accent)]">
                <PhoneIcon className="h-5 w-5" />
              </span>
              <div className="min-w-0 flex-1">
                <p className="text-[10px] uppercase tracking-[0.3em] text-white/40">{t.contact.phoneLabel}</p>
                <div className="mt-1 flex flex-wrap gap-x-4 gap-y-1" dir="ltr">
                  {t.contact.phones.map((phone) => (
                    <a key={phone} href={`tel:${phone}`} className="text-base font-medium text-white hover:text-[var(--color-accent)]">
                      {phone}
                    </a>
                  ))}
                </div>
              </div>
            </GlassCard>

            <GlassCard tone="dark" className="flex items-center gap-4 p-5">
              <span className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full border border-white/15 text-[var(--color-accent)]">
                <GlobeIcon className="h-5 w-5" />
              </span>
              <div className="min-w-0 flex-1">
                <p className="text-[10px] uppercase tracking-[0.3em] text-white/40">{t.contact.websiteLabel}</p>
                <a href="https://www.puiux.com" target="_blank" rel="noreferrer" className="mt-1 block text-base font-medium text-white hover:text-[var(--color-accent)]">
                  {t.contact.website}
                </a>
              </div>
            </GlassCard>

            <div>
              <p className="mb-4 text-[10px] uppercase tracking-[0.3em] text-white/40">{t.contact.socialLabel}</p>
              <div className="flex flex-wrap gap-3">
                {t.contact.social.map((s) => {
                  const Icon = socialIcons[s.name] ?? GlobeIcon;
                  return (
                    <a
                      key={s.url}
                      href={s.url}
                      target="_blank"
                      rel="noreferrer"
                      className="group flex items-center gap-3 rounded-full border border-white/15 px-4 py-2.5 transition hover:border-[var(--color-accent)]"
                    >
                      <Icon className="h-4 w-4 text-white/70 transition group-hover:text-[var(--color-accent)]" />
                      <span className="text-xs font-medium text-white/70 transition group-hover:text-white">{s.handle}</span>
                    </a>
                  );
                })}
              </div>
            </div>

            <p className="max-w-md pt-2 text-sm italic leading-relaxed text-white/40">{t.contact.formNote}</p>
          </Reveal>

          <Reveal delay={250} className="lg:col-span-2">
            <GlassCard tone="dark" className="h-full p-6 sm:p-8 glow-ring">
              <div className="flex items-center gap-3">
                <span className="flex h-11 w-11 items-center justify-center rounded-full border border-[var(--color-accent)]/40 text-[var(--color-accent)]">
                  <BankIcon className="h-5 w-5" />
                </span>
                <div>
                  <h3 className="font-display text-lg font-medium tracking-tight text-white">{t.contact.bankTitle}</h3>
                  <p className="text-xs text-white/40">{t.contact.bankSubtitle}</p>
                </div>
              </div>

              <div className="mt-6 space-y-4">
                {t.contact.bankFields.map((f) => (
                  <div key={f.label} className="flex items-center justify-between gap-3 border-t border-white/10 pt-4">
                    <div className="min-w-0">
                      <p className="text-[10px] uppercase tracking-[0.25em] text-white/40">{f.label}</p>
                      <p className="mt-1 truncate font-display text-sm font-medium text-white sm:text-base" dir="ltr" style={{ unicodeBidi: "plaintext" }}>
                        {f.value}
                      </p>
                    </div>
                    <CopyButton value={f.value} />
                  </div>
                ))}
              </div>
            </GlassCard>
          </Reveal>
        </div>
      </div>

      <div className="relative z-10 mt-20 flex flex-col gap-4 border-t border-white/10 pt-8 text-[11px] uppercase tracking-[0.3em] text-white/40 sm:flex-row sm:items-center sm:justify-between">
        <span className="font-display text-sm tracking-[0.3em] text-white">PUIUX</span>
        <span>{t.contact.footerLine}</span>
        <span>© {new Date().getFullYear()} PUIUX. {t.contact.rights}</span>
      </div>
    </section>
  );
}
