import React, { useState } from 'react';
import { TESTIMONIALS, Testimonial } from '../data/strawberryData';
import { Star, MessageCircle, CheckCheck, Maximize2, X, Sparkles, ShieldCheck } from 'lucide-react';

export const TestimonialsSection: React.FC = () => {
  const [selectedPhoto, setSelectedPhoto] = useState<{
    imageUrl: string;
    title: string;
    comment: string;
    date: string;
  } | null>(null);

  return (
    <section id="testimoni" className="py-20 md:py-28 relative bg-white/60 overflow-hidden">
      {/* Decorative background glows */}
      <div className="absolute top-1/3 -left-20 w-80 h-80 bg-[#E83E5B]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 -right-20 w-80 h-80 bg-[#4D8B45]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#25D366]/15 text-[#1b8743] text-xs sm:text-sm font-extrabold tracking-wide uppercase mb-3">
            <MessageCircle className="w-4 h-4 fill-current" />
            <span>BUKTI CHAT ASLI WHATSAPP</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-black text-[#172A5A] tracking-tight">
            Kata Mereka tentang BITE'S
          </h2>
          <p className="mt-3 text-base sm:text-lg text-[#172A5A]/75 font-medium">
            Tangkapan layar dan testimoni langsung dari para pelanggan yang sudah menikmati manis dan segarnya stroberi BITE'S.
          </p>
        </div>

        {/* Testimonials Grid: WhatsApp Style Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {TESTIMONIALS.map((testi, idx) => (
            <div
              key={testi.id}
              className="bg-white rounded-[2rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 border border-gray-100 flex flex-col justify-between group hover:-translate-y-1.5"
            >
              <div>
                {/* WhatsApp Chat Header */}
                <div className="bg-[#172A5A] text-white p-4 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="relative">
                      <img
                        src={testi.avatar}
                        alt={testi.name}
                        className="w-10 h-10 rounded-full object-cover border-2 border-white/20"
                        referrerPolicy="no-referrer"
                      />
                      <span className="absolute bottom-0 right-0 w-3 h-3 bg-[#25D366] border-2 border-[#172A5A] rounded-full" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-white leading-tight">
                        {testi.name}
                      </h4>
                      <div className="flex items-center gap-1.5 text-[11px] text-gray-300">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#25D366]" />
                        <span>{testi.location} • {testi.date}</span>
                      </div>
                    </div>
                  </div>

                  <span className="text-[11px] font-bold bg-white/15 px-2.5 py-1 rounded-full text-white">
                    {testi.tag || 'Terverifikasi'}
                  </span>
                </div>

                {/* Customer Strawberry Photo */}
                {testi.photoUrl && (
                  <div className="relative aspect-[4/3] bg-gray-100 overflow-hidden cursor-pointer group/img"
                       onClick={() => setSelectedPhoto({
                         imageUrl: testi.photoUrl!,
                         title: testi.productBought,
                         comment: testi.comment,
                         date: testi.date
                       })}>
                    <img
                      src={testi.photoUrl}
                      alt={`Foto Stroberi dari ${testi.name}`}
                      className="w-full h-full object-cover group-hover/img:scale-105 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                    
                    {/* Hover overlay for zoom */}
                    <div className="absolute inset-0 bg-black/30 opacity-0 group-hover/img:opacity-100 transition-opacity flex items-center justify-center text-white font-bold text-xs gap-1.5">
                      <Maximize2 className="w-4 h-4" />
                      <span>Lihat Foto Penuh</span>
                    </div>

                    <div className="absolute bottom-3 left-3 bg-black/60 backdrop-blur-xs text-white text-[11px] font-semibold px-2.5 py-1 rounded-lg">
                      📸 Foto dari Pelanggan
                    </div>
                  </div>
                )}

                {/* WhatsApp Chat Messages Body */}
                <div className="p-5 space-y-3 bg-[#F4F1EA]/50">
                  
                  {/* Rating Stars */}
                  <div className="flex items-center justify-between pb-1">
                    <div className="flex items-center text-[#F28C18]">
                      {[...Array(testi.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-current" />
                      ))}
                    </div>
                    <span className="text-xs font-bold text-[#4D8B45] flex items-center gap-1">
                      <ShieldCheck className="w-3.5 h-3.5" />
                      {testi.productBought}
                    </span>
                  </div>

                  {/* Customer Message Bubble (Gray/White) */}
                  <div className="flex flex-col items-start">
                    <div className="relative bg-white text-[#172A5A] p-3.5 rounded-2xl rounded-tl-xs shadow-xs max-w-[90%] border border-gray-100">
                      <p className="text-xs sm:text-sm font-semibold leading-relaxed">
                        "{testi.comment}"
                      </p>
                      <div className="text-[10px] text-gray-400 text-right mt-1 font-medium">
                        {testi.date}
                      </div>
                    </div>
                  </div>

                  {/* Admin Reply Bubble (Light Green) */}
                  {testi.adminReply && (
                    <div className="flex flex-col items-end">
                      <div className="relative bg-[#D9FDD3] text-[#111B21] p-3.5 rounded-2xl rounded-tr-xs shadow-xs max-w-[90%] border border-[#C5F3BD]">
                        <span className="text-[10px] font-black uppercase tracking-wider text-[#1b8743] block mb-0.5">
                          Admin BITE'S
                        </span>
                        <p className="text-xs sm:text-sm font-medium leading-relaxed">
                          {testi.adminReply}
                        </p>
                        <div className="text-[10px] text-[#1b8743] flex items-center justify-end gap-1 mt-1 font-medium">
                          <span>Dibalas</span>
                          <CheckCheck className="w-3.5 h-3.5 text-[#53bdeb]" />
                        </div>
                      </div>
                    </div>
                  )}

                </div>
              </div>

              {/* Bottom footer badge */}
              <div className="px-5 py-3 bg-white border-t border-gray-100 flex items-center justify-between text-xs font-bold text-[#172A5A]">
                <span className="text-gray-400 text-[11px]">Chat Resmi WhatsApp</span>
                <span className="text-[#E83E5B]">⭐ 100% Kepuasan Nyata</span>
              </div>
            </div>
          ))}
        </div>

        {/* Trust summary note */}
        <div className="mt-14 text-center">
          <div className="inline-flex flex-wrap items-center justify-center gap-3 bg-white px-6 py-3.5 rounded-full border border-gray-100 shadow-sm text-xs sm:text-sm font-semibold text-[#172A5A]">
            <span className="flex text-[#F28C18]">★★★★★</span>
            <span>Semua testimoni di atas merupakan ulasan asli dari pelanggan WhatsApp BITE'S di Salatiga tanpa rekayasa.</span>
          </div>
        </div>

      </div>

      {/* Lightbox Modal untuk melihat foto testimoni pelanggan dalam ukuran penuh */}
      {selectedPhoto && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in duration-200"
          onClick={() => setSelectedPhoto(null)}
        >
          <button
            onClick={() => setSelectedPhoto(null)}
            className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors z-50 cursor-pointer"
          >
            <X className="w-6 h-6" />
          </button>

          <div
            className="max-w-2xl max-h-[90vh] flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative rounded-2xl overflow-hidden max-h-[72vh] shadow-2xl bg-black">
              <img
                src={selectedPhoto.imageUrl}
                alt={selectedPhoto.title}
                className="max-h-[72vh] w-auto object-contain rounded-2xl"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="mt-4 text-center text-white">
              <span className="text-xs font-bold uppercase tracking-wider text-[#F28C18]">
                FOTO TESTIMONI PELANGGAN • {selectedPhoto.date}
              </span>
              <h3 className="font-heading font-black text-xl mt-1">
                "{selectedPhoto.comment}"
              </h3>
              <p className="text-xs text-gray-300 mt-1">
                {selectedPhoto.title} — BITE'S Salatiga
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
