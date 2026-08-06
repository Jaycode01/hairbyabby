import Link from "next/link";
import CartIcon from "@/components/CartIcon";
import Image from "next/image";

const links = [
  { href: "/", label: "Home" },
  { href: "/shop", label: "Shop" },
  { href: "/about", label: "About" },
];

export default function Header() {
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
            className="rounded-full bg-ink px-5 py-2.5 font-body text-[13px] font-medium text-cream transition-colors hover:bg-charcoal"
          >
            WhatsApp Us
          </a>
        </div>
      </div>
    </header>
  );
}
