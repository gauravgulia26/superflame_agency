import React from 'react';
import { Phone, MapPin, Shield, Flame, ArrowUpRight, Award } from 'lucide-react';
import { BUSINESS_INFO, CYLINDER_PRODUCTS } from '../data/businessData';

interface FooterProps {
  onOpenOrderModal: (cylinderSize?: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenOrderModal }) => {
  return (
    <footer className="bg-[#0C2D1F] text-[#F5F1E8] relative pt-12 pb-10 border-t border-[#C4841D]/35 overflow-hidden">
      
      {/* Glow */}
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-[#0B3B70]/30 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 pb-10 border-b border-white/15">
          
          {/* Brand Info */}
          <div className="lg:col-span-5 space-y-3.5">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#14422E] to-[#0B3B70] flex items-center justify-center border border-[#C4841D]/50 shadow-md">
                <Flame className="w-5 h-5 text-[#E59C24]" />
              </div>
              <div>
                <div className="font-serif font-bold text-xl text-white tracking-tight">
                  SUPER FLAME
                </div>
                <div className="text-[10px] text-[#F4D388] font-semibold tracking-wider uppercase">
                  Auth. LPG Distributor (BPCL) • Balaji Gas
                </div>
              </div>
            </div>

            <p className="text-xs text-white/80 leading-relaxed max-w-sm">
              Official authorized BPCL distributor dedicated to safe, dependable, and high-efficiency LPG gas distribution. Delivering 5kg to 450kg cylinders across Delhi NCR.
            </p>

            <div className="flex flex-wrap items-center gap-2 pt-1">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 border border-[#C4841D]/40 text-[10px] text-[#F4D388] font-bold">
                <Award className="w-3 h-3" />
                <span>Your Safety Our Priority</span>
              </div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 text-[10px] text-white/80">
                <Shield className="w-3 h-3 text-emerald-400" />
                <span>100% Tested & Verified</span>
              </div>
            </div>

            <div className="pt-1 text-xs italic text-white/60">
              “Cook Food. Serve Love.” — Bharat Petroleum
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 space-y-2.5">
            <h4 className="font-serif font-bold text-xs text-white uppercase tracking-wider">
              Navigation
            </h4>
            <ul className="space-y-1.5 text-xs text-white/80">
              <li>
                <a href="#home" className="hover:text-white transition-colors">Home</a>
              </li>
              <li>
                <a href="#about" className="hover:text-white transition-colors">About Balaji Gas</a>
              </li>
              <li>
                <a href="#products" className="hover:text-white transition-colors">Cylinder Capacities</a>
              </li>
              <li>
                <a href="#commercial" className="hover:text-white transition-colors">Commercial Bulk</a>
              </li>
              <li>
                <a href="#calculator" className="hover:text-white transition-colors">LPG Estimator</a>
              </li>
              <li>
                <a href="#safety" className="hover:text-white transition-colors">Safety Standards</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors">Contact Hub</a>
              </li>
            </ul>
          </div>

          {/* Cylinders */}
          <div className="lg:col-span-2 space-y-2.5">
            <h4 className="font-serif font-bold text-xs text-white uppercase tracking-wider">
              Cylinders
            </h4>
            <ul className="space-y-1.5 text-xs text-white/80">
              {CYLINDER_PRODUCTS.map((cyl) => (
                <li key={cyl.id}>
                  <button
                    onClick={() => onOpenOrderModal(cyl.size)}
                    className="hover:text-[#F4D388] transition-colors text-left flex items-center gap-1 group"
                  >
                    <span>{cyl.size} Cylinder</span>
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Hub Details */}
          <div className="lg:col-span-3 space-y-2.5">
            <h4 className="font-serif font-bold text-xs text-white uppercase tracking-wider">
              Authorized Hub
            </h4>
            <div className="space-y-2 text-xs text-white/80">
              <div className="flex items-start gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#E59C24] shrink-0 mt-0.5" />
                <span>{BUSINESS_INFO.address}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Phone className="w-3.5 h-3.5 text-[#E59C24] shrink-0" />
                <a href={`tel:${BUSINESS_INFO.rawPhone}`} className="hover:text-white font-mono font-bold">
                  {BUSINESS_INFO.phone}
                </a>
              </div>
              <div className="pt-1">
                <div className="text-[10px] text-white/60">Proprietor:</div>
                <div className="text-xs font-bold text-white">Neeraj Dabas (Balaji Gas)</div>
              </div>
            </div>

            <div className="pt-1">
              <button
                onClick={() => onOpenOrderModal()}
                className="w-full py-2 rounded-xl bg-gradient-to-r from-[#14422E] to-[#1D5A3F] hover:brightness-110 text-white text-xs font-bold uppercase tracking-wider transition-colors border border-[#C4841D]/40"
              >
                Request Supply
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/70">
          <div>
            © {new Date().getFullYear()} Super Flame Bharatgas (Balaji Gas - Neeraj Dabas). All Rights Reserved.
          </div>

          <div className="flex items-center gap-3 text-[10px]">
            <span>National Emergency Helpline: <strong className="text-white">1906</strong></span>
            <span>•</span>
            <span className="flex items-center gap-1 text-[#F4D388]">
              BPCL Authorized Dealer Hub <Shield className="w-3 h-3" />
            </span>
          </div>
        </div>

      </div>
    </footer>
  );
};
