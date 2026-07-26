import React from 'react';
import {
  Phone,
  Mail,
  Instagram,
  Facebook,
  Twitter,
  Youtube,
  ShieldCheck,
  Recycle,
  ChevronRight,
  MessageCircle,
  MapPin,
  Package,
  ArrowUpRight
} from 'lucide-react';

const products = [
  {
    id: 1,
    index: "01",
    name: "Premium Fabric Trolley",
    image: "/file_0000000012387208a0d377cc39ccf0f8.png",
    description: "Reinforced fabric shell built for daily wear — strong stitching, modern silhouette, made to last."
  },
  {
    id: 2,
    index: "02",
    name: "Executive Travel Bag",
    image: "/file_000000007ccc720b85830076b29cf37f.png",
    description: "Elegant, durable luggage designed for business travel and everyday professional use."
  },
  {
    id: 3,
    index: "03",
    name: "Soft Shell Collection",
    image: "/file_000000007cdc7208bf2995f04e6521f1.png",
    description: "Lightweight and spacious, engineered for comfort on long journeys and frequent travel."
  },
  {
    id: 4,
    index: "04",
    name: "Urban Travel Series",
    image: "/file_00000000bab8720bb04e2a6ed7e534f9.png",
    description: "A stylish trolley built for maximum storage capacity without adding extra weight."
  },
  {
    id: 5,
    index: "05",
    name: "Plastic Trolley Collection",
    image: "/file_00000000cc3072089dd33b05cc0c6e10.png",
    description: "Impact-resistant plastic trolley bags finished to a premium, retail-ready standard."
  }
];

