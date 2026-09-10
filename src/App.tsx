import {
  ArrowUpRight,
  ChevronRight,
  Facebook,
  Globe,
  Instagram,
  Mail,
  MapPin,
  MessageCircle,
  MessageSquare,
  Package,
  Phone,
  ShieldCheck,
  Twitter,
  Youtube,
} from "lucide-react";

const products = [
  {
    number: "01",
    name: "Trolley Bag Collection",
    image: "/photos/photo-1.png",
  },
  {
    number: "02",
    name: "Travel Bag Collection",
    image: "/photos/photo-2.png",
  },
  {
    number: "03",
    name: "Premium Luggage",
    image: "/photos/photo-3.png",
  },
  {
    number: "04",
    name: "4-Wheel Trolley Collection",
    image: "/photos/photo-4.png",
  },
  {
    number: "05",
    name: "Luxury Bags Collection",
    image: "/photos/photo-5.png",
  },
];

const socialLinks = {
  instagram:
    "https://www.instagram.com/funny_joke6114?igsh=MWRvcnloZGdvOWNlcg==",
  facebook: "https://www.facebook.com/share/18pgTtHLd8/",
  threads: "https://www.threads.com/@asgarluxurybags",
  x: "https://x.com/md_asgar_786",
  youtube: "https://www.youtube.com/@TheSilent-01",
  website: "https://asgar-luxury-bags.vercel.app/",
};

const phoneNumber = "9653181917";
const email = "Maspak932@gmail.com";

const whatsappLink =
  `https://wa.me/91${phoneNumber}` +
  `?text=${encodeURIComponent(
    "Hello, I am interested in ASGAR LUXURY BAGS wholesale products."
  )}`;

