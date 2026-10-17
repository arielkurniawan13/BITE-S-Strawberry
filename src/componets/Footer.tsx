import React from 'react';
import { BrandLogo } from './BrandLogo';
import { BRAND_CONFIG, OUTLETS } from '../data/strawberryData';
import { MessageCircle, Instagram, MapPin, Clock, ArrowRight, ExternalLink } from 'lucide-react';

interface FooterProps {
  onOpenOrderModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenOrderModal }) => {
  const currentYear = new Date().getFullYear();

  const handleScrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#172A5A] text-white pt-16 pb-12 relative overflow-hidden">
      {/* Decorative subtle background circle */}
      <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-[#E83E5B]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -top-20 -right-20 w-96 h-96 bg-[#4D8B45]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-white/10">
          
          {/* Brand Info (col-span-4) */}
          <div className="lg:col-span-4 space-y-5">
            <BrandLogo size="lg" theme="dark" showTagline />
            
            <p className="text-sm text-gray-300 font-medium max-w-sm leading-relaxed">
              Kesegaran lokal yang bikin setiap gigitan terasa lebih manis. Menghadirkan stroberi terbaik dari kebun pilihan ke meja masyarakat Salatiga.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-2">
              {/* WhatsApp */}
              <a
                href={BRAND_CONFIG.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white flex items-center justify-center transition-transform hover:scale-110 shadow-md"
                title="WhatsApp Resmi BITE'S"
              >
                <MessageCircle className="w-5 h-5 fill-white" />
              </a>

              {/* Instagram */}
              <a
                href={BRAND_CONFIG.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gradient-to-tr from-yellow-500 via-pink-600 to-purple-600 hover:opacity-90 text-white flex items-center justify-center transition-transform hover:scale-110 shadow-md"
                title="Instagram @bites_strawberrysalatiga"
              >
                <Instagram className="w-5 h-5" />
              </a>

              {/* TikTok */}
              <a
                href={BRAND_CONFIG.tiktokUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-black border border-white/20 hover:border-white text-white flex items-center justify-center transition-transform hover:scale-110 shadow-md"
                title="TikTok @bites.fruit"
              >
                {/* Custom TikTok SVG icon */}
                <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64c.29 0 .58.04.86.12V9.42a6.34 6.34 0 0 0-.86-.06A6.34 6.34 0 0 0 3 15.7a6.34 6.34 0 0 0 10.74 4.54V10.45a8.28 8.28 0 0 0 5.85 2.16V9.16a4.84 4.84 0 0 1 0-2.47z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Navigasi Links (col-span-2) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs font-black uppercase tracking-wider text-white/50">
              JELAJAHI
            </h4>
            <ul className="space-y-2.5 text-sm font-semibold text-gray-300">
              <li>
                <button
                  onClick={() => handleScrollTo('beranda')}
                  className="hover:text-[#E83E5B] transition-colors cursor-pointer"
                >
                  Beranda
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleScrollTo('produk')}
                  className="hover:text-[#E83E5B] transition-colors cursor-pointer"
                >
                  Menu & Produk
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleScrollTo('keunggulan')}
                  className="hover:text-[#E83E5B] transition-colors cursor-pointer"
                >
                  Keunggulan
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleScrollTo('lokasi')}
                  className="hover:text-[#E83E5B] transition-colors cursor-pointer"
                >
                  Titik Outlet
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleScrollTo('tentang')}
                  className="hover:text-[#E83E5B] transition-colors cursor-pointer"
                >
                  Tentang Kami
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleScrollTo('faq')}
                  className="hover:text-[#E83E5B] transition-colors cursor-pointer"
                >
                  FAQ
                </button>
              </li>
            </ul>
          </div>

          {/* Lokasi & Jam Operasional (col-span-3) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-black uppercase tracking-wider text-white/50">
              KUNJUNGI KAMI (SALATIGA)
            </h4>
            <div className="space-y-3 text-xs text-gray-300 font-medium">
              {OUTLETS.map((outlet, idx) => (
                <div key={outlet.id} className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 text-[#E83E5B] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-white block">
                      Outlet {idx + 1}: {outlet.landmark}
                    </span>
                    <a
                      href={outlet.mapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-white transition-colors underline inline-flex items-center gap-1 text-[11px]"
                    >
                      Buka Google Maps <ExternalLink className="w-2.5 h-2.5" />
                    </a>
                  </div>
                </div>
              ))}

              <div className="flex items-start gap-2 pt-2 border-t border-white/10">
                <Clock className="w-4 h-4 text-[#4D8B45] shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-white block">Jam Operasional</span>
                  <span className="text-gray-400">{BRAND_CONFIG.operatingHours}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Quick CTA Box matching Screenshot 3 (col-span-3) */}
          <div className="lg:col-span-3">
            <div className="bg-white/5 border border-white/10 rounded-3xl p-6 flex flex-col justify-between h-full backdrop-blur-xs">
              <div>
                <h4 className="font-heading font-black text-xl text-white mb-2 leading-snug">
                  Siap menikmati yang segar?
                </h4>
                <p className="text-xs text-gray-300 font-medium mb-6">
                  Pesan langsung via WhatsApp, tentukan outlet pickup atau minta diantar ke alamatmu.
                </p>
              </div>

              <button
                onClick={onOpenOrderModal}
                className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-4 rounded-2xl bg-[#E83E5B] hover:bg-[#d42d4a] active:scale-95 text-white font-bold text-sm shadow-lg hover:shadow-xl transition-all cursor-pointer group"
              >
                <span>Pesan via WhatsApp</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-400 font-medium">
          <p>© {currentYear} BITE'S (BiteBites). All rights reserved.</p>
          <div className="flex items-center gap-2 text-gray-300">
            <span className="w-2 h-2 rounded-full bg-[#4D8B45]"></span>
            <span>Ditanam lokal, dinikmati bersama di Salatiga.</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
