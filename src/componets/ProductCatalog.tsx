import React, { useState } from 'react';
import { PRODUCTS, Product } from '../data/strawberryData';
import { Star, ShoppingBag, Leaf, ArrowRight, Check } from 'lucide-react';

interface ProductCatalogProps {
  onSelectProduct: (productId: string) => void;
}

export const ProductCatalog: React.FC<ProductCatalogProps> = ({ onSelectProduct }) => {
  const [activeCategory, setActiveCategory] = useState<'all' | 'fresh' | 'package' | 'frozen'>('all');

  const categories = [
    { id: 'all', label: 'Semua Produk' },
    { id: 'fresh', label: 'Stroberi Segar' },
    { id: 'package', label: 'Paket Hemat' },
    { id: 'frozen', label: 'Olahan & Beku' },
  ];

  const filteredProducts = activeCategory === 'all'
    ? PRODUCTS
    : PRODUCTS.filter((p) => p.category === activeCategory);

  const formatRupiah = (val: number) => {
    return `Rp ${val.toLocaleString('id-ID')}`;
  };

  return (
    <section id="produk" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <span className="text-xs sm:text-sm font-extrabold uppercase tracking-widest text-[#E83E5B] block mb-2">
              FAVORIT KAMU
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-black text-[#172A5A] tracking-tight">
              Produk Terlaris Kami
            </h2>
            <p className="mt-3 text-base sm:text-lg text-[#172A5A]/75 max-w-2xl font-medium">
              Pilihan stroberi lokal terbaik, dipetik segar dan siap bikin harimu lebih manis.
            </p>
          </div>

          {/* Quick link button */}
          <button
            onClick={() => setActiveCategory('all')}
            className="inline-flex items-center gap-2 text-sm font-bold text-[#172A5A] hover:text-[#E83E5B] transition-colors group cursor-pointer"
          >
            <span>Lihat semua produk</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex items-center gap-2.5 overflow-x-auto pb-4 mb-8 scrollbar-none">
          {categories.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id as any)}
                className={`px-5 py-2.5 rounded-full text-sm font-bold transition-all whitespace-nowrap cursor-pointer ${
                  isActive
                    ? 'bg-[#172A5A] text-white shadow-md'
                    : 'bg-white text-[#172A5A] border border-gray-200/80 hover:border-[#172A5A]/40'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col group hover:-translate-y-1"
            >
              {/* Product Image Box */}
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-gray-100">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />

                {/* Floating Badges */}
                <div className="absolute top-3 left-3 flex flex-wrap gap-2">
                  {product.badges.map((badge, idx) => {
                    const isGreen = badge.toUpperCase().includes('FRESH') || badge.toUpperCase().includes('ORGANIK');
                    return (
                      <span
                        key={idx}
                        className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-[11px] font-black uppercase tracking-wider text-white ${
                          isGreen ? 'bg-[#4D8B45]' : 'bg-[#F28C18]'
                        }`}
                      >
                        {isGreen && <Leaf className="w-3 h-3 fill-current" />}
                        {badge}
                      </span>
                    );
                  })}
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex flex-col flex-grow">
                {/* Rating */}
                <div className="flex items-center gap-1.5 mb-2.5">
                  <div className="flex items-center text-[#F28C18]">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-current" />
                    ))}
                  </div>
                  <span className="text-xs font-bold text-[#172A5A]/80">
                    {product.rating} ({product.reviewsCount})
                  </span>
                </div>

                {/* Title */}
                <h3 className="font-heading font-black text-xl text-[#172A5A] group-hover:text-[#E83E5B] transition-colors leading-snug">
                  {product.name}
                </h3>

                {/* Description */}
                <p className="mt-2 text-sm text-[#172A5A]/70 line-clamp-2 font-medium leading-relaxed flex-grow">
                  {product.description}
                </p>

                {/* Divider */}
                <div className="pt-5 mt-5 border-t border-gray-100 flex items-center justify-between">
                  <div>
                    <span className="text-xs text-gray-400 block font-semibold">Harga Mulai</span>
                    <div className="flex items-baseline gap-1">
                      <span className="text-xl sm:text-2xl font-black text-[#E83E5B] font-heading">
                        {formatRupiah(product.price)}
                      </span>
                      <span className="text-xs text-gray-500 font-medium">
                        {product.unit}
                      </span>
                    </div>
                  </div>

                  {/* Add / Order Button matching the red circle bag button */}
                  <button
                    onClick={() => onSelectProduct(product.id)}
                    className="w-12 h-12 rounded-2xl bg-[#E83E5B] hover:bg-[#d42d4a] active:scale-95 text-white flex items-center justify-center shadow-md hover:shadow-lg transition-all duration-200 cursor-pointer group/btn"
                    title={`Pesan ${product.name}`}
                    aria-label={`Pesan ${product.name}`}
                  >
                    <ShoppingBag className="w-5 h-5 group-hover/btn:scale-110 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner Note */}
        <div className="mt-12 text-center">
          <p className="text-sm text-[#172A5A]/70 font-medium">
            💡 Ingin pesan dalam jumlah besar / reseller / catering? Hubungi admin via WhatsApp untuk penawaran harga khusus.
          </p>
        </div>

      </div>
    </section>
  );
};
