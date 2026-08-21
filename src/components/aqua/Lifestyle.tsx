import yacht from "@/assets/1_2.webp.asset.json";
import car from "@/assets/7th.webp.asset.json";
import lineup from "@/assets/4_bottle_shot_2.webp.asset.json";
import { Reveal } from "./reveal";

const SCENES = [
  {
    img: yacht,
    w: 750,
    h: 750,
    label: "Day",
    copy: "Fresh enough for everyday wear.",
    alt: "Hand holding the SARKAR chess-king bottle on a boat rail above open blue water",
  },
  {
    img: car,
    w: 823,
    h: 823,
    label: "Work",
    copy: "Clean and polished without becoming overpowering.",
    alt: "Hand holding the SARKAR bottle out of a car window in bright daylight",
  },
  {
    img: lineup,
    w: 823,
    h: 823,
    label: "Night",
    copy: "A subtle woody trail that carries beyond sunset.",
    alt: "The SARKAR fragrance family lined up on dark stone, Aqua at the left",
  },
];

export function Lifestyle() {
  return (
    <Reveal as="section" id="experience" className="border-t border-border bg-secondary/25">
      <div className="mx-auto max-w-7xl px-5 py-20 md:px-10 md:py-32">
        <div className="reveal max-w-2xl">
          <p className="eyebrow">Experience</p>
          <h2 className="mt-4 text-4xl md:text-6xl">Worn, not announced.</h2>
        </div>
        <div className="mt-14 grid gap-10 md:grid-cols-3">
          {SCENES.map((s) => (
            <figure key={s.label} className="reveal">
              <img
                src={s.img.url}
                width={s.w}
                height={s.h}
                loading="lazy"
                decoding="async"
                sizes="(max-width: 768px) 90vw, 30vw"
                alt={s.alt}
                className="mono-shot w-full"
              />
              <figcaption className="mt-5">
                <h3 className="eyebrow text-foreground">{s.label}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{s.copy}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </Reveal>
  );
}
