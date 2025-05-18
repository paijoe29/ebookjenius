import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { XCircle, CheckCircle2, ArrowRightCircle, TrendingUp } from 'lucide-react';

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
    <section id="comparison" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <TrendingUp size={48} className="mx-auto text-blue-600 mb-6" />
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Dari Bingung Menjadi Jenius: Transformasi Anda
          </h2>
          <p className="text-lg md:text-xl text-gray-700">
            Lihat perbedaan nyata yang akan Anda rasakan sebelum dan sesudah mendalami koleksi Ebook Jenius.
          </p>
        </div>

        <div className="relative">
          <div className="grid md:grid-cols-2 gap-8 items-stretch">
            <Card className="shadow-xl border-red-100 rounded-xl bg-red-50/30 flex flex-col p-6 md:p-8">
              <CardHeader className="bg-transparent pt-0 pb-4">
                <CardTitle className="text-2xl font-semibold text-red-700 flex items-center">
                  <XCircle className="mr-3 flex-shrink-0" size={32} />
                  Kondisi Sebelum Ebook
                </CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <ul className="space-y-4">
                  {beforePoints.map((point, index) => (
                    <li key={index} className="flex items-start text-base text-gray-700">
                      {point.icon}
                      <span>{point.text}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="shadow-xl border-green-100 rounded-xl bg-green-50/30 flex flex-col p-6 md:p-8">
              <CardHeader className="bg-transparent pt-0 pb-4">
                <CardTitle className="text-2xl font-semibold text-green-700 flex items-center">
                  <CheckCircle2 className="mr-3 flex-shrink-0" size={32} />
                  Hasil Setelah Ebook
                </CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <ul className="space-y-4">
                  {afterPoints.map((point, index) => (
                    <li key={index} className="flex items-start text-base text-gray-700">
                      {point.icon}
                      <span>{point.text}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
          <div className="hidden lg:flex absolute inset-0 items-center justify-center pointer-events-none">
            <div className="bg-white p-2 rounded-full shadow-md">
              <ArrowRightCircle size={40} className="text-gray-400" />
            </div>
          </div>
        </div>
        
        <div className="text-center mt-12 md:mt-16">
            <p className="text-lg md:text-xl text-gray-700">
                Investasi dalam diri Anda adalah langkah awal menuju kesuksesan. <span className="font-semibold text-blue-600">Mulai transformasi Anda sekarang!</span>
            </p>
        </div>
      </div>
    </section>
  );
};

export default ComparisonSection;