import HeroSection from "@/components/HeroSection";
import CollectionsSection from "@/components/CollectionsSection";
import ProductGrid from "@/components/ProductGrid";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <HeroSection />
      <CollectionsSection />
      <ProductGrid />
    </div>
  );
}
