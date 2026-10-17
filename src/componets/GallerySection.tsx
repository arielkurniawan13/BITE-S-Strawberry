import React, { useState } from 'react';
import { GALLERY_ITEMS, GalleryItem } from '../data/strawberryData';
import { Camera, Maximize2, X, ChevronLeft, ChevronRight, MessageSquareHeart } from 'lucide-react';

export const GallerySection: React.FC = () => {
  const [selectedPhoto, setSelectedPhoto] = useState<GalleryItem | null>(null);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'Semua Foto' },
    { id: 'Testimoni Pelanggan', label: 'Testimoni Pelanggan' },
    { id: 'Buah Segar', label: 'Buah Segar' },
    { id: 'Tim & Outlet', label: 'Tim & Outlet' },
  ];

  const filteredItems = activeCategory === 'all'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((item) => item.category === activeCategory);

  const handleOpenPhoto = (item: GalleryItem, index: number) => {
    setSelectedPhoto(item);
    setCurrentIndex(index);
  };

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    const newIdx = (currentIndex - 1 + filteredItems.length) % filteredItems.length;
    setCurrentIndex(newIdx);
    setSelectedPhoto(filteredItems[newIdx]);
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    const newIdx = (currentIndex + 1) % filteredItems.length;
    setCurrentIndex(newIdx);
    setSelectedPhoto(filteredItems[newIdx]);
  };

  return (
    <section id="galeri" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E83E5B]/10 text-[#E83E5B] text-xs sm:text-sm font-extrabold tracking-wide uppercase mb-3">
            <Camera className="w-3.5 h-3.5" />
            <span>MOMEN, KUALITAS & TESTIMONI</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-black text-[#172A5A] tracking-tight">
            A Little Taste of Freshness
          </h2>
          <p className="mt-3 text-base sm:text-lg text-[#172A5A]/75 font-medium">
            Dokumentasi buah stroberi segar BITE'S, kehangatan tim outlet, dan review asli dari pelanggan tercinta.
          </p>
        </div>

        {/* Gallery Filter Tabs */}
        <div className="flex items-center justify-center gap-2 overflow-x-auto pb-4 mb-10 scrollbar-none">
          {categories.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all whitespace-nowrap cursor-pointer ${
                  isActive
                    ? 'bg-[#E83E5B] text-white shadow-md'
                    : 'bg-white text-[#172A5A] border border-gray-200/80 hover:border-[#E83E5B]/50'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, idx) => (
            <div
              key={item.id}
              onClick={() => handleOpenPhoto(item, idx)}
              className="group relative rounded-3xl overflow-hidden aspect-[4/3] bg-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer border border-gray-100"
            >
              <img
                src={item.imageUrl}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />

              {/* Category pill indicator */}
              <div className="absolute top-4 left-4 z-10">
                <span className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-[11px] font-black uppercase tracking-wider text-white shadow-md ${
                  item.category.includes('Testimoni')
                    ? 'bg-[#25D366]'
                    : item.category.includes('Tim')
                    ? 'bg-[#172A5A]'
                    : 'bg-[#E83E5B]'
                }`}>
                  {item.category.includes('Testimoni') && <MessageSquareHeart className="w-3 h-3" />}
                  {item.category}
                </span>
              </div>

              {/* Hover overlay with caption */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-6 flex flex-col justify-end text-white">
                <h4 className="font-heading font-black text-lg leading-tight mb-1">
                  {item.title}
                </h4>
                <p className="text-xs text-white/90 line-clamp-2 font-medium">
                  {item.caption}
                </p>

                <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white">
                  <Maximize2 className="w-4 h-4" />
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      {selectedPhoto && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in duration-200"
          onClick={() => setSelectedPhoto(null)}
        >
          {/* Close button */}
          <button
            onClick={() => setSelectedPhoto(null)}
            className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors z-50 cursor-pointer"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Navigation Controls */}
          <button
            onClick={handlePrev}
            className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-white/30 text-white flex items-center justify-center transition-colors z-50 cursor-pointer"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={handleNext}
            className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-white/30 text-white flex items-center justify-center transition-colors z-50 cursor-pointer"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Content container */}
          <div
            className="max-w-4xl max-h-[85vh] flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative rounded-2xl overflow-hidden max-h-[68vh] shadow-2xl bg-black">
              <img
                src={selectedPhoto.imageUrl}
                alt={selectedPhoto.title}
                className="max-h-[68vh] w-auto object-contain rounded-2xl"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="mt-4 text-center text-white max-w-xl">
              <span className="text-xs font-bold uppercase tracking-wider text-[#F28C18]">
                {selectedPhoto.category} • {currentIndex + 1} dari {filteredItems.length}
              </span>
              <h3 className="font-heading font-black text-xl sm:text-2xl mt-1">
                {selectedPhoto.title}
              </h3>
              <p className="text-xs sm:text-sm text-gray-300 mt-1 font-medium">
                {selectedPhoto.caption}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
