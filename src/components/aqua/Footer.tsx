export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 md:grid-cols-3 md:px-10">
        <div>
          <p className="text-sm tracking-[0.42em]">SARKAR</p>
          <p className="mt-4 font-serif text-2xl italic">Aqua</p>
          <p className="eyebrow mt-2">100 ml Eau de Parfum</p>
        </div>
        <nav aria-label="Footer">
          <ul className="grid gap-3 text-[11px] uppercase tracking-[0.24em] text-muted-foreground">
            <li>
              <a href="#fragrance" className="hover:text-foreground">
                Fragrance
              </a>
            </li>
            <li>
              <a href="#story" className="hover:text-foreground">
                Story
              </a>
            </li>
            <li>
              <a href="#notes" className="hover:text-foreground">
                Notes
              </a>
            </li>
            <li>
              <a href="#buy" className="hover:text-foreground">
                Contact
              </a>
            </li>
          </ul>
        </nav>
        <ul className="grid gap-3 text-[11px] uppercase tracking-[0.24em] text-muted-foreground md:justify-items-end">
          <li>
            <a href="https://instagram.com" rel="noreferrer noopener" className="hover:text-foreground">
              Instagram
            </a>
          </li>
          <li>
            <a href="https://youtube.com" rel="noreferrer noopener" className="hover:text-foreground">
              YouTube
            </a>
          </li>
          <li>
            <a href="https://x.com" rel="noreferrer noopener" className="hover:text-foreground">
              X
            </a>
          </li>
        </ul>
      </div>
      <p className="border-t border-border py-6 text-center text-[11px] tracking-[0.2em] text-muted-foreground">
        © SARKAR
      </p>
    </footer>
  );
}
