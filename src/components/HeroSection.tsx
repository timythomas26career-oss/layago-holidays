import { Link } from "@tanstack/react-router";
import { MapPin, ArrowRight } from "lucide-react";
import type { Destination } from "@/lib/destinations";

export function HeroSection({ featured }: { featured: Destination }) {
  return (
    <section className="px-4 pt-4 md:px-6 md:pt-24">
      <div className="relative mx-auto max-w-6xl overflow-hidden rounded-[2rem] shadow-float md:rounded-[2.5rem]">
        <img
          src={featured.image}
          alt={`${featured.name}, ${featured.location}`}
          width={1600}
          height={1200}
          className="h-[78svh] w-full object-cover md:h-[72vh]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/45 via-black/10 to-black/70" />

        <div className="absolute inset-0 flex flex-col justify-between p-5 md:p-10">
          <div className="min-w-0">
            <p className="text-2xl font-extrabold leading-tight text-white md:text-3xl">
              Discover Your Next
              <br />
              Journey
            </p>
            <p className="mt-1 max-w-md text-sm font-light leading-relaxed text-white/80 md:text-base">
              Curated island, mountain and backwater escapes across India.
            </p>
          </div>

          <div className="max-w-xl">
            <p className="label-xs text-white/75">Featured</p>
            <h1 className="mt-2 text-[2.75rem] leading-[0.95] font-extrabold text-white md:text-6xl">
              {featured.name}
            </h1>
            <p className="mt-3 flex items-center gap-1.5 text-sm text-white/85">
              <MapPin className="h-4 w-4" />
              {featured.location}
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-4">
              <Link
                to="/packages"
                className="group flex items-center gap-3 rounded-full bg-black py-1.5 pl-1.5 pr-6 text-sm font-semibold text-white shadow-float"
              >
                <span className="grid h-10 w-10 place-items-center rounded-full bg-teal text-white transition-transform group-hover:translate-x-0.5">
                  <ArrowRight className="h-4 w-4" />
                </span>
                View Packages
              </Link>
              <Link
                to="/customize"
                className="rounded-full bg-teal px-6 py-3 text-sm font-bold text-white shadow-float transition-transform hover:-translate-y-0.5"
              >
                Book Now
              </Link>
              <div className="hidden items-center gap-2 md:flex">
                {[0, 1, 2].map((i) => (
                  <span
                    key={i}
                    className={`h-2 rounded-full bg-white transition-all ${i === 1 ? "w-6" : "w-2 opacity-50"}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
