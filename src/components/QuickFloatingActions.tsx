import React, { useState, useEffect } from 'react';
import { Phone, MessageSquare, ArrowUp, Zap } from 'lucide-react';
import { BUSINESS_INFO } from '../data/businessData';

interface QuickActionsProps {
  onOpenOrderModal: (size?: string) => void;
}

export const QuickFloatingActions: React.FC<QuickActionsProps> = ({ onOpenOrderModal }) => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Desktop Floating Actions */}
      <div className="hidden sm:flex fixed bottom-6 right-6 z-40 flex-col items-end gap-3 pointer-events-auto">
        {/* Scroll to Top */}
        {showScrollTop && (
          <button
            onClick={scrollToTop}
            className="p-3 rounded-full bg-white text-[#14422E] shadow-luxury-md border border-[#DCD2C0] hover:bg-[#FAF8F4] transition-all hover:scale-110 active:scale-95"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-4 h-4 text-[#C4841D]" />
          </button>
        )}

        {/* WhatsApp Quick Action */}
        <a
          href={BUSINESS_INFO.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-4 py-3 rounded-full bg-[#25D366] text-white shadow-luxury-md hover:bg-[#20BE5C] transition-all hover:scale-105 active:scale-95 border border-white/20 group"
          aria-label="Chat on WhatsApp"
        >
          <MessageSquare className="w-5 h-5" />
          <span className="text-xs font-bold tracking-wide">
            WhatsApp Order
          </span>
        </a>
      </div>

      {/* Mobile-First Fixed Bottom Navigation Bar (Ultra-Minimalist & 1-Tap Accessible) */}
      <div className="sm:hidden fixed bottom-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-xl border-t border-[#DCD2C0] px-3 py-2 shadow-[0_-4px_20px_rgba(0,0,0,0.08)]">
        <div className="grid grid-cols-3 gap-2 items-center">
          
          {/* 1-Tap Call */}
          <a
            href={`tel:${BUSINESS_INFO.rawPhone}`}
            className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-[#FAF8F4] active:bg-[#EAE3D5] text-[#14422E] border border-[#DCD2C0] transition-colors"
          >
            <Phone className="w-4 h-4 text-[#14422E] mb-0.5" />
            <span className="text-[10px] font-bold">Call Now</span>
          </a>

          {/* 1-Tap WhatsApp */}
          <a
            href={BUSINESS_INFO.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-[#25D366] active:bg-[#20BE5C] text-white transition-colors shadow-xs"
          >
            <MessageSquare className="w-4 h-4 text-white mb-0.5" />
            <span className="text-[10px] font-bold">WhatsApp</span>
          </a>

          {/* 1-Tap Book Modal */}
          <button
            onClick={() => onOpenOrderModal()}
            className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-gradient-to-r from-[#14422E] to-[#1D5A3F] active:brightness-110 text-white transition-colors shadow-xs"
          >
            <Zap className="w-4 h-4 text-[#E59C24] mb-0.5" />
            <span className="text-[10px] font-bold">Book Refill</span>
          </button>

        </div>
      </div>

      {/* Padding space for mobile bottom bar */}
      <div className="sm:hidden h-14"></div>
    </>
  );
};
