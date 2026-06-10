// ============================================================================
// CONTENT MODEL — single source of truth for everything that changes over time.
// Adding a credential, case study, or note means editing THIS file only
// (plus dropping a badge PNG into /public/assets/badges/).
// ============================================================================

export type CredentialStatus = "active" | "in-progress";

export interface Credential {
  id: string;
  name: string;
  shortName: string;
  issuer: string;
  credId: string | null;
  validUntil: string | null;
  badge: string;
  verifyUrl: string | null;
  status: CredentialStatus;
  statusLabel?: string;
}

export interface CaseStudy {
  id: string;
  theme: string;
  title: string;
  summary: string;
  detail: string;
  tags: string[];
}

export const CASE_STUDY_THEMES = [
  "FinOps & Cost",
  "Infrastructure & Automation",
  "Observability",
  "Reliability & Incident Response",
  "Strategy & Leadership",
] as const;

export interface CraftArea {
  id: string;
  title: string;
  body: string;
}

export interface Principle {
  id: string;
  title: string;
  body: string;
}

export interface Note {
  slug: string;
  title: string;
  date: string;
  summary: string;
  href: string;
}

// ---------------------------------------------------------------------------

export const SITE = {
  name: "Sheg Adelakun",
  fullName: 'Olusegun "Sheg" Adelakun',
  domain: "shegadelakun.com",
  // Canonical URL. Currently www. To switch to apex (shegadelakun.com):
  // 1) In Vercel, set a redirect www -> apex and confirm it resolves.
  // 2) THEN change the line below to "https://shegadelakun.com".
  // Do not change this before the Vercel redirect is live, or the sitemap
  // and OG tags will point at a URL that is still redirecting.
  url: "https://www.shegadelakun.com",
  title: "Sheg Adelakun — Cloud Performance Engineer",
  description:
    "Senior Cloud Performance Engineer focused on cloud infrastructure, Kubernetes performance, observability, reliability engineering, and cost optimization.",
  hero: {
    role: "Cloud Performance Engineer",
    subheadline:
      "Cloud Performance Engineer specializing in Kubernetes, observability, reliability engineering, and cloud optimization.",
    supporting:
      "I build and optimize the systems behind modern applications — from Kubernetes platforms and observability pipelines to performance investigations and infrastructure cost optimization.",
  },
};

export const CONTACT = {
  email: "sheg.adelakun@gmail.com",
  linkedin: "https://www.linkedin.com/in/sheg-a-a14197b9",
  github: "https://github.com/ajanidev",
  // Drop your resume at /public/resume.pdf (or set to null to hide the link).
  resume: "/resume.pdf" as string | null,
};

export const ABOUT = {
  // Optional headshot. Drop a photo at /public/assets/headshot.jpg;
  // if the file is missing the section renders text-only, never a broken image.
  photo: "/assets/headshot.jpg",
  // Who, not what: the hero already covers what I do. This covers the arc.
  paragraphs: [
    "I came up through SRE and DevOps before moving into cloud performance engineering, and I was hired into senior infrastructure work on demonstrated capability. Since then I have added the CKA and CKAD, with the CKS underway, because credentials should confirm practice rather than substitute for it.",
    "The through-line in my work is evidence. Whether the question is a JVM that will not settle, a fleet that is overprovisioned, or a controller that needs to earn write access to production, I want measurements first, a clear safety policy second, and a system that operators can reason about at 3 AM above all.",
  ],
};

export const CRAFT: CraftArea[] = [
  {
    id: "kubernetes",
    title: "Kubernetes",
    body: "Cluster operations, scalability, workload optimization, resource management, autoscaling, scheduling, and platform reliability.",
  },
  {
    id: "observability",
    title: "Observability",
    body: "Grafana, Prometheus, metrics design, alerting strategy, dashboards, and operational visibility.",
  },
  {
    id: "performance",
    title: "Performance Engineering",
    body: "JVM analysis, capacity planning, bottleneck identification, workload tuning, and infrastructure optimization.",
  },
  {
    id: "cloud",
    title: "Cloud Infrastructure",
    body: "AWS, EKS, automation, infrastructure architecture, reliability, and operational excellence.",
  },
  {
    id: "finops",
    title: "FinOps",
    body: "Rightsizing, utilization analysis, cost optimization, and cloud efficiency.",
  },
  {
    id: "security",
    title: "Security & Governance",
    body: "Infrastructure security reviews, threat modeling, operational guardrails, risk analysis, and production readiness.",
  },
];

