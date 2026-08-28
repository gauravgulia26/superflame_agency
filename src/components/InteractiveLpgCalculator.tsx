import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Calculator, 
  Utensils, 
  Building, 
  Factory, 
  Hotel, 
  Flame, 
  ArrowUpRight, 
  MessageSquare,
  Sparkles,
  Info
} from 'lucide-react';
import { BUSINESS_INFO } from '../data/businessData';

interface CalculatorProps {
  onOpenOrderModal: (cylinderSize?: string) => void;
}

interface SectorConfig {
  id: string;
  name: string;
  icon: React.ReactNode;
  defaultBurners: number;
  defaultHours: number;
  hourlyRateKg: number;
  recommendedCyl: string;
  setupAdvice: string;
}

const SECTORS: SectorConfig[] = [
  {
    id: 'restaurant',
    name: 'Restaurant / Cafe',
    icon: <Utensils className="w-4 h-4" />,
    defaultBurners: 4,
    defaultHours: 10,
    hourlyRateKg: 0.55,
    recommendedCyl: '19 KG',
    setupAdvice: '2x2 or 2x4 VOT automatic changeover manifold.'
  },
  {
    id: 'cloud_kitchen',
    name: 'Cloud Kitchen',
    icon: <Building className="w-4 h-4" />,
    defaultBurners: 6,
    defaultHours: 14,
    hourlyRateKg: 0.60,
    recommendedCyl: '19 KG / 35 KG',
    setupAdvice: '4-cylinder VOT manifold with rapid reserve switch.'
  },
  {
    id: 'bakery',
    name: 'Bakery / Halwai',
    icon: <Flame className="w-4 h-4" />,
    defaultBurners: 3,
    defaultHours: 12,
    hourlyRateKg: 0.95,
    recommendedCyl: '35 KG',
    setupAdvice: 'High-capacity 35kg cylinders with high-flow pressure regulator.'
  },
  {
    id: 'hotel',
    name: 'Hotel / Banquet',
    icon: <Hotel className="w-4 h-4" />,
    defaultBurners: 10,
    defaultHours: 12,
    hourlyRateKg: 0.70,
    recommendedCyl: '47.5 KG LOT',
    setupAdvice: 'Liquid Off-Take (LOT) bank with water-bath vaporizer.'
  },
  {
    id: 'industrial',
    name: 'Factory / Industrial',
    icon: <Factory className="w-4 h-4" />,
    defaultBurners: 8,
    defaultHours: 16,
    hourlyRateKg: 1.20,
    recommendedCyl: '47.5 KG LOT',
    setupAdvice: 'Multi-cylinder Super Gas 47.5 KG LOT manifold with external vaporizer.'
  }
];

