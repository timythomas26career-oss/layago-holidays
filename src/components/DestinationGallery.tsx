import { destinations } from "@/lib/destinations";

export function DestinationGallery({ activeSlug }: { activeSlug: string }) {
  const shots = destinations.filter((d) => d.slug !== activeSlug).slice(0, 6);
  return (
    <div className="absolute bottom-6 left-4 right-4 z-10 md:bottom-8 md:left-8 md:right-8">
      <div className="no-scrollbar flex gap-3 overflow-x-auto pb-1 md:gap-4">
        <div className="flex gap-3 md:gap-4">
          {shots.map((d) => (
            <img
              key={d.slug}
              src={d.image}
              alt={d.name}
              loading="lazy"
              className="h-14 w-20 shrink-0 rounded-2xl object-cover shadow-float ring-2 ring-white/70 md:h-20 md:w-28"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
