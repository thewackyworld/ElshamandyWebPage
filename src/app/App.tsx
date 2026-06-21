import { useState, useEffect, useRef } from "react";

// Desktop hero & category images
import imgBackground from "@/imports/Desktop/e9b653495be8833d86ee457cb885d49882efba5c.png";
import imgRectangle11 from "@/imports/Desktop/5d4213531460db03c77d19946b492b096f7af524.png";
import imgRectangle12 from "@/imports/Desktop/55ba34c5abb858596d50e58a7760146a997100a6.png";
import imgRectangle13 from "@/imports/Desktop/49067675621f4a9db2b1860688cfe98f607101b9.png";
import imgRectangle14 from "@/imports/Desktop/61c582c3422f13f42dcf9792db71a887390150df.png";
import imgRectangle15 from "@/imports/Desktop/14590813524fa7fef8cd9174cf5bd61830c544c2.png";
import imgRectangle16 from "@/imports/Desktop/5dded13b37cee2466cdcd5a66019b07893d03493.png";
import imgRectangle17 from "@/imports/Desktop/647169cf6ced400b38d5c049216660d8cb62ccd8.png";
import imgRectangle18 from "@/imports/Desktop/92c6f11aa506de6bcc4a334bb9cd68fabd72ad77.png";
import imgCatFish from "@/imports/Desktop/51a9ba6d2ae2d69f119620b730adb5c45c852c50.png";
import imgCatFruits from "@/imports/Desktop/e57903f77f6aceb723bd991655b5cb78abfa9439.png";
import imgCatVeg from "@/imports/Desktop/7c72ecaa341245adc294f40d709697b2b0ffe4cb.png";
import imgCatFrozen from "@/imports/Desktop/a2a98452165897947b6c24198e6ad9b134d576dd.png";
import imgRectangle4 from "@/imports/Desktop/b0b40d25578e4cdf6f234549afb761cc0f2c6160.png";
import imgIconContainer from "@/imports/Desktop/a0804f2a53a0fd3c09360dc689c1482d921f45d7.png";
import svgPaths from "@/imports/Desktop/svg-xan498x3lz";

// Product item images (shared across all category pages)
import imgProd1 from "@/imports/FishProducts/817a2b2cc84692450ef08c2af658384213e3b238.png";
import imgProd2 from "@/imports/FishProducts/2102a3563459da8028b5ca26d848bec5a1a96ebd.png";
import imgProd3 from "@/imports/FishProducts/4d2f4a0198d56e83a6a3b07886f3388f86f421e0.png";
import imgProd4 from "@/imports/FishProducts/6daabdc09fca5f8ef5b1a6833a76654f1d542523.png";
import imgProd5 from "@/imports/FishProducts/74ab66df7adfd36d4c3b564dc066b368f778de06.png";
import imgProd6 from "@/imports/FishProducts/72f2b09cd6d1e838f320c38abff67ea7665f4c63.png";
import imgProd7 from "@/imports/FishProducts/74050ff8a9a0c83e7f060d62caf1d6a7e87947aa.png";
import imgProd8 from "@/imports/FishProducts/877094a54efc6f584aba54b0e01f113b2f48ed08.png";

const BLUE = "#004b99";

type PageKey = "fish" | "frozen" | "fruits" | "vegetables";

interface ProductItem {
  name: string;
  description: string;
  img: string;
}

