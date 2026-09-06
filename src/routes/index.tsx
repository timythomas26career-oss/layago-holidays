import { createFileRoute, Link } from "@tanstack/react-router";
import { HeroSection } from "@/components/HeroSection";
import { FeaturedDestinationCard } from "@/components/FeaturedDestinationCard";
import { CategoryCard } from "@/components/CategoryCard";
import { MapExperienceSection } from "@/components/MapExperienceSection";
import { destinations, categories } from "@/lib/destinations";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Layago Holidays — Luxury Travel Discovery & Booking" },
      {
        name: "description",
        content:
          "Discover and book premium island escapes, alpine lakes and luxury resorts with Layago Holidays, a curated travel discovery platform.",
      },
      {
        property: "og:title",
        content: "Layago Holidays — Luxury Travel Discovery & Booking",
      },
      {
        property: "og:description",
        content: "Curated tropical islands, alpine retreats and luxury stays, ready to book.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  const featured =
    destinations.find((d) => d.slug === "lakshadweep") ?? destinations[0]!;

  return (
    <div className="page-aura min-h-svh pb-28 md:pb-0">
      <HeroSection featured={featured} />

      <section className="px-4 pt-8 md:px-6 md:pt-14">
        <div className="mx-auto max-w-6xl rounded-[2rem] bg-card p-5 shadow-float md:rounded-[2.5rem] md:p-10">
          <div className="grid grid-cols-[minmax(0,1fr)_auto] items-end gap-4">
            <div className="min-w-0">
              <h2 className="text-xl font-extrabold md:text-3xl">
                Featured Places
              </h2>
              <p className="mt-1 text-sm text-muted-foreground">
                Most trending places on last 2 weeks
              </p>
            </div>
            <Link
              to="/packages"
              className="shrink-0 text-xs font-semibold text-ocean"
            >
              See All
            </Link>
          </div>

          <div className="no-scrollbar mt-5 flex gap-4 overflow-x-auto pb-1 md:grid md:grid-cols-3 md:overflow-visible lg:grid-cols-4">
            {destinations.slice(0, 4).map((d) => (
              <FeaturedDestinationCard
                key={d.slug}
                destination={d}
                className="w-[62%] max-w-[240px] md:w-auto md:max-w-none"
              />
            ))}
          </div>

          <div className="mt-10 grid grid-cols-[minmax(0,1fr)_auto] items-end gap-4">
            <div className="min-w-0">
              <h2 className="text-xl font-extrabold md:text-3xl">Categories</h2>
              <p className="mt-1 text-sm text-muted-foreground">
                According to your personal taste
              </p>
            </div>
            <Link
              to="/packages"
              className="shrink-0 text-xs font-semibold text-ocean"
            >
              See All
            </Link>
          </div>

          <div className="no-scrollbar mt-5 flex gap-3 overflow-x-auto pb-1 md:gap-4">
            {categories.map((c) => (
              <CategoryCard key={c.name} {...c} />
            ))}
          </div>
        </div>
      </section>

      <MapExperienceSection destination={destinations[1]!} label="Gulmarg gondola ride" />
    </div>
  );
}
