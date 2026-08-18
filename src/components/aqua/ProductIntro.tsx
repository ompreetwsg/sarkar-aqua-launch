import bottle from "@/assets/orion_main_1.webp.asset.json";
import { Reveal } from "./reveal";

export function ProductIntro() {
  return (
    <Reveal as="section" id="fragrance" className="border-t border-border">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-20 md:grid-cols-2 md:px-10 md:py-32">
        <div className="reveal bg-secondary/40 p-6 md:p-12">
          <img
            src={bottle.url}
            width={823}
            height={849}
            loading="lazy"
            decoding="async"
            sizes="(max-width: 768px) 88vw, 42vw"
            alt="SARKAR Aqua 100 ml Eau de Parfum bottle shaped as a chess king in deep blue glass"
            className="mx-auto w-full max-w-[420px] mix-blend-lighten"
          />
        </div>
        <div className="reveal">
          <p className="eyebrow">The fragrance</p>
          <h2 className="mt-4 text-4xl leading-tight md:text-6xl">Cool. Clean. Unmistakable.</h2>
          <p className="mt-6 max-w-lg text-sm leading-relaxed text-muted-foreground">
            SARKAR AQUA opens with a rush of marine freshness and crisp green aromatics. Lavender
            and mint keep the opening cool and energetic, while woods and musk create a clean
            signature that stays understated.
          </p>
          <dl className="mt-10 grid grid-cols-2 gap-y-6 border-t border-border pt-8 text-sm">
            <div>
              <dt className="eyebrow">Format</dt>
              <dd className="mt-2">100 ml Eau de Parfum</dd>
            </div>
            <div>
              <dt className="eyebrow">Family</dt>
              <dd className="mt-2">Aquatic aromatic woody</dd>
            </div>
            <div>
              <dt className="eyebrow">Wear</dt>
              <dd className="mt-2">Day, work, everyday</dd>
            </div>
            <div>
              <dt className="eyebrow">For</dt>
              <dd className="mt-2">Unisex</dd>
            </div>
          </dl>
        </div>
      </div>
    </Reveal>
  );
}
