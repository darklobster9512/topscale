import { Link } from "@tanstack/react-router";

import logo from "@/assets/topscale-logo.png.asset.json";

export function Footer() {
  return (
    <footer className="border-t border-border bg-secondary/50">
      <div className="container-page grid gap-10 py-14 md:grid-cols-4">
        <div className="md:col-span-2">
          <img src={logo.url} alt="Topscale GmbH Logo" className="h-6 w-auto" loading="lazy" />
          <p className="mt-4 max-w-sm text-sm text-muted-foreground">
            Consulting, Softwareentwicklung und Beratung in Projekt-, Prozess- und
            Qualitätsmanagement. Aus Hamburg, seit 2009.
          </p>
        </div>

        <div>
          <h3 className="text-sm font-semibold">Kontakt</h3>
          <address className="mt-4 space-y-1 text-sm not-italic text-muted-foreground">
            <p>Topscale GmbH</p>
            <p>Zirkusweg 1</p>
            <p>20359 Hamburg</p>
            <p>
              <a href="mailto:kontakt@topscale.gmbh" className="hover:text-foreground">
                kontakt@topscale.gmbh
              </a>
            </p>
          </address>
        </div>

        <div>
          <h3 className="text-sm font-semibold">Seiten</h3>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            <li>
              <Link to="/leistungen" className="hover:text-foreground">
                Leistungen
              </Link>
            </li>
            <li>
              <Link to="/karriere" className="hover:text-foreground">
                Karriere
              </Link>
            </li>
            <li>
              <Link to="/impressum" className="hover:text-foreground">
                Impressum
              </Link>
            </li>
            <li>
              <Link to="/datenschutz" className="hover:text-foreground">
                Datenschutz
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="container-page py-5 text-xs text-muted-foreground">
          © {new Date().getFullYear()} Topscale GmbH. Alle Rechte vorbehalten.
        </div>
      </div>
    </footer>
  );
}
