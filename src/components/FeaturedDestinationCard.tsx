import { Link } from "@tanstack/react-router";
import { Star } from "lucide-react";
import type { Destination } from "@/lib/destinations";

export function FeaturedDestinationCard({
  destination,
  className = "",
}: {
  destination: Destination;
  className?: string;
}) {
  return (
    <Link
      to="/packages"
      className={`group relative block aspect-[3/4.1] shrink-0 overflow-hidden rounded-[22px] shadow-soft transition-transform hover:scale-[1.01] md:rounded-3xl ${className}`}
    >
      <img
        src={destination.image}
        alt={`${destination.name}, ${destination.location}`}
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-black/10" />
      <span className="absolute left-1/2 top-3 -translate-x-1/2 whitespace-nowrap rounded-full bg-white px-4 py-1.5 text-xs font-bold text-ink shadow-soft">
        Packages
      </span>

      <div className="absolute inset-x-0 bottom-0 p-3 md:p-4">
        <h3 className="truncate text-[13px] font-bold leading-tight text-white md:text-[15px]">
          {destination.name}
        </h3>
        <div className="mt-0.5 flex items-center justify-between gap-1.5">
          <p className="truncate text-[11px] text-white/80 md:text-xs">
            {destination.location}
          </p>
          <span className="flex shrink-0 items-center gap-1 text-[11px] font-semibold text-white md:text-xs">
            <Star className="h-3 w-3 fill-amber-300 text-amber-300 md:h-3.5 md:w-3.5" />
            {destination.rating.toFixed(1)}
          </span>
        </div>
      </div>
    </Link>
  );
}
