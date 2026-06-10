"use client";

import { useState } from "react";
import type { Credential } from "@/content/data";

/**
 * Badge image slot. If /assets/badges/{id}.png is missing, falls back to a
 * styled monogram tile — never a broken image. In-progress credentials render
 * desaturated.
 */
export default function CredentialBadge({ cred }: { cred: Credential }) {
  const [failed, setFailed] = useState(false);
  const inProgress = cred.status === "in-progress";

  if (failed) {
    return (
      <div
        role="img"
        aria-label={`${cred.shortName} badge placeholder`}
        className={`flex h-[96px] w-[96px] items-center justify-center rounded-lg border-2 border-line bg-bg font-display text-xl font-bold ${
          inProgress ? "text-faint" : "text-accent"
        }`}
      >
        {cred.shortName}
      </div>
    );
  }

  return (
    // eslint-disable-next-line @next/next/no-img-element -- static export; explicit dims prevent CLS
    <img
      src={cred.badge}
      alt={`${cred.name} badge`}
      width={96}
      height={96}
      loading="lazy"
      decoding="async"
      onError={() => setFailed(true)}
      className={`h-[96px] w-[96px] rounded-lg ${
        inProgress ? "badge-desaturated" : ""
      }`}
    />
  );
}
