import heroLakshadweep from "@/assets/hero-lakshadweep.jpg";
import heroMunnar from "@/assets/hero-munnar.jpg";
import heroKashmir from "@/assets/place-kashmir.jpg";
import placeThekkady from "@/assets/place-thekkady.jpg";
import placeRajasthan from "@/assets/place-rajasthan.jpg";
import placeAndaman from "@/assets/place-andaman.jpg";
import catBeaches from "@/assets/cat-beaches.jpg";
import catForests from "@/assets/cat-forests.jpg";
import catHistorical from "@/assets/cat-historical.jpg";
import catWildlife from "@/assets/cat-wildlife.jpg";
import catCities from "@/assets/cat-cities.jpg";
import placeCoorg from "@/assets/place-coorg.jpg";
import alappuzhaKerala from "@/assets/alappuzha-kerala.jpg";

export type Destination = {
  slug: string;
  name: string;
  location: string;
  rating: number;
  price: number;
  image: string;
  overview: string;
  tags: string[];
  category: string;
};

export const destinations: Destination[] = [
  {
    slug: "lakshadweep",
    name: "Lakshadweep",
    location: "Kavaratti, India",
    rating: 4.9,
    price: 420,
    image: heroLakshadweep,
    category: "Coral Lagoons",
    overview: "Where the Arabian Sea meets paradise",
    tags: ["Private island luxury", "Seaplane transfer", "Water-villa stay", "Snorkeling", "Deep-sea fishing", "Sunset cruise"],
  },
  {
    slug: "kashmir",
    name: "Kashmir",
    location: "India",
    rating: 4.8,
    price: 310,
    image: heroKashmir,
    category: "Alpine Valleys",
    overview: "Heaven on Earth — snow peaks and Mughal gardens",
    tags: ["Houseboat on Dal Lake", "Gulmarg gondola ride", "Pahalgam valley trek", "Mughal garden tour"],
  },
  {
    slug: "munnar",
    name: "Munnar",
    location: "Kerala, India",
    rating: 4.9,
    price: 220,
    image: heroMunnar,
    category: "Kerala Classics",
    overview: "Rolling emerald tea estates in the clouds",
    tags: ["Tea estates in the mist"],
  },
  {
    slug: "thekkady",
    name: "Thekkady",
    location: "Kerala, India",
    rating: 4.8,
    price: 235,
    image: placeThekkady,
    category: "Spice Forests",
    overview: "Ancient spice forests and wild encounters",
    tags: ["Wild and aromatic experiences"],
  },
  {
    slug: "coorg",
    name: "Coorg",
    location: "Karnataka, India",
    rating: 4.8,
    price: 250,
    image: placeCoorg,
    category: "Coffee Hill Country",
    overview: "Misty coffee plantations and lush Western Ghats",
    tags: ["Coffee plantation stay", "Abbey Falls trek", "Raja's Seat sunset", "Dubare elephant camp"],
  },
  {
    slug: "alappuzha",
    name: "Alappuzha",
    location: "Kerala, India",
    rating: 4.7,
    price: 210,
    image: alappuzhaKerala,
    category: "Kerala Backwaters",
    overview: "Glide through Kerala's timeless backwaters",
    tags: ["Classical houseboats"],
  },
  {
    slug: "rajasthan",
    name: "Rajasthan",
    location: "Rajasthan, India",
    rating: 4.8,
    price: 340,
    image: placeRajasthan,
    category: "Royal India",
    overview: "Royal palaces and golden desert sunsets",
    tags: ["Palaces and desert experiences"],
  },
  {
    slug: "andaman",
    name: "Andaman Islands",
    location: "India",
    rating: 4.8,
    price: 380,
    image: placeAndaman,
    category: "Island Hideaways",
    overview: "At the edge of the world",
    tags: ["Clear water and soft sand"],
  },
];

export const categories = [
  { name: "Beaches", image: catBeaches },
  { name: "Forests", image: catForests },
  { name: "Historical", image: catHistorical },
  { name: "Wild Life", image: catWildlife },
  { name: "Mountains", image: heroKashmir },
  { name: "Cities", image: catCities },
];

export const guides = [
  { name: "Emilia Ricardo", rate: "₹25 (1day)", initials: "ER" },
  { name: "Marco Silva", rate: "₹28 (1day)", initials: "MS" },
  { name: "Naia Kahale", rate: "₹24 (1day)", initials: "NK" },
];

export const getDestination = (slug: string) =>
  destinations.find((d) => d.slug === slug);
