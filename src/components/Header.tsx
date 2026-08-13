"use client";

import { useState } from "react";
import Link from "next/link";
import CartIcon from "@/components/CartIcon";
import Image from "next/image";

const links = [
  { href: "/", label: "Home" },
  { href: "/shop", label: "Shop" },
  { href: "/about", label: "About" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-ink/10 bg-cream/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-10">
        <Link href="/" className="text-ink">
          <Image
            src="/hairbyabby.png"
            alt="hairbyabby"
            width={100}
            height={100}
          />
        </Link>

        <nav className="hidden items-center gap-9 md:flex">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="font-body text-[13px] uppercase tracking-[0.12em] text-ink/70 transition-colors hover:text-ink"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <CartIcon />
          <a
            href="https://wa.me/2340000000000"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden rounded-full bg-ink px-5 py-2.5 font-body text-[13px] font-medium text-cream transition-colors hover:bg-charcoal sm:inline-block"
          >
            WhatsApp Us
          </a>

          {/* Mobile menu toggle — only shows below md breakpoint */}
          <button
            type="button"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            className="flex h-9 w-9 flex-col items-center justify-center gap-[5px] md:hidden"
          >
            <span
              className={`h-[1.5px] w-5 bg-ink transition-transform ${
                menuOpen ? "translate-y-[6.5px] rotate-45" : ""
              }`}
            />
            <span
              className={`h-[1.5px] w-5 bg-ink transition-opacity ${
                menuOpen ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`h-[1.5px] w-5 bg-ink transition-transform ${
                menuOpen ? "-translate-y-[6.5px] -rotate-45" : ""
              }`}
            />
          </button>
        </div>
      </div>

      {/* Mobile dropdown panel */}
      {menuOpen && (
        <div className="border-t border-ink/10 bg-cream md:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col gap-1 px-6 py-4">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setMenuOpen(false)}
                className="font-body text-[13px] uppercase tracking-[0.12em] text-ink/70 transition-colors hover:text-ink py-3"
              >
                {l.label}
              </Link>
            ))}
            <a
              href="https://wa.me/2340000000000"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 rounded-full bg-ink px-5 py-2.5 text-center font-body text-[13px] font-medium text-cream transition-colors hover:bg-charcoal sm:hidden"
            >
              WhatsApp Us
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
