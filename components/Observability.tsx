"use client";

import { useEffect, useState } from "react";

interface Vitals {
  ttfb: number | null;
  lcp: number | null;
  cls: number | null;
  load: number | null;
  transferKB: number | null;
}

const fmtMs = (v: number | null) =>
  v === null ? "—" : v >= 1000 ? `${(v / 1000).toFixed(2)}s` : `${Math.round(v)}ms`;

/**
 * Self-observability: the site reports on itself with values measured at
 * runtime via the Performance APIs. Nothing here is hardcoded.
 * Also wires the IntersectionObserver for section reveals (one client
 * component instead of two keeps shipped JS minimal).
 */
export default function Observability() {
  const [vitals, setVitals] = useState<Vitals>({
    ttfb: null,
    lcp: null,
    cls: null,
    load: null,
    transferKB: null,
  });
  const [open, setOpen] = useState(false);

  // Reveal-on-scroll for .reveal sections (no-op visually under reduced motion).
  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>(".reveal");
    if (!("IntersectionObserver" in window)) {
      els.forEach((el) => el.classList.add("is-visible"));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            e.target.classList.add("is-visible");
            io.unobserve(e.target);
          }
        }
      },
      { threshold: 0.1 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  // Measured page metrics.
  useEffect(() => {
    const measureNav = () => {
      const nav = performance.getEntriesByType(
        "navigation"
      )[0] as PerformanceNavigationTiming | undefined;
      if (!nav) return;
      const resources = performance.getEntriesByType(
        "resource"
      ) as PerformanceResourceTiming[];
      const transfer =
        (nav.transferSize || 0) +
        resources.reduce((s, r) => s + (r.transferSize || 0), 0);
      setVitals((v) => ({
        ...v,
        ttfb: nav.responseStart,
        load: nav.loadEventEnd > 0 ? nav.loadEventEnd : null,
        transferKB: transfer > 0 ? Math.round(transfer / 1024) : null,
      }));
    };

    if (document.readyState === "complete") {
      // loadEventEnd settles just after the load event; defer one tick.
      setTimeout(measureNav, 0);
    } else {
      window.addEventListener("load", () => setTimeout(measureNav, 0), {
        once: true,
      });
    }

    let clsValue = 0;
    const observers: PerformanceObserver[] = [];
    try {
      const lcpObs = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const last = entries[entries.length - 1];
        if (last) setVitals((v) => ({ ...v, lcp: last.startTime }));
      });
      lcpObs.observe({ type: "largest-contentful-paint", buffered: true });
      observers.push(lcpObs);

      const clsObs = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          const e = entry as PerformanceEntry & {
            value: number;
            hadRecentInput: boolean;
          };
          if (!e.hadRecentInput) clsValue += e.value;
        }
        setVitals((v) => ({ ...v, cls: clsValue }));
      });
      clsObs.observe({ type: "layout-shift", buffered: true });
      observers.push(clsObs);
    } catch {
      // Older browsers: chip simply shows fewer metrics.
    }
    return () => observers.forEach((o) => o.disconnect());
  }, []);

  const built = process.env.NEXT_PUBLIC_BUILD_TIME;

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <button
        type="button"
        aria-expanded={open}
        aria-controls="obs-panel"
        onClick={() => setOpen((o) => !o)}
        className="flex items-center gap-2 rounded-full border border-line bg-surface/95 px-3.5 py-2 font-mono text-xs text-muted shadow-lg backdrop-blur transition-colors hover:border-health/50"
      >
        <span
          aria-hidden="true"
          className="h-2 w-2 rounded-full bg-health"
        />
        <span className="hidden sm:inline">
          loaded {fmtMs(vitals.load)} · {vitals.transferKB ?? "—"} KB
        </span>
        <span className="sm:hidden">vitals</span>
      </button>
      {open && (
        <dl
          id="obs-panel"
          className="absolute bottom-12 right-0 w-60 space-y-1.5 rounded-lg border border-line bg-surface p-4 font-mono text-xs shadow-xl"
        >
          <div className="flex justify-between">
            <dt className="text-faint">TTFB</dt>
            <dd className="text-ink">{fmtMs(vitals.ttfb)}</dd>
          </div>
          <div className="flex justify-between">
            <dt className="text-faint">LCP</dt>
            <dd className="text-ink">{fmtMs(vitals.lcp)}</dd>
          </div>
          <div className="flex justify-between">
            <dt className="text-faint">CLS</dt>
            <dd className="text-ink">
              {vitals.cls === null ? "—" : vitals.cls.toFixed(3)}
            </dd>
          </div>
          <div className="flex justify-between">
            <dt className="text-faint">Load</dt>
            <dd className="text-ink">{fmtMs(vitals.load)}</dd>
          </div>
          <div className="flex justify-between">
            <dt className="text-faint">Transfer</dt>
            <dd className="text-ink">
              {vitals.transferKB === null ? "—" : `${vitals.transferKB} KB`}
            </dd>
          </div>
          <div className="flex justify-between border-t border-line pt-1.5">
            <dt className="text-faint">Built</dt>
            <dd className="text-ink">
              {built ? new Date(built).toISOString().slice(0, 10) : "—"}
            </dd>
          </div>
          <p className="pt-1 text-[10px] leading-snug text-faint">
            Measured in your browser via the Performance API. Nothing
            hardcoded.
          </p>
        </dl>
      )}
    </div>
  );
}
