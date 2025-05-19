import React from 'react';
import AnimatedSection from '@/components/AnimatedSection';
import { Card, CardContent, CardDescription, CardFooter, CardHeader } from "@/components/ui/card"; // CardTitle tidak lagi diimpor jika tidak digunakan
import { Button } from "@/components/ui/button";
import { BookOpen, ShoppingCart } from 'lucide-react';

const EbookPromptJenius = () => {
  return (
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
              <CardHeader className="pt-8 md:pt-12 px-6 md:px-10 pb-6 border-b border-blue-100">
                {/* Menggunakan h2 secara langsung */}
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-blue-700 mb-1">Prompt Jenius</h2>
                <CardDescription className="text-lg sm:text-xl text-blue-600 italic">Kuasai Seni Berbicara dengan AI</CardDescription>
              </CardHeader>
              <CardContent className="text-gray-700 leading-relaxed px-6 md:px-10 pt-6">
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
  );
};

export default EbookPromptJenius;