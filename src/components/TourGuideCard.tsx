export function TourGuideCard({
  name,
  rate,
  initials,
}: {
  name: string;
  rate: string;
  initials: string;
}) {
  return (
    <div className="flex min-w-0 items-center gap-3 rounded-2xl bg-surface p-2.5 pr-4">
      <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-teal text-sm font-bold text-white">
        {initials}
      </span>
      <div className="min-w-0">
        <p className="truncate text-sm font-semibold">{name}</p>
        <p className="truncate text-xs text-muted-foreground">{rate}</p>
      </div>
    </div>
  );
}
