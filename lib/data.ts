import type { Product, Category, Order } from "./types"

// Datos de productos de ropa deportiva
const products: Product[] = [
  {
    id: "1",
    name: "Zapatillas Nike Air Max 270",
    slug: "nike-air-max-270",
    description: "Zapatillas deportivas con tecnología Air Max para máximo confort y estilo.",
    price: 129.99,
    oldPrice: 149.99,
    images: [
      "/images/imagen-zapatillas-nike.jpg",
      "/placeholder.svg?key=nike2",
      "/placeholder.svg?key=nike3",
      "/placeholder.svg?key=nike4",
    ],
    category: "calzado-deportivo",
    stock: 25,
    features: [
      "Tecnología Nike Air Max",
      "Suela de goma resistente",
      "Upper de malla transpirable",
      "Amortiguación superior",
      "Diseño icónico",
      "Disponible en múltiples colores",
    ],
    isNew: true,
  },
  {
    id: "2",
    name: "Camiseta Adidas Dri-FIT Hombre",
    slug: "camiseta-adidas-dri-fit-hombre",
    description: "Camiseta deportiva de alto rendimiento con tecnología de absorción de humedad.",
    price: 45.99,
    images: [
      "/images/imagen-camisetas-Adidas.jpg",
      "/placeholder.svg?key=adidas2",
      "/placeholder.svg?key=adidas3",
      "/placeholder.svg?key=adidas4"
    ],
    category: "hombre",
    stock: 40,
    features: [
      "Tecnología Dri-FIT",
      "Tela transpirable",
      "Corte atlético",
      "Costuras planas",
      "Logo bordado",
      "Lavable en máquina",
    ],
  },
  {
    id: "3",
    name: "Leggings Under Armour Mujer",
    slug: "leggings-under-armour-mujer",
    description: "Leggings de compresión para entrenamiento intensivo con tecnología HeatGear.",
    price: 65.99,
    oldPrice: 79.99,
    images: [
      "/images/imagen-leggins.jpg",
      "/placeholder.svg?key=ua2",
      "/placeholder.svg?key=ua3",
      "/placeholder.svg?key=ua4"
    ],
    category: "mujer",
    stock: 30,
    features: [
      "Tecnología HeatGear",
      "Compresión media",
      "Cintura alta",
      "Tela elástica en 4 direcciones",
      "Resistente al sudor",
      "Bolsillo lateral",
    ],
  },
  {
    id: "4",
    name: "Sudadera Puma Premium",
    slug: "sudadera-puma-premium",
    description: "Sudadera de alta calidad con capucha, perfecta para entrenamientos y uso casual.",
    price: 89.99,
    images: [
      "/images/imagen-sudadera.jpg",
      "/placeholder.svg?key=puma2",
      "/placeholder.svg?key=puma3",
      "/placeholder.svg?key=puma4",
    ],
    category: "marcas-premium",
    stock: 20,
    features: [
      "Algodón premium 100%",
      "Capucha ajustable",
      "Bolsillo tipo canguro",
      "Puños elásticos",
      "Logo bordado Puma",
      "Corte unisex",
    ],
    isNew: true,
  },
  {
    id: "5",
    name: "Shorts Nike Running Hombre",
    slug: "shorts-nike-running-hombre",
    description: "Shorts ligeros para running con tecnología Dry-FIT y reflectivos nocturnos.",    
    price: 35.99,
    oldPrice: 44.99,
    images: [
      "/images/imagen-short.jpg",
      "/placeholder.svg?key=shorts2",
      "/placeholder.svg?key=shorts3",
      "/placeholder.svg?key=shorts4",
    ],
    category: "hombre",
    stock: 35,
    features: [
      "Tecnología Dry-FIT",
      "Forro interior",
      "Elementos reflectivos",
      "Bolsillos laterales",
      "Cintura elástica",
      "Longitud 7 pulgadas",
    ],
  },
  {
    id: "6",
    name: "Top Deportivo Adidas Mujer",
    slug: "top-deportivo-adidas-mujer",
    description: "Top deportivo de soporte medio, ideal para yoga, pilates y entrenamientos.",
    price: 39.99,
    images: [
      "/images/imagen-topdeportivo.jpg",
      "/placeholder.svg?key=top2",
      "/placeholder.svg?key=top3",
      "/placeholder.svg?key=top4",
    ],
    category: "mujer",
    stock: 25,
    features: [
      "Soporte medio",
      "Tela elástica",
      "Diseño sin costuras",
      "Tirantes cruzados",
      "Tecnología Climacool",
      "Ajuste ceñido",
    ],
  },
  {
    id: "7",
    name: "Chaqueta Nike Windrunner",
    slug: "chaqueta-nike-windrunner",
    description: "Chaqueta cortavientos ligera con capucha, perfecta para entrenamientos al aire libre.",
    price: 79.99,
    images: [
      "/images/imagen-chaqueta.jpg",
      "/placeholder.svg?key=jacket2",
      "/placeholder.svg?key=jacket3",
      "/placeholder.svg?key=jacket4",
    ],
    category: "marcas-premium",
    stock: 15,
    features: [
      "Tela cortavientos",
      "Capucha ajustable",
      "Cremallera completa",
      "Bolsillos con cremallera",
      "Puños elásticos",
      "Diseño icónico chevron",
    ],
  },
  {
    id: "8",
    name: "Pantalón Jogger Puma Hombre",
    slug: "pantalon-jogger-puma-hombre",
    description: "Pantalón jogger cómodo para entrenamientos y uso casual con tecnología dryCELL.",
    price: 55.99,
    oldPrice: 69.99,
    images: [
      "/images/imagen-pantalon.jpg",
      "/placeholder.svg?key=jogger2",
      "/placeholder.svg?key=jogger3",
      "/placeholder.svg?key=jogger4",
    ],
    category: "hombre",
    stock: 28,
    features: [
      "Tecnología dryCELL",
      "Cintura elástica con cordón",
      "Bolsillos laterales",
      "Puños ajustados",
      "Tela suave al tacto",
      "Corte moderno",
    ],
    isNew: true,
  },
  {
    id: "9",
    name: "Zapatillas Adidas Ultraboost 22",
    slug: "adidas-ultraboost-22",
    description: "Zapatillas de running premium con tecnología Boost para máximo retorno de energía.",
    price: 179.99,
    images: [
      "/images/imagen-calzadidas.jpg",
      "/placeholder.svg?key=ultra2",
      "/placeholder.svg?key=ultra3",
      "/placeholder.svg?key=ultra4",
    ],
    category: "calzado-deportivo",
    stock: 18,
    features: [
      "Tecnología Boost",
      "Upper Primeknit+",
      "Suela Continental",
      "Sistema Torsion",
      "Amortiguación responsiva",
      "Diseño premium",
    ],
    isNew: true,
  },
  {
    id: "10",
    name: "Conjunto Deportivo Under Armour Mujer",
    slug: "conjunto-under-armour-mujer",
    description: "Conjunto completo de top y leggings a juego con tecnología HeatGear.",
    price: 99.99,
    oldPrice: 129.99,
    images: [
      "/images/imagen-conjunto.jpg",
      "/placeholder.svg?key=set2",
      "/placeholder.svg?key=set3",
      "/placeholder.svg?key=set4",
    ],
    category: "mujer",
    stock: 12,
    features: [
      "Conjunto completo",
      "Tecnología HeatGear",
      "Tela antimicrobiana",
      "Diseño a juego",
      "Compresión ligera",
      "Secado rápido",
    ],
    isNew: true,
  },
]

