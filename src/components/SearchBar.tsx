import { Search, SlidersHorizontal } from "lucide-react";

export function SearchBar({
  placeholder = "Search all around the world",
  label = "Where do you want to go?",
  tone = "light",
}: {
  placeholder?: string;
  label?: string;
  tone?: "light" | "dark";
}) {
  return (
    <div className="w-full">
      <p
        className={
          tone === "dark"
            ? "mb-2.5 text-[13px] font-medium text-white/85"
            : "mb-2.5 text-[13px] font-medium text-muted-foreground"
        }
      >
        {label}
      </p>
      <form
        role="search"
        onSubmit={(e) => e.preventDefault()}
        className="flex items-center gap-3 rounded-full bg-white py-1 pl-4 pr-1.5 shadow-[0_8px_24px_rgba(0,0,0,0.08)]"
      >
        <Search
          className="h-[18px] w-[18px] shrink-0 text-muted-foreground"
          aria-hidden
        />
        <input
          type="search"
          aria-label={label}
          placeholder={placeholder}
          className="min-w-0 flex-1 bg-transparent py-3 text-[14px] text-foreground outline-none placeholder:text-muted-foreground/70"
        />
        <button
          type="submit"
          aria-label="Search destinations"
          className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-black text-white shadow-pill transition-transform hover:scale-105"
        >
          <SlidersHorizontal className="h-[18px] w-[18px]" />
        </button>
      </form>
    </div>
  );
}
