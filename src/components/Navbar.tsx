import React, { useState, useEffect } from 'react';
import { Phone, Menu, X, MapPin } from 'lucide-react';
import { BUSINESS_INFO } from '../data/businessData';

interface NavbarProps {
  onOpenOrderModal?: (cylinderSize?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = ['home', 'about', 'products', 'commercial', 'safety', 'contact'];
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
    { name: 'Cylinders', href: '#products', id: 'products' },
    { name: 'Bulk Supply', href: '#commercial', id: 'commercial' },
    { name: 'Safety', href: '#safety', id: 'safety' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  return (
    <>
      <div className="fixed top-3 left-0 right-0 z-50 px-2 sm:px-6 pointer-events-none">
        <header
          className={`max-w-6xl mx-auto pointer-events-auto rounded-2xl transition-all duration-300 ${
            isScrolled
              ? 'luxury-nav py-2 px-3 sm:px-5 shadow-luxury-md border border-[#C4841D]/35'
              : 'bg-[#FAF8F4]/95 backdrop-blur-xl py-2 px-3 sm:px-5 shadow-luxury-sm border border-[#DCD2C0]'
          }`}
        >
          <div className="flex items-center justify-between gap-2">
            
            {/* Distinct Brand Typography & Subtle Tagline */}
            <a 
              href="#home" 
              className="flex items-center gap-2 sm:gap-2.5 group focus:outline-none text-left shrink-0 min-w-0"
            >
              <img
                src="/images/balaji_gas_logo.svg"
                alt="Balaji Gas Logo"
                className="w-8 h-8 sm:w-9 sm:h-9 object-contain shrink-0 drop-shadow-xs group-hover:scale-105 transition-transform"
              />
              
              <div className="flex items-center gap-2 min-w-0">
                <span className="font-['Cinzel'] font-bold text-base sm:text-lg lg:text-[19px] text-[#14422E] tracking-wider uppercase whitespace-nowrap">
                  {BUSINESS_INFO.brandName}
                </span>

                <span className="hidden sm:inline-block w-px h-3.5 bg-[#C4841D]/35 shrink-0" />

                <span className="hidden md:inline text-[11px] lg:text-xs text-[#5A6660] font-sans font-medium tracking-normal whitespace-nowrap truncate">
                  More Power. Everyday Confidence.
                </span>
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center space-x-1 whitespace-nowrap">
              {navLinks.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    className={`px-3 py-1.5 text-xs font-semibold rounded-xl transition-all duration-200 whitespace-nowrap ${
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

            {/* Right Side: Direct Call & Hamburger Menu */}
            <div className="flex items-center space-x-1.5 sm:space-x-2 shrink-0">
              
              {/* Direct Phone Helpline Link */}
              <a
                href={`tel:${BUSINESS_INFO.rawPhone}`}
                className="inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 text-xs font-bold rounded-xl text-[#14422E] bg-[#E2EFE7] hover:bg-[#D4E8DC] transition-colors border border-[#14422E]/15 whitespace-nowrap shadow-2xs"
                title={`Call ${BUSINESS_INFO.phone}`}
              >
                <Phone className="w-3.5 h-3.5 text-[#C4841D] shrink-0" />
                <span className="font-mono hidden sm:inline">{BUSINESS_INFO.rawPhone}</span>
                <span className="sm:hidden text-[11px]">Call</span>
              </a>

              {/* Hamburger Menu Toggle Button (Visible on mobile & tablet) */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-1.5 sm:p-2 rounded-xl bg-white/80 hover:bg-white text-[#14422E] border border-[#DCD2C0] transition-colors focus:outline-none shadow-2xs"
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>

          </div>

          {/* Navigation Drawer for Mobile/Tablet */}
          {mobileMenuOpen && (
            <div className="lg:hidden border-t border-[#DCD2C0] mt-2.5 pt-3 pb-2 animate-in slide-in-from-top-2 duration-200">
              
              {/* Business Details inside Drawer */}
              <div className="px-3 py-2.5 bg-[#FAF8F4] rounded-xl border border-[#DCD2C0] mb-2.5 text-left space-y-1">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1.5">
                    <img src="/images/balaji_gas_logo.svg" alt="Balaji Gas" className="w-4 h-4 object-contain" />
                    <span className="text-xs font-['Cinzel'] font-bold text-[#14422E] tracking-wider uppercase">{BUSINESS_INFO.brandName}</span>
                  </div>
                  <span className="text-[9px] font-bold text-[#9A6410] bg-[#FAF0DC] px-2 py-0.5 rounded border border-[#C4841D]/30">
                    {BUSINESS_INFO.dealerTitle}
                  </span>
                </div>
                <div className="text-[10px] text-[#5A6660]">
                  Proprietor: <strong className="text-[#181F1C] font-semibold">{BUSINESS_INFO.proprietor}</strong>
                </div>
                <div className="text-[9px] text-[#5A6660] flex items-center gap-1">
                  <MapPin className="w-3 h-3 text-[#C4841D] shrink-0" />
                  <span className="truncate">{BUSINESS_INFO.address}</span>
                </div>
              </div>

              {/* Links Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-1 text-left">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`py-2 px-3 rounded-xl text-xs font-semibold transition-colors ${
                      activeSection === link.id
                        ? 'bg-[#E2EFE7] text-[#14422E] font-bold'
                        : 'text-[#5A6660] hover:bg-white/80 hover:text-[#14422E]'
                    }`}
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            </div>
          )}
        </header>
      </div>

      {/* Spacious Navbar Clearance Spacer to ensure clean separation from content below */}
      <div className="h-20 sm:h-24"></div>
    </>
  );
};
