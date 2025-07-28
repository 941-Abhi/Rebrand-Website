'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import ProductSection from '@/components/ProductSection';
import AboutSection from '@/components/AboutSection';
import Footer from '@/components/Footer';
import ContactSection from '@/components/ContactSection';
import BackToTop from '@/components/BackToTop';
import ProductDetail from '@/components/ProductDetail';
import TestRideBooking from '@/components/TestRideBooking';

export default function Home() {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [showTestRide, setShowTestRide] = useState(false);

  if (selectedProduct) {
    return <ProductDetail product={selectedProduct} onBack={() => setSelectedProduct(null)} />;
  }

  if (showTestRide) {
    return <TestRideBooking onBack={() => setShowTestRide(false)} />;
  }

  return (
    <main className="min-h-screen bg-black text-white">
      <Header 
        onExploreClick={() => document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })}
        onAboutClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
        onTestRideClick={() => setShowTestRide(true)}
      />
      <Hero onTestRideClick={() => setShowTestRide(true)} />
      <ProductSection onProductClick={setSelectedProduct} />
      <AboutSection />
      <ContactSection />
      <Footer />
      <BackToTop />
    </main>
  );
}