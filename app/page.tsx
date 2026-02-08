import Image from "next/image";
import Link from "next/link";

/* ── Data ── */
const clients = [
  "Ellen",
  "Pokémon",
  "EA Sports",
  "Zynga",
  "Warner Bros",
  "Ubisoft",
  "Capcom",
  "Nickelodeon",
  "AMC",
];

const stats: { value: string; label: string }[] = [
  { value: "$2B+", label: "Partner Revenue Generated" },
  { value: "24+", label: "Years of Experience" },
  { value: "3,000+", label: "Professionals Trained" },
];

const testimonials = [
  {
    quote:
      "Because of the specific recommendations we received from Jordan, our game is both more fun for players and able to monetize those players more effectively.",
    name: "Richard Barnwell",
    role: "CEO, Digit Game Studios",
  },
  {
    quote:
      "Jordan was a critical element in the design of what became Hempire (top grossing on iOS+Android). There just wouldn\u2019t have been Hempire without Jordan.",
    name: "Dennis Malloy",
    role: "President of LBC Studios",
  },
  {
    quote:
      "Working with Jordan it is readily apparent that he is driven to create the best games possible\u2026 These efforts are reflected in a history of profitable titles.",
    name: "Geoffrey Mattei",
    role: "Consultant at Bain & Company",
  },
];

