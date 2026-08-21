import { useEffect, useRef, useState } from "react";

const LINKS = [
  { href: "#fragrance", label: "Fragrance" },
  { href: "#story", label: "Story" },
  { href: "#notes", label: "Notes" },
  { href: "#experience", label: "Experience" },
];

export function Navbar() {
  const [solid, setSolid] = useState(false);
  const sentinel = useRef<HTMLDivElement>(null);

  // IntersectionObserver instead of a scroll handler: no per-frame work on the main thread.
  useEffect(() => {
    const el = sentinel.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => setSolid(!e.isIntersecting));
    io.observe(el);
    return () => io.disconnect();
  }, []);


  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ${
        solid ? "bg-background/75 backdrop-blur-md border-b border-border" : "bg-transparent"
      }`}
    >
      <nav
        aria-label="Primary"
        className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 md:px-10"
      >
        <a href="#top" className="text-sm tracking-[0.42em] font-medium">
          SARKAR
        </a>
        <ul className="hidden items-center gap-10 md:flex">
          {LINKS.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-[11px] uppercase tracking-[0.24em] text-muted-foreground transition-colors hover:text-foreground"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="#buy"
          className="border border-border px-4 py-2 text-[10px] uppercase tracking-[0.24em] transition-colors hover:bg-foreground hover:text-primary-foreground"
        >
          Buy Aqua
        </a>
      </nav>
    </header>
  );
}
