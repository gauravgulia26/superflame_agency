import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  ShieldCheck, 
  IndianRupee, 
  Truck, 
  Handshake, 
  Phone, 
  ArrowRight, 
  Sparkles, 
  CheckCircle2, 
  Flame,
  Award
} from 'lucide-react';
import { BUSINESS_INFO, CYLINDER_PRODUCTS } from '../data/businessData';

interface HeroSectionProps {
  onOpenOrderModal: (cylinderSize?: string) => void;
  onSelectProduct: (cylinderId: string) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenOrderModal, onSelectProduct }) => {
  const [hoveredCyl, setHoveredCyl] = useState<string | null>(null);

  const pillarIcons: Record<string, React.ReactNode> = {
    ShieldCheck: <ShieldCheck className="w-5 h-5 text-[#14422E]" />,
    IndianRupee: <IndianRupee className="w-5 h-5 text-[#C4841D]" />,
    Truck: <Truck className="w-5 h-5 text-[#0B3B70]" />,
    Handshake: <Handshake className="w-5 h-5 text-[#14422E]" />
  };

  return (
    <section id="home" className="relative pt-2 pb-8 sm:pt-6 sm:pb-20 overflow-hidden warm-radial-mesh">
      
      {/* Ambient Lighting */}
      <div className="absolute top-6 left-6 w-60 sm:w-96 h-60 sm:h-96 bg-[#C4841D]/15 rounded-full blur-3xl -z-10 pointer-events-none" />
      <div className="absolute top-1/3 right-6 w-60 sm:w-96 h-60 sm:h-96 bg-[#14422E]/10 rounded-full blur-3xl -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-10 items-center">
          
          {/* Left Column: Heading & CTAs */}
          <motion.div 
            className="lg:col-span-7 space-y-3 sm:space-y-5 text-left"
            initial={{ opacity: 0, scale: 0.96, filter: 'blur(6px)', y: 15 }}
            animate={{ opacity: 1, scale: 1, filter: 'blur(0px)', y: 0 }}
            transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
          >
            
            {/* Accreditation Badges */}
            <div className="flex flex-wrap items-center gap-2">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#E2EFE7] border border-[#14422E]/25 text-[#14422E] text-[11px] sm:text-xs font-bold tracking-wide shadow-xs">
                <span className="w-2 h-2 rounded-full bg-[#14422E] animate-pulse"></span>
                <span>SUPER GAS AUTH. DEALER</span>
              </div>

              <div className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-[#FAF0DC] border border-[#C4841D]/40 text-[#9A6410] text-[11px] sm:text-xs font-bold shadow-xs">
                <Sparkles className="w-3 h-3 text-[#C4841D]" />
                <span>Balaji Gas • {BUSINESS_INFO.proprietor}</span>
              </div>
            </div>

            {/* Headline */}
            <div className="space-y-1 sm:space-y-2">
              <h1 className="font-serif text-2xl sm:text-4xl md:text-5xl lg:text-[48px] text-[#181F1C] font-bold tracking-tight leading-[1.18] sm:leading-[1.12]">
                More Power. <br className="sm:inline" />
                <span className="italic font-normal font-serif text-[#14422E]">Everyday</span>{' '}
                <span className="gold-heading-text font-serif">Confidence.</span>
              </h1>
              
              {/* Minimalist 1-liner on Mobile, detailed on PC */}
              <p className="sm:hidden text-xs text-[#5A6660] leading-relaxed">
                Authorized Super Gas supply by <strong className="text-[#181F1C]">Balaji Gas</strong> at <strong className="text-[#181F1C]">{BUSINESS_INFO.shortAddress}</strong>. 5kg to 47.5kg cylinders.
              </p>
              <p className="hidden sm:block text-sm sm:text-base text-[#5A6660] max-w-2xl font-normal leading-relaxed">
                Official authorized Super Gas dealer in <strong className="text-[#181F1C] font-bold">Pooth Khurd, Delhi 110039</strong>. Premium certified LPG cylinder supply across all 4 capacities—from <strong className="text-[#14422E] font-bold">5 kg compact cylinders</strong> to <strong className="text-[#14422E] font-bold">47.5 kg industrial LOT cylinders</strong>.
              </p>
            </div>

            {/* Value Checkmarks (PC Only) */}
            <div className="hidden sm:grid grid-cols-2 gap-2 text-xs text-[#2D3833] font-medium pt-1">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#14422E] shrink-0" />
                <span>Super Gas Commercial Bulk Supply</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#14422E] shrink-0" />
                <span>100% Net Weight & Safety Inspected</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#14422E] shrink-0" />
                <span>Priority Delhi NCR Logistics</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#14422E] shrink-0" />
                <span>Factory Tamper-Proof Security Seals</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 pt-1 sm:pt-2">
              <button
                onClick={() => onOpenOrderModal()}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-[#14422E] via-[#1D5A3F] to-[#0B3B70] text-white text-xs font-bold uppercase tracking-wider shadow-luxury-md hover:brightness-105 active:scale-[0.98] transition-all duration-200 border border-[#C4841D]/40"
              >
                <span>Request LPG Supply</span>
                <ArrowRight className="w-4 h-4 text-[#E59C24]" />
              </button>

              <a
                href={`tel:${BUSINESS_INFO.rawPhone}`}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-white hover:bg-[#FAF8F4] text-[#14422E] text-xs font-bold border border-[#DCD2C0] shadow-luxury-sm active:scale-[0.98] transition-colors"
              >
                <Phone className="w-4 h-4 text-[#C4841D]" />
                <span>Call {BUSINESS_INFO.phone}</span>
              </a>
            </div>

            {/* Commercial Bulk Banner (Desktop Only) */}
            <div className="hidden sm:flex p-3.5 rounded-2xl luxury-card border border-[#C4841D]/35 items-center justify-between shadow-luxury-sm">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-xl bg-gradient-to-br from-[#14422E] to-[#0B3B70] text-white shadow-xs">
                  <Flame className="w-4 h-4 text-[#E59C24] animate-pulse" />
                </div>
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-[#14422E]">
                    Commercial Bulk & Manifold Supply
                  </div>
                  <div className="text-[11px] text-[#5A6660] font-medium">
                    Best Rates • Fast Delivery for Restaurants & Industrial Plants
                  </div>
                </div>
              </div>
              <button
                onClick={() => onOpenOrderModal('47.5 KG')}
                className="text-xs font-bold text-[#9A6410] hover:underline"
              >
                Bulk Inquiry →
              </button>
            </div>

          </motion.div>

          {/* Right Column: Super Gas Group Image (Uncut, Fitted Perfectly) */}
          <motion.div 
            className="lg:col-span-5 relative mt-1 lg:mt-0"
            initial={{ opacity: 0, scale: 0.94, filter: 'blur(8px)' }}
            animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="relative luxury-card rounded-2xl p-3 sm:p-5 shadow-luxury-md border border-[#C4841D]/35 overflow-hidden">
              
              {/* Card Header */}
              <div className="flex items-center justify-between border-b border-[#DCD2C0] pb-2 sm:pb-3 mb-2 sm:mb-3">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-[#14422E] animate-pulse"></div>
                  <span className="text-xs font-serif font-bold text-[#14422E] tracking-wide">
                    Super Gas Cylinder Range
                  </span>
                </div>
                <span className="text-[10px] font-bold text-[#9A6410] bg-[#FAF0DC] px-2 py-0.5 rounded-full border border-[#C4841D]/40">
                  All 4 Official Sizes
                </span>
              </div>

              {/* Uncut Fitted Group Image */}
              <div className="relative group rounded-xl overflow-hidden bg-gradient-to-b from-[#FAF8F4] to-[#EFEAE0] p-1 sm:p-2 border border-[#DCD2C0] flex items-center justify-center">
                <img
                  src={BUSINESS_INFO.groupImage}
                  alt="Super Gas - More Power. Everyday Confidence. Balaji Gas"
                  className="w-full h-auto max-h-56 sm:max-h-64 object-contain rounded-lg shadow-sm transition-transform duration-300 group-hover:scale-105"
                  loading="eager"
                />

                {/* Priority Safety Badge */}
                <div className="absolute top-2 right-2 bg-white/95 backdrop-blur-md text-[#181F1C] py-0.5 px-2 rounded-lg shadow-sm border border-[#C4841D]/40 flex items-center gap-1">
                  <Award className="w-3 h-3 text-[#C4841D]" />
                  <span className="text-[8px] sm:text-[9px] font-bold text-[#14422E]">Your Safety Our Priority</span>
                </div>
              </div>

              {/* Quick Select Chips */}
              <div className="mt-3 pt-2 sm:pt-3 border-t border-[#DCD2C0]">
                <div className="text-[10px] font-bold uppercase tracking-wider text-[#5A6660] mb-1.5 flex justify-between items-center">
                  <span>Select Cylinder Size</span>
                  <span className="text-[#14422E] text-[9px] font-bold">Tap to view</span>
                </div>
                
                <div className="grid grid-cols-4 gap-1 sm:gap-1.5">
                  {CYLINDER_PRODUCTS.map((cyl) => (
                    <button
                      key={cyl.id}
                      onClick={() => onSelectProduct(cyl.id)}
                      onMouseEnter={() => setHoveredCyl(cyl.id)}
                      onMouseLeave={() => setHoveredCyl(null)}
                      className={`p-1 sm:p-1.5 rounded-xl text-center transition-all duration-200 border ${
                        hoveredCyl === cyl.id
                          ? 'bg-[#14422E] text-white border-[#14422E] shadow-sm -translate-y-0.5'
                          : 'bg-white hover:bg-[#FAF8F4] text-[#181F1C] border-[#DCD2C0]'
                      }`}
                    >
                      <div className="text-[10px] sm:text-xs font-bold font-serif">{cyl.size}</div>
                      <div className="text-[7px] sm:text-[8px] opacity-75 truncate">{cyl.name.split(' ')[0]}</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Location Strip */}
              <div className="mt-2.5 flex items-center justify-between text-[10px] text-[#5A6660] bg-white/80 p-1.5 sm:p-2 rounded-xl border border-[#DCD2C0]">
                <div className="flex items-center gap-1.5 truncate">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-600 shrink-0"></span>
                  <span className="font-semibold text-[#181F1C] truncate">{BUSINESS_INFO.shortAddress}</span>
                </div>
                <a href="#contact" className="text-[#14422E] font-bold hover:underline shrink-0 ml-1">
                  Directions →
                </a>
              </div>

            </div>
          </motion.div>

        </div>

        {/* 4 Core Value Pillars (Minimalist on mobile) */}
        <motion.div 
          className="mt-6 sm:mt-12 pt-5 sm:pt-8 border-t border-[#DCD2C0]"
          initial={{ opacity: 0, scale: 0.96, filter: 'blur(6px)', y: 20 }}
          whileInView={{ opacity: 1, scale: 1, filter: 'blur(0px)', y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-3 sm:mb-6">
            <span className="text-[10px] sm:text-[11px] uppercase tracking-widest text-[#9A6410] font-bold">
              The Balaji Gas Assurance
            </span>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-4">
            {BUSINESS_INFO.corePillars.map((pillar, idx) => (
              <div
                key={idx}
                className="luxury-card luxury-card-hover p-2.5 sm:p-5 rounded-2xl border border-[#DCD2C0] relative group text-left"
              >
                <div className="flex items-center gap-2 sm:gap-3 mb-1 sm:mb-2.5">
                  <div className="w-7 h-7 sm:w-10 sm:h-10 rounded-xl bg-[#FAF8F4] flex items-center justify-center group-hover:bg-[#14422E] group-hover:text-white transition-colors duration-200 border border-[#DCD2C0] shrink-0 shadow-xs">
                    {pillarIcons[pillar.icon] || <ShieldCheck className="w-4 h-4 sm:w-5 sm:h-5 text-[#14422E]" />}
                  </div>
                  <div>
                    <h3 className="font-serif font-bold text-xs sm:text-base text-[#181F1C] group-hover:text-[#14422E] transition-colors leading-tight">
                      {pillar.title}
                    </h3>
                    <div className="text-[8px] sm:text-[10px] text-[#9A6410] font-semibold">
                      {pillar.subtitle}
                    </div>
                  </div>
                </div>
                
                <p className="sm:hidden text-[9px] text-[#5A6660] leading-snug">
                  {pillar.shortDesc}
                </p>
                <p className="hidden sm:block text-xs text-[#5A6660] leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
};
