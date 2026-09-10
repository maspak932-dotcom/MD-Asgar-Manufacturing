import React from "react";
import {
  Phone,
  Mail,
  Instagram,
  Facebook,
  Twitter,
  Youtube,
  ShieldCheck,
  Package,
  ChevronRight,
  MessageCircle,
  MapPin,
  ArrowUpRight,
  MessageSquare,
  Globe,
} from "lucide-react";

const products = [
  {
    id: 1,
    index: "01",
    name: "Trolley Bag Collection",
    image: "/photos/photo-1.png",
  },
  {
    id: 2,
    index: "02",
    name: "Travel Bag Collection",
    image: "/photos/photo-2.png",
  },
  {
    id: 3,
    index: "03",
    name: "Premium Luggage",
    image: "/photos/photo-3.png",
  },
  {
    id: 4,
    index: "04",
    name: "4-Wheel Trolley Collection",
    image: "/photos/photo-4.png",
  },
  {
    id: 5,
    index: "05",
    name: "Luxury Bags Collection",
    image: "/photos/photo-5.png",
  },
];

function App() {
  const contactNumber = "9653181917";
  const contactEmail = "Maspak932@gmail.com";

  const socialLinks = {
    instagram:
      "https://www.instagram.com/funny_joke6114?igsh=MWRvcnloZGdvOWNlcg==",
    facebook: "https://www.facebook.com/share/18pgTtHLd8/",
    threads: "https://www.threads.com/@asgarluxurybags",
    twitter: "https://x.com/md_asgar_786",
    youtube: "https://www.youtube.com/@TheSilent-01",
    website: "https://asgar-luxury-bags.vercel.app/",
  };

  const whatsappLink =
    `https://wa.me/${contactNumber}` +
    `?text=${encodeURIComponent(
      "Hello, I am interested in your trolley bag products."
    )}`;

  return (
    <div className="min-h-screen bg-[#080808] text-white overflow-x-hidden font-sans antialiased">

      {/* ================= HEADER ================= */}
      <header className="fixed top-0 left-0 right-0 z-50">
        <nav className="bg-black/80 backdrop-blur-xl border-b border-white/10">
          <div className="max-w-7xl mx-auto px-5 md:px-8 h-[76px] flex items-center justify-between">

            {/* Brand */}
            <a href="#" className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-xl bg-white flex items-center justify-center overflow-hidden">
                <span className="text-black font-black text-sm">AL</span>
              </div>

              <div className="leading-none">
                <div className="font-bold text-lg tracking-tight">
                  ASGAR
                </div>
                <div className="text-[9px] text-white/45 tracking-[3px] uppercase mt-1">
                  Luxury Bags
                </div>
              </div>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-9 text-sm text-white/65">
              <a href="#" className="hover:text-white transition">
                Home
              </a>

              <a href="#collection" className="hover:text-white transition">
                Collection
              </a>

              <a href="#about" className="hover:text-white transition">
                About
              </a>

              <a href="#wholesale" className="hover:text-white transition">
                Wholesale
              </a>

              <a href="#contact" className="hover:text-white transition">
                Contact
              </a>
            </div>

            {/* Header CTA */}
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex items-center gap-2 bg-white text-black px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-yellow-400 transition"
            >
              Get Quote
              <ArrowUpRight size={16} />
            </a>
          </div>
        </nav>
      </header>

      {/* ================= HERO ================= */}
      <main>

        <section className="relative pt-[76px]">
          <div className="relative w-full overflow-hidden">

            <img
              src="/photos/banner.png"
              alt="ASGAR Luxury Bags"
              className="w-full h-[430px] sm:h-[520px] md:h-[650px] object-cover block"
            />

            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black/35" />

            {/* Hero Content */}
            <div className="absolute inset-0 flex items-center">
              <div className="max-w-7xl w-full mx-auto px-5 md:px-8">

                <div className="max-w-2xl">

                  <div className="inline-flex items-center gap-2 border border-white/20 bg-black/25 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
                    <span className="w-2 h-2 rounded-full bg-yellow-400" />
                    <span className="text-xs sm:text-sm tracking-wide text-white/80">
                      Ludhiana · India
                    </span>
                  </div>

                  <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold leading-[1.05] tracking-tight">
                    Premium luggage.
                    <br />
                    <span className="text-yellow-400">
                      Built for business.
                    </span>
                  </h1>

                  <p className="mt-6 text-white/75 text-base md:text-lg leading-relaxed max-w-xl">
                    ASGAR LUXURY BAGS by MD ASGAR MANUFACTURE.
                    Premium trolley bags for retailers, wholesalers
                    and business buyers.
                  </p>

                  <div className="flex flex-wrap gap-3 mt-8">

                    <a
                      href={whatsappLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-yellow-400 text-black font-semibold px-6 py-3.5 rounded-full hover:bg-yellow-300 transition"
                    >
                      WhatsApp Us
                      <ChevronRight size={18} />
                    </a>

                    <a
                      href="#collection"
                      className="inline-flex items-center gap-2 border border-white/30 bg-black/20 backdrop-blur-sm px-6 py-3.5 rounded-full font-semibold hover:bg-white hover:text-black transition"
                    >
                      View Collection
                    </a>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================= TRUST BAR ================= */}
        <section className="border-y border-white/10 bg-[#0d0d0d]">
          <div className="max-w-7xl mx-auto px-5 md:px-8 py-7">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

              <div className="flex items-center gap-3">
                <ShieldCheck className="text-yellow-400" size={24} />
                <div>
                  <p className="font-semibold text-sm">
                    Premium Quality
                  </p>
                  <p className="text-xs text-white/40 mt-1">
                    Quality-focused products
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Package className="text-yellow-400" size={24} />
                <div>
                  <p className="font-semibold text-sm">
                    Wholesale Orders
                  </p>
                  <p className="text-xs text-white/40 mt-1">
                    Business-friendly supply
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <MapPin className="text-yellow-400" size={24} />
                <div>
                  <p className="font-semibold text-sm">
                    Ludhiana, Punjab
                  </p>
                  <p className="text-xs text-white/40 mt-1">
                    Direct manufacturer
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <MessageSquare className="text-yellow-400" size={24} />
                <div>
                  <p className="font-semibold text-sm">
                    Direct Enquiry
                  </p>
                  <p className="text-xs text-white/40 mt-1">
                    Quick business communication
                  </p>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ================= COLLECTION ================= */}
        <section
          id="collection"
          className="max-w-7xl mx-auto px-5 md:px-8 py-20 md:py-28"
        >

          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">

            <div>
              <p className="text-yellow-400 text-xs font-semibold uppercase tracking-[3px] mb-4">
                Our Collection
              </p>

              <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
                Explore our bags
              </h2>
            </div>

            <p className="text-white/45 max-w-md leading-relaxed">
              Discover our range of trolley and travel bags designed
              for retailers, wholesalers and business buyers.
            </p>

          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

            {products.map((product) => (
              <article
                key={product.id}
                className="group bg-[#101010] border border-white/10 rounded-3xl overflow-hidden hover:border-yellow-400/30 transition duration-500"
              >

                <div className="h-[300px] bg-[#151515] flex items-center justify-center p-7 overflow-hidden">

                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-700"
                  />

                </div>

                <div className="p-6">

                  <span className="text-yellow-400 text-xs font-mono tracking-widest">
                    {product.index}
                  </span>

                  <h3 className="text-xl font-semibold mt-2">
                    {product.name}
                  </h3>

                  <p className="text-white/40 text-sm leading-relaxed mt-3">
                    Premium luggage designed for modern travel
                    and wholesale business requirements.
                  </p>

                  <a
                    href={whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 flex items-center justify-center gap-2 w-full bg-white text-black font-semibold py-3.5 rounded-xl hover:bg-yellow-400 transition"
                  >
                    Enquire Now
                    <ChevronRight size={17} />
                  </a>

                </div>
              </article>
            ))}

          </div>
        </section>

        {/* ================= WHOLESALE ================= */}
        <section
          id="wholesale"
          className="px-5 md:px-8 py-10 md:py-16"
        >
          <div className="max-w-7xl mx-auto rounded-[2rem] border border-white/10 bg-gradient-to-br from-[#181818] to-[#0d0d0d] overflow-hidden">

            <div className="grid md:grid-cols-2">

              <div className="p-8 md:p-14 lg:p-16">

                <p className="text-yellow-400 text-xs font-semibold uppercase tracking-[3px] mb-5">
                  Wholesale
                </p>

                <h2 className="text-3xl md:text-5xl font-bold leading-tight">
                  Built for
                  <br />
                  wholesale business.
                </h2>

                <p className="text-white/45 mt-6 leading-relaxed max-w-lg">
                  We work with retailers, wholesalers and business
                  buyers looking for quality luggage with practical
                  wholesale ordering options.
                </p>

                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 mt-8 bg-yellow-400 text-black font-semibold px-6 py-3.5 rounded-full hover:bg-yellow-300 transition"
                >
                  Ask for Wholesale Quote
                  <ArrowUpRight size={17} />
                </a>

              </div>

              <div className="border-t md:border-t-0 md:border-l border-white/10 p-8 md:p-14 lg:p-16">

                <div className="space-y-6">

                  <div>
                    <p className="text-white/40 text-sm">
                      Ludhiana / Punjab
                    </p>
                    <p className="text-xl font-semibold mt-1">
                      Orders starting from 50 pieces
                    </p>
                  </div>

                  <div className="h-px bg-white/10" />

                  <div>
                    <p className="text-white/40 text-sm">
                      Outside Punjab
                    </p>
                    <p className="text-xl font-semibold mt-1">
                      Minimum 200 pieces
                    </p>
                  </div>

                  <div className="h-px bg-white/10" />

                  <div>
                    <p className="text-white/40 text-sm">
                      Quantity
                    </p>
                    <p className="text-xl font-semibold mt-1">
                      Better rates on larger quantities
                    </p>
                  </div>

                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ================= ABOUT ================= */}
        <section
          id="about"
          className="max-w-7xl mx-auto px-5 md:px-8 py-20 md:py-28"
        >

          <div className="max-w-3xl">

            <p className="text-yellow-400 text-xs font-semibold uppercase tracking-[3px] mb-5">
              About ASGAR
            </p>

            <h2 className="text-3xl md:text-5xl font-bold leading-tight">
              MD ASGAR MANUFACTURE
              <br />
              <span className="text-white/45">
                behind ASGAR LUXURY BAGS.
              </span>
            </h2>

            <p className="text-white/50 text-base md:text-lg leading-relaxed mt-7">
              Based in Ludhiana, Punjab, MD ASGAR MANUFACTURE
              focuses on luggage and trolley bags for wholesale
              and business buyers.
            </p>

          </div>

        </section>

        {/* ================= CONTACT ================= */}
        <section
          id="contact"
          className="border-t border-white/10 bg-[#0d0d0d]"
        >

          <div className="max-w-7xl mx-auto px-5 md:px-8 py-20 md:py-28">

            <div className="grid md:grid-cols-2 gap-14">

              <div>

                <p className="text-yellow-400 text-xs font-semibold uppercase tracking-[3px] mb-5">
                  Contact
                </p>

                <h2 className="text-3xl md:text-5xl font-bold">
                  Let's talk business.
                </h2>

                <p className="text-white/45 mt-5 max-w-md leading-relaxed">
                  Contact us for wholesale enquiries, product
                  information and business orders.
                </p>

              </div>

              <div className="space-y-3">

                <a
                  href={`tel:${contactNumber}`}
                  className="flex items-center gap-4 p-5 rounded-2xl border border-white/10 bg-white/[0.02] hover:border-yellow-400/30 transition"
                >
                  <Phone className="text-yellow-400" size={21} />
                  <span>{contactNumber}</span>
                </a>

                <a
                  href={`mailto:${contactEmail}`}
                  className="flex items-center gap-4 p-5 rounded-2xl border border-white/10 bg-white/[0.02] hover:border-yellow-400/30 transition"
                >
                  <Mail className="text-yellow-400" size={21} />
                  <span>{contactEmail}</span>
                </a>

                <div className="flex items-center gap-4 p-5 rounded-2xl border border-white/10 bg-white/[0.02]">
                  <MapPin className="text-yellow-400" size={21} />
                  <span>Ludhiana, Punjab, India</span>
                </div>

              </div>

            </div>
          </div>
        </section>

      </main>

      {/* ================= FOOTER ================= */}
      <footer className="border-t border-white/10 bg-black">

        <div className="max-w-7xl mx-auto px-5 md:px-8 py-14">

          <div className="flex flex-col md:flex-row justify-between gap-10">

            <div>

              <h3 className="font-bold text-xl">
                ASGAR LUXURY BAGS
              </h3>

              <p className="text-white/35 text-sm mt-2">
                Manufactured by MD ASGAR MANUFACTURE
              </p>

            </div>

            {/* Social Media */}
            <div>

              <p className="text-white/40 text-xs uppercase tracking-[2px] mb-4">
                Connect With Us
              </p>

              <div className="flex flex-wrap gap-3">

                <a
                  href={socialLinks.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="w-11 h-11 rounded-full border border-white/15 flex items-center justify-center hover:bg-white hover:text-black transition"
                >
                  <Instagram size={18} />
                </a>

                <a
                  href={socialLinks.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="w-11 h-11 rounded-full border border-white/15 flex items-center justify-center hover:bg-white hover:text-black transition"
                >
                  <Facebook size={18} />
                </a>

                <a
                  href={socialLinks.threads}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Threads"
                  className="w-11 h-11 rounded-full border border-white/15 flex items-center justify-center hover:bg-white hover:text-black transition"
                >
                  <AtSignIcon />
                </a>

                <a
                  href={socialLinks.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="X"
                  className="w-11 h-11 rounded-full border border-white/15 flex items-center justify-center hover:bg-white hover:text-black transition"
                >
                  <Twitter size={18} />
                </a>

                <a
                  href={socialLinks.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="YouTube"
                  className="w-11 h-11 rounded-full border border-white/15 flex items-center justify-center hover:bg-white hover:text-black transition"
                >
                  <Youtube size={18} />
                </a>

                <a
                  href={socialLinks.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Website"
                  className="w-11 h-11 rounded-full border border-white/15 flex items-center justify-center hover:bg-white hover:text-black transition"
                >
                  <Globe size={18} />
                </a>

              </div>
            </div>

          </div>

          <div className="border-t border-white/10 mt-10 pt-6 flex flex-col sm:flex-row justify-between gap-3 text-xs text-white/25">
            <span>© 2026 ASGAR LUXURY BAGS</span>
            <span>MD ASGAR MANUFACTURE · Ludhiana, Punjab</span>
          </div>

        </div>
      </footer>

      {/* ================= FLOATING WHATSAPP ================= */}
      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="fixed bottom-5 right-5 z-50 w-14 h-14 rounded-full bg-green-500 flex items-center justify-center shadow-xl hover:scale-105 transition"
      >
        <MessageCircle size={27} />
      </a>

    </div>
  );
}

/* Simple Threads-style icon */
function AtSignIcon() {
  return (
    <span className="text-sm font-bold">
      @
    </span>
  );
}

export default App;
