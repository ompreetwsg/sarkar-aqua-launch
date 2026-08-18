import { Reveal } from "./reveal";

const POINTS = [
  ["Aquatic freshness", "A cool marine opening designed for everyday wear."],
  ["Aromatic depth", "Mint, lavender and green notes keep the fragrance crisp and dimensional."],
  ["Clean woods", "Sandalwood and cedarwood provide structure without heaviness."],
  ["Everyday signature", "Easy to wear from daytime through evening."],
];

export function WhyAqua() {
  return (
    <Reveal as="section" className="border-t border-border bg-secondary/25">
      <div className="mx-auto max-w-7xl px-5 py-20 md:px-10 md:py-28">
        <h2 className="reveal text-4xl md:text-5xl">Why Aqua</h2>
        <ul className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {POINTS.map(([title, copy]) => (
            <li key={title} className="reveal border-t border-border pt-6">
              <h3 className="eyebrow text-foreground">{title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{copy}</p>
            </li>
          ))}
        </ul>
      </div>
    </Reveal>
  );
}
