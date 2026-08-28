import React from 'react';
import { Phone, MapPin, MessageSquare, ArrowUpRight, Shield, Award } from 'lucide-react';
import { BUSINESS_INFO, CYLINDER_PRODUCTS } from '../data/businessData';

interface FooterProps {
  onOpenOrderModal: (size?: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenOrderModal }) => {
  return (
    <footer className="bg-gradient-to-b from-[#112F21] to-[#0A1F16] text-white pt-12 sm:pt-16 pb-20 sm:pb-12 border-t border-[#C4841D]/35 relative overflow-hidden">
      
      {/* Ambient Glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#C4841D]/10 rounded-full blur-3xl -z-0 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-left">
        
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 pb-10 border-b border-white/15">
          
          {/* Brand Info */}
          <div className="lg:col-span-5 space-y-3.5">
            <div className="flex items-center gap-2.5">
              <img
                src="/images/balaji_gas_logo.svg"
                alt="Balaji Gas Logo"
                className="w-10 h-10 object-contain shadow-md rounded-xl"
              />
              <div>
                <div className="font-serif font-bold text-xl text-white tracking-tight">
                  {BUSINESS_INFO.brandName}
                </div>
                <div className="text-[10px] text-[#F4D388] font-semibold tracking-wider uppercase">
                  {BUSINESS_INFO.dealerTitle} • Prop: {BUSINESS_INFO.proprietor}
                </div>
              </div>
            </div>

            <p className="text-xs text-white/80 leading-relaxed max-w-sm">
              Official authorized Super Gas dealer dedicated to safe, dependable, and high-efficiency LPG gas distribution. Delivering 5kg to 450kg cylinders across Delhi NCR.
            </p>

            <div className="flex flex-wrap items-center gap-2 pt-1">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 border border-[#C4841D]/40 text-[10px] text-[#F4D388] font-bold">
                <Award className="w-3 h-3" />
                <span>Your Safety Our Priority</span>
              </div>
              <div className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-[10px] text-white/90 font-medium">
                <span>5-Star Delivery Rating</span>
              </div>
            </div>

            {/* Tagline */}
            <div className="pt-2 text-xs italic font-serif text-[#F4D388]/90">
              “More Power. Everyday Confidence.”
            </div>
          </div>

          {/* Quick Links: 5 Cylinders */}
          <div className="lg:col-span-3 space-y-2.5">
            <div className="text-xs font-bold uppercase tracking-widest text-[#F4D388]">
              Cylinder Capacities
            </div>
            <ul className="space-y-1.5 text-xs text-white/80">
              {CYLINDER_PRODUCTS.map((cyl) => (
                <li key={cyl.id}>
                  <button
                    onClick={() => onOpenOrderModal(cyl.size)}
                    className="hover:text-[#F4D388] hover:underline flex items-center justify-between w-full py-0.5 transition-colors group"
                  >
                    <span>{cyl.size} ({cyl.name.split(' ')[0]} LPG)</span>
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity text-[#F4D388]" />
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Hub Details */}
          <div className="lg:col-span-4 space-y-2.5">
            <div className="text-xs font-bold uppercase tracking-widest text-[#F4D388]">
              Distribution Hub
            </div>

            <div className="space-y-2 text-xs text-white/80">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#F4D388] shrink-0 mt-0.5" />
                <span>{BUSINESS_INFO.address}</span>
              </div>

              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#F4D388] shrink-0" />
                <a href={`tel:${BUSINESS_INFO.rawPhone}`} className="hover:text-[#F4D388] font-mono font-bold">
                  {BUSINESS_INFO.phone} (Neeraj Dabas)
                </a>
              </div>

              <div className="flex items-center gap-2">
                <MessageSquare className="w-4 h-4 text-[#25D366] shrink-0" />
                <a
                  href={BUSINESS_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#25D366] font-semibold text-[#25D366]"
                >
                  Direct WhatsApp Refill Booking
                </a>
              </div>
            </div>

            {/* Quick Action Buttons */}
            <div className="pt-2 flex items-center gap-2">
              <button
                onClick={() => onOpenOrderModal()}
                className="flex-1 py-2 px-3 rounded-xl bg-gradient-to-r from-[#C4841D] to-[#E59C24] text-[#181F1C] text-xs font-bold uppercase tracking-wider hover:brightness-110 transition-all shadow-sm"
              >
                Book Cylinder
              </button>

              <a
                href={`tel:${BUSINESS_INFO.rawPhone}`}
                className="py-2 px-3 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-semibold transition-colors border border-white/20"
              >
                Call Now
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Legal & Accreditations */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-[11px] text-white/60 gap-3 text-center sm:text-left">
          <div>
            © {new Date().getFullYear()} {BUSINESS_INFO.brandName} (Proprietor: {BUSINESS_INFO.proprietor}). All Rights Reserved.
          </div>

          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1 text-[#F4D388]">
              {BUSINESS_INFO.dealerTitle} <Shield className="w-3 h-3" />
            </span>
            <span>•</span>
            <span>Pooth Khurd, Delhi 110039</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
