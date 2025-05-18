import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog";
import { Gift, Download, X } from 'lucide-react'; // Icons

interface FreeEbookOfferPopupProps {
  delaySeconds?: number; // Delay in seconds before showing the popup
  ebookTitle?: string;
  ebookDescription?: string;
  ctaText?: string;
  ctaLink?: string; // URL for the free ebook
  ebookImageUrl?: string; // Optional image for the ebook
}

const FreeEbookOfferPopup: React.FC<FreeEbookOfferPopupProps> = ({
  delaySeconds = 5,
  ebookTitle = "Dapatkan Ebook Gratis Spesial!",
  ebookDescription = "Panduan eksklusif untuk memulai perjalanan Anda di dunia digital. Klaim sekarang juga!",
  ctaText = "Download Ebook Gratis ",
  ctaLink = "https://lynk.id/orifin", // Placeholder link, ganti dengan URL sebenarnya
  ebookImageUrl,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      // Cek apakah pop-up sudah pernah ditampilkan (opsional, menggunakan localStorage)
      // const hasSeenPopup = localStorage.getItem('hasSeenFreeEbookPopup');
      // if (!hasSeenPopup) {
      //   setIsOpen(true);
      //   localStorage.setItem('hasSeenFreeEbookPopup', 'true');
      // }
      setIsOpen(true); // Untuk sekarang, selalu tampilkan
    }, delaySeconds * 1000);

    return () => clearTimeout(timer);
  }, [delaySeconds]);

  if (!isOpen) {
    return null;
  }

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="sm:max-w-md bg-gradient-to-br from-blue-600 to-purple-600 text-white p-0 rounded-xl shadow-2xl overflow-hidden">
        <DialogHeader className="p-6 pb-4 text-center">
          <div className="mx-auto bg-white/20 rounded-full p-3 w-fit mb-4">
            <Gift size={48} className="text-yellow-300" />
          </div>
          <DialogTitle className="text-3xl font-bold">{ebookTitle}</DialogTitle>
          <DialogDescription className="text-blue-100 mt-2 text-lg">
            {ebookDescription}
          </DialogDescription>
        </DialogHeader>
        
        {ebookImageUrl && (
          <div className="px-6 py-4 flex justify-center">
            <img 
              src={ebookImageUrl} 
              alt={ebookTitle} 
              className="rounded-md shadow-lg max-h-48 object-contain"
            />
          </div>
        )}

        <DialogFooter className="p-6 pt-4 sm:justify-center">
          <Button 
            asChild 
            size="lg" 
            className="bg-yellow-400 hover:bg-yellow-500 text-blue-900 font-bold text-lg px-8 py-6 w-full sm:w-auto transform transition-transform hover:scale-105"
          >
            <a href={ctaLink} target="_blank" rel="noopener noreferrer" onClick={() => setIsOpen(false)}>
              <Download size={20} className="mr-2" />
              {ctaText}
            </a>
          </Button>
        </DialogFooter>
        <DialogClose className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground">
          <X className="h-6 w-6 text-white bg-black/30 rounded-full p-1" />
          <span className="sr-only">Close</span>
        </DialogClose>
      </DialogContent>
    </Dialog>
  );
};

export default FreeEbookOfferPopup;