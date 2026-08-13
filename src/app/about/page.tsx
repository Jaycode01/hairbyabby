import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Strand from "@/components/Strand";
import Image from "next/image";
import PlaceholderImage from "@/components/PlaceholderImage";

const faqs = [
  {
    q: "How do I know what size or density to order?",
    a: "Message us on WhatsApp with your head measurements or a photo of your current install — we'll walk you through cap size and density before you pay for anything.",
  },
  {
    q: "Do you deliver outside Lagos?",
    a: "Yes, we deliver nationwide across Nigeria. Delivery timing is confirmed with you directly once your order is placed.",
  },
  {
    q: "Can I return or exchange a piece?",
    a: "Unworn pieces in original packaging can be exchanged within 3 days of delivery. Reach out on WhatsApp to start that process.",
  },
  {
    q: "Do you offer installation?",
    a: "We can connect you with trusted stylists in Lagos for install and customization. Ask us on WhatsApp when you order.",
  },
];

export default function AboutPage() {
  return (
    <>
      <Header />
      <main>
        <section className="relative overflow-hidden px-6 py-20 md:px-10 md:py-28">
          <div className="mx-auto grid max-w-7xl items-center gap-12 md:grid-cols-2">
            <div>
              <span className="font-body text-[11px] uppercase tracking-[0.15em] text-taupe">
                Our Story
              </span>
              <h1 className="mt-3 font-display text-4xl italic text-ink md:text-5xl">
                Built on fittings, not filters.
              </h1>
              <p className="mt-6 font-body text-sm leading-relaxed text-ink/65">
                Hairbyabby started with one simple frustration: too many wigs
                looked perfect online and wrong in person. So every piece we
                sell is chosen by hand, checked for density and shine, and
                fitted the way a good tailor fits a jacket — to the person
                wearing it, not the mannequin it shipped on.
              </p>
              <p className="mt-4 font-body text-sm leading-relaxed text-ink/65">
                We&apos;re based in Lagos and ship across Nigeria, with real
                answers over WhatsApp — no bots, no scripts.
              </p>
            </div>
            <Image
              src="/aout-studio.png"
              alt="Hairbyabby fitting session in the studio"
              width={900}
              height={1125}
              className="w-full h-auto"
            />
          </div>
          <Strand
            className="absolute bottom-0 left-0 h-14 w-full opacity-60"
            color="var(--sage-deep)"
          />
        </section>

        <section
          id="faq"
          className="bg-cream-deep px-6 py-20 md:px-10 md:py-28"
        >
          <div className="mx-auto max-w-3xl">
            <span className="font-body text-[11px] uppercase tracking-[0.15em] text-taupe">
              Questions
            </span>
            <h2 className="mt-3 font-display text-4xl italic text-ink md:text-5xl">
              FAQ
            </h2>

            <div className="mt-10 divide-y divide-ink/10">
              {faqs.map((f) => (
                <details key={f.q} className="group py-5">
                  <summary className="flex cursor-pointer list-none items-center justify-between font-body text-base text-ink">
                    {f.q}
                    <span className="ml-4 text-taupe transition-transform group-open:rotate-45">
                      +
                    </span>
                  </summary>
                  <p className="mt-3 font-body text-sm leading-relaxed text-ink/60">
                    {f.a}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section
          id="contact"
          className="px-6 py-20 text-center md:px-10 md:py-28"
        >
          <span className="font-body text-[11px] uppercase tracking-[0.15em] text-taupe">
            Get in Touch
          </span>
          <h2 className="mx-auto mt-3 max-w-lg font-display text-3xl italic text-ink md:text-4xl">
            Ready for a fitting?
          </h2>
          <a
            href="https://wa.me/2340000000000"
            className="mt-7 inline-block rounded-full bg-ink px-7 py-3.5 font-body text-sm font-medium text-cream transition-colors hover:bg-charcoal"
          >
            Message us on WhatsApp
          </a>
        </section>
      </main>
      <Footer />
    </>
  );
}
