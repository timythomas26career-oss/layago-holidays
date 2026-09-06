import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Home, Package, Phone, Sun, Info, Ellipsis, X } from "lucide-react";

const items = [
  { to: "/", label: "Home", Icon: Home, exact: true },
  { to: "/packages", label: "Packages", Icon: Package, exact: false },
  { to: "/experience", label: "Experiences", Icon: Sun, exact: false },
  { to: "/contact", label: "Contact", Icon: Phone, exact: false },
] as const;

export const moreItems = [{ to: "/about", label: "About", Icon: Info }] as const;

export function BottomNavigation() {
  const [open, setOpen] = useState(false);
  return (
    <>
      {open && (
        <div
          className="fixed inset-0 z-[60] bg-black/20 backdrop-blur-sm"
          onClick={() => setOpen(false)}
        />
      )}
      <nav
        aria-label="Primary"
        className="fixed inset-x-0 bottom-0 z-[70] px-4 pb-3 md:hidden"
      >
        {/* Frosted pill — matches screenshot: translucent white, rounded-full */}
        <ul className="mx-auto flex max-w-[360px] items-center justify-between rounded-full bg-white/80 px-2 py-2 shadow-[0_12px_40px_rgba(0,0,0,0.16)] backdrop-blur-xl">
          {items.map(({ to, label, Icon, exact }) => (
            <li key={label} className="flex-1">
              <Link
                to={to}
                aria-label={label}
                activeOptions={{ exact }}
                className="mx-auto flex h-11 w-11 items-center justify-center rounded-full text-muted-foreground/70 transition-colors"
                activeProps={{ className: "bg-white text-teal shadow-soft" }}
              >
                <Icon className="h-5 w-5" />
              </Link>
            </li>
          ))}
          <li className="flex-1">
            <button
              type="button"
              aria-label="More"
              aria-expanded={open}
              onClick={() => setOpen((o) => !o)}
              className={`mx-auto flex h-11 w-11 items-center justify-center rounded-full transition-colors ${
                open
                  ? "bg-ink text-white shadow-soft"
                  : "text-muted-foreground/70"
              }`}
            >
              {open ? (
                <X className="h-5 w-5" />
              ) : (
                <Ellipsis className="h-6 w-6" />
              )}
            </button>
          </li>
        </ul>

        {open && (
          <div className="mx-auto mt-3 max-w-[360px] rounded-[22px] bg-white p-2 shadow-[0_12px_40px_rgba(0,0,0,0.16)]">
            {moreItems.map(({ to, label, Icon }) => (
              <Link
                key={label}
                to={to}
                onClick={() => setOpen(false)}
                activeProps={{ className: "bg-surface text-teal-deep" }}
                className="flex items-center gap-3 rounded-2xl px-3 py-2.5 text-sm font-medium text-foreground"
              >
                <Icon className="h-5 w-5 text-muted-foreground" />
                {label}
              </Link>
            ))}
          </div>
        )}
      </nav>
    </>
  );
}
