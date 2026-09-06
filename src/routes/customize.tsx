import { createFileRoute, useSearch } from "@tanstack/react-router";
import { useState } from "react";
import { toast } from "sonner";
import { getPackage } from "@/lib/packages";

const WHATSAPP_NUMBER = "94771234567";

const TRAVELING_AS = [
  "Couple",
  "Family",
  "Friends",
  "Solo",
  "Group",
  "Ladies Only",
] as const;

function buildWhatsAppMessage(data: {
  name: string;
  whatsapp: string;
  destination: string;
  travelDate: string;
  travelers: string;
  duration: string;
  travelingAs: string;
  requirements: string;
  packageSlug?: string | undefined;
}) {
  const pkg = data.packageSlug ? getPackage(data.packageSlug) : undefined;
  return [
    "Hello! I am interested in a travel package.",
    "",
    `Name: ${data.name || "-"}`,
    `WhatsApp Number: ${data.whatsapp || "-"}`,
    `Destination: ${data.destination || "-"}`,
    `Travel Date: ${data.travelDate || "-"}`,
    `Number of Travelers: ${data.travelers || "-"}`,
    `Trip Duration: ${data.duration || "-"}`,
    `Traveling As: ${data.travelingAs || "-"}`,
    ...(pkg ? [`Selected Package: ${pkg.title} (${pkg.duration})`] : []),
    "",
    "Special Requirements:",
    data.requirements || "-",
  ].join("\n");
}

type CustomizeSearch = {
  destination?: string | undefined;
  packageSlug?: string | undefined;
};

export const Route = createFileRoute("/customize")({
  validateSearch: (search: Record<string, unknown>): CustomizeSearch => ({
    destination:
      typeof search["destination"] === "string"
        ? search["destination"]
        : undefined,
    packageSlug:
      typeof search["packageSlug"] === "string"
        ? search["packageSlug"]
        : undefined,
  }),
  head: () => ({
    meta: [
      { title: "Customize Your Trip — Layago Holidays" },
      {
        name: "description",
        content:
          "Tell us your dates, interests and we craft a tailored itinerary. Sends to WhatsApp.",
      },
    ],
  }),
  component: CustomizePage,
});

