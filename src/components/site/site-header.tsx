"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { navItems } from "./site-data";
import { SuperplaneMark } from "./superplane-mark";

export function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="nav-shell flex min-h-[76px] items-center gap-6 rounded-[22px] px-5 py-4 lg:px-7">
      <Link href="/" className="flex items-center gap-3 text-[var(--foreground)]">
        <div className="text-[var(--foreground)]">
          <SuperplaneMark />
        </div>
        <span className="text-[2rem] font-semibold tracking-[-0.05em] text-[var(--foreground)]">
          superplane
        </span>
      </Link>

      <nav className="hidden min-w-0 flex-1 items-center justify-center gap-7 xl:flex">
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          const baseClass = isActive
            ? "whitespace-nowrap text-sm font-semibold text-[var(--foreground)]"
            : "whitespace-nowrap text-sm font-medium text-black/68 transition hover:text-[var(--accent)]";

          if (item.disabled) {
            return (
              <span
                key={item.label}
                aria-disabled="true"
                className="cursor-not-allowed whitespace-nowrap text-sm font-medium text-black/32"
              >
                {item.label}
              </span>
            );
          }

          return (
            <Link
              key={item.label}
              href={item.href}
              className={baseClass}
            >
              {item.label}
            </Link>
          );
        })}
      </nav>

      <a
        href="https://docs.superplane.com/"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex h-12 shrink-0 items-center justify-center rounded-full border border-black/10 bg-black px-6 text-sm font-semibold text-white transition hover:bg-black/86"
      >
        Try superplane now
      </a>
    </header>
  );
}
