"use client";

import { useState } from "react";

type PortraitFrameProps = {
  src?: string;
  alt?: string;
  campus?: boolean;
};

export function PortraitFrame({
  src = "/images/yogeshwar-sharma.jpg",
  alt = "Prof. Yogeshwar Sharma",
  campus = false,
}: PortraitFrameProps) {
  const [failed, setFailed] = useState(false);

  return (
    <figure className={`image-frame${campus ? " image-frame--campus" : ""}${failed ? " image-frame--fallback" : ""}`}>
      <div className="image-fallback" role="img" aria-label={campus ? "Motilal Nehru College image placeholder" : "Portrait placeholder for Prof. Yogeshwar Sharma"}>
        <span>{campus ? "MLNC" : "YS"}</span>
        <small>{campus ? "Institutional context" : "Portrait"}</small>
      </div>
      {!failed && (
        // A native image allows the neutral fallback to take over if a locally supplied asset is absent.
        // eslint-disable-next-line @next/next/no-img-element
        <img src={src} alt={alt} onError={() => setFailed(true)} />
      )}
      <figcaption>{campus ? "Motilal Nehru College · University of Delhi" : "Professor · Researcher · Principal"}</figcaption>
    </figure>
  );
}
