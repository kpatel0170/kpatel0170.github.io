"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/education", label: "Education" },
  { href: "/experience", label: "Experience" },
  { href: "/projects", label: "Projects" },
  { href: "/resume", label: "Resume" }
];

// Mobile: a toggled panel under the header. Desktop: an always-visible row with an active underline.
const Navbar = () => {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const closeMenu = () => setOpen(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background">
      <div className="relative mx-auto flex h-16 max-w-5xl items-center justify-between px-5 md:px-10">
        <Link
          href="/"
          onClick={closeMenu}
          className="font-mono text-sm tracking-tight text-foreground transition-colors hover:text-brand"
        >
          @kpatel0170
        </Link>

        <button
          type="button"
          aria-expanded={open}
          aria-controls="site-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((value) => !value)}
          className="-mr-2 inline-flex size-10 items-center justify-center rounded-md text-foreground transition-colors hover:bg-accent md:hidden"
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>

        <nav
          id="site-nav"
          aria-label="Primary"
          className={`${
            open
              ? "rise absolute inset-x-0 top-full flex flex-col border-b border-border bg-background px-5 py-2"
              : "hidden"
          } md:static md:flex md:flex-row md:gap-8 md:border-0 md:bg-transparent md:p-0 md:shadow-none`}
        >
          {navLinks.map((link) => {
            const isActive =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href);

            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={closeMenu}
                aria-current={isActive ? "page" : undefined}
                className={`relative py-3 text-sm font-medium transition-colors md:py-6 ${
                  isActive
                    ? "text-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {link.label}
                {isActive && (
                  <span
                    aria-hidden="true"
                    className="absolute inset-x-0 bottom-0 hidden h-px bg-brand md:block"
                  />
                )}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
