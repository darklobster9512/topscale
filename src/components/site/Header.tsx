import { Link } from "@tanstack/react-router";
import { ArrowRight, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

import logo from "@/assets/topscale-logo.png.asset.json";

const nav = [
  { to: "/leistungen", label: "Leistungen" },
  { to: "/branchen", label: "Branchen" },
  { to: "/vorgehen", label: "Vorgehen" },
  { to: "/ueber-uns", label: "Über uns" },
  { to: "/team", label: "Unser Team" },
  { to: "/karriere", label: "Karriere" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-colors ${
        scrolled ? "border-hairline bg-background/90 backdrop-blur-xl" : "border-transparent bg-background"
      }`}
    >
      <div className="container-page flex h-16 items-center justify-between md:h-20">
        <Link to="/" className="flex items-center" aria-label="Topscale GmbH – Startseite">
          <img src={logo.url} alt="Topscale GmbH" className="h-6 w-auto md:h-7" />
        </Link>

        <nav className="hidden items-center gap-7 lg:flex">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="relative text-sm text-muted-foreground transition-colors after:absolute after:-bottom-1.5 after:left-0 after:h-px after:w-full after:origin-left after:scale-x-0 after:bg-brand after:transition-transform hover:text-foreground hover:after:scale-x-100"
              activeProps={{ className: "text-foreground after:scale-x-100" }}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            to="/kontakt"
            className="hidden items-center gap-2 rounded-full bg-ink px-5 py-2.5 text-sm font-medium text-ink-foreground transition-transform hover:-translate-y-0.5 md:inline-flex"
          >
            Kontakt <ArrowRight className="size-3.5" />
          </Link>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="inline-flex size-11 items-center justify-center rounded-full border border-hairline lg:hidden"
            aria-label={open ? "Menü schließen" : "Menü öffnen"}
            aria-expanded={open}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {open && (
        <nav className="border-t border-hairline bg-background lg:hidden">
          <div className="container-page flex flex-col divide-y divide-hairline py-1">
            {[{ to: "/", label: "Start" } as const, ...nav].map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className="flex min-h-12 items-center text-[0.9375rem] text-muted-foreground"
                activeProps={{ className: "text-foreground" }}
                activeOptions={{ exact: item.to === "/" }}
              >
                {item.label}
              </Link>
            ))}
          </div>
          <div className="container-page pb-4">
            <Link
              to="/kontakt"
              onClick={() => setOpen(false)}
              className="flex min-h-12 items-center justify-center gap-2 rounded-full bg-ink px-5 text-sm font-semibold text-ink-foreground"
            >
              Kontakt <ArrowRight className="size-4" />
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