function CustomizePage() {
  const search = useSearch({ from: "/customize" });
  const [form, setForm] = useState({
    name: "",
    whatsapp: "",
    destination: search.destination ?? "",
    travelDate: "",
    travelers: "2",
    duration: "",
    travelingAs: "Couple" as (typeof TRAVELING_AS)[number],
    requirements: "",
  });

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim()) {
      toast.error("Please enter your full name");
      return;
    }
    if (!form.whatsapp.trim()) {
      toast.error("Please enter your WhatsApp number");
      return;
    }
    if (!form.destination.trim()) {
      toast.error("Please enter destination");
      return;
    }
    if (!form.travelDate.trim()) {
      toast.error("Please enter travel date");
      return;
    }
    if (!form.travelers.trim()) {
      toast.error("Please enter number of travelers");
      return;
    }
    if (!form.duration.trim()) {
      toast.error("Please enter trip duration");
      return;
    }
    const message = buildWhatsAppMessage({
      name: form.name,
      whatsapp: form.whatsapp,
      destination: form.destination,
      travelDate: form.travelDate,
      travelers: form.travelers,
      duration: form.duration,
      travelingAs: form.travelingAs,
      requirements: form.requirements,
      packageSlug: search.packageSlug,
    });
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    toast.success("Opening WhatsApp…");
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="page-aura min-h-svh px-4 pb-28 pt-8 md:px-6 md:pb-16 md:pt-28">
      <div className="mx-auto max-w-6xl">
        <p className="label-xs text-teal-deep">Customize Your Trip</p>
        <h1 className="mt-2 text-3xl font-extrabold md:text-5xl">
          Customize Your Trip
        </h1>
        <p className="mt-3 max-w-2xl text-sm text-muted-foreground">
          Share your dream — we reply within 6 hours with a tailored plan, cost
          break-up & availability.
        </p>

        <div className="mt-8 grid gap-6 md:grid-cols-[1.1fr_0.9fr]">
          <form
            onSubmit={onSubmit}
            className="rounded-[2rem] bg-card p-6 shadow-float md:p-8"
          >
            <div className="grid gap-4 md:grid-cols-2">
              <label className="grid gap-1.5">
                <span className="text-sm font-medium">Full Name *</span>
                <input
                  required
                  placeholder="John"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="rounded-xl border border-input bg-background px-3 py-2.5 text-sm outline-none focus:ring-2 focus:ring-ring"
                />
              </label>
              <label className="grid gap-1.5">
                <span className="text-sm font-medium">WhatsApp Number *</span>
                <input
                  required
                  placeholder="+91 …"
                  value={form.whatsapp}
                  onChange={(e) =>
                    setForm({ ...form, whatsapp: e.target.value })
                  }
                  className="rounded-xl border border-input bg-background px-3 py-2.5 text-sm outline-none focus:ring-2 focus:ring-ring"
                />
              </label>
              <label className="grid gap-1.5">
                <span className="text-sm font-medium">Destination *</span>
                <input
                  required
                  placeholder="Munnar"
                  list="destinations-list"
                  value={form.destination}
                  onChange={(e) =>
                    setForm({ ...form, destination: e.target.value })
                  }
                  className="rounded-xl border border-input bg-background px-3 py-2.5 text-sm outline-none focus:ring-2 focus:ring-ring"
                />
                <datalist id="destinations-list">
                  <option value="Lakshadweep" />
                  <option value="Kashmir" />
                  <option value="Munnar" />
                  <option value="Thekkady" />
                  <option value="Alappuzha" />
                  <option value="Rajasthan" />
                  <option value="Andaman Islands" />
                  <option value="Coorg" />
                </datalist>
              </label>
              <label className="grid gap-1.5">
                <span className="text-sm font-medium">Travel Date *</span>
                <input
                  required
                  placeholder="December 2026"
                  value={form.travelDate}
                  onChange={(e) =>
                    setForm({ ...form, travelDate: e.target.value })
                  }
                  className="rounded-xl border border-input bg-background px-3 py-2.5 text-sm outline-none focus:ring-2 focus:ring-ring"
                />
              </label>
              <label className="grid gap-1.5">
                <span className="text-sm font-medium">
                  Number of Travelers *
                </span>
                <input
                  required
                  placeholder="2"
                  value={form.travelers}
                  onChange={(e) =>
                    setForm({ ...form, travelers: e.target.value })
                  }
                  className="rounded-xl border border-input bg-background px-3 py-2.5 text-sm outline-none focus:ring-2 focus:ring-ring"
                />
              </label>
              <label className="grid gap-1.5">
                <span className="text-sm font-medium">Trip Duration *</span>
                <input
                  required
                  placeholder="3 Days / 2 Nights"
                  value={form.duration}
                  onChange={(e) =>
                    setForm({ ...form, duration: e.target.value })
                  }
                  className="rounded-xl border border-input bg-background px-3 py-2.5 text-sm outline-none focus:ring-2 focus:ring-ring"
                />
              </label>
              <div className="grid gap-1.5 md:col-span-2">
                <span className="text-sm font-medium">Traveling As *</span>
                <div className="flex flex-wrap gap-2">
                  {TRAVELING_AS.map((g) => (
                    <button
                      key={g}
                      type="button"
                      onClick={() => setForm({ ...form, travelingAs: g })}
                      className={`rounded-full px-4 py-2 text-sm font-semibold transition-colors ${form.travelingAs === g ? "bg-ink text-background shadow-soft" : "bg-surface text-muted-foreground hover:text-foreground"}`}
                    >
                      {g}
                    </button>
                  ))}
                </div>
              </div>
            </div>
            <label className="mt-4 grid gap-1.5">
              <span className="text-sm font-medium">Special Requirements</span>
              <textarea
                rows={4}
                placeholder="Tell us about your preferences..."
                value={form.requirements}
                onChange={(e) =>
                  setForm({ ...form, requirements: e.target.value })
                }
                className="rounded-xl border border-input bg-background px-3 py-2.5 text-sm outline-none focus:ring-2 focus:ring-ring"
              />
            </label>

            <button
              type="submit"
              className="mt-6 flex w-full items-center justify-center gap-2 rounded-full bg-teal-deep px-6 py-4 text-sm font-bold text-white shadow-pill hover:-translate-y-0.5 transition-transform"
            >
              Send Inquiry on WhatsApp
            </button>
            <p className="mt-3 text-center text-xs text-muted-foreground">
              Opens WhatsApp with your message. We reply within 6 hours.
            </p>
          </form>

          <div className="grid gap-6">
            <div className="rounded-[2rem] bg-card p-6 shadow-float">
              <h2 className="font-bold">Why customize with Layago Holidays?</h2>
              <ul className="mt-3 grid gap-2 text-sm text-muted-foreground">
                <li>• Local experts — best stays & rates</li>
                <li>• Free re-quote until you’re happy</li>
                <li>• Pay on arrival or secure online — no hidden fees</li>
                <li>• 24×7 WhatsApp support during trip</li>
              </ul>
            </div>
            <div className="rounded-[2rem] bg-card p-6 shadow-float">
              <h2 className="font-bold">What happens next?</h2>
              <ol className="mt-3 grid gap-2 text-sm text-muted-foreground">
                <li>1. We draft itinerary in 6h</li>
                <li>2. You tweak dates/stays</li>
                <li>3. Confirm with 20% deposit</li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
