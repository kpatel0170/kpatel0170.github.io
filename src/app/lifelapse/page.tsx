"use client";

import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import { timelineFrontmatter, timelineSections } from "@/content/timeline";
import { Timeline } from "@/components/timeline";
import { TimelineItem } from "@/components/timeline-item";

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
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
      {/* Access indicator */}
      <div className="flex justify-between items-center bg-gradient-to-r from-green-500/10 to-blue-500/10 border border-green-500/20 rounded-lg p-4 mb-8">
        <div className="flex items-center gap-3">
          <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
          <p className="text-green-400 font-medium">
            🔐 Protected Page - Key Access Verified
          </p>
        </div>
        <button
          onClick={() => router.push("/lifelapse/login")}
          className="text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          Change Key
        </button>
      </div>

      {/* Page Header */}
      <div className="text-center space-y-4 mb-12">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
          {timelineFrontmatter.title}
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          {timelineFrontmatter.description}
        </p>
      </div>

      {/* Timeline */}
      <Timeline>
        {timelineSections.map((section, index) => (
          <TimelineItem
            key={index}
            title={section.heading}
            description={section.content}
            images={section.images}
          />
        ))}
      </Timeline>
    </div>
  );
}
