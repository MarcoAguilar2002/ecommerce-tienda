import Image from 'next/image';
import { FaFacebookF, FaWhatsapp, FaInstagram } from 'react-icons/fa';

export const Footer = () => {
  return (
    <footer className="footer py-12 fade-in">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 text-center">
          {/* Brand Section with Social Icons */}
          <div>
            <div className="flex justify-center mb-4">
              <Image
                src="/images/logoBlancoNombre.png"
                alt="Logo"
                width={130}
                height={130}
                className="object-contain"
              />
            </div>
            <p className="text-sm opacity-80 mb-6 mx-auto max-w-xs">
              Diseño Peruano, Alma Global. ✨
            </p>
            <div className="flex justify-center space-x-4">
              <a href="#" className="icon-btn text-[var(--footer-text)] bg-[var(--primary)]/10 hover:bg-[var(--primary)]/30 rounded-full transition-all">
                <FaFacebookF className="w-5 h-5" />
              </a>
              <a href="#" className="icon-btn text-[var(--footer-text)] bg-[var(--primary)]/10 hover:bg-[var(--primary)]/30 rounded-full transition-all">
                <FaWhatsapp className="w-5 h-5" />
              </a>
              <a href="#" className="icon-btn text-[var(--footer-text)] bg-[var(--primary)]/10 hover:bg-[var(--primary)]/30 rounded-full transition-all">
                <FaInstagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Copyright Section */}
          <div className="pt-8 border-t border-[var(--footer-text)]/20">
            <p className="text-sm opacity-80">
              &copy; {new Date().getFullYear()} Katherin Villafranco. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};