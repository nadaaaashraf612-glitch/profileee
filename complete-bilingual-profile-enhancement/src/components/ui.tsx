import { type ReactNode } from "react";
import { cn } from "../utils/cn";
import { useLanguage } from "../i18n/LanguageContext";

export function Kicker({
  children,
  tone = "dark",
  className,
}: {
  children: ReactNode;
  tone?: "dark" | "light";
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex items-center gap-3 text-[11px] font-medium uppercase tracking-[0.35em]",
        tone === "dark" ? "text-black/60" : "text-white/60",
        className
      )}
    >
      <span className={cn("h-px w-8", tone === "dark" ? "bg-black/40" : "bg-white/40")} />
      {children}
    </div>
  );
}

export function PageMeta({
  index,
  label,
  tone = "dark",
}: {
  index: string;
  label: string;
  tone?: "dark" | "light";
}) {
  const { t } = useLanguage();
  const total = String(t.sectionIndex.length).padStart(2, "0");
  return (
    <div
      className={cn(
        "pointer-events-none absolute inset-x-0 bottom-0 z-10 flex items-center justify-between px-6 py-5 text-[10px] font-medium uppercase tracking-[0.3em] sm:px-10 lg:px-16",
        tone === "dark" ? "text-black/40" : "text-white/40"
      )}
    >
      <span>PUIUX</span>
      <span className="hidden sm:inline">{label}</span>
      <span>
        {index} / {total}
      </span>
    </div>
  );
}

export function GlassCard({
  children,
  className,
  tone = "light",
}: {
  children: ReactNode;
  className?: string;
  tone?: "light" | "dark";
}) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-2xl border backdrop-blur-xl",
        tone === "light"
          ? "border-black/10 bg-white/50 shadow-[0_8px_40px_rgba(0,0,0,0.06)]"
          : "border-white/15 bg-white/[0.06] shadow-[0_8px_40px_rgba(0,0,0,0.3)]",
        className
      )}
    >
      {children}
    </div>
  );
}

export function TagPill({ children, tone = "dark" }: { children: ReactNode; tone?: "dark" | "light" }) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border px-3 py-1 text-[11px] font-medium uppercase tracking-[0.1em]",
        tone === "dark" ? "border-black/15 text-black/70" : "border-white/20 text-white/70"
      )}
    >
      {children}
    </span>
  );
}

export function Divider({ tone = "dark", className }: { tone?: "dark" | "light"; className?: string }) {
  return <div className={cn("h-px w-full", tone === "dark" ? "bg-black/10" : "bg-white/15", className)} />;
}

export function BigIndex({ n, tone = "dark" }: { n: string; tone?: "dark" | "light" }) {
  return (
    <span
      className={cn(
        "font-display text-xs font-medium tabular-nums tracking-[0.2em]",
        tone === "dark" ? "text-black/40" : "text-white/40"
      )}
    >
      {n}
    </span>
  );
}

export function AccentDot() {
  return <span className="inline-block h-1.5 w-1.5 rounded-full bg-[var(--color-accent)]" />;
}

export function GoldButton({
  href,
  children,
  onClick,
  tone = "light",
  className,
}: {
  href?: string;
  children: ReactNode;
  onClick?: () => void;
  tone?: "light" | "dark";
  className?: string;
}) {
  const classes = cn(
    "group inline-flex items-center gap-3 rounded-full border px-6 py-3 text-xs font-semibold uppercase tracking-[0.25em] transition-all duration-300",
    tone === "light"
      ? "border-white/25 text-white hover:border-[var(--color-accent)] hover:bg-[var(--color-accent)] hover:text-black"
      : "border-black/20 text-black hover:border-[var(--color-accent)] hover:bg-[var(--color-accent)] hover:text-black",
    className
  );
  if (href) {
    return (
      <a href={href} onClick={onClick} className={classes} target={href.startsWith("http") ? "_blank" : undefined} rel="noreferrer">
        {children}
      </a>
    );
  }
  return (
    <button type="button" onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
