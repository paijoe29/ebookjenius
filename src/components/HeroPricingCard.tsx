import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card"; 
import { CheckCircle2 } from 'lucide-react';

const HeroPricingCard = () => {
  const originalPrice = "Rp 387.000";
  const discountedPrice = "Rp 299.000";
  const discountPercentage = "Diskon 23%";

  return (
    <Card className="w-full max-w-sm bg-white shadow-xl rounded-lg relative">
      <div
        className="absolute top-0 right-0 transform rotate-45 translate-x-1/2 -translate-y-1/2
                   bg-red-600 text-white text-xs font-bold uppercase
                   px-6 py-1 origin-bottom-left shadow-lg z-10"
      >
        PROMO SPESIAL
      </div>

      <CardHeader className="bg-blue-700 text-white py-6 text-center">
        <h2 className="text-2xl font-bold leading-none tracking-tight">
          Koleksi Lengkap Ebook
        </h2>
      </CardHeader>

      <CardContent className="p-6">
        <div className="text-center mb-6">
          <p className="text-sm text-gray-600 line-through mb-1">{originalPrice}</p>
          <div className="inline-block bg-yellow-200 text-yellow-800 text-xs font-semibold px-2 py-1 rounded-full mb-2">
            {discountPercentage}
          </div>
          <p className="text-4xl sm:text-5xl font-bold text-gray-900">{discountedPrice}</p>
        </div>

        <ul className="text-gray-700 mb-8 space-y-3">
          <li className="flex items-center">
            <CheckCircle2 className="text-green-500 mr-2 flex-shrink-0" size={20} />
            <span>Ebook Prompt Jenius</span>
          </li>
          <li className="flex items-center">
            <CheckCircle2 className="text-green-500 mr-2 flex-shrink-0" size={20} />
            <span>Ebook Vibe Coding Jenius</span>
          </li>
          <li className="flex items-center">
            <CheckCircle2 className="text-green-500 mr-2 flex-shrink-0" size={20} />
            <span>Ebook Digital Marketing Jenius</span>
          </li>
        </ul>

        <Button className="w-full bg-yellow-400 hover:bg-yellow-500 text-blue-900 text-base px-6 py-3 md:text-lg md:px-8 md:py-5 rounded-md font-semibold shadow-lg">
          Beli Koleksi Sekarang!
        </Button>

        <p className="text-center text-gray-500 text-sm mt-4">
          Jaminan Uang Kembali
        </p>
      </CardContent>
    </Card>
  );
};

export default HeroPricingCard;