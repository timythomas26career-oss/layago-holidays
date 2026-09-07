import heroLakshadweep from "@/assets/hero-lakshadweep.jpg";
import heroMunnar from "@/assets/hero-munnar.jpg";
import heroKashmir from "@/assets/place-kashmir.jpg";
import alappuzhaKerala from "@/assets/alappuzha-kerala.jpg";
import placeThekkady from "@/assets/place-thekkady.jpg";
import placeRajasthan from "@/assets/place-rajasthan.jpg";
import placeAndaman from "@/assets/place-andaman.jpg";
import catForests from "@/assets/cat-forests.jpg";
import placeCoorg from "@/assets/place-coorg.jpg";

export type Package = {
  slug: string;
  title: string;
  location: string;
  duration: string;
  price: number;
  oldPrice?: number;
  rating: number;
  image: string;
  category: string;
  highlights: string[];
  itinerary: { day: string; title: string; desc: string }[];
  includes: string[];
  excludes: string[];
  bestSeason: string;
};

export const packages: Package[] = [
  {
    slug: "lakshadweep-escape",
    title: "Lakshadweep Escape",
    location: "Lakshadweep",
    duration: "4 Days / 3 Nights",
    price: 18999,
    rating: 4.9,
    image: heroLakshadweep,
    category: "Adventure",
    highlights: [
      "Seaplane transfer",
      "Water-villa stay",
      "Snorkeling",
      "Deep-sea fishing",
      "Sunset cruise",
    ],
    itinerary: [
      {
        day: "Day 1",
        title: "Arrival Lakshadweep",
        desc: "Transfer to island resort, turquoise lagoon welcome and beach leisure.",
      },
      {
        day: "Day 2",
        title: "Marine Experiences",
        desc: "Snorkeling over coral lagoons, clear-water kayaking and island hopping.",
      },
      {
        day: "Day 3",
        title: "Island Leisure",
        desc: "Beach time, marine life spotting and sunset cruise.",
      },
      {
        day: "Day 4",
        title: "Departure",
        desc: "Breakfast and departure with island memories.",
      },
    ],
    includes: ["Island stay", "Daily breakfast", "Island transfers", "Guide"],
    excludes: ["Travel to Kochi", "Water sports charges"],
    bestSeason: "Oct — Apr",
  },
  {
    slug: "kashmir-dream",
    title: "Kashmir Dream",
    location: "Kashmir",
    duration: "6 Days / 5 Nights",
    price: 21999,
    rating: 4.9,
    image: heroKashmir,
    category: "Alpine Escapes",
    highlights: [
      "Houseboat on Dal Lake",
      "Gulmarg gondola ride",
      "Pahalgam valley trek",
      "Mughal garden tour",
    ],
    itinerary: [
      {
        day: "Day 1",
        title: "Arrival Srinagar",
        desc: "Dal Lake shikara ride, Mughal garden visit and houseboat check-in.",
      },
      {
        day: "Day 2",
        title: "Gulmarg",
        desc: "Meadows, snow peaks (seasonal skiing) and valley views.",
      },
      {
        day: "Day 3",
        title: "Pahalgam",
        desc: "Valley sightseeing, river walks and Mughal heritage.",
      },
      {
        day: "Day 4",
        title: "Sonmarg",
        desc: "Alpine valleys, mountain sightseeing and leisure.",
      },
      {
        day: "Day 5",
        title: "Srinagar",
        desc: "Mughal gardens, old city culture and shopping.",
      },
      { day: "Day 6", title: "Departure", desc: "Breakfast and departure." },
    ],
    includes: [
      "Houseboat + hotel",
      "Daily breakfast",
      "Sightseeing & transfers",
      "Guide",
    ],
    excludes: ["Travel to Srinagar", "Skiing charges"],
    bestSeason: "Mar — Oct",
  },
  {
    slug: "kerala-backwaters-bliss",
    title: "Kerala Backwaters Bliss",
    location: "Alappuzha",
    duration: "3 Days / 2 Nights",
    price: 10999,
    rating: 4.8,
    image: alappuzhaKerala,
    category: "Backwater Bliss",
    highlights: [
      "Glide through timeless backwaters",
      "Traditional houseboat stay",
      "Palm-fringed canals",
    ],
    itinerary: [
      {
        day: "Day 1",
        title: "Alappuzha Houseboat",
        desc: "Board traditional houseboat, glide through backwaters and village canals.",
      },
      {
        day: "Day 2",
        title: "Backwater Village",
        desc: "Village walks, canoe ride and backwater sunset.",
      },
      { day: "Day 3", title: "Departure", desc: "Breakfast and departure." },
    ],
    includes: ["Houseboat stay", "All meals on houseboat", "Transfers"],
    excludes: ["Travel to Alappuzha", "Personal expenses"],
    bestSeason: "Sep — Mar",
  },
  {
    slug: "rajasthan-royal-trail",
    title: "Rajasthan Royal Trail",
    location: "Rajasthan",
    duration: "6 Days / 5 Nights",
    price: 24999,
    rating: 4.8,
    image: placeRajasthan,
    category: "Royal India",
    highlights: [
      "Royal palaces & forts",
      "Golden desert sunsets",
      "Culture & heritage",
    ],
    itinerary: [
      {
        day: "Day 1",
        title: "Arrival Jaipur",
        desc: "Pink city palaces and bazaars.",
      },
      {
        day: "Day 2",
        title: "Jaipur",
        desc: "Amber Fort, City Palace and heritage culture.",
      },
      {
        day: "Day 3",
        title: "Jodhpur",
        desc: "Mehrangarh Fort and blue city walks.",
      },
      {
        day: "Day 4",
        title: "Jaisalmer",
        desc: "Golden desert, dunes and sunset safari.",
      },
      {
        day: "Day 5",
        title: "Udaipur",
        desc: "Lake palaces and royal heritage.",
      },
      { day: "Day 6", title: "Departure", desc: "Breakfast and departure." },
    ],
    includes: [
      "Heritage stays",
      "Daily breakfast",
      "Sightseeing & desert safari",
      "Transfers",
    ],
    excludes: ["Travel to Rajasthan", "Meals other than breakfast"],
    bestSeason: "Oct — Mar",
  },
  {
    slug: "andaman-adventure",
    title: "Andaman Adventure",
    location: "Andaman Islands",
    duration: "5 Days / 4 Nights",
    price: 19999,
    rating: 4.8,
    image: placeAndaman,
    category: "Island Hideaways",
    highlights: [
      "At the edge of the world",
      "Clear waters & white beaches",
      "Island experiences",
    ],
    itinerary: [
      {
        day: "Day 1",
        title: "Arrival Port Blair",
        desc: "Beach arrival and island welcome.",
      },
      {
        day: "Day 2",
        title: "Havelock Island",
        desc: "Radhanagar Beach, clear-water snorkeling and island leisure.",
      },
      {
        day: "Day 3",
        title: "Neil Island",
        desc: "Natural bridges, beaches and island hopping.",
      },
      {
        day: "Day 4",
        title: "Ross & North Bay",
        desc: "Heritage and marine island experiences.",
      },
      { day: "Day 5", title: "Departure", desc: "Breakfast and departure." },
    ],
    includes: ["Island stays", "Daily breakfast", "Ferry transfers", "Guide"],
    excludes: ["Travel to Port Blair", "Water sports charges"],
    bestSeason: "Oct — Apr",
  },
  {
    slug: "thekkady-wild-spice",
    title: "Thekkady Wild Spice Trail",
    location: "Thekkady",
    duration: "4 Days / 3 Nights",
    price: 14999,
    rating: 4.8,
    image: placeThekkady,
    category: "Adventure",
    highlights: [
      "Periyar Wildlife Sanctuary boat ride",
      "Spice plantation walk",
      "Kathakali & Kalaripayattu show",
      "Nature trek through dense forest",
    ],
    itinerary: [
      {
        day: "Day 1",
        title: "Arrival Thekkady",
        desc: "Transfer to hill resort, evening spice market visit and cultural show.",
      },
      {
        day: "Day 2",
        title: "Periyar Wildlife",
        desc: "Boat safari on Periyar Lake, wildlife spotting and nature walk.",
      },
      {
        day: "Day 3",
        title: "Spice & Culture",
        desc: "Guided spice plantation tour, Kathakali performance and Kalaripayattu martial arts.",
      },
      {
        day: "Day 4",
        title: "Departure",
        desc: "Breakfast and departure with spice-scented memories.",
      },
    ],
    includes: ["Hill resort stay", "Daily breakfast", "Periyar boat ride", "Spice tour", "Guide"],
    excludes: ["Travel to Thekkady", "Lunch/dinner"],
    bestSeason: "Sep — Mar",
  },
  {
    slug: "coorg-coffee-trail",
    title: "Coorg Coffee Trail",
    location: "Coorg, Karnataka",
    duration: "4 Days / 3 Nights",
    price: 15999,
    rating: 4.8,
    image: placeCoorg,
    category: "Hill Country",
    highlights: [
      "Coffee plantation stay",
      "Abbey Falls trek",
      "Raja's Seat sunset view",
      "Dubare elephant camp visit",
    ],
    itinerary: [
      {
        day: "Day 1",
        title: "Arrival Coorg",
        desc: "Transfer to coffee estate resort, plantation walk and evening leisure.",
      },
      {
        day: "Day 2",
        title: "Sightseeing",
        desc: "Abbey Falls trek, Raja's Seat sunset and local Coorg cuisine.",
      },
      {
        day: "Day 3",
        title: "Dubare Elephant Camp",
        desc: "Elephant interaction, river rafting and forest exploration.",
      },
      {
        day: "Day 4",
        title: "Departure",
        desc: "Breakfast and departure with coffee-scented memories.",
      },
    ],
    includes: ["Coffee estate stay", "Daily breakfast", "Transfers", "Dubare camp entry", "Guide"],
    excludes: ["Travel to Coorg", "Lunch/dinner"],
    bestSeason: "Oct — May",
  },
  {
    slug: "munnar-tea-garden-retreat",
    title: "Munnar Tea Garden Retreat",
    location: "Munnar",
    duration: "4 Days / 3 Nights",
    price: 12999,
    rating: 4.9,
    image: heroMunnar,
    category: "Kerala Classics",
    highlights: [
      "Tea plantation stay",
      "Mist-viewpoint sunrise",
      "Tea museum visit",
      "Mattupetty & Echo Point",
      "Spice garden walk",
      "Waterfalls & Dam tour",
    ],
    itinerary: [
      {
        day: "Day 1",
        title: "Arrival Munnar",
        desc: "Scenic drive through winding tea estates. Check-in and evening tea gardens walk.",
      },
      {
        day: "Day 2",
        title: "Munnar Sights",
        desc: "Mist-viewpoint sunrise, tea museum, Mattupetty Dam and Echo Point.",
      },
      {
        day: "Day 3",
        title: "Nature & Waterfalls",
        desc: "Lakkam waterfalls, spice garden walk and local heritage leisure.",
      },
      {
        day: "Day 4",
        title: "Departure",
        desc: "Breakfast, tea-scented memories and departure.",
      },
    ],
    includes: ["Tea estate resort stay", "Daily breakfast", "Sightseeing & transfers", "Guide"],
    excludes: ["Travel to Munnar", "Lunch/dinner"],
    bestSeason: "Sep — May",
  },
  {
    slug: "ladies-only-kashmir-serenity",
    title: "Ladies Only – Kashmir Serenity Retreat",
    location: "Kashmir",
    duration: "6 Days / 5 Nights",
    price: 26999,
    rating: 4.9,
    image: heroKashmir,
    category: "Alpine Valleys",
    highlights: [
      "All-women group tour",
      "Dedicated female tour captain",
      "Private shikara ride & spa session",
      "Mughal gardens & local arts tour",
    ],
    itinerary: [
      {
        day: "Day 1",
        title: "Srinagar Welcome",
        desc: "Warm welcome, Dal Lake shikara ride and Mughal garden walk — ladies group.",
      },
      {
        day: "Day 2",
        title: "Gulmarg",
        desc: "Meadow walks, valley views and cultural shopping.",
      },
      {
        day: "Day 3",
        title: "Pahalgam",
        desc: "Valley picnic, riverside leisure and guided sightseeing.",
      },
      {
        day: "Day 4",
        title: "Srinagar Culture",
        desc: "Mughal heritage, local arts tour and garden exploration.",
      },
      {
        day: "Day 5",
        title: "Spa & Leisure",
        desc: "Private spa session, free time for shopping and wellness.",
      },
      {
        day: "Day 6",
        title: "Departure",
        desc: "Breakfast and departure with new friendships.",
      },
    ],
    includes: [
      "Women-hosted stays",
      "Daily breakfast",
      "Dedicated female tour captain",
      "Private shikara ride",
      "Spa session",
      "Transfers",
    ],
    excludes: ["Travel to Srinagar", "Personal expenses"],
    bestSeason: "Apr — Oct",
  },
  {
    slug: "ladies-only-kerala-wellness-spice",
    title: "Ladies Only – Kerala Wellness & Spice Heritage",
    location: "Thekkady, Munnar, Alappuzha",
    duration: "5 Days / 4 Nights",
    price: 19999,
    rating: 4.9,
    image: placeThekkady,
    category: "Kerala Backwaters",
    highlights: [
      "Women-only group houseboat",
      "Ayurvedic massage & wellness spa",
      "Local cooking masterclass",
      "Female-guided spice forest walk",
    ],
    itinerary: [
      {
        day: "Day 1",
        title: "Munnar Arrival",
        desc: "Transfer to tea estate resort, evening wellness session — ladies group.",
      },
      {
        day: "Day 2",
        title: "Thekkady",
        desc: "Female-guided spice forest walk, Ayurvedic massage and cooking masterclass.",
      },
      {
        day: "Day 3",
        title: "Thekkady Wellness",
        desc: "Wellness spa, nature walk and local culture.",
      },
      {
        day: "Day 4",
        title: "Alappuzha Houseboat",
        desc: "Women-only group houseboat through timeless backwaters.",
      },
      {
        day: "Day 5",
        title: "Departure",
        desc: "Breakfast and departure with new friendships.",
      },
    ],
    includes: [
      "Women-hosted stays",
      "Daily breakfast",
      "Ayurvedic massage",
      "Cooking masterclass",
      "Female guide",
      "Transfers",
    ],
    excludes: ["Travel to Kerala", "Personal expenses"],
    bestSeason: "Sep — Mar",
  },
];

export const getPackage = (slug: string) =>
  packages.find((p) => p.slug === slug);
