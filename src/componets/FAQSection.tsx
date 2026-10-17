import React, { useState } from 'react';
import { FAQS } from '../data/strawberryData';
import { HelpCircle, ChevronDown, MessageCircle } from 'lucide-react';

interface FAQSectionProps {
  onOpenOrderModal: () => void;
}

export const FAQSection: React.FC<FAQSectionProps> = ({ onOpenOrderModal }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 md:py-28 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#172A5A]/5 text-[#172A5A] text-xs sm:text-sm font-extrabold tracking-wide uppercase mb-3">
            <HelpCircle className="w-3.5 h-3.5 text-[#E83E5B]" />
            <span>PERTANYAAN UMUM</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-black text-[#172A5A] tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="mt-3 text-base sm:text-lg text-[#172A5A]/75 font-medium">
            Hal-hal yang sering ditanyakan seputar stroberi, cara pemesanan, dan lokasi outlet BITE'S.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className="bg-white rounded-2xl md:rounded-3xl border border-gray-100 overflow-hidden shadow-xs hover:shadow-md transition-shadow duration-200"
              >
                <button
                  type="button"
                  onClick={() => toggleAccordion(index)}
                  className="w-full text-left p-6 flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="font-heading font-bold text-base sm:text-lg text-[#172A5A]">
                    {faq.question}
                  </span>
                  <div
                    className={`w-9 h-9 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 ${
                      isOpen
                        ? 'bg-[#E83E5B] text-white rotate-180'
                        : 'bg-gray-100 text-[#172A5A]'
                    }`}
                  >
                    <ChevronDown className="w-5 h-5" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-0 animate-in fade-in slide-in-from-top-2 duration-200">
                    <div className="pt-2 border-t border-gray-100">
                      <p className="text-sm sm:text-base text-[#172A5A]/75 leading-relaxed font-medium">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Support CTA card */}
        <div className="mt-12 p-6 rounded-3xl bg-[#FFF9EF] border border-[#E83E5B]/20 text-center flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-left">
            <h4 className="font-heading font-bold text-base text-[#172A5A]">
              Punya pertanyaan lain yang belum terjawab?
            </h4>
            <p className="text-xs sm:text-sm text-[#172A5A]/70 font-medium">
              Tim ramah BITE'S siap membantu kamu kapan saja melalui WhatsApp.
            </p>
          </div>
          <button
            onClick={onOpenOrderModal}
            className="inline-flex items-center gap-2 px-6 py-2.5 bg-[#4D8B45] hover:bg-[#3f7437] text-white font-bold text-sm rounded-full shadow-md transition-all shrink-0 cursor-pointer"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Chat Admin Langsung</span>
          </button>
        </div>

      </div>
    </section>
  );
};
