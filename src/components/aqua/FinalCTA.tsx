import bottle from "@/assets/7th.webp.asset.json";
import { Reveal } from "./reveal";

export function FinalCTA() {
  return (
    <Reveal as="section" className="relative border-t border-border overflow-hidden">
      <img
        src={bottle.url}
        width={823}
        height={823}
        loading="lazy"
        decoding="async"
        sizes="100vw"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover opacity-20"
      />
      <div
        className="absolute inset-0"
        style={{ background: "var(--gradient-veil)" }}
        aria-hidden="true"
      />
      <div className="relative mx-auto max-w-3xl px-5 py-28 text-center md:py-40">
        <h2 className="reveal text-4xl leading-tight md:text-6xl">Make freshness your signature.</h2>
        <p className="reveal mt-5 font-serif text-2xl italic text-accent">Meet SARKAR Aqua.</p>
        <a
          href="#buy"
          className="reveal mt-10 inline-flex min-h-12 items-center justify-center bg-foreground px-10 text-[11px] uppercase tracking-[0.24em] text-primary-foreground transition-opacity hover:opacity-85"
        >
          Shop Aqua
        </a>
      </div>
    </Reveal>
  );
}
