export type Product = {
  id: string;
  name: string;
  category: "Wigs" | "Extensions";
  price: number;
  image: string;
};

export const products: Product[] = [
  {
    id: "bella-bob",
    name: "The Bella Bob",
    category: "Wigs",
    price: 52000,
    image: "/bella-bob.jfif",
  },
  {
    id: "silk-press-closure",
    name: "Silk Press Closure",
    category: "Wigs",
    price: 68000,
    image: "/silk-press-closure.jfif",
  },
  {
    id: "body-wave-clip-ins",
    name: "Body Wave Clip-Ins",
    category: "Extensions",
    price: 24000,
    image: "/body-wave.jfif",
  },
  {
    id: "abby-lace-front",
    name: "The Abby Lace Front",
    category: "Wigs",
    price: 89000,
    image: "/abby-lace.jfif",
  },
  {
    id: "straight-tape-ins",
    name: "Straight Tape-Ins",
    category: "Extensions",
    price: 31000,
    image: "/straight-tapins.jfif",
  },
  {
    id: "deep-wave-360",
    name: "Deep Wave 360",
    category: "Wigs",
    price: 95000,
    image: "/deep-wave.jfif",
  },
  {
    id: "kinky-curly-ponytail",
    name: "Kinky Curly Ponytail",
    category: "Extensions",
    price: 19500,
    image: "/kinky-curly-pontail.jfif",
  },
  {
    id: "everyday-bob",
    name: "The Everyday Bob",
    category: "Wigs",
    price: 47000,
    image: "/everyday-bob.jfif",
  },
];

export function formatNaira(amount: number): string {
  return `₦${amount.toLocaleString("en-NG")}`;
}

export const fanFavouriteIds = [
  "bella-bob",
  "silk-press-closure",
  "body-wave-clip-ins",
  "abby-lace-front",
];
