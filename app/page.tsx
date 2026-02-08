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
  { value: "$2B+", label: "Partner Revenue Generated" },
  { value: "24+", label: "Years of Experience" },
  { value: "3000+", label: "Professionals Trained" },
];

const bulletPoints = [
  "Revenue becomes a natural outcome of great product design",
  "Players feel valued, not exploited — increasing lifetime value",
  "Sustainable growth replaces short-term extraction tactics",
];

/* ── Page ── */
export default function Home() {
  return (
    <div className="min-h-screen bg-[#08090a] text-[#f7f8f8] font-sans antialiased">
      {/* ━━━ Navigation ━━━ */}
      <nav className="nav-container">
        <div className="max-w-[1100px] mx-auto px-6 h-[65px] flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <span className="text-[13px] font-medium text-[#8a8f98]">/</span>
            <span className="text-[13px] font-medium text-[#f7f8f8]">
              Bright Black
            </span>
          </Link>

          {/* Nav Links */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="#work" className="nav-link">Work</Link>
            <Link href="#about" className="nav-link">About</Link>
            <Link href="#speaking" className="nav-link">Speaking</Link>
            <Link href="#contact" className="nav-link">Contact</Link>
          </div>

          {/* CTA */}
          <Link href="#contact" className="btn-primary">
            Book a Call
          </Link>
        </div>
      </nav>

      {/* ━━━ Hero ━━━ */}
      <section className="min-h-screen flex items-center justify-center pt-[65px]">
        <div className="max-w-[900px] mx-auto px-6 py-32 md:py-40 text-center">
          {/* Headline */}
          <h1 className="heading-display mb-6">
            Revenue Design for Games, Platforms & Digital Products
          </h1>

          {/* Description */}
          <p className="text-body max-w-[640px] mx-auto mb-10">
            We help digital product teams design monetization that players love — 
            generating over $2B in partner revenue through ethical, psychology-first approaches.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-3">
            <Link href="#contact" className="btn-outline">
              Start a Project
            </Link>
            <Link href="#work" className="btn-ghost">
              View Work
            </Link>
          </div>
        </div>
      </section>

      {/* ━━━ Client Logos ━━━ */}
      <section className="py-16 border-t border-[rgba(255,255,255,0.06)]">
        <div className="max-w-[1100px] mx-auto px-6">
          <div className="logo-bar">
            {clients.map((name) => (
              <span key={name} className="logo-item">
                {name}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ━━━ Stats ━━━ */}
      <section id="work" className="section-padding">
        <div className="max-w-[900px] mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((s, i) => (
              <div key={i} className="stat-card">
                <div className="stat-value">{s.value}</div>
                <div className="stat-label">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ━━━ No-Pinch Approach ━━━ */}
      <section id="about" className="section-padding border-t border-[rgba(255,255,255,0.06)]">
        <div className="max-w-[1100px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Left Column - Text */}
            <div>
              <h2 className="heading-section mb-6">
                The No-Pinch Approach
              </h2>
              
              <p className="text-body mb-10">
                Traditional monetization squeezes players for short-term gains. 
                The No-Pinch Approach redesigns your product so revenue flows naturally 
                from genuine player value — no manipulation required.
              </p>

              {/* Bullet Points */}
              <div className="bullet-list">
                {bulletPoints.map((point, i) => (
                  <div key={i} className="bullet-item">
                    <div className="bullet-dot" />
                    <p className="text-small">{point}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column - Card */}
            <div className="content-card">
              <div className="text-[13px] font-medium text-[#8a8f98] mb-6">
                Redefining Value
              </div>
              
              <div className="space-y-6">
                <div className="h-px bg-[rgba(255,255,255,0.06)]" />
                
                <div className="flex items-center justify-between">
                  <span className="text-small">Player Satisfaction</span>
                  <span className="text-[#f7f8f8] font-medium">↑ 34%</span>
                </div>
                
                <div className="h-px bg-[rgba(255,255,255,0.06)]" />
                
                <div className="flex items-center justify-between">
                  <span className="text-small">Revenue per User</span>
                  <span className="text-[#f7f8f8] font-medium">↑ 28%</span>
                </div>
                
                <div className="h-px bg-[rgba(255,255,255,0.06)]" />
                
                <div className="flex items-center justify-between">
                  <span className="text-small">Retention Rate</span>
                  <span className="text-[#f7f8f8] font-medium">↑ 41%</span>
                </div>
                
                <div className="h-px bg-[rgba(255,255,255,0.06)]" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ━━━ Testimonial ━━━ */}
      <section className="section-padding border-t border-[rgba(255,255,255,0.06)]">
        <div className="max-w-[700px] mx-auto px-6 text-center">
          {/* Quote */}
          <blockquote className="quote-text mb-8">
            &ldquo;Because of the specific recommendations we received from Jordan, 
            our game is both more fun for players and able to monetize those 
            players more effectively.&rdquo;
          </blockquote>
          
          {/* Attribution */}
          <div>
            <div className="text-[15px] font-medium text-[#f7f8f8] mb-1">
              Richard Barnwell
            </div>
            <div className="text-[14px] text-[#8a8f98]">
              CEO, Digit Game Studios
            </div>
          </div>
        </div>
      </section>

      {/* ━━━ Footer ━━━ */}
      <footer id="contact" className="border-t border-[rgba(255,255,255,0.06)] py-16">
        <div className="max-w-[1100px] mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2">
              <span className="text-[13px] font-medium text-[#8a8f98]">/</span>
              <span className="text-[13px] font-medium text-[#f7f8f8]">
                Bright Black
              </span>
            </Link>

            {/* Nav Links */}
            <div className="flex gap-8">
              <Link href="#work" className="nav-link">Work</Link>
              <Link href="#about" className="nav-link">About</Link>
              <Link href="#speaking" className="nav-link">Speaking</Link>
              <Link href="#contact" className="nav-link">Contact</Link>
            </div>

            {/* Copyright */}
            <span className="text-[13px] text-[#8a8f98]">
              © 2026 Bright Black
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}
