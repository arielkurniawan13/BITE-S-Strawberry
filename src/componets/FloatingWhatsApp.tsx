import React, { useState } from 'react';
import { BRAND_CONFIG } from '../data/strawberryData';
import { MessageCircle, X, ShoppingBag, Send } from 'lucide-react';

interface FloatingWhatsAppProps {
  onOpenOrderModal: () => void;
}

export const FloatingWhatsApp: React.FC<FloatingWhatsAppProps> = ({ onOpenOrderModal }) => {
  const [showTooltip, setShowTooltip] = useState(true);

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-2">
      {/* Speech bubble */}
      {showTooltip && (
        <div className="relative bg-white text-[#172A5A] px-4 py-2.5 rounded-2xl shadow-xl border border-gray-100 max-w-xs animate-in fade-in slide-in-from-bottom-2 duration-300 flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-[#25D366] animate-ping shrink-0" />
          <p className="text-xs font-bold leading-tight">
            Hai! Mau pesan stroberi segar hari ini? 🍓
          </p>
          <button
            onClick={() => setShowTooltip(false)}
            className="text-gray-400 hover:text-gray-600 ml-1 p-0.5 rounded-md"
            aria-label="Tutup pesan"
          >
            <X className="w-3.5 h-3.5" />
          </button>
          
          {/* Little arrow at bottom */}
          <div className="absolute -bottom-1.5 right-6 w-3 h-3 bg-white rotate-45 border-r border-b border-gray-100" />
        </div>
      )}

      {/* Main floating action buttons */}
      <div className="flex items-center gap-2">
        <button
          onClick={onOpenOrderModal}
          className="group flex items-center gap-2.5 px-4 py-3 bg-[#E83E5B] hover:bg-[#d42d4a] active:scale-95 text-white font-bold text-xs rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 cursor-pointer hidden sm:flex"
        >
          <ShoppingBag className="w-4 h-4" />
          <span>Pesan Cepat</span>
        </button>

        <a
          href={BRAND_CONFIG.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="relative w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#20ba59] active:scale-95 text-white flex items-center justify-center shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 cursor-pointer"
          title="Chat WhatsApp Resmi BITE'S"
          aria-label="Chat WhatsApp Resmi"
        >
          <span className="absolute -top-1 -right-1 w-4 h-4 bg-[#E83E5B] border-2 border-white rounded-full flex items-center justify-center text-[9px] font-black text-white">
            1
          </span>
          <MessageCircle className="w-7 h-7 fill-white" />
        </a>
      </div>
    </div>
  );
};
