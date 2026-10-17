import React from 'react';
import { ArrowRight, MapPin, Sparkles, Leaf, Clock, ShieldCheck, Heart } from 'lucide-react';

interface HeroSectionProps {
  onOpenOrderModal: () => void;
  onScrollToLocation: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onOpenOrderModal,
  onScrollToLocation,
}) => {
  return (
    <section id="beranda" className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden">
      {/* Decorative background blurs & organic shapes */}
      <div className="absolute top-12 left-1/4 w-72 h-72 bg-[#E83E5B]/10 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-40 right-10 w-80 h-80 bg-[#F28C18]/10 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-[#4D8B45]/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headlines & CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-6">
            
            {/* Tagline Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#4D8B45]/10 border border-[#4D8B45]/20 text-[#4D8B45] text-xs sm:text-sm font-bold tracking-wide uppercase">
              <span className="w-2 h-2 rounded-full bg-[#4D8B45] animate-pulse"></span>
              <span>100% LOKAL • DIPETIK HARI INI</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-heading font-black tracking-tight text-[#172A5A] leading-[1.08]">
              NIKMATI <br className="hidden sm:inline" />
              STROBERI <br />
              <span className="relative inline-block text-[#E83E5B]">
                SEGAR
                {/* Hand-drawn wavy brush underline SVG */}
                <svg
                  className="absolute -bottom-2 left-0 w-full h-3.5 text-[#E83E5B]"
                  viewBox="0 0 200 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3 10C40 3 80 12 120 7C150 3 180 9 197 6"
                    stroke="currentColor"
                    strokeWidth="4"
                    strokeLinecap="round"
                  />
                </svg>
              </span>{' '}
              SETIAP <br className="hidden sm:inline" />
              HARI!
            </h1>

            {/* Subheadline */}
            <p className="text-base sm:text-lg md:text-xl text-[#172A5A]/80 max-w-xl font-medium leading-relaxed">
              <strong className="text-[#172A5A] font-bold">BITE'S:</strong> Jaminan kualitas stroberi lokal, manis, segar, dan bernutrisi dari kebun terbaik untuk menemani setiap harimu.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-2 w-full sm:w-auto">
              <button
                onClick={onOpenOrderModal}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#E83E5B] hover:bg-[#d42d4a] text-white font-bold rounded-full text-base shadow-lg hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 cursor-pointer group"
              >
                <span>Pesan Sekarang</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={onScrollToLocation}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-4 bg-[#172A5A] hover:bg-[#203770] text-white font-bold rounded-full text-base shadow-md hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 cursor-pointer"
              >
                <MapPin className="w-4 h-4 text-[#F28C18]" />
                <span>Cari Lokasi</span>
              </button>
            </div>

            {/* Social Proof */}
            <div className="flex items-center gap-3 pt-2">
              <div className="flex -space-x-2">
                <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-[#E83E5B]/20 text-[#E83E5B] text-xs font-bold ring-2 ring-[#FFF9EF]">
                  R
                </span>
                <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-[#4D8B45]/20 text-[#4D8B45] text-xs font-bold ring-2 ring-[#FFF9EF]">
                  D
                </span>
                <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-[#F28C18]/20 text-[#F28C18] text-xs font-bold ring-2 ring-[#FFF9EF]">
                  A
                </span>
              </div>
              <p className="text-xs sm:text-sm text-[#172A5A]/80 font-medium">
                <strong className="text-[#172A5A] font-bold">2.000+ pelanggan</strong> puas dengan kesegarannya
              </p>
            </div>
          </div>

          {/* Right Column: Visual Composition matching the screenshot */}
          <div className="lg:col-span-5 relative flex justify-center items-center">
            
            {/* Sparkle doodle at top right */}
            <div className="absolute -top-6 right-6 text-[#4D8B45] select-none pointer-events-none">
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                <line x1="20" y1="5" x2="20" y2="15" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
                <line x1="20" y1="25" x2="20" y2="35" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
                <line x1="5" y1="20" x2="15" y2="20" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
                <line x1="25" y1="20" x2="35" y2="20" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
                <line x1="9" y1="9" x2="16" y2="16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                <line x1="24" y1="24" x2="31" y2="31" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </div>

            {/* Main Organic Photo Frame */}
            <div className="relative w-full max-w-md aspect-[4/3.8] p-3 rounded-[3rem] sm:rounded-[4rem] bg-white shadow-2xl border-4 border-white">
              
              <div className="relative w-full h-full overflow-hidden rounded-[2.5rem] sm:rounded-[3.5rem] bg-[#172A5A]/5">
                <img
                  src="https://images.unsplash.com/photo-1464965911861-746a04b4bca6?auto=format&fit=crop&w=1000&q=85"
                  alt="Stroberi Segar BITE'S"
                  className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent pointer-events-none"></div>
              </div>

              {/* Red Circle Pinned Badge: "Dari kebun LANGSUNG ke meja kamu" */}
              <div className="absolute -top-4 -left-4 sm:-top-5 sm:-left-6 w-28 h-28 sm:w-32 sm:h-32 bg-[#E83E5B] text-white rounded-full flex flex-col items-center justify-center text-center p-3 shadow-xl transform -rotate-12 hover:rotate-0 transition-transform">
                <span className="text-[10px] sm:text-[11px] font-medium leading-tight">Dari kebun</span>
                <span className="text-xs sm:text-sm font-black uppercase tracking-wider leading-tight">LANGSUNG</span>
                <span className="text-[10px] sm:text-[11px] font-medium leading-tight">ke meja kamu</span>
              </div>

              {/* Bottom White Card Badge: "Segar terjamin - Tanpa bahan pengawet" */}
              <div className="absolute -bottom-4 left-6 sm:left-10 bg-white/95 backdrop-blur-md px-4 py-2.5 rounded-2xl shadow-lg border border-gray-100 flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-[#4D8B45]/15 flex items-center justify-center text-[#4D8B45]">
                  <Leaf className="w-4 h-4 fill-[#4D8B45]" />
                </div>
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-[#172A5A] leading-tight">Segar terjamin</h4>
                  <p className="text-[10px] sm:text-xs text-[#172A5A]/70 font-medium">Tanpa bahan pengawet</p>
                </div>
              </div>

              {/* Playful green curved arrow doodle at bottom right */}
              <div className="absolute -bottom-8 -right-4 sm:-right-8 text-[#4D8B45] select-none pointer-events-none">
                <svg width="60" height="50" viewBox="0 0 60 50" fill="none">
                  <path
                    d="M10 10C25 40 45 42 55 35"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    fill="none"
                  />
                  <path
                    d="M48 40L56 35L54 27"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>

            </div>

          </div>

        </div>

        {/* Bottom Feature Strip (matching screenshot 1) */}
        <div className="mt-16 md:mt-24">
          <div className="bg-white rounded-3xl sm:rounded-full p-6 sm:p-5 shadow-lg shadow-[#172A5A]/5 border border-gray-100/80">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-2 divide-y sm:divide-y-0 sm:divide-x divide-gray-100">
              
              {/* Feature 1 */}
              <div className="flex items-center gap-4 px-3 sm:px-6 pt-3 sm:pt-0">
                <div className="w-12 h-12 rounded-full bg-[#4D8B45]/15 text-[#4D8B45] flex items-center justify-center shrink-0">
                  <Leaf className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-[#172A5A] text-base leading-tight">
                    Dipetik Langsung
                  </h3>
                  <p className="text-xs sm:text-sm text-[#172A5A]/70 font-medium mt-0.5">
                    Dari kebun lokal pilihan
                  </p>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="flex items-center gap-4 px-3 sm:px-6 pt-4 sm:pt-0">
                <div className="w-12 h-12 rounded-full bg-[#4D8B45]/15 text-[#4D8B45] flex items-center justify-center shrink-0">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-[#172A5A] text-base leading-tight">
                    Selalu Fresh
                  </h3>
                  <p className="text-xs sm:text-sm text-[#172A5A]/70 font-medium mt-0.5">
                    Dikirim kurang dari 24 jam
                  </p>
                </div>
              </div>

              {/* Feature 3 */}
              <div className="flex items-center gap-4 px-3 sm:px-6 pt-4 sm:pt-0">
                <div className="w-12 h-12 rounded-full bg-[#4D8B45]/15 text-[#4D8B45] flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-[#172A5A] text-base leading-tight">
                    Kualitas Premium
                  </h3>
                  <p className="text-xs sm:text-sm text-[#172A5A]/70 font-medium mt-0.5">
                    Disortir satu per satu
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
