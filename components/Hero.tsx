import { SITE } from "@/content/data";

/** Hand-placed node topology — SVG only, no image assets, no JS. */
function Topology() {
  const nodes: Array<[number, number, number]> = [
    [60, 70, 4], [180, 40, 3], [300, 110, 5], [430, 50, 3], [560, 95, 4],
    [690, 45, 3], [820, 105, 5], [940, 60, 3], [120, 170, 3], [260, 210, 4],
    [410, 175, 3], [550, 220, 5], [700, 185, 3], [850, 215, 4], [960, 165, 3],
  ];
  const edges: Array<[number, number]> = [
    [0, 1], [1, 2], [2, 3], [3, 4], [4, 5], [5, 6], [6, 7],
    [0, 8], [8, 9], [9, 2], [9, 10], [10, 11], [11, 4], [11, 12],
    [12, 6], [12, 13], [13, 14], [14, 7], [2, 10], [4, 11],
  ];
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 1000 260"
      preserveAspectRatio="xMidYMid slice"
      className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.16]"
    >
      {edges.map(([a, b], i) => (
        <line
          key={i}
          x1={nodes[a][0]}
          y1={nodes[a][1]}
          x2={nodes[b][0]}
          y2={nodes[b][1]}
          stroke="#00d4ff"
          strokeWidth="1"
        />
      ))}
      {nodes.map(([x, y, r], i) => (
        <circle
          key={i}
          cx={x}
          cy={y}
          r={r}
          fill={i % 5 === 0 ? "#10b981" : "#00d4ff"}
          className={i % 4 === 0 ? "pulse-node" : undefined}
          opacity={0.7}
        />
      ))}
    </svg>
  );
}

export default function Hero() {
  return (
    <section
      aria-labelledby="hero-heading"
      className="relative overflow-hidden border-b border-line"
    >
      <Topology />
      <div className="relative mx-auto max-w-5xl px-6 py-24 sm:py-32">
        <p className="font-mono text-xs text-faint" aria-hidden="true">
          site_section&#123;id=&quot;<span className="text-accent">hero</span>&quot;&#125;
        </p>
        <h1
          id="hero-heading"
          className="mt-4 font-display text-5xl font-bold tracking-tight text-ink sm:text-6xl"
        >
          {SITE.name}
        </h1>
        <p className="mt-5 max-w-2xl font-display text-xl font-medium text-accent sm:text-2xl">
          {SITE.hero.subheadline}
        </p>
        <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
          {SITE.hero.supporting}
        </p>
        <div className="mt-9 flex flex-wrap gap-4">
          <a
            href="#proof"
            className="rounded-md bg-accent px-5 py-2.5 text-sm font-semibold text-bg transition-opacity hover:opacity-90"
          >
            View Work
          </a>
          <a
            href="#contact"
            className="rounded-md border border-line px-5 py-2.5 text-sm font-semibold text-ink transition-colors hover:border-accent/50"
          >
            Connect
          </a>
        </div>
      </div>
    </section>
  );
}