/* ── Page ── */
export default function Home() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white font-sans antialiased">
      {/* ━━━ Navigation ━━━ */}
      <nav className="nav-glass fixed top-0 inset-x-0 z-50 border-b border-white/[0.06]">
        <div className="max-w-[1200px] mx-auto px-6 md:px-10 h-[72px] flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 group">
            <Image
              src="/slit.svg"
              alt="Bright Black"
              width={28}
              height={28}
              className="opacity-80 group-hover:opacity-100 transition-opacity"
            />
            <span className="text-[14px] font-semibold tracking-[0.18em] uppercase text-white/80 group-hover:text-white transition-colors">
              Bright Black
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-8 text-[13px] text-white/45 font-medium">
            <Link href="#philosophy" className="hover:text-white/80 transition-colors duration-300">
              Philosophy
            </Link>
            <Link href="#results" className="hover:text-white/80 transition-colors duration-300">
              Results
            </Link>
            <Link href="#contact" className="hover:text-white/80 transition-colors duration-300">
              Contact
            </Link>
          </div>

          <Link
            href="#contact"
            className="btn-secondary rounded-full px-6 py-2.5 text-[13px] font-medium text-white/80"
          >
            Book a Call
          </Link>
        </div>
      </nav>

      {/* ━━━ Hero ━━━ */}
      <section className="hero-ambient min-h-screen flex items-end md:items-center pb-24 md:pb-0 pt-[72px]">
        <div className="max-w-[1200px] mx-auto px-6 md:px-10 w-full">
          <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
            {/* Copy */}
            <div className="space-y-8 md:space-y-10 order-2 md:order-1">
              <div className="space-y-4">
                <p className="label-text">Revenue Design Studio</p>
                <h1 className="display-heading text-[clamp(2.5rem,7vw,5.5rem)]">
                  We design how
                  <br />
                  <span className="text-white/40">products make money.</span>
                </h1>
              </div>

              <p className="text-[17px] md:text-[19px] leading-[1.7] text-white/50 max-w-[520px]">
                Helping partners generate $2B+ in lifetime revenue through
                strategic monetization and high-performance product design.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-2">
                <Link
                  href="#contact"
                  className="btn-primary inline-flex justify-center items-center rounded-full px-8 py-4 text-[15px]"
                >
                  Start a Project
                </Link>
                <Link
                  href="#results"
                  className="btn-secondary inline-flex justify-center items-center rounded-full px-8 py-4 text-[15px] font-medium text-white/70"
                >
                  See Results
                </Link>
              </div>
            </div>

            {/* Headshot */}
            <div className="order-1 md:order-2 flex justify-center md:justify-end">
              <div className="relative w-full max-w-[320px] md:max-w-[420px] aspect-[3/4] rounded-2xl overflow-hidden photo-glow">
                <Image
                  src="/speaker-final-1024.jpg"
                  alt="Jordan Blackman"
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 768px) 85vw, 420px"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="hidden md:block absolute bottom-10 left-1/2 -translate-x-1/2">
          <div className="scroll-indicator text-white/30 text-2xl">↓</div>
        </div>
      </section>

      {/* ━━━ Logo Bar ━━━ */}
      <section className="py-16 md:py-20 border-y border-white/[0.04]">
        <div className="max-w-[1200px] mx-auto px-6 md:px-10">
          <p className="label-text text-center mb-10">Trusted by</p>
          <div className="flex flex-wrap justify-center items-center gap-x-10 gap-y-5">
            {clients.map((name) => (
              <span
                key={name}
                className="text-[15px] font-medium text-white/20 transition-colors duration-500 hover:text-white/45"
              >
                {name}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ━━━ Stats ━━━ */}
      <section className="py-24 md:py-32 section-glow">
        <div className="max-w-[1200px] mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8">
            {stats.map((s, i) => (
              <div
                key={i}
                className="glow-border rounded-2xl p-10 md:p-12 text-center bg-white/[0.015]"
              >
                <div className="stat-number text-[3rem] md:text-[3.5rem] font-bold mb-3">
                  {s.value}
                </div>
                <div className="text-[13px] text-white/40 tracking-wide">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ━━━ Philosophy ━━━ */}
      <section id="philosophy" className="py-24 md:py-36 diagonal-light">
        <div className="max-w-[1200px] mx-auto px-6 md:px-10">
          <div className="max-w-[680px]">
            <p className="label-text mb-6">The No-Pinch Approach</p>

            <h2 className="display-heading text-[clamp(1.8rem,4.5vw,3.2rem)] mb-10">
              Most monetization advice teaches
              <br className="hidden md:block" />
              where to squeeze.{" "}
              <span className="text-white/35">
                We teach how to never need to.
              </span>
            </h2>

            <div className="space-y-6 text-[17px] leading-[1.8] text-white/50 mb-12">
              <p>
                When monetization is a tactical playbook, it fights your product,
                upsets your customers, and limits the business.
              </p>
              <p className="text-white/70">
                When monetization is a{" "}
                <em className="not-italic font-semibold text-white">
                  design discipline
                </em>
                , it fits your product, serves your customers, and uncaps the
                business.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              {[
                "Psychology-first design",
                "Ethical monetization",
                "Long-term growth",
              ].map((item) => (
                <div
                  key={item}
                  className="glow-border rounded-xl px-6 py-4 text-[14px] text-white/55 bg-white/[0.02]"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ━━━ Divider ━━━ */}
      <div className="max-w-[1200px] mx-auto px-6 md:px-10">
        <div className="glow-divider" />
      </div>

      {/* ━━━ Testimonials ━━━ */}
      <section id="results" className="py-24 md:py-36">
        <div className="max-w-[1200px] mx-auto px-6 md:px-10">
          <p className="label-text text-center mb-16 md:mb-20">
            What Partners Say
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {testimonials.map((t, i) => (
              <div
                key={i}
                className="relative glow-border rounded-2xl p-8 md:p-10 bg-white/[0.015] flex flex-col"
              >
                <span className="quote-mark">&ldquo;</span>
                <blockquote className="text-[15px] leading-[1.8] text-white/60 mb-10 mt-6 flex-1">
                  {t.quote}
                </blockquote>
                <div className="border-t border-white/[0.06] pt-5">
                  <div className="text-[14px] font-semibold text-white/85">
                    {t.name}
                  </div>
                  <div className="text-[12px] text-white/35 mt-1">
                    {t.role}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ━━━ CTA ━━━ */}
      <section id="contact" className="py-28 md:py-40 diagonal-light">
        <div className="max-w-[680px] mx-auto px-6 md:px-10 text-center">
          <p className="label-text mb-6">Get Started</p>
          <h2 className="display-heading text-[clamp(2rem,5vw,3.5rem)] mb-6">
            Ready to design
            <br />
            your revenue?
          </h2>
          <p className="text-[17px] text-white/40 mb-10 max-w-[460px] mx-auto leading-[1.7]">
            Let&apos;s talk about how Revenue Design can unlock growth for your
            product.
          </p>
          <Link
            href="#contact"
            className="btn-primary inline-flex items-center rounded-full px-10 py-4 text-[16px]"
          >
            Book a Call
          </Link>
        </div>
      </section>

      {/* ━━━ Footer ━━━ */}
      <footer className="border-t border-white/[0.04] py-14 md:py-16">
        <div className="max-w-[1200px] mx-auto px-6 md:px-10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <Link href="/" className="flex items-center gap-2.5">
              <Image
                src="/slit.svg"
                alt="Bright Black"
                width={22}
                height={22}
                className="opacity-50"
              />
              <span className="text-[13px] font-medium text-white/35 tracking-[0.12em] uppercase">
                Bright Black
              </span>
            </Link>

            <div className="flex gap-8 text-[13px] text-white/30 font-medium">
              <Link href="#philosophy" className="hover:text-white/60 transition-colors duration-300">
                About
              </Link>
              <Link href="#results" className="hover:text-white/60 transition-colors duration-300">
                Work
              </Link>
              <Link href="#contact" className="hover:text-white/60 transition-colors duration-300">
                Contact
              </Link>
            </div>

            <span className="text-[12px] text-white/20">
              &copy; 2026 Bright Black, LLC
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}
