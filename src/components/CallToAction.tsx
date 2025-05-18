import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Gift, CheckCircle, ShieldCheck, Zap } from 'lucide-react';

const CallToAction = () => {
  const [showCombinedPrice, setShowCombinedPrice] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowCombinedPrice(true);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="cta" className="py-16 md:py-24 bg-gradient-to-br from-blue-700 via-purple-700 to-pink-600 text-white">
      <div className="container mx-auto px-4 text-center">
        <Zap size={64} className="mx-auto mb-6 text-yellow-300 animate-pulse" />
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
          Penawaran Terbaik Untuk Jadi Jenius!
        </h2>
        <p className="text-lg md:text-xl text-blue-100 mb-10 md:mb-12 max-w-3xl mx-auto">
          Jangan tunda lagi! Dapatkan akses instan ke semua materi, update mendatang, dan komunitas eksklusif dengan harga spesial yang tidak akan terulang.
        </p>

        <div className="flex justify-center">
          <Card className="w-full max-w-lg bg-white shadow-2xl rounded-xl overflow-hidden text-gray-900 transform hover:scale-[1.02] transition-transform duration-300">
            <CardHeader className="bg-yellow-400 text-blue-900 py-6 px-6 text-left">
              <div className="flex items-center mb-2">
                <Gift size={32} className="mr-3 text-blue-700" />
                <CardTitle className="text-2xl sm:text-3xl font-bold">
                  Koleksi Lengkap Ebook Jenius
                </CardTitle>
              </div>
              <CardDescription className="text-blue-800 text-sm sm:text-base">
                Semua yang Anda butuhkan untuk upgrade skill digital.
              </CardDescription>
            </CardHeader>
            <CardContent className="p-6 sm:p-8">
              <div className="mb-8 h-20 flex items-center justify-center relative">
                <div className={`absolute inset-0 flex flex-col items-center justify-center transition-all duration-500 ease-in-out ${showCombinedPrice ? 'opacity-0 scale-90 -translate-y-2' : 'opacity-100 scale-100 translate-y-0'}`}>
                  <span className="text-lg sm:text-xl text-gray-500 line-through">Harga Normal: Rp 387.000</span>
                  <span className="text-sm text-red-600 font-semibold bg-red-100 px-2 py-0.5 rounded-md">Hemat Lebih Dari 20%!</span>
                </div>
                <div className={`absolute inset-0 flex items-center justify-center transition-all duration-500 ease-in-out ${showCombinedPrice ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-105 translate-y-2'}`}>
                   <span className="text-5xl sm:text-6xl font-extrabold text-blue-600">
                     Rp 299.000
                   </span>
                </div>
              </div>
              
              <ul className="space-y-3 text-left mb-8 text-gray-700 text-sm sm:text-base">
                <li className="flex items-center">
                  <CheckCircle size={20} className="text-green-500 mr-3 flex-shrink-0" />
                  Akses ke 3 Ebook Utama (AI, Coding, Marketing)
                </li>
                <li className="flex items-center">
                  <CheckCircle size={20} className="text-green-500 mr-3 flex-shrink-0" />
                  Studi Kasus & Contoh Praktis Langsung Terapkan
                </li>
                <li className="flex items-center">
                  <CheckCircle size={20} className="text-green-500 mr-3 flex-shrink-0" />
                  Update Materi Gratis Berkala Selamanya
                </li>
                 <li className="flex items-center">
                  <CheckCircle size={20} className="text-green-500 mr-3 flex-shrink-0" />
                  Bonus Template & Sumber Daya Premium
                </li>
              </ul>

              <Button 
                asChild 
                size="lg" 
                className="w-full bg-blue-600 hover:bg-blue-700 text-white text-lg px-8 py-5 md:text-xl md:px-10 md:py-6 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <a href="https://lynk.id/orifin" target="_blank" rel="noopener noreferrer">
                  Dapatkan Akses Sekarang Juga!
                </a>
              </Button>
              <p className="text-center text-gray-500 text-xs sm:text-sm mt-4 flex items-center justify-center">
                <ShieldCheck size={16} className="mr-1.5 text-green-600" /> Jaminan Uang Kembali 100% dalam 30 Hari
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;