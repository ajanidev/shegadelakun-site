import type { Metadata } from "next";
import Link from "next/link";
import { SITE } from "@/content/data";

const TITLE = "Why Averages Lie in Capacity Planning";
const DESCRIPTION =
  "Averaging percentiles across unequal populations produces numbers that look precise and mean nothing. Aggregate per entity first.";

export const metadata: Metadata = {
  title: `${TITLE} — ${SITE.name}`,
  description: DESCRIPTION,
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: `${SITE.url}/notes/averages-lie/`,
    siteName: SITE.name,
    type: "article",
  },
  twitter: { card: "summary", title: TITLE, description: DESCRIPTION },
};

export default function AveragesLie() {
  return (
    <article className="mx-auto max-w-3xl px-6 py-16 sm:py-20">
      <Link
        href="/#notes"
        className="font-mono text-xs text-faint transition-colors hover:text-accent"
      >
        ← back to notes
      </Link>
      <p className="mt-8 font-mono text-xs text-faint" aria-hidden="true">
        note&#123;slug=&quot;<span className="text-accent">averages-lie</span>&quot;&#125;
      </p>
      <h1 className="mt-3 font-display text-4xl font-semibold tracking-tight text-ink">
        Why Averages Lie in Capacity Planning
      </h1>
      <p className="mt-3 font-mono text-xs text-faint">2026-06-09 · Sheg Adelakun</p>

      <div className="prose-custom mt-10 space-y-5 leading-relaxed text-muted">
        <p>
          The average is the most seductive number in infrastructure. It is one
          value, it is stable, it fits in a dashboard panel, and it goes up and
          to the right or down and to the left in ways executives can read at a
          glance. It is also, in capacity planning, the number most likely to
          be quietly wrong. Not wrong in the sense of miscalculated. Wrong in
          the sense that the calculation is correct and the conclusion it
          invites is not.
        </p>

        <h2 className="font-display text-xl font-semibold text-ink">
          Capacity is a tail problem
        </h2>
        <p>
          Systems do not fail at their average load. They fail at their peaks.
          A service averaging 40 percent CPU can be throttling hard for the
          five minutes a day that actually matter, and the daily mean will
          never tell you. The question capacity planning answers is not
          &quot;what does this workload usually need&quot; but &quot;what does
          this workload need when it would otherwise fall over.&quot; That is a
          high percentile or a max over a window, never a mean. The first lie
          of the average is omission: it summarizes the 95 percent of time
          when nothing interesting is happening.
        </p>

        <h2 className="font-display text-xl font-semibold text-ink">
          Percentiles do not average
        </h2>
        <p>
          The second lie is subtler and more common in fleet-level reporting.
          Someone computes a P95 per node, or per pod, or per cluster, and
          then averages those P95s to get a &quot;fleet P95.&quot; That number
          has no statistical meaning. Percentiles are not linear. The mean of
          per-entity P95s is not the P95 of the combined population, and
          depending on how load is distributed it can be wildly above or below
          it. If you need a fleet-level percentile, compute it from the merged
          distribution. If you need a summary of per-entity percentiles, say
          that explicitly and pick the summary deliberately: a max if one bad
          entity should dominate the decision, a high percentile if you want
          to drop pathological outliers. &quot;Average of P95s&quot; is almost
          never the statistic anyone actually wanted.
        </p>

        <h2 className="font-display text-xl font-semibold text-ink">
          Unequal populations break naive aggregation
        </h2>
        <p>
          The third lie is weighting. Average the utilization of a ten-node
          cluster and a six-hundred-node cluster and each contributes equally
          to the result. The small cluster, which barely matters to the bill
          or the risk, moves the fleet number as much as the one that
          dominates both. Efficiency ratios make this worse: averaging ratios
          across entities of different sizes produces a figure that
          corresponds to no real population. The same trap appears one level
          down when pods of very different sizes are averaged inside a
          service, and one level up when teams or regions are compared on
          their &quot;average efficiency.&quot;
        </p>

        <h2 className="font-display text-xl font-semibold text-ink">
          The rule: aggregate per entity first
        </h2>
        <p>
          The discipline that fixes all three failures is the same. Decide
          what decision the number serves, then compute the statistic at the
          level where the decision is made, and only then roll up. Within an
          entity, summarize with the statistic the failure mode demands,
          usually a high percentile or a max over an honest window. Across
          entities, choose the aggregation that matches the question: a max
          when one entity failing is the whole story, a percentile across
          entities when you want robustness against outliers, a properly
          weighted total when you are reasoning about money. Never let a mean
          hop across a population boundary on its own.
        </p>

        <h2 className="font-display text-xl font-semibold text-ink">
          A checklist
        </h2>
        <p>
          Before trusting any aggregate in a capacity decision, I ask four
          questions. What decision does this number feed? Is the failure mode
          a tail or a total? Did any percentile get averaged anywhere in the
          pipeline that produced this number? And are the entities being
          combined remotely comparable in size? If a dashboard cannot answer
          those four questions, the number on it is decoration. The work of
          performance engineering is not collecting metrics. It is refusing
          to let convenient numbers make inconvenient decisions.
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
