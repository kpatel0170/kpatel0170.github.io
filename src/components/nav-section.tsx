import Link from "next/link";
import { ArrowRight } from "lucide-react";

const destinations = [
  { href: "/education", label: "Education" },
  { href: "/experience", label: "Experience" },
  { href: "/projects", label: "Projects" },
  { href: "/resume", label: "Resume" }
];

// Full-width rows that link to each section page, numbered in order.
const NavSection = () => (
  <section id="sections" aria-label="Sections" className="scroll-mt-24">
    <ul className="border-b border-border">
      {destinations.map((item, index) => (
        <li key={item.href} className="border-t border-border">
          <Link
            href={item.href}
            className="group flex items-center gap-4 py-5 transition-colors md:py-6"
          >
            <span className="w-8 font-mono text-sm text-subtle-foreground">
              {String(index + 1).padStart(2, "0")}
            </span>
            <span className="flex-1 text-2xl font-semibold tracking-tight transition-colors group-hover:text-brand md:text-4xl">
              {item.label}
            </span>
            <ArrowRight
              aria-hidden="true"
              className="size-6 shrink-0 text-subtle-foreground transition-transform duration-200 group-hover:translate-x-1 group-hover:text-brand"
            />
          </Link>
        </li>
      ))}
    </ul>
  </section>
);

export default NavSection;
