import Image from "next/image";

import { SiteFrame } from "@/components/site/site-frame";

const filters = [
  "Topic",
  "Beginner",
  "Intermediate",
  "Advanced",
  "Hide Completed",
  "Most Popular",
];

const lessons = [
  {
    title: "Keeping Deployments Safe with Policy Gates",
    author: "Bhawna Chauhan",
    level: "Beginner",
    artTone: "bg-[#f7f7f4]",
    accentTone: "bg-[#e9f0e6]",
  },
  {
    title: "Approvals That Fit Modern CI/CD Releases",
    author: "Platform Team",
    level: "Beginner",
    artTone: "bg-[#eef1ea]",
    accentTone: "bg-[#ffffff]",
  },
  {
    title: "Shaping Resilient Incident Response Workflows",
    author: "Ops Guild",
    level: "Intermediate",
    artTone: "bg-[#111214]",
    accentTone: "bg-[#f0f0eb]",
  },
  {
    title: "Finding the Right Rollback Path Automatically",
    author: "Release Studio",
    level: "Beginner",
    artTone: "bg-[#edf4de]",
    accentTone: "bg-[#f7f7f3]",
  },
];

function LessonArt({
  dark,
  tone,
  accent,
}: {
  dark?: boolean;
  tone: string;
  accent: string;
}) {
  return (
    <div
      className={`relative flex h-[260px] items-center justify-center overflow-hidden rounded-t-[24px] ${tone}`}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.28),transparent_24%)]" />
      <div
        className={`relative flex h-28 w-28 items-center justify-center rounded-[28px] border ${
          dark ? "border-white/10 bg-white/6" : "border-black/8 bg-white/70"
        } ${accent}`}
      >
        <div
          className={`h-14 w-14 rounded-full border-8 ${
            dark ? "border-[#d8f57a]" : "border-[#d6ef82]"
          }`}
        />
        <div
          className={`absolute h-3.5 w-14 rounded-full ${
            dark ? "bg-white/10" : "bg-black/10"
          }`}
        />
      </div>
    </div>
  );
}

export default function LessonsPage() {
  return (
    <SiteFrame>
      <section className="pb-10 pt-10 lg:pb-14 lg:pt-14">
        <div className="overflow-hidden rounded-[28px] border border-black/8 bg-[rgba(255,255,255,0.82)] p-7 shadow-[0_30px_100px_rgba(0,0,0,0.08)] lg:p-10">
          <div className="max-w-4xl">
            <h1 className="text-5xl font-semibold tracking-[-0.06em] text-[var(--foreground)] sm:text-6xl">
              Lessons
            </h1>
            <p className="mt-5 max-w-3xl text-xl leading-8 text-[var(--muted-foreground)]">
              Learn AI-first platform engineering through interactive lessons
              on workflows, approvals, incidents, and production-safe
              automation.
            </p>
          </div>

          <div className="mt-10 border-b border-black/8">
            <div className="flex flex-wrap items-center gap-8">
              <button
                type="button"
                className="border-b-2 border-black pb-4 text-lg font-semibold text-[var(--foreground)]"
              >
                Explore
              </button>
              <button
                type="button"
                className="pb-4 text-lg font-medium text-black/46 transition hover:text-[var(--foreground)]"
              >
                Campaigns
              </button>
            </div>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            {filters.map((filter, index) => (
              <div key={filter} className="flex items-center gap-4">
                <button
                  type="button"
                  className="inline-flex h-14 items-center rounded-full border border-black/8 bg-white/70 px-6 text-lg font-medium text-black/68 transition hover:bg-white"
                >
                  {filter}
                  {index === 0 || index === filters.length - 1 ? (
                    <span className="ml-3 text-sm">⌄</span>
                  ) : null}
                </button>
                {index === 0 || index === 2 || index === 4 ? (
                  <span className="hidden h-8 w-px bg-black/10 lg:block" />
                ) : null}
              </div>
            ))}
          </div>

          <div className="mt-12">
            <div className="flex items-end gap-3">
              <h2 className="text-3xl font-semibold tracking-[-0.04em] text-[var(--foreground)]">
                Product Lessons
              </h2>
              <span className="pb-1 text-2xl text-black/44">14</span>
            </div>

            <div className="mt-8 grid gap-6 xl:grid-cols-4 md:grid-cols-2">
              {lessons.map((lesson, index) => {
                const dark = index === 2;
                return (
                  <article
                    key={lesson.title}
                    className="overflow-hidden rounded-[24px] border border-black/8 bg-[#fcfcfa] shadow-[0_20px_60px_rgba(0,0,0,0.08)]"
                  >
                    <LessonArt
                      dark={dark}
                      tone={lesson.artTone}
                      accent={lesson.accentTone}
                    />

                    <div className="p-6">
                      <span className="inline-flex rounded-full bg-[#e6f3d0] px-4 py-2 text-sm font-semibold text-[#27684f]">
                        {lesson.level}
                      </span>
                      <h3 className="mt-5 text-[2rem] font-semibold leading-[1.15] tracking-[-0.04em] text-[var(--foreground)]">
                        {lesson.title}
                      </h3>

                      <div className="mt-7 flex items-center gap-3">
                        <div className="h-12 w-12 overflow-hidden rounded-full border border-black/8 bg-white">
                          <Image
                            src="/minilistic_professional_pic.png"
                            alt={lesson.author}
                            width={48}
                            height={48}
                            className="h-full w-full object-cover"
                          />
                        </div>
                        <p className="text-lg text-black/58">
                          Written by {lesson.author}
                        </p>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </SiteFrame>
  );
}
