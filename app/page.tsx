import { Button } from "@/components/ui/button";
import HeroSection from "@/components/hero-section";
import Link from "next/link";
import CategoryCard from "@/components/category-card";
import { getFeaturedProducts, getCategories } from "@/lib/data"; // ← Corregido: 'data' no 'date'

export default function Home() {
  const categories = getCategories();
  
  return (
    <div className="px-4 py-8 md:py-16">
      <HeroSection />

      <section className="mt-12">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold tracking-tight">Categorías</h2>
          <Button variant="link" className="text-primary" asChild>
            <Link href="/categorias">Ver todas</Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {/* map de categorías */}
          {categories.map((category) => (
            <CategoryCard key={category.id} category={category} />
          ))}
        </div>
      </section>
    </div>
  );
}