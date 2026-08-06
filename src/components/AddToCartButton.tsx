"use client";

import { useState } from "react";
import { Check, Plus } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { Product } from "@/data/products";

type Props = { product: Product; className?: string };

export default function AddToCartButton({ product, className = "" }: Props) {
  const { addItem } = useCart();
  const [justAdded, setJustAdded] = useState(false);

  function handleAdd() {
    addItem(product, 1);
    setJustAdded(true);
    window.setTimeout(() => setJustAdded(false), 1500);
  }

  return (
    <button
      type="button"
      onClick={handleAdd}
      className={`inline-flex items-center justify-center gap-1.5 rounded-full border font-body text-xs font-medium transition-colors ${
        justAdded
          ? "border-sage-deep bg-sage/40 text-ink"
          : "border-ink/15 text-ink hover:border-ink/40"
      } ${className}`}
    >
      {justAdded ? (
        <>
          <Check size={13} strokeWidth={2} /> Added
        </>
      ) : (
        <>
          <Plus size={13} strokeWidth={2} /> Add to Cart
        </>
      )}
    </button>
  );
}