const SHARED_PRODUCTS: ProductItem[] = [
  { name: "Vannamei Shrimp", description: "Vannamei Shrimps, (Head-On, Head-Less, Peeled and deveined (PD), Pulled Vein, Etc.)", img: imgProd1 },
  { name: "Black Tiger Shrimp", description: "Black Tiger Shrimp, (Head-On, Head-Less, Peeled and deveined (PD), Pulled Vein, Etc.)", img: imgProd2 },
  { name: "Red Shrimp", description: "Red Shrimp, (Head-On, Head-Less, Peeled and deveined (PD), Pulled Vein, Etc.)", img: imgProd3 },
  { name: "Crabs", description: "Crabs (Whole Fresh Frozen)", img: imgProd4 },
  { name: "Squid", description: "Squid (Whole, Ring)", img: imgProd5 },
  { name: "Fish Fillet", description: "Fish Fillet", img: imgProd6 },
  { name: "Red Mullet", description: "Red Mullet", img: imgProd7 },
  { name: "Lizard Fish", description: "Lizard Fish", img: imgProd8 },
];

const PAGES: Record<PageKey, { title: string; heroImg: string; products: ProductItem[] }> = {
  fish: { title: "FISH", heroImg: imgCatFish, products: SHARED_PRODUCTS },
  frozen: { title: "Frozen Foods", heroImg: imgCatFrozen, products: SHARED_PRODUCTS },
  fruits: { title: "Fresh Fruits", heroImg: imgCatFruits, products: SHARED_PRODUCTS },
  vegetables: { title: "Fresh Vegetables", heroImg: imgCatVeg, products: SHARED_PRODUCTS },
};

// ── Shared components ────────────────────────────────────────────────────────

function ArrowRight() {
  return (
    <svg width="36" height="35" viewBox="0 0 36 35" fill="none" className="shrink-0">
      <path d={svgPaths.p311d8000} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
    </svg>
  );
}

function Navbar({ onProductsClick }: { onProductsClick?: () => void }) {
  return (
    <nav className="sticky top-0 z-50 w-full bg-[rgba(40,40,60,0.72)] backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <img src={imgIconContainer} alt="Al Shamandy logo" className="h-14 w-auto object-contain" />
          <span className="font-['Roboto'] font-bold text-white text-sm md:text-base leading-tight max-w-[180px]">
            ALSHAMADNY GENERAL TRADING L.L.C
          </span>
        </div>
        <div className="hidden md:flex items-center gap-8">
          <a href="#about" className="font-['Roboto'] font-bold text-white text-sm hover:text-blue-300 transition-colors">About Us</a>
          <button
            onClick={onProductsClick}
            className="font-['Roboto'] font-bold text-white text-sm hover:text-blue-300 transition-colors"
          >
            Products
          </button>
          <a href="#contact" className="font-['Roboto'] font-bold text-white text-sm hover:text-blue-300 transition-colors">Contact</a>
          <a
            href="#contact"
            className="font-['Poppins'] font-black text-white text-sm px-6 py-2.5 rounded-3xl hover:opacity-90 transition-opacity"
            style={{ backgroundColor: BLUE }}
          >
            Get A Quote
          </a>
        </div>
      </div>
    </nav>
  );
}

// ── Product detail panel ─────────────────────────────────────────────────────

function ProductCard({ item }: { item: ProductItem }) {
  return (
    <div className="bg-[#d9d9d9] rounded-3xl overflow-hidden flex flex-col md:flex-row gap-0 shadow-md">
      {/* Left: image + name */}
      <div className="relative w-full md:w-[420px] h-[280px] md:h-[280px] shrink-0 flex flex-col justify-end overflow-hidden rounded-3xl shadow-md">
        <img src={item.img} alt={item.name} className="absolute inset-0 w-full h-full object-cover" />
        <div className="relative p-5 pt-10 bg-gradient-to-t from-black/40 to-transparent">
          <p
            className="font-['Raleway'] font-black text-2xl text-black text-center"
            style={{ textShadow: "4px 4px 4px rgba(0,0,0,0.25)" }}
          >
            {item.name}
          </p>
          <div className="h-2 rounded-full mt-2" style={{ backgroundColor: BLUE }} />
        </div>
      </div>
      {/* Right: description + button */}
      <div className="flex flex-col justify-between gap-4 p-6 flex-1 items-start">
        <p className="font-['Raleway'] font-black text-lg text-black leading-snug">
          {item.description}
        </p>
        <a
          href="#contact"
          className="font-['Poppins'] font-black text-white text-lg px-8 py-3 rounded-3xl text-center hover:opacity-90 transition-opacity self-start w-fit"
          style={{ backgroundColor: BLUE }}
        >
          Get A Quote
        </a>
      </div>
    </div>
  );
}

