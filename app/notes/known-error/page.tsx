import type { Metadata } from "next";
import Link from "next/link";
import { SITE } from "@/content/data";

const TITLE = "When \"No Root Cause Found\" Is the Right Answer";
const DESCRIPTION =
  "Closing an incident as a known error can be sound engineering or quiet surrender. The difference is whether you can defend the decision.";

export const metadata: Metadata = {
  title: `${TITLE} — ${SITE.name}`,
  description: DESCRIPTION,
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: `${SITE.url}/notes/known-error/`,
    siteName: SITE.name,
    type: "article",
  },
  twitter: { card: "summary", title: TITLE, description: DESCRIPTION },
};

export default function KnownError() {
  return (
    <article className="mx-auto max-w-3xl px-6 py-16 sm:py-20">
      <Link
        href="/#notes"
        className="font-mono text-xs text-faint transition-colors hover:text-accent"
      >
        ← back to notes
      </Link>
      <p className="mt-8 font-mono text-xs text-faint" aria-hidden="true">
        note&#123;slug=&quot;<span className="text-accent">known-error</span>&quot;&#125;
      </p>
      <h1 className="mt-3 font-display text-4xl font-semibold tracking-tight text-ink">
        {TITLE}
      </h1>
      <p className="mt-3 font-mono text-xs text-faint">2026-06-10 · Sheg Adelakun</p>

      <div className="mt-10 space-y-5 leading-relaxed text-muted">
        <p>
          A service goes down. Someone restarts it. It comes back. The error
          cannot be reproduced, nothing was deployed that day, and the logs
          show a state that does not match the code that was running. After an
          hour of staring at it, someone says the quiet part: we could keep
          digging, or we could write this up as a known error and move on. Both
          options are on the table, and the difference between them is not
          effort. It is judgment.
        </p>
        <p>
          A known error, in incident terms, is a problem whose root cause you
          have either identified or deliberately stopped pursuing, with a
          documented reason and usually a workaround. The phrase carries a
          faint smell of surrender, and sometimes the smell is accurate. But
          treating every unresolved incident as a failure of diligence is its
          own mistake. Some root causes genuinely are not worth the cost of
          finding, and pretending otherwise burns engineers on investigations
          that will never pay back. The skill is telling the two apart in the
          room, under time pressure, without the comfort of hindsight.
        </p>

        <h2 className="font-display text-xl font-semibold text-ink">
          The honest version of closing without a root cause
        </h2>
        <p>
          Closing as a known error is defensible when three things are true.
          First, you have a reliable mitigation — a restart, a failover, a
          reboot — that you understand well enough to apply again quickly if
          the symptom returns. Second, the blast radius and recurrence rate are
          low enough that the expected cost of the next occurrence is smaller
          than the cost of the hunt. And third, you have written down what you
          do know: the symptom, the trigger conditions you have ruled out, the
          mitigation, and the specific signal that would reopen the
          investigation. That last part is what separates a decision from an
          abandonment. A known error with a tripwire is a paused investigation.
          A known error without one is a shrug with a ticket number.
        </p>

        <h2 className="font-display text-xl font-semibold text-ink">
          When the restart is hiding the problem, not solving it
        </h2>
        <p>
          The dangerous case is the incident that resolves <em>too</em>{" "}
          cleanly. A reboot clears the symptom and everyone exhales, but the
          reboot did not fix anything — it reset the state that the real fault
          had corrupted. I have watched a router restart get credited with
          resolving an incident when the actual cause was cache corruption one
          layer down; the restart flushed the cache as a side effect, so the
          fix and the disguise were the same action. That is the trap. When the
          mitigation also happens to erase the evidence, &quot;it works
          again&quot; tells you almost nothing about whether it will happen
          again. Those incidents deserve more suspicion, not less, precisely
          because they feel resolved.
        </p>
        <p>
          The tell is a mismatch between the observed behavior and the system
          as designed: an error that the compiled code should not be able to
          produce, a fault on one instance of an identical pair, a corruption
          with no deployment to explain it. When the symptom contradicts the
          architecture, the root cause is usually a layer you are not looking
          at yet — state, hardware, a dependency, a client-side change nobody
          told you about. Calling that a known error too early does not close
          the problem. It schedules it.
        </p>

        <h2 className="font-display text-xl font-semibold text-ink">
          Recurrence changes the math
        </h2>
        <p>
          A single weird incident with a clean mitigation is one thing. The
          same shape of incident three times in a month is a different thing
          wearing the same costume. The cost-benefit that justified walking
          away the first time inverts once there is a pattern, because the
          expected cost of future occurrences is no longer hypothetical. The
          right move when several unexplained incidents start to rhyme is to
          stop treating them as separate known errors and pull them into one
          investigation, because the shared root cause is often invisible at
          the level of any single ticket and obvious once they sit side by
          side. Fragile edge connectivity, container state corruption, a data
          defect nobody owns — these announce themselves as themes long before
          they announce themselves as causes.
        </p>

        <h2 className="font-display text-xl font-semibold text-ink">
          The test
        </h2>
        <p>
          Before I sign off on closing an incident without a root cause, I ask
          one question: can I defend this decision to someone who is paged the
          next time it happens? If the answer is yes — here is the mitigation,
          here is why the hunt was not worth it, here is the signal that would
          change my mind — then the known error is engineering. If the answer
          is no, if the honest reason is that we were tired and it stopped
          hurting, then it is not a verdict. It is a deferral with better
          paperwork, and the bill comes later with interest.
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
