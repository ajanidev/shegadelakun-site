import Section from "@/components/Section";
import CredentialBadge from "@/components/CredentialBadge";
import { CREDENTIALS, CASE_STUDIES } from "@/content/data";

export default function Proof() {
  return (
    <Section
      id="proof"
      title="Proof"
      intro="Verifiable credentials and completed work."
    >
      {/* Credentials */}
      <h3 className="font-mono text-xs uppercase tracking-wider text-faint">
        Credentials
      </h3>
      <ul className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {CREDENTIALS.map((cred) => (
          <li
            key={cred.id}
            className="flex flex-col rounded-lg border border-line bg-surface p-6"
          >
            <CredentialBadge cred={cred} />
            <h4 className="mt-4 font-display text-base font-semibold leading-snug text-ink">
              {cred.name}
            </h4>
            <p className="mt-1 text-xs text-faint">{cred.issuer}</p>
            <div className="mt-4 flex flex-1 flex-col justify-end gap-2.5">
              {cred.status === "active" ? (
                <>
                  <span className="inline-flex w-fit items-center gap-1.5 rounded-full border border-health/40 bg-health/10 px-2.5 py-0.5 text-xs font-medium text-health">
                    <span
                      aria-hidden="true"
                      className="h-1.5 w-1.5 rounded-full bg-health"
                    />
                    Verified
                  </span>
                  <code className="w-fit rounded border border-line bg-bg px-2 py-1 font-mono text-xs text-muted">
                    {cred.credId}
                  </code>
                  <p className="text-xs text-faint">
                    Valid until {cred.validUntil}
                  </p>
                  {cred.verifyUrl && (
                    <a
                      href={cred.verifyUrl}
                      target="_blank"
                      rel="noopener"
                      className="w-fit text-xs font-medium text-accent underline-offset-4 hover:underline"
                    >
                      Verify →
                    </a>
                  )}
                </>
              ) : (
                <span className="inline-flex w-fit items-center rounded-full border border-line px-2.5 py-0.5 text-xs text-faint">
                  {cred.statusLabel ?? "In progress"}
                </span>
              )}
            </div>
          </li>
        ))}
      </ul>

      {/* Selected work */}
      <h3 className="mt-16 font-mono text-xs uppercase tracking-wider text-faint">
        Selected work
      </h3>
      <div className="mt-5 space-y-4">
        {CASE_STUDIES.map((cs) => (
          <details
            key={cs.id}
            className="case-study rounded-lg border border-line bg-surface"
          >
            <summary className="flex items-start gap-4 p-6">
              <span
                aria-hidden="true"
                className="chev mt-1 font-mono text-accent"
              >
                ›
              </span>
              <span className="flex-1">
                <span className="block font-display text-lg font-semibold text-ink">
                  {cs.title}
                </span>
                <span className="mt-1 block text-sm text-muted">
                  {cs.summary}
                </span>
              </span>
            </summary>
            <div className="border-t border-line px-6 py-5 pl-[3.25rem]">
              <p className="text-sm leading-relaxed text-ink">{cs.detail}</p>
              <ul className="mt-4 flex flex-wrap gap-2" aria-label="Topics">
                {cs.tags.map((t) => (
                  <li
                    key={t}
                    className="rounded border border-line px-2 py-0.5 font-mono text-xs text-faint"
                  >
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          </details>
        ))}
      </div>
    </Section>
  );
}
