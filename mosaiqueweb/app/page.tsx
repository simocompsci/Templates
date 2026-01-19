import HeroSection from "@/components/HeroSection";
import CollectionsSection from "@/components/CollectionsSection";
import ProductGrid from "@/components/ProductGrid";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <HeroSection />
      <CollectionsSection />
      <ProductGrid />
    </div>
  );
}
