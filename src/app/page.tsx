"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";

import { SiteFrame } from "@/components/site/site-frame";

export default function Home() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMuted, setIsMuted] = useState(true);

  function handleReplay() {
    if (!videoRef.current) return;
    videoRef.current.currentTime = 0;
    void videoRef.current.play();
  }

  function handleToggleMute() {
    if (!videoRef.current) return;
    const nextMuted = !videoRef.current.muted;
    videoRef.current.muted = nextMuted;
    setIsMuted(nextMuted);
  }

  return (
    <SiteFrame>
      <section className="flex flex-1 items-center py-10 lg:py-14">
        <div className="hero-shell relative grid w-full gap-0 overflow-hidden rounded-[28px] border border-black/8 bg-[rgba(255,255,255,0.72)] lg:grid-cols-[1.08fr_0.92fr]">
          <video
            className="absolute inset-0 h-full w-full object-cover opacity-[0.18] blur-[2px]"
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
          >
            <source src="/superplane_review_video.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.88)_0%,rgba(248,248,248,0.74)_36%,rgba(248,248,248,0.48)_58%,rgba(255,255,255,0.66)_100%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_68%_16%,rgba(0,0,0,0.12),transparent_16%),radial-gradient(circle_at_76%_40%,rgba(0,0,0,0.06),transparent_18%),radial-gradient(circle_at_30%_22%,rgba(0,0,0,0.03),transparent_14%)]" />

          <div className="flex flex-col justify-center px-7 py-12 sm:px-10 lg:px-16 lg:py-18">
            <p className="relative z-10 text-sm font-semibold uppercase tracking-[0.3em] text-[var(--accent)]">
              Welcome to Superplane Community
            </p>

            <h1 className="relative z-10 mt-6 max-w-4xl text-5xl font-semibold tracking-[-0.06em] text-[var(--foreground)] sm:text-6xl xl:text-[5.7rem] xl:leading-[0.95]">
              Build DevOps workflows that run themselves
            </h1>

            <p className="relative z-10 mt-8 max-w-2xl text-lg leading-8 text-[var(--muted-foreground)] sm:text-xl">
              Learn how to connect GitHub, CI/CD, incidents, approvals and AI
              agents into one event-driven control plane.
            </p>

            <div className="relative z-10 mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/lessons"
                className="inline-flex h-15 items-center justify-center rounded-2xl bg-black px-8 text-base font-semibold text-white transition hover:bg-black/86"
              >
                Start Learning
              </Link>
              <Link
                href="/workflows"
                className="inline-flex h-15 items-center justify-center rounded-2xl border border-black/10 bg-white/42 px-8 text-base font-semibold text-[var(--foreground)] transition hover:bg-white/72"
              >
                Watch Overview
              </Link>
            </div>
          </div>

          <div className="relative z-10 flex min-h-[420px] items-center justify-center px-6 pb-8 pt-2 sm:px-10 lg:min-h-[640px] lg:px-12">
            <div className="hero-card w-full max-w-[640px] rounded-[26px] p-4">
              <div className="overflow-hidden rounded-[22px] border border-black/8">
                <video
                  ref={videoRef}
                  className="h-[300px] w-full object-cover sm:h-[380px] lg:h-[460px]"
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="auto"
                >
                  <source src="/superplane_review_video.mp4" type="video/mp4" />
                </video>
              </div>

              <div className="mt-4 flex items-center gap-6 text-black/66">
                <div className="flex items-center gap-6 text-black/66">
                  <button
                    type="button"
                    onClick={handleReplay}
                    className="inline-flex items-center gap-2 text-base transition hover:text-black"
                  >
                    <svg
                      aria-hidden="true"
                      viewBox="0 0 24 24"
                      className="h-5 w-5"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M4 12a8 8 0 1 0 2.34-5.66L4 8.67"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M4 4v4.67h4.67"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <span>Replay</span>
                  </button>

                  <button
                    type="button"
                    onClick={handleToggleMute}
                    className="inline-flex items-center gap-2 text-base transition hover:text-black"
                  >
                    <svg
                      aria-hidden="true"
                      viewBox="0 0 24 24"
                      className="h-5 w-5"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M11 5 6.5 9H3v6h3.5L11 19V5Z"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      {isMuted ? (
                        <>
                          <path
                            d="m15 9 6 6"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                          />
                          <path
                            d="m21 9-6 6"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                          />
                        </>
                      ) : (
                        <>
                          <path
                            d="M15 9.5a4.5 4.5 0 0 1 0 5"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                          />
                          <path
                            d="M17.8 6.8a8.5 8.5 0 0 1 0 10.4"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                          />
                        </>
                      )}
                    </svg>
                    <span>{isMuted ? "Unmute" : "Mute"}</span>
                  </button>
                </div>
              </div>
            </div>

            <div className="floating-note absolute bottom-2 right-2 flex items-center gap-4 rounded-[22px] px-5 py-4 sm:bottom-4 sm:right-4">
              <div className="h-14 w-14 overflow-hidden rounded-full border border-black/10">
                <Image
                  src="/minilistic_professional_pic.png"
                  alt="Bhawna Chauhan"
                  width={56}
                  height={56}
                  className="h-full w-full object-cover"
                />
              </div>
              <div>
                <p className="text-sm font-semibold text-[var(--foreground)]">
                  Bhawna Chauhan
                </p>
                <p className="mt-1 text-sm text-black/58">
                  Developer Relation
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-8 lg:pb-14">
        <div className="grid w-full gap-8 overflow-hidden rounded-[28px] border border-black/8 bg-[rgba(255,255,255,0.8)] p-6 shadow-[0_30px_100px_rgba(0,0,0,0.08)] lg:grid-cols-[0.92fr_1.08fr] lg:p-9">
          <div className="relative overflow-hidden rounded-[24px] border border-black/8 bg-[linear-gradient(180deg,rgba(18,18,18,0.9),rgba(24,24,24,0.96))]">
            <Image
              src="/overflow_photo.png"
              alt="Workflow gallery preview"
              width={1044}
              height={772}
              className="h-full w-full object-cover"
            />
          </div>

          <div className="flex flex-col justify-center px-2 py-2 lg:px-6">
            <p className="inline-flex w-fit rounded-full bg-black px-4 py-2 text-sm font-semibold uppercase tracking-[0.22em] text-white">
              Workflow Gallery
            </p>
            <h2 className="mt-7 max-w-3xl text-4xl font-semibold tracking-[-0.05em] text-[var(--foreground)] sm:text-5xl lg:text-[3.6rem] lg:leading-[1.02]">
              Learn by running production-style workflows
            </h2>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-[var(--muted-foreground)] sm:text-xl">
              Start with ready-made Superplane templates for policy-gated
              deployments, human approvals, incident automation, and rollback
              paths.
            </p>
            <Link
              href="/workflows"
              className="mt-8 inline-flex items-center gap-3 text-lg font-semibold text-[var(--foreground)] transition hover:gap-4"
            >
              <span>Explore Workflows</span>
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>
    </SiteFrame>
  );
}
