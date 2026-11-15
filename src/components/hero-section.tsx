import type { CSSProperties } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import Icon from "@/components/icon";

interface SocialLink {
  name: string;
  icon: string;
  url: string;
}

interface HeroSectionProps {
  data: {
    heading: string;
    list: string[];
    sociallinks: SocialLink[];
  };
}

// Mobile stacks the photo on top, centered. Desktop puts the photo right of the text.
const delay = (ms: number) => ({ "--delay": `${ms}ms` }) as CSSProperties;

// Sits on the layout's content grid, the same left and right edges as the nav
// and the sections below it. It fills the screen below the 65px header; the
// md:-mt-16 cancels the main padding on desktop so it starts right under the header.
const HeroSection = ({ data }: HeroSectionProps) => (
  <section className="relative flex min-h-[calc(100dvh-65px)] items-center md:-mt-16">
    <div className="flex w-full flex-col items-center justify-center gap-12 pb-28 text-center md:flex-row md:justify-between md:gap-16 md:pb-32 md:text-left">
      <div className="rise order-1 shrink-0 md:order-2" style={delay(0)}>
        <Image
          src="/profile-new.png"
          alt="Profile photo"
          width={480}
          height={480}
          priority
          className="size-64 rounded-full object-cover sm:size-72 md:size-80 lg:size-[22rem]"
        />
      </div>

      <div className="order-2 flex flex-col items-center md:order-1 md:items-start">
        <h1
          className="rise text-5xl leading-[1.05] font-semibold tracking-tight sm:text-6xl lg:text-7xl"
          style={delay(120)}
        >
          {data.heading}
        </h1>
        <ul
          className="rise mt-6 flex flex-col gap-2 text-lg text-muted-foreground md:text-xl"
          style={delay(220)}
        >
          {data.list.map((item) => (
            <li key={item}>
              <span aria-hidden="true" className="mr-2 text-subtle-foreground">
                &gt;
              </span>
              {item}
            </li>
          ))}
        </ul>

        <ul
          className="rise mt-10 flex items-center gap-6 md:gap-7"
          style={delay(320)}
        >
          {data.sociallinks.map((link) => (
            <li key={link.name}>
              <Link
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.name}
                className="block text-muted-foreground transition-colors duration-200 hover:text-brand"
              >
                <Icon name={link.icon} className="size-8 md:size-9" />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>

    <div className="absolute inset-x-0 bottom-6 flex justify-center md:bottom-8">
      <a
        href="#sections"
        aria-label="Scroll to sections"
        className="scroll-cue flex size-11 items-center justify-center rounded-full text-foreground transition-colors hover:text-brand"
      >
        <ChevronDown className="size-7" aria-hidden="true" />
      </a>
    </div>
  </section>
);

export default HeroSection;
