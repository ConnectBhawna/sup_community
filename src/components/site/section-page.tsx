import type { ReactNode } from "react";

import { SiteFrame } from "./site-frame";

type SectionPageProps = {
  badge: string;
  title: string;
  description: string;
  highlights: string[];
  children?: ReactNode;
};

export function SectionPage({
  badge,
  title,
  description,
  highlights,
  children,
}: SectionPageProps) {
  return (
    <SiteFrame>
      <section className="flex flex-1 items-center py-10 lg:py-14">
        <div className="hero-shell relative grid w-full gap-8 overflow-hidden rounded-[28px] border border-black/8 bg-[rgba(255,255,255,0.8)] p-7 lg:grid-cols-[1.02fr_0.98fr] lg:p-10">
          <div className="flex flex-col justify-center">
            <p className="inline-flex w-fit rounded-full bg-black px-4 py-2 text-sm font-semibold uppercase tracking-[0.24em] text-white">
              {badge}
            </p>
            <h1 className="mt-7 max-w-4xl text-5xl font-semibold tracking-[-0.06em] text-[var(--foreground)] sm:text-6xl lg:text-[5.1rem] lg:leading-[0.97]">
              {title}
            </h1>
            <p className="mt-7 max-w-3xl text-lg leading-8 text-[var(--muted-foreground)] sm:text-xl">
              {description}
            </p>
          </div>

          <div className="grid gap-4 self-stretch sm:grid-cols-2">
            {highlights.map((item, index) => (
              <article
                key={item}
                className="hero-card flex min-h-[170px] flex-col justify-between rounded-[24px] p-6"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-[16px] bg-black text-sm font-semibold text-white">
                  0{index + 1}
                </div>
                <p className="mt-10 text-xl font-semibold leading-8 text-[var(--foreground)]">
                  {item}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {children}
    </SiteFrame>
  );
}