export const PHILOSOPHY: Principle[] = [
  {
    id: "measure",
    title: "Measure Before Optimizing",
    body: "Performance work starts with evidence, not assumptions. Every optimization begins with measurement and ends with validation.",
  },
  {
    id: "reliability",
    title: "Reliability Beats Cleverness",
    body: "The best solution is often the one operators can understand during an incident. Simplicity scales better than complexity.",
  },
  {
    id: "systems",
    title: "Build Systems, Not Heroics",
    body: "Great engineers solve problems. Exceptional engineers build systems that prevent the same problem from recurring.",
  },
];

export const CREDENTIALS: Credential[] = [
  {
    id: "cka",
    name: "Certified Kubernetes Administrator",
    shortName: "CKA",
    issuer: "The Linux Foundation / CNCF",
    credId: "LF-wpfd3rymwl",
    validUntil: "April 2028",
    badge: "/assets/badges/cka.png",
    verifyUrl: "https://training.linuxfoundation.org/certification/verify/",
    status: "active",
  },
  {
    id: "ckad",
    name: "Certified Kubernetes Application Developer",
    shortName: "CKAD",
    issuer: "The Linux Foundation / CNCF",
    credId: "LF-sn32wzen3o",
    validUntil: "April 2028",
    badge: "/assets/badges/ckad.png",
    verifyUrl: "https://training.linuxfoundation.org/certification/verify/",
    status: "active",
  },
  {
    id: "cks",
    name: "Certified Kubernetes Security Specialist",
    shortName: "CKS",
    issuer: "The Linux Foundation / CNCF",
    credId: null,
    validUntil: null,
    badge: "/assets/badges/cks.png",
    verifyUrl: null,
    status: "in-progress",
    statusLabel: "In progress · 2026",
  },
];

