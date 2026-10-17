import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

interface StoryBannerProps {
  onLearnMore: () => void;
}

export const StoryBanner: React.FC<StoryBannerProps> = ({ onLearnMore }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="relative overflow-hidden rounded-[2.5rem] bg-[#4D8B45] text-white p-8 sm:p-12 md:p-14 shadow-xl">
        {/* Decorative background curves */}
        <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-white/10 rounded-full blur-2xl pointer-events-none" />
        <div className="absolute top-0 right-1/3 w-64 h-64 bg-[#3F7437] rounded-full blur-xl pointer-events-none -z-0" />

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Text */}
          <div className="lg:col-span-7 space-y-3">
            <span className="text-xs sm:text-sm font-extrabold tracking-widest uppercase text-white/80 block">
              CERITA DARI KEBUN
            </span>
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-heading font-black tracking-tight leading-tight">
              Tumbuh dengan cinta, <br />
              sampai ke tanganmu.
            </h3>
          </div>

          {/* Right Text & CTA Button */}
          <div className="lg:col-span-5 flex flex-col items-start lg:items-end justify-between space-y-6">
            <p className="text-sm sm:text-base text-white/90 font-medium leading-relaxed max-w-md lg:text-left">
              Kami bermitra langsung dengan petani lokal untuk menghadirkan stroberi yang lebih segar sekaligus membantu kebun-kebun kecil terus bertumbuh.
            </p>
            <button
              onClick={onLearnMore}
              className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full border-2 border-white/80 text-white font-bold text-sm hover:bg-white hover:text-[#4D8B45] transition-all duration-300 shadow-sm cursor-pointer group"
            >
              <span>Kenali kebun kami</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};
