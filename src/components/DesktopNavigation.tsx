import { Link } from "@tanstack/react-router";
import logo from "@/assets/logo.png";

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

export function DesktopNavigation() {
  return (
    <header className="pointer-events-none fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-3 md:px-6 md:pt-5">
      <nav
        aria-label="Main"
        className="glass pointer-events-auto flex w-full max-w-6xl items-center justify-between rounded-full px-3 py-2 shadow-soft md:gap-6 md:py-2.5"
      >
        <Link to="/" className="flex min-w-0 items-center pl-2 md:pl-3">
          <img
            src={logo}
            alt="Layago Holidays"
            className="h-7 w-auto object-contain md:h-8"
          />
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
        </ul>

        <div className="hidden shrink-0 items-center gap-2 md:flex">
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
