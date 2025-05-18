import React, { useState, useEffect } from 'react'; // Import useState and useEffect
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"; // Import Card components

const CallToAction = () => {
  const [showCombinedPrice, setShowCombinedPrice] = useState(false);

  useEffect(() => {
    // Set a timer to show the combined price after 2 seconds
    const timer = setTimeout(() => {
      setShowCombinedPrice(true);
    }, 2000); // 2000ms = 2 seconds

    // Cleanup the timer if the component unmounts
    return () => clearTimeout(timer);
  }, []); // Empty dependency array means this effect runs only once on mount

  return (
    <section className="bg-blue-600 text-white py-16 text-center">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Siap Mengubah Potensi Anda?
        </h2>
        <p className="text-xl md:text-2xl mb-10 max-w-2xl mx-auto">
          Jangan lewatkan kesempatan untuk menguasai AI, coding, dan digital marketing. Dapatkan koleksi ebook jenius sekarang juga!
        </p>

        {/* Integrated Pricing Card */}
        {/* Added margin-top and centered the card */}
        <div className="flex justify-center mt-12">
          <Card className="w-full max-w-sm bg-white shadow-lg rounded-lg overflow-hidden text-gray-900"> {/* Added text-gray-900 for text color */}
            <CardHeader className="bg-blue-700 text-white py-6"> {/* Changed header color slightly */}
              <CardTitle className="text-3xl font-bold">
                Koleksi Lengkap Ebook
              </CardTitle>
            </CardHeader>
            <CardContent className="p-8">
              {/* Price Display with Animation */}
              {/* Added a fixed height to prevent layout shift during transition */}
              <div className="mb-6 h-16 flex items-center justify-center relative">
                {/* Initial state: Calculation */}
                {/* Use opacity and absolute positioning for smooth transition */}
                <div className={`absolute inset-0 flex items-center justify-center transition-opacity duration-500 ease-in-out ${showCombinedPrice ? 'opacity-0' : 'opacity-100'}`}>
                  <span className="text-2xl font-bold text-gray-900">3 Ebook = 3 x Rp 129.000</span>
                </div>

                {/* Final state: Combined price */}
                {/* Use opacity and scale for smooth transition */}
                <div className={`absolute inset-0 flex items-center justify-center transition-all duration-500 ease-in-out ${showCombinedPrice ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
                   <span className="text-5xl font-bold text-gray-900">
                     Rp 299.000
                   </span>
                </div>
              </div>
              <p className="text-gray-700 mb-8 leading-relaxed">
                Dapatkan akses ke semua ebook: Prompt Jenius, Vibe Coding Jenius, dan Digital Marketing Jenius. Panduan lengkap untuk menguasai skill digital masa kini.
              </p>
              {/* Button for the collection */}
              <Button className="w-full bg-yellow-400 hover:bg-yellow-500 text-blue-900 text-lg px-8 py-6 rounded-md font-semibold">
                Beli Koleksi Sekarang!
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Original CTA Button (Optional - can keep or remove) */}
        {/* Keeping it for now, but the card button is more prominent */}
        {/* <Button className="bg-yellow-400 hover:bg-yellow-500 text-blue-900 text-xl px-8 py-7 rounded-full font-semibold shadow-lg transform transition-transform hover:scale-105 mt-8">
          Beli Semua Ebook Sekarang!
        </Button> */}

      </div>
    </section>
  );
};

export default CallToAction;