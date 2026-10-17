import React, { useState, useEffect } from 'react';
import { OUTLETS, Outlet } from '../data/strawberryData';
import { MapPin, Navigation, Clock, CheckCircle2, ShoppingBag, ExternalLink, Phone } from 'lucide-react';

interface OutletsSectionProps {
  onSelectPickupOutlet: (outletName: string) => void;
}

export const OutletsSection: React.FC<OutletsSectionProps> = ({ onSelectPickupOutlet }) => {
  const [selectedOutlet, setSelectedOutlet] = useState<Outlet>(OUTLETS[0]);
  const [isOpenNow, setIsOpenNow] = useState(true);

  // Check if current time is within 06:00 - 17:00
  useEffect(() => {
    const now = new Date();
    // Assuming local WIB or client time
    const hours = now.getHours();
    // Open from 6am to 5pm (17:00)
    setIsOpenNow(hours >= 6 && hours < 17);
  }, []);

  return (
    <section id="lokasi" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#172A5A]/5 text-[#172A5A] text-xs sm:text-sm font-bold tracking-wide uppercase mb-3">
            <MapPin className="w-3.5 h-3.5 text-[#E83E5B]" />
            <span>KOTA SALATIGA, JAWA TENGAH</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-black text-[#172A5A] tracking-tight">
            Temukan Outlet BITE'S Terdekat
          </h2>
          <p className="mt-3 text-base sm:text-lg text-[#172A5A]/75 font-medium">
            Kunjungi stand fresh kami setiap hari untuk membeli langsung atau pesan sebelumnya untuk kemudahan pickup tanpa antre.
          </p>
        </div>

        {/* 3 Outlet Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {OUTLETS.map((outlet, index) => {
            const isMain = index === 0;

            return (
              <div
                key={outlet.id}
                className={`bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border flex flex-col justify-between group hover:-translate-y-1.5 ${
                  isMain ? 'border-[#E83E5B]/40 ring-2 ring-[#E83E5B]/10' : 'border-gray-100'
                }`}
              >
                <div>
                  {/* Photo with Overlay Badge */}
                  <div className="relative aspect-[16/10] w-full overflow-hidden bg-gray-100">
                    <img
                      src={outlet.image}
                      alt={outlet.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    
                    {/* Badge: Outlet Type */}
                    <div className="absolute top-3 left-3">
                      <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-black uppercase tracking-wide text-white shadow-md ${
                        isMain ? 'bg-[#E83E5B]' : 'bg-[#172A5A]'
                      }`}>
                        {outlet.tagline}
                      </span>
                    </div>

                    {/* Status Badge: Buka / Tutup */}
                    <div className="absolute bottom-3 left-3">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-white/95 backdrop-blur-md text-[#172A5A] shadow-md">
                        <span className={`w-2 h-2 rounded-full ${isOpenNow ? 'bg-emerald-500 animate-pulse' : 'bg-amber-500'}`} />
                        <span>{isOpenNow ? 'Buka Sekarang' : 'Tutup • Buka Jam 06.00'}</span>
                      </span>
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-6">
                    <div className="text-xs font-extrabold text-[#F28C18] uppercase tracking-wider mb-1">
                      {outlet.landmark}
                    </div>
                    <h3 className="font-heading font-black text-xl text-[#172A5A] mb-3 group-hover:text-[#E83E5B] transition-colors">
                      {outlet.name}
                    </h3>
                    
                    <p className="text-sm text-[#172A5A]/75 font-medium leading-relaxed mb-4 flex items-start gap-2">
                      <MapPin className="w-4 h-4 text-[#E83E5B] shrink-0 mt-0.5" />
                      <span>{outlet.address}</span>
                    </p>

                    <div className="bg-[#FFF9EF] rounded-2xl p-3.5 mb-2 border border-[#E83E5B]/10">
                      <div className="flex items-center gap-2 text-xs font-bold text-[#172A5A] mb-1">
                        <Clock className="w-4 h-4 text-[#4D8B45]" />
                        <span>Jam Operasional: {outlet.openingHours}</span>
                      </div>
                      <div className="flex items-center gap-2 text-[11px] text-[#172A5A]/70 font-medium">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#4D8B45]" />
                        <span>Stroberi segar dipasok setiap pagi</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Card Action Buttons */}
                <div className="p-6 pt-0 space-y-2.5">
                  <a
                    href={outlet.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-2xl bg-[#172A5A] hover:bg-[#203770] text-white font-bold text-sm shadow-sm transition-all duration-200 cursor-pointer group/map"
                  >
                    <Navigation className="w-4 h-4 text-[#F28C18] group-hover/map:rotate-45 transition-transform" />
                    <span>Lihat di Google Maps</span>
                    <ExternalLink className="w-3.5 h-3.5 opacity-60 ml-auto" />
                  </a>

                  <button
                    onClick={() => onSelectPickupOutlet(outlet.name)}
                    className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-2xl border border-[#E83E5B] text-[#E83E5B] hover:bg-[#E83E5B] hover:text-white font-bold text-xs transition-all duration-200 cursor-pointer"
                  >
                    <ShoppingBag className="w-3.5 h-3.5" />
                    <span>Pesan Pickup di Outlet Ini</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Info Box about Delivery */}
        <div className="mt-12 bg-white rounded-3xl p-6 md:p-8 border border-gray-100 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-[#F28C18]/15 text-[#F28C18] flex items-center justify-center shrink-0">
              <MapPin className="w-7 h-7" />
            </div>
            <div>
              <h4 className="font-heading font-black text-lg text-[#172A5A]">
                Tidak sempat ke outlet? Kami siap antar!
              </h4>
              <p className="text-sm text-[#172A5A]/70 font-medium mt-0.5">
                Layanan pengantaran langsung ke rumah / kantor untuk seluruh area Kota Salatiga.
              </p>
            </div>
          </div>
          <button
            onClick={() => onSelectPickupOutlet('Delivery ke Alamat')}
            className="w-full md:w-auto px-6 py-3 bg-[#E83E5B] hover:bg-[#d42d4a] text-white font-bold text-sm rounded-full shadow-md transition-all shrink-0 cursor-pointer"
          >
            Pesan Delivery Sekarang
          </button>
        </div>

      </div>
    </section>
  );
};
