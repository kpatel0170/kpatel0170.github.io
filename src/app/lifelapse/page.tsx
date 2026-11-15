"use client";

import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import { timelineFrontmatter, timelineSections } from "@/content/timeline";
import { Flag, Lock, LockOpen } from "lucide-react";
import { PageHeader } from "@/components/page-header";
import { Timeline, TimelineItem } from "@/components/timeline";

export default function LifelapsePage() {
  const router = useRouter();

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const keyParam = urlParams.get("key");
    const validKey =
      process.env.NEXT_PUBLIC_ACCESS_KEY || "lifelapse-access-2024";

    if (!keyParam || keyParam !== validKey) {
      router.push("/lifelapse/login");
    }
  }, [router]);

  return (
    <div className="mx-auto max-w-4xl">
      <div className="mb-10 flex items-center justify-between text-sm">
        <div className="flex items-center gap-2">
          <LockOpen className="size-4 text-brand" aria-hidden="true" />
          <span className="text-muted-foreground">Access verified</span>
        </div>
        <button
          type="button"
          onClick={() => router.push("/lifelapse/login")}
          className="link-underline text-muted-foreground transition-colors hover:text-foreground"
        >
          Change key
        </button>
      </div>

      <PageHeader
        eyebrow="Protected"
        icon={Lock}
        title={timelineFrontmatter.title}
        description={timelineFrontmatter.description}
      />

      <Timeline>
        {timelineSections.map((section, index) => (
          <TimelineItem
            key={index}
            title={section.heading}
            description={section.content}
            images={section.images}
            icon={<Flag />}
          />
        ))}
      </Timeline>
    </div>
  );
}
