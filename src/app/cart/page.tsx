"use client";

import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import { useCart } from "@/context/CartContext";
import { formatNaira } from "@/data/products";
import { buildCartWhatsAppLink } from "@/lib/whatsapp";
import { Minus, Plus, X } from "lucide-react";

export default function CartPage() {
  const { items, updateQuantity, removeItem, subtotal } = useCart();
  const isEmpty = items.length === 0;

  return (
    <>
      <Header />
      <main className="px-6 py-16 md:px-10 md:py-20">
        <div className="mx-auto max-w-4xl">
          <span className="font-body text-[11px] uppercase tracking-[0.15em] text-taupe">
            Your Order
          </span>
          <h1 className="mt-3 font-display text-4xl italic text-ink md:text-5xl">
            Cart
          </h1>

          {isEmpty ? (
            <div className="mt-14 rounded-sm bg-cream-deep px-8 py-16 text-center">
              <p className="font-body text-sm text-ink/60">
                Your cart is empty right now.
              </p>
              <Link
                href="/shop"
                className="mt-6 inline-block rounded-full bg-ink px-7 py-3.5 font-body text-sm font-medium text-cream transition-colors hover:bg-charcoal"
              >
                Browse the Collection
              </Link>
            </div>
          ) : (
            <>
              <div className="mt-10 divide-y divide-ink/10">
                {items.map((item) => (
                  <div key={item.id} className="flex items-center gap-5 py-6">
                    <Image
                      src={item.image}
                      alt={item.name}
                      width={200}
                      height={200}
                      className="w-20 shrink-0 rounded-sm object-cover md:w-24"
                    />

                    <div className="min-w-0 flex-1">
                      <h3 className="font-body text-sm text-ink md:text-base">
                        {item.name}
                      </h3>
                      <span className="font-body text-sm text-taupe">
                        {formatNaira(item.price)}
                      </span>
                    </div>

                    <div className="flex items-center gap-3 rounded-full border border-ink/15 px-2 py-1.5">
                      <button
                        type="button"
                        aria-label={`Decrease quantity of ${item.name}`}
                        onClick={() =>
                          updateQuantity(item.id, item.quantity - 1)
                        }
                        className="flex h-6 w-6 items-center justify-center text-ink/60 hover:text-ink"
                      >
                        <Minus size={13} />
                      </button>
                      <span className="w-4 text-center font-body text-sm text-ink">
                        {item.quantity}
                      </span>
                      <button
                        type="button"
                        aria-label={`Increase quantity of ${item.name}`}
                        onClick={() =>
                          updateQuantity(item.id, item.quantity + 1)
                        }
                        className="flex h-6 w-6 items-center justify-center text-ink/60 hover:text-ink"
                      >
                        <Plus size={13} />
                      </button>
                    </div>

                    <span className="hidden w-24 shrink-0 text-right font-body text-sm text-ink sm:block">
                      {formatNaira(item.price * item.quantity)}
                    </span>

                    <button
                      type="button"
                      aria-label={`Remove ${item.name} from cart`}
                      onClick={() => removeItem(item.id)}
                      className="shrink-0 text-ink/40 hover:text-ink"
                    >
                      <X size={16} />
                    </button>
                  </div>
                ))}
              </div>

              <div className="mt-10 flex flex-col items-end gap-6 border-t border-ink/10 pt-8">
                <div className="flex w-full items-baseline justify-between sm:w-72">
                  <span className="font-body text-sm text-ink/60">
                    Subtotal
                  </span>
                  <span className="font-display text-2xl text-ink">
                    {formatNaira(subtotal)}
                  </span>
                </div>
                <p className="max-w-sm text-right font-body text-xs leading-relaxed text-ink/45">
                  Final price is confirmed on WhatsApp along with size, density
                  and delivery — nothing is charged here.
                </p>
                <a
                  href={buildCartWhatsAppLink(items, subtotal)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full rounded-full bg-ink px-7 py-4 text-center font-body text-sm font-medium text-cream transition-colors hover:bg-charcoal sm:w-72"
                >
                  Checkout on WhatsApp
                </a>
              </div>
            </>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
