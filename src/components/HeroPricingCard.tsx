import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2 } from 'lucide-react'; // Using Lucide icon for checkmark
import { cn } from '@/lib/utils'; // Utility for combining class names

const HeroPricingCard = () => {
  const originalPrice = "Rp 387.000"; // 3 x Rp 129.000
  const discountedPrice = "Rp 299.000";
  const discountPercentage = "Diskon 23%"; // (387000 - 299000) / 387000 * 100 ≈ 22.7%

  return (
    <Card className="w-full max-w-sm bg-white shadow-xl rounded-lg relative"> {/* Dihapus: overflow-hidden */}
      {/* Promo Tag with rotation */}
      <div 
        className="absolute top-0 right-0 transform rotate-45 translate-x-1/2 -translate-y-1/2 
                   bg-red-600 text-white text-xs font-bold uppercase 
                   px-6 py-1 origin-bottom-left shadow-lg z-10" /* Ditambahkan z-10 untuk memastikan di atas */
      >
        PROMO SPESIAL
      </div>

      <CardHeader className="bg-blue-700 text-white py-6 text-center">
        <CardTitle className="text-2xl font-bold">
          Koleksi Lengkap Ebook
        </CardTitle>
      </CardHeader>

      <CardContent className="p-6">
        {/* Price Info */}
        <div className="text-center mb-6">
          <p className="text-sm text-gray-600 line-through mb-1">{originalPrice}</p>
          <div className="inline-block bg-yellow-200 text-yellow-800 text-xs font-semibold px-2 py-1 rounded-full mb-2">
            {discountPercentage}
          </div>
          <p className="text-5xl font-bold text-gray-900">{discountedPrice}</p>
        </div>

        {/* Features/Ebooks List */}
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
          {/* Add more benefits if needed */}
        </ul>

        {/* Call to Action Button */}
        <Button className="w-full bg-yellow-400 hover:bg-yellow-500 text-blue-900 text-lg px-8 py-6 rounded-md font-semibold shadow-lg">
          Beli Koleksi Sekarang!
        </Button>

        {/* Money Back Guarantee (Optional) */}
        <p className="text-center text-gray-500 text-sm mt-4">
          Jaminan Uang Kembali
        </p>
      </CardContent>
    </Card>
  );
};

export default HeroPricingCard;