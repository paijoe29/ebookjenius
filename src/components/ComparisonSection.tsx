import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { XCircle, CheckCircle2, TrendingUp } from 'lucide-react';

const beforePoints = [
  { text: "Bingung harus mulai dari mana belajar AI, coding, atau digital marketing.", icon: <XCircle className="text-red-500 mr-3 flex-shrink-0" size={24} /> },
  { text: "Merasa ngoding itu sulit, membosankan, dan bikin stres.", icon: <XCircle className="text-red-500 mr-3 flex-shrink-0" size={24} /> },
  { text: "Strategi digital marketing yang dijalankan tidak membuahkan hasil.", icon: <XCircle className="text-red-500 mr-3 flex-shrink-0" size={24} /> },
  { text: "Kurang percaya diri dengan kemampuan di era digital.", icon: <XCircle className="text-red-500 mr-3 flex-shrink-0" size={24} /> },
  { text: "Hasil kerja dan proyek terasa biasa saja dan kurang inovatif.", icon: <XCircle className="text-red-500 mr-3 flex-shrink-0" size={24} /> },
];

const afterPoints = [
  { text: "Punya panduan jelas dan terstruktur untuk menguasai skill fundamental.", icon: <CheckCircle2 className="text-green-500 mr-3 flex-shrink-0" size={24} /> },
  { text: "Menemukan 'vibe' ngoding yang asyik, efisien, dan menyenangkan.", icon: <CheckCircle2 className="text-green-500 mr-3 flex-shrink-0" size={24} /> },
  { text: "Mampu merancang dan mengeksekusi strategi digital marketing yang jitu.", icon: <CheckCircle2 className="text-green-500 mr-3 flex-shrink-0" size={24} /> },
  { text: "Lebih percaya diri dan siap bersaing dengan keahlian baru.", icon: <CheckCircle2 className="text-green-500 mr-3 flex-shrink-0" size={24} /> },
  { text: "Mampu menghasilkan karya, solusi, dan inovasi yang berdampak.", icon: <CheckCircle2 className="text-green-500 mr-3 flex-shrink-0" size={24} /> },
];

const ComparisonSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Transformasi Anda Bersama Ebook Jenius
          </h2>
          <p className="text-base md:text-xl text-gray-700 max-w-2xl mx-auto">
            Lihat bagaimana Ebook Jenius dapat membantu Anda beralih dari keraguan menjadi keahlian.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-start">
          <Card className="shadow-lg border-red-200">
            <CardHeader className="bg-red-50">
              <CardTitle className="text-xl sm:text-2xl font-semibold text-red-700 flex items-center">
                <XCircle className="mr-2" size={28} />
                Sebelum Membeli Ebook
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <ul className="space-y-4">
                {beforePoints.map((point, index) => (
                  <li key={index} className="flex items-start text-sm sm:text-base text-gray-700">
                    {point.icon}
                    <span>{point.text}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card className="shadow-lg border-green-200">
            <CardHeader className="bg-green-50">
              <CardTitle className="text-xl sm:text-2xl font-semibold text-green-700 flex items-center">
                <CheckCircle2 className="mr-2" size={28} />
                Setelah Membeli Ebook
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <ul className="space-y-4">
                {afterPoints.map((point, index) => (
                  <li key={index} className="flex items-start text-sm sm:text-base text-gray-700">
                    {point.icon}
                    <span>{point.text}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
        
        <div className="text-center mt-12">
            <TrendingUp size={48} className="mx-auto text-blue-600 mb-4" />
            <p className="text-base md:text-xl text-gray-700">
                Investasi dalam diri Anda adalah investasi terbaik. Mulai transformasi Anda sekarang!
            </p>
        </div>

      </div>
    </section>
  );
};

export default ComparisonSection;