// Datos de categorías de ropa deportiva
const categories: Category[] = [
  {
    id: "1",
    name: "Calzado Deportivo",
    slug: "calzado-deportivo",
    image: "/images/imagen-calzado.jpg",
    bannerImage: "/placeholder.svg?height=400&width=1200&query=athletic+shoes+collection+banner",
    description: "Descubre nuestra colección de zapatillas deportivas de las mejores marcas para running, training y uso casual.",
    featured: true,
  },
  {
    id: "2",
    name: "Ropa para Hombre",
    slug: "hombre",
    image: "/images/imagen-ropadeportiva.jpg",
    bannerImage: "/placeholder.svg?height=400&width=1200&query=mens+sportswear+collection+banner",
    description: "Encuentra la mejor ropa deportiva para hombre: camisetas, shorts, pantalones y más para tus entrenamientos.",
    featured: true,
  },
  {
    id: "3",
    name: "Ropa para Mujer",
    slug: "mujer",
    image: "/images/imagen-ropadeportiva_mujer.jpg",
    bannerImage: "/placeholder.svg?height=400&width=1200&query=womens+activewear+collection+banner",
    description: "Colección completa de ropa deportiva femenina: leggings, tops, conjuntos y más para un estilo activo.",
    featured: true,
  },
  {
    id: "4",
    name: "Marcas Premium",
    slug: "marcas-premium",
    image: "/images/imagen-marcas.jpg",
    bannerImage: "/placeholder.svg?height=400&width=1200&query=premium+sportswear+brands+banner",
    description: "Productos de las marcas más prestigiosas del mundo deportivo con la más alta calidad y tecnología.",
    featured: true,
  },
]

