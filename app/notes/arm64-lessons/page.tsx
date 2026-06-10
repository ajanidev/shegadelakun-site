import type { Metadata } from "next";
import Link from "next/link";
import { SITE } from "@/content/data";

const TITLE = "Lessons from an ARM64 Migration";
const DESCRIPTION =
  "Moving a fleet to ARM64 is rarely blocked by the application. It is blocked by the things underneath it — the build, the binaries, the long tail nobody owns.";

export const metadata: Metadata = {
  title: `${TITLE} — ${SITE.name}`,
  description: DESCRIPTION,
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: `${SITE.url}/notes/arm64-lessons/`,
    siteName: SITE.name,
    type: "article",
  },
  twitter: { card: "summary", title: TITLE, description: DESCRIPTION },
};

export default function Arm64Lessons() {
  return (
    <article className="mx-auto max-w-3xl px-6 py-16 sm:py-20">
      <Link
        href="/#notes"
        className="font-mono text-xs text-faint transition-colors hover:text-accent"
      >
        ← back to notes
      </Link>
      <p className="mt-8 font-mono text-xs text-faint" aria-hidden="true">
        note&#123;slug=&quot;<span className="text-accent">arm64-lessons</span>&quot;&#125;
      </p>
      <h1 className="mt-3 font-display text-4xl font-semibold tracking-tight text-ink">
        {TITLE}
      </h1>
      <p className="mt-3 font-mono text-xs text-faint">2026-05-28 · Sheg Adelakun</p>

      <div className="mt-10 space-y-5 leading-relaxed text-muted">
        <p>
          The pitch for ARM64 is simple and real: comparable performance at a
          lower price per core, which on a large fleet is a line item worth
          chasing. The pitch makes it sound like a scheduling decision — point
          the workloads at a different node type and collect the savings. In
          practice the application is almost never the hard part. The hard part
          is everything underneath it, and most of the work in a migration is
          finding out what that everything is.
        </p>

        <h2 className="font-display text-xl font-semibold text-ink">
          Readiness is a classification problem, not a yes/no
        </h2>
        <p>
          The instinct is to ask whether a service &quot;supports ARM.&quot;
          That is the wrong shape of question, because the answer for any
          non-trivial service is &quot;partly.&quot; A more useful framing is a
          maturity ladder: does it build cleanly on the new architecture, does
          it run, does it pass tests, does it pass under load, and is it
          actually running in production. Most services sit at different rungs
          for different reasons, and the reasons are what the migration plan is
          made of. Classifying the whole fleet against that ladder first turns
          a vague initiative into a tracked piece of work with a known long
          tail, instead of a string of surprises discovered one deploy at a
          time.
        </p>

        <h2 className="font-display text-xl font-semibold text-ink">
          The build is the first wall
        </h2>
        <p>
          Before anything runs on the new architecture, it has to be built for
          it, and that is where the first real blockers appear. A multi-arch
          image is straightforward when every layer is portable and miserable
          when one layer is not. The usual offenders are the quiet ones: a
          dependency with no ARM build, a tool pulled in as a precompiled
          binary for the old architecture, a base image that resolves
          differently than you expect. Each one stops the build cold, and each
          one has a different fix — cross-compile it, find an ARM-native
          replacement, or build a derivative image that carries the missing
          piece. None of that is exotic, but it is invisible until you try, and
          it does not show up in any capability matrix you write in advance.
        </p>

        <h2 className="font-display text-xl font-semibold text-ink">
          Cross-compilation is where schedules go to die
        </h2>
        <p>
          The single most reliable way to underestimate an ARM migration is to
          have a component written in a compiled language that ships as a
          native binary. Interpreted and JVM-based services tend to move with
          relatively little drama because the runtime abstracts the
          architecture. A statically compiled tool does not — it has to be
          rebuilt for the target, and if its own build process assumes the host
          architecture, you are now solving a cross-compilation problem that
          can be a quick flag or a multi-day yak shave depending on how the
          toolchain was set up. The lesson I took is to find these components on
          day one and size the whole effort around them, because they, not the
          application, set the critical path.
        </p>

        <h2 className="font-display text-xl font-semibold text-ink">
          The work is mostly coordination
        </h2>
        <p>
          A fleet migration is a long tail of repositories, and the long tail is
          owned by people who did not ask for this work and have their own
          priorities. The technical pattern for any one repository is usually
          repeatable once the first few are solved. The actual difficulty is
          organizational: sequencing the repositories so the shared
          dependencies move first, giving owners a worked example rather than a
          mandate, and keeping a tracker honest enough that everyone can see the
          same picture of what is done, what is blocked, and on whom. The
          engineering that unblocks a hard repository matters, but the thing
          that finishes the migration is the boring discipline of making the
          remaining work legible and moving it one rung at a time.
        </p>

        <h2 className="font-display text-xl font-semibold text-ink">
          What it is really teaching
        </h2>
        <p>
          An architecture migration is a structured way to discover everything
          your platform secretly depends on. The savings are the reason you
          start, but the lasting value is the map you produce on the way — the
          inventory of which components are portable, which are brittle, and
          which are precompiled mysteries nobody had looked at in years. That
          map outlives the migration. The cost number gets you the funding; the
          dependency clarity is what you actually keep.
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
