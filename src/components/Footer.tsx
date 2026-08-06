import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-ink text-cream/80">
      <div className="mx-auto max-w-7xl px-6 py-16 md:px-10">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-4">
          <div className="col-span-2">
            <span className="font-display text-xl italic text-cream">
              Hairby<span className="not-italic text-sand">abby</span>
            </span>
            <p className="mt-4 max-w-xs font-body text-sm leading-relaxed text-cream/60">
              Wigs and extensions, hand-selected for texture, density and a
              natural finish. Fitted with care, delivered across Nigeria.
            </p>
          </div>

          <div>
            <h3 className="font-body text-[11px] uppercase tracking-[0.15em] text-cream/40">
              Shop
            </h3>
            <ul className="mt-4 space-y-2.5 font-body text-sm">
              <li>
                <Link href="/shop" className="hover:text-cream">
                  All Pieces
                </Link>
              </li>
              <li>
                <Link href="/shop?category=wigs" className="hover:text-cream">
                  Wigs
                </Link>
              </li>
              <li>
                <Link
                  href="/shop?category=extensions"
                  className="hover:text-cream"
                >
                  Extensions
                </Link>
              </li>
              <li>
                <Link
                  href="/shop?filter=new"
                  className="hover:text-cream"
                >
                  New In
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-body text-[11px] uppercase tracking-[0.15em] text-cream/40">
              Get in Touch
            </h3>
            <ul className="mt-4 space-y-2.5 font-body text-sm">
              <li>
                <a
                  href="https://wa.me/2340000000000"
                  className="hover:text-cream"
                >
                  WhatsApp
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com/hairbyabby"
                  className="hover:text-cream"
                >
                  Instagram
                </a>
              </li>
              <li>
                <Link href="/about#faq" className="hover:text-cream">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-2 border-t border-cream/10 pt-6 font-body text-xs text-cream/40 md:flex-row md:items-center md:justify-between">
          <span>© 2026 Hairbyabby. All rights reserved.</span>
          <span>Lagos, Nigeria</span>
        </div>
      </div>
    </footer>
  );
}
