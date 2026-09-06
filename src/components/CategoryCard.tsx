export function CategoryCard({ name, image }: { name: string; image: string }) {
  return (
    <button
      type="button"
      className="group relative h-[148px] w-[112px] shrink-0 overflow-hidden rounded-[22px] shadow-soft sm:h-36 sm:w-[128px] md:h-32 md:w-28"
    >
      <img
        src={image}
        alt={name}
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
      />
      <span className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
      <span className="absolute inset-x-0 bottom-0 p-3 text-left text-[13px] font-bold leading-none text-white">
        {name}
      </span>
    </button>
  );
}
