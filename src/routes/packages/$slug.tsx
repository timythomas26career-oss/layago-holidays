import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import {
  Star,
  Clock,
  MapPin,
  Check,
  X,
  Calendar,
  ArrowLeft,
  Users,
} from "lucide-react";
import { getPackage, packages } from "@/lib/packages";
import { destinations } from "@/lib/destinations";

const PAX_TIERS = [
  { pax: "2", label: "2 travelers", discount: 0 },
  { pax: "4", label: "4 travelers", discount: 0.08 },
  { pax: "6+", label: "6+ travelers", discount: 0.15 },
] as const;

export const Route = createFileRoute("/packages/$slug")({
  loader: ({ params }) => {
    const pkg = getPackage(params.slug);
    if (!pkg) throw notFound();
    return { pkg };
  },
  head: ({ loaderData }) => {
    if (!loaderData)
      return { meta: [{ title: "Package not found — Layago Holidays" }] };
    const title = `${loaderData.pkg.title} — Layago Holidays`;
    return {
      meta: [
        { title },
        {
          name: "description",
          content: loaderData.pkg.highlights.join(" • ").slice(0, 155),
        },
      ],
    };
  },
  component: PackageDetailPage,
});

function PackageDetailPage() {
  const { pkg } = Route.useLoaderData();
  const tierPrice = (discount: number) =>
    Math.round(pkg.price * (1 - discount));
  const gallery = [
    ...packages.filter(
      (p) =>
        p.slug !== pkg.slug &&
        (p.category === pkg.category || p.location === pkg.location),
    ),
    ...destinations.filter(
      (d) =>
        d.location === pkg.location ||
        d.name.toLowerCase().includes(pkg.location.toLowerCase()),
    ),
  ]
    .filter((p, i, a) => a.findIndex((x) => x.image === p.image) === i)
    .slice(0, 3)
    .map((p) => ("title" in p ? p.title : p.name));
  return (
    <div className="page-aura min-h-svh pb-28 md:pb-0">
      <div className="relative mx-auto max-w-6xl px-4 pt-4 md:px-6 md:pt-24">
        <div className="relative overflow-hidden rounded-[2rem] shadow-float">
          <img
            src={pkg.image}
            alt={pkg.title}
            className="h-[52svh] w-full object-cover md:h-[58vh]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-black/20" />
          <Link
            to="/packages"
            className="absolute left-4 top-4 grid h-10 w-10 place-items-center rounded-full bg-white/90 text-ink shadow-soft md:left-6 md:top-6"
          >
            <ArrowLeft className="h-4 w-4" />
          </Link>
          <div className="absolute inset-x-0 bottom-0 p-6 text-white md:p-8">
            <p className="label-xs text-white/75">
              {pkg.location} • {pkg.category}
            </p>
            <h1 className="mt-2 max-w-3xl text-3xl font-extrabold leading-tight md:text-5xl">
              {pkg.title}
            </h1>
            <p className="mt-3 flex flex-wrap items-center gap-2 text-sm text-white/85">
              <span className="flex items-center gap-1.5">
                <MapPin className="h-4 w-4" />
                {pkg.location}
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="h-4 w-4" />
                {pkg.duration}
              </span>
              <span className="flex items-center gap-1">
                <Star className="h-4 w-4 fill-amber-300 text-amber-300" />
                {pkg.rating.toFixed(1)}
              </span>
            </p>
          </div>
        </div>
      </div>

      <div className="mx-auto grid max-w-6xl gap-6 px-4 pt-6 md:grid-cols-[1.2fr_0.8fr] md:px-6 md:pt-8">
        <div className="rounded-[2rem] bg-card p-6 shadow-float md:p-8">
          <div className="flex flex-wrap gap-2">
            {pkg.highlights.map((h) => (
              <span
                key={h}
                className="rounded-full bg-aqua px-3 py-1.5 text-xs font-semibold text-teal-deep"
              >
                {h}
              </span>
            ))}
          </div>
          <h2 className="mt-6 text-lg font-bold">Itinerary</h2>
          <ol className="mt-4 grid gap-4">
            {pkg.itinerary.map((it) => (
              <li key={it.day} className="rounded-2xl bg-surface p-4">
                <p className="text-xs font-bold tracking-wide text-teal-deep">
                  {it.day}
                </p>
                <p className="mt-1 font-semibold">{it.title}</p>
                <p className="mt-1 text-sm text-muted-foreground">{it.desc}</p>
              </li>
            ))}
          </ol>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <div>
              <h3 className="flex items-center gap-2 font-bold">
                <Check className="h-4 w-4 text-teal" /> Includes
              </h3>
              <ul className="mt-2 grid gap-1.5 text-sm text-muted-foreground">
                {pkg.includes.map((i) => (
                  <li key={i}>• {i}</li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="flex items-center gap-2 font-bold">
                <X className="h-4 w-4 text-muted-foreground" /> Excludes
              </h3>
              <ul className="mt-2 grid gap-1.5 text-sm text-muted-foreground">
                {pkg.excludes.map((i) => (
                  <li key={i}>• {i}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-6 flex items-center gap-2 text-sm">
            <Calendar className="h-4 w-4 text-teal" /> Best season:{" "}
            <span className="font-semibold">{pkg.bestSeason}</span>
          </div>

          <div className="mt-8">
            <h2 className="text-lg font-bold">Gallery</h2>
            <div className="mt-4 grid grid-cols-2 gap-4 md:grid-cols-3">
              <img
                src={pkg.image}
                alt={pkg.title}
                loading="lazy"
                className="aspect-[4/3] w-full rounded-2xl object-cover shadow-soft"
              />
              {gallery.map((title) => {
                const shot = [...packages, ...destinations].find(
                  (p) => ("title" in p ? p.title : p.name) === title,
                );
                if (!shot) return null;
                return (
                  <img
                    key={title}
                    src={shot.image}
                    alt={title}
                    loading="lazy"
                    className="aspect-[4/3] w-full rounded-2xl object-cover shadow-soft"
                  />
                );
              })}
            </div>
          </div>
        </div>

        <div className="h-fit rounded-[2rem] bg-card p-6 shadow-float md:sticky md:top-28 md:p-8">
          <p className="text-sm text-muted-foreground">
            Per person by group size
          </p>
          <p className="mt-1 text-3xl font-extrabold">
            ₹{pkg.price}{" "}
            <span className="text-sm font-medium text-muted-foreground">
              per person
            </span>
          </p>
          {pkg.oldPrice && (
            <p className="text-sm text-muted-foreground line-through">
              ₹{pkg.oldPrice}
            </p>
          )}
          <ul className="mt-5 grid gap-2">
            {PAX_TIERS.map((tier) => (
              <li
                key={tier.pax}
                className="flex items-center justify-between rounded-2xl bg-surface px-4 py-3"
              >
                <span className="flex items-center gap-2 text-sm font-medium text-muted-foreground">
                  <Users className="h-4 w-4" />
                  {tier.label}
                </span>
                <span className="text-sm font-bold">
                  ₹{tierPrice(tier.discount)}/person
                </span>
              </li>
            ))}
          </ul>
          <Link
            to="/customize"
            search={{ destination: pkg.location, packageSlug: pkg.slug }}
            className="mt-6 flex w-full justify-center gap-2 rounded-full bg-teal-deep px-6 py-4 text-sm font-bold text-white shadow-float hover:-translate-y-0.5 transition-transform"
          >
            Plan This Trip
          </Link>
          <p className="mt-4 text-xs text-muted-foreground">
            Free cancellation 48h • Customize dates, rooms & add-ons via
            inquiry.
          </p>
        </div>
      </div>
    </div>
  );
}