export const CASE_STUDIES: CaseStudy[] = [
  // ---- Reliability & Incident Response ----
  {
    id: "monitoring-blind-spot",
    theme: "Reliability & Incident Response",
    title: "Closing a 12-Hour Monitoring Blind Spot",
    summary:
      "An unreviewed IaC change silently deleted production alert rules. I root-caused it and led the prevention program.",
    detail:
      "An unreviewed infrastructure-as-code run reorganizing monitoring folders deleted production alert rules as a side effect, and a revenue-critical service went down with no one paged for roughly twelve hours — the heartbeat alert that should have caught it no longer existed. I reconstructed the timeline, root-caused the folder-to-alert coupling, and ran the manual restoration critical-path first. I then led the prevention program: PR-time validation that detects destructive changes to alert resources in the plan, lifecycle guards on critical rules, state separation so monitoring is not coupled to general infrastructure, automated alert backups, and required review on monitoring changes. Console-managed alerts and dashboards were migrated into version control so they can no longer be changed silently.",
    tags: ["Incident Response", "Terraform", "Grafana", "Governance"],
  },
  {
    id: "auto-escalation",
    theme: "Reliability & Incident Response",
    title: "Auto-Escalation for Unacknowledged Critical Alerts",
    summary:
      "Critical alerts that no one triaged never escalated. I designed a time-based bridge that pages anyway.",
    detail:
      "Alerts defaulted to low priority and relied on a human to manually open an incident before any paging workflow began, so an alert that fired but went untriaged escalated to no one. I designed a time-based bridge: an unacknowledged critical alert auto-creates the incident after a fifteen-minute window, handing off to the existing escalation automation. The design resolved an architectural ambiguity about which system owns escalation timing, consolidating it into one layer rather than two competing ones.",
    tags: ["Alerting", "Escalation", "On-Call"],
  },
  {
    id: "problem-management",
    theme: "Reliability & Incident Response",
    title: "Standing Up a Problem-Management Practice",
    summary:
      "Recurring incidents kept getting solved and forgotten. I built the practice that turned them into tracked problems with corrective actions.",
    detail:
      "Incident response was resolving symptoms — a restart here, a reboot there — without anyone owning the recurrence. I stood up a structured problem-management practice on top of the incident process: root-cause analysis with corrective actions, formal known-error documentation for issues with no immediate fix, and consolidation of clusters of related recurring incidents into single tracked problem records so action items did not scatter across dozens of tickets. The practice fed a recurring report to leadership, making the pattern of recurrence visible rather than absorbed silently by on-call.",
    tags: ["Problem Management", "RCA", "ITIL", "Reliability"],
  },

  // ---- Observability ----
  {
    id: "vpn-coverage",
    theme: "Observability",
    title: "From 10% to 100% VPN Tunnel Coverage",
    summary:
      "Monitoring looked complete but covered one tunnel in ten. I rebuilt it to cover every tunnel regardless of routing.",
    detail:
      "Site-to-site VPN monitoring was built on a BGP metric, but BGP was enabled on only one of ten tunnels — the rest used static routes — so the alerting silently covered ten percent of connections while appearing complete; the dark tunnels carried production database and customer-site traffic. Acting on a network engineer's discovery rather than defending the original design, I pivoted from the routing-protocol metric to a traffic-based one on the gateway resource, which covers every tunnel regardless of protocol. I built per-connection alerts across both regions, retired the obsolete BGP alerts, and rebuilt the dashboard with human-readable site names. Coverage went from one tunnel to all ten.",
    tags: ["Monitoring", "Networking", "Grafana"],
  },
  {
    id: "observability-engineering",
    theme: "Observability",
    title: "Observability Engineering for Cloud Platforms",
    summary:
      "Grafana alerting through GitOps, PromQL against production schemas, and diagnosis of metric-pipeline gaps.",
    detail:
      "Designed and shipped a Grafana alerting suite through a GitOps pipeline, built PromQL against live production metric schemas, and diagnosed metric-pipeline gaps — missing ServiceMonitors and scrape coverage — that were blocking operational dashboards. Related work included synthetic monitoring across a dozen critical payment services with a live operational dashboard, and quorum-and-witness monitoring for a high-availability database cluster on a previously blind, revenue-critical failure path, with correct priority-based routing.",
    tags: ["Grafana", "Prometheus", "PromQL", "GitOps"],
  },
  {
    id: "dependency-monitoring",
    theme: "Observability",
    title: "Monitoring 30+ External Dependencies",
    summary:
      "A major cloud outage took hours to attribute. I authored the epic to systematically watch every upstream provider.",
    detail:
      "A major cloud-provider outage hit both directly and through third parties on the same provider, and it took hours to identify the upstream as the root cause because vendor status was checked by hand during incidents. I authored the epic and split it across the team, inventorying and classifying thirty-plus external dependencies — cloud, payment, identity, and ops providers — by criticality. The design was tiered: subscription-based ingestion into the ticketing system for vendors that support it, synthetic and blackbox checks for those that do not, plus dependency mapping so an upstream alert states which internal services it affects. It was designed for sub-five-minute detection.",
    tags: ["Reliability", "Dependency Mapping", "Synthetic Monitoring"],
  },

  // ---- FinOps & Cost ----
  {
    id: "finops",
    theme: "FinOps & Cost",
    title: "Kubernetes FinOps at Fleet Scale",
    summary:
      "Governance and rollout of automated workload rightsizing across a multi-cluster EKS fleet.",
    detail:
      "Led governance and rollout of an automated workload rightsizing platform across a multi-cluster EKS fleet. Authored the deployment safety policy (CPU floor enforcement by environment tier), built the fleet-wide analysis identifying a seven-figure annual savings opportunity, and ran the readiness review that separated deploy-ready services from at-risk ones.",
    tags: ["Kubernetes", "FinOps", "EKS"],
  },
  {
    id: "observability-cost",
    theme: "FinOps & Cost",
    title: "Observability Cost Attribution & Reduction",
    summary:
      "Observability spend rose with no per-service visibility. I led the attribution analysis and reduction plan.",
    detail:
      "Monthly observability spend climbed — a five-figure log-cost spike was the trigger — but billing only exposed cluster-level aggregation, making attribution hard. I led the cost analysis and reduction plan: identify the top log producers, audit metric cardinality for unbounded labels, and sequence quick wins (log-level fixes, sampling non-critical logs, dropping unused metrics) ahead of architectural changes like tiered retention by service criticality. Recognizing that one production cluster dominated spend let the plan capture most of the opportunity without waiting on perfect per-service tagging.",
    tags: ["FinOps", "Grafana Cloud", "Cardinality"],
  },

  // ---- Infrastructure & Automation ----
  {
    id: "security",
    theme: "Infrastructure & Automation",
    title: "Security Governance for a Write-Mode Cloud Controller",
    summary:
      "SSP and STRIDE threat model for a controller with write access to production clusters.",
    detail:
      "Authored the System Security Plan and STRIDE threat model for a controller with write access to production Kubernetes clusters. Carried it through six independent review bodies — AppSec, SRE, CloudOps, Quality Engineering, Architecture, and Performance — including formal risk acceptance for vendor-constrained threats.",
    tags: ["Security", "Threat Modeling", "Governance"],
  },
  {
    id: "ip-whitelist",
    theme: "Infrastructure & Automation",
    title: "Self-Service IP Allowlisting via GitOps",
    summary:
      "Turned a manual load-balancer ACL ticket into a validated, auditable GitOps flow — without bypassing approvals.",
    detail:
      "Allowlisting an IP on the load-balancer ACL was a manual ticket process. I built a Python automation around the existing Terraform repository that validates IP and CIDR syntax, detects duplicates and CIDR overlaps against the live config, injects the entry into the correct block, and routes through the existing pipeline so approval and review are preserved rather than bypassed by a direct API write. It uses locking to avoid races. I deliberately rejected a heavier design that would have orchestrated everything in a serverless function, letting the pipeline do the heavy lifting instead — the simpler system is the one operators can reason about.",
    tags: ["GitOps", "Terraform", "Python", "Automation"],
  },
  {
    id: "grafana-governance",
    theme: "Infrastructure & Automation",
    title: "Terraform-Managed Observability Backbone",
    summary:
      "Brought ~95 dashboards across 15 teams under version control with per-team isolation and least-privilege access.",
    detail:
      "Console-managed dashboards and folders drifted, were not version-controlled, and could be deleted without trace. I built and operate a modular Terraform system that manages observability by team: a central orchestration layer loading per-team dashboard definitions automatically, plus a module that provisions teams, folders, and least-privilege folder permissions. It manages roughly ninety-five dashboards across fifteen teams under version control with per-team folder isolation — the platform the rest of the governance work sits on.",
    tags: ["Terraform", "Grafana", "IaC", "Governance"],
  },
  {
    id: "arm64",
    theme: "Infrastructure & Automation",
    title: "ARM64 Migration Readiness Assessment",
    summary:
      "Fleet-wide readiness classification for ARM64 adoption across containerized workloads.",
    detail:
      "Assessed application readiness for ARM64 adoption across containerized cloud workloads, classifying services by migration risk, identifying toolchain and binary-compatibility blockers, and quantifying the infrastructure cost-efficiency opportunity.",
    tags: ["ARM64", "Migration", "Cost Efficiency"],
  },

  // ---- Strategy & Leadership ----
  {
    id: "maturity-model",
    theme: "Strategy & Leadership",
    title: "A Monitoring Maturity Model, Presented to the CTO",
    summary:
      "Built a five-level maturity model that ranked services, prioritized by financial impact, and tracked the team's progress upward — taken to the CTO.",
    detail:
      "Monitoring coverage across the platform was uneven and there was no shared way to talk about how mature any given service was. I built a five-level monitoring maturity model, scored every service against it, and used it to drive a prioritization decision made jointly with partner teams: services with direct financial impact if they failed were advanced first, while lower-impact services moved up the scale on a longer horizon. The model became the framing for a read-out to the CTO and for a recurring progress report to leadership, turning scattered monitoring work into a legible roadmap with a direction and a finish line.",
    tags: ["Strategy", "Maturity Model", "Stakeholder Communication"],
  },
];

