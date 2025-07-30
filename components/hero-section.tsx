import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
    return (
        <section className="relative overflow-hidden rounded-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col justify-center p-6 md:p-10">
                    <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
                        Ropa Deportiva de Última generación
                    </h1>
                    <p className="text-muted-foreground mb-6 md:mb-8 text-lg">
                        Descubre nuestra Gama de ropa Deportiva de ultima generación.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 md:gap-6">
                        <Button asChild size="lg">
                            <Link href="/categoria/deportes">Ver Deportes</Link>
                        </Button>
                        <Button asChild size="lg">
                            <Link href="/categoria/marcas">Ver Marcas</Link>
                        </Button>
                        <Button asChild size="lg" variant="outline">
                            <Link href="/categoria/mujer">Ver Mujer</Link>
                        </Button>
                    </div>
                </div>
                <div className="relative aspect-[4/3] md:aspect-auto">
                    <Image
                        src="/images/hero-image.jpg"
                        alt="Imagen de Ropa Deportiva"
                        fill
                        className="object-cover rounded-lg"
                    />
                </div>
            </div>
        </section>
    );
}