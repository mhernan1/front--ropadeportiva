import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Product } from "@/lib/types";

interface ProductCardProps {
    product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
    return (
        <div className="group relative border rounded-lg overflow-hidden">
            <div className="aspect-square relative">
                <Image
                    src={product.images[0] || "/placeholder.svg"}
                    alt={product.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform"
                />
                {product.isNew && (
                    <Badge className="absolute top-2 right-2">Nuevo</Badge>
                )}
            </div>
            <div className="p-4">
                <h3 className="font-medium">{product.name}</h3>
                <p className="text-sm text-gray-600 mt-1 line-clamp-2">{product.description}</p>
                <div className="flex items-center gap-2 mt-2">
                    {product.oldPrice && (
                        <span className="text-sm line-through text-gray-400">
                            ${product.oldPrice.toFixed(2)}
                        </span>
                    )}
                    <span className="font-bold">${product.price.toFixed(2)}</span>
                </div>
            </div>
        </div>
    );
}