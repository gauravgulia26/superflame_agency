import { useState } from 'react';
import { LenisSmoothScroll } from './components/LenisSmoothScroll';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { ProductsCarousel } from './components/ProductsCarousel';
import { CommercialBulkSection } from './components/CommercialBulkSection';
import { SafetyTrustSection } from './components/SafetyTrustSection';
import { ContactSection } from './components/ContactSection';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';
import { SupplyRequestModal } from './components/SupplyRequestModal';
import { QuickFloatingActions } from './components/QuickFloatingActions';

export function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedCylinderForModal, setSelectedCylinderForModal] = useState<string>('19 KG');
  const [selectedProductId, setSelectedProductId] = useState<string | null>(null);

  const handleOpenOrderModal = (cylinderSize?: string) => {
    if (cylinderSize) {
      setSelectedCylinderForModal(cylinderSize);
    }
    setModalOpen(true);
  };

  const handleSelectProduct = (cylinderId: string) => {
    setSelectedProductId(cylinderId);
    const el = document.getElementById('products');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F3EFE6] text-[#181F1C] selection:bg-[#C4841D]/25 selection:text-[#14422E] overflow-x-hidden">
      {/* Physics-based Smooth Scrolling */}
      <LenisSmoothScroll />

      {/* Navigation */}
      <Navbar onOpenOrderModal={handleOpenOrderModal} />

      {/* Main Content Sections */}
      <main className="flex-grow">
        <HeroSection 
          onOpenOrderModal={handleOpenOrderModal} 
          onSelectProduct={handleSelectProduct}
        />
        
        <AboutSection 
          onOpenOrderModal={() => handleOpenOrderModal('19 KG')} 
        />
        
        <ProductsCarousel 
          onOpenOrderModal={handleOpenOrderModal}
          selectedProductId={selectedProductId}
        />
        
        <CommercialBulkSection 
          onOpenOrderModal={handleOpenOrderModal} 
        />
        
        <SafetyTrustSection />
        
        <ContactSection />
        
        <FaqSection />
      </main>

      {/* Footer */}
      <Footer onOpenOrderModal={handleOpenOrderModal} />

      {/* Mobile Sticky Navigation + Desktop Floating Actions */}
      <QuickFloatingActions onOpenOrderModal={handleOpenOrderModal} />

      {/* Interactive Supply Request Modal */}
      <SupplyRequestModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        initialCylinderSize={selectedCylinderForModal}
      />
    </div>
  );
}

export default App;
