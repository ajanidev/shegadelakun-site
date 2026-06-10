import Link from "next/link";
import Section from "@/components/Section";
import Headshot from "@/components/Headshot";
import {
  ABOUT,
  CRAFT,
  PHILOSOPHY,
  IMPACT,
  NOW,
  NOTES,
  NOTES_EMPTY_STATE,
  CONTACT,
  SITE,
} from "@/content/data";

export function About() {
  return (
    <Section id="about" title="About">
      <div className="flex flex-col gap-8 sm:flex-row sm:items-start">
        <Headshot src={ABOUT.photo} alt={`Portrait of ${SITE.name}`} />
        <div className="max-w-2xl space-y-4">
          {ABOUT.paragraphs.map((p) => (
            <p key={p.slice(0, 24)} className="leading-relaxed text-muted">
              {p}
            </p>
          ))}
        </div>
      </div>
    </Section>
  );
}

export function Craft() {
  return (
    <Section id="craft" title="Craft">
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {CRAFT.map((c) => (
          <article
            key={c.id}
            className="rounded-lg border border-line bg-surface p-6 transition-colors hover:border-accent/40"
          >
            <h3 className="font-display text-lg font-semibold text-ink">
              {c.title}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-muted">{c.body}</p>
          </article>
        ))}
      </div>
    </Section>
  );
}

export function Philosophy() {
  return (
    <Section
      id="philosophy"
      title="Engineering Philosophy"
      intro="How I make technical decisions."
    >
      <div className="grid gap-5 lg:grid-cols-3">
        {PHILOSOPHY.map((p, i) => (
          <article
            key={p.id}
            className="rounded-lg border border-line bg-surface p-6"
          >
            <p className="font-mono text-xs text-violet" aria-hidden="true">
              principle_0{i + 1}
            </p>
            <h3 className="mt-3 font-display text-lg font-semibold text-ink">
              {p.title}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-muted">{p.body}</p>
          </article>
        ))}
      </div>
    </Section>
  );
}

export function Impact() {
  return (
    <Section
      id="impact"
      title="Impact"
      intro="Verified outcomes. No animated counters, no vanity metrics."
    >
      <ul className="grid gap-4 sm:grid-cols-2">
        {IMPACT.map((item) => (
          <li
            key={item}
            className="flex items-start gap-3 rounded-lg border border-line bg-surface p-5"
          >
            <span
              aria-hidden="true"
              className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-health"
            />
            <span className="text-sm leading-relaxed text-ink">{item}</span>
          </li>
        ))}
      </ul>
    </Section>
  );
}

export function Now() {
  return (
    <Section id="now" title="Now" intro={NOW.statement}>
      <div className="grid gap-5 lg:grid-cols-3">
        <article className="rounded-lg border border-line bg-surface p-6 lg:col-span-1">
          <h3 className="font-mono text-xs uppercase tracking-wider text-faint">
            Current focus
          </h3>
          <ul className="mt-4 space-y-2.5">
            {NOW.focus.map((f) => (
              <li key={f} className="flex items-start gap-2.5 text-sm text-ink">
                <span aria-hidden="true" className="mt-1 text-accent">
                  →
                </span>
                {f}
              </li>
            ))}
          </ul>
        </article>
        <article className="rounded-lg border border-line bg-surface p-6">
          <h3 className="font-mono text-xs uppercase tracking-wider text-faint">
            Education
          </h3>
          <p className="mt-4 text-sm leading-relaxed text-ink">
            {NOW.education}
          </p>
        </article>
        <article className="rounded-lg border border-line bg-surface p-6">
          <h3 className="font-mono text-xs uppercase tracking-wider text-faint">
            Target certifications
          </h3>
          <ul className="mt-4 space-y-2.5">
            {NOW.certifications.map((c) => (
              <li key={c} className="font-mono text-sm text-muted">
                {c}
              </li>
            ))}
          </ul>
        </article>
      </div>
    </Section>
  );
}

export function Notes() {
  return (
    <Section
      id="notes"
      title="Notes"
      intro="A long-term home for technical writing."
    >
      {NOTES.length === 0 ? (
        <div className="rounded-lg border border-dashed border-line bg-surface/50 p-10 text-center">
          <p className="font-mono text-sm text-muted">{NOTES_EMPTY_STATE}</p>
        </div>
      ) : (
        <div className="grid gap-5 sm:grid-cols-2">
          {[...NOTES]
            .sort((a, b) => b.date.localeCompare(a.date))
            .map((n) => {
            const external = n.href.startsWith("http");
            const Card = external ? "a" : Link;
            return (
            <Card
              key={n.slug}
              href={n.href}
              {...(external ? { target: "_blank", rel: "noopener" } : {})}
              className="rounded-lg border border-line bg-surface p-6 transition-colors hover:border-accent/40"
            >
              <p className="font-mono text-xs text-faint">{n.date}</p>
              <h3 className="mt-2 font-display text-lg font-semibold text-ink">
                {n.title}
              </h3>
              <p className="mt-2 text-sm text-muted">
                {n.summary}
                {external ? " ↗" : ""}
              </p>
            </Card>
          );})}
        </div>
      )}
    </Section>
  );
}

export function Contact() {
  const links = [
    { label: "LinkedIn", href: CONTACT.linkedin },
    { label: "GitHub", href: CONTACT.github },
    { label: "Email", href: `mailto:${CONTACT.email}` },
    ...(CONTACT.resume ? [{ label: "Resume", href: CONTACT.resume }] : []),
  ];
  return (
    <Section
      id="contact"
      title="Contact"
      intro="Direct links. No forms."
    >
      <div className="flex flex-wrap gap-4">
        {links.map((l) => (
          <a
            key={l.label}
            href={l.href}
            {...(l.href.startsWith("http")
              ? { target: "_blank", rel: "noopener" }
              : {})}
            className="rounded-md border border-line bg-surface px-6 py-3 font-mono text-sm text-ink transition-colors hover:border-accent/50 hover:text-accent"
          >
            {l.label}
          </a>
        ))}
      </div>
    </Section>
  );
}
