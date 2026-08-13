import { CartItem } from "@/context/CartContext";
import { formatNaira } from "@/data/products";

export const WHATSAPP_NUMBER = "2340000000000";

export function buildCartWhatsAppLink(
  items: CartItem[],
  subtotal: number,
): string {
  const lines = [
    "Hi Hairbyabby! I'd like to order:",
    "",
    ...items.map(
      (i) =>
        `• ${i.name} x${i.quantity} — ${formatNaira(i.price * i.quantity)}`,
    ),
    "",
    `Total: ${formatNaira(subtotal)}`,
  ];
  const text = encodeURIComponent(lines.join("\n"));
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${text}`;
}
