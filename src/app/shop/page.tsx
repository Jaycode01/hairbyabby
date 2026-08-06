import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import AddToCartButton from "@/components/AddToCartButton";
import { products, formatNaira } from "@/data/products";

export default function ShopPage() {
  return (
    <>
      <Header />
      <main className="px-6 py-16 md:px-10 md:py-20">
        <div className="mx-auto max-w-7xl">
          <span className="font-body text-[11px] uppercase tracking-[0.15em] text-taupe">
            Full Collection
          </span>
          <h1 className="mt-3 font-display text-4xl italic text-ink md:text-5xl">
            Shop wigs &amp; extensions
          </h1>
          <p className="mt-4 max-w-xl font-body text-sm leading-relaxed text-ink/60">
            Every piece listed here is in stock and ready to fit. Add what you
            like to your cart, then confirm size, density and cap type with us
            on WhatsApp before dispatch.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            {["All", "Wigs", "Extensions", "New In", "Sale"].map((f, i) => (
              <button
                key={f}
                className={`rounded-full border px-4 py-2 font-body text-xs uppercase tracking-widest transition-colors ${
                  i === 0
                    ? "border-ink bg-ink text-cream"
                    : "border-ink/15 text-ink/60 hover:border-ink/40"
                }`}
              >
                {f}
              </button>
            ))}
          </div>

          <div className="mt-10 grid grid-cols-2 gap-x-5 gap-y-12 md:grid-cols-4">
            {products.map((p) => (
              <div key={p.id}>
                <Image
                  src={p.image}
                  alt={p.name}
                  width={800}
                  height={1067}
                  className="w-full h-auto"
                />
                <span className="mt-3 block font-body text-[10px] uppercase tracking-[0.12em] text-taupe">
                  {p.category}
                </span>
                <h3 className="mt-1 font-body text-sm text-ink">{p.name}</h3>
                <span className="font-body text-sm text-ink/60">
                  {formatNaira(p.price)}
                </span>
                <AddToCartButton
                  product={p}
                  className="mt-3 w-full px-4 py-2"
                />
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
