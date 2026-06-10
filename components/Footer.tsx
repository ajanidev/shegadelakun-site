import { SITE } from "@/content/data";

export default function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-3 px-6 py-8">
        <p className="text-sm text-faint">
          © {new Date().getFullYear()} {SITE.name} · {SITE.domain}
        </p>
        <p className="font-mono text-xs text-faint">
          zero JS frameworks beyond React · statically generated
        </p>
      </div>
    </footer>
  );
}
