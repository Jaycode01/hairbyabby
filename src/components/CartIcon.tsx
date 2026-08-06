"use client";

import Link from "next/link";
import { ShoppingBag } from "lucide-react";
import { useCart } from "@/context/CartContext";

export default function CartIcon() {
  const { itemCount } = useCart();

  return (
    <Link
      href="/cart"
      aria-label={`Cart, ${itemCount} item${itemCount === 1 ? "" : "s"}`}
      className="relative flex items-center justify-center rounded-full border border-ink/15 p-2.5 text-ink transition-colors hover:border-ink/40"
    >
      <ShoppingBag size={18} strokeWidth={1.5} />
      {itemCount > 0 && (
        <span className="absolute -right-1.5 -top-1.5 flex h-5 min-w-5 items-center justify-center rounded-full bg-sand-deep px-1 font-body text-[10px] font-semibold text-ink">
          {itemCount}
        </span>
      )}
    </Link>
  );
}
