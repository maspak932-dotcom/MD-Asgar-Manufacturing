import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, ArrowRight, ShieldCheck, Wind, Lock, Star, Check, X, MessageCircle, MapPin, Instagram, Facebook, Twitter, Factory, PackageOpen } from 'lucide-react';

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Products Data
  const products = [
    {
      id: 1,
      name: "Asgar Classic Polycarbonate (Cabin)",
      material: "Premium Aerospace PC",
      moq: "Min. Order: 50 Pcs",
      image: "/img1.jpg",
      tag: "High Demand"
    },
    {
      id: 2,
      name: "Asgaro Softside Canvas (Medium)",
      material: "High-Density Canvas Blend",
      moq: "Min. Order: 50 Pcs",
      image: "/img4.jpg",
      tag: "OEM Available"
    },
    {
      id: 3,
      name: "Asgaro Voyager Trolley (Large)",
      material: "ABS + PC Blend",
      moq: "Min. Order: 25 Pcs",
      image: "/img2.jpg",
      tag: "Premium Quality"
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed w-full z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center cursor-pointer">
              <span className="font-serif text-3xl font-bold tracking-tight text-slate-900">
                ASGARO<span className="text-amber-600">.</span>
              </span>
              <span className="hidden sm:inline-block ml-3 text-xs font-semibold uppercase tracking-wider text-slate-500 border-l border-slate-300 pl-3">
                Manufacturer
              </span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8 items-center">
              <a href="#collections" className="text-slate-600 hover:text-slate-900 transition-colors font-medium">Our Range</a>
              <a href="#features" className="text-slate-600 hover:text-slate-900 transition-colors font-medium">Capabilities</a>
              <a href="#about" className="text-slate-600 hover:text-slate-900 transition-colors font-medium">Manufacturing Trust</a>
            </div>

            {/* Icons */}
            <div className="flex items-center space-x-4">
              <a 
                href="https://wa.me/919653181917" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hidden md:flex items-center space-x-2 bg-slate-900 text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-slate-800 transition-colors shadow-sm"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Wholesale Queries</span>
              </a>
              <button 
                className="md:hidden p-2 text-slate-600"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white border-b border-slate-200"
            >
              <div className="px-4 pt-2 pb-6 space-y-4 shadow-lg">
                <a href="#collections" className="block px-3 py-2 text-base font-medium text-slate-700 rounded-md hover:bg-slate-50">Our Range</a>
                <a href="#features" className="block px-3 py-2 text-base font-medium text-slate-700 rounded-md hover:bg-slate-50">Capabilities</a>
                <a href="#about" className="block px-3 py-2 text-base font-medium text-slate-700 rounded-md hover:bg-slate-50">Manufacturing Trust</a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-2xl"
            >
              <div className="inline-flex items-center space-x-2 bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-sm font-semibold mb-6">
                <Factory className="w-4 h-4 text-amber-600" />
                <span>Top Manufacturer in Ludhiana</span>
              </div>
              <h1 className="text-5xl lg:text-7xl font-bold tracking-tight text-slate-900 mb-6 leading-tight">
                Premium Bags <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-900 to-slate-500">
                  Direct to Wholesale.
                </span>
              </h1>
              <p className="text-lg text-slate-600 mb-8 max-w-lg leading-relaxed">
                We are proud manufacturers of high-quality trolley bags. Supplying retail businesses across India with durable, elegant, and bulk-ready luggage inspired by MD Asgar.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="https://wa.me/919653181917" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto px-8 py-4 bg-slate-900 text-white rounded-full font-medium hover:bg-slate-800 transition-all flex items-center justify-center group shadow-xl shadow-slate-900/20">
                  Get Bulk Quote
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
                <a href="#collections" className="w-full sm:w-auto px-8 py-4 bg-white text-slate-900 border border-slate-200 rounded-full font-medium hover:bg-slate-50 transition-all flex items-center justify-center">
                  View Catalog
                </a>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-amber-100 to-slate-100 rounded-[3rem] transform rotate-3 scale-105 -z-10"></div>
              <img 
                src="/img3.jpg" 
                alt="Premium Asgaro Trolley Bag Manufacturing" 
                className="rounded-[3rem] object-contain p-8 h-[500px] w-full shadow-2xl bg-white"
                referrerPolicy="no-referrer"
              />
              
              {/* Floating Badge */}
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                className="absolute -bottom-6 -left-6 bg-white p-4 rounded-2xl shadow-xl flex items-center space-x-4 border border-slate-100"
              >
                <div className="bg-green-100 p-2 rounded-full">
                  <PackageOpen className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <p className="text-sm font-bold text-slate-900">Custom OEM</p>
                  <p className="text-xs text-slate-500">Your Brand, Our Quality</p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">Our Manufacturing Promise</h2>
            <p className="text-lg text-slate-600">Partnering with businesses to strictly deliver unmatched durability and design for the consumer market.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Factory className="w-8 h-8 text-amber-600" />,
                title: "Large-Scale Production",
                desc: "Equipped factory capabilities in Ludhiana to handle high-volume bulk orders efficiently."
              },
              {
                icon: <Wind className="w-8 h-8 text-amber-600" />,
                title: "Premium Fabrics",
                desc: "Sourcing only top-tier water-resistant nylons and superior canvas blends for durable softside bags."
              },
              {
                icon: <PackageOpen className="w-8 h-8 text-amber-600" />,
                title: "Custom Branding (OEM)",
                desc: "Add your retail logo and brand colors to our expertly crafted trolley bag lines."
              }
            ].map((feature, idx) => (
              <div key={idx} className="bg-slate-50 p-8 rounded-3xl border border-slate-100 hover:shadow-lg transition-shadow">
                <div className="bg-white w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-sm border border-slate-100">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
                <p className="text-slate-600 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="collections" className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">The MD Asgar Collection</h2>
              <p className="text-lg text-slate-600 max-w-2xl">Robust and elegant ready-for-retail wholesale lines.</p>
            </div>
            <a href="https://wa.me/919653181917" target="_blank" rel="noopener noreferrer" className="hidden md:flex items-center text-amber-600 font-semibold hover:text-amber-700 group">
              Request Full Catalog <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <motion.div 
                key={product.id}
                whileHover={{ y: -10 }}
                className="bg-white rounded-[2rem] overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl transition-all group flex flex-col"
              >
                <div className="relative h-80 overflow-hidden bg-slate-100 p-6 flex justify-center items-center">
                  <div className="absolute top-4 left-4 z-10">
                    <span className="bg-white/90 backdrop-blur-sm text-slate-900 text-xs font-bold px-3 py-1.5 rounded-full shadow-sm">
                      {product.tag}
                    </span>
                  </div>
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="h-full w-full object-contain p-4 drop-shadow-xl group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="p-8 flex flex-col flex-1">
                  <div className="flex items-center space-x-1 mb-3">
                    <span className="text-sm font-bold text-slate-600 uppercase tracking-wider">{product.material}</span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{product.name}</h3>
                  <div className="mt-auto pt-6">
                    <p className="text-slate-500 text-sm font-medium mb-4">{product.moq}</p>
                    <a 
                      href={`https://wa.me/919653181917?text=Hi, I want a bulk quote for ${encodeURIComponent(product.name)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full bg-slate-900 text-white py-3 rounded-xl flex items-center justify-center space-x-2 hover:bg-slate-800 transition-colors font-medium text-sm tooltip cursor-pointer"
                    >
                       <MessageCircle className="w-4 h-4" />
                       <span>Inquire Wholesale Rate</span>
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          <a href="https://wa.me/919653181917" target="_blank" rel="noopener noreferrer" className="mt-8 md:hidden w-full py-4 text-center text-amber-600 font-semibold border border-amber-200 rounded-full block">
            Request Full Catalog
          </a>
        </div>
      </section>

      {/* About Legacy Section */}
      <section id="about" className="py-24 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <img 
                src="/img5.jpg" 
                alt="Travel Lifestyle" 
                className="rounded-[3rem] p-8 object-contain h-[400px] w-full bg-white shadow-2xl"
                referrerPolicy="no-referrer"
              />
            </div>
            <div>
              <div className="mb-6">
                <span className="text-amber-500 font-bold tracking-wider uppercase text-sm">Industrial Integrity</span>
              </div>
              <h2 className="text-3xl lg:text-5xl font-bold mb-6 font-serif">A Legacy of <br/>Manufacturing Trust</h2>
              <p className="text-slate-300 text-lg mb-8 leading-relaxed">
                Asgaro isn't a mere retail brand; it's a Ludhiana-based manufacturing powerhouse inspired by the principles of MD Asgar. A name that stands for durability, trust, and moving forward no matter the obstacles.
              </p>
              <p className="text-slate-300 text-lg mb-8 leading-relaxed">
                We focus strictly on providing retailers and bulk buyers with the best quality bags so they can pass on that reliability to their customers. When you stock Asgaro, you are selling products built on an unshakeable foundation.
              </p>
              <ul className="space-y-4">
                {[
                  "Factory-Direct Pricing",
                  "Strict Quality Control from Source",
                  "Reliable Supply Chain for Retailers"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center text-slate-200">
                    <Check className="w-5 h-5 text-amber-500 mr-3 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white pt-20 pb-10 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-16">
            <div className="col-span-2 lg:col-span-2">
              <span className="font-serif text-3xl font-bold tracking-tight text-slate-900 mb-6 block">
                ASGARO<span className="text-amber-600 block text-lg font-sans">Manufacturing</span>
              </span>
              <p className="text-slate-500 mb-6 max-w-sm">
                Premium trolley bag manufacturers supplying high-quality, durable luggage to retailers nationwide. Inspired by MD Asgar.
              </p>
              <div className="flex items-center text-slate-500 mb-3">
                <MapPin className="w-5 h-5 mr-3 text-amber-600 shrink-0" />
                <span>Ludhiana, Punjab, India</span>
              </div>
              <div className="flex items-center text-slate-500">
                <MessageCircle className="w-5 h-5 mr-3 text-amber-600 shrink-0" />
                <span>+91 9653181917</span>
              </div>
            </div>
            
            <div>
              <h4 className="font-bold text-slate-900 mb-4">Our Products</h4>
              <ul className="space-y-3">
                <li><a href="#" className="text-slate-500 hover:text-amber-600 transition-colors">Cabin Luggage</a></li>
                <li><a href="#" className="text-slate-500 hover:text-amber-600 transition-colors">Medium Luggage</a></li>
                <li><a href="#" className="text-slate-500 hover:text-amber-600 transition-colors">Large Luggage</a></li>
                <li><a href="#" className="text-slate-500 hover:text-amber-600 transition-colors">Custom OEM Orders</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-slate-900 mb-4">Retail Support</h4>
              <ul className="space-y-3">
                <li><a href="https://wa.me/919653181917" className="text-slate-500 hover:text-amber-600 transition-colors">Contact WhatsApp</a></li>
                <li><a href="#" className="text-slate-500 hover:text-amber-600 transition-colors">Manufacturing Policy</a></li>
                <li><a href="#" className="text-slate-500 hover:text-amber-600 transition-colors">Logistics & Supply</a></li>
                <li><a href="#" className="text-slate-500 hover:text-amber-600 transition-colors">Bulk Order FAQ</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-slate-900 mb-4">Follow Us</h4>
              <ul className="space-y-3">
                <li><a href="https://www.instagram.com/aspak__x07?igsh=eTFxM3J5YndqM3h3" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-amber-600 transition-colors flex items-center"><Instagram className="w-4 h-4 mr-2" /> Instagram</a></li>
                <li><a href="https://www.facebook.com/share/18qqzoHEwr/" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-amber-600 transition-colors flex items-center"><Facebook className="w-4 h-4 mr-2" /> Facebook</a></li>
                <li><a href="https://x.com/aspak_muha46091" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-amber-600 transition-colors flex items-center"><Twitter className="w-4 h-4 mr-2" /> Twitter (X)</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-slate-100 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-slate-400 text-sm mb-4 md:mb-0">
              © {new Date().getFullYear()} Asgaro Manufacturing. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-slate-400 text-sm hover:text-slate-600">B2B Privacy Policy</a>
              <a href="#" className="text-slate-400 text-sm hover:text-slate-600">Terms of Supply</a>
            </div>
          </div>
        </div>
      </footer>
      {/* Floating WhatsApp Button / Chatbot */}
      <a 
        href="https://wa.me/919653181917"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:bg-[#1ebe57] hover:-translate-y-1 transition-all z-50 flex items-center justify-center group"
      >
        <MessageCircle className="w-8 h-8" />
        <span className="absolute right-full mr-4 bg-white text-slate-900 text-sm font-bold px-4 py-2 rounded-xl shadow-lg opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity whitespace-nowrap hidden sm:block">
          Chat with us on WhatsApp!
        </span>
      </a>
    </div>
  );
}
