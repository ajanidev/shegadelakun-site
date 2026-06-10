import Link from "next/link";
import { SITE } from "@/content/data";

const LINKS = [
  { href: "/#about", label: "About" },
  { href: "/#craft", label: "Craft" },
  { href: "/#philosophy", label: "Philosophy" },
  { href: "/#proof", label: "Proof" },
  { href: "/#now", label: "Now" },
  { href: "/#notes", label: "Notes" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-line bg-bg/85 backdrop-blur">
      <nav
        aria-label="Primary"
        className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4"
      >
        <Link
          href="/"
          className="font-display text-base font-semibold tracking-tight text-ink"
        >
          {SITE.name}
        </Link>
        <div className="flex items-center gap-6">
          <div className="hidden items-center gap-6 sm:flex">
            {LINKS.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="text-sm text-muted transition-colors hover:text-ink"
              >
                {l.label}
              </Link>
            ))}
          </div>
          <Link
            href="/#contact"
            className="rounded-md border border-accent/40 px-3 py-1.5 text-sm font-medium text-accent transition-colors hover:bg-accent/10"
          >
            Connect
          </Link>
        </div>
      </nav>
    </header>
  );
}
