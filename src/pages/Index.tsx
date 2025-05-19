import React, { useEffect, lazy, Suspense } from 'react';
import { useLocation } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import HeroPricingCard from '@/components/HeroPricingCard';
import AnimatedSection from '@/components/AnimatedSection';
import LimitedOfferCountdown from '@/components/LimitedOfferCountdown';
import FreeEbookOfferPopup from '@/components/FreeEbookOfferPopup';
// Removed Card imports as they are now in child components

// Lazy load sections
const FeaturesSection = lazy(() => import('@/components/FeaturesSection'));
const ComparisonSection = lazy(() => import('@/components/ComparisonSection'));
const TestimonialsSection = lazy(() => import('@/components/TestimonialsSection'));
const CallToAction = lazy(() => import('@/components/CallToAction'));
const ContactFormSection = lazy(() => import('@/components/ContactFormSection'));

// Lazy load new ebook sections
const EbookPromptJenius = lazy(() => import('@/components/EbookPromptJenius'));
const EbookVibeCoding = lazy(() => import('@/components/EbookVibeCoding'));
const EbookDigitalMarketing = lazy(() => import('@/components/EbookDigitalMarketing'));


const Index = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const elementId = location.hash.substring(1);

      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          const element = document.getElementById(elementId);
          if (element) {
            element.scrollIntoView({ block: 'start' });
          } else {
            console.warn(`Elemen dengan id '${elementId}' tidak ditemukan untuk di-scroll setelah rAF.`);
          }
        });
      });
    }
  }, [location.hash]);

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />
      <FreeEbookOfferPopup
        delaySeconds={5}
        ebookTitle="GRATIS: Ebook Panduan Prompt AI!"
        ebookDescription="Pelajari dasar-dasar membuat prompt efektif untuk ChatGPT dan AI lainnya. Tingkatkan produktivitas Anda sekarang!"
        ctaText="Download Gratis Sekarang"
        ctaLink="https://lynk.id/orifin"
      />

      {/* Hero Section */}
      <div id="hero" className="bg-blue-600 text-white py-16 overflow-hidden">
        <section className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-12">
          <AnimatedSection animationType="from-left" delay={200} className="md:w-1/2 text-center md:text-left mb-10 md:mb-0">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Kuasai AI, Coding,<br />& Digital Marketing<br />dengan Ebook Jenius
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl mb-10 max-w-lg">
              Temukan panduan praktis dan strategi jitu untuk mengubah potensi Anda menjadi keahlian yang dicari di era digital.
            </p>
            <div className="flex flex-col sm:flex-row justify-center md:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
              <Button className="bg-yellow-400 hover:bg-yellow-500 text-blue-900 text-base px-6 py-3 md:text-lg md:px-8 md:py-5 rounded-md font-semibold w-full sm:w-auto">
                Lihat Koleksi Ebook
              </Button>
              <Button className="bg-yellow-500 hover:bg-yellow-600 text-blue-900 text-base px-6 py-3 md:text-lg md:px-8 md:py-5 rounded-md font-semibold w-full sm:w-auto">
                Hubungi Kami
              </Button>
            </div>
          </AnimatedSection>
          <AnimatedSection animationType="from-right" delay={400} className="md:w-1/2 flex justify-center md:justify-end mt-10 md:mt-0">
            <HeroPricingCard />
          </AnimatedSection>
        </section>
      </div>

      <AnimatedSection animationType="fade-in" delay={100}>
         <LimitedOfferCountdown />
      </AnimatedSection>

      <div className="container mx-auto px-4">
        <hr className="border-t border-gray-200 my-10" />
      </div>

      <Suspense fallback={null}>
        <FeaturesSection />
      </Suspense>

      <Suspense fallback={null}>
        <ComparisonSection />
      </Suspense>

      <div className="container mx-auto px-4">
        <hr className="border-t border-gray-200 my-10" />
      </div>

      <Suspense fallback={null}>
        <EbookPromptJenius />
      </Suspense>

      <div className="container mx-auto px-4">
        <hr className="border-t border-gray-200 my-10" />
      </div>

      <Suspense fallback={null}>
        <EbookVibeCoding />
      </Suspense>

      <div className="container mx-auto px-4">
        <hr className="border-t border-gray-200 my-10" />
      </div>

      <Suspense fallback={null}>
        <EbookDigitalMarketing />
      </Suspense>

      <div className="container mx-auto px-4">
        <hr className="border-t border-gray-200 my-10" />
      </div>

      <Suspense fallback={null}>
        <TestimonialsSection />
      </Suspense>

      <div className="container mx-auto px-4">
        <hr className="border-t border-gray-200 my-10" />
      </div>

      <Suspense fallback={null}>
        <CallToAction />
      </Suspense>

      <div className="container mx-auto px-4">
        <hr className="border-t border-gray-200 my-10" />
      </div>

      <Suspense fallback={null}>
        <ContactFormSection />
      </Suspense>

      <Footer />
    </div>
  );
};

export default Index;