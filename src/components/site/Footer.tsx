import { Link } from "@tanstack/react-router";

import logo from "@/assets/topscale-logo.png.asset.json";

const columns = [
  {
    title: "Leistungen",
    links: [
      { to: "/leistungen", label: "IT-Consulting" },
      { to: "/leistungen", label: "Softwareentwicklung" },
      { to: "/leistungen", label: "Projektmanagement" },
      { to: "/leistungen", label: "Prozess & Qualität" },
    ],
  },
  {
    title: "Unternehmen",
    links: [
      { to: "/ueber-uns", label: "Über uns" },
      { to: "/team", label: "Unser Team" },
      { to: "/vorgehen", label: "Vorgehen" },
      { to: "/branchen", label: "Branchen" },
      { to: "/karriere", label: "Karriere" },
    ],
  },
  {
    title: "Kontakt & Recht",
    links: [
      { to: "/karriere", label: "Karriere" },
      { to: "/kontakt", label: "Kontakt" },
      { to: "/impressum", label: "Impressum" },
      { to: "/datenschutz", label: "Datenschutz" },
    ],
  },
] as const;

export function Footer() {
  return (
    <footer className="border-t border-hairline bg-surface/60">
      <div className="container-page grid gap-12 py-16 lg:grid-cols-[1.4fr_repeat(3,1fr)]">
        <div>
          <img src={logo.url} alt="Topscale GmbH" className="h-6 w-auto" loading="lazy" />
          <p className="mt-5 max-w-xs text-sm text-muted-foreground">
            Consulting, Softwareentwicklung und Beratung in Projekt-, Prozess- und
            Qualitätsmanagement. Aus Hamburg, seit 2009.
          </p>
          <address className="mt-6 space-y-1 text-sm not-italic text-muted-foreground">
            <p>Zirkusweg 1, 20359 Hamburg</p>
            <p>
              <a href="mailto:kontakt@topscale.gmbh" className="text-foreground hover:text-brand">
                kontakt@topscale.gmbh
              </a>
            </p>
          </address>
        </div>

        {columns.map((column) => (
          <div key={column.title}>
            <h3 className="text-sm font-semibold">{column.title}</h3>
            <ul className="mt-5 space-y-3 text-sm text-muted-foreground">
              {column.links.map((link) => (
                <li key={`${column.title}-${link.label}`}>
                  <Link to={link.to} className="transition-colors hover:text-foreground">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="border-t border-hairline">
        <div className="container-page flex flex-col gap-2 py-6 text-xs text-muted-foreground md:flex-row md:justify-between">
          <p>© {new Date().getFullYear()} Topscale GmbH. Alle Rechte vorbehalten.</p>
          <p>Amtsgericht Hamburg · HRB 133665</p>
        </div>
      </div>
    </footer>
  );
}
