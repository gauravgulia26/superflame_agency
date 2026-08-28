import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Building2, 
  Flame, 
  CheckCircle2, 
  Layers, 
  Gauge, 
  ArrowUpRight, 
  Zap, 
  ThermometerSnowflake
} from 'lucide-react';
import { COMMERCIAL_SOLUTIONS } from '../data/businessData';

interface CommercialProps {
  onOpenOrderModal: (size?: string) => void;
}

export const CommercialBulkSection: React.FC<CommercialProps> = ({ onOpenOrderModal }) => {
  const [selectedTab, setSelectedTab] = useState<'heavy' | 'vot'>('heavy');

  return (
    <section id="commercial" className="py-8 sm:py-14 bg-[#FAF8F4] relative overflow-hidden border-t border-[#DCD2C0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div 
          className="text-center max-w-2xl mx-auto mb-6 sm:mb-8 space-y-1.5"
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-[#FAF0DC] border border-[#C4841D]/40 text-[10px] sm:text-xs font-bold uppercase tracking-wider text-[#9A6410]">
            <Building2 className="w-3 h-3 text-[#C4841D]" />
            <span>Commercial & Bulk Energy</span>
          </div>

          <h2 className="font-serif text-2xl sm:text-3xl text-[#181F1C] font-bold tracking-tight">
            Commercial <span className="italic font-serif text-[#14422E]">Gas Solutions</span>
          </h2>

          <p className="text-xs sm:text-sm text-[#5A6660]">
            Certified commercial gas manifolds for restaurants, dhabas, and bakeries with zero pressure drops.
          </p>
        </motion.div>

        {/* 3 Industry Solution Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-4 mb-6 sm:mb-8">
          {COMMERCIAL_SOLUTIONS.map((sol, idx) => (
            <motion.div
              key={idx}
              className="luxury-card rounded-2xl p-4 border border-[#DCD2C0] shadow-luxury-xs flex flex-col justify-between text-left"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-2">
                  <span className="text-[10px] font-mono font-bold text-[#14422E] bg-[#E2EFE7] px-2 py-0.5 rounded border border-[#14422E]/20">
                    {sol.tag}
                  </span>
                  <Flame className="w-3.5 h-3.5 text-[#E59C24]" />
                </div>
                <h3 className="font-serif font-bold text-base text-[#181F1C] mb-2">
                  {sol.title}
                </h3>

                <div className="space-y-1 pt-1">
                  {sol.points.map((pt, pIdx) => (
                    <div key={pIdx} className="flex items-center gap-1.5 text-xs text-[#2D3833]">
                      <CheckCircle2 className="w-3 h-3 text-[#14422E] shrink-0" />
                      <span>{pt}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-3 pt-2 border-t border-[#DCD2C0]">
                <button
                  onClick={() => onOpenOrderModal(sol.tag.split(' ')[0])}
                  className="w-full inline-flex items-center justify-center gap-1 py-1.5 rounded-xl bg-white hover:bg-[#FAF8F4] text-[#14422E] text-xs font-bold border border-[#DCD2C0] transition-colors"
                >
                  <span>Inquire for {sol.title.split(' ')[0]}</span>
                  <ArrowUpRight className="w-3 h-3 text-[#C4841D]" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* System Selector Card */}
        <motion.div 
          className="luxury-card rounded-2xl p-4 sm:p-5 border border-[#C4841D]/35 shadow-luxury-sm text-left"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {/* Header Switcher */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-3 border-b border-[#DCD2C0] gap-2">
            <div>
              <div className="text-[9px] uppercase font-bold tracking-widest text-[#9A6410]">
                Setup Options
              </div>
              <h3 className="font-serif font-bold text-base sm:text-xl text-[#181F1C]">
                Commercial Manifold Configurations
              </h3>
            </div>

            <div className="flex items-center gap-1 bg-[#FAF8F4] p-0.5 rounded-xl border border-[#DCD2C0] self-start sm:self-auto">
              <button
                onClick={() => setSelectedTab('heavy')}
                className={`px-3 py-1 text-xs font-bold rounded-lg transition-all ${
                  selectedTab === 'heavy' ? 'bg-[#14422E] text-white shadow-xs' : 'text-[#5A6660] hover:text-[#14422E]'
                }`}
              >
                33 KG Heavy Commercial
              </button>
              <button
                onClick={() => setSelectedTab('vot')}
                className={`px-3 py-1 text-xs font-bold rounded-lg transition-all ${
                  selectedTab === 'vot' ? 'bg-[#14422E] text-white shadow-xs' : 'text-[#5A6660] hover:text-[#14422E]'
                }`}
              >
                17 KG Standard Commercial
              </button>
            </div>
          </div>

          {/* System Tab Details */}
          <div className="mt-3">
            {selectedTab === 'heavy' && (
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-3 sm:gap-4 items-center">
                <div className="lg:col-span-7 space-y-1.5">
                  <div className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-[#E2EFE7] text-[#14422E] text-xs font-bold">
                    <Zap className="w-3 h-3 text-[#14422E]" />
                    <span>Best for Bakeries, Large Ovens & High-Volume Banquets</span>
                  </div>
                  <p className="text-xs text-[#5A6660]">
                    High-capacity 33 kg cylinders connected in multi-cylinder banks. Provides double the burn time per bottle, minimizing swaps during peak cooking hours.
                  </p>
                  
                  <div className="grid grid-cols-2 gap-2 pt-1 text-xs">
                    <div className="p-2 rounded-xl bg-white border border-[#DCD2C0]">
                      <div className="font-bold text-[#14422E]">33 kg Net Gas</div>
                      <div className="text-[10px] text-[#5A6660]">Fewer cylinder swaps</div>
                    </div>
                    <div className="p-2 rounded-xl bg-white border border-[#DCD2C0]">
                      <div className="font-bold text-[#14422E]">Commercial Rates</div>
                      <div className="text-[10px] text-[#5A6660]">Volume discount slabs</div>
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-5 p-3 rounded-xl bg-white border border-[#DCD2C0] text-center space-y-1.5">
                  <Gauge className="w-6 h-6 text-[#14422E] mx-auto" />
                  <div className="text-xs font-bold text-[#14422E] font-serif">Certified Heavy Manifold Setup</div>
                  <button
                    onClick={() => onOpenOrderModal('33 KG')}
                    className="w-full py-2 rounded-xl bg-gradient-to-r from-[#14422E] to-[#1D5A3F] text-white text-xs font-bold uppercase tracking-wider shadow-xs hover:brightness-105 transition-all"
                  >
                    Request 33kg Supply
                  </button>
                </div>
              </div>
            )}

            {selectedTab === 'vot' && (
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-3 sm:gap-4 items-center">
                <div className="lg:col-span-7 space-y-1.5">
                  <div className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-[#FAF0DC] text-[#9A6410] text-xs font-bold">
                    <Layers className="w-3 h-3 text-[#C4841D]" />
                    <span>Best for Restaurants, Cafes, Cloud Kitchens & Dhabas</span>
                  </div>
                  <p className="text-xs text-[#5A6660]">
                    17 kg standard commercial cylinders connected via 2x2 or 2x4 auto-changeover manifolds. Continuous high-calorific blue flame with zero cooking interruption.
                  </p>
                  
                  <div className="grid grid-cols-2 gap-2 pt-1 text-xs">
                    <div className="p-2 rounded-xl bg-white border border-[#DCD2C0]">
                      <div className="font-bold text-[#14422E]">17 kg High-Flame</div>
                      <div className="text-[10px] text-[#5A6660]">Clean-burning fuel</div>
                    </div>
                    <div className="p-2 rounded-xl bg-white border border-[#DCD2C0]">
                      <div className="font-bold text-[#14422E]">Auto-Changeover</div>
                      <div className="text-[10px] text-[#5A6660]">Instant emergency refill</div>
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-5 p-3 rounded-xl bg-white border border-[#DCD2C0] text-center space-y-1.5">
                  <ThermometerSnowflake className="w-6 h-6 text-[#0B3B70] mx-auto" />
                  <div className="text-xs font-bold text-[#0B3B70] font-serif">Quick Turnkey Installation</div>
                  <button
                    onClick={() => onOpenOrderModal('17 KG')}
                    className="w-full py-2 rounded-xl bg-gradient-to-r from-[#14422E] to-[#1D5A3F] text-white text-xs font-bold uppercase tracking-wider shadow-xs hover:brightness-105 transition-all"
                  >
                    Request 17kg Supply
                  </button>
                </div>
              </div>
            )}
          </div>
        </motion.div>

      </div>
    </section>
  );
};