function ProductPage({ pageKey, onClose }: { pageKey: PageKey; onClose: () => void }) {
  const page = PAGES[pageKey];
  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Hero banner */}
      <div className="relative w-full h-52 md:h-72 flex flex-col justify-end overflow-hidden shadow-md">
        <img src={page.heroImg} alt={page.title} className="absolute inset-0 w-full h-full object-cover" />
        <div className="relative p-8">
          <p
            className="font-['Raleway'] font-black text-5xl md:text-6xl text-white text-center w-full"
            style={{ textShadow: "4px 4px 4px rgba(0,0,0,0.25)" }}
          >
            {page.title}
          </p>
          <div className="h-2.5 rounded-full mt-3 w-full" style={{ backgroundColor: BLUE }} />
        </div>
      </div>

      {/* Back button */}
      <div className="max-w-7xl w-full mx-auto px-6 pt-6">
        <button
          onClick={onClose}
          className="flex items-center gap-2 font-['Raleway'] font-black text-base px-5 py-2 rounded-2xl border-2 hover:bg-gray-100 transition-colors"
          style={{ borderColor: BLUE, color: BLUE }}
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M13 4L7 10L13 16" stroke={BLUE} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          Back to Products
        </button>
      </div>

      {/* Product list */}
      <div className="max-w-7xl w-full mx-auto px-6 py-8 flex flex-col gap-6">
        {page.products.map((item) => (
          <ProductCard key={item.name} item={item} />
        ))}
      </div>
    </div>
  );
}

// ── Slide panel wrapper ──────────────────────────────────────────────────────

function SlidePanel({ pageKey, onClose }: { pageKey: PageKey | null; onClose: () => void }) {
  const [visible, setVisible] = useState(false);
  const [rendered, setRendered] = useState(false);

  useEffect(() => {
    if (pageKey) {
      setRendered(true);
      // tiny delay so transition fires after element mounts
      requestAnimationFrame(() => requestAnimationFrame(() => setVisible(true)));
    } else {
      setVisible(false);
      const t = setTimeout(() => setRendered(false), 400);
      return () => clearTimeout(t);
    }
  }, [pageKey]);

  if (!rendered) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 z-40 bg-black/40 transition-opacity duration-400"
        style={{ opacity: visible ? 1 : 0 }}
        onClick={onClose}
      />
      {/* Panel */}
      <div
        className="fixed inset-y-0 right-0 z-50 w-full md:w-[100vw] lg:w-[100vw] overflow-y-auto bg-white shadow-2xl transition-transform duration-400 ease-in-out"
        style={{ transform: visible ? "translateX(0)" : "translateX(100%)" }}
      >
        {pageKey && <ProductPage pageKey={pageKey} onClose={onClose} />}
      </div>
    </>
  );
}

// ── Main page sections ───────────────────────────────────────────────────────

