import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Brain, Code, Megaphone, BookOpen, Rocket, Lightbulb } from 'lucide-react';

const features = [
  {
    icon: <Brain size={36} />,
    bgColor: "bg-blue-100",
    iconColor: "text-blue-600",
    title: "Kuasai Seni Berbicara dengan AI",
    description: "Pelajari cara membuat prompt yang efektif untuk mendapatkan hasil terbaik dari AI.",
  },
  {
    icon: <Code size={36} />,
    bgColor: "bg-yellow-100",
    iconColor: "text-yellow-600",
    title: "Temukan Flow State dalam Ngoding",
    description: "Bangun kebiasaan dan pola pikir untuk ngoding dengan santai, efisien, dan penuh semangat.",
  },
  {
    icon: <Megaphone size={36} />,
    bgColor: "bg-pink-100",
    iconColor: "text-pink-600",
    title: "Dominasi Dunia Online",
    description: "Panduan lengkap strategi digital marketing yang terbukti efektif untuk bisnis Anda.",
  },
  {
    icon: <BookOpen size={36} />,
    bgColor: "bg-green-100",
    iconColor: "text-green-600",
    title: "Panduan Praktis & Strategi Jitu",
    description: "Dapatkan langkah-langkah praktis dan strategi yang bisa langsung Anda terapkan.",
  },
  {
    icon: <Rocket size={36} />,
    bgColor: "bg-red-100",
    iconColor: "text-red-600",
    title: "Ubah Potensi Menjadi Keahlian",
    description: "Ebook dirancang untuk membantu Anda mengembangkan skill yang dicari di era digital.",
  },
  {
    icon: <Lightbulb size={36} />,
    bgColor: "bg-purple-100",
    iconColor: "text-purple-600",
    title: "Belajar Santai & Efisien",
    description: "Nikmati proses belajar yang menyenangkan dan efektif sesuai kecepatan Anda.",
  },
];

const FeaturesSection = () => {
  return (
    <section id="features" className="py-16 md:py-24 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-gray-900">
            Mengapa Ebook Jenius Pilihan Tepat?
          </h2>
          <p className="text-lg md:text-xl text-gray-700">
            Kami tidak hanya menjual ebook, kami menawarkan transformasi. Dapatkan skill fundamental yang relevan dengan panduan yang mudah dicerna dan langsung bisa dipraktikkan.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-xl overflow-hidden flex flex-col text-center">
              <CardHeader className="items-center pt-8 pb-4">
                <div className={`p-4 rounded-full inline-block mb-5 ${feature.bgColor}`}>
                  {React.cloneElement(feature.icon, { className: feature.iconColor })}
                </div>
                <CardTitle className="text-xl font-semibold text-gray-800">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-gray-600 flex-grow pb-8">
                <p>{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="text-center mt-12 md:mt-16">
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white text-base px-8 py-4 md:text-lg md:px-10 md:py-5 rounded-lg font-semibold">
            Lihat Semua Koleksi Ebook
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;