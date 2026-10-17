import React from 'react';
import { PROMOS } from '../data/strawberryData';
import { Tag, Sparkles, ArrowRight, Clock, Gift } from 'lucide-react';

interface PromosSectionProps {
  onClaimPromo: (promoProductName?: string) => void;
}

export const PromosSection: React.FC<PromosSectionProps> = ({ onClaimPromo }) => {
  return (
    <section id="promo" className="py-20 md:py-24 relative overflow-hidden">
      {/* Decorative background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-5xl h-64 bg-[#F28C18]/10 blur-3xl rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F28C18]/15 text-[#F28C18] text-xs sm:text-sm font-extrabold tracking-wide uppercase mb-3">
            <Tag className="w-3.5 h-3.5" />
            <span>HEMAT & BERMANFAAT</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-black text-[#172A5A] tracking-tight">
            Fresh Deals & Special Offers
          </h2>
          <p className="mt-3 text-base sm:text-lg text-[#172A5A]/75 font-medium">
            Nikmati promo spesial hari ini untuk pembelian stroberi favoritmu di outlet maupun pesan antar.
          </p>
        </div>

        {/* Promo Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {PROMOS.map((promo, idx) => {
            const isRed = idx === 0;

            return (
              <div
                key={promo.id}
                className={`relative rounded-[2.5rem] p-8 sm:p-10 transition-all duration-300 shadow-md hover:shadow-xl border flex flex-col justify-between overflow-hidden group hover:-translate-y-1 ${
                  isRed
                    ? 'bg-gradient-to-br from-white via-white to-[#E83E5B]/5 border-[#E83E5B]/20'
                    : 'bg-gradient-to-br from-white via-white to-[#F28C18]/5 border-[#F28C18]/20'
                }`}
              >
                {/* Decorative corner tag */}
                <div className="absolute -top-10 -right-10 w-32 h-32 rounded-full opacity-10 bg-current pointer-events-none" />

                <div>
                  <div className="flex items-center justify-between gap-4 mb-4">
                    <span
                      className={`inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-black uppercase tracking-wider text-white ${
                        isRed ? 'bg-[#E83E5B]' : 'bg-[#F28C18]'
                      }`}
                    >
                      <Gift className="w-3.5 h-3.5" />
                      {promo.tag}
                    </span>
                    
                    <span className="text-xs font-bold text-gray-400 flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      Hari Ini
                    </span>
                  </div>

                  <h3 className="font-heading font-black text-2xl sm:text-3xl text-[#172A5A] mb-3 leading-snug">
                    {promo.title}
                  </h3>

                  <p className="text-sm sm:text-base text-[#172A5A]/80 font-medium leading-relaxed mb-6">
                    {promo.desc}
                  </p>
                </div>

                <div className="pt-6 border-t border-gray-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="text-xs text-gray-500 font-semibold">
                    📍 {promo.validUntil}
                  </div>

                  <button
                    onClick={() => onClaimPromo(promo.productPreset)}
                    className={`inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-white font-bold text-sm shadow-md hover:shadow-lg transition-all duration-200 cursor-pointer ${
                      isRed ? 'bg-[#E83E5B] hover:bg-[#d42d4a]' : 'bg-[#F28C18] hover:bg-[#d9770e]'
                    }`}
                  >
                    <span>Ambil Promo Ini</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