function Hero() {
  return (
    <section className="relative w-full min-h-[600px] md:min-h-[750px] overflow-hidden">
      <img src={imgBackground} alt="" className="absolute inset-0 w-full h-full object-cover object-center" />
      <div className="absolute inset-0 bg-gradient-to-b from-[rgba(87,87,87,0.6)] via-[rgba(152,152,152,0.3)] to-transparent" />
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-16 md:py-24 flex flex-col md:flex-row items-start gap-8">
        <div className="backdrop-blur-sm bg-white/10 rounded-3xl p-8 max-w-2xl shadow-lg flex flex-col gap-5">
          <h1
            className="font-['Raleway'] font-black text-4xl md:text-6xl leading-tight"
            style={{ color: BLUE, textShadow: "5px 4px 4px rgba(0,0,0,0.25)" }}
          >
            Providing You With the Very Best
          </h1>
          <p className="font-['Poppins'] text-base leading-relaxed" style={{ color: "#004791", textShadow: "1px 4px 4px rgba(0,0,0,0.25)" }}>
            Never Be disappointed By a delivery again. ALSHAMANDY GENERAL TRADING deals with
            importing and exporting of fresh and frozen goods from a multitude of countries,
            Maintaining the best product choices.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 text-white font-['Poppins'] font-black text-xl px-7 py-3 rounded-3xl shadow-md w-fit hover:opacity-90 transition-opacity"
            style={{ backgroundColor: BLUE }}
          >
            <ArrowRight />
            Inquire
          </a>
        </div>
        <div className="flex flex-col gap-4 md:ml-auto">
          <div className="bg-white rounded-3xl px-8 py-4 shadow-md text-center" style={{ minWidth: 180 }}>
            <p className="font-['Poppins'] text-sm" style={{ color: BLUE }}>Over</p>
            <p className="font-['Poppins'] font-black text-5xl" style={{ color: BLUE }}>14</p>
            <p className="font-['Poppins'] text-xl" style={{ color: BLUE }}>Countries</p>
          </div>
          <div className="bg-white rounded-3xl px-8 py-4 shadow-md text-center">
            <p className="font-['Poppins'] font-black text-2xl" style={{ color: BLUE }}>PREMIUM</p>
            <p className="font-['Poppins'] text-base" style={{ color: BLUE }}>Products</p>
          </div>
        </div>
      </div>
    </section>
  );
}

const countries = [
  { name: "UAE", img: imgRectangle11 },
  { name: "Egypt", img: imgRectangle12 },
  { name: "India", img: imgRectangle13 },
  { name: "Spain", img: imgRectangle14 },
  { name: "Italy", img: imgRectangle15 },
  { name: "Tunisia", img: imgRectangle16 },
  { name: "Algeria", img: imgRectangle17 },
  { name: "Oman", img: imgRectangle18 },
];

function Countries() {
  const scrollRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const tick = () => {
      const halfScrollWidth = el.scrollWidth / 2;
      if (halfScrollWidth <= el.clientWidth) return;

      el.scrollLeft += 1;
      if (el.scrollLeft >= halfScrollWidth) {
        el.scrollLeft = 0;
      }
    };

    const interval = window.setInterval(tick, 25);
    return () => window.clearInterval(interval);
  }, []);

  return (
    <section className="bg-[#cecece] py-10 px-6">
      <div
        ref={scrollRef}
        className="max-w-7xl mx-auto overflow-x-auto scrollbar-hide"
        style={{ msOverflowStyle: "none", scrollbarWidth: "none" }}
      >
        <div className="flex gap-6 pb-2 pr-6" style={{ minWidth: "max-content" }}>
          {[...countries, ...countries].map((c, index) => (
            <div
              key={`${c.name}-${index}`}
              className="bg-white rounded-3xl shadow-md flex flex-col items-center gap-2 px-4 pt-3 pb-2 shrink-0"
              style={{ width: 220 }}
            >
              <div className="flex items-center gap-2 w-full">
                <span className="font-['Poppins'] font-black text-xl text-black w-20 shrink-0">{c.name}</span>
                <div className="flex-1 h-14 rounded-2xl overflow-hidden shadow-sm">
                  <img src={c.img} alt={c.name} className="w-full h-full object-cover" />
                </div>
              </div>
              <div className="h-1 rounded-full w-full" style={{ backgroundColor: BLUE }} />
            </div>
          ))}
        </div>
      </div>
      <style>{` .scrollbar-hide::-webkit-scrollbar { display: none; } `}</style>
    </section>
  );
}

