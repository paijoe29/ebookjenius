import React from 'react';
import TestimonialCard from './TestimonialCard';
import { MessageSquareQuote } from 'lucide-react';

const testimonialsData = [
  {
    name: "Andi Pratama",
    title: "Mahasiswa IT",
    testimonial: "Ebook 'Prompt Jenius' benar-benar membuka mata saya tentang cara berinteraksi dengan AI. Sekarang saya bisa mendapatkan hasil yang jauh lebih baik dan relevan!",
    avatarSrc: "https://i.pravatar.cc/150?u=andi",
    rating: 5,
  },
  {
    name: "Siti Aminah",
    title: "Freelance Web Developer",
    testimonial: "'Vibe Coding Jenius' membantu saya menemukan kembali semangat ngoding. Tips dan triknya sangat praktis dan mudah diterapkan. Highly recommended!",
    avatarSrc: "https://i.pravatar.cc/150?u=siti",
    rating: 5,
  },
  {
    name: "Budi Santoso",
    title: "Pemilik UKM",
    testimonial: "Setelah membaca 'Digital Marketing Jenius', omset bisnis saya meningkat signifikan. Panduannya lengkap dan mudah dipahami, bahkan untuk pemula seperti saya.",
    avatarSrc: "https://i.pravatar.cc/150?u=budi",
    rating: 4,
  },
  {
    name: "Rina Wijaya",
    title: "Content Creator",
    testimonial: "Kombinasi ketiga ebook ini adalah investasi terbaik untuk karir digital saya. Materinya up-to-date dan sangat aplikatif. Terima kasih Ebook Jenius!",
    avatarSrc: "https://i.pravatar.cc/150?u=rina",
    rating: 5,
  },
];

const TestimonialsSection: React.FC = () => {
  return (
    <section id="testimonials" className="py-16 md:py-24 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <MessageSquareQuote size={48} className="mx-auto text-blue-600 mb-6" />
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Apa Kata Mereka yang Telah Bergabung?
          </h2>
          <p className="text-lg md:text-xl text-gray-700">
            Ribuan orang telah merasakan manfaatnya. Jangan hanya percaya kata kami, dengar langsung dari mereka!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {testimonialsData.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              name={testimonial.name}
              title={testimonial.title}
              testimonial={testimonial.testimonial}
              avatarSrc={testimonial.avatarSrc}
              rating={testimonial.rating}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;