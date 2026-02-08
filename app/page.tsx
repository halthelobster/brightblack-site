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

const stats = [
  { category: "Cumulative Success", value: "$2B+", label: "Partner revenue generated through our design frameworks" },
  { category: "Deep Expertise", value: "24+", label: "Years of experience at the intersection of psychology and tech" },
  { category: "Industry Impact", value: "3000+", label: "Professionals trained in revenue design methodologies" },
];

const bulletPoints = [
  "Revenue becomes a natural outcome of great product design",
  "Players feel valued, not exploited — increasing lifetime value",
  "Sustainable growth replaces short-term extraction tactics",
];

/* ── Page ── */
export default function Home() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white font-sans antialiased">
      {/* ━━━ Navigation ━━━ */}
      <nav className="fixed top-0 inset-x-0 z-50 bg-[#0a0a0a]">
        <div className="max-w-[1200px] mx-auto px-6 md:px-12 h-[72px] flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-1">
            <span className="text-[13px] font-medium tracking-[0.14em] text-white/50">/</span>
            <span className="text-[13px] font-semibold tracking-[0.14em] uppercase text-white/90">
              BRIGHT BLACK
            </span>
          </Link>

          {/* Nav Links */}
          <div className="hidden md:flex items-center gap-10">
            <Link href="#work" className="nav-link">Work</Link>
            <Link href="#about" className="nav-link">About</Link>
            <Link href="#speaking" className="nav-link">Speaking</Link>
            <Link href="#contact" className="nav-link">Contact</Link>
          </div>

          {/* CTA */}
          <Link
            href="#contact"
            className="bg-white text-[#0a0a0a] rounded px-5 py-2 text-[11px] font-semibold tracking-[0.08em] uppercase hover:bg-white/90 transition-colors"
          >
            Book a Call
          </Link>
        </div>
      </nav>

      {/* ━━━ Hero ━━━ */}
      <section className="hero-glow min-h-screen flex items-center pt-[72px]">
        <div className="max-w-[1200px] mx-auto px-6 md:px-12 w-full py-32 md:py-40">
          <div className="max-w-[900px]">
            {/* Headline */}
            <h1 className="display-heading text-[42px] md:text-[64px] lg:text-[72px] mb-8">
              Revenue Design for Games,
              <br />
              Platforms & Digital Products
            </h1>

            {/* Description */}
            <p className="text-[16px] md:text-[18px] leading-[1.7] text-white/45 max-w-[600px] mb-12">
              We help digital product teams design monetization that players love — 
              generating over $2B in partner revenue through ethical, psychology-first approaches.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap items-center gap-4">
              <Link href="#contact" className="btn-primary">
                Start a Project <span aria-hidden="true">→</span>
              </Link>
              <Link href="#work" className="btn-secondary">
                View Work
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ━━━ Client Logos ━━━ */}
      <section className="py-16 md:py-20 border-t border-white/[0.06]">
        <div className="max-w-[1200px] mx-auto px-6 md:px-12">
          <p className="label-text text-center mb-12">Trusted by Industry Leaders</p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            {clients.map((name) => (
              <div
                key={name}
                className="w-10 h-10 bg-white/10 rounded flex items-center justify-center"
                title={name}
              >
                <div className="w-6 h-6 bg-white/20 rounded-sm" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ━━━ Stats ━━━ */}
      <section id="work" className="py-20 md:py-28">
        <div className="max-w-[1200px] mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {stats.map((s, i) => (
              <div key={i} className="stat-card">
                <div className="label-text mb-6">{s.category}</div>
                <div className="stat-number">{s.value}</div>
                <div className="text-[12px] text-white/35 leading-[1.5] max-w-[200px] mx-auto">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ━━━ No-Pinch Approach ━━━ */}
      <section id="about" className="py-24 md:py-32">
        <div className="max-w-[1200px] mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left Column - Text */}
            <div>
              <h2 className="display-heading text-[32px] md:text-[42px] lg:text-[48px] mb-8">
                The No-Pinch Approach
              </h2>
              
              <p className="text-[16px] md:text-[17px] leading-[1.8] text-white/45 mb-10">
                Traditional monetization squeezes players for short-term gains. 
                The No-Pinch Approach redesigns your product so revenue flows naturally 
                from genuine player value — no manipulation required.
              </p>

              {/* Bullet Points */}
              <div className="space-y-5">
                {bulletPoints.map((point, i) => (
                  <div key={i} className="bullet-item">
                    <div className="bullet-dot" />
                    <p className="text-[15px] text-white/55 leading-[1.6]">{point}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column - Chart Card */}
            <div className="chart-card flex items-center justify-center p-8">
              <div className="relative w-full h-full min-h-[280px]">
                {/* Chart visual */}
                <div className="chart-line" />
                
                {/* Label */}
                <div className="absolute top-8 left-8">
                  <span className="label-text">Redefining Value</span>
                </div>
                
                {/* Decorative grid lines */}
                <div className="absolute inset-8 border border-white/[0.04] rounded" />
                <div className="absolute inset-8">
                  <div className="absolute top-1/3 left-0 right-0 h-px bg-white/[0.04]" />
                  <div className="absolute top-2/3 left-0 right-0 h-px bg-white/[0.04]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ━━━ Testimonial ━━━ */}
      <section className="py-24 md:py-32">
        <div className="max-w-[800px] mx-auto px-6 md:px-12 text-center relative">
          {/* Quote Mark */}
          <div className="quote-mark">&ldquo;</div>
          
          {/* Quote */}
          <blockquote className="text-[20px] md:text-[24px] leading-[1.7] text-white/70 font-light mb-10 relative z-10">
            Because of the specific recommendations we received from Jordan, 
            our game is both more fun for players and able to monetize those 
            players more effectively.
          </blockquote>
          
          {/* Attribution */}
          <div>
            <div className="text-[15px] font-semibold text-white/90 mb-1">
              Richard Barnwell
            </div>
            <div className="text-[13px] text-white/40">
              CEO, Digit Game Studios
            </div>
          </div>
        </div>
      </section>

      {/* ━━━ Footer ━━━ */}
      <footer id="contact" className="border-t border-white/[0.06] py-12">
        <div className="max-w-[1200px] mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-1">
              <span className="text-[12px] font-medium tracking-[0.14em] text-white/40">/</span>
              <span className="text-[12px] font-semibold tracking-[0.14em] uppercase text-white/50">
                BRIGHT BLACK
              </span>
            </Link>

            {/* Nav Links */}
            <div className="flex gap-8 text-[11px] tracking-[0.1em] uppercase text-white/35 font-medium">
              <Link href="#work" className="hover:text-white/60 transition-colors">Work</Link>
              <Link href="#about" className="hover:text-white/60 transition-colors">About</Link>
              <Link href="#speaking" className="hover:text-white/60 transition-colors">Speaking</Link>
              <Link href="#contact" className="hover:text-white/60 transition-colors">Contact</Link>
            </div>

            {/* Copyright */}
            <span className="text-[11px] text-white/25">
              © 2026 Bright Black, LLC
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}
