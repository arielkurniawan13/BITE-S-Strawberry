import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { ProductCatalog } from './components/ProductCatalog';
import { StoryBanner } from './components/StoryBanner';
import { AdvantagesSection } from './components/AdvantagesSection';
import { OutletsSection } from './components/OutletsSection';
import { PromosSection } from './components/PromosSection';
import { AboutSection } from './components/AboutSection';
import { GallerySection } from './components/GallerySection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { FAQSection } from './components/FAQSection';
import { Footer } from './components/Footer';
import { OrderModal } from './components/OrderModal';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { ScrollToTop } from './components/ScrollToTop';
import { PRODUCTS } from './data/strawberryData';

export default function App() {
  const [isOrderModalOpen, setIsOrderModalOpen] = useState(false);
  const [selectedProductId, setSelectedProductId] = useState<string | undefined>(undefined);
  const [selectedOutlet, setSelectedOutlet] = useState<string | undefined>(undefined);
  const [selectedMethod, setSelectedMethod] = useState<'pickup' | 'delivery'>('pickup');

  const handleOpenOrderModal = (productId?: string) => {
    setSelectedProductId(productId || PRODUCTS[0].id);
    setSelectedOutlet(undefined);
    setSelectedMethod('pickup');
    setIsOrderModalOpen(true);
  };

  const handleSelectProduct = (productId: string) => {
    setSelectedProductId(productId);
    setSelectedOutlet(undefined);
    setIsOrderModalOpen(true);
  };

  const handleSelectPickupOutlet = (outletName: string) => {
    if (outletName === 'Delivery ke Alamat') {
      setSelectedMethod('delivery');
      setSelectedOutlet(undefined);
    } else {
      setSelectedMethod('pickup');
      setSelectedOutlet(outletName);
    }
    setIsOrderModalOpen(true);
  };

  const handleClaimPromo = (presetProductName?: string) => {
    if (presetProductName) {
      const match = PRODUCTS.find((p) => p.name.toLowerCase().includes(presetProductName.toLowerCase()));
      if (match) {
        setSelectedProductId(match.id);
      }
    }
    setIsOrderModalOpen(true);
  };

  const handleScrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#FFF9EF] text-[#172A5A] flex flex-col font-sans selection:bg-[#E83E5B]/20 selection:text-[#E83E5B]">
      {/* Top Navigation */}
      <Navbar onOpenOrderModal={handleOpenOrderModal} />

      {/* Main Content Sections */}
      <main className="flex-grow">
        {/* 1. Hero Section */}
        <HeroSection
          onOpenOrderModal={() => handleOpenOrderModal()}
          onScrollToLocation={() => handleScrollToSection('lokasi')}
        />

        {/* 2. Product Catalog */}
        <ProductCatalog onSelectProduct={handleSelectProduct} />

        {/* 3. Story Banner (Signature Green Banner) */}
        <StoryBanner onLearnMore={() => handleScrollToSection('tentang')} />

        {/* 4. Keunggulan / Why Choose Us */}
        <AdvantagesSection />

        {/* 5. Lokasi Outlet (Salatiga) */}
        <OutletsSection onSelectPickupOutlet={handleSelectPickupOutlet} />

        {/* 6. Promos & Hemat */}
        <PromosSection onClaimPromo={handleClaimPromo} />

        {/* 7. Tentang Kami */}
        <AboutSection />

        {/* 8. Galeri Foto & Lightbox */}
        <GallerySection />

        {/* 9. Testimoni Pelanggan */}
        <TestimonialsSection />

        {/* 10. FAQ Accordion */}
        <FAQSection onOpenOrderModal={() => handleOpenOrderModal()} />
      </main>

      {/* Footer */}
      <Footer onOpenOrderModal={() => handleOpenOrderModal()} />

      {/* Interactive WhatsApp Order Modal */}
      <OrderModal
        isOpen={isOrderModalOpen}
        onClose={() => setIsOrderModalOpen(false)}
        initialProductId={selectedProductId}
        initialMethod={selectedMethod}
        initialOutlet={selectedOutlet}
      />

      {/* Floating Helpers */}
      <FloatingWhatsApp onOpenOrderModal={() => handleOpenOrderModal()} />
      <ScrollToTop />
    </div>
  );
}
