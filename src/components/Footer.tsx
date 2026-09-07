import { Link } from "@tanstack/react-router";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/packages", label: "Packages" },
  { to: "/experience", label: "Experiences" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

export function Footer() {
  return (
    <footer className="border-t border-border/60 bg-surface/50">
      <div className="mx-auto max-w-6xl px-6 pt-12 pb-28 md:pt-16 md:pb-12">
        {/* Desktop / Tablet */}
        <div className="hidden grid-cols-[1.2fr_1fr_1fr] items-start gap-10 md:grid">
          {/* Brand */}
          <div>
            <p className="text-sm font-bold tracking-tight text-foreground">
              Layago Holidays
            </p>
            <p className="mt-2 max-w-[240px] text-xs leading-relaxed text-muted-foreground">
              Handcrafted journeys across India's finest destinations.
            </p>
          </div>

          {/* Nav links */}
          <div>
            <p className="label-xs text-muted-foreground">Navigate</p>
            <ul className="mt-3 flex flex-col gap-2.5">
              {navLinks.map((l) => (
                <li key={l.label}>
                  <Link
                    to={l.to}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA */}
          <div>
            <p className="label-xs text-muted-foreground">Ready to travel?</p>
            <p className="mt-3 text-sm text-muted-foreground">
              Let us plan your perfect Indian getaway.
            </p>
            <Link
              to="/customize"
              className="mt-5 inline-flex items-center rounded-full bg-ink px-6 py-2.5 text-sm font-semibold text-background shadow-pill transition-transform hover:-translate-y-0.5"
            >
              Plan Your Trip
            </Link>
          </div>
        </div>

        {/* Mobile */}
        <div className="flex flex-col items-center text-center md:hidden">
          <p className="text-sm font-bold tracking-tight text-foreground">
            Layago Holidays
          </p>
          <p className="mt-2 text-xs text-muted-foreground">
            Handcrafted journeys across India's finest destinations.
          </p>

          <ul className="mt-6 flex flex-col gap-3">
            {navLinks.map((l) => (
              <li key={l.label}>
                <Link
                  to={l.to}
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>

          <Link
            to="/customize"
            className="mt-6 inline-flex items-center rounded-full bg-ink px-6 py-2.5 text-sm font-semibold text-background shadow-pill transition-transform hover:-translate-y-0.5"
          >
            Plan Your Trip
          </Link>
        </div>

        {/* Copyright */}
        <div className="mt-10 border-t border-border/60 pt-6 text-center md:mt-12">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} Layago Holidays. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
