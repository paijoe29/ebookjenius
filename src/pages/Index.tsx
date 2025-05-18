import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import Navbar from '@/components/Navbar';
import CallToAction from '@/components/CallToAction';
import Footer from '@/components/Footer';
import HeroPricingCard from '@/components/HeroPricingCard';
import FeaturesSection from '@/components/FeaturesSection';
import ComparisonSection from '@/components/ComparisonSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import ContactFormSection from '@/components/ContactFormSection';
import AnimatedSection from '@/components/AnimatedSection';
import LimitedOfferCountdown from '@/components/LimitedOfferCountdown';
import FreeEbookOfferPopup from '@/components/FreeEbookOfferPopup';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, Code, Zap, ShoppingCart } from 'lucide-react';

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

      <AnimatedSection as="section" animationType="from-bottom" id="features" className="container mx-auto px-4 py-16">
        <FeaturesSection />
      </AnimatedSection>
      
      <AnimatedSection animationType="from-right" id="comparison">
        <ComparisonSection />
      </AnimatedSection>

      <div className="container mx-auto px-4">
        <hr className="border-t border-gray-200 my-10" />
      </div>

      {/* Ebook 1: Prompt Jenius */}
      <AnimatedSection as="section" animationType="from-left" delay={200} id="prompt-jenius" className="py-16">
        <div className="container mx-auto px-4">
          <Card className="overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 border-blue-200 rounded-xl">
            <div className="md:flex">
              <div className="md:w-2/5 bg-blue-50 p-6 md:p-8 flex items-center justify-center">
                <div className="w-full aspect-[3/4] max-w-[280px] bg-gradient-to-br from-blue-500 to-blue-700 rounded-xl shadow-2xl flex flex-col items-center justify-center p-6 sm:p-8 text-white text-center">
                  <BookOpen className="w-16 h-16 sm:w-20 mb-4 sm:mb-6 opacity-90" />
                  <h3 className="text-2xl sm:text-3xl font-bold">Prompt Jenius</h3>
                  <p className="text-blue-200 mt-1 text-xs sm:text-sm">Kuasai Seni Berbicara dengan AI</p>
                </div>
              </div>
              <div className="md:w-3/5 flex flex-col justify-center">
                <CardHeader className="pt-6 md:pt-12 px-6 md:px-10">
                  <CardTitle className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-700">Prompt Jenius</CardTitle>
                  <CardDescription className="text-base sm:text-lg text-gray-600 mt-2">Kuasai Seni Berbicara dengan AI</CardDescription>
                </CardHeader>
                <CardContent className="text-gray-700 leading-relaxed px-6 md:px-10">
                  <p className="mb-6 text-sm sm:text-base">
                    Bosan dengan jawaban AI yang biasa saja? Ebook ini akan membongkar formula rahasia untuk menciptakan prompt yang menghasilkan output luar biasa, kreatif, dan tepat sasaran. Jadilah master komunikasi dengan kecerdasan buatan!
                  </p>
                  <div className="my-6 text-center md:text-left">
                    <p className="text-gray-500 text-xs sm:text-sm">Harga Spesial Ebook</p>
                    <p className="text-3xl sm:text-4xl font-extrabold text-blue-700 mt-1">Rp 129.000</p>
                  </div>
                </CardContent>
                <CardFooter className="pb-6 md:pb-12 px-6 md:px-10">
                  <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700 text-white w-full md:w-auto text-base px-6 py-3 md:text-lg md:px-8 md:py-5 rounded-lg font-semibold">
                    <a href="https://lynk.id/orifin/order/prompt-jenius" target="_blank" rel="noopener noreferrer">
                      <ShoppingCart className="w-[18px] h-[18px] sm:w-5 sm:h-5 mr-2" /> Beli Sekarang
                    </a>
                  </Button>
                </CardFooter>
              </div>
            </div>
          </Card>
        </div>
      </AnimatedSection>

      <div className="container mx-auto px-4">
        <hr className="border-t border-gray-200 my-10" />
      </div>

      {/* Ebook 2: Vibe Coding Jenius */}
      <AnimatedSection as="section" animationType="from-right" delay={200} id="vibe-coding" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <Card className="overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 border-yellow-300 rounded-xl">
            <div className="md:flex md:flex-row-reverse">
              <div className="md:w-2/5 bg-yellow-50 p-6 md:p-8 flex items-center justify-center">
                <div className="w-full aspect-[3/4] max-w-[280px] bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-xl shadow-2xl flex flex-col items-center justify-center p-6 sm:p-8 text-gray-900 text-center">
                  <Code className="w-16 h-16 sm:w-20 mb-4 sm:mb-6 opacity-90" />
                  <h3 className="text-2xl sm:text-3xl font-bold">Vibe Coding Jenius</h3>
                  <p className="text-yellow-700 mt-1 text-xs sm:text-sm">Temukan Flow State dalam Ngoding</p>
                </div>
              </div>
              <div className="md:w-3/5 flex flex-col justify-center">
                <CardHeader className="pt-6 md:pt-12 px-6 md:px-10">
                  <CardTitle className="text-2xl sm:text-3xl md:text-4xl font-bold text-yellow-600">Vibe Coding Jenius</CardTitle>
                  <CardDescription className="text-base sm:text-lg text-gray-600 mt-2">Temukan Flow State dalam Ngoding</CardDescription>
                </CardHeader>
                <CardContent className="text-gray-700 leading-relaxed px-6 md:px-10">
                  <p className="mb-6 text-sm sm:text-base">
                    Ngoding terasa berat dan membosankan? Ebook ini bukan hanya tentang sintaks, tapi tentang membangun kebiasaan dan pola pikir agar Anda bisa ngoding dengan santai, efisien, dan penuh semangat. Rasakan "vibe" ngoding yang sebenarnya!
                  </p>
                  <div className="my-6 text-center md:text-left">
                    <p className="text-gray-500 text-xs sm:text-sm">Harga Spesial Ebook</p>
                    <p className="text-3xl sm:text-4xl font-extrabold text-yellow-600 mt-1">Rp 129.000</p>
                  </div>
                </CardContent>
                <CardFooter className="pb-6 md:pb-12 px-6 md:px-10">
                  <Button asChild size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 w-full md:w-auto text-base px-6 py-3 md:text-lg md:px-8 md:py-5 rounded-lg font-semibold">
                    <a href="https://lynk.id/orifin/order/vibe-coding-jenius" target="_blank" rel="noopener noreferrer">
                      <ShoppingCart className="w-[18px] h-[18px] sm:w-5 sm:h-5 mr-2" /> Beli Sekarang
                    </a>
                  </Button>
                </CardFooter>
              </div>
            </div>
          </Card>
        </div>
      </AnimatedSection>

      <div className="container mx-auto px-4">
        <hr className="border-t border-gray-200 my-10" />
      </div>

      {/* Ebook 3: Digital Marketing Jenius */}
      <AnimatedSection as="section" animationType="from-left" delay={200} id="digital-marketing" className="py-16">
        <div className="container mx-auto px-4">
          <Card className="overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 border-gray-300 rounded-xl">
            <div className="md:flex">
              <div className="md:w-2/5 bg-gray-100 p-6 md:p-8 flex items-center justify-center">
                <div className="w-full aspect-[3/4] max-w-[280px] bg-gradient-to-br from-gray-700 to-gray-900 rounded-xl shadow-2xl flex flex-col items-center justify-center p-6 sm:p-8 text-white text-center">
                  <Zap className="w-16 h-16 sm:w-20 mb-4 sm:mb-6 opacity-90" />
                  <h3 className="text-2xl sm:text-3xl font-bold">Digital Marketing Jenius</h3>
                  <p className="text-gray-300 mt-1 text-xs sm:text-sm">Dominasi Dunia Online</p>
                </div>
              </div>
              <div className="md:w-3/5 flex flex-col justify-center">
                <CardHeader className="pt-6 md:pt-12 px-6 md:px-10">
                  <CardTitle className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800">Digital Marketing Jenius</CardTitle>
                  <CardDescription className="text-base sm:text-lg text-gray-600 mt-2">Dominasi Dunia Online</CardDescription>
                </CardHeader>
                <CardContent className="text-gray-700 leading-relaxed px-6 md:px-10">
                  <p className="mb-6 text-sm sm:text-base">
                    Ingin bisnis Anda meledak di dunia digital? Ebook ini adalah panduan lengkap strategi marketing online yang terbukti efektif, dari sosial media hingga SEO. Tarik pelanggan, tingkatkan penjualan, dan jadilah jenius marketing!
                  </p>
                  <div className="my-6 text-center md:text-left">
                    <p className="text-gray-500 text-xs sm:text-sm">Harga Spesial Ebook</p>
                    <p className="text-3xl sm:text-4xl font-extrabold text-gray-800 mt-1">Rp 129.000</p>
                  </div>
                </CardContent>
                <CardFooter className="pb-6 md:pb-12 px-6 md:px-10">
                  <Button asChild size="lg" className="bg-gray-800 hover:bg-black text-white w-full md:w-auto text-base px-6 py-3 md:text-lg md:px-8 md:py-5 rounded-lg font-semibold">
                    <a href="https://lynk.id/orifin/order/digital-marketing-jenius" target="_blank" rel="noopener noreferrer">
                      <ShoppingCart className="w-[18px] h-[18px] sm:w-5 sm:h-5 mr-2" /> Beli Sekarang
                    </a>
                  </Button>
                </CardFooter>
              </div>
            </div>
          </Card>
        </div>
      </AnimatedSection>

      <div className="container mx-auto px-4">
        <hr className="border-t border-gray-200 my-10" />
      </div>
      
      <AnimatedSection as="section" animationType="fade-in" delay={200} id="testimonials">
        <TestimonialsSection />
      </AnimatedSection>

      <div className="container mx-auto px-4">
        <hr className="border-t border-gray-200 my-10" />
      </div>

      <AnimatedSection as="section" animationType="fade-in" delay={300} id="cta">
        <CallToAction />
      </AnimatedSection>
      
      <div className="container mx-auto px-4">
        <hr className="border-t border-gray-200 my-10" />
      </div>

      <AnimatedSection as="section" animationType="from-bottom" delay={200} id="contact-form">
        <ContactFormSection />
      </AnimatedSection>

      <Footer />
    </div>
  );
};

export default Index;