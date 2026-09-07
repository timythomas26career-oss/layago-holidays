import { Link } from "@tanstack/react-router";
import logo from "@/assets/logo.png";

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
      <div className="mx-auto max-w-6xl px-6 py-12 md:py-16">
        {/* Desktop / Tablet */}
        <div className="hidden items-start justify-between gap-10 md:flex">
          {/* Logo + tagline */}
          <div className="shrink-0">
            <img
              src={logo}
              alt="Layago Holidays"
              className="h-10 w-auto object-contain"
            />
            <p className="mt-3 max-w-xs text-xs leading-relaxed text-muted-foreground">
              Handcrafted journeys across India's finest destinations.
            </p>
          </div>

          {/* Nav links */}
          <div className="flex gap-10">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-foreground">
                Navigate
              </p>
              <ul className="mt-3 flex flex-col gap-2">
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
          </div>

          {/* CTA */}
          <div className="shrink-0">
            <p className="text-xs font-semibold uppercase tracking-widest text-foreground">
              Ready to travel?
            </p>
            <p className="mt-3 max-w-[200px] text-xs text-muted-foreground">
              Let us plan your perfect Indian getaway.
            </p>
            <Link
              to="/customize"
              className="mt-4 inline-flex items-center rounded-full bg-ink px-5 py-2.5 text-sm font-semibold text-background shadow-pill transition-transform hover:-translate-y-0.5"
            >
              Plan Your Trip
            </Link>
          </div>
        </div>

        {/* Mobile */}
        <div className="flex flex-col items-center text-center md:hidden">
          <img
            src={logo}
            alt="Layago Holidays"
            className="h-8 w-auto object-contain"
          />

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
            className="mt-6 inline-flex items-center rounded-full bg-ink px-5 py-2.5 text-sm font-semibold text-background shadow-pill transition-transform hover:-translate-y-0.5"
          >
            Plan Your Trip
          </Link>

          <p className="mt-8 text-xs text-muted-foreground">
            Handcrafted journeys across India's finest destinations.
          </p>
        </div>

        {/* Copyright — all breakpoints */}
        <p className="mt-10 border-t border-border/60 pt-6 text-center text-xs text-muted-foreground">
          &copy; {new Date().getFullYear()} Layago Holidays. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
