import Section from "@/components/Section";

const STAGES = ["Observe", "Measure", "Analyze", "Optimize", "Validate"];

function Horizontal() {
  const w = 150;
  const gap = 40;
  return (
    <svg
      viewBox="0 0 960 170"
      role="img"
      aria-labelledby="sysdiag-title"
      className="hidden w-full sm:block"
    >
      <title id="sysdiag-title">
        Engineering workflow: Observe, Measure, Analyze, Optimize, Validate,
        feeding back into Observe.
      </title>
      {STAGES.map((s, i) => {
        const x = 10 + i * (w + gap);
        return (
          <g key={s}>
            <rect
              x={x}
              y={40}
              width={w}
              height={56}
              rx={8}
              fill="#111827"
              stroke="#1e2a44"
              strokeWidth={1.5}
            />
            <text
              x={x + w / 2}
              y={73}
              textAnchor="middle"
              fill="#f1f5f9"
              fontSize={17}
              fontFamily="Space Grotesk, sans-serif"
              fontWeight={600}
            >
              {s}
            </text>
            {i < STAGES.length - 1 && (
              <g stroke="#00d4ff" strokeWidth={1.5} fill="#00d4ff">
                <line x1={x + w + 6} y1={68} x2={x + w + gap - 10} y2={68} />
                <path
                  d={`M ${x + w + gap - 10} 63 L ${x + w + gap - 2} 68 L ${x + w + gap - 10} 73 Z`}
                />
              </g>
            )}
          </g>
        );
      })}
      {/* feedback loop: Validate -> Observe */}
      <g stroke="#10b981" strokeWidth={1.5} fill="none">
        <path d="M 845 96 L 845 140 L 85 140 L 85 104" />
        <path d="M 80 110 L 85 100 L 90 110 Z" fill="#10b981" stroke="none" />
      </g>
      <text
        x={465}
        y={158}
        textAnchor="middle"
        fill="#64748b"
        fontSize={12}
        fontFamily="JetBrains Mono, monospace"
      >
        validation feeds the next observation
      </text>
    </svg>
  );
}

function Vertical() {
  return (
    <svg
      viewBox="0 0 280 470"
      role="img"
      aria-labelledby="sysdiag-title-v"
      className="mx-auto w-full max-w-[280px] sm:hidden"
    >
      <title id="sysdiag-title-v">
        Engineering workflow: Observe, Measure, Analyze, Optimize, Validate,
        feeding back into Observe.
      </title>
      {STAGES.map((s, i) => {
        const y = 10 + i * 92;
        return (
          <g key={s}>
            <rect
              x={50}
              y={y}
              width={180}
              height={52}
              rx={8}
              fill="#111827"
              stroke="#1e2a44"
              strokeWidth={1.5}
            />
            <text
              x={140}
              y={y + 32}
              textAnchor="middle"
              fill="#f1f5f9"
              fontSize={17}
              fontFamily="Space Grotesk, sans-serif"
              fontWeight={600}
            >
              {s}
            </text>
            {i < STAGES.length - 1 && (
              <g stroke="#00d4ff" strokeWidth={1.5} fill="#00d4ff">
                <line x1={140} y1={y + 56} x2={140} y2={y + 84} />
                <path
                  d={`M 135 ${y + 82} L 140 ${y + 90} L 145 ${y + 82} Z`}
                />
              </g>
            )}
          </g>
        );
      })}
      <g stroke="#10b981" strokeWidth={1.5} fill="none">
        <path d="M 230 404 L 262 404 L 262 36 L 236 36" />
        <path d="M 242 31 L 232 36 L 242 41 Z" fill="#10b981" stroke="none" />
      </g>
    </svg>
  );
}

export default function SystemsDiagram() {
  return (
    <Section
      id="workflow"
      title="How the Work Gets Done"
      intro="Every engagement runs the same loop — evidence in, validated change out."
    >
      <div className="rounded-lg border border-line bg-surface/50 p-6">
        <Horizontal />
        <Vertical />
      </div>
    </Section>
  );
}
