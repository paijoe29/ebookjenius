import React from 'react';
import AnimatedSection from '@/components/AnimatedSection';
import { Card, CardContent, CardDescription, CardFooter, CardHeader } from "@/components/ui/card"; // CardTitle tidak lagi diimpor jika tidak digunakan
import { Button } from "@/components/ui/button";
import { Zap, ShoppingCart } from 'lucide-react';

const EbookDigitalMarketing = () => {
  return (
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
              <CardHeader className="pt-8 md:pt-12 px-6 md:px-10 pb-6 border-b border-gray-200">
                {/* Menggunakan h2 secara langsung */}
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-800 mb-1">Digital Marketing Jenius</h2>
                <CardDescription className="text-lg sm:text-xl text-gray-600 italic">Dominasi Dunia Online</CardDescription>
              </CardHeader>
              <CardContent className="text-gray-700 leading-relaxed px-6 md:px-10 pt-6">
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
  );
};

export default EbookDigitalMarketing;