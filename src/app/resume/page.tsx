import React from "react";
import { ArrowUpRight, FileText } from "lucide-react";

// Some mobile browsers do not render PDFs inline, so the open link is always shown.
// The PDF is never hidden behind a load event, because PDF viewers do not always report one.
export default function Resume() {
  return (
    <div className="rise space-y-8">
      <div className="flex items-end justify-between gap-4 border-b border-border pb-8">
        <div className="space-y-4">
          <p className="font-mono text-xs tracking-wider text-subtle-foreground uppercase">
            <span className="flex items-center gap-2">
              <FileText className="size-3.5" aria-hidden="true" />
              CV
            </span>
          </p>
          <h1 className="text-4xl font-semibold tracking-tight md:text-6xl">
            Resume
          </h1>
        </div>
        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="link-underline inline-flex shrink-0 items-center gap-1.5 pb-1 text-sm font-medium text-foreground"
        >
          Open PDF
          <ArrowUpRight className="size-4" aria-hidden="true" />
        </a>
      </div>

      <iframe
        src="/resume.pdf"
        title="Kartik Patel resume"
        className="h-[75vh] min-h-[480px] w-full overflow-hidden rounded-md border border-border bg-muted"
      />
    </div>
  );
}
