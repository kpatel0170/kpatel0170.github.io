import React from "react";
import Image from "next/image";
import { cva } from "class-variance-authority";
import { ArrowUpRight, type LucideIcon } from "lucide-react";
import ListItem from "@/components/list-item";
import Reveal from "@/components/reveal";
import { cn } from "@/lib/utils";

export type TimelineStatus = "completed" | "in-progress" | "pending";

/* Dates that describe something still happening are shown as the current step. */
const ONGOING = /present|expected|current/i;

export const statusFromDate = (date?: string): TimelineStatus =>
  date && ONGOING.test(date) ? "in-progress" : "completed";

const iconVariants = cva(
  "relative z-10 flex size-10 items-center justify-center rounded-full [&>svg]:size-5",
  {
    variants: {
      status: {
        completed: "border border-brand/60 bg-background text-brand",
        "in-progress": "bg-brand text-background ring-4 ring-brand/20",
        pending: "border border-border bg-background text-subtle-foreground"
      }
    },
    defaultVariants: { status: "completed" }
  }
);

const connectorVariants = cva(
  "absolute top-12 bottom-0 left-5 w-px group-last:hidden",
  {
    variants: {
      status: {
        completed: "bg-brand/50",
        "in-progress": "bg-gradient-to-b from-brand to-border",
        pending: "bg-border"
      }
    },
    defaultVariants: { status: "completed" }
  }
);

/* The ordered list. Each child is a TimelineItem, so the list stays valid HTML. */
export const Timeline = ({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLOListElement>) => (
  <ol aria-label="Timeline" className={cn("w-full", className)} {...props}>
    {children}
  </ol>
);

interface TimelineItemProps {
  title: string;
  subtitle?: string;
  /** Shown in the date column on desktop and above the title on mobile. */
  date?: string;
  /** A lucide icon element, rendered inside the status circle. */
  icon?: React.ReactNode;
  /** Defaults from the date: ongoing ranges show as in-progress. */
  status?: TimelineStatus;
  description?: string[];
  images?: string[];
  /** Renders a "Learn more" link when set. Empty strings and "#" count as absent. */
  url?: string;
  children?: React.ReactNode;
}

export const TimelineItem = ({
  title,
  subtitle,
  date,
  icon,
  status,
  description = [],
  images,
  url,
  children
}: TimelineItemProps) => {
  const resolved = status ?? statusFromDate(date);
  const isCurrent = resolved === "in-progress";
  const hasDate = Boolean(date);

  return (
    <li aria-current={isCurrent ? "step" : undefined} className="group">
      <Reveal className="relative pb-14 group-last:pb-0">
        <span
          aria-hidden="true"
          className={cn(
            connectorVariants({ status: resolved }),
            hasDate ? "md:left-[12.75rem]" : "md:left-5"
          )}
        />

        <div
          className={cn(
            "grid grid-cols-[2.5rem_minmax(0,1fr)] gap-x-4 md:gap-x-6",
            hasDate
              ? "md:grid-cols-[10rem_2.5rem_minmax(0,1fr)]"
              : "md:grid-cols-[2.5rem_minmax(0,1fr)]"
          )}
        >
          {date && (
            <time className="col-start-2 row-start-1 pt-1.5 font-mono text-xs tracking-wider text-subtle-foreground uppercase md:col-start-1 md:text-right">
              {date}
            </time>
          )}

          <span
            className={cn(
              iconVariants({ status: resolved }),
              "col-start-1 row-start-1",
              hasDate ? "md:col-start-2" : "md:col-start-1"
            )}
          >
            {icon ?? <span aria-hidden="true" className="size-2 rounded-full bg-current" />}
          </span>

          <div
            className={cn(
              "min-w-0",
              hasDate ? "row-start-2 md:row-start-1" : "row-start-1",
              "col-start-2",
              hasDate ? "md:col-start-3" : "md:col-start-2"
            )}
          >
            <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
              <h2 className="text-xl leading-snug font-semibold tracking-tight transition-colors duration-300 group-hover:text-brand md:text-2xl">
                {title}
              </h2>
              {isCurrent && (
                <span className="font-mono text-[0.7rem] tracking-wider text-brand uppercase">
                  Current
                </span>
              )}
            </div>
            {subtitle && (
              <p className="mt-1 text-sm font-medium text-foreground/90">{subtitle}</p>
            )}

            {description.length > 0 && (
              <ul className="mt-4 list-disc space-y-2 pl-5 leading-relaxed text-muted-foreground marker:text-subtle-foreground">
                <ListItem items={description} />
              </ul>
            )}

            {images && images.length > 0 && (
              <div
                className={cn(
                  "mt-6 grid gap-3",
                  images.length > 1 && "sm:grid-cols-2",
                  images.length > 2 && "xl:grid-cols-3"
                )}
              >
                {images.map((imageSrc, index) => (
                  <figure
                    key={imageSrc}
                    className="overflow-hidden rounded-md border border-border bg-muted"
                  >
                    <Image
                      src={imageSrc}
                      alt={`${title}, image ${index + 1}`}
                      width={1200}
                      height={800}
                      className="h-auto w-full object-contain transition-transform duration-500 ease-out hover:scale-[1.02]"
                      onError={(event) => {
                        const figure = event.currentTarget.closest("figure");
                        if (figure) figure.style.display = "none";
                      }}
                    />
                  </figure>
                ))}
              </div>
            )}

            {children}

            {url && url !== "#" && (
              <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="link-underline mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-foreground"
              >
                Learn more
                <ArrowUpRight className="size-4" aria-hidden="true" />
              </a>
            )}
          </div>
        </div>
      </Reveal>
    </li>
  );
};

/*
 * A labeled block inside an item (awards, skills, stack). The "award" tone
 * gives recognition a tinted panel with an amber accent.
 */
export const TimelineDetail = ({
  label,
  icon: Icon,
  tone = "default",
  children
}: {
  label: string;
  icon: LucideIcon;
  tone?: "default" | "award";
  children: React.ReactNode;
}) =>
  tone === "award" ? (
    <section className="mt-6 space-y-3 rounded-md border border-l-2 border-award/30 border-l-award bg-award/10 p-4 md:p-5">
      <h3 className="flex items-center gap-2 text-base font-semibold text-award">
        <Icon className="size-5" aria-hidden="true" />
        {label}
      </h3>
      {children}
    </section>
  ) : (
    <section className="mt-6 border-t border-border pt-5">
      <h3 className="mb-3 flex items-center gap-2 font-mono text-xs tracking-wider text-subtle-foreground uppercase">
        <Icon className="size-3.5" aria-hidden="true" />
        {label}
      </h3>
      {children}
    </section>
  );
