import React, { useState } from 'react';
import timPhoto from '../assets/images/tim-bites-asli.jpeg';
import { BrandLogo } from './BrandLogo';
import { Heart, Sparkles, CheckCircle, Users, Award, Maximize2, X } from 'lucide-react';

export const AboutSection: React.FC = () => {
  const photoSrc = timPhoto;
  const [showFullPhotoModal, setShowFullPhotoModal] = useState<boolean>(false);

  return (
    <section id="tentang" className="py-20 md:py-28 relative bg-white/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Visual Collage with Original Team Photo */}
          <div className="lg:col-span-6 relative">
            <div className="relative">
              
              {/* Main Photo Card: Menampilkan foto asli tim BITE'S */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-slate-100 group">
                
                {/* Image Container with native aspect ratio display */}
                <div className="relative w-full aspect-[3/4] sm:aspect-[4/5] bg-neutral-900 overflow-hidden flex items-center justify-center">
                  <img
                    src={photoSrc}
                    alt="Foto Asli Tim & Kru BITE'S Healthy Food Salatiga"
                    className="w-full h-full object-cover object-center group-hover:scale-[1.02] transition-transform duration-500 cursor-pointer"
                    onClick={() => setShowFullPhotoModal(true)}
                    referrerPolicy="no-referrer"
                  />

                  {/* Click to expand overlay button */}
                  <button
                    onClick={() => setShowFullPhotoModal(true)}
                    className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/50 hover:bg-black/80 backdrop-blur-md text-white flex items-center justify-center transition-all opacity-80 hover:opacity-100 shadow-md cursor-pointer"
                    title="Perbesar Foto Asli"
                  >
                    <Maximize2 className="w-4 h-4" />
                  </button>
                </div>

                {/* Bottom pill badge on the photo */}
                <div className="p-4 bg-white/95 backdrop-blur-md border-t border-gray-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                  <div>
                    <span className="text-[10px] font-black uppercase tracking-wider text-[#4D8B45] block">
                      TIM RESMI BITE'S SALATIGA
                    </span>
                    <h4 className="text-xs sm:text-sm font-bold text-[#172A5A] leading-tight">
                      Keluarga & Kru BITE'S Healthy Food
                    </h4>
                  </div>
                </div>
              </div>

              {/* Overlapping Secondary Image: Fresh Strawberry Basket */}
              <div className="absolute -bottom-6 -right-6 w-2/5 aspect-square rounded-3xl overflow-hidden shadow-2xl border-4 border-white hidden sm:block bg-white">
                <img
                  src="https://images.unsplash.com/photo-1464965911861-746a04b4bca6?auto=format&fit=crop&w=600&q=80"
                  alt="Stroberi Segar Pilihan"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Floating Stat Card */}
              <div className="absolute -top-6 -left-6 bg-[#172A5A] text-white p-4 sm:p-5 rounded-2xl shadow-xl flex items-center gap-3">
                <div className="w-11 h-11 rounded-xl bg-[#E83E5B] flex items-center justify-center shrink-0">
                  <Heart className="w-5 h-5 fill-white text-white" />
                </div>
                <div>
                  <span className="block font-heading font-black text-xl sm:text-2xl leading-none">100%</span>
                  <span className="text-[11px] sm:text-xs text-gray-300 font-semibold">Kebun & Tim Lokal</span>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Narrative Story */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E83E5B]/10 text-[#E83E5B] text-xs sm:text-sm font-extrabold tracking-wide uppercase">
              <Sparkles className="w-3.5 h-3.5" />
              <span>TENTANG BRAND KAMI</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-black text-[#172A5A] tracking-tight leading-tight">
              Cerita di Balik BITE'S
            </h2>

            <p className="text-base sm:text-lg text-[#172A5A]/80 font-medium leading-relaxed">
              BITE'S (BiteBites) lahir dari kecintaan kami terhadap buah stroberi segar dan keinginan sederhana: <strong className="text-[#172A5A]">menghubungkan hasil panen kebun lokal dengan para penikmat buah di Kota Salatiga</strong> tanpa harus melewati proses pengawetan atau rantai distribusi yang berbelit-belit.
            </p>

            <div className="space-y-4 pt-2">
              <div className="flex items-start gap-3">
                <div className="w-7 h-7 rounded-full bg-[#4D8B45]/15 text-[#4D8B45] flex items-center justify-center shrink-0 mt-0.5">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-base text-[#172A5A]">Filosofi Kesegaran Murni</h4>
                  <p className="text-sm text-[#172A5A]/70 font-medium mt-0.5">
                    Kami percaya buah terbaik adalah buah yang dinikmati sedekat mungkin dengan waktu petiknya. Itulah mengapa pasokan stroberi di outlet kami selalu baru setiap pagi.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-7 h-7 rounded-full bg-[#E83E5B]/15 text-[#E83E5B] flex items-center justify-center shrink-0 mt-0.5">
                  <Award className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-base text-[#172A5A]">Standar Sortir yang Jujur</h4>
                  <p className="text-sm text-[#172A5A]/70 font-medium mt-0.5">
                    Tidak ada stroberi busuk yang kami sembunyikan di bagian bawah kemasan. Kami menyortir setiap butir dengan cermat sehingga pelanggan mendapatkan kepuasan penuh.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-7 h-7 rounded-full bg-[#F28C18]/15 text-[#F28C18] flex items-center justify-center shrink-0 mt-0.5">
                  <Users className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-base text-[#172A5A]">Tumbuh Bersama Salatiga</h4>
                  <p className="text-sm text-[#172A5A]/70 font-medium mt-0.5">
                    Kini dengan 3 titik outlet di samping Polres, BRI Nanggulan, dan Kemiri Raya, kami bangga bisa menjadi bagian dari gaya hidup sehat warga Salatiga setiap hari.
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-4 flex items-center gap-4">
              <div className="p-4 rounded-2xl bg-[#FFF9EF] border border-[#E83E5B]/20 flex items-center gap-3">
                <BrandLogo size="sm" />
                <span className="text-xs text-[#172A5A]/80 font-semibold italic">
                  "Kebaikan stroberi segar untuk hari-hari yang lebih ceria."
                </span>
              </div>
            </div>

          </div>

        </div>

      </div>

      {/* Full Photo Modal / Lightbox untuk melihat foto asli tim secara utuh */}
      {showFullPhotoModal && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in duration-200"
          onClick={() => setShowFullPhotoModal(false)}
        >
          <button
            onClick={() => setShowFullPhotoModal(false)}
            className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors z-50 cursor-pointer"
          >
            <X className="w-6 h-6" />
          </button>

          <div
            className="max-w-3xl max-h-[90vh] flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative rounded-2xl overflow-hidden max-h-[75vh] shadow-2xl bg-black">
              <img
                src={photoSrc}
                alt="Foto Utuh Tim BITE'S"
                className="max-h-[75vh] w-auto object-contain rounded-2xl"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="mt-4 text-center text-white">
              <span className="text-xs font-bold uppercase tracking-wider text-[#4D8B45]">
                DOKUMENTASI ASLI OUTLET
              </span>
              <h3 className="font-heading font-black text-xl mt-1">
                Tim & Kru BITE'S Healthy Food Salatiga
              </h3>
              <p className="text-xs text-gray-300 mt-1">
                Foto murni tanpa perubahan bersama keluarga besar outlet BITE'S
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
