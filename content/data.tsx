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
  title: string;
  summary: string;
  detail: string;
  tags: string[];
}

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

// TODO: replace with your real public profiles before deploying.
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
  {
    id: "finops",
    title: "Kubernetes FinOps at Fleet Scale",
    summary:
      "Governance and rollout of automated workload rightsizing across a multi-cluster EKS fleet.",
    detail:
      "Led governance and rollout of an automated workload rightsizing platform across a multi-cluster EKS fleet. Authored the deployment safety policy (CPU floor enforcement by environment tier), built the fleet-wide analysis identifying a seven-figure annual savings opportunity, and ran the readiness review that separated deploy-ready services from at-risk ones.",
    tags: ["Kubernetes", "FinOps", "EKS"],
  },
  {
    id: "security",
    title: "Security Governance for a Write-Mode Cloud Controller",
    summary:
      "SSP and STRIDE threat model for a controller with write access to production clusters.",
    detail:
      "Authored the System Security Plan and STRIDE threat model for a controller with write access to production Kubernetes clusters. Carried it through six independent review bodies — AppSec, SRE, CloudOps, Quality Engineering, Architecture, and Performance — including formal risk acceptance for vendor-constrained threats.",
    tags: ["Security", "Threat Modeling", "Governance"],
  },
  {
    id: "observability",
    title: "Observability Engineering",
    summary:
      "Grafana alerting through GitOps, PromQL against production schemas, metric-pipeline diagnosis.",
    detail:
      "Designed and shipped a Grafana alerting suite through a GitOps pipeline, built PromQL against live production metric schemas, and diagnosed metric-pipeline gaps (missing ServiceMonitors, scrape coverage) blocking operational dashboards.",
    tags: ["Grafana", "Prometheus", "GitOps"],
  },
  {
    id: "arm64",
    title: "ARM64 Migration Readiness Assessment",
    summary:
      "Fleet-wide readiness classification for ARM64 adoption across containerized workloads.",
    detail:
      "Assessed application readiness for ARM64 adoption across containerized cloud workloads, classifying services by migration risk, identifying toolchain and binary-compatibility blockers, and quantifying the infrastructure cost-efficiency opportunity.",
    tags: ["ARM64", "Migration", "Cost Efficiency"],
  },
];

export const IMPACT: string[] = [
  "Led analysis supporting a seven-figure annual infrastructure savings opportunity.",
  "Drove Kubernetes rightsizing governance across a multi-cluster EKS fleet.",
  "Authored production security reviews for Kubernetes controllers with elevated cluster permissions.",
  "Designed observability and alerting workflows supporting operational decision-making.",
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
    slug: "averages-lie",
    title: "Why Averages Lie in Capacity Planning",
    date: "2026-06-09",
    summary:
      "Averaging percentiles across unequal populations produces numbers that look precise and mean nothing. Aggregate per entity first.",
    href: "/notes/averages-lie/",
  },
  // Staged future titles — uncomment and write the page when ready:
  // { slug: "arm64-lessons", title: "Lessons from an ARM64 migration", date: "", summary: "", href: "/notes/arm64-lessons/" },
  // { slug: "in-place-resize", title: "Understanding Kubernetes in-place pod resize", date: "", summary: "", href: "/notes/in-place-resize/" },
  // { slug: "finops-guardrails", title: "Designing safe FinOps guardrails", date: "", summary: "", href: "/notes/finops-guardrails/" },
  // { slug: "what-perf-means", title: "What performance engineering actually means", date: "", summary: "", href: "/notes/what-perf-means/" },
];

export const NOTES_EMPTY_STATE =
  "Technical notes coming soon — Kubernetes internals, JVM performance, capacity planning, and PromQL patterns.";
