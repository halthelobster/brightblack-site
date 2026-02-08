import Image from "next/image";
import Link from "next/link";

const clients = ["Ellen", "Pokémon", "EA Sports", "Zynga", "Warner Bros", "Ubisoft", "Capcom", "Nickelodeon", "AMC"];

const stats = [
  { stat: "$2B+", label: "Partner Revenue Generated" },
  { stat: "24+", label: "Years of Experience" },
  { stat: "3,000+", label: "Professionals Trained" },
];

const testimonials = [
  {
    quote: "Because of the specific recommendations we received from Jordan, our game is both more fun for players and able to monetize those players more effectively.",
    author: "Richard Barnwell",
    title: "CEO, Digit Game Studios",
  },
  {
    quote: "Jordan was a critical element in the design of what became Hempire (top grossing on iOS+Android). There just wouldn't have been Hempire without Jordan.",
    author: "Dennis Malloy",
    title: "President of LBC Studios",
  },
  {
    quote: "Working with Jordan it is readily apparent that he is driven to create the best games possible... These efforts are reflected in a history of profitable titles.",
    author: "Geoffrey Mattei",
    title: "Consultant at Bain & Company",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white font-sans antialiased">
      {/* ── Navigation ── */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0a]/90 backdrop-blur-md border-b border-white/[0.06]">
        <div className="max-w-6xl mx-auto px-5 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2.5">
            <Image
              src="/slit.svg"
              alt="Bright Black"
              width={24}
              height={24}
              className="opacity-90"
            />
            <span className="text-[15px] font-semibold tracking-[0.15em] uppercase">
              Bright Black
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-7 text-[14px] text-white/60">
            <Link href="#philosophy" className="hover:text-white transition-colors">Philosophy</Link>
            <Link href="#work" className="hover:text-white transition-colors">Work</Link>
            <Link href="#speaking" className="hover:text-white transition-colors">Speaking</Link>
            <Link href="#contact" className="hover:text-white transition-colors">Contact</Link>
          </div>

          <Link
            href="#contact"
            className="text-[13px] font-medium border border-white/20 px-5 py-2 rounded-full hover:border-white/50 hover:bg-white/5 transition-all"
          >
            Book a Call
          </Link>
        </div>
      </nav>

      {/* ── Hero ── */}
      <section className="hero-glow min-h-screen flex items-center pt-16">
        <div className="max-w-6xl mx-auto px-5 w-full">
          <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
            {/* Text */}
            <div className="order-2 md:order-1 space-y-7">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.08] tracking-tight">
                Revenue Design
                <br />
                <span className="text-white/50">for Digital Products</span>
              </h1>

              <p className="text-base sm:text-lg text-white/60 leading-relaxed max-w-lg">
                Helping partners generate $2B+ in lifetime revenue through
                strategic monetization and high-performance product design.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <Link
                  href="#contact"
                  className="inline-flex justify-center bg-white text-[#0a0a0a] text-[15px] font-semibold px-7 py-3.5 rounded-full hover:bg-white/90 transition-colors"
                >
                  Start a Project
                </Link>
                <Link
                  href="#work"
                  className="inline-flex justify-center border border-white/20 text-[15px] font-medium px-7 py-3.5 rounded-full hover:border-white/40 hover:bg-white/5 transition-all"
                >
                  View Work
                </Link>
              </div>
            </div>

            {/* Photo */}
            <div className="order-1 md:order-2 flex justify-center">
              <div className="relative w-[280px] h-[280px] sm:w-[340px] sm:h-[340px] md:w-[400px] md:h-[400px]">
                <Image
                  src="/speaker-final-1024.jpg"
                  alt="Jordan Blackman"
                  fill
                  className="object-cover rounded-2xl"
                  priority
                  sizes="(max-width: 768px) 280px, 400px"
                />
                {/* Subtle glow behind image */}
                <div className="absolute inset-0 rounded-2xl shadow-[0_0_60px_rgba(255,255,255,0.08)] pointer-events-none" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Client Logos ── */}
      <section className="py-14 border-y border-white/[0.06]">
        <div className="max-w-6xl mx-auto px-5">
          <p className="text-center text-[11px] text-white/40 tracking-[0.25em] uppercase mb-8">
            Trusted by Industry Leaders
          </p>
          <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-4">
            {clients.map((name) => (
              <span
                key={name}
                className="text-[14px] sm:text-[15px] font-medium text-white/30 hover:text-white/50 transition-colors"
              >
                {name}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── Stats ── */}
      <section className="py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-5">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {stats.map((item, i) => (
              <div
                key={i}
                className="stat-card rounded-xl p-8 sm:p-10 text-center bg-white/[0.02]"
              >
                <div className="text-4xl sm:text-5xl font-bold tracking-tight mb-3">
                  {item.stat}
                </div>
                <div className="text-[14px] text-white/50">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Philosophy (No-Pinch) ── */}
      <section id="philosophy" className="py-20 md:py-28 diagonal-glow">
        <div className="max-w-6xl mx-auto px-5">
          <div className="max-w-3xl mx-auto space-y-10">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
              The No-Pinch Approach
            </h2>

            <div className="space-y-5 text-base sm:text-lg text-white/60 leading-relaxed">
              <p>
                When monetization is a tactical playbook, it fights your product,
                upsets your customers, and limits the business.
              </p>
              <p className="text-white/80">
                When monetization is a <em className="not-italic font-semibold text-white">design discipline</em>,
                it fits your product, serves your customers, and uncaps the business.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
              {["Psychology-first design", "Ethical monetization models", "Long-term growth without friction"].map(
                (item) => (
                  <div
                    key={item}
                    className="border border-white/[0.08] rounded-lg px-5 py-4 text-[14px] text-white/70 bg-white/[0.02]"
                  >
                    {item}
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ── Testimonials ── */}
      <section className="py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-5">
          <p className="text-center text-[11px] text-white/40 tracking-[0.25em] uppercase mb-16">
            What Partners Say
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <div
                key={i}
                className="testimonial-card border border-white/[0.08] rounded-xl p-7 sm:p-8 bg-white/[0.02] flex flex-col justify-between"
              >
                <blockquote className="text-[15px] leading-relaxed text-white/70 mb-8">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <div>
                  <div className="text-[14px] font-semibold text-white/90">{t.author}</div>
                  <div className="text-[13px] text-white/40 mt-0.5">{t.title}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section id="contact" className="py-20 md:py-28 glow-bg">
        <div className="max-w-3xl mx-auto px-5 text-center space-y-7">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
            Ready to Design Your Revenue?
          </h2>
          <p className="text-base text-white/50 max-w-lg mx-auto">
            Let&apos;s talk about how Revenue Design can unlock growth for your product.
          </p>
          <div className="pt-2">
            <Link
              href="#contact"
              className="inline-flex bg-white text-[#0a0a0a] text-[15px] font-semibold px-10 py-4 rounded-full hover:bg-white/90 transition-colors"
            >
              Book a Call
            </Link>
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="border-t border-white/[0.06] py-14">
        <div className="max-w-6xl mx-auto px-5">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-6">
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="/slit.svg"
                alt="Bright Black"
                width={20}
                height={20}
                className="opacity-70"
              />
              <span className="text-[14px] font-medium text-white/50 tracking-[0.1em] uppercase">
                Bright Black
              </span>
            </Link>

            <div className="flex gap-6 text-[13px] text-white/40">
              <Link href="#philosophy" className="hover:text-white/70 transition-colors">About</Link>
              <Link href="#speaking" className="hover:text-white/70 transition-colors">Speaking</Link>
              <Link href="#work" className="hover:text-white/70 transition-colors">Work</Link>
              <Link href="#contact" className="hover:text-white/70 transition-colors">Contact</Link>
            </div>

            <span className="text-[12px] text-white/25">
              © 2026 Bright Black, LLC
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}
