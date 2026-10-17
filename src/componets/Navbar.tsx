import React, { useState, useEffect } from 'react';
import { BrandLogo } from './BrandLogo';
import { BRAND_CONFIG } from '../data/strawberryData';
import { MessageCircle, Menu, X, MapPin, Sparkles, ShoppingBag } from 'lucide-react';

interface NavbarProps {
  onOpenOrderModal: (productId?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenOrderModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('beranda');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Check current section
      const sections = ['beranda', 'produk', 'keunggulan', 'lokasi', 'tentang', 'galeri', 'promo', 'faq'];
      const scrollPos = window.scrollY + 100;
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'beranda', label: 'Beranda' },
    { id: 'produk', label: 'Produk' },
    { id: 'keunggulan', label: 'Keunggulan' },
    { id: 'lokasi', label: 'Lokasi' },
    { id: 'tentang', label: 'Tentang Kami' },
    { id: 'galeri', label: 'Galeri' },
    { id: 'promo', label: 'Promo' },
    { id: 'faq', label: 'FAQ' },
  ];

  const handleNavClick = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#FFF9EF]/95 backdrop-blur-md shadow-sm border-b border-[#E83E5B]/10 py-3'
          : 'bg-[#FFF9EF]/80 backdrop-blur-sm py-4 md:py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <a
            href="#beranda"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('beranda');
            }}
            className="focus:outline-none"
          >
            <BrandLogo size="md" />
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`relative px-3 py-1.5 text-sm font-semibold transition-colors duration-200 cursor-pointer rounded-full ${
                    isActive
                      ? 'text-[#E83E5B]'
                      : 'text-[#172A5A] hover:text-[#E83E5B]'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-4 h-0.5 bg-[#E83E5B] rounded-full" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Desktop Action Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={() => onOpenOrderModal()}
              className="flex items-center gap-2 px-4 py-2 border border-[#172A5A]/20 hover:border-[#172A5A] rounded-full text-sm font-semibold text-[#172A5A] bg-white/60 hover:bg-white transition-all shadow-xs"
            >
              <MessageCircle className="w-4 h-4 text-[#4D8B45]" />
              <span>Hubungi Kami</span>
            </button>

            <button
              onClick={() => onOpenOrderModal()}
              className="flex items-center gap-2 px-5 py-2.5 bg-[#E83E5B] hover:bg-[#d42d4a] active:scale-95 text-white font-bold rounded-full text-sm shadow-md hover:shadow-lg transition-all duration-200"
            >
              <ShoppingBag className="w-4 h-4" />
              <span>Pesan Sekarang</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={() => onOpenOrderModal()}
              className="flex items-center gap-1.5 px-3 py-1.5 bg-[#E83E5B] text-white rounded-full text-xs font-bold shadow-xs md:hidden"
            >
              <ShoppingBag className="w-3.5 h-3.5" />
              <span>Pesan</span>
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-[#172A5A] hover:bg-[#172A5A]/5 focus:outline-none"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[60px] bg-[#FFF9EF] border-b border-[#E83E5B]/20 shadow-xl p-5 transition-all animate-in slide-in-from-top-4">
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`text-left px-4 py-2.5 rounded-xl text-base font-semibold transition-all ${
                    isActive
                      ? 'bg-[#E83E5B]/10 text-[#E83E5B]'
                      : 'text-[#172A5A] hover:bg-black/5'
                  }`}
                >
                  {link.label}
                </button>
              );
            })}
            <div className="pt-4 border-t border-gray-200/60 flex flex-col gap-2.5">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenOrderModal();
                }}
                className="w-full flex items-center justify-center gap-2 py-3 bg-[#E83E5B] text-white rounded-xl font-bold shadow-md"
              >
                <ShoppingBag className="w-4 h-4" />
                <span>Pesan Stroberi Sekarang</span>
              </button>
              <a
                href={BRAND_CONFIG.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-2.5 border border-[#172A5A]/20 text-[#172A5A] rounded-xl font-semibold bg-white/70"
              >
                <MessageCircle className="w-4 h-4 text-[#4D8B45]" />
                <span>Chat Admin WhatsApp (0818-1819-3311)</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
