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
    ShieldCheck: <ShieldCheck className="w-4 h-4 text-[#14422E]" />,
    IndianRupee: <IndianRupee className="w-4 h-4 text-[#C4841D]" />,
    Truck: <Truck className="w-4 h-4 text-[#0B3B70]" />,
    Handshake: <Handshake className="w-4 h-4 text-[#14422E]" />
  };

  return (
    <section id="home" className="relative pt-2 pb-8 sm:pt-4 sm:pb-16 overflow-hidden warm-radial-mesh">
      
      {/* Ambient Lighting */}
      <div className="absolute top-6 left-6 w-60 sm:w-80 h-60 sm:h-80 bg-[#C4841D]/10 rounded-full blur-3xl -z-10 pointer-events-none" />
      <div className="absolute top-1/3 right-6 w-60 sm:w-80 h-60 sm:h-80 bg-[#14422E]/10 rounded-full blur-3xl -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-8 items-center">
          
          {/* Left Column */}
          <motion.div 
            className="lg:col-span-7 space-y-3 sm:space-y-4 text-left"
            initial={{ opacity: 0, scale: 0.96, filter: 'blur(6px)', y: 15 }}
            animate={{ opacity: 1, scale: 1, filter: 'blur(0px)', y: 0 }}
            transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
          >
            
            {/* Prominently Highlighted Dealership & Proprietor */}
            <div className="flex flex-wrap items-center gap-2">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#E2EFE7] border border-[#14422E]/30 text-[#14422E] text-xs font-bold tracking-wide shadow-xs">
                <span className="w-2 h-2 rounded-full bg-[#14422E] animate-pulse"></span>
                <span>AUTHORIZED DEALER: SUPER GAS</span>
              </div>

              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FAF0DC] border border-[#C4841D]/40 text-[#9A6410] text-xs font-bold shadow-xs">
                <Sparkles className="w-3.5 h-3.5 text-[#C4841D]" />
                <span>Proprietor: <strong className="text-[#14422E] font-bold">{BUSINESS_INFO.proprietor}</strong></span>
              </div>
            </div>

            {/* Headline */}
            <div className="space-y-1">
              <h1 className="font-serif text-2xl sm:text-4xl lg:text-[44px] text-[#181F1C] font-bold tracking-tight leading-[1.15]">
                More Power. <br className="sm:inline" />
                <span className="italic font-normal font-serif text-[#14422E]">Everyday</span>{' '}
                <span className="gold-heading-text font-serif">Confidence.</span>
              </h1>
              
              <p className="text-xs sm:text-sm text-[#5A6660] leading-relaxed">
                Authorized Super Gas supply in <strong className="text-[#181F1C]">Pooth Khurd, Delhi 110039</strong>. Fast cylinder refills (5kg, 12kg, 17kg, 33kg) for commercial kitchens & residences.
              </p>
            </div>

            {/* 4 Quick Points */}
            <div className="grid grid-cols-2 gap-1.5 text-xs text-[#2D3833] font-medium pt-0.5">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#14422E] shrink-0" />
                <span>Commercial Bulk Manifolds</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#14422E] shrink-0" />
                <span>100% Net Weight Guarantee</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#14422E] shrink-0" />
                <span>Fast Delhi NCR Delivery</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#14422E] shrink-0" />
                <span>Tamper-Proof Seals</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 pt-1">
              <button
                onClick={() => onOpenOrderModal()}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#14422E] via-[#1D5A3F] to-[#0B3B70] text-white text-xs font-bold uppercase tracking-wider shadow-sm hover:brightness-105 active:scale-[0.98] transition-all border border-[#C4841D]/40"
              >
                <span>Request LPG Supply</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#E59C24]" />
              </button>

              <a
                href={`tel:${BUSINESS_INFO.rawPhone}`}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl bg-white hover:bg-[#FAF8F4] text-[#14422E] text-xs font-bold border border-[#DCD2C0] shadow-xs active:scale-[0.98] transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-[#C4841D]" />
                <span>Call {BUSINESS_INFO.phone}</span>
              </a>
            </div>

          </motion.div>

          {/* Right Column: Super Gas Group Image */}
          <motion.div 
            className="lg:col-span-5 relative mt-1 lg:mt-0"
            initial={{ opacity: 0, scale: 0.94, filter: 'blur(8px)' }}
            animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="relative luxury-card rounded-2xl p-3 sm:p-4 shadow-luxury-md border border-[#C4841D]/35 overflow-hidden">
              
              {/* Card Header */}
              <div className="flex items-center justify-between border-b border-[#DCD2C0] pb-2 mb-2">
                <div className="flex items-center gap-1.5">
                  <div className="w-2 h-2 rounded-full bg-[#14422E] animate-pulse"></div>
                  <span className="text-xs font-serif font-bold text-[#14422E] tracking-wide">
                    Super Gas Cylinder Lineup
                  </span>
                </div>
                <span className="text-[9px] font-bold text-[#9A6410] bg-[#FAF0DC] px-2 py-0.5 rounded-full border border-[#C4841D]/40">
                  4 Sizes Available
                </span>
              </div>

              {/* Full Bleed Borderless Group Image */}
              <div className="relative group rounded-xl overflow-hidden flex items-center justify-center">
                <img
                  src={BUSINESS_INFO.groupImage}
                  alt="Super Gas Cylinders Lineup - Balaji Gas"
                  className="w-full h-auto object-cover rounded-xl transition-transform duration-300 group-hover:scale-[1.02]"
                  loading="eager"
                />

                <div className="absolute top-2 right-2 bg-white/95 backdrop-blur-md text-[#181F1C] py-0.5 px-2 rounded-lg shadow-sm border border-[#C4841D]/40 flex items-center gap-1">
                  <Award className="w-3 h-3 text-[#C4841D]" />
                  <span className="text-[8px] sm:text-[9px] font-bold text-[#14422E]">Safety Priority</span>
                </div>
              </div>

              {/* Quick Select Chips */}
              <div className="mt-2.5 pt-2 border-t border-[#DCD2C0]">
                <div className="grid grid-cols-4 gap-1 sm:gap-1.5">
                  {CYLINDER_PRODUCTS.map((cyl) => (
                    <button
                      key={cyl.id}
                      onClick={() => onSelectProduct(cyl.id)}
                      onMouseEnter={() => setHoveredCyl(cyl.id)}
                      onMouseLeave={() => setHoveredCyl(null)}
                      className={`p-1 rounded-xl text-center transition-all duration-200 border ${
                        hoveredCyl === cyl.id
                          ? 'bg-[#14422E] text-white border-[#14422E] shadow-sm'
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
              <div className="mt-2 flex items-center justify-between text-[10px] text-[#5A6660] bg-white/80 p-1.5 rounded-xl border border-[#DCD2C0]">
                <span className="font-semibold text-[#181F1C] truncate">{BUSINESS_INFO.shortAddress}</span>
                <a href="#contact" className="text-[#14422E] font-bold hover:underline shrink-0 ml-1">
                  Map →
                </a>
              </div>

            </div>
          </motion.div>

        </div>

        {/* 4 Pillars */}
        <motion.div 
          className="mt-6 sm:mt-10 pt-4 sm:pt-6 border-t border-[#DCD2C0]"
          initial={{ opacity: 0, scale: 0.96, filter: 'blur(6px)', y: 20 }}
          whileInView={{ opacity: 1, scale: 1, filter: 'blur(0px)', y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-3">
            {BUSINESS_INFO.corePillars.map((pillar, idx) => (
              <div
                key={idx}
                className="luxury-card p-2.5 sm:p-3.5 rounded-2xl border border-[#DCD2C0] text-left"
              >
                <div className="flex items-center gap-2 mb-1">
                  <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-lg bg-[#FAF8F4] flex items-center justify-center border border-[#DCD2C0] shrink-0">
                    {pillarIcons[pillar.icon]}
                  </div>
                  <div>
                    <h3 className="font-serif font-bold text-xs sm:text-sm text-[#181F1C] leading-tight">
                      {pillar.title}
                    </h3>
                    <div className="text-[8px] sm:text-[9px] text-[#9A6410] font-semibold">
                      {pillar.subtitle}
                    </div>
                  </div>
                </div>
                <p className="text-[9px] sm:text-[10px] text-[#5A6660] leading-snug">
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
