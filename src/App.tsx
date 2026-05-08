import React from 'react';
import { Phone, Mail, Instagram, Facebook, Twitter, Youtube, ShieldCheck, Recycle, ChevronRight, MessageCircle } from 'lucide-react';

const products = [
  {
    id: 1,
    name: "Classic Travel Series",
    image: "file_0000000012387208a0d377cc39ccf0f8.png",
    description: "High-quality fabric material, durable and repairable."
  },
  {
    id: 2,
    name: "Business Executive Edition",
    image: "file_000000007ccc720b85830076b29cf37f.png",
    description: "Elegant design for professional travelers."
  },
  {
    id: 3,
    name: "Elite Soft-Shell Luggage",
    image: "file_000000007cdc7208bf2995f04e6521f1.png",
    description: "Lightweight yet strong, perfect for long trips."
  },
  {
    id: 4,
    name: "Urban Explorer Collection",
    image: "file_00000000bab8720bb04e2a6ed7e534f9.png",
    description: "Modern look with maximum storage capacity."
  },
  {
    id: 5,
    name: "Eco-Friendly Pro Series",
    image: "file_00000000cc3072089dd33b05cc0c6e10.png",
    description: "Sustainable materials that care for the environment."
  }
];

function App() {
  const contactNumber = "9653181917";
  const contactEmail = "Maspak932@gmail.com";
  
  const socialLinks = {
    instagram: "https://www.instagram.com/aspak__x07?igsh=eTFxM3J5YndqM3h3",
    facebook: "https://www.facebook.com/share/18pgTtHLd8/",
    twitter: "https://x.com/aspak_muha46091",
    youtube: "https://www.youtube.com/@TheSilent-01"
  };

  const whatsappLink = `https://wa.me/${contactNumber}?text=Hello, I am interested in your luggage products.`;

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
      {/* Navigation */}
      <nav className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
          <h1 className="text-2xl font-bold tracking-tighter text-blue-600 italic">ASGARO</h1>
          <div className="flex gap-4 md:gap-6">
            <a href={socialLinks.instagram} target="_blank" rel="noreferrer" className="text-slate-500 hover:text-pink-600 transition-colors"><Instagram size={20} /></a>
            <a href={socialLinks.facebook} target="_blank" rel="noreferrer" className="text-slate-500 hover:text-blue-700 transition-colors"><Facebook size={20} /></a>
            <a href={socialLinks.twitter} target="_blank" rel="noreferrer" className="text-slate-500 hover:text-black transition-colors"><Twitter size={20} /></a>
            <a href={socialLinks.youtube} target="_blank" rel="noreferrer" className="text-slate-500 hover:text-red-600 transition-colors"><Youtube size={20} /></a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="bg-gradient-to-r from-blue-700 to-blue-500 py-20 px-4 text-center text-white">
        <h2 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight">Trolley Bag Manufacturing</h2>
        <p className="text-xl opacity-90 max-w-2xl mx-auto font-light leading-relaxed">
          Premium quality fabric luggage by ASGARO. Designed for durability, sustainability, and the modern traveler.
        </p>
      </header>

      {/* Features Section */}
      <section className="max-w-7xl mx-auto py-16 px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 text-center hover:shadow-md transition-shadow">
          <ShieldCheck className="text-blue-500 mx-auto mb-4" size={48} />
          <h3 className="font-bold text-xl mb-2">Unmatched Durability</h3>
          <p className="text-slate-500">Fabric bags that handle pressure better and are 100% repairable.</p>
        </div>
        <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 text-center hover:shadow-md transition-shadow">
          <Recycle className="text-green-500 mx-auto mb-4" size={48} />
          <h3 className="font-bold text-xl mb-2">Eco-Friendly</h3>
          <p className="text-slate-500">Materials that respect the environment without compromising on strength.</p>
        </div>
        <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 text-center hover:shadow-md transition-shadow">
          <MessageCircle className="text-blue-500 mx-auto mb-4" size={48} />
          <h3 className="font-bold text-xl mb-2">Direct Wholesale</h3>
          <p className="text-slate-500">Get manufacturing rates directly. Perfect for bulk orders and retailers.</p>
        </div>
      </section>

      {/* Product Grid */}
      <main className="max-w-7xl mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
          <div>
            <h3 className="text-3xl font-bold mb-2">Our Collection</h3>
            <div className="h-1.5 w-20 bg-blue-600 rounded-full"></div>
          </div>
          <p className="text-slate-500 font-medium">Ludhiana's Finest Manufacturing</p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {products.map((product) => (
            <div key={product.id} className="bg-white rounded-[2rem] shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 group border border-slate-50">
              <div className="aspect-[4/5] bg-slate-100 overflow-hidden relative">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-bold text-blue-600 shadow-sm">
                  NEW ARRIVAL
                </div>
              </div>
              <div className="p-8">
                <h4 className="font-bold text-2xl mb-2 group-hover:text-blue-600 transition-colors">{product.name}</h4>
                <p className="text-slate-600 mb-8 leading-relaxed h-12 overflow-hidden">{product.description}</p>
                <a 
                  href={whatsappLink}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full bg-slate-900 text-white py-4 rounded-2xl font-bold flex items-center justify-center gap-3 hover:bg-blue-600 transition-all shadow-lg shadow-slate-200 active:scale-95"
                >
                  Enquire Now <ChevronRight size={20} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Footer / Contact Section */}
      <footer className="bg-slate-900 text-white py-20 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-blue-400 font-bold tracking-widest text-sm uppercase mb-4 block">Get In Touch</span>
            <h3 className="text-4xl font-bold mb-6">Let's Build Your <br />Business Together</h3>
            <p className="text-slate-400 mb-10 text-lg max-w-md">Contact our manufacturing unit directly for bulk pricing and professional collaboration.</p>
            
            <div className="space-y-4">
              <a href={`tel:${contactNumber}`} className="flex items-center gap-4 bg-slate-800/50 p-5 rounded-2xl border border-slate-700 hover:border-blue-500 transition-colors group">
                <div className="bg-blue-500/10 p-3 rounded-xl group-hover:bg-blue-500 transition-colors">
                  <Phone size={24} className="text-blue-400 group-hover:text-white" />
                </div>
                <span className="text-xl font-medium">{contactNumber}</span>
              </a>
              <a href={`mailto:${contactEmail}`} className="flex items-center gap-4 bg-slate-800/50 p-5 rounded-2xl border border-slate-700 hover:border-blue-500 transition-colors group">
                <div className="bg-blue-500/10 p-3 rounded-xl group-hover:bg-blue-500 transition-colors">
                  <Mail size={24} className="text-blue-400 group-hover:text-white" />
                </div>
                <span className="text-xl font-medium">{contactEmail}</span>
              </a>
            </div>
          </div>

          <div className="flex flex-col items-center md:items-end">
            <div className="flex gap-8 mb-12">
              <a href={socialLinks.instagram} target="_blank" rel="noreferrer" className="hover:text-blue-400 transition-all hover:scale-110"><Instagram size={36} /></a>
              <a href={socialLinks.facebook} target="_blank" rel="noreferrer" className="hover:text-blue-400 transition-all hover:scale-110"><Facebook size={36} /></a>
              <a href={socialLinks.twitter} target="_blank" rel="noreferrer" className="hover:text-blue-400 transition-all hover:scale-110"><Twitter size={36} /></a>
              <a href={socialLinks.youtube} target="_blank" rel="noreferrer" className="hover:text-blue-400 transition-all hover:scale-110"><Youtube size={36} /></a>
            </div>
            <div className="text-right border-t border-slate-800 pt-8 w-full md:w-auto">
              <p className="text-slate-500 font-medium italic mb-2">ASGARO Manufacturing</p>
              <p className="text-slate-600 text-sm italic">&copy; 2026. Designed for the Future Billionaire.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;

