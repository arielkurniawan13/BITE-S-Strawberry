import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

export const ScrollToTop: React.FC = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  if (!visible) return null;

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-6 left-6 z-40 w-11 h-11 rounded-full bg-white text-[#172A5A] hover:text-[#E83E5B] border border-gray-200/80 shadow-lg hover:shadow-xl flex items-center justify-center transition-all duration-300 hover:scale-110 cursor-pointer animate-in fade-in"
      aria-label="Kembali ke atas"
      title="Kembali ke atas"
    >
      <ArrowUp className="w-5 h-5" />
    </button>
  );
};
