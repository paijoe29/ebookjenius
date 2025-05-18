import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const CallToAction = () => {
  const [showCombinedPrice, setShowCombinedPrice] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowCombinedPrice(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="bg-blue-600 text-white py-16 text-center">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Siap Mengubah Potensi Anda?
        </h2>
        <p className="text-lg md:text-2xl mb-10 max-w-2xl mx-auto">
          Jangan lewatkan kesempatan untuk menguasai AI, coding, dan digital marketing. Dapatkan koleksi ebook jenius sekarang juga!
        </p>

        <div className="flex justify-center mt-12">
          <Card className="w-full max-w-sm bg-white shadow-lg rounded-lg overflow-hidden text-gray-900">
            <CardHeader className="bg-blue-700 text-white py-6">
              <CardTitle className="text-2xl sm:text-3xl font-bold">
                Koleksi Lengkap Ebook
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6 sm:p-8">
              <div className="mb-6 h-16 flex items-center justify-center relative">
                <div className={`absolute inset-0 flex items-center justify-center transition-opacity duration-500 ease-in-out ${showCombinedPrice ? 'opacity-0' : 'opacity-100'}`}>
                  <span className="text-xl sm:text-2xl font-bold text-gray-900">3 Ebook = 3 x Rp 129.000</span>
                </div>
                <div className={`absolute inset-0 flex items-center justify-center transition-all duration-500 ease-in-out ${showCombinedPrice ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
                   <span className="text-4xl sm:text-5xl font-bold text-gray-900">
                     Rp 299.000
                   </span>
                </div>
              </div>
              <p className="text-gray-700 mb-8 leading-relaxed text-sm sm:text-base">
                Dapatkan akses ke semua ebook: Prompt Jenius, Vibe Coding Jenius, dan Digital Marketing Jenius. Panduan lengkap untuk menguasai skill digital masa kini.
              </p>
              <Button className="w-full bg-yellow-400 hover:bg-yellow-500 text-blue-900 text-base px-6 py-3 md:text-lg md:px-8 md:py-5 rounded-md font-semibold">
                Beli Koleksi Sekarang!
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;