export const IMPACT: string[] = [
  "Root-caused a 12-hour production monitoring blind spot and led the prevention program that closed the failure mode.",
  "Took site-to-site VPN tunnel monitoring from 10% to 100% coverage after discovering most tunnels were dark.",
  "Led analysis supporting a seven-figure annual infrastructure savings opportunity across a multi-cluster EKS fleet.",
  "Brought ~95 dashboards across 15 teams under version-controlled, least-privilege Terraform management.",
  "Authored production security reviews for Kubernetes controllers with elevated cluster permissions.",
  "Certified Kubernetes Administrator (CKA) and Certified Kubernetes Application Developer (CKAD).",
];

export const NOW = {
  statement:
    "Building at the intersection of cloud infrastructure, performance engineering, and emerging AI workloads.",
  focus: [
    "Kubernetes performance and scalability",
    "Observability and reliability engineering",
    "Cloud cost optimization and FinOps",
    "AI infrastructure foundations",
  ],
  education:
    "BS in Applied Computing (Artificial Intelligence) · University of Arizona",
  certifications: ["CKS", "AWS Solutions Architect Associate"],
};

// The layout renders cards from this array; routing lives under /notes/<slug>.
export const NOTES: Note[] = [
  {
    slug: "known-error",
    title: 'When "No Root Cause Found" Is the Right Answer',
    date: "2026-06-10",
    summary:
      "Closing an incident as a known error can be sound engineering or quiet surrender. The difference is whether you can defend the decision.",
    href: "/notes/known-error/",
  },
  {
    slug: "averages-lie",
    title: "Why Averages Lie in Capacity Planning",
    date: "2026-06-09",
    summary:
      "Averaging percentiles across unequal populations produces numbers that look precise and mean nothing. Aggregate per entity first.",
    href: "/notes/averages-lie/",
  },
  {
    slug: "arm64-lessons",
    title: "Lessons from an ARM64 Migration",
    date: "2026-05-28",
    summary:
      "Moving a fleet to ARM64 is rarely blocked by the application. It is blocked by the things underneath it — the build, the binaries, the long tail nobody owns.",
    href: "/notes/arm64-lessons/",
  },
  {
    slug: "finops-guardrails",
    title: "Designing Safe FinOps Guardrails",
    date: "2026-06-09",
    summary:
      "Cost automation is automation with write access to production. Five guardrails that let it earn trust instead of demanding it.",
    href: "/notes/finops-guardrails/",
  },
  // Staged future titles — uncomment and write the page when ready:
  // { slug: "arm64-lessons", title: "Lessons from an ARM64 migration", date: "", summary: "", href: "/notes/arm64-lessons/" },
  // { slug: "in-place-resize", title: "Understanding Kubernetes in-place pod resize", date: "", summary: "", href: "/notes/in-place-resize/" },
  // { slug: "what-perf-means", title: "What performance engineering actually means", date: "", summary: "", href: "/notes/what-perf-means/" },
  // External posts (e.g. Medium) work too: use the absolute URL as href and
  // the card renders as an external link automatically.
];

export const NOTES_EMPTY_STATE =
  "Technical notes coming soon — Kubernetes internals, JVM performance, capacity planning, and PromQL patterns.";
