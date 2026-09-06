export function BookingCTA({ price }: { price: number }) {
  return (
    <div className="flex flex-wrap items-center gap-4">
      <p className="shrink-0 text-2xl font-extrabold">
        ₹{price}
        <span className="ml-1 text-xs font-medium text-muted-foreground">
          /Per Day
        </span>
      </p>
    </div>
  );
}
