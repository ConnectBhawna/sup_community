import type { ReactNode } from "react";

import { SiteFooter } from "./site-footer";
import { SiteHeader } from "./site-header";

export function SiteFrame({ children }: { children: ReactNode }) {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[var(--background)] text-[var(--foreground)]">
      <video
        className="absolute inset-0 h-full w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
      >
        <source src="/background_black_white.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.44)_0%,rgba(255,255,255,0.62)_100%)]" />

      <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-[1600px] flex-col px-4 pb-10 pt-4 sm:px-6 lg:px-8">
        <SiteHeader />
        {children}
        <SiteFooter />
      </div>
    </main>
  );
}
