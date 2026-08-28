import React, { useState, useEffect } from 'react';
import { Phone, Menu, X, ArrowUpRight, Flame, ShieldCheck } from 'lucide-react';
import { BUSINESS_INFO } from '../data/businessData';

interface NavbarProps {
  onOpenOrderModal: (cylinderSize?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenOrderModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = ['home', 'about', 'products', 'commercial', 'calculator', 'safety', 'contact'];
      const scrollPosition = window.scrollY + 180;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home', id: 'home' },
    { name: 'About', href: '#about', id: 'about' },
    { name: '5 Cylinders', href: '#products', id: 'products' },
    { name: 'Bulk Supply', href: '#commercial', id: 'commercial' },
    { name: 'LPG Estimator', href: '#calculator', id: 'calculator' },
    { name: 'Safety', href: '#safety', id: 'safety' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  return (
    <>
      <div className="fixed top-3 left-0 right-0 z-50 px-3 sm:px-6 pointer-events-none">
        <header
          className={`max-w-6xl mx-auto pointer-events-auto rounded-2xl transition-all duration-300 ${
            isScrolled
              ? 'luxury-nav py-2 px-3 sm:px-5 shadow-luxury-md border border-[#C4841D]/35'
              : 'bg-[#FAF8F4]/90 backdrop-blur-xl py-2.5 px-3 sm:px-5 shadow-luxury-sm border border-[#DCD2C0]'
          }`}
        >
          <div className="flex items-center justify-between">
            
            {/* Brand Logo: Balaji Gas (Auth. Dealer: Super Gas) */}
            <a 
              href="#home" 
              className="flex items-center gap-2 sm:gap-2.5 group focus:outline-none text-left"
            >
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-br from-[#14422E] via-[#1D5A3F] to-[#0B3B70] flex items-center justify-center shadow-sm border border-[#C4841D]/40 group-hover:scale-105 transition-transform shrink-0">
                <Flame className="w-4 h-4 sm:w-5 sm:h-5 text-[#E59C24] animate-pulse" />
              </div>
              
              <div className="flex flex-col">
                <div className="flex items-center gap-1.5 leading-tight">
                  <span className="font-serif font-bold text-base sm:text-lg text-[#14422E] tracking-tight">
                    {BUSINESS_INFO.brandName}
                  </span>
                  <span className="inline-flex items-center gap-0.5 px-1.5 py-0.2 rounded bg-[#FAF0DC] text-[#9A6410] border border-[#C4841D]/30 text-[8px] sm:text-[9px] font-bold uppercase tracking-wider">
                    <ShieldCheck className="w-2.5 h-2.5 text-[#14422E]" />
                    <span>Super Gas Dealer</span>
                  </span>
                </div>
                
                <span className="text-[9px] sm:text-[10px] text-[#5A6660] font-medium leading-none mt-0.5">
                  Prop: <strong className="text-[#14422E] font-bold">{BUSINESS_INFO.proprietor}</strong> • Pooth Khurd
                </span>
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center space-x-1">
              {navLinks.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    className={`px-3 py-1.5 text-xs font-semibold rounded-xl transition-all duration-200 ${
                      isActive
                        ? 'text-[#14422E] font-bold bg-[#E2EFE7] shadow-xs'
                        : 'text-[#5A6660] hover:text-[#14422E] hover:bg-white/60'
                    }`}
                  >
                    {link.name}
                  </a>
                );
              })}
            </nav>

            {/* Action CTAs */}
            <div className="flex items-center space-x-2">
              <a
                href={`tel:${BUSINESS_INFO.rawPhone}`}
                className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold rounded-xl text-[#14422E] bg-[#E2EFE7] hover:bg-[#D4E8DC] transition-colors border border-[#14422E]/15"
                title="Direct Phone Call"
              >
                <Phone className="w-3 h-3 text-[#C4841D]" />
                <span className="font-mono">{BUSINESS_INFO.rawPhone}</span>
              </a>

              <button
                onClick={() => onOpenOrderModal()}
                className="inline-flex items-center justify-center gap-1.5 px-3.5 py-1.5 sm:px-4 sm:py-2 text-[11px] sm:text-xs font-bold uppercase tracking-wider text-white bg-gradient-to-r from-[#14422E] via-[#1D5A3F] to-[#0B3B70] hover:brightness-105 active:scale-[0.98] rounded-xl shadow-luxury-sm hover:shadow-luxury-md transition-all duration-200 border border-[#C4841D]/40"
              >
                <span>Request Supply</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#E59C24]" />
              </button>

              {/* Mobile Hamburger Button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-1.5 rounded-xl text-[#14422E] hover:bg-white/60 transition-colors focus:outline-none"
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>

          </div>

          {/* Mobile Drawer */}
          {mobileMenuOpen && (
            <div className="lg:hidden border-t border-[#DCD2C0] mt-2.5 pt-3 pb-2 animate-in slide-in-from-top-2 duration-200">
              <div className="px-3 py-2 bg-[#FAF8F4] rounded-xl border border-[#DCD2C0] mb-2 text-left space-y-0.5">
                <div className="text-xs font-serif font-bold text-[#14422E]">
                  {BUSINESS_INFO.brandName}
                </div>
                <div className="text-[10px] text-[#9A6410] font-semibold">
                  {BUSINESS_INFO.dealerTitle}
                </div>
                <div className="text-[10px] text-[#5A6660]">
                  Proprietor: <strong className="text-[#181F1C]">{BUSINESS_INFO.proprietor}</strong>
                </div>
                <div className="text-[9px] text-[#5A6660] truncate">
                  {BUSINESS_INFO.address}
                </div>
              </div>

              <div className="flex flex-col space-y-1 text-left">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`py-2 px-3 rounded-xl text-xs font-semibold transition-colors ${
                      activeSection === link.id
                        ? 'bg-[#E2EFE7] text-[#14422E] font-bold'
                        : 'text-[#5A6660] hover:bg-white/60 hover:text-[#14422E]'
                    }`}
                  >
                    {link.name}
                  </a>
                ))}

                <div className="pt-2 flex flex-col gap-2">
                  <a
                    href={`tel:${BUSINESS_INFO.rawPhone}`}
                    className="w-full flex items-center justify-center gap-2 py-2 rounded-xl bg-[#E2EFE7] text-[#14422E] text-xs font-bold border border-[#14422E]/15"
                  >
                    <Phone className="w-3.5 h-3.5 text-[#C4841D]" />
                    <span>Call {BUSINESS_INFO.phone}</span>
                  </a>
                </div>
              </div>
            </div>
          )}
        </header>
      </div>

      {/* Spacing */}
      <div className="h-14 sm:h-16"></div>
    </>
  );
};
