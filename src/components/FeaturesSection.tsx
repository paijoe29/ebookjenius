import React from 'react';
import { Button } from "@/components/ui/button";
import { Brain, Code, Megaphone, BookOpen, Rocket, Lightbulb } from 'lucide-react'; // Using Lucide icons

const features = [
  {
    icon: <Brain className="text-blue-600" size={24} />,
    title: "Kuasai Seni Berbicara dengan AI",
    description: "Pelajari cara membuat prompt yang efektif untuk mendapatkan hasil terbaik dari AI.",
  },
  {
    icon: <Code className="text-yellow-600" size={24} />,
    title: "Temukan Flow State dalam Ngoding",
    description: "Bangun kebiasaan dan pola pikir untuk ngoding dengan santai, efisien, dan penuh semangat.",
  },
  {
    icon: <Megaphone className="text-gray-900" size={24} />,
    title: "Dominasi Dunia Online",
    description: "Panduan lengkap strategi digital marketing yang terbukti efektif untuk bisnis Anda.",
  },
  {
    icon: <BookOpen className="text-green-600" size={24} />,
    title: "Panduan Praktis & Strategi Jitu",
    description: "Dapatkan langkah-langkah praktis dan strategi yang bisa langsung Anda terapkan.",
  },
  {
    icon: <Rocket className="text-red-600" size={24} />,
    title: "Ubah Potensi Menjadi Keahlian",
    description: "Ebook dirancang untuk membantu Anda mengembangkan skill yang dicari di era digital.",
  },
  {
    icon: <Lightbulb className="text-purple-600" size={24} />,
    title: "Belajar Santai & Efisien",
    description: "Nikmati proses belajar yang menyenangkan dan efektif sesuai kecepatan Anda.",
  },
];

const FeaturesSection = () => {
  return (
    <section className="container mx-auto px-4 py-16">
      <div className="flex flex-col md:flex-row items-center gap-12">
        {/* Left Column: Title, Description, Button */}
        <div className="md:w-1/2 text-center md:text-left mb-10 md:mb-0">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
            Mengapa Ebook Jenius?
          </h2>
          <p className="text-xl text-gray-700 mb-10 max-w-lg">
            Temukan manfaat utama yang akan Anda dapatkan dengan menguasai skill AI, coding, dan digital marketing melalui koleksi ebook kami.
          </p>
          <Button className="bg-blue-600 hover:bg-blue-700 text-white text-lg px-8 py-6 rounded-md">
            Lihat Koleksi Ebook
          </Button>
        </div>

        {/* Right Column: Features List */}
        <div className="md:w-1/2 w-full">
          <div className="relative pl-8 md:pl-12">
            {/* Dotted Line */}
            <div className="absolute left-0 md:left-4 top-0 bottom-0 w-0.5 bg-gray-300 border-l border-dashed border-gray-400"></div>

            <ul className="space-y-8">
              {features.map((feature, index) => (
                <li key={index} className="flex items-start relative">
                  {/* Icon with circle - Adjusted positioning */}
                  <div className="absolute left-[-20px] md:left-[-4px] top-0 flex items-center justify-center w-10 h-10 rounded-full bg-white shadow-md z-10">
                    {feature.icon}
                  </div>
                  {/* Feature Content - Added left padding */}
                  <div className="flex-1 pl-[56px] md:pl-[56px]">
                    <h3 className="text-xl font-semibold mb-2 text-gray-900">{feature.title}</h3>
                    <p className="text-gray-700">{feature.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;