export const InteractiveLpgCalculator: React.FC<CalculatorProps> = ({ onOpenOrderModal }) => {
  const [selectedSector, setSelectedSector] = useState<string>('restaurant');
  const [burners, setBurners] = useState<number>(4);
  const [hoursPerDay, setHoursPerDay] = useState<number>(10);
  const [daysPerMonth, setDaysPerMonth] = useState<number>(30);

  const currentSector = SECTORS.find(s => s.id === selectedSector) || SECTORS[0];

  // Calculations
  const dailyKg = Number((burners * hoursPerDay * currentSector.hourlyRateKg).toFixed(1));
  const monthlyKg = Math.round(dailyKg * daysPerMonth);
  const estimated19kgCylinders = Math.ceil(monthlyKg / 19);
  const estimated35kgCylinders = Math.ceil(monthlyKg / 35);
  const estimated47kgCylinders = Math.ceil(monthlyKg / 47.5);

  const handleSectorChange = (sector: SectorConfig) => {
    setSelectedSector(sector.id);
    setBurners(sector.defaultBurners);
    setHoursPerDay(sector.defaultHours);
  };

  const handleWhatsAppEstimate = () => {
    const text = encodeURIComponent(
      `Hello Balaji Gas (Super Gas Dealer), I used your LPG Requirement Estimator for my ${currentSector.name}.\n` +
      `Estimated Daily Consumption: ~${dailyKg} kg\n` +
      `Estimated Monthly Consumption: ~${monthlyKg} kg\n` +
      `Monthly Equivalent: ~${estimated19kgCylinders} x 19kg OR ~${estimated47kgCylinders} x 47.5kg cylinders.\n` +
      `Please provide commercial pricing & delivery quote for Pooth Khurd / Delhi NCR.`
    );
    window.open(`https://wa.me/${BUSINESS_INFO.rawPhone}?text=${text}`, '_blank');
  };

  return (
    <section id="calculator" className="py-10 sm:py-20 bg-[#EFEAE0]/90 relative overflow-hidden border-t border-[#DCD2C0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-8 sm:mb-12 space-y-2"
          initial={{ opacity: 0, scale: 0.95, filter: 'blur(6px)', y: 20 }}
          whileInView={{ opacity: 1, scale: 1, filter: 'blur(0px)', y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FAF0DC] border border-[#C4841D]/40 text-[11px] sm:text-xs font-bold uppercase tracking-wider text-[#9A6410]">
            <Calculator className="w-3.5 h-3.5 text-[#C4841D]" />
            <span>Interactive Consumption Estimator</span>
          </div>

          <h2 className="font-serif text-2xl sm:text-4xl text-[#181F1C] font-bold tracking-tight">
            Estimate Your <span className="italic font-serif text-[#14422E]">LPG Gas Needs</span>
          </h2>

          <p className="text-xs sm:text-sm text-[#5A6660] leading-relaxed">
            Select your industry sector and adjust daily cooking hours to determine optimal cylinder sizes, changeover manifolds, and monthly volume discount slabs.
          </p>
        </motion.div>

        {/* Calculator Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-start">
          
          {/* Left Column: Sector Selection & Sliders */}
          <motion.div 
            className="lg:col-span-7 luxury-card rounded-2xl p-4 sm:p-7 border border-[#C4841D]/35 shadow-luxury-md space-y-5 text-left"
            initial={{ opacity: 0, scale: 0.94, filter: 'blur(6px)', x: -20 }}
            whileInView={{ opacity: 1, scale: 1, filter: 'blur(0px)', x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Sector Selector */}
            <div>
              <label className="block text-[10px] sm:text-xs font-bold uppercase tracking-wider text-[#14422E] mb-2">
                1. Select Your Business Category
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {SECTORS.map((s) => (
                  <button
                    key={s.id}
                    onClick={() => handleSectorChange(s)}
                    className={`p-2.5 rounded-xl text-left transition-all duration-200 border flex items-center gap-2 ${
                      selectedSector === s.id
                        ? 'bg-[#14422E] text-white border-[#14422E] shadow-sm'
                        : 'bg-white hover:bg-[#FAF8F4] text-[#181F1C] border-[#DCD2C0]'
                    }`}
                  >
                    <div className={`p-1.5 rounded-lg shrink-0 ${
                      selectedSector === s.id ? 'bg-white/20 text-[#E59C24]' : 'bg-[#FAF8F4] text-[#14422E]'
                    }`}>
                      {s.icon}
                    </div>
                    <span className="text-xs font-bold truncate">{s.name}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Slider 1: Active Burners */}
            <div className="space-y-1.5 pt-2 border-t border-[#DCD2C0]">
              <div className="flex justify-between items-center text-xs">
                <span className="font-bold text-[#181F1C]">Commercial Burners / Appliances:</span>
                <span className="font-mono font-bold text-sm text-[#14422E] bg-[#E2EFE7] px-2.5 py-0.5 rounded-md border border-[#14422E]/20">
                  {burners} {burners === 1 ? 'Burner' : 'Burners'}
                </span>
              </div>
              <input
                type="range"
                min="1"
                max="24"
                value={burners}
                onChange={(e) => setBurners(Number(e.target.value))}
                className="w-full accent-[#14422E] cursor-pointer h-2 bg-[#DCD2C0] rounded-lg"
              />
              <div className="flex justify-between text-[10px] text-[#5A6660]">
                <span>1 small station</span>
                <span>12 medium</span>
                <span>24 mega kitchen</span>
              </div>
            </div>

            {/* Slider 2: Operational Hours Per Day */}
            <div className="space-y-1.5 pt-2 border-t border-[#DCD2C0]">
              <div className="flex justify-between items-center text-xs">
                <span className="font-bold text-[#181F1C]">Operational Cooking Hours / Day:</span>
                <span className="font-mono font-bold text-sm text-[#14422E] bg-[#E2EFE7] px-2.5 py-0.5 rounded-md border border-[#14422E]/20">
                  {hoursPerDay} Hours / Day
                </span>
              </div>
              <input
                type="range"
                min="2"
                max="24"
                value={hoursPerDay}
                onChange={(e) => setHoursPerDay(Number(e.target.value))}
                className="w-full accent-[#14422E] cursor-pointer h-2 bg-[#DCD2C0] rounded-lg"
              />
              <div className="flex justify-between text-[10px] text-[#5A6660]">
                <span>2 hrs (Boutique)</span>
                <span>10 hrs (Restaurant)</span>
                <span>24 hrs (24/7 Cloud/Factory)</span>
              </div>
            </div>

            {/* Slider 3: Working Days Per Month */}
            <div className="space-y-1.5 pt-2 border-t border-[#DCD2C0]">
              <div className="flex justify-between items-center text-xs">
                <span className="font-bold text-[#181F1C]">Operating Days Per Month:</span>
                <span className="font-mono font-bold text-sm text-[#14422E] bg-[#E2EFE7] px-2.5 py-0.5 rounded-md border border-[#14422E]/20">
                  {daysPerMonth} Days
                </span>
              </div>
              <input
                type="range"
                min="15"
                max="31"
                value={daysPerMonth}
                onChange={(e) => setDaysPerMonth(Number(e.target.value))}
                className="w-full accent-[#14422E] cursor-pointer h-2 bg-[#DCD2C0] rounded-lg"
              />
            </div>
          </motion.div>

          {/* Right Column: Estimated Volume & Custom Package */}
          <motion.div 
            className="lg:col-span-5 space-y-4 text-left"
            initial={{ opacity: 0, scale: 0.94, filter: 'blur(6px)', x: 20 }}
            whileInView={{ opacity: 1, scale: 1, filter: 'blur(0px)', x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="luxury-card rounded-2xl p-4 sm:p-7 border border-[#C4841D]/35 shadow-luxury-md space-y-4">
              
              <div className="border-b border-[#DCD2C0] pb-3">
                <div className="text-[10px] font-bold uppercase tracking-widest text-[#9A6410] flex items-center gap-1">
                  <Sparkles className="w-3 h-3 text-[#C4841D]" />
                  <span>Estimated Volume Results</span>
                </div>
                <h3 className="font-serif font-bold text-xl sm:text-2xl text-[#181F1C] mt-0.5">
                  {currentSector.name}
                </h3>
              </div>

              {/* Consumption Stat Boxes */}
              <div className="grid grid-cols-2 gap-2.5">
                <div className="p-3 rounded-xl bg-white border border-[#DCD2C0]">
                  <div className="text-[10px] font-bold uppercase text-[#5A6660]">Daily Estimate</div>
                  <div className="text-xl sm:text-2xl font-bold font-serif text-[#14422E] mt-0.5">
                    ~{dailyKg} <span className="text-xs font-sans font-normal text-[#5A6660]">KG/day</span>
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-white border border-[#DCD2C0]">
                  <div className="text-[10px] font-bold uppercase text-[#5A6660]">Monthly Estimate</div>
                  <div className="text-xl sm:text-2xl font-bold font-serif text-[#C4841D] mt-0.5">
                    ~{monthlyKg} <span className="text-xs font-sans font-normal text-[#5A6660]">KG/mo</span>
                  </div>
                </div>
              </div>

              {/* Recommended Cylinder Equivalent */}
              <div className="p-3.5 rounded-xl bg-white border border-[#DCD2C0] space-y-2">
                <div className="text-xs font-bold text-[#181F1C]">Recommended Cylinder Allocation:</div>
                
                <div className="space-y-1.5 text-xs text-[#2D3833]">
                  <div className="flex justify-between items-center py-1 border-b border-[#DCD2C0]/50">
                    <span className="font-semibold">In 19 KG Cylinders:</span>
                    <span className="font-mono font-bold text-[#14422E]">~{estimated19kgCylinders} cylinders / month</span>
                  </div>
                  <div className="flex justify-between items-center py-1 border-b border-[#DCD2C0]/50">
                    <span className="font-semibold">In 35 KG Cylinders:</span>
                    <span className="font-mono font-bold text-[#14422E]">~{estimated35kgCylinders} cylinders / month</span>
                  </div>
                  <div className="flex justify-between items-center py-1">
                    <span className="font-semibold">In 47.5 KG LOT Cylinders:</span>
                    <span className="font-mono font-bold text-[#14422E]">~{estimated47kgCylinders} cylinders / month</span>
                  </div>
                </div>
              </div>

              {/* Setup Advice Note */}
              <div className="p-3 rounded-xl bg-[#FAF8F4] border border-[#DCD2C0] flex items-start gap-2">
                <Info className="w-4 h-4 text-[#C4841D] shrink-0 mt-0.5" />
                <p className="text-[11px] text-[#5A6660]">
                  <strong className="text-[#181F1C]">Recommended Architecture:</strong> {currentSector.setupAdvice}
                </p>
              </div>

              {/* Action Buttons */}
              <div className="pt-2 space-y-2">
                <button
                  onClick={handleWhatsAppEstimate}
                  className="w-full py-2.5 rounded-xl bg-[#25D366] hover:bg-[#20BE5C] text-white text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow-sm"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Send Estimate via WhatsApp</span>
                </button>

                <button
                  onClick={() => onOpenOrderModal(currentSector.recommendedCyl.split(' ')[0])}
                  className="w-full py-2.5 rounded-xl bg-gradient-to-r from-[#14422E] to-[#1D5A3F] text-white text-xs font-bold uppercase tracking-wider hover:brightness-105 transition-all shadow-sm flex items-center justify-center gap-1.5 border border-[#C4841D]/40"
                >
                  <span>Request Custom Supply Quote</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#E59C24]" />
                </button>
              </div>

            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};
