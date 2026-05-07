import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, ArrowRight, ShieldCheck, Wind, Lock, Star, Check, X, MessageCircle, MapPin, Instagram, Facebook, Twitter, Factory, PackageOpen } from 'lucide-react';

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Saari premium photos ke links yahan perfect sequence mein hain
  const products = [
    {
      id: 1,
      name: "Asgar Red Executive",
      material: "Heavy-Duty Polyester",
      moq: "Min. Order: 50 Pcs",
      image: "/file_000000007cdc7208bf2995f04e6521f1.png", // Red Bag Airport
      tag: "Best Seller"
    },
    {
      id: 2,
      name: "Asgaro Premium Series",
      material: "High-Density Canvas",
      moq: "Min. Order: 50 Pcs",
      image: "/file_00000000bab8720bb04e2a6ed7e534f9.png", // 6 Colors Grid
      tag: "Wholesale Choice"
    },
    {
      id: 3,
      name: "Asgaro VIP Purple",
      material: "Premium Aerospace Blend",
      moq: "Min. Order: 25 Pcs",
      image: "/file_00000000cc3072089dd33b05cc0c6e10.png", // New Hotel Entrance Photo
      tag: "Luxury Range"
    }
  ];

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 overflow-x-hidden">
      {/* Premium Navbar */}
      <nav className="fixed w-full z-50 bg-white/95 backdrop-blur-md border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex-shrink-0 flex items-center cursor-pointer">
              <span className="font-serif text-3xl font-bold tracking-tight text-slate-900">
                ASGARO<span className="text-amber-600">.</span>
              </span>
            </div>
            <div className="hidden md:flex space-x-10 items-center font-semibold text-slate-600">
              <a href="#collections" className="hover:text-slate-900 transition-colors">Range</a>
              <a href="#about" className="hover:text-slate-900 transition-colors">Our Legacy</a>
            </div>
            <div className="flex items-center space-x-4">
              <a href="https://wa.me/919653181917" target="_blank" className="bg-slate-900 text-white px-8 py-2.5 rounded-full text-sm font-bold hover:bg-amber-600 transition-all shadow-xl flex items-center gap-2">
                <MessageCircle className="w-4 h-4" /> Bulk Quote
              </a>
              <button className="md:hidden text-slate-900" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                {isMenuOpen ? <X /> : <Menu />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero - Airport Red Bag */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
              <div className="inline-flex items-center space-x-2 bg-amber-50 text-amber-700 px-4 py-2 rounded-full text-xs font-black mb-8 border border-amber-100 uppercase tracking-widest">
                <Factory className="w-4 h-4" /> <span>Ludhiana's Manufacturing Powerhouse</span>
              </div>
              <h1 className="text-6xl lg:text-8xl font-black text-slate-900 mb-8 leading-[1.05]">
                Built For <br/><span className="text-amber-600 italic">The Hustle.</span>
              </h1>
              <p className="text-xl text-slate-500 mb-12 leading-relaxed max-w-lg font-medium">
                Supplying India's retailers with trolley bags that stand the test of time. Wholesale manufacturing direct from the source.
              </p>
              <a href="https://wa.me/919653181917" className="inline-flex items-center px-12 py-6 bg-slate-900 text-white rounded-full font-black text-xl hover:bg-slate-800 transition-all shadow-2xl hover:-translate-y-1">
                Start Bulk Order <ArrowRight className="ml-3" />
              </a>
            </motion.div>
            <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1 }} className="relative">
              <div className="absolute -inset-10 bg-slate-50 rounded-[5rem] -z-10 rotate-3"></div>
              <img src="/file_000000007cdc7208bf2995f04e6521f1.png" alt="Asgaro Red Bag" className="rounded-[4rem] shadow-2xl w-full h-[650px] object-contain bg-white p-8" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Collection Grid */}
      <section id="collections" className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-24">
            <h2 className="text-5xl font-black text-slate-900 mb-6">Wholesale Catalog</h2>
            <p className="text-slate-500 text-lg font-medium">Premium ready-to-ship inventory for retail partners.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-12">
            {products.map((p) => (
              <motion.div key={p.id} whileHover={{ y: -15 }} className="bg-white rounded-[3rem] p-10 border border-slate-100 shadow-sm hover:shadow-2xl transition-all group flex flex-col h-full">
                <div className="h-72 overflow-hidden mb-10 flex justify-center items-center">
                  <img src={p.image} alt={p.name} className="h-full object-contain group-hover:scale-110 transition-transform duration-1000" />
                </div>
                <div className="mt-auto">
                  <span className="text-amber-600 font-black text-xs uppercase tracking-widest mb-3 block">{p.tag}</span>
                  <h3 className="text-2xl font-bold mb-3 text-slate-900">{p.name}</h3>
                  <p className="text-slate-500 mb-10 font-medium">{p.material}</p>
                  <div className="flex items-center justify-between pt-8 border-t border-slate-50">
                    <span className="text-slate-900 font-black">{p.moq}</span>
                    <a href="https://wa.me/919653181917" target="_blank" className="p-4 bg-slate-900 text-white rounded-2xl hover:bg-amber-600 transition-all"><MessageCircle className="w-6 h-6" /></a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section - Using Purple Airport Photo */}
      <section id="about" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <div className="order-2 lg:order-1 relative">
              <img src="/file_0000000012387208a0d377cc39ccf0f8.png" alt="MD Asgar Vision" className="rounded-[4rem] h-[550px] w-full object-contain bg-slate-50 p-12 shadow-2xl" />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-5xl font-black mb-10 text-slate-900 leading-tight italic">Inspired by <br/>MD Asgar.</h2>
              <p className="text-xl text-slate-500 leading-relaxed mb-12 font-medium">
                At Asgaro, we don't just manufacture luggage; we build trust. Our Ludhiana facility is dedicated to industrial excellence, ensuring every bag that leaves our floor is ready for the world.
              </p>
              <div className="grid grid-cols-2 gap-8 mb-12">
                <div>
                  <h4 className="text-3xl font-black text-amber-600 mb-2">100%</h4>
                  <p className="text-slate-500 font-bold text-sm">Quality Checked</p>
                </div>
                <div>
                  <h4 className="text-3xl font-black text-amber-600 mb-2">B2B</h4>
                  <p className="text-slate-500 font-bold text-sm">Direct Pricing</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="mb-12">
            <span className="font-serif text-4xl font-bold tracking-tight">ASGARO<span className="text-amber-500">.</span></span>
          </div>
          <div className="flex justify-center space-x-12 mb-16">
            <a href="https://www.instagram.com/aspak__x07" target="_blank" className="text-slate-400 hover:text-amber-500 transition-all transform hover:scale-125"><Instagram /></a>
            <a href="https://www.facebook.com/share/18qqzoHEwr/" target="_blank" className="text-slate-400 hover:text-amber-500 transition-all transform hover:scale-125"><Facebook /></a>
            <a href="https://x.com/aspak_muha46091" target="_blank" className="text-slate-400 hover:text-amber-500 transition-all transform hover:scale-125"><Twitter /></a>
          </div>
          <p className="text-slate-500 text-sm font-bold tracking-widest uppercase">Ludhiana, Punjab | Inspired by MD Asgar | © 2026</p>
        </div>
      </footer>

      {/* Sticky WhatsApp */}
      <a href="https://wa.me/919653181917" target="_blank" className="fixed bottom-10 right-10 bg-[#25D366] text-white p-6 rounded-full shadow-2xl z-50 hover:scale-110 hover:-translate-y-3 transition-all active:scale-95">
        <MessageCircle className="w-10 h-10" />
      </a>
    </div>
  );
}

