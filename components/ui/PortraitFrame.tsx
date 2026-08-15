"use client";

import { useState } from "react";

type PortraitFrameProps = {
  src?: string;
  alt?: string;
  campus?: boolean;
  priority?: boolean;
  width?: number;
  height?: number;
};

export function PortraitFrame({
  src,
  alt = "Prof. Yogeshwar Sharma",
  campus = false,
  priority = false,
  width,
  height,
}: PortraitFrameProps) {
  const [failedSrc, setFailedSrc] = useState<string | null>(null);
  const resolvedSrc = src ?? (campus ? undefined : "/images/portrait.jpg");
  const failed = Boolean(resolvedSrc && failedSrc === resolvedSrc);
  const showFallback = !resolvedSrc || failed;
  const intrinsicWidth = width ?? (campus ? 1200 : 682);
  const intrinsicHeight = height ?? (campus ? 1304 : 1024);

  return (
    <figure className={`image-frame${campus ? " image-frame--campus" : ""}${showFallback ? " image-frame--fallback" : ""}`}>
      {showFallback && (
        <div className="image-fallback" role="img" aria-label={alt}>
          <span aria-hidden="true">{campus ? "MLNC" : "YS"}</span>
          <small aria-hidden="true">{campus ? "Institutional context" : "Portrait"}</small>
        </div>
      )}
      {resolvedSrc && !failed && (
        // A native image allows the neutral fallback to take over if a locally supplied asset is absent.
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={resolvedSrc}
          alt={alt}
          width={intrinsicWidth}
          height={intrinsicHeight}
          loading={priority ? "eager" : "lazy"}
          fetchPriority={priority ? "high" : undefined}
          decoding="async"
          onError={() => setFailedSrc(resolvedSrc)}
        />
      )}
      {campus && (
        <figcaption>Motilal Nehru College · University of Delhi</figcaption>
      )}
    </figure>
  );
}
