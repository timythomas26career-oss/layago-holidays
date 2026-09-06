import { Link } from "@tanstack/react-router";
import { ChevronLeft, Heart, MapPin, Star } from "lucide-react";
import { DestinationGallery } from "./DestinationGallery";
import { TourGuideCard } from "./TourGuideCard";
import { BookingCTA } from "./BookingCTA";
import { guides, type Destination } from "@/lib/destinations";

export function DestinationDetails({
  destination,
}: {
  destination: Destination;
}) {
  return (
    <div className="relative min-h-svh">
      <img
        src={destination.image}
        alt={`${destination.name}, ${destination.location}`}
        width={1600}
        height={1200}
        className="fixed inset-0 h-[65svh] w-full object-cover md:h-svh"
      />
      <div className="fixed inset-0 h-[65svh] bg-gradient-to-b from-black/35 to-transparent md:h-svh" />

      <Link
        to="/"
        aria-label="Back to home"
        className="glass absolute left-4 top-4 z-20 grid h-11 w-11 place-items-center rounded-full text-ink shadow-soft md:left-8 md:top-24"
      >
        <ChevronLeft className="h-5 w-5" />
      </Link>

      <DestinationGallery activeSlug={destination.slug} />

      <div className="relative z-10 flex min-h-svh flex-col justify-end px-4 pb-28 pt-[52svh] md:px-6 md:pb-16 md:pt-[42vh]">
        <div className="mx-auto w-full max-w-3xl rounded-[2rem] bg-card p-6 shadow-float md:p-9">
          <div className="grid grid-cols-[minmax(0,1fr)_auto] items-start gap-4">
            <div className="min-w-0">
              <h1 className="truncate text-2xl font-extrabold md:text-4xl">
                {destination.name}
              </h1>
              <p className="mt-1 flex items-center gap-1.5 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4 text-teal" />
                {destination.location}
              </p>
            </div>
            <div className="flex shrink-0 items-center gap-3">
              <span className="flex items-center gap-1 text-sm font-semibold">
                <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
                {destination.rating.toFixed(1)}
              </span>
              <button
                type="button"
                aria-label="Save destination"
                className="grid h-10 w-10 place-items-center rounded-full bg-surface text-teal transition-colors hover:bg-aqua"
              >
                <Heart className="h-4.5 w-4.5" />
              </button>
            </div>
          </div>

          <div className="mt-5 flex flex-wrap gap-2">
            {destination.tags.map((t) => (
              <span
                key={t}
                className="rounded-full bg-aqua/60 px-4 py-1.5 text-xs font-semibold text-teal-deep"
              >
                {t}
              </span>
            ))}
          </div>

          <h2 className="mt-7 text-base font-bold">Overview</h2>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
            {destination.overview}
          </p>

          <div className="mt-7 flex items-center justify-between gap-4">
            <h2 className="text-base font-bold">Tour Guide</h2>
            <Link to="/experience" className="text-xs font-semibold text-ocean">
              See All
            </Link>
          </div>
          <div className="mt-3 grid gap-3 sm:grid-cols-2">
            {guides.slice(0, 2).map((g) => (
              <TourGuideCard key={g.name} {...g} />
            ))}
          </div>

          <div className="mt-8">
            <BookingCTA price={destination.price} />
          </div>
        </div>
      </div>
    </div>
  );
}
