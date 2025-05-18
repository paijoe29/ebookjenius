import React from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Mail, Send, MessageCircleQuestion, Phone } from 'lucide-react';

const ContactFormSection: React.FC = () => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const data = Object.fromEntries(formData.entries());
    console.log("Form submitted:", data);
    alert("Pesan Anda telah dikirim! (Simulasi)");
    event.currentTarget.reset();
  };

  return (
    <section id="contact-form" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Kami Siap Mendengarkan Anda
          </h2>
          <p className="text-lg md:text-xl text-gray-700">
            Punya pertanyaan, saran, atau ingin berkolaborasi? Jangan ragu untuk menghubungi tim Ebook Jenius.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-stretch">
          <Card className="shadow-xl border-transparent rounded-xl bg-slate-50/70 flex flex-col p-6 md:p-8">
            <CardHeader className="pb-6">
              <div className="p-3 bg-blue-100 rounded-full inline-block mb-5">
                <MessageCircleQuestion size={36} className="text-blue-600" />
              </div>
              <CardTitle className="text-2xl md:text-3xl font-bold text-gray-900">
                Info Kontak & Bantuan
              </CardTitle>
              <CardDescription className="text-gray-600 mt-2 text-base">
                Kami berkomitmen untuk memberikan dukungan terbaik.
              </CardDescription>
            </CardHeader>
            <CardContent className="text-gray-700 flex-grow space-y-6">
              <p className="text-base">
                Anda bisa menghubungi kami melalui formulir di samping, atau langsung melalui:
              </p>
              <div>
                <h4 className="font-semibold text-gray-800 mb-1 flex items-center">
                  <Mail size={20} className="mr-2.5 text-blue-600 flex-shrink-0" /> Email Dukungan
                </h4>
                <a href="mailto:support@ebookjenius.com" className="text-blue-600 hover:underline break-all">support@ebookjenius.com</a>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 mb-1 flex items-center">
                  <Phone size={20} className="mr-2.5 text-blue-600 flex-shrink-0" /> WhatsApp (Chat Only)
                </h4>
                <a href="https://wa.me/6281234567890" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                  +62 812-3456-7890 (Contoh)
                </a>
              </div>
              <p className="text-sm text-gray-500 pt-4 border-t border-slate-200">
                Tim kami akan merespons dalam 1x24 jam kerja.
              </p>
            </CardContent>
          </Card>

          <Card className="shadow-xl border-transparent rounded-xl bg-slate-50/70 flex flex-col p-6 md:p-8">
            <CardHeader className="pb-6">
               <div className="p-3 bg-green-100 rounded-full inline-block mb-5">
                <Send size={36} className="text-green-600" />
              </div>
              <CardTitle className="text-2xl md:text-3xl font-semibold text-gray-900">
                Kirim Pesan Langsung
              </CardTitle>
              <CardDescription className="text-gray-600 mt-2 text-base">
                Isi formulir di bawah ini dan kami akan segera menghubungi Anda.
              </CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
              <form onSubmit={handleSubmit} className="space-y-6 flex flex-col h-full">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-5">
                  <div>
                    <Label htmlFor="name" className="text-sm font-medium text-gray-800">Nama Lengkap</Label>
                    <Input type="text" id="name" name="name" placeholder="Nama Anda" required className="mt-1 text-base bg-white"/>
                  </div>
                  <div>
                    <Label htmlFor="email" className="text-sm font-medium text-gray-800">Alamat Email</Label>
                    <Input type="email" id="email" name="email" placeholder="email@contoh.com" required className="mt-1 text-base bg-white"/>
                  </div>
                </div>
                <div>
                  <Label htmlFor="subject" className="text-sm font-medium text-gray-800">Subjek Pesan</Label>
                  <Input type="text" id="subject" name="subject" placeholder="Contoh: Pertanyaan tentang Ebook" required className="mt-1 text-base bg-white"/>
                </div>
                <div>
                  <Label htmlFor="message" className="text-sm font-medium text-gray-800">Pesan Anda</Label>
                  <Textarea id="message" name="message" placeholder="Tuliskan detail pesan Anda di sini..." rows={5} required className="mt-1 text-base bg-white"/>
                </div>
                <Button 
                  type="submit" 
                  className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white text-base py-3 px-8 rounded-lg font-semibold mt-auto self-start"
                  size="lg"
                >
                  Kirim Pesan Sekarang
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactFormSection;