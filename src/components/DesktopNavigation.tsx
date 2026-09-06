import { Link } from "@tanstack/react-router";
import { Globe2 } from "lucide-react";

const navClass =
  "rounded-full px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-white/70 hover:text-foreground";
const navActive = { className: "text-foreground bg-white/80" };

const links = [
  { to: "/", label: "Home" },
  { to: "/packages", label: "Packages" },
  { to: "/experience", label: "Experiences" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

const moreLinks: { to: string; label: string }[] = [];

export function DesktopNavigation() {
  return (
    <header className="pointer-events-none fixed inset-x-0 top-0 z-50 hidden justify-center px-6 pt-5 md:flex">
      <nav
        aria-label="Main"
        className="glass pointer-events-auto flex w-full max-w-6xl items-center gap-6 rounded-full px-3 py-2.5 shadow-soft"
      >
        <Link to="/" className="flex min-w-0 items-center gap-2 pl-3">
          <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-ink text-background">
            <Globe2 className="h-4 w-4" />
          </span>
          <span className="truncate text-[15px] font-extrabold tracking-tight">
            Layago Holidays
          </span>
        </Link>

        <ul className="hidden flex-1 items-center justify-center gap-1 lg:flex">
          {links.map((l) => (
            <li key={l.label}>
              <Link
                to={l.to}
                className={navClass}
                activeProps={navActive}
                activeOptions={{ exact: l.to === "/" }}
              >
                {l.label}
              </Link>
            </li>
          ))}
          {moreLinks.map((l) => (
            <li key={l.label} className="hidden xl:block">
              <Link to={l.to} className={navClass} activeProps={navActive}>
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex shrink-0 items-center gap-2">
          <Link
            to="/customize"
            className="rounded-full bg-ink px-5 py-2.5 text-sm font-semibold text-background shadow-pill transition-transform hover:-translate-y-0.5"
          >
            Plan Your Trip
          </Link>
        </div>
      </nav>
    </header>
  );
}
