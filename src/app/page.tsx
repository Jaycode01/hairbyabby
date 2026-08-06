import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Strand from "@/components/Strand";
import Image from "next/image";
import PlaceholderImage from "@/components/PlaceholderImage";
import { Sparkles, Truck, MessageCircle } from "lucide-react";

const categories = [
  {
    name: "Wigs",
    from: "₦45,000",
    href: "/shop?category=wigs",
    image: "/wigs-collection.png",
    width: 900,
    height: 563,
  },
  {
    name: "Extensions",
    from: "₦18,000",
    href: "/shop?category=extensions",
    image: "/extension-collection.png",
    width: 900,
    height: 563,
  },
];

const favourites = [
  {
    name: "The Bella Bob",
    price: "₦52,000",
    image: "/bella-bob.jfif",
  },
  {
    name: "Silk Press Closure",
    price: "₦68,000",
    image: "/silk-press-closure.jfif",
  },
  {
    name: "Body Wave Clip-Ins",
    price: "₦24,000",
    image: "/body-wave.jfif",
  },
  {
    name: "The Abby Lace Front",
    price: "₦89,000",
    image: "/abby-lace.jfif",
  },
];

export default function Home() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="relative overflow-hidden px-6 pb-20 pt-14 md:px-10 md:pb-28 md:pt-20">
          <div className="mx-auto grid max-w-7xl items-center gap-12 md:grid-cols-2 md:gap-8">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-ink/15 px-4 py-1.5 font-body text-[11px] uppercase tracking-[0.15em] text-ink/60">
                New Collection — 2026
              </span>
              <h1 className="mt-6 font-display text-[13vw] leading-[0.95] tracking-tight text-ink md:text-[4.6vw]">
                Hair that
                <br />
                moves like <span className="italic text-taupe">yours.</span>
              </h1>
              <p className="mt-6 max-w-md font-body text-base leading-relaxed text-ink/65">
                Premium wigs and extensions, hand-selected for texture and
                density, then fitted with care. As worn by{" "}
                <span className="text-ink">@hairbyabby</span> clients across
                Lagos.
              </p>
              <div className="mt-9 flex flex-wrap items-center gap-4">
                <a
                  href="/shop"
                  className="rounded-full bg-ink px-7 py-3.5 font-body text-sm font-medium text-cream transition-colors hover:bg-charcoal"
                >
                  Shop the Collection
                </a>
                <a
                  href="https://wa.me/2340000000000"
                  className="rounded-full border border-ink/20 px-7 py-3.5 font-body text-sm font-medium text-ink transition-colors hover:border-ink/40"
                >
                  Book a Fitting
                </a>
              </div>
            </div>

            <div className="relative">
              <Image
                src="/hero-model.png"
                alt=""
                width={1000}
                height={1250}
                className="w-full h-auto"
              />
              <div className="absolute -bottom-6 -left-6 hidden w-40 rounded-sm bg-cream p-3 shadow-lg shadow-ink/10 md:block">
                <Image
                  src="/hairline.png"
                  alt="Close-up of lace front hairline"
                  width={400}
                  height={400}
                  className="w-full h-auto rounded-sm"
                />
              </div>
            </div>
          </div>

          <Strand
            className="absolute bottom-0 left-0 h-16 w-full opacity-70"
            color="var(--sand-deep)"
          />
        </section>

        {/* Shop by category */}
        <section className="px-6 py-20 md:px-10 md:py-28">
          <div className="mx-auto max-w-7xl">
            <span className="font-body text-[11px] uppercase tracking-[0.15em] text-taupe">
              What we offer
            </span>
            <h2 className="mt-3 font-display text-4xl italic text-ink md:text-5xl">
              Shop by category
            </h2>

            <div className="mt-10 grid gap-6 md:grid-cols-2">
              {categories.map((cat) => (
                <a
                  key={cat.name}
                  href={cat.href}
                  className="group block overflow-hidden rounded-sm"
                >
                  <Image
                    src={cat.image}
                    alt={`${cat.name} collection`}
                    width={cat.width}
                    height={cat.height}
                    className="w-full h-auto transition-transform duration-500 group-hover:scale-[1.02]"
                  />
                  <div className="mt-4 flex items-baseline justify-between">
                    <h3 className="font-display text-2xl text-ink">
                      {cat.name}
                    </h3>
                    <span className="font-body text-sm text-taupe">
                      From {cat.from}
                    </span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Fan favourites */}
        <section className="bg-cream-deep px-6 py-20 md:px-10 md:py-28">
          <div className="mx-auto max-w-7xl">
            <div className="flex items-end justify-between">
              <div>
                <span className="font-body text-[11px] uppercase tracking-[0.15em] text-taupe">
                  Handpicked
                </span>
                <h2 className="mt-3 font-display text-4xl italic text-ink md:text-5xl">
                  Fan favourites
                </h2>
              </div>
              <a
                href="/shop"
                className="hidden font-body text-sm text-ink/70 underline decoration-sand-deep decoration-2 underline-offset-4 hover:text-ink md:block"
              >
                View all pieces
              </a>
            </div>
            <div className="mt-10 grid grid-cols-2 gap-5 md:grid-cols-4">
              {favourites.map((item) => (
                <div key={item.name}>
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={800}
                    height={1067}
                    className="w-full h-auto"
                  />
                  <h3 className="mt-3 font-body text-sm text-ink">
                    {item.name}
                  </h3>
                  <span className="font-body text-sm text-taupe">
                    {item.price}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Brand story strip */}
        <section className="relative overflow-hidden bg-ink px-6 py-24 text-cream md:px-10 md:py-32">
          <Strand
            className="absolute top-0 left-0 h-16 w-full opacity-40"
            color="var(--sage)"
            flip
          />
          <div className="mx-auto max-w-3xl text-center">
            <span className="font-body text-[11px] uppercase tracking-[0.15em] text-sage">
              Est. in Lagos
            </span>
            <p className="mt-6 font-display text-2xl italic leading-snug md:text-3xl">
              Every unit is chosen by hand, checked for density and shine, then
              fitted the way a good tailor fits a jacket — to the person, not
              the mannequin.
            </p>
            <p className="mt-6 font-body text-sm text-cream/50">
              Follow the process on Instagram —{" "}
              <a
                href="https://instagram.com/hairbyabby"
                className="text-cream underline underline-offset-4"
              >
                @hairbyabby
              </a>
            </p>
          </div>
        </section>

        {/* Trust bar */}
        <section className="px-6 py-20 md:px-10">
          <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-3">
            {[
              {
                icon: Sparkles,
                title: "Premium Texture",
                copy: "Every piece is checked for density, shine and a natural hairline before it ships.",
              },
              {
                icon: Truck,
                title: "Nationwide Delivery",
                copy: "Door-to-door delivery across Nigeria, packed to protect the install.",
              },
              {
                icon: MessageCircle,
                title: "Personal Fitting Advice",
                copy: "DM us on WhatsApp for help picking density, length and cap size. Real answers, no bots.",
              },
            ].map(({ icon: Icon, title, copy }) => (
              <div key={title}>
                <Icon size={22} strokeWidth={1.5} className="text-sand-deep" />
                <h3 className="mt-4 font-display text-xl text-ink">{title}</h3>
                <p className="mt-2 font-body text-sm leading-relaxed text-ink/60">
                  {copy}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Email capture */}
        <section className="px-6 pb-24 md:px-10">
          <div className="mx-auto max-w-7xl rounded-sm bg-sage/40 px-8 py-14 text-center md:px-16 md:py-20">
            <span className="font-body text-[11px] uppercase tracking-[0.15em] text-taupe">
              Stay ahead
            </span>
            <h2 className="mx-auto mt-3 max-w-lg font-display text-3xl italic text-ink md:text-4xl">
              First access to new drops
            </h2>
            <p className="mx-auto mt-3 max-w-sm font-body text-sm text-ink/65">
              Subscribe and get 10% off your first order, plus early access
              before pieces sell out.
            </p>
            <form className="mx-auto mt-7 flex max-w-md flex-col gap-3 sm:flex-row">
              <label htmlFor="email" className="sr-only">
                Email address
              </label>
              <input
                id="email"
                type="email"
                required
                placeholder="you@email.com"
                className="w-full rounded-full border border-ink/15 bg-cream px-5 py-3 font-body text-sm text-ink placeholder:text-ink/40 focus:outline-none"
              />
              <button
                type="submit"
                className="whitespace-nowrap rounded-full bg-ink px-6 py-3 font-body text-sm font-medium text-cream transition-colors hover:bg-charcoal"
              >
                Get 10% Off
              </button>
            </form>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
