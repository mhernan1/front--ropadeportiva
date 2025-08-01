import { Button } from "@/components/ui/button";
import HeroSection from "@/components/hero-section";
import Link from "next/link";
import CategoryCard from "@/components/category-card";
import ProductCard from "@/components/product-card";
import { getFeaturedProducts, getCategories } from "@/lib/data";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function Home() {
  const categories = getCategories();
  const featuredProducts = getFeaturedProducts();
  
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

      <section className="mt-16">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-3xl font-bold tracking-tight">
            Productos Destacados
          </h2>
        </div>
        <Tabs defaultValue="all" className="w-full">
          <TabsList className="mb-6">
            <TabsTrigger value="all">Todos</TabsTrigger>
            <TabsTrigger value="calzado-deportivo">Calzado</TabsTrigger>
            <TabsTrigger value="hombre">Hombre</TabsTrigger>
            <TabsTrigger value="mujer">Mujer</TabsTrigger>
            <TabsTrigger value="marcas-premium">Marcas</TabsTrigger>
          </TabsList>
          
          <TabsContent value="all" className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </TabsContent>
          
          <TabsContent value="calzado-deportivo" className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {featuredProducts.filter(product => product.category === 'calzado-deportivo').map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </TabsContent>
          
          <TabsContent value="hombre" className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {featuredProducts.filter(product => product.category === 'hombre').map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </TabsContent>
          
          <TabsContent value="mujer" className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {featuredProducts.filter(product => product.category === 'mujer').map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </TabsContent>
          
          <TabsContent value="marcas-premium" className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {featuredProducts.filter(product => product.category === 'marcas-premium').map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </TabsContent>
        </Tabs>
      </section>
    </div>
  );
}