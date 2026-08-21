import bottle from "@/assets/orion_main_1.webp.asset.json";
import { Reveal } from "./reveal";

export function PurchaseSection() {
  return (
    <Reveal as="section" id="buy" className="border-t border-border">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-20 md:grid-cols-2 md:px-10 md:py-32">
        <div className="reveal p-6 md:p-12">
          <img
            src={bottle.url}
            width={823}
            height={849}
            loading="lazy"
            decoding="async"
            sizes="(max-width: 768px) 88vw, 42vw"
            alt="SARKAR Aqua 100 ml Eau de Parfum, deep blue chess-king bottle"
            className="mono-shot mx-auto w-full max-w-[380px] mix-blend-screen"
          />
        </div>
        <div className="reveal">
          <p className="eyebrow">Eau de Parfum · Unisex</p>
          <h2 className="mt-4 text-4xl md:text-6xl">SARKAR Aqua</h2>
          <p className="mt-3 text-sm tracking-[0.2em] text-muted-foreground">100 ML</p>
          <p className="mt-8 font-serif text-4xl">₹1,499</p>
          <p className="mt-3 text-sm text-muted-foreground">
            Fresh aquatic character. Clean woody finish.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <button
              type="button"
              className="min-h-12 bg-foreground px-8 text-[11px] uppercase tracking-[0.24em] text-primary-foreground transition-opacity hover:opacity-85"
            >
              Buy SARKAR Aqua
            </button>
            <button
              type="button"
              className="min-h-12 border border-border px-8 text-[11px] uppercase tracking-[0.24em] transition-colors hover:border-foreground"
            >
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </Reveal>
  );
}