function CategoryCard({
  src, alt, label, onClick,
}: {
  src: string; alt: string; label: string; onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className="relative w-full h-full rounded-3xl overflow-hidden shadow-md flex flex-col justify-end group cursor-pointer text-left"
    >
      <img src={src} alt={alt} className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" />
      <div className="relative p-5">
        <p
          className="font-['Raleway'] font-black text-3xl text-white text-center"
          style={{ textShadow: "4px 4px 4px rgba(0,0,0,0.25)" }}
        >
          {label}
        </p>
        <div className="h-2 rounded-full mt-2" style={{ backgroundColor: BLUE }} />
      </div>
    </button>
  );
}

function Products({ onOpen }: { onOpen: (key: PageKey) => void }) {
  return (
    <section id="products" className="bg-white py-14 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="font-['Raleway'] font-black text-5xl text-black text-center mb-10">Products</h2>
        <div className="flex gap-4" style={{ height: 560 }}>
          {/* Left column */}
          <div className="flex flex-col gap-4 flex-[3]">
            <div className="flex-[5]">
              <CategoryCard src={imgCatFish} alt="Fish" label="Fish" onClick={() => onOpen("fish")} />
            </div>
            <div className="flex gap-4 flex-[4]">
              <div className="flex-1">
                <CategoryCard src={imgCatFrozen} alt="Frozen Foods" label="Frozen Foods" onClick={() => onOpen("frozen")} />
              </div>
              <div className="flex-1">
                <CategoryCard src={imgCatFruits} alt="Fresh Fruits" label="Fresh Fruits" onClick={() => onOpen("fruits")} />
              </div>
            </div>
          </div>
          {/* Right column */}
          <div className="flex-[2]">
            <button
              onClick={() => onOpen("vegetables")}
              className="relative w-full h-full rounded-3xl overflow-hidden shadow-md flex flex-col justify-end group cursor-pointer text-left"
            >
              <img src={imgCatVeg} alt="Fresh Vegetables" className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" />
              <div className="relative p-5">
                <p
                  className="font-['Raleway'] font-black text-3xl text-white text-center"
                  style={{ textShadow: "4px 4px 4px rgba(0,0,0,0.25)" }}
                >
                  Fresh<br />Vegetables
                </p>
                <div className="h-2 rounded-full mt-2" style={{ backgroundColor: BLUE }} />
              </div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

function AboutUs() {
  return (
    <section id="about" className="py-16 px-6" style={{ background: "rgba(217,217,217,0.4)" }}>
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-10 items-center">
        <div className="w-full md:w-[380px] shrink-0">
          <img src={imgRectangle4} alt="Al Shamandy" className="w-full h-[400px] md:h-[500px] object-cover rounded-3xl shadow-lg" />
        </div>
        <div className="flex-1 bg-[#d9d9d9] rounded-3xl p-8 md:p-12">
          <h2 className="font-['Raleway'] font-black text-3xl md:text-4xl text-black text-center mb-6">
            ALSHAMANDY GENERAL TRADING LLC
          </h2>
          <p className="font-['Raleway'] text-base md:text-lg text-black text-center leading-relaxed">
            A company from Dubai UAE. We are a well-established merchandising firm handling Rice,
            Lentils, and frozen seafood products including varieties of Shrimps, Red Mullet, Lizard
            Fish, etc. Al Shamandy leads in quality frozen seafood products from Dubai. We have
            associations with various reliable suppliers/packers from India who are well established
            in their respective fields. This results in delivering high-quality raw materials &amp;
            frozen products throughout the year from both EU &amp; National standard approved factories.
          </p>
        </div>
      </div>
    </section>
  );
}

function MapSection() {
  return (
    <section id="contact" className="bg-white py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="font-['Raleway'] font-black text-3xl md:text-4xl text-black mb-10">WHERE TO FIND US</h2>
        <div className="flex flex-col md:flex-row gap-10">
          <div className="flex-1">
            <p className="font-['Raleway'] font-black text-xl text-black mb-4">
              Interested in doing business with Al Shamandy General Trading L.L.C?
            </p>
            <p className="font-['Raleway'] text-base text-black mb-2">Our business hours are Saturday - Thursday: 8am-8pm.</p>
            <p className="font-['Raleway'] text-base text-black mb-2">
              Office No. 207, Plot No. 283-0, Al Rubaya Building Al Qusais 2<br />
              Dubai, UAE P.O. Box. 99128
            </p>
            <a href="mailto:elshamandytrade@gmail.com" className="font-['Raleway'] text-base text-black underline block mb-2 hover:text-blue-700">
              elshamandytrade@gmail.com
            </a>
            <p className="font-['Raleway'] text-base text-black">+971551448811</p>
          </div>
          <div className="flex-1 rounded-2xl overflow-hidden min-h-[280px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d115453.92087607243!2d55.21904559726561!3d25.272771!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f5da750cce7b7%3A0xdf02de3f2b755e53!2sAl%20Shamandy%20General%20Trading%20LLC!5e0!3m2!1sen!2sae!4v1781968750308!5m2!1sen!2sae"
              className="w-full h-full min-h-[280px] border-0"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Al Shamandy General Trading LLC location"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-[#525257] rounded-t-3xl px-6 py-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-10">
        <div className="flex flex-col items-start gap-4 md:w-64">
          <img src={imgRectangle4} alt="Al Shamandy" className="w-48 h-36 object-cover rounded-2xl" />
          <div className="bg-white rounded-full p-3 shadow-md">
            <svg width="36" height="36" viewBox="0 0 47 46" fill="none">
              <path d={svgPaths.p1ecff800} fill="black" />
            </svg>
          </div>
        </div>
        <div className="flex-1">
          <p className="font-['Raleway'] text-white text-xl mb-1">Tabs</p>
          <div className="h-0.5 rounded-full w-10 mb-4" style={{ backgroundColor: BLUE }} />
          <div className="flex flex-col gap-2 font-['Raleway'] text-white text-base">
            <a href="#about" className="hover:underline">About us</a>
            <a href="#products" className="hover:underline">Products</a>
            <a href="#contact" className="hover:underline">Get a Quote</a>
          </div>
        </div>
        <div className="flex-1">
          <p className="font-['Raleway'] text-white text-xl mb-1">Contact Us</p>
          <div className="h-0.5 rounded-full w-20 mb-4" style={{ backgroundColor: BLUE }} />
          <div className="flex flex-col gap-3 font-['Raleway'] text-white text-base">
            <p>Office No. 207, Plot No. 283-0, Al Rubaya Building Al Qusais 2<br />Dubai, UAE</p>
            <a href="mailto:elshamandytrade@gmail.com" className="underline hover:text-blue-300">elshamandytrade@gmail.com</a>
            <p>+971551448811</p>
          </div>
        </div>
      </div>
      <div className="mt-10 pt-4 border-t border-white/20 text-center">
        <p className="font-['Raleway'] text-white text-sm">© 2025 Alshamandy General Trading LLC. All rights reserved.</p>
      </div>
    </footer>
  );
}

// ── Root ─────────────────────────────────────────────────────────────────────

export default function App() {
  const [activePage, setActivePage] = useState<PageKey | null>(null);

  // Lock body scroll when panel is open
  useEffect(() => {
    document.body.style.overflow = activePage ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [activePage]);

  return (
    <div className="w-full min-h-screen">
      <Navbar onProductsClick={() => document.getElementById("products")?.scrollIntoView({ behavior: "smooth" })} />
      <Hero />
      <Countries />
      <Products onOpen={setActivePage} />
      <AboutUs />
      <MapSection />
      <Footer />

      <SlidePanel pageKey={activePage} onClose={() => setActivePage(null)} />
    </div>
  );
}
