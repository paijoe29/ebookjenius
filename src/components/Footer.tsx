import React from 'react';
import { Button } from "@/components/ui/button";
import { Twitter, Instagram, Linkedin, Dribbble, Copy, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const copyToClipboard = () => {
    navigator.clipboard.writeText("support@ebookjenius.com")
      .then(() => {
        // Potentially show a toast notification for success
        console.log("Email copied to clipboard!");
      })
      .catch(err => {
        console.error("Failed to copy email: ", err);
      });
  };

  return (
    <footer className="bg-white text-gray-800 py-12">
      <div className="container mx-auto px-4">
        {/* Top Section: Contact Info */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10">
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl font-semibold mb-2">
              Jangan ragu untuk menghubungi kami! ✌️
            </h2>
            <p className="text-gray-600 max-w-md">
              Punya pertanyaan atau masukan? Kirimkan email atau hubungi kami melalui media sosial.
            </p>
            <Button 
              variant="outline" 
              className="mt-4 bg-gray-900 text-white hover:bg-gray-800 hover:text-white"
              onClick={copyToClipboard}
            >
              support@ebookjenius.com
              <Copy size={16} className="ml-2" />
            </Button>
          </div>
          <div className="flex space-x-4">
            <a href="#" aria-label="Twitter" className="text-gray-500 hover:text-blue-500">
              <Twitter size={24} />
            </a>
            <a href="#" aria-label="Instagram" className="text-gray-500 hover:text-pink-500">
              <Instagram size={24} />
            </a>
            <a href="#" aria-label="Dribbble" className="text-gray-500 hover:text-pink-600">
              <Dribbble size={24} />
            </a>
            <a href="#" aria-label="LinkedIn" className="text-gray-500 hover:text-blue-700">
              <Linkedin size={24} />
            </a>
          </div>
        </div>

        {/* Divider */}
        <hr className="border-gray-200 mb-8" />

        {/* Bottom Section: Credits and Copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p className="flex items-center mb-2 md:mb-0">
            Dibuat dengan <Heart size={16} className="text-red-500 mx-1" /> oleh Tim Ebook Jenius
          </p>
          <p>&copy; {currentYear} Ebook Jenius. Semua Hak Cipta Dilindungi.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;