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
    description:
      "Reinforced fabric shell built for daily wear — strong stitching, modern silhouette, made to last."
  },

  {
    id: 2,
    index: "02",
    name: "Executive Travel Bag",
    image: "/file_000000007ccc720b85830076b29cf37f.png",
    description:
      "Elegant, durable luggage designed for business travel and everyday professional use."
  },

  {
    id: 3,
    index: "03",
    name: "Soft Shell Collection",
    image: "/file_000000007cdc7208bf2995f04e6521f1.png",
    description:
      "Lightweight and spacious, engineered for comfort on long journeys and frequent travel."
  },

  {
    id: 4,
    index: "04",
    name: "Urban Travel Series",
    image: "/file_00000000bab8720bb04e2a6ed7e534f9.png",
    description:
      "A stylish trolley built for maximum storage capacity without adding extra weight."
  },

  {
    id: 5,
    index: "05",
    name: "Plastic Trolley Collection",
    image: "/file_00000000cc3072089dd33b05cc0c6e10.png",
    description:
      "Impact-resistant plastic trolley bags finished to a premium, retail-ready standard."
  }

];

function App() {

  const contactNumber = "9653181917";

  const contactEmail = "Maspak932@gmail.com";

  const socialLinks = {

    instagram:
      "https://www.instagram.com/funny_joke6114?igsh=MWRvcnloZGdvOWNlcg==",

    facebook:
      "https://www.facebook.com/share/18pgTtHLd8/",

    twitter:
      "https://x.com/aspak_muha46091",

    youtube:
      "https://www.youtube.com/@TheSilent-01"

  };

  const whatsappLink =
    `https://wa.me/${contactNumber}?text=Hello, I am interested in your trolley bag products.`;

  return (

    <div className="min-h-screen bg-[#f5f1ea] text-slate-900 overflow-x-hidden font-sans">

      {/* NAVBAR */}

      <nav className="bg-black sticky top-0 z-50 border-b border-zinc-800">

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

              <p className="text-gray-500 text-[11px] md:text-xs uppercase tracking-[2px]">
                Trolley Bag Manufacturing
              </p>

            </div>

          </div>

          <div className="hidden md:flex items-center gap-8 text-gray-300 text-sm font-medium">
            <a href="#collection" className="hover:text-yellow-400 transition-colors">Collection</a>
            <a href="#contact" className="hover:text-yellow-400 transition-colors">Contact</a>
          </div>

          <div className="flex gap-4 md:gap-5">

            <a
              href={socialLinks.instagram}
              target="_blank"
              rel="noreferrer"
              className="text-gray-400 hover:text-yellow-400 transition-colors"
            >
              <Instagram size={19} />
            </a>

            <a
              href={socialLinks.facebook}
              target="_blank"
              rel="noreferrer"
              className="text-gray-400 hover:text-yellow-400 transition-colors"
            >
              <Facebook size={19} />
            </a>

            <a
              href={socialLinks.twitter}
              target="_blank"
              rel="noreferrer"
              className="text-gray-400 hover:text-yellow-400 transition-colors"
            >
              <Twitter size={19} />
            </a>

            <a
              href={socialLinks.youtube}
              target="_blank"
              rel="noreferrer"
              className="text-gray-400 hover:text-yellow-400 transition-colors"
            >
              <Youtube size={19} />
            </a>

          </div>

        </div>

      </nav>

      {/* HERO SECTION */}

      <header className="bg-black">

        {/* FULL BANNER */}

        <div className="w-full bg-black overflow-hidden">

          <img
            src="/hero-banner.png"
            alt="ASGAR Banner"
            className="w-full h-auto object-contain block"
          />

        </div>

        {/* TEXT BELOW IMAGE */}

        <div className="text-center px-5 py-16 md:py-20 bg-black">

          <span className="inline-block text-yellow-400 text-xs md:text-sm font-semibold uppercase tracking-[3px] mb-5">
            Ludhiana &middot; Direct From Manufacturer
          </span>

          <h2 className="text-white text-4xl md:text-6xl font-extrabold mb-4 tracking-tight">
            Trolley bags built<br className="hidden md:block" /> to be trusted.
          </h2>

          <p className="text-gray-400 text-base md:text-xl max-w-3xl mx-auto leading-relaxed">
            Premium fabric &amp; plastic trolley bag manufacturing by Mohammed Asgar —
            durable construction, modern designs, and wholesale pricing built for
            retailers, wholesalers and shop owners.
          </p>

          <div className="flex items-center justify-center gap-4 mt-10 flex-wrap">

            <a
              href={whatsappLink}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-3 bg-yellow-500 hover:bg-yellow-400 text-black px-8 py-4 rounded-2xl font-bold text-base md:text-lg transition-all"
            >
              Contact On WhatsApp
              <ChevronRight size={20} />
            </a>

            <a
              href="#collection"
              className="inline-flex items-center gap-2 border border-zinc-700 hover:border-yellow-400 text-white px-8 py-4 rounded-2xl font-semibold text-base md:text-lg transition-all"
            >
              View Collection
            </a>

          </div>

        </div>

      </header>

      {/* FEATURES */}

      <section className="max-w-7xl mx-auto py-16 px-5 md:px-8 grid grid-cols-1 md:grid-cols-3 gap-8">

        <div className="bg-white p-8 rounded-[2rem] shadow-xl">
          <ShieldCheck className="text-yellow-500 mb-4" size={44} />
          <h3 className="text-xl md:text-2xl font-bold mb-3">Premium Quality</h3>
          <p className="text-gray-600 leading-relaxed">
            Durable trolley bags with reinforced stitching and premium-grade material —
            built to survive real travel, not just look good on a shelf.
          </p>
        </div>

        <div className="bg-white p-8 rounded-[2rem] shadow-xl">
          <Recycle className="text-green-600 mb-4" size={44} />
          <h3 className="text-xl md:text-2xl font-bold mb-3">Eco Friendly</h3>
          <p className="text-gray-600 leading-relaxed">
            Sustainable materials and responsible manufacturing focused on
            long-lasting products over disposable ones.
          </p>
        </div>

        <div className="bg-white p-8 rounded-[2rem] shadow-xl">
          <MessageCircle className="text-blue-600 mb-4" size={44} />
          <h3 className="text-xl md:text-2xl font-bold mb-3">Direct Wholesale</h3>
          <p className="text-gray-600 leading-relaxed">
            No middlemen. Direct manufacturer pricing for retailers, wholesalers
            and bulk buyers across the trade.
          </p>
        </div>

      </section>

      {/* PRODUCTS */}

      <main id="collection" className="max-w-7xl mx-auto px-5 md:px-8 py-16">

        <div className="text-center mb-16">

          <span className="text-yellow-500 text-xs md:text-sm font-semibold uppercase tracking-[3px]">
            Our Collection
          </span>

          <h3 className="text-3xl md:text-5xl font-extrabold mt-4 mb-4 tracking-tight">
            Five lines, one standard.
          </h3>

          <div className="h-1 w-24 bg-yellow-500 mx-auto rounded-full mb-5"></div>

          <p className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto">
            Every trolley bag we manufacture — fabric or plastic — is built and
            checked to the same quality standard before it ships.
          </p>

        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">

          {products.map((product) => (

            <div
              key={product.id}
              className="bg-white rounded-[2rem] overflow-hidden shadow-xl hover:-translate-y-2 hover:shadow-2xl transition-all duration-500"
            >

              <div className="bg-white h-[300px] md:h-[350px] p-4 flex items-center justify-center overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-contain"
                />
              </div>

              <div className="p-7 md:p-8">

                <span className="text-yellow-500 text-xs font-mono tracking-[2px]">
                  {product.index}
                </span>

                <h4 className="text-xl md:text-2xl font-bold mt-2 mb-3">
                  {product.name}
                </h4>

                <p className="text-gray-600 leading-relaxed mb-8">
                  {product.description}
                </p>

                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full bg-black hover:bg-yellow-500 hover:text-black text-white py-4 rounded-2xl font-bold flex items-center justify-center gap-3 transition-all"
                >
                  Enquire Now
                  <ChevronRight size={20} />
                </a>

              </div>

            </div>

          ))}

        </div>

      </main>

      {/* FOOTER */}

      <footer id="contact" className="bg-black text-white py-20 px-5 md:px-8 mt-10">

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">

          <div>

            <span className="text-yellow-400 uppercase tracking-[4px] text-sm font-bold">
              Contact Us
            </span>

            <h3 className="text-3xl md:text-4xl font-extrabold mt-4 mb-6 tracking-tight">
              Let's talk wholesale.
            </h3>

            <p className="text-gray-400 text-base md:text-lg mb-10 max-w-md">
              Reach out directly for pricing, minimum order quantities, samples
              or custom manufacturing requests.
            </p>

            <div className="space-y-5">

              <a
                href={`tel:${contactNumber}`}
                className="flex items-center gap-4 bg-zinc-900 border border-zinc-800 p-5 rounded-2xl hover:border-yellow-500/50 transition-colors"
              >
                <div className="bg-yellow-500/20 p-3 rounded-xl">
                  <Phone className="text-yellow-400" size={22} />
                </div>
                <span className="text-lg font-medium">{contactNumber}</span>
              </a>

              <a
                href={`mailto:${contactEmail}`}
                className="flex items-center gap-4 bg-zinc-900 border border-zinc-800 p-5 rounded-2xl hover:border-yellow-500/50 transition-colors"
              >
                <div className="bg-yellow-500/20 p-3 rounded-xl">
                  <Mail className="text-yellow-400" size={22} />
                </div>
                <span className="text-lg font-medium">{contactEmail}</span>
              </a>

              <div className="flex items-center gap-4 bg-zinc-900 border border-zinc-800 p-5 rounded-2xl">
                <div className="bg-yellow-500/20 p-3 rounded-xl">
                  <MapPin className="text-yellow-400" size={22} />
                </div>
                <span className="text-lg font-medium">Ludhiana, Punjab</span>
              </div>

            </div>

          </div>

          <div className="flex flex-col items-center md:items-end justify-between">

            <div className="flex gap-6">

              <a href={socialLinks.instagram} target="_blank" rel="noreferrer" className="text-gray-400 hover:text-yellow-400 transition-colors">
                <Instagram size={28} />
              </a>

              <a href={socialLinks.facebook} target="_blank" rel="noreferrer" className="text-gray-400 hover:text-yellow-400 transition-colors">
                <Facebook size={28} />
              </a>

              <a href={socialLinks.twitter} target="_blank" rel="noreferrer" className="text-gray-400 hover:text-yellow-400 transition-colors">
                <Twitter size={28} />
              </a>

              <a href={socialLinks.youtube} target="_blank" rel="noreferrer" className="text-gray-400 hover:text-yellow-400 transition-colors">
                <Youtube size={28} />
              </a>

            </div>

            <div className="border-t border-zinc-800 pt-8 mt-10 w-full text-center md:text-right">

              <p className="text-yellow-400 font-bold text-xl">MD ASGAR</p>

              <p className="text-gray-500 mt-2">Manufactured By Mohammed Asgar</p>

              <p className="text-gray-600 text-sm mt-3">© 2026 All Rights Reserved</p>

            </div>

          </div>

        </div>

      </footer>

      {/* WHATSAPP BUTTON */}

      <a
        href={whatsappLink}
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-5 right-5 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-2xl z-50"
      >
        <MessageCircle size={32} />
      </a>

    </div>

  );

}

export default App;