function App() {
  const contactNumber = "9653181917";
  const contactEmail = "Maspak932@gmail.com";

  const socialLinks = {
    instagram: "https://www.instagram.com/funny_joke6114?igsh=MWRvcnloZGdvOWNlcg==",
    facebook: "https://www.facebook.com/share/18pgTtHLd8/",
    twitter: "https://x.com/aspak_muha46091",
    youtube: "https://www.youtube.com/@TheSilent-01"
  };

  const whatsappLink = `https://wa.me/${contactNumber}?text=Hello, I am interested in your trolley bag products.`;

  return (
    <div className="min-h-screen bg-[#0c0c0c] text-white overflow-x-hidden font-sans antialiased">

      {/* ================= NAVBAR ================= */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-xl border-b border-white/10">
        <div className="max-w-7xl mx-auto px-5 md:px-8 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img
              src="/file_000000004c787208a3641f9ba0bfc52d.png"
              alt="MD ASGAR Logo"
              className="h-11 md:h-13 w-auto object-contain"
            />
            <div className="leading-none">
              <h1 className="text-white text-lg md:text-xl font-bold tracking-tight">
                MD ASGAR
              </h1>
              <p className="text-white/40 text-[10px] md:text-[11px] uppercase tracking-[3px] mt-0.5">
                Manufacturing
              </p>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-10 text-sm font-medium text-white/70">
            <a href="#collection" className="hover:text-white transition-colors">Collection</a>
            <a href="#about" className="hover:text-white transition-colors">About</a>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
          </div>

          <a
            href={whatsappLink}
            target="_blank"
            rel="noreferrer"
            className="hidden sm:flex items-center gap-2 bg-white text-black text-sm font-semibold px-5 py-2.5 rounded-full hover:bg-yellow-400 transition-colors"
          >
            WhatsApp
            <ArrowUpRight size={16} />
          </a>
        </div>
      </nav>

      {/* ================= HERO ================= */}
      <header className="relative pt-20">
        {/* Banner */}
        <div className="w-full overflow-hidden">
          <img
            src="/file_00000000573481faacc8d38260eec192.png"
            alt="ASGAR Banner"
            className="w-full h-auto object-contain block"
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-5 md:px-8 py-20 md:py-28 text-center">
          <div className="inline-flex items-center gap-2 border border-white/15 rounded-full px-4 py-1.5 mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-yellow-400"></span>
            <span className="text-xs md:text-sm text-white/60 tracking-wide">
              Ludhiana · Direct Manufacturer
            </span>
          </div>

          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] mb-6">
            Built for the<br />
            <span className="text-yellow-400">journey ahead.</span>
          </h2>

          <p className="text-white/50 text-base md:text-xl max-w-2xl mx-auto leading-relaxed mb-12">
            Premium fabric & plastic trolley bags manufactured by Mohammed Asgar.
            Designed for retailers, wholesalers and brands who value quality.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href={whatsappLink}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 bg-yellow-400 hover:bg-yellow-300 text-black font-semibold px-8 py-4 rounded-full transition-all"
            >
              Contact on WhatsApp
              <ChevronRight size={18} />
            </a>
            <a
              href="#collection"
              className="inline-flex items-center gap-2 border border-white/20 hover:border-white/40 text-white px-8 py-4 rounded-full transition-all"
            >
              Explore Collection
            </a>
          </div>
        </div>
      </header>

      {/* ================= FEATURES ================= */}
      <section className="max-w-7xl mx-auto px-5 md:px-8 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              icon: <ShieldCheck size={28} className="text-yellow-400" />,
              title: "Premium Quality",
              desc: "Reinforced construction and premium materials built for real-world travel."
            },
            {
              icon: <Recycle size={28} className="text-emerald-400" />,
              title: "Responsible Make",
              desc: "Long-lasting products designed to reduce waste and disposable culture."
            },
            {
              icon: <Package size={28} className="text-sky-400" />,
              title: "Direct Wholesale",
              desc: "Factory pricing with no middlemen. Built for bulk and retail buyers."
            }
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white/[0.03] border border-white/10 rounded-3xl p-8 hover:bg-white/[0.05] transition-colors"
            >
              <div className="mb-5">{item.icon}</div>
              <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
              <p className="text-white/50 leading-relaxed text-[15px]">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= COLLECTION ================= */}
      <section id="collection" className="max-w-7xl mx-auto px-5 md:px-8 py-16 md:py-24">
        <div className="text-center mb-16">
          <p className="text-yellow-400 text-sm font-medium tracking-[3px] uppercase mb-4">
            Our Collection
          </p>
          <h3 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
            Five lines. One standard.
          </h3>
          <p className="text-white/50 max-w-xl mx-auto">
            Every bag is manufactured and quality-checked under the same strict process.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
          {products.map((product) => (
            <div
              key={product.id}
              className="group bg-white/[0.03] border border-white/10 rounded-[1.75rem] overflow-hidden hover:border-white/20 transition-all duration-500"
            >
              <div className="bg-[#141414] h-[260px] md:h-[300px] p-6 flex items-center justify-center">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              <div className="p-7">
                <span className="text-yellow-400/80 text-xs font-mono tracking-widest">
                  {product.index}
                </span>
                <h4 className="text-xl font-semibold mt-2 mb-3">
                  {product.name}
                </h4>
                <p className="text-white/45 text-[14.5px] leading-relaxed mb-7">
                  {product.description}
                </p>

                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center gap-2 w-full bg-white text-black font-semibold py-3.5 rounded-2xl hover:bg-yellow-400 transition-colors"
                >
                  Enquire Now
                  <ChevronRight size={17} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ================= SHOWCASE BANNER ================= */}
      <section className="px-5 md:px-8 py-10">
        <div className="max-w-7xl mx-auto rounded-[2rem] overflow-hidden border border-white/10">
          <img
            src="/IMG_20260723_145155_841.png"
            alt="Premium Showcase"
            className="w-full h-auto object-contain block"
          />
        </div>
      </section>

      {/* ================= ABOUT STRIP ================= */}
      <section id="about" className="max-w-7xl mx-auto px-5 md:px-8 py-20 md:py-28">
        <div className="bg-gradient-to-br from-white/[0.04] to-transparent border border-white/10 rounded-[2rem] p-10 md:p-16 text-center">
          <h3 className="text-3xl md:text-4xl font-bold tracking-tight mb-5">
            Manufactured in Ludhiana
          </h3>
          <p className="text-white/50 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            MD ASGAR is a direct manufacturer of premium fabric and plastic trolley bags.
            We work with retailers, wholesalers and brands across India — delivering consistent
            quality at factory pricing.
          </p>
        </div>
      </section>

      {/* ================= FOOTER / CONTACT ================= */}
      <footer id="contact" className="border-t border-white/10 bg-black">
        <div className="max-w-7xl mx-auto px-5 md:px-8 py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div>
              <p className="text-yellow-400 text-sm font-medium tracking-[3px] uppercase mb-4">
                Contact
              </p>
              <h3 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
                Let's talk wholesale.
              </h3>
              <p className="text-white/45 max-w-md mb-10 leading-relaxed">
                For pricing, MOQ, samples or custom manufacturing — reach out directly.
              </p>

              <div className="space-y-3">
                <a
                  href={`tel:${contactNumber}`}
                  className="flex items-center gap-4 bg-white/[0.03] border border-white/10 rounded-2xl px-5 py-4 hover:border-white/20 transition-colors"
                >
                  <Phone size={20} className="text-yellow-400" />
                  <span className="font-medium">{contactNumber}</span>
                </a>

                <a
                  href={`mailto:${contactEmail}`}
                  className="flex items-center gap-4 bg-white/[0.03] border border-white/10 rounded-2xl px-5 py-4 hover:border-white/20 transition-colors"
                >
                  <Mail size={20} className="text-yellow-400" />
                  <span className="font-medium">{contactEmail}</span>
                </a>

                <div className="flex items-center gap-4 bg-white/[0.03] border border-white/10 rounded-2xl px-5 py-4">
                  <MapPin size={20} className="text-yellow-400" />
                  <span className="font-medium">Ludhiana, Punjab</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col justify-between items-start md:items-end">
              <div className="flex gap-5">
                {[
                  { href: socialLinks.instagram, Icon: Instagram },
                  { href: socialLinks.facebook, Icon: Facebook },
                  { href: socialLinks.twitter, Icon: Twitter },
                  { href: socialLinks.youtube, Icon: Youtube }
                ].map(({ href, Icon }, i) => (
                  <a
                    key={i}
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    className="w-11 h-11 rounded-full border border-white/15 flex items-center justify-center text-white/60 hover:text-white hover:border-white/40 transition-all"
                  >
                    <Icon size={18} />
                  </a>
                ))}
              </div>

              <div className="mt-12 md:mt-0 text-left md:text-right">
                <p className="text-white font-semibold text-lg">MD ASGAR</p>
                <p className="text-white/40 text-sm mt-1">Manufactured by Mohammed Asgar</p>
                <p className="text-white/25 text-sm mt-4">© 2026 All Rights Reserved</p>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* ================= FLOATING WHATSAPP ================= */}
      <a
        href={whatsappLink}
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-green-500 hover:bg-green-400 rounded-full flex items-center justify-center shadow-2xl shadow-green-500/30 transition-all hover:scale-110"
        aria-label="WhatsApp"
      >
        <MessageCircle size={26} className="text-white" />
      </a>
    </div>
  );
}

export default App;
