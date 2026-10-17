import React from 'react';
import { ADVANTAGES } from '../data/strawberryData';
import { Sprout, CheckCheck, Coins, Clock, Sparkles } from 'lucide-react';

export const AdvantagesSection: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Sprout':
        return <Sprout className="w-8 h-8 text-[#4D8B45]" />;
      case 'CheckCheck':
        return <CheckCheck className="w-8 h-8 text-[#E83E5B]" />;
      case 'Coins':
        return <Coins className="w-8 h-8 text-[#F28C18]" />;
      case 'Clock':
        return <Clock className="w-8 h-8 text-[#172A5A]" />;
      default:
        return <Sparkles className="w-8 h-8 text-[#E83E5B]" />;
    }
  };

  const getBgColor = (iconName: string) => {
    switch (iconName) {
      case 'Sprout':
        return 'bg-[#4D8B45]/10';
      case 'CheckCheck':
        return 'bg-[#E83E5B]/10';
      case 'Coins':
        return 'bg-[#F28C18]/10';
      case 'Clock':
        return 'bg-[#172A5A]/10';
      default:
        return 'bg-pink-50';
    }
  };

  return (
    <section id="keunggulan" className="py-20 md:py-24 relative bg-white/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs sm:text-sm font-extrabold uppercase tracking-widest text-[#4D8B45] block mb-2">
            STANDAR KUALITAS KAMI
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-black text-[#172A5A] tracking-tight">
            Kenapa Pilih BITE'S?
          </h2>
          <p className="mt-3 text-base sm:text-lg text-[#172A5A]/75 font-medium">
            Komitmen kami untuk selalu menghadirkan stroberi terbaik setiap hari langsung ke tangan kamu.
          </p>
        </div>

        {/* 4 Advantage Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {ADVANTAGES.map((adv, index) => (
            <div
              key={adv.id}
              className="bg-white rounded-3xl p-7 shadow-xs hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col justify-between group hover:-translate-y-1.5"
            >
              <div>
                <div className={`w-16 h-16 rounded-2xl ${getBgColor(adv.icon)} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  {getIcon(adv.icon)}
                </div>
                <span className="text-xs font-bold text-[#E83E5B] tracking-wider uppercase block mb-1">
                  0{index + 1}. {adv.subtitle}
                </span>
                <h3 className="text-xl font-heading font-black text-[#172A5A] mb-3">
                  {adv.title}
                </h3>
                <p className="text-sm text-[#172A5A]/70 leading-relaxed font-medium">
                  {adv.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-gray-50 flex items-center text-xs font-bold text-[#4D8B45]">
                <span>Terjamin 100% Alami</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
