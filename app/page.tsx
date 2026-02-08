import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-bright-black text-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-bright-black/80 backdrop-blur-sm border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Image
              src="/bright-black-logo-primary.jpg"
              alt="Bright Black Logo"
              width={32}
              height={32}
              className="rounded"
            />
            <span className="text-xl font-semibold tracking-wide">BRIGHT BLACK</span>
          </div>
          
          <div className="hidden md:flex items-center gap-8">
            <Link href="#about" className="hover:text-white/80 transition-colors">About</Link>
            <Link href="#speaking" className="hover:text-white/80 transition-colors">Speaking</Link>
            <Link href="#work" className="hover:text-white/80 transition-colors">Work</Link>
            <Link href="#contact" className="hover:text-white/80 transition-colors">Contact</Link>
          </div>
          
          <button className="border border-white/30 px-6 py-2 rounded glow-hover transition-all duration-300 hover:border-white">
            Book a Call
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center hero-glow pt-20">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              Revenue Design for{" "}
              <span className="bg-gradient-to-r from-white to-white/70 bg-clip-text text-transparent">
                Games, Platforms &<br />Digital Products
              </span>
            </h1>
            
            <p className="text-xl text-white/80 leading-relaxed max-w-2xl">
              Helping partners generate $2B+ in lifetime revenue through strategic 
              monetization and high-performance product design.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-white text-black px-8 py-3 rounded font-semibold glow-hover transition-all duration-300">
                Start a Project
              </button>
              <button className="border border-white/30 px-8 py-3 rounded font-semibold glow-hover transition-all duration-300 hover:border-white">
                View Work
              </button>
            </div>
          </div>
          
          <div className="flex justify-center md:justify-end">
            <Image
              src="/speaker-final-1024.jpg"
              alt="Jordan Blackman"
              width={400}
              height={400}
              className="rounded-lg shadow-glow"
            />
          </div>
        </div>
      </section>

      {/* Client Logo Bar */}
      <section className="py-16 border-y border-white/10">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-center text-white/60 text-sm mb-8 tracking-widest">
            TRUSTED BY INDUSTRY LEADERS
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 opacity-70">
            {["Ellen", "Pokémon", "EA Sports", "Zynga", "Warner Bros", "Ubisoft", "Capcom", "Nickelodeon", "AMC"].map((client) => (
              <div key={client} className="text-lg font-semibold text-white/60 hover:text-white/80 transition-colors">
                {client}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Row */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { stat: "$2B+", description: "Partner Revenue Generated" },
              { stat: "24+", description: "Years of Experience" },
              { stat: "3,000+", description: "Professionals Trained" }
            ].map((item, index) => (
              <div key={index} className="text-center p-8 border border-white/10 rounded-lg glow-hover">
                <div className="text-4xl md:text-5xl font-bold mb-4">{item.stat}</div>
                <div className="text-white/70">{item.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-20 diagonal-glow">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 className="text-4xl md:text-5xl font-bold">The No-Pinch Approach</h2>
              
              <div className="space-y-6 text-lg text-white/80">
                <p>
                  When monetization is a tactical playbook, it fights your product, 
                  upsets your customers, and limits the business.
                </p>
                <p>
                  When monetization is a design discipline, it fits your product, 
                  serves your customers, and uncaps the business.
                </p>
              </div>
              
              <ul className="space-y-4">
                {["Psychology-first design", "Ethical monetization models", "Long-term growth without friction"].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    <span className="text-white/90">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="flex justify-center">
              <div className="relative p-12 border border-white/20 rounded-lg glow-bg">
                <div className="text-2xl font-bold text-center tracking-widest">
                  REDEFINING<br />VALUE
                </div>
                <div className="absolute top-0 right-0 w-16 h-16 opacity-30">
                  <div className="w-full h-0.5 bg-gradient-to-r from-transparent to-white/60 transform rotate-45 origin-left"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="space-y-16">
            {[
              {
                quote: "Because of the specific recommendations we received from Jordan, our game is both more fun for players and able to monetize those players more effectively.",
                author: "Richard Barnwell",
                title: "CEO, Digit Game Studios"
              },
              {
                quote: "Jordan was a critical element in the design of what became Hempire (top grossing on iOS+Android). There just wouldn't have been Hempire without Jordan.",
                author: "Dennis Malloy",
                title: "President of LBC Studios"
              },
              {
                quote: "Working with Jordan it is readily apparent that he is driven to create the best games possible... These efforts are reflected in a history of profitable titles.",
                author: "Geoffrey Mattei",
                title: "Consultant at Bain & Company"
              }
            ].map((testimonial, index) => (
              <div key={index} className="max-w-4xl mx-auto text-center space-y-6">
                <blockquote className="text-xl md:text-2xl font-light leading-relaxed text-white/90">
                  &ldquo;{testimonial.quote}&rdquo;
                </blockquote>
                <div className="text-white/70">
                  <div className="font-semibold">{testimonial.author}</div>
                  <div className="text-sm">{testimonial.title}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 glow-bg">
        <div className="max-w-4xl mx-auto px-6 text-center space-y-8">
          <h2 className="text-4xl md:text-5xl font-bold">
            Ready to Design Your Revenue?
          </h2>
          <button className="bg-white text-black px-12 py-4 rounded text-lg font-semibold glow-hover transition-all duration-300 hover:shadow-glow-lg">
            Book a Call
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex items-center gap-3">
              <span className="text-2xl font-light">/ BRIGHT BLACK</span>
            </div>
            
            <div className="flex gap-8">
              <Link href="#about" className="text-white/60 hover:text-white transition-colors">About</Link>
              <Link href="#speaking" className="text-white/60 hover:text-white transition-colors">Speaking</Link>
              <Link href="#work" className="text-white/60 hover:text-white transition-colors">Work</Link>
              <Link href="#contact" className="text-white/60 hover:text-white transition-colors">Contact</Link>
            </div>
            
            <div className="text-white/40 text-sm">
              © 2026 Bright Black, LLC
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}