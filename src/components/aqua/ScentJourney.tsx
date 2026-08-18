import { Reveal } from "./reveal";

const STAGES = [
  {
    n: "01",
    title: "The opening",
    copy: "Cool marine freshness meets mint, lavender and green aromatics.",
  },
  {
    n: "02",
    title: "The heart",
    copy: "Floral-green notes soften the freshness with neroli, jasmine and sandalwood.",
  },
  {
    n: "03",
    title: "The trail",
    copy: "Clean musk, cedarwood and amber create a smooth, understated finish.",
  },
];

export function ScentJourney() {
  return (
    <Reveal as="section" id="story" className="border-t border-border">
      <div className="mx-auto max-w-7xl px-5 py-20 md:px-10 md:py-32">
        <div className="reveal max-w-2xl">
          <p className="eyebrow">The journey</p>
          <h2 className="mt-4 text-4xl md:text-6xl">The ocean, bottled in SARKAR.</h2>
        </div>
        <ol className="mt-14 grid gap-10 md:grid-cols-3 md:gap-14">
          {STAGES.map((s) => (
            <li key={s.n} className="reveal border-t border-border pt-8">
              <span className="font-serif text-5xl text-accent/70">{s.n}</span>
              <h3 className="mt-6 text-2xl">{s.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.copy}</p>
            </li>
          ))}
        </ol>
      </div>
    </Reveal>
  );
}
