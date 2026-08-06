import type { Metadata } from "next";
import "./globals.css";
import { CartProvider } from "@/context/CartContext";

export const metadata: Metadata = {
  title: "Hairbyabby — Wigs & Extensions, Made to Move With You",
  description:
    "Premium wigs and extensions, hand-installed and sold with care. Shop Hairbyabby's curated collection and DM us on WhatsApp for a fitting.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased bg-cream text-ink">
        <CartProvider>{children}</CartProvider>
      </body>
    </html>
  );
}
