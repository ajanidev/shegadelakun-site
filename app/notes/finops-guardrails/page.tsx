import type { Metadata } from "next";
import Link from "next/link";
import { SITE } from "@/content/data";

const TITLE = "Designing Safe FinOps Guardrails";
const DESCRIPTION =
  "Cost automation is automation with write access to production. Five guardrails that let it earn trust instead of demanding it.";

export const metadata: Metadata = {
  title: `${TITLE} — ${SITE.name}`,
  description: DESCRIPTION,
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: `${SITE.url}/notes/finops-guardrails/`,
    siteName: SITE.name,
    type: "article",
  },
  twitter: { card: "summary", title: TITLE, description: DESCRIPTION },
};

export default function FinopsGuardrails() {
  return (
    <article className="mx-auto max-w-3xl px-6 py-16 sm:py-20">
      <Link
        href="/#notes"
        className="font-mono text-xs text-faint transition-colors hover:text-accent"
      >
        ← back to notes
      </Link>
      <p className="mt-8 font-mono text-xs text-faint" aria-hidden="true">
        note&#123;slug=&quot;<span className="text-accent">finops-guardrails</span>&quot;&#125;
      </p>
      <h1 className="mt-3 font-display text-4xl font-semibold tracking-tight text-ink">
        {TITLE}
      </h1>
      <p className="mt-3 font-mono text-xs text-faint">2026-06-09 · Sheg Adelakun</p>

      <div className="mt-10 space-y-5 leading-relaxed text-muted">
        <p>
          Rightsizing automation has an unusual property: it is the only class
          of tooling routinely granted write access to production for the
          purpose of giving workloads less. Every other deployment to
          production is supposed to add capability. This one removes margin,
          on purpose, at scale. That deserves more respect than it usually
          gets. The interesting design problem in FinOps is not finding
          savings. Savings are easy to find. The problem is building the
          guardrails that make capturing them boring.
        </p>

        <h2 className="font-display text-xl font-semibold text-ink">
          1. Floors are policy, not tuning
        </h2>
        <p>
          Any recommendation engine will eventually propose a value that is
          statistically defensible and operationally absurd. A floor is the
          line below which no recommendation applies, no matter how confident
          the math is, set per environment tier and enforced after the engine
          runs, not inside it. Floors encode an asymmetry the optimizer cannot
          see: the cost of slightly over-requesting is a few dollars, and the
          cost of starving a production workload is an incident. When the two
          disagree, the floor wins. Round up, never down, and make the floor a
          reviewed artifact with an owner rather than a constant in a script.
        </p>

        <h2 className="font-display text-xl font-semibold text-ink">
          2. A deploy gate is not a savings bucket
        </h2>
        <p>
          Some workloads should be excluded from automation not because the
          savings are small but because they are underprovisioned today, and
          applying recommendations would formalize a deficit. Keep two ideas
          separate. The financial analysis already nets those workloads into
          the total, including the ones where the right move costs money. The
          gate is operational: it says do not let the machine touch this until
          a human fixes the underlying problem. Teams that conflate the two
          end up either inflating their savings number or deploying into
          known-bad services to chase it.
        </p>

        <h2 className="font-display text-xl font-semibold text-ink">
          3. Never report the ceiling as the commitment
        </h2>
        <p>
          Every fleet analysis produces a big number, and the big number is a
          ceiling: what full adoption across every service would yield in
          theory. Leadership will remember whatever figure you say first, so
          say three. The theoretical ceiling. The portion capturable now,
          concentrated in the services that already pass the gates. And the
          contingent pipeline, the services that join only after other teams
          remediate them. Conflating ceiling with commitment buys one good
          meeting and spends credibility for quarters afterward.
        </p>

        <h2 className="font-display text-xl font-semibold text-ink">
          4. Fail-open needs an alarm
        </h2>
        <p>
          Safe automation is usually built to fail open: if the optimization
          machinery is down, workloads come up with their defaults and
          nothing breaks. That is the right default and it has a quiet
          failure mode. Nothing breaking is exactly what silent coverage loss
          looks like. If the system can stop applying without anyone noticing,
          it eventually will, and the savings erode invisibly while the
          dashboard stays green. Alert on the absence of optimization, not
          just on its errors. Coverage is a metric.
        </p>

        <h2 className="font-display text-xl font-semibold text-ink">
          5. Know what the runtime decided at startup
        </h2>
        <p>
          Container limits are not the whole story. Managed runtimes size
          their own internals when the process starts: a JVM fixes its heap
          and thread pools long before the orchestrator has an opinion.
          Shrinking a container limit around a heap the process already
          committed to is how you convert a savings line item into an
          out-of-memory page. For those workloads, memory recommendations
          should be advisory, routed to the humans who own the runtime
          configuration, while the automation confines itself to what it can
          change safely.
        </p>

        <h2 className="font-display text-xl font-semibold text-ink">
          The point of all five
        </h2>
        <p>
          Guardrails are how cost automation earns trust instead of demanding
          it. Each one exists because the failure it prevents was cheaper to
          design against than to explain afterward. The measure of a good
          FinOps rollout is not the size of the first number on the slide. It
          is how uneventful the deployment logs are six months later.
        </p>
      </div>

      <div className="mt-12 border-t border-line pt-6">
        <Link
          href="/#notes"
          className="font-mono text-xs text-faint transition-colors hover:text-accent"
        >
          ← back to notes
        </Link>
      </div>
    </article>
  );
}
