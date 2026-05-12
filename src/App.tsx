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
  MessageCircle
} from 'lucide-react';

const products = [
  {
    id: 1,
    name: "Premium Fabric Trolley",
    image: "/images/bag1.png",
    description: "High-quality fabric trolley bag with strong material and modern design."
  },
  {
    id: 2,
    name: "Executive Travel Bag",
    image: "/images/bag2.png",
    description: "Elegant and durable luggage for business and travel use."
  },
  {
    id: 3,
    name: "Soft Shell Collection",
    image: "/images/bag3.png",
    description: "Lightweight, spacious and comfortable for long journeys."
  },
  {
    id: 4,
    name: "Urban Travel Series",
    image: "/images/bag4.png",
    description: "Stylish trolley bag with maximum storage capacity."
  },
  {
    id: 5,
    name: "Plastic Trolley Collection",
    image: "/images/bag5.png",
    description: "Strong plastic trolley bags with premium finishing."
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
    <div className="min-h-screen bg-[#f5f1ea] text-slate-900">

      {/* Navbar */}
      <nav className="bg-black sticky top-0 z-50 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">

          <div>
            <h1 className="text-3xl font-extrabold text-yellow-400 tracking-wide">
              MD ASGAR
            </h1>

            <p className="text-gray-400 text-sm">
              Manufactured By Mohammed Asgar
            </p>
          </div>

          <div className="flex gap-5">

            <a
              href={socialLinks.instagram}
              target="_blank"
              rel="noreferrer"
              className="text-gray-300 hover:text-pink-500 transition"
            >
              <Instagram size={22} />
            </a>

            <a
              href={socialLinks.facebook}
              target="_blank"
              rel="noreferrer"
              className="text-gray-300 hover:text-blue-500 transition"
            >
              <Facebook size={22} />
            </a>

            <a
              href={socialLinks.twitter}
              target="_blank"
              rel="noreferrer"
              className="text-gray-300 hover:text-white transition"
            >
              <Twitter size={22} />
            </a>

            <a
              href={socialLinks.youtube}
              target="_blank"
              rel="noreferrer"
              className="text-gray-300 hover:text-red-500 transition"
            >
              <Youtube size={22} />
            </a>

          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="relative h-[90vh] overflow-hidden flex items-center justify-center text-center">

        <img
          src="/images/bag1.png"
          alt="MD ASGAR"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/70"></div>

        <div className="relative z-10 px-4">

          <h2 className="text-5xl md:text-7xl font-extrabold text-white mb-6">
            MD ASGAR
          </h2>

          <p className="text-yellow-400 text-xl md:text-2xl mb-4 font-semibold">
            Manufactured By Mohammed Asgar
          </p>

          <p className="text-gray-300 max-w-2xl mx-auto text-lg leading-relaxed">
            Premium Fabric & Plastic Trolley Bag Manufacturer
            with modern designs, durable quality and wholesale pricing.
          </p>

          <a
            href={whatsappLink}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-3 mt-8 bg-yellow-500 hover:bg-yellow-400 text-black px-8 py-4 rounded-2xl font-bold transition-all duration-300 shadow-2xl"
          >
            Contact Now
            <ChevronRight size={22} />
          </a>

        </div>
      </header>

      {/* Features */}
      <section className="max-w-7xl mx-auto py-20 px-4 grid grid-cols-1 md:grid-cols-3 gap-8">

        <div className="bg-white p-8 rounded-[2rem] shadow-xl text-center hover:-translate-y-2 transition-all duration-500">

          <ShieldCheck className="mx-auto text-yellow-500 mb-4" size={50} />

          <h3 className="text-2xl font-bold mb-3">
            Premium Quality
          </h3>

          <p className="text-gray-600">
            Durable trolley bags with high-quality stitching and strong material.
          </p>

        </div>

        <div className="bg-white p-8 rounded-[2rem] shadow-xl text-center hover:-translate-y-2 transition-all duration-500">

          <Recycle className="mx-auto text-green-500 mb-4" size={50} />

          <h3 className="text-2xl font-bold mb-3">
            Eco Friendly
          </h3>

          <p className="text-gray-600">
            Sustainable manufacturing with reliable and long-lasting products.
          </p>

        </div>

        <div className="bg-white p-8 rounded-[2rem] shadow-xl text-center hover:-translate-y-2 transition-all duration-500">

          <MessageCircle className="mx-auto text-blue-500 mb-4" size={50} />

          <h3 className="text-2xl font-bold mb-3">
            Direct Wholesale
          </h3>

          <p className="text-gray-600">
            Direct manufacturer pricing for retailers and bulk buyers.
          </p>

        </div>

      </section>

      {/* Product Section */}
      <main className="max-w-7xl mx-auto px-4 py-10">

        <div className="text-center mb-16">

          <h3 className="text-4xl font-extrabold mb-4">
            Our Collection
          </h3>

          <div className="h-1 w-28 bg-yellow-500 mx-auto rounded-full"></div>

          <p className="mt-5 text-gray-600 text-lg">
            Premium Fabric & Plastic Trolley Bags
          </p>

        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">

          {products.map((product) => (

            <div
              key={product.id}
              className="bg-white rounded-[2rem] overflow-hidden shadow-xl hover:-translate-y-3 hover:shadow-[0_20px_60px_rgba(0,0,0,0.2)] transition-all duration-500"
            >

              <div className="bg-white h-[350px] overflow-hidden p-4">

                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-contain"
                />

              </div>

              <div className="p-8">

                <h4 className="text-2xl font-bold mb-3">
                  {product.name}
                </h4>

                <p className="text-gray-600 leading-relaxed mb-8">
                  {product.description}
                </p>

                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full bg-black hover:bg-yellow-500 hover:text-black text-white py-4 rounded-2xl font-bold flex items-center justify-center gap-3 transition-all duration-300"
                >
                  Enquire Now
                  <ChevronRight size={20} />
                </a>

              </div>

            </div>

          ))}

        </div>
      </main>

      {/* Footer */}
      <footer className="bg-black text-white py-20 px-4 mt-20">

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">

          <div>

            <span className="text-yellow-400 uppercase tracking-[4px] text-sm font-bold">
              Contact Us
            </span>

            <h3 className="text-4xl font-extrabold mt-4 mb-6">
              Premium Trolley Bag Manufacturer
            </h3>

            <p className="text-gray-400 text-lg mb-10">
              Contact us directly for wholesale orders and manufacturing deals.
            </p>

            <div className="space-y-5">

              <a
                href={`tel:${contactNumber}`}
                className="flex items-center gap-4 bg-zinc-900 border border-zinc-800 p-5 rounded-2xl hover:border-yellow-500 transition"
              >

                <div className="bg-yellow-500/20 p-3 rounded-xl">
                  <Phone className="text-yellow-400" size={24} />
                </div>

                <span className="text-lg font-medium">
                  {contactNumber}
                </span>

              </a>

              <a
                href={`mailto:${contactEmail}`}
                className="flex items-center gap-4 bg-zinc-900 border border-zinc-800 p-5 rounded-2xl hover:border-yellow-500 transition"
              >

                <div className="bg-yellow-500/20 p-3 rounded-xl">
                  <Mail className="text-yellow-400" size={24} />
                </div>

                <span className="text-lg font-medium">
                  {contactEmail}
                </span>

              </a>

            </div>

          </div>

          <div className="flex flex-col items-center md:items-end justify-between">

            <div className="flex gap-6">

              <a
                href={socialLinks.instagram}
                target="_blank"
                rel="noreferrer"
                className="hover:text-pink-500 transition"
              >
                <Instagram size={34} />
              </a>

              <a
                href={socialLinks.facebook}
                target="_blank"
                rel="noreferrer"
                className="hover:text-blue-500 transition"
              >
                <Facebook size={34} />
              </a>

              <a
                href={socialLinks.twitter}
                target="_blank"
                rel="noreferrer"
                className="hover:text-white transition"
              >
                <Twitter size={34} />
              </a>

              <a
                href={socialLinks.youtube}
                target="_blank"
                rel="noreferrer"
                className="hover:text-red-500 transition"
              >
                <Youtube size={34} />
              </a>

            </div>

            <div className="border-t border-zinc-800 pt-8 mt-10 w-full text-right">

              <p className="text-yellow-400 font-bold text-xl">
                MD ASGAR
              </p>

              <p className="text-gray-500 mt-2">
                Manufactured By Mohammed Asgar
              </p>

              <p className="text-gray-600 text-sm mt-3">
                © 2026 All Rights Reserved
              </p>

            </div>

          </div>

        </div>
      </footer>

      {/* Floating WhatsApp Button */}
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
