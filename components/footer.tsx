import Link from "next/link";
import { Facebook, Instagram, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="container mx-auto px-4 py-12 md:py-16 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12 text-center md:text-left">
          {/* Ropa Deportiva Section */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Ropa Deportiva</h3>
            <p className="text-sm text-gray-300 leading-relaxed">
              Tu tienda en línea de confianza para ropa deportiva de 
              alta calidad. Ofrecemos una amplia variedad de 
              productos para todos los gustos y necesidades 
              deportivas.
            </p>
          </div>

          {/* Enlaces rápidos Section */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Enlaces rápidos</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/" className="text-gray-300 hover:text-white transition-colors">
                  Inicio
                </Link>
              </li>
              <li>
                <Link href="/categoria/deportes" className="text-gray-300 hover:text-white transition-colors">
                  Deportes
                </Link>
              </li>
              <li>
                <Link href="/categoria/hombre" className="text-gray-300 hover:text-white transition-colors">
                  Hombre
                </Link>
              </li>
              <li>
                <Link href="/categoria/marcas" className="text-gray-300 hover:text-white transition-colors">
                  Marcas
                </Link>
              </li>
              <li>
                <Link href="/categoria/mujer" className="text-gray-300 hover:text-white transition-colors">
                  Mujer
                </Link>
              </li>
            </ul>
          </div>

          {/* Información Section */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Información</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/nosotros" className="text-gray-300 hover:text-white transition-colors">
                  Sobre nosotros
                </Link>
              </li>
              <li>
                <Link href="/contacto" className="text-gray-300 hover:text-white transition-colors">
                  Contacto
                </Link>
              </li>
              <li>
                <Link href="/politicas" className="text-gray-300 hover:text-white transition-colors">
                  Políticas y privacidad
                </Link>
              </li>
              <li>
                <Link href="/terminos" className="text-gray-300 hover:text-white transition-colors">
                  Términos y condiciones
                </Link>
              </li>
            </ul>
          </div>

          {/* Contacto Section */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Contacto</h3>
            <div className="space-y-3 text-sm text-gray-300">
              <p>Calle Xyz, La tecnología</p>
              <p>Santander</p>
              <p>info@techstore.com</p>
              <p>Teléfono: +57 315 703 2323</p>
              
              <div className="flex justify-center md:justify-start space-x-4 pt-3">
                <Link href="#" className="text-gray-300 hover:text-white transition-colors">
                  <Facebook className="h-5 w-5" />
                </Link>
                <Link href="#" className="text-gray-300 hover:text-white transition-colors">
                  <Instagram className="h-5 w-5" />
                </Link>
                <Link href="#" className="text-gray-300 hover:text-white transition-colors">
                  <Twitter className="h-5 w-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-800 mt-16 pt-8 text-center">
          <p className="text-sm text-gray-400">
            © 2024 TechStore. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}