// Datos de pedidos con imágenes
const orders: Order[] = [
  {
    id: "ORD-001",
    customer: "Juan Pérez",
    date: "2023-05-15T10:30:00",
    status: "completed",
    total: 129.99,
    items: [
      {
        id: "1",
        name: "Zapatillas Nike Air Max 270",
        quantity: 1,
        price: 129.99,
        image: "/images/imagen-zapatillas-nike.jpg",
      },
    ],
  },
  {
    id: "ORD-002",
    customer: "María García",
    date: "2023-05-18T14:45:00",
    status: "pending",
    total: 111.98,
    items: [
      {
        id: "2",
        name: "Camiseta Adidas Dri-FIT Hombre",
        quantity: 1,
        price: 45.99,
        image: "/images/imagen-camisetas-Adidas.jpg",
      },
      {
        id: "3",
        name: "Leggings Under Armour Mujer",
        quantity: 1,
        price: 65.99,
        image: "/images/imagen-leggins.jpg",
      },
    ],
  },
  {
    id: "ORD-003",
    customer: "Carlos Rodríguez",
    date: "2023-05-20T09:15:00",
    status: "completed",
    total: 89.99,
    items: [
      {
        id: "4",
        name: "Sudadera Puma Premium",
        quantity: 1,
        price: 89.99,
        image: "/images/imagen-sudadera.jpg",
      },
    ],
  },
  {
    id: "ORD-004",
    customer: "Ana Martínez",
    date: "2023-05-22T16:20:00",
    status: "pending",
    total: 219.98,
    items: [
      {
        id: "9",
        name: "Zapatillas Adidas Ultraboost 22",
        quantity: 1,
        price: 179.99,
        image: "/images/imagen-calzadidas.jpg",
      },
      {
        id: "6",
        name: "Top Deportivo Adidas Mujer",
        quantity: 1,
        price: 39.99,
        image: "/images/imagen-topdeportivo.jpg",
      },
    ],
  },
]

// Funciones para obtener datos
export function getFeaturedProducts(): Product[] {
  return products
}

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((product) => product.slug === slug)
}

export function getRelatedProducts(category: string, currentProductId: string): Product[] {
  return products.filter((product) => product.category === category && product.id !== currentProductId).slice(0, 4)
}

export function getCategories(): Category[] {
  return categories
}

export function getCategoryBySlug(slug: string): Category | undefined {
  return categories.find((category) => category.slug === slug)
}

export function getProductsByCategory(categorySlug: string): Product[] {
  return products.filter((product) => product.category === categorySlug)
}

export function getOrders(): Order[] {
  return orders
}