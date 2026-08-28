import React, { useState, useEffect, useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { motion } from 'framer-motion';
import { 
  ChevronLeft, 
  ChevronRight, 
  ShieldCheck, 
  Flame, 
  Check, 
  ArrowUpRight, 
  Info,
  Maximize2,
  X
} from 'lucide-react';
import { CYLINDER_PRODUCTS } from '../data/businessData';

interface ProductsCarouselProps {
  onOpenOrderModal: (cylinderSize: string) => void;
  selectedProductId?: string | null;
}

export const ProductsCarousel: React.FC<ProductsCarouselProps> = ({ 
  onOpenOrderModal, 
  selectedProductId 
}) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    loop: false, 
    align: 'center',
    skipSnaps: false,
    dragFree: false
  });
  
  const [selectedIndex, setSelectedIndex] = useState(1);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);
  const [activeTab, setActiveTab] = useState<'specs' | 'uses' | 'features'>('specs');
  const [lightboxPoster, setLightboxPoster] = useState<{ src: string; title: string } | null>(null);

  const scrollTo = useCallback((index: number) => {
    if (emblaApi) emblaApi.scrollTo(index);
  }, [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    setScrollSnaps(emblaApi.scrollSnapList());
    emblaApi.on('select', onSelect);
    emblaApi.on('reInit', onSelect);

    return () => {
      emblaApi.off('select', onSelect);
    };
  }, [emblaApi, onSelect]);

  useEffect(() => {
    if (selectedProductId && emblaApi) {
      const idx = CYLINDER_PRODUCTS.findIndex(p => p.id === selectedProductId);
      if (idx !== -1) {
        emblaApi.scrollTo(idx);
      }
    }
  }, [selectedProductId, emblaApi]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const activeEl = document.activeElement;
      if (activeEl?.tagName === 'INPUT' || activeEl?.tagName === 'TEXTAREA') return;

      if (e.key === 'ArrowLeft') {
        emblaApi?.scrollPrev();
      } else if (e.key === 'ArrowRight') {
        emblaApi?.scrollNext();
      } else if (e.key === 'Escape') {
        setLightboxPoster(null);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [emblaApi]);

  const activeProduct = CYLINDER_PRODUCTS[selectedIndex] || CYLINDER_PRODUCTS[1];

  return (
    <section id="products" className="py-10 sm:py-20 bg-[#EFEAE0]/80 relative overflow-hidden border-t border-b border-[#DCD2C0]">
      
      {/* Background Accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] sm:w-[850px] h-[350px] sm:h-[550px] bg-[#C4841D]/10 rounded-full blur-3xl -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div 
          className="flex flex-col md:flex-row md:items-end justify-between mb-5 sm:mb-8 pb-3 sm:pb-6 border-b border-[#DCD2C0]"
          initial={{ opacity: 0, scale: 0.96, filter: 'blur(6px)', y: 15 }}
          whileInView={{ opacity: 1, scale: 1, filter: 'blur(0px)', y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="space-y-1 sm:space-y-2 max-w-2xl text-left">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FAF0DC] border border-[#C4841D]/40 text-[11px] sm:text-xs font-bold uppercase tracking-wider text-[#9A6410]">
              <Flame className="w-3.5 h-3.5 text-[#E59C24]" />
              <span>All 4 Official Super Gas Capacities</span>
            </div>
            <h2 className="font-serif text-2xl sm:text-4xl text-[#181F1C] font-bold tracking-tight">
              Super Gas <span className="italic font-serif text-[#14422E]">Cylinder Range</span>
            </h2>
            <p className="text-xs sm:text-sm text-[#5A6660] leading-relaxed">
              Official Super Gas cylinders in full high definition. Swipe or tap below to explore capacities.
            </p>
          </div>

          {/* Quick Filter Switcher Pills */}
          <div className="mt-2.5 md:mt-0 flex overflow-x-auto pb-1 sm:pb-0 items-center gap-1 sm:gap-1.5 bg-white/90 p-1 sm:p-1.5 rounded-2xl border border-[#DCD2C0] shadow-luxury-sm no-scrollbar">
            {CYLINDER_PRODUCTS.map((prod, idx) => (
              <button
                key={prod.id}
                onClick={() => scrollTo(idx)}
                className={`px-2.5 sm:px-3 py-1 sm:py-1.5 text-[11px] sm:text-xs font-bold rounded-xl whitespace-nowrap transition-all duration-200 ${
                  selectedIndex === idx
                    ? 'bg-gradient-to-r from-[#14422E] to-[#1D5A3F] text-white shadow-sm scale-105 border border-[#C4841D]/40'
                    : 'text-[#5A6660] hover:bg-[#FAF8F4] hover:text-[#14422E]'
                }`}
              >
                {prod.size}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Carousel Controls */}
        <div className="flex items-center justify-between mb-2 text-[11px] sm:text-xs text-[#5A6660]">
          <div className="flex items-center gap-1.5">
            <span className="font-semibold text-[#14422E]">Swipe to browse</span>
            <span className="text-[#BFB199]">•</span>
            <span className="text-[10px] text-[#9A6410] font-medium">{activeProduct.name}</span>
          </div>

          <div className="flex items-center space-x-1.5">
            <button
              onClick={() => emblaApi?.scrollPrev()}
              disabled={selectedIndex === 0}
              aria-label="Previous Cylinder"
              className="p-1.5 sm:p-2 rounded-xl bg-white border border-[#DCD2C0] text-[#14422E] hover:bg-[#14422E] hover:text-white disabled:opacity-30 disabled:pointer-events-none transition-all shadow-luxury-sm"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <span className="font-mono text-xs font-bold px-1 text-[#181F1C]">
              0{selectedIndex + 1} / 0{CYLINDER_PRODUCTS.length}
            </span>
            <button
              onClick={() => emblaApi?.scrollNext()}
              disabled={selectedIndex === CYLINDER_PRODUCTS.length - 1}
              aria-label="Next Cylinder"
              className="p-1.5 sm:p-2 rounded-xl bg-white border border-[#DCD2C0] text-[#14422E] hover:bg-[#14422E] hover:text-white disabled:opacity-30 disabled:pointer-events-none transition-all shadow-luxury-sm"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Embla Carousel Viewport */}
        <div className="overflow-hidden py-1.5 -mx-3 px-3 sm:mx-0 sm:px-0 cursor-grab active:cursor-grabbing" ref={emblaRef}>
          <div className="flex -ml-3 sm:-ml-6 touch-pan-y">
            {CYLINDER_PRODUCTS.map((prod, idx) => {
              const isActive = selectedIndex === idx;
              return (
                <div
                  key={prod.id}
                  className="flex-[0_0_88%] sm:flex-[0_0_58%] lg:flex-[0_0_40%] xl:flex-[0_0_34%] pl-3 sm:pl-6 transition-all duration-300 select-none"
                  onClick={() => scrollTo(idx)}
                >
                  <motion.div
                    className={`h-full rounded-2xl transition-all duration-300 p-3 sm:p-5 flex flex-col justify-between ${
                      isActive
                        ? 'luxury-card border-[#C4841D]/60 shadow-luxury-lg scale-[1.02] bg-white ring-1 ring-[#C4841D]/30'
                        : 'bg-white/85 border border-[#DCD2C0] opacity-85 hover:opacity-100 hover:border-[#14422E]/30 shadow-luxury-sm'
                    }`}
                    initial={{ opacity: 0, scale: 0.94, filter: 'blur(6px)' }}
                    whileInView={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.08 }}
                  >
                    {/* Top Tag & Capacity */}
                    <div className="flex items-center justify-between gap-1.5 mb-2">
                      <span className="text-[9px] sm:text-[10px] font-bold uppercase tracking-wider text-[#9A6410] bg-[#FAF0DC] px-2 py-0.5 rounded-full border border-[#C4841D]/40">
                        {prod.category}
                      </span>
                      
                      <span className="text-[10px] sm:text-xs font-bold font-mono text-[#14422E] bg-[#E2EFE7] px-2 py-0.5 rounded-md border border-[#14422E]/20">
                        {prod.size}
                      </span>
                    </div>

                    {/* FULL UNCUT POSTER CONTAINER (Fitted Perfectly with Zero Cropping) */}
                    <div 
                      className="relative aspect-square w-full rounded-xl bg-gradient-to-b from-[#FAF8F4] to-[#EFEAE0] p-1 sm:p-2 flex items-center justify-center border border-[#DCD2C0] overflow-hidden group cursor-pointer shadow-xs"
                      onClick={(e) => {
                        e.stopPropagation();
                        setLightboxPoster({ src: prod.posterImage, title: prod.name });
                      }}
                      title="Tap to view full high-res poster"
                    >
                      <img
                        src={prod.posterImage}
                        alt={`${prod.name} Official Super Gas Poster`}
                        className="w-full h-full object-contain rounded-lg drop-shadow-sm transition-transform duration-300 group-hover:scale-105"
                        loading="lazy"
                      />

                      {/* Lightbox zoom hint */}
                      <div className="absolute top-2 right-2 p-1.5 rounded-lg bg-black/50 text-white opacity-70 group-hover:opacity-100 backdrop-blur-sm transition-opacity">
                        <Maximize2 className="w-3.5 h-3.5" />
                      </div>
                    </div>

                    {/* Product Name & Short Tagline */}
                    <div className="mt-2.5 space-y-0.5 text-left">
                      <h3 className="font-serif font-bold text-base sm:text-lg text-[#181F1C] leading-tight">
                        {prod.name}
                      </h3>
                      <p className="text-[11px] sm:text-xs font-bold text-[#9A6410]">
                        {prod.tagline}
                      </p>
                    </div>

                    {/* Action Button */}
                    <div className="mt-3 pt-2 border-t border-[#DCD2C0]">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          onOpenOrderModal(prod.size);
                        }}
                        className="w-full inline-flex items-center justify-center gap-1.5 py-2 sm:py-2.5 rounded-xl bg-gradient-to-r from-[#14422E] to-[#1D5A3F] text-white text-xs font-bold uppercase tracking-wider hover:brightness-105 active:scale-[0.98] transition-all shadow-luxury-sm border border-[#C4841D]/40"
                      >
                        <span>Book {prod.size}</span>
                        <ArrowUpRight className="w-3.5 h-3.5 text-[#E59C24]" />
                      </button>
                    </div>

                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center items-center gap-1.5 sm:gap-2 mt-3 sm:mt-5">
          {scrollSnaps.map((_, idx) => (
            <button
              key={idx}
              onClick={() => scrollTo(idx)}
              className={`h-1.5 sm:h-2 rounded-full transition-all duration-300 ${
                selectedIndex === idx
                  ? 'w-6 sm:w-8 bg-[#14422E]'
                  : 'w-1.5 sm:w-2 bg-[#BFB199] hover:bg-[#C4841D]'
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>

        {/* Detailed Specs Drawer */}
        <motion.div 
          className="mt-6 sm:mt-10 luxury-card rounded-2xl p-4 sm:p-7 border border-[#C4841D]/35 shadow-luxury-md text-left"
          initial={{ opacity: 0, scale: 0.95, filter: 'blur(6px)', y: 20 }}
          whileInView={{ opacity: 1, scale: 1, filter: 'blur(0px)', y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-3 sm:pb-4 border-b border-[#DCD2C0] gap-2">
            <div>
              <div className="text-[9px] sm:text-[10px] uppercase font-bold tracking-widest text-[#9A6410]">
                Super Gas Specifications
              </div>
              <h3 className="font-serif font-bold text-lg sm:text-2xl text-[#181F1C]">
                {activeProduct.name}
              </h3>
            </div>

            {/* Spec Tab Toggle */}
            <div className="flex items-center gap-1 bg-[#FAF8F4] p-1 rounded-xl border border-[#DCD2C0] self-start sm:self-auto">
              <button
                onClick={() => setActiveTab('specs')}
                className={`px-2.5 sm:px-3 py-1 sm:py-1.5 text-[11px] sm:text-xs font-bold rounded-lg transition-all ${
                  activeTab === 'specs' ? 'bg-[#14422E] text-white shadow-xs' : 'text-[#5A6660] hover:text-[#14422E]'
                }`}
              >
                Specs
              </button>
              <button
                onClick={() => setActiveTab('uses')}
                className={`px-2.5 sm:px-3 py-1 sm:py-1.5 text-[11px] sm:text-xs font-bold rounded-lg transition-all ${
                  activeTab === 'uses' ? 'bg-[#14422E] text-white shadow-xs' : 'text-[#5A6660] hover:text-[#14422E]'
                }`}
              >
                Uses
              </button>
              <button
                onClick={() => setActiveTab('features')}
                className={`px-2.5 sm:px-3 py-1 sm:py-1.5 text-[11px] sm:text-xs font-bold rounded-lg transition-all ${
                  activeTab === 'features' ? 'bg-[#14422E] text-white shadow-xs' : 'text-[#5A6660] hover:text-[#14422E]'
                }`}
              >
                Features
              </button>
            </div>
          </div>

          {/* Active Tab Body */}
          <div className="mt-3 sm:mt-5">
            {activeTab === 'specs' && (
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 sm:gap-2.5">
                <div className="p-2.5 sm:p-3 rounded-xl bg-white border border-[#DCD2C0]">
                  <div className="text-[9px] font-bold uppercase text-[#5A6660]">Net Capacity</div>
                  <div className="text-xs sm:text-sm font-bold font-serif text-[#14422E] mt-0.5">{activeProduct.specs.gasCapacity}</div>
                </div>
                <div className="p-2.5 sm:p-3 rounded-xl bg-white border border-[#DCD2C0]">
                  <div className="text-[9px] font-bold uppercase text-[#5A6660]">Tare Weight</div>
                  <div className="text-[11px] sm:text-xs font-bold text-[#181F1C] mt-0.5">{activeProduct.specs.tareWeight}</div>
                </div>
                <div className="p-2.5 sm:p-3 rounded-xl bg-white border border-[#DCD2C0]">
                  <div className="text-[9px] font-bold uppercase text-[#5A6660]">Height</div>
                  <div className="text-[11px] sm:text-xs font-bold text-[#181F1C] mt-0.5">{activeProduct.specs.height}</div>
                </div>
                <div className="p-2.5 sm:p-3 rounded-xl bg-white border border-[#DCD2C0]">
                  <div className="text-[9px] font-bold uppercase text-[#5A6660]">Diameter</div>
                  <div className="text-[11px] sm:text-xs font-bold text-[#181F1C] mt-0.5">{activeProduct.specs.diameter}</div>
                </div>
                <div className="p-2.5 sm:p-3 rounded-xl bg-white border border-[#DCD2C0]">
                  <div className="text-[9px] font-bold uppercase text-[#5A6660]">Valve Type</div>
                  <div className="text-[11px] sm:text-xs font-bold text-[#181F1C] mt-0.5 truncate" title={activeProduct.specs.valveType}>{activeProduct.specs.valveType}</div>
                </div>
                <div className="p-2.5 sm:p-3 rounded-xl bg-white border border-[#DCD2C0]">
                  <div className="text-[9px] font-bold uppercase text-[#5A6660]">Off-Take Mode</div>
                  <div className="text-[11px] sm:text-xs font-bold text-[#9A6410] mt-0.5">{activeProduct.specs.offTakeType}</div>
                </div>
              </div>
            )}

            {activeTab === 'uses' && (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-2.5">
                {activeProduct.idealFor.map((use, i) => (
                  <div key={i} className="p-2.5 sm:p-3 rounded-xl bg-white border border-[#DCD2C0] flex items-start gap-2">
                    <Check className="w-3.5 h-3.5 text-[#14422E] shrink-0 mt-0.5" />
                    <span className="text-xs font-semibold text-[#181F1C]">{use}</span>
                  </div>
                ))}
              </div>
            )}

            {activeTab === 'features' && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-2.5">
                {activeProduct.features.map((feat, i) => (
                  <div key={i} className="p-2.5 sm:p-3 rounded-xl bg-white border border-[#DCD2C0] flex items-start gap-2">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#14422E] shrink-0 mt-0.5" />
                    <span className="text-xs font-semibold text-[#181F1C]">{feat}</span>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Pricing Note & Booking CTA */}
          <div className="mt-4 pt-3 sm:pt-4 border-t border-[#DCD2C0] flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-2">
            <div className="flex items-center gap-1.5 text-xs text-[#5A6660]">
              <Info className="w-4 h-4 text-[#C4841D] shrink-0" />
              <span>Official Super Gas tariff with commercial discount slabs.</span>
            </div>

            <button
              onClick={() => onOpenOrderModal(activeProduct.size)}
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#14422E] to-[#1D5A3F] text-white text-xs font-bold uppercase tracking-wider hover:brightness-105 active:scale-[0.98] transition-all shadow-sm border border-[#C4841D]/40"
            >
              <span>Order {activeProduct.size} Supply</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-[#E59C24]" />
            </button>
          </div>

        </motion.div>

      </div>

      {/* Full-Size Poster Lightbox Modal */}
      {lightboxPoster && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-md animate-in fade-in duration-200"
          onClick={() => setLightboxPoster(null)}
        >
          <div 
            className="relative max-w-2xl max-h-[90vh] bg-white rounded-2xl p-2 sm:p-3 shadow-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between p-2 border-b border-[#DCD2C0]">
              <span className="font-serif font-bold text-sm text-[#181F1C]">{lightboxPoster.title} Official Poster</span>
              <button 
                onClick={() => setLightboxPoster(null)}
                className="p-1 rounded-lg hover:bg-gray-100 text-[#5A6660]"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="p-1 flex items-center justify-center max-h-[75vh] overflow-auto">
              <img 
                src={lightboxPoster.src} 
                alt={lightboxPoster.title} 
                className="max-h-[72vh] w-auto object-contain rounded-lg"
              />
            </div>
          </div>
        </div>
      )}

    </section>
  );
};
