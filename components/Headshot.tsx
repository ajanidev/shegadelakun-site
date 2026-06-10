"use client";

import { useState } from "react";

/**
 * Optional headshot. If /assets/headshot.jpg is missing, renders nothing —
 * the About section reads cleanly as text-only, never a broken image.
 */
export default function Headshot({ src, alt }: { src: string; alt: string }) {
  const [failed, setFailed] = useState(false);
  if (failed) return null;
  return (
    // eslint-disable-next-line @next/next/no-img-element -- static export; explicit dims prevent CLS
    <img
      src={src}
      alt={alt}
      width={160}
      height={160}
      loading="lazy"
      decoding="async"
      onError={() => setFailed(true)}
      className="h-40 w-40 shrink-0 rounded-xl border border-line object-cover"
    />
  );
}
