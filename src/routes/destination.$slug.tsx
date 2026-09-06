import { createFileRoute, notFound } from "@tanstack/react-router";
import { DestinationDetails } from "@/components/DestinationDetails";
import { getDestination } from "@/lib/destinations";

export const Route = createFileRoute("/destination/$slug")({
  loader: ({ params }) => {
    const destination = getDestination(params.slug);
    if (!destination) throw notFound();
    return { destination };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [
          { title: "Destination unavailable â€” Layago Holidays" },
          { name: "robots", content: "noindex" },
        ],
      };
    }
    const { destination } = loaderData;
    const title = `${destination.name}, ${destination.location} â€” Layago Holidays`;
    return {
      meta: [
        { title },
        { name: "description", content: destination.overview.slice(0, 155) },
        { property: "og:title", content: title },
        {
          property: "og:description",
          content: destination.overview.slice(0, 155),
        },
      ],
    };
  },
  component: DestinationPage,
});

function DestinationPage() {
  const { destination } = Route.useLoaderData();
  return <DestinationDetails destination={destination} />;
}
