import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { toast } from "sonner";
import { Mail, Phone, MapPin } from "lucide-react";

const WHATSAPP_NUMBER = "94771234567";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Us — Layago Holidays" },
      {
        name: "description",
        content:
          "Chat on WhatsApp, call or send a message. We reply within 2 hours, 8am–10pm.",
      },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim()) {
      toast.error("Please enter your name");
      return;
    }
    if (!form.message.trim()) {
      toast.error("Please enter a message");
      return;
    }
    const text = [
      "Hello! I have a question.",
      "",
      `Name: ${form.name}`,
      `Email: ${form.email || "-"}`,
      "",
      form.message,
    ].join("\n");
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
    toast.success("Opening WhatsApp…");
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="page-aura min-h-svh px-4 pb-28 pt-8 md:px-6 md:pb-16 md:pt-28">
      <div className="mx-auto max-w-6xl">
        <p className="label-xs text-teal-deep">Contact Us</p>
        <h1 className="mt-2 text-3xl font-extrabold md:text-5xl">
          We're here — talk to a human.
        </h1>
        <div className="mt-8 grid gap-6 md:grid-cols-[1.1fr_0.9fr]">
          <form
            onSubmit={onSubmit}
            className="rounded-[2rem] bg-card p-6 shadow-float md:p-8"
          >
            <div className="grid gap-4 md:grid-cols-2">
              <label className="grid gap-1.5">
                <span className="text-sm font-medium">Name</span>
                <input
                  required
                  placeholder="Your name"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="rounded-xl border border-input bg-background px-3 py-2.5 text-sm outline-none focus:ring-2 focus:ring-ring"
                />
              </label>
              <label className="grid gap-1.5">
                <span className="text-sm font-medium">Email</span>
                <input
                  type="email"
                  placeholder="you@email.com"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="rounded-xl border border-input bg-background px-3 py-2.5 text-sm outline-none focus:ring-2 focus:ring-ring"
                />
              </label>
            </div>
            <label className="mt-4 grid gap-1.5">
              <span className="text-sm font-medium">Message</span>
              <textarea
                required
                rows={5}
                placeholder="Hi, we're 2 adults looking at Munnar 3n in Dec…"
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="rounded-xl border border-input bg-background px-3 py-2.5 text-sm outline-none focus:ring-2 focus:ring-ring"
              />
            </label>
            <button
              type="submit"
              className="mt-6 w-full rounded-full bg-ink px-6 py-4 text-sm font-bold text-white shadow-pill hover:-translate-y-0.5 transition-transform"
            >
              Send Message
            </button>
          </form>
          <div className="grid gap-6">
            <div className="rounded-[2rem] bg-card p-6 shadow-float">
              <h2 className="font-bold">Reach us</h2>
              <ul className="mt-4 grid gap-3 text-sm">
                <li className="flex items-center gap-2">
                  <Phone className="h-4 w-4 text-teal" /> +94 77 123 4567
                  (WhatsApp)
                </li>
                <li className="flex items-center gap-2">
                  <Mail className="h-4 w-4 text-teal" />{" "}
                  hello@layagoholidays.travel
                </li>
                <li className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-teal" /> Munnar • Thekkady •
                  Alappuzha • Coorg • Lakshadweep • Kashmir • Rajasthan •
                  Andaman Islands
                </li>
              </ul>
              <p className="mt-4 text-xs text-muted-foreground">
                Hours: 8am–10pm daily. Avg response 2h.
              </p>
            </div>
            <div className="rounded-[2rem] bg-card p-6 shadow-float">
              <h2 className="font-bold">Prefer to customize?</h2>
              <p className="mt-2 text-sm text-muted-foreground">
                Use the inquiry form for dates, budget & interests — we craft a
                plan in 6h.
              </p>
              <a
                href="/customize"
                className="mt-4 inline-flex rounded-full bg-teal px-5 py-2.5 text-sm font-semibold text-white"
              >
                Go to Inquiry Form
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
