import { createFileRoute, Link } from "@tanstack/react-router";
import { Star, Clock, MapPin } from "lucide-react";
import { packages } from "@/lib/packages";
import { categories } from "@/lib/destinations";
import { CategoryCard } from "@/components/CategoryCard";

export const Route = createFileRoute("/packages/")({
  head: () => ({
    meta: [
      { title: "Packages — Layago Holidays" },
      {
        name: "description",
        content:
          "Curated travel packages: islands, alps, caldera, jungles. Fixed departures, private options, best season.",
      },
      { property: "og:title", content: "Packages — Layago Holidays" },
    ],
  }),
  component: PackagesPage,
});

function PackagesPage() {
  return (
    <div className="page-aura min-h-svh px-4 pb-28 pt-8 md:px-6 md:pb-16 md:pt-28">
      <div className="mx-auto max-w-6xl">
        <p className="label-xs tracking-[0.2em] text-teal-deep">Discover</p>
        <h1 className="mt-1 text-[30px] font-extrabold leading-none tracking-tight md:mt-2 md:text-5xl">
          Explore the world
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Where do you want to travel?
        </p>
        <div className="no-scrollbar mt-5 flex gap-3 overflow-x-auto pb-1">
          {categories.map((c) => (
            <CategoryCard key={c.name} {...c} />
          ))}
        </div>

        <div className="mt-10">
          <p className="label-xs text-teal-deep">Packages</p>
          <h1 className="mt-2 text-3xl font-extrabold md:text-5xl">
            Pick your trip
          </h1>
          <p className="mt-3 max-w-2xl text-sm text-muted-foreground md:text-base">
            All packages include stays, transfers & guide as listed. Customize
            dates, stays & add-ons on the detail page or via Inquiry.
          </p>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {packages.map((p) => (
            <div
              key={p.slug}
              className="group relative overflow-hidden rounded-[2rem] bg-card shadow-float"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={p.image}
                  alt={p.title}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                <span className="absolute left-3 top-3 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-ink shadow-soft">
                  {p.category}
                </span>
                <div className="absolute inset-x-0 bottom-0 p-4 text-white">
                  <h3 className="truncate text-[16px] font-bold">{p.title}</h3>
                  <p className="mt-1 flex items-center gap-1.5 text-xs text-white/85">
                    <MapPin className="h-3.5 w-3.5" />
                    {p.location} <span className="mx-1">•</span>{" "}
                    <Clock className="h-3.5 w-3.5" />
                    {p.duration}
                  </p>
                </div>
              </div>
              <div className="flex items-center justify-between p-4">
                <span className="flex items-center gap-1 text-xs font-semibold">
                  <Star className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
                  {p.rating.toFixed(1)}
                </span>
                <span className="text-xs font-semibold text-teal-deep">
                  {p.bestSeason}
                </span>
              </div>
              <div className="flex gap-2 px-4 pb-4">
                <Link
                  to="/packages/$slug"
                  params={{ slug: p.slug }}
                  className="flex-1 rounded-full border border-teal-deep px-4 py-2.5 text-center text-xs font-bold text-teal-deep hover:bg-teal-deep hover:text-white transition-colors"
                >
                  View Details
                </Link>
                <Link
                  to="/customize"
                  search={{ destination: p.location, packageSlug: p.slug }}
                  className="flex-1 rounded-full bg-teal-deep px-4 py-2.5 text-center text-xs font-bold text-white hover:opacity-90 transition-opacity"
                >
                  Book This Package
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
