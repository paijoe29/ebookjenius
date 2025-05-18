import React from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Mail, Send, MessageCircleQuestion } from 'lucide-react';

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
    <section id="contact" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-8 md:gap-12 md:items-stretch"> {/* Changed to items-stretch */}
          {/* Left Column: Text Content in a Card */}
          <div className="md:w-1/2 w-full">
            <Card className="shadow-xl border-gray-200 h-full flex flex-col"> {/* Added h-full and flex flex-col */}
              <CardHeader className="text-center md:text-left">
                <MessageCircleQuestion size={56} className="mx-auto md:mx-0 text-blue-600 mb-4" />
                <CardTitle className="text-3xl md:text-4xl font-bold text-gray-900">
                  Punya Pertanyaan?
                </CardTitle>
              </CardHeader>
              <CardContent className="text-gray-700 flex-grow text-center md:text-left"> {/* Added flex-grow */}
                <p className="text-lg mb-4">
                  Kami siap membantu! Jangan ragu untuk menghubungi kami jika Anda memiliki pertanyaan, masukan, atau ingin berdiskusi lebih lanjut mengenai ebook kami.
                </p>
                <p className="text-base">
                  Isi formulir di samping atau hubungi kami melalui email di <a href="mailto:support@ebookjenius.com" className="text-blue-600 hover:underline">support@ebookjenius.com</a>.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Right Column: Contact Form Card */}
          <div className="md:w-1/2 w-full">
            <Card className="shadow-xl border-gray-200 h-full flex flex-col"> {/* Added h-full and flex flex-col */}
              <CardHeader>
                <div className="flex items-center mb-2">
                  <Mail size={28} className="text-blue-600 mr-3" />
                  <CardTitle className="text-2xl font-semibold text-gray-900">
                    Kirim Pesan Langsung
                  </CardTitle>
                </div>
                <CardDescription className="text-gray-600">
                  Kami akan segera merespons pesan Anda.
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-grow"> {/* Added flex-grow to allow button to be at bottom if needed */}
                <form onSubmit={handleSubmit} className="space-y-6 flex flex-col h-full">
                  <div className="flex-grow space-y-6"> {/* Group form fields */}
                    <div>
                      <Label htmlFor="name" className="text-base font-medium text-gray-800">Nama Lengkap</Label>
                      <Input 
                        type="text" 
                        id="name" 
                        name="name" 
                        placeholder="Masukkan nama Anda" 
                        required 
                        className="mt-1 text-base"
                      />
                    </div>
                    <div>
                      <Label htmlFor="email" className="text-base font-medium text-gray-800">Alamat Email</Label>
                      <Input 
                        type="email" 
                        id="email" 
                        name="email" 
                        placeholder="email@contoh.com" 
                        required 
                        className="mt-1 text-base"
                      />
                    </div>
                    <div>
                      <Label htmlFor="message" className="text-base font-medium text-gray-800">Pesan Anda</Label>
                      <Textarea 
                        id="message" 
                        name="message" 
                        placeholder="Tuliskan pesan Anda di sini..." 
                        rows={4} 
                        required 
                        className="mt-1 text-base"
                      />
                    </div>
                  </div>
                  <Button 
                    type="submit" 
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white text-lg py-3 rounded-md font-semibold mt-auto" /* Added mt-auto */
                    size="lg"
                  >
                    Kirim Pesan
                    <Send size={20} className="ml-2" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactFormSection;