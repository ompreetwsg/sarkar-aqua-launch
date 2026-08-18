import { Reveal } from "./reveal";

const QUOTES = [
  "Fresh, clean and ridiculously easy to wear.",
  "Exactly the kind of fragrance I reach for in hot weather.",
  "The dry-down is much smoother than I expected.",
];

export function Testimonials() {
  return (
    <Reveal as="section" className="border-t border-border">
      <div className="mx-auto max-w-7xl px-5 py-20 md:px-10 md:py-28">
        <p className="reveal eyebrow">Sample reviews · placeholder copy</p>
        <ul className="mt-10 grid gap-10 md:grid-cols-3">
          {QUOTES.map((q) => (
            <li key={q} className="reveal border-t border-border pt-8">
              <blockquote className="font-serif text-2xl italic leading-snug">“{q}”</blockquote>
            </li>
          ))}
        </ul>
        <p className="reveal mt-10 text-xs text-muted-foreground">
          Illustrative sample reviews shown for layout purposes. Not verified customer feedback.
        </p>
      </div>
    </Reveal>
  );
}