function App() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-[#070707] text-white antialiased">

      {/* ================= HEADER ================= */}
      <header className="fixed left-0 right-0 top-0 z-50">
        <nav className="border-b border-white/10 bg-black/80 backdrop-blur-xl">
          <div className="mx-auto flex h-[74px] max-w-7xl items-center justify-between px-5 md:px-8">

            {/* Brand */}
            <a href="#" className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white">
                <span className="text-sm font-black tracking-tight text-black">
                  AL
                </span>
              </div>

              <div>
                <div className="text-base font-bold tracking-wide">
                  ASGAR
                </div>

                <div className="mt-1 text-[8px] uppercase tracking-[3px] text-white/45">
                  Luxury Bags
                </div>
              </div>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden items-center gap-8 text-sm text-white/60 md:flex">
              <a href="#" className="transition hover:text-white">
                Home
              </a>

              <a
                href="#collection"
                className="transition hover:text-white"
              >
                Collection
              </a>

              <a href="#wholesale" className="transition hover:text-white">
                Wholesale
              </a>

              <a href="#about" className="transition hover:text-white">
                About
              </a>

              <a href="#contact" className="transition hover:text-white">
                Contact
              </a>
            </div>

            {/* CTA */}
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-black transition hover:bg-yellow-400 sm:flex"
            >
              Get Quote
              <ArrowUpRight size={16} />
            </a>

          </div>
        </nav>
      </header>

      {/* ================= MAIN ================= */}
      <main>

        {/* ================= HERO ================= */}
        <section className="relative pt-[74px]">

          <div className="relative h-[520px] w-full overflow-hidden sm:h-[600px] md:h-[700px]">

            {/* Banner */}
            <img
              src="/photos/banner.png"
              alt="ASGAR LUXURY BAGS"
              className="absolute inset-0 h-full w-full object-cover"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/40" />

            <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/35 to-transparent" />

            {/* Hero Content */}
            <div className="relative z-10 mx-auto flex h-full max-w-7xl items-center px-5 md:px-8">

              <div className="max-w-2xl">

                <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-black/30 px-4 py-2 backdrop-blur-sm">
                  <span className="h-2 w-2 rounded-full bg-yellow-400" />

                  <span className="text-xs tracking-wide text-white/80 sm:text-sm">
                    Ludhiana · Punjab · India
                  </span>
                </div>

                <h1 className="text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl md:text-7xl">
                  Premium luggage.
                  <br />
                  <span className="text-yellow-400">
                    Built for business.
                  </span>
                </h1>

                <p className="mt-6 max-w-xl text-base leading-relaxed text-white/75 md:text-lg">
                  ASGAR LUXURY BAGS by MD ASGAR MANUFACTURE.
                  Premium trolley bags and luggage for retailers,
                  wholesalers and business buyers.
                </p>

                <div className="mt-8 flex flex-wrap gap-3">

                  <a
                    href={whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-yellow-400 px-6 py-3.5 font-semibold text-black transition hover:bg-yellow-300"
                  >
                    WhatsApp Us
                    <ChevronRight size={18} />
                  </a>

                  <a
                    href="#collection"
                    className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-black/20 px-6 py-3.5 font-semibold backdrop-blur-sm transition hover:bg-white hover:text-black"
                  >
                    View Collection
                  </a>

                </div>

              </div>

            </div>
          </div>
        </section>

        {/* ================= TRUST BAR ================= */}
        <section className="border-y border-white/10 bg-[#0d0d0d]">

          <div className="mx-auto max-w-7xl px-5 py-7 md:px-8">

            <div className="grid grid-cols-2 gap-7 md:grid-cols-4">

              <TrustItem
                icon={<ShieldCheck size={24} />}
                title="Premium Quality"
                text="Quality-focused products"
              />

              <TrustItem
                icon={<Package size={24} />}
                title="Wholesale Orders"
                text="Business-friendly supply"
              />

              <TrustItem
                icon={<MapPin size={24} />}
                title="Ludhiana, Punjab"
                text="Direct manufacturer"
              />

              <TrustItem
                icon={<MessageSquare size={24} />}
                title="Direct Enquiry"
                text="Quick business communication"
              />

            </div>

          </div>
        </section>

        {/* ================= COLLECTION ================= */}
        <section
          id="collection"
          className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28"
        >

          <div className="mb-12 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">

            <div>
              <p className="mb-4 text-xs font-semibold uppercase tracking-[3px] text-yellow-400">
                Our Collection
              </p>

              <h2 className="text-3xl font-bold tracking-tight md:text-5xl">
                Explore our bags
              </h2>
            </div>

            <p className="max-w-md leading-relaxed text-white/45">
              Explore our trolley and travel bag collection for
              retailers, wholesalers and business buyers.
            </p>

          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">

            {products.map((product) => (
              <article
                key={product.number}
                className="group overflow-hidden rounded-3xl border border-white/10 bg-[#101010] transition duration-500 hover:border-yellow-400/30"
              >

                {/* Product Image */}
                <div className="h-[310px] overflow-hidden bg-[#151515] p-6">

                  <img
                    src={product.image}
                    alt={product.name}
                    loading="lazy"
                    className="h-full w-full object-contain transition duration-700 group-hover:scale-105"
                  />

                </div>

                {/* Product Details */}
                <div className="p-6">

                  <div className="text-xs font-mono tracking-widest text-yellow-400">
                    {product.number}
                  </div>

                  <h3 className="mt-2 text-xl font-semibold">
                    {product.name}
                  </h3>

                  <p className="mt-3 text-sm leading-relaxed text-white/40">
                    Premium luggage designed for modern travel
                    and wholesale business requirements.
                  </p>

                  <a
                    href={whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-white py-3.5 font-semibold text-black transition hover:bg-yellow-400"
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
          className="px-5 py-8 md:px-8 md:py-14"
        >

          <div className="mx-auto max-w-7xl overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-[#181818] to-[#0d0d0d]">

            <div className="grid md:grid-cols-2">

              {/* Left */}
              <div className="p-8 md:p-14 lg:p-16">

                <p className="mb-5 text-xs font-semibold uppercase tracking-[3px] text-yellow-400">
                  Wholesale
                </p>

                <h2 className="text-3xl font-bold leading-tight md:text-5xl">
                  Built for
                  <br />
                  wholesale business.
                </h2>

                <p className="mt-6 max-w-lg leading-relaxed text-white/45">
                  We work with retailers, wholesalers and business
                  buyers looking for quality luggage with practical
                  wholesale ordering options.
                </p>

                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-8 inline-flex items-center gap-2 rounded-full bg-yellow-400 px-6 py-3.5 font-semibold text-black transition hover:bg-yellow-300"
                >
                  Ask for Wholesale Quote
                  <ArrowUpRight size={17} />
                </a>

              </div>

              {/* Right */}
              <div className="border-t border-white/10 p-8 md:border-l md:border-t-0 md:p-14 lg:p-16">

                <div className="space-y-6">

                  <WholesaleRow
                    title="Ludhiana / Punjab"
                    value="Orders starting from 50 pieces"
                  />

                  <div className="h-px bg-white/10" />

                  <WholesaleRow
                    title="Outside Punjab"
                    value="Minimum 200 pieces"
                  />

                  <div className="h-px bg-white/10" />

                  <WholesaleRow
                    title="Quantity"
                    value="Better rates on larger quantities"
                  />

                </div>

              </div>

            </div>

          </div>
        </section>

        {/* ================= ABOUT ================= */}
        <section
          id="about"
          className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28"
        >

          <div className="max-w-3xl">

            <p className="mb-5 text-xs font-semibold uppercase tracking-[3px] text-yellow-400">
              About ASGAR
            </p>

            <h2 className="text-3xl font-bold leading-tight md:text-5xl">
              MD ASGAR MANUFACTURE
              <br />

              <span className="text-white/40">
                behind ASGAR LUXURY BAGS.
              </span>
            </h2>

            <p className="mt-7 text-base leading-relaxed text-white/50 md:text-lg">
              Based in Ludhiana, Punjab, MD ASGAR MANUFACTURE
              focuses on trolley bags and luggage for wholesale
              and business buyers.
            </p>

          </div>

        </section>

        {/* ================= CONTACT ================= */}
        <section
          id="contact"
          className="border-t border-white/10 bg-[#0d0d0d]"
        >

          <div className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">

            <div className="grid gap-14 md:grid-cols-2">

              {/* Contact Intro */}
              <div>

                <p className="mb-5 text-xs font-semibold uppercase tracking-[3px] text-yellow-400">
                  Contact
                </p>

                <h2 className="text-3xl font-bold md:text-5xl">
                  Let's talk business.
                </h2>

                <p className="mt-5 max-w-md leading-relaxed text-white/45">
                  Contact us for wholesale enquiries, product
                  information and business orders.
                </p>

              </div>

              {/* Contact Details */}
              <div className="space-y-3">

                <a
                  href={`tel:${phoneNumber}`}
                  className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.02] p-5 transition hover:border-yellow-400/30"
                >
                  <Phone size={21} className="text-yellow-400" />

                  <span>{phoneNumber}</span>
                </a>

                <a
                  href={`mailto:${email}`}
                  className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.02] p-5 transition hover:border-yellow-400/30"
                >
                  <Mail size={21} className="text-yellow-400" />

                  <span>{email}</span>
                </a>

                <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.02] p-5">
                  <MapPin size={21} className="text-yellow-400" />

                  <span>Ludhiana, Punjab, India</span>
                </div>

              </div>

            </div>

          </div>
        </section>

      </main>

      {/* ================= FOOTER ================= */}
      <footer className="border-t border-white/10 bg-black">

        <div className="mx-auto max-w-7xl px-5 py-14 md:px-8">

          <div className="flex flex-col justify-between gap-10 md:flex-row">

            {/* Footer Brand */}
            <div>

              <h3 className="text-xl font-bold">
                ASGAR LUXURY BAGS
              </h3>

              <p className="mt-2 text-sm text-white/35">
                Manufactured by MD ASGAR MANUFACTURE
              </p>

              <p className="mt-2 text-sm text-white/30">
                Ludhiana, Punjab, India
              </p>

            </div>

            {/* Social Links */}
            <div>

              <p className="mb-4 text-xs uppercase tracking-[2px] text-white/40">
                Connect With Us
              </p>

              <div className="flex flex-wrap gap-3">

                <SocialButton
                  href={socialLinks.instagram}
                  label="Instagram"
                >
                  <Instagram size={18} />
                </SocialButton>

                <SocialButton
                  href={socialLinks.facebook}
                  label="Facebook"
                >
                  <Facebook size={18} />
                </SocialButton>

                <SocialButton
                  href={socialLinks.threads}
                  label="Threads"
                >
                  <span className="text-sm font-bold">@</span>
                </SocialButton>

                <SocialButton
                  href={socialLinks.x}
                  label="X"
                >
                  <Twitter size={18} />
                </SocialButton>

                <SocialButton
                  href={socialLinks.youtube}
                  label="YouTube"
                >
                  <Youtube size={18} />
                </SocialButton>

                <SocialButton
                  href={socialLinks.website}
                  label="Website"
                >
                  <Globe size={18} />
                </SocialButton>

              </div>

            </div>

          </div>

          {/* Footer Bottom */}
          <div className="mt-10 flex flex-col justify-between gap-3 border-t border-white/10 pt-6 text-xs text-white/25 sm:flex-row">

            <span>
              © 2026 ASGAR LUXURY BAGS
            </span>

            <span>
              MD ASGAR MANUFACTURE · Ludhiana, Punjab
            </span>

          </div>

        </div>
      </footer>

      {/* ================= FLOATING WHATSAPP ================= */}
      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-green-500 text-white shadow-2xl transition hover:scale-105 hover:bg-green-400"
      >
        <MessageCircle size={27} />
      </a>

    </div>
  );
}

/* ================= TRUST ITEM ================= */

function TrustItem({
  icon,
  title,
  text,
}: {
  icon: React.ReactNode;
  title: string;
  text: string;
}) {
  return (
    <div className="flex items-center gap-3">
      <div className="shrink-0 text-yellow-400">
        {icon}
      </div>

      <div>
        <p className="text-sm font-semibold">
          {title}
        </p>

        <p className="mt-1 text-xs text-white/40">
          {text}
        </p>
      </div>
    </div>
  );
}

/* ================= WHOLESALE ROW ================= */

function WholesaleRow({
  title,
  value,
}: {
  title: string;
  value: string;
}) {
  return (
    <div>
      <p className="text-sm text-white/40">
        {title}
      </p>

      <p className="mt-1 text-xl font-semibold">
        {value}
      </p>
    </div>
  );
}

/* ================= SOCIAL BUTTON ================= */

function SocialButton({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 transition hover:bg-white hover:text-black"
    >
      {children}
    </a>
  );
}

export default App;
