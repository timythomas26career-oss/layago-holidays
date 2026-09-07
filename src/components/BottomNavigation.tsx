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
        className="fixed inset-x-0 bottom-0 z-[70] px-3 pb-3 md:hidden"
      >
        <ul className="mx-auto flex max-w-[340px] items-center justify-between rounded-full bg-white/80 px-1.5 py-1.5 shadow-[0_8px_32px_rgba(0,0,0,0.12)] backdrop-blur-xl">
          {items.map(({ to, label, Icon, exact }) => (
            <li key={label} className="flex-1">
              <Link
                to={to}
                aria-label={label}
                activeOptions={{ exact }}
                className="mx-auto flex h-10 w-10 items-center justify-center rounded-full text-muted-foreground/60 transition-colors"
                activeProps={{ className: "bg-teal/10 text-teal" }}
              >
                <Icon className="h-[18px] w-[18px]" strokeWidth={2} />
              </Link>
            </li>
          ))}
          <li className="flex-1">
            <button
              type="button"
              aria-label="More"
              aria-expanded={open}
              onClick={() => setOpen((o) => !o)}
              className={`mx-auto flex h-10 w-10 items-center justify-center rounded-full transition-colors ${
                open
                  ? "bg-ink text-white"
                  : "text-muted-foreground/60"
              }`}
            >
              {open ? (
                <X className="h-[18px] w-[18px]" strokeWidth={2} />
              ) : (
                <Ellipsis className="h-5 w-5" strokeWidth={2} />
              )}
            </button>
          </li>
        </ul>

        {open && (
          <div className="mx-auto mt-2 max-w-[340px] overflow-hidden rounded-2xl bg-white shadow-[0_8px_32px_rgba(0,0,0,0.12)]">
            {moreItems.map(({ to, label, Icon }) => (
              <Link
                key={label}
                to={to}
                onClick={() => setOpen(false)}
                activeProps={{ className: "bg-surface text-teal-deep" }}
                className="flex items-center gap-3 px-4 py-3 text-sm font-medium text-foreground"
              >
                <Icon className="h-[18px] w-[18px] text-muted-foreground" strokeWidth={2} />
                {label}
              </Link>
            ))}
          </div>
        )}
      </nav>
    </>
  );
}
