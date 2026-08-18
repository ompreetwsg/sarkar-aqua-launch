import notesImage from "@/assets/aqua_notes.webp.asset.json";
import { Reveal } from "./reveal";

const PYRAMID = [
  { tier: "Top", notes: ["Marine accord", "Mint", "Lavender", "Rosemary", "Green notes"] },
  { tier: "Heart", notes: ["Geranium", "Neroli", "Jasmine", "Sandalwood"] },
  { tier: "Base", notes: ["Musk", "Cedarwood", "Amber", "Woods"] },
];

export function FragranceNotes() {
  return (
    <Reveal as="section" id="notes" className="border-t border-border bg-secondary/25">
      <div className="mx-auto max-w-7xl px-5 py-20 md:px-10 md:py-32">
        <div className="reveal max-w-2xl">
          <p className="eyebrow">Composition</p>
          <h2 className="mt-4 text-4xl md:text-6xl">The notes</h2>
        </div>

        <div className="mt-14 grid gap-12 md:grid-cols-[1.1fr_1fr] md:items-start md:gap-16">
          <ul className="reveal">
            {PYRAMID.map((row) => (
              <li key={row.tier} className="border-t border-border py-8 md:py-10">
                <div className="grid gap-4 md:grid-cols-[140px_1fr]">
                  <h3 className="font-serif text-2xl italic text-accent">{row.tier}</h3>
                  <p className="font-serif text-xl leading-relaxed md:text-2xl">
                    {row.notes.join(" · ")}
                  </p>
                </div>
              </li>
            ))}
          </ul>
          <img
            src={notesImage.url}
            width={900}
            height={900}
            loading="lazy"
            decoding="async"
            sizes="(max-width: 768px) 90vw, 38vw"
            alt="Mint, lavender, rosemary, neroli and cedarwood suspended in clear ice — the notes of SARKAR Aqua"
            className="reveal w-full"
          />
        </div>
      </div>
    </Reveal>
  );
}
