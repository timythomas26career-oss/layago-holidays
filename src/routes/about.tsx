import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us — Layago Holidays" },
      {
        name: "description",
        content:
          "Layago Holidays is a curated luxury travel platform. Local experts, honest pricing, design-led stays.",
      },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <div className="page-aura min-h-svh px-4 pb-28 pt-8 md:px-6 md:pb-16 md:pt-28">
      <div className="mx-auto max-w-6xl">
        <p className="label-xs text-teal-deep">About Us</p>
        <h1 className="mt-2 max-w-3xl text-3xl font-extrabold md:text-5xl">
          We design trips you’ll re-live, not just re-post.
        </h1>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <div className="rounded-[2rem] bg-card p-6 shadow-float md:p-8">
            <p className="text-sm leading-relaxed text-muted-foreground">
              Layago Holidays started with one hill — Munnar — and a promise:
              mist, tea gardens and waterfalls, done right. Today we cover 8
              signature destinations — Munnar, Thekkady, Lakshadweep, Kashmir,
              Coorg, Alappuzha, Rajasthan and the Andaman Islands — but we still
              obsess over light, water, sleep and taste. Every stay is
              hand-picked, every experience is tested by us, every guide is on
              WhatsApp.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              No mass inventory. Small, design-led stays, fair to locals, honest
              to you. If we wouldn’t send our family, we won’t send you.
            </p>
            <div className="mt-6 grid grid-cols-3 gap-3 text-center">
              {[
                { v: "12k+", l: "travelers" },
                { v: "8", l: "destinations" },
                { v: "4.8", l: "avg rating" },
              ].map((s) => (
                <div key={s.l} className="rounded-2xl bg-surface p-4">
                  <p className="text-xl font-extrabold">{s.v}</p>
                  <p className="text-xs text-muted-foreground">{s.l}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="grid gap-6">
            <div className="rounded-[2rem] bg-card p-6 shadow-float">
              <h2 className="font-bold">How we work</h2>
              <ol className="mt-3 grid gap-2 text-sm text-muted-foreground">
                <li>1. Listen — dates, taste, pace, budget</li>
                <li>2. Draft — day-by-day plan with real options</li>
                <li>3. Refine — 2–3 quick revisions</li>
                <li>4. Go — on-trip support, not just pre-trip sales</li>
              </ol>
            </div>
            <div className="rounded-[2rem] bg-card p-6 shadow-float">
              <h2 className="font-bold">Meet the team</h2>
              <p className="mt-2 text-sm text-muted-foreground">
                Guides Emilia, Marco & Naia on call — plus ops across all 8
                destinations. Small team, real humans.
              </p>
              <Link
                to="/contact"
                className="mt-4 inline-flex rounded-full bg-ink px-5 py-2.5 text-sm font-semibold text-white"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
