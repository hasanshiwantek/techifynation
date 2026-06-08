import type { Metadata } from "next";
import CategoriesSidebar from "./components/Home/CategoriesSidebar";
import BrandsSidebar from "./components/Home/BrandsSidebar";
import Banner from "./components/Home/Banner";
import CategoryGrid from "./components/Home/CategoriyGrid";
import FeaturedProducts from "./components/Home/FeaturedProducts";
import Brands from "./components/Home/Brands";
import ShopNow from "./components/Home/ShopNow";
import Testimonials from "./components/Home/Testimonials";
import HighPowerSupply from "./components/Home/HighPowerSupply";
import RightPowerSupply from "./components/Home/RightPowerSupply";
import PowerYourPc from "./components/Home/PowerYourPc";
import PowerSupplyImpact from "./components/Home/PowerSupplyImpact";
import BlogsList from "./components/Home/BlogList";
import CatProducts from "./components/Home/CatProducts";

export const metadata: Metadata = {
  metadataBase: new URL("https://techifynation-8g63.vercel.app"),
  title: "PC, Computer & Server Parts | IT Hardware Store | Techify Nation",
  // title: "Home | Techify Nation",
  description:
    "Welcome to Techify Nation – your one-stop shop for servers, networking equipment, and IT solutions. Get the best prices and fast delivery.",
  alternates: {
    canonical: "https://techifynation-8g63.vercel.app",
  },
  openGraph: {
    title: "Techify Nation – Home",
    description:
      "Shop servers, networking gear, and IT solutions at Techify Nation. Affordable, reliable, and delivered fast.",
    url: "https://techifynation-8g63.vercel.app",
    siteName: "Techify Nation",
    images: [
      {
        url: "/serverblink-logo.png", // Replace with your actual logo
        width: 1200,
        height: 630,
        alt: "Techify Nation Homepage",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Techify Nation – Home",
    description:
      "Buy servers, networking equipment, and IT solutions at Techify Nation.",
    images: ["/serverblink-logo.png"], // Replace with actual logo path
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const Page = async () => {
  return (
    <main className="flex flex-col gap-30" role="main">
      {/* Container: max-width 1170px, centered */}
      <div className="w-full max-w-[1170px] mx-auto  lg:px-6 xl:px-0">
        <div className="py-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Left Sidebar */}
            <aside className="lg:block hidden lg:col-span-3">
              <CategoriesSidebar />
              <BrandsSidebar />
            </aside>
            {/* Main Content */}
            <div className="lg:col-span-9">
              <Banner />
              <CategoryGrid />
              <CatProducts
                endpoint="web/products/featured-products"
                isSlider={true}
                title={"Featured Products".toUpperCase()}
              />

              <RightPowerSupply />
              <HighPowerSupply />
              <PowerYourPc />
              <FeaturedProducts
                endpoint="web/products/last-week-orders"
                isSlider={true}
                title={"New Products".toUpperCase()}
              />
              <PowerSupplyImpact />
              <BlogsList />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Page;
