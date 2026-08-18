import heroAsset from "@/assets/packaging_2.webp.asset.json";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden" style={{ background: "var(--gradient-deep)" }}>
      <div className="mx-auto grid max-w-7xl gap-10 px-5 pt-28 pb-16 md:grid-cols-2 md:items-center md:gap-6 md:px-10 md:pt-36 md:pb-28">
        <div className="order-2 md:order-1">
          <p className="eyebrow">A new SARKAR fragrance</p>
          <h1 className="mt-5 text-[3.25rem] leading-[0.95] tracking-tight md:text-8xl">
            SARKAR
            <span className="block italic text-accent">Aqua</span>
          </h1>
          <p className="mt-6 font-serif text-2xl italic text-foreground/90 md:text-3xl">
            Freshness, with presence.
          </p>
          <p className="mt-5 max-w-md text-sm leading-relaxed text-muted-foreground">
            An aquatic aromatic fragrance shaped by cool marine freshness, crisp mint and lavender,
            settling into clean woods and musk.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              href="#buy"
              className="inline-flex min-h-12 items-center justify-center bg-foreground px-8 text-[11px] uppercase tracking-[0.24em] text-primary-foreground transition-opacity hover:opacity-85"
            >
              Shop SARKAR Aqua
            </a>
            <a
              href="#notes"
              className="inline-flex min-h-12 items-center justify-center border border-border px-8 text-[11px] uppercase tracking-[0.24em] transition-colors hover:border-foreground"
            >
              Discover the scent
            </a>
          </div>
        </div>

        <div className="order-1 md:order-2">
          <img
            src={heroAsset.url}
            width={823}
            height={823}
            fetchPriority="high"
            decoding="async"
            sizes="(max-width: 768px) 92vw, 44vw"
            alt="SARKAR Aqua chess-king perfume bottle with its cylinder and box packaging encased in ice"
            className="mx-auto w-full max-w-[520px]"
          />
        </div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-6 flex justify-center">
        <span className="eyebrow text-[9px]">Scroll</span>
      </div>
    </section>
  );
}
