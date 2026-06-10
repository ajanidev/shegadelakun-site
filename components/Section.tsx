import type { ReactNode } from "react";

export default function Section({
  id,
  title,
  intro,
  children,
}: {
  id: string;
  title: string;
  intro?: string;
  children: ReactNode;
}) {
  return (
    <section id={id} aria-labelledby={`${id}-heading`} className="reveal mx-auto max-w-5xl px-6 py-20 sm:py-24">
      <p className="font-mono text-xs text-faint" aria-hidden="true">
        site_section&#123;id=&quot;<span className="text-accent">{id}</span>&quot;&#125;
      </p>
      <h2
        id={`${id}-heading`}
        className="mt-3 font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl"
      >
        {title}
      </h2>
      {intro ? <p className="mt-4 max-w-2xl text-muted">{intro}</p> : null}
      <div className="mt-10">{children}</div>
    </section>
  );
}
