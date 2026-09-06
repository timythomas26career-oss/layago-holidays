import { createFileRoute } from "@tanstack/react-router";
import { MapExperienceSection } from "@/components/MapExperienceSection";
import { destinations } from "@/lib/destinations";

export const Route = createFileRoute("/experience")({
  head: () => ({
    meta: [
      { title: "Immersive Experiences — Layago Holidays" },
      {
        name: "description",
        content:
          "Step inside Layago Holidays experiences: lagoon swims, reef safaris and cinematic destination moments.",
      },
      {
        property: "og:title",
        content: "Immersive Experiences — Layago Holidays",
      },
      {
        property: "og:description",
        content:
          "Activities & things to do at our destinations — lagoon swims, reef safaris and more.",
      },
    ],
  }),
  component: ExperiencePage,
});

function ExperiencePage() {
  return (
    <div className="page-aura min-h-svh pb-32 pt-8 md:pb-16 md:pt-24">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <p className="label-xs text-teal-deep">Experiences</p>
        <h1 className="mt-2 text-3xl font-extrabold md:text-5xl">
          Live it, frame by frame
        </h1>
        <p className="mt-3 max-w-2xl text-sm text-muted-foreground">
          Activities and things to do at our destinations — lagoon swims, reef
          safaris, ridge walks and cinematic moments worth framing.
        </p>
      </div>
      {destinations.map((d, i) => (
        <MapExperienceSection
          key={d.slug}
          destination={d}
          label={d.tags[i % d.tags.length] ?? "Swimming"}
        />
      ))}
    </div>
  );
}
