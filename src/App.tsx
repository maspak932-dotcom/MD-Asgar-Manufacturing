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
  MapPin
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
    <div className="min-h-screen bg-[#f8f5f0] text-slate-900 overflow-x-hidden font-sans antialiased">
      
      {/* NAVBAR */}
      <nav className="bg-black/95 backdrop-blur-md sticky top-0 z-50 border-b border-zinc-800/80">
        <div className="max-w-7xl mx-auto px-5 md:px-8 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img
              src="/file_000000004c787208a3641f9ba0bfc52d.png"
              alt="MD ASGAR Logo"
              className="h-12 md:h-14 w-auto object-contain"
            />
            <div className="leading-tight">
              <h1 className="text-yellow-400 text-lg md:text-2xl font-bold tracking-tight">
                MD ASGAR
              </h1>
              <p className="text-gray-500 text-[11px] md:text-xs uppercase tracking-[2.5px]">
                Trolley Bag Manufacturing
              </p>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-10 text-gray-300 text-sm font-medium">
            <a href="#collection" className="hover:text-yellow-400 transition-colors duration-300">
              Collection
            </a>
            <a href="#contact" className="hover:text-yellow-400 transition-colors duration-300">
              Contact
            </a>
          </div>

          <div className="flex gap-4 md:gap-5">
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
                className="text-gray-400 hover:text-yellow-400 transition-colors duration-300"
              >
                <Icon size={19} />
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* HERO SECTION */}
      <header className="bg-black">
        <div className="w-full overflow-hidden">
          <img
            src="/file_00000000573481faacc8d38260eec192.png"
            alt="ASGAR Banner"
            className="w-full h-auto object-contain block"
          />
        </div>

        <div className="text-center px-5 py-16 md:py-24 bg-black">
          <span className="inline-block text-yellow-400 text-xs md:text-sm font-semibold uppercase tracking-[3.5px] mb-6">
            Ludhiana · Direct From Manufacturer
          </span>
          
          <h2 className="text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 tracking-tight leading-[1.1]">
            Trolley bags built<br className="hidden md:block" /> to be trusted.
          </h2>
          
          <p className="text-gray-400 text-base md:text-xl max-w-3xl mx-auto leading-relaxed mb-2">
            Premium fabric & plastic trolley bag manufacturing by Mohammed Asgar —
            durable construction, modern designs, and wholesale pricing built for
            retailers, wholesalers and shop owners.
          </p>

          <div className="flex items-center justify-center gap-4 mt-12 flex-wrap">
            <a
              href={whatsappLink}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-3 bg-yellow-500 hover:bg-yellow-400 text-black px-8 py-4 rounded-2xl font-bold text-base md:text-lg transition-all duration-300 shadow-lg shadow-yellow-500/20 hover:shadow-yellow-400/30 hover:-translate-y-0.5"
            >
              Contact On WhatsApp
              <ChevronRight size={20} />
            </a>
            
            <a
              href="#collection"
              className="inline-flex items-center gap-2 border border-zinc-700 hover:border-yellow-400 text-white px-8 py-4 rounded-2xl font-semibold text-base md:text-lg transition-all duration-300 hover:bg-zinc-900"
            >
              View Collection
            </a>
          </div>
        </div>
      </header>

      {/* FEATURES */}
      <section className="max-w-7xl mx-auto py-20 px-5 md:px-8 grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          {
            Icon: ShieldCheck,
            color: "text-yellow-500",
            title: "Premium Quality",
            desc: "Durable trolley bags with reinforced stitching and premium-grade material — built to survive real travel, not just look good on a shelf."
          },
          {
            Icon: Recycle,
            color: "text-green-600",
            title: "Eco Friendly",
            desc: "Sustainable materials and responsible manufacturing focused on long-lasting products over disposable ones."
          },
          {
            Icon: MessageCircle,
            color: "text-blue-600",
            title: "Direct Wholesale",
            desc: "No middlemen. Direct manufacturer pricing for retailers, wholesalers and bulk buyers across the trade."
          }
        ].map((item, i) => (
          <div
            key={i}
            className="bg-white p-8 rounded-[2rem] shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 border border-black/5"
          >
            <item.Icon className={`${item.color} mb-5`} size={42} />
            <h3 className="text-xl md:text-2xl font-bold mb-3">{item.title}</h3>
            <p className="text-gray-600 leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </section>

      {/* PRODUCTS COLLECTION */}
      <main id="collection" className="max-w-7xl mx-auto px-5 md:px-8 py-16 md:py-20">
        <div className="text-center mb-16 md:mb-20">
          <span className="text-yellow-500 text-xs md:text-sm font-semibold uppercase tracking-[3.5px]">
            Our Collection
          </span>
          <h3 className="text-3xl md:text-5xl font-extrabold mt-4 mb-5 tracking-tight">
            Five lines, one standard.
          </h3>
          <div className="h-1.5 w-20 bg-yellow-500 mx-auto rounded-full mb-6"></div>
          <p className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            Every trolley bag we manufacture — fabric or plastic — is built and
            checked to the same quality standard before it ships.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {products.map((product) => (
            <div
              key={product.id}
              className="group bg-white rounded-[2rem] overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-black/5"
            >
              <div className="bg-[#faf8f5] h-[280px] md:h-[320px] p-6 flex items-center justify-center overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              
              <div className="p-7 md:p-8">
                <span className="text-yellow-500 text-xs font-mono tracking-[2.5px]">
                  {product.index}
                </span>
                <h4 className="text-xl md:text-2xl font-bold mt-2 mb-3">
                  {product.name}
                </h4>
                <p className="text-gray-600 leading-relaxed mb-8 text-[15px]">
                  {product.description}
                </p>
                
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full bg-black hover:bg-yellow-500 hover:text-black text-white py-4 rounded-2xl font-bold flex items-center justify-center gap-3 transition-all duration-300"
                >
                  Enquire Now <ChevronRight size={18} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* MIDDLE SHOWCASE BANNER */}
      <section className="w-full mt-8 mb-4 px-5 md:px-8">
        <div className="max-w-7xl mx-auto rounded-[2rem] overflow-hidden shadow-2xl">
          <img
            src="/IMG_20260723_145155_841.png"
            alt="Premium Trolley Bag Showcase"
            className="w-full h-auto object-contain block"
          />
        </div>
      </section>

      {/* FOOTER */}
      <footer id="contact" className="bg-black text-white py-20 px-5 md:px-8 mt-16">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
          <div>
            <span className="text-yellow-400 uppercase tracking-[4px] text-sm font-bold">
              Contact Us
            </span>
            <h3 className="text-3xl md:text-4xl font-extrabold mt-4 mb-6 tracking-tight">
              Let's talk wholesale.
            </h3>
            <p className="text-gray-400 text-base md:text-lg mb-10 max-w-md leading-relaxed">
              Reach out directly for pricing, minimum order quantities, samples
              or custom manufacturing requests.
            </p>
            
            <div className="space-y-4">
              <a
                href={`tel:${contactNumber}`}
                className="flex items-center gap-4 bg-zinc-900/80 border border-zinc-800 p-5 rounded-2xl hover:border-yellow-500/40 transition-all duration-300 group"
              >
                <div className="bg-yellow-500/15 p-3 rounded-xl group-hover:bg-yellow-500/25 transition-colors">
                  <Phone className="text-yellow-400" size={22} />
                </div>
                <span className="text-lg font-medium">{contactNumber}</span>
              </a>
              
              <a
                href={`mailto:${contactEmail}`}
                className="flex items-center gap-4 bg-zinc-900/80 border border-zinc-800 p-5 rounded-2xl hover:border-yellow-500/40 transition-all duration-300 group"
              >
                <div className="bg-yellow-500/15 p-3 rounded-xl group-hover:bg-yellow-500/25 transition-colors">
                  <Mail className="text-yellow-400" size={22} />
                </div>
                <span className="text-lg font-medium">{contactEmail}</span>
              </a>
              
              <div className="flex items-center gap-4 bg-zinc-900/80 border border-zinc-800 p-5 rounded-2xl">
                <div className="bg-yellow-500/15 p-3 rounded-xl">
                  <MapPin className="text-yellow-400" size={22} />
                </div>
                <span className="text-lg font-medium">Ludhiana, Punjab</span>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center md:items-end justify-between">
            <div className="flex gap-6">
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
                  className="text-gray-400 hover:text-yellow-400 transition-colors duration-300"
                >
                  <Icon size={26} />
                </a>
              ))}
            </div>
            
            <div className="border-t border-zinc-800 pt-8 mt-12 w-full text-center md:text-right">
              <p className="text-yellow-400 font-bold text-xl tracking-tight">MD ASGAR</p>
              <p className="text-gray-500 mt-2">Manufactured By Mohammed Asgar</p>
              <p className="text-gray-600 text-sm mt-3">© 2026 All Rights Reserved</p>
            </div>
          </div>
        </div>
      </footer>

      {/* FLOATING WHATSAPP BUTTON */}
      <a
        href={whatsappLink}
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-2xl z-50 transition-all duration-300 hover:scale-110 hover:shadow-green-500/40"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle size={30} />
      </a>
    </div>
  );
}

export